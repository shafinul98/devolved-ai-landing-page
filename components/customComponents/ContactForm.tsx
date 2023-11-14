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
      form.reset();
    }
  }, [isMessageSent]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex md:flex-col lg:flex-row gap-3 md:gap-y-5 w-full lg:gap-0 3xl:container">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="md:px-[7.5rem] lg:px-0">
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
                <FormItem className="md:px-[7.5rem] lg:px-2">
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
        
        <div className="w-full 3xl:container">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full md:px-[7.5rem]">
                <FormControl>
                  <Input
                    className="h-[3.5rem]"
                    placeholder="Email*"
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

        <div className="w-full md:px-[7.5rem] 3xl:container">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Comments"
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

        {isMessageSent ? (
          <Alert className="w-1/2 bg-green-500 text-white">
            <AlertTitle>Your Message Has Been Sent</AlertTitle>
          </Alert>
        ) : (
          <>
            <Button
              type="submit"
              title="Submit"
              extraStyles=" bg-[#FF6F00] w-1/2 lg:w-1/4 mx-auto text-white"
              disabled={formState.isValidating}
            />
          </>
        )}
      </form>
    </Form>
  );
}
function register(arg0: string, arg1: { required: boolean; }): React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> {
  throw new Error("Function not implemented.");
}

