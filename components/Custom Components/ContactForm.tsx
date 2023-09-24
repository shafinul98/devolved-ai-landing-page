"use client";
import React, { useState, useRef, useEffect } from "react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Button from "./Button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

const FormSchema = z.object({
  firstName: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  lastName: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  email: z.string().email({ message: "Invalid Email Address" }),
  message: z.string({
    required_error: "Message is required",
    invalid_type_error: "Message must be a string",
  }),
});

export function ContactForm() {
  const [isMessageSent, setMessageSent] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const { formState } = useForm();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("HTTP error! status: " + response.status);
      }
      setMessageSent(true);
    } catch (error: any) {
      alert("There was a problem with sending the question " + error.message);
    }
  }

  useEffect(() => {
    if (isMessageSent && formRef) {
      setTimeout(() => {
        form.reset();
        setMessageSent(false);
      }, 2000);
    }
  }, [isMessageSent]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col items-center justify-center my-10 md:mx-[.25rem] lg:mx-[12.5rem]"
      >
        <div className="flex md:flex-col lg:flex-row gap-2 md:gap-y-5 w-full lg:gap-0">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full md:px-[7.5rem] lg:px-0 lg:ms-[5rem]">
                <FormLabel className="font-bold">First Name*</FormLabel>
                <FormControl>
                  <Input
                    className="h-[3.5rem]"
                    placeholder="First Name"
                    {...field}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full md:px-[7.5rem] lg:px-2 lg:me-[5rem]">
                <FormLabel className="font-bold">Last Name</FormLabel>
                <FormControl>
                  <Input
                    className="h-[3.5rem]"
                    placeholder="Last Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full md:px-[7.5rem] lg:px-[5rem]">
                <FormLabel className="font-bold">Email*</FormLabel>
                <FormControl>
                  <Input
                    className="h-[3.5rem]"
                    placeholder="Email"
                    type="email"
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="w-full md:px-[7.5rem] lg:px-[5rem]">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Message*</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    {...field}
                    rows={6}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {isMessageSent === true ? (
          <Alert className="w-1/2 bg-green-500 text-white">
            <AlertTitle>Your Message Has Been Sent</AlertTitle>
          </Alert>
        ) : (
          <>
            <Button
              type="submit"
              title="Submit"
              extraStyles=" bg-[#0074D9] w-1/2 lg:w-1/4 mx-auto text-white"
              disabled={formState.isValidating}
            />
          </>
        )}
      </form>
    </Form>
  );
}
