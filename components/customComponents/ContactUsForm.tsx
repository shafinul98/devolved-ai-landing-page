"use client";

import React, { useState, useRef, useEffect } from "react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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

import { useForm, SubmitHandler } from 'react-hook-form';
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

const ContactUsForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
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
      <form className="flex flex-col mt-6" onSubmit={form.handleSubmit(onSubmit)}>
      <div className="flex md:flex-col lg:flex-row gap-2 md:gap-y-5 lg:gap-0 3xl:container">
        <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="md:px-[7.5rem] lg:px-0 lg:me-[5rem]">
                  <FormControl>
                    <Input
                      className="w-[12.5rem] h-[3.5rem] p-3 border border-[#d9e2ec] rounded-md focus:outline-none focus:border-blue-500"
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
                <FormItem className="md:px-[7.5rem] lg:px-2 lg:me-[5rem]">
                  <FormControl>
                    <Input
                      className="w-[12.5rem] h-[3.5rem] p-3 border border-[#d9e2ec] rounded-md focus:outline-none focus:border-blue-500"
                      placeholder="Last Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
          />
      </div>

      <div className="flex md:flex-col lg:flex-row gap-2 md:gap-y-5 lg:gap-0 3xl:container mt-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="md:px-[7.5rem] lg:px-[0rem]">
                <FormControl>
                  <Input
                    className="w-[30.5rem] h-[3.5rem] p-3 border border-[#d9e2ec] rounded-md focus:outline-none focus:border-blue-500"
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

      <div className="flex md:flex-col lg:flex-row gap-2 md:gap-y-5 lg:gap-0 3xl:container mt-5 mb-5">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="md:px-[7.5rem] lg:px-[0rem]">
                <FormControl>
                  <Textarea
                  className="w-[30.5rem] h-[3.5rem] p-3 border border-[#d9e2ec] rounded-md focus:outline-none focus:border-blue-500"
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
              extraStyles=" bg-[#FF6F00] text-white font-normal rounded-[0.3125rem] w-[25rem] md:w-[30.5rem] md:h-[3rem]"
              disabled={formState.isValidating}
            />
          </>
        )}
      </form>
    </Form>
  );
};


export default ContactUsForm;
