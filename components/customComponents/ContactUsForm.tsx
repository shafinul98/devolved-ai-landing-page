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
      <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>

        <div className="flex flex-col md:flex-row lg:flex-row gap-2 mt-5">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="input-field w-full md:w-[14.5625rem] h-[3.75rem] rounded-[0.3125rem] border-2 border-[#D3D3D3] backdrop-blur-md text-normal text-[#495167] leading-[1.875rem] text-[1rem]"
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
              <FormItem>
                <FormControl>
                  <Input
                    className="input-field w-full md:w-[14.5625rem] h-[3.75rem] rounded-[0.3125rem] border-2 border-[#D3D3D3] backdrop-blur-md text-normal text-[#495167] leading-[1.875rem] text-[1rem]"
                    placeholder="Last Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row gap-2 mt-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="input-field w-full md:w-[30rem] h-[3.75rem] rounded-[0.3125rem] border-2 border-[#D3D3D3] backdrop-blur-md text-normal text-[#495167] leading-[1.875rem] text-[1rem]"
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

        <div className="flex flex-col md:flex-row lg:flex-row gap-2 mt-5 mb-5">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="input-field w-full md:w-[30rem] h-[10.125rem] rounded-[0.3125rem] border-2 border-[#D3D3D3] backdrop-blur-md text-normal text-[#495167] leading-[1.875rem] text-[1rem]"
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
          <Alert className="w-full bg-green-500 text-white">
            <AlertTitle>Your Comment Has Been Sent</AlertTitle>
          </Alert>
        ) : (
          <>
            <Button
              type="submit"
              title="Submit"
              extraStyles=" text-white text-[1.125rem] bg-[#FF6F00] font-medium rounded-[0.3125rem] w-full md:w-[30rem] md:h-[3rem]"
              disabled={formState.isValidating}
            />
          </>
        )}
      </form>
    </Form>


  );
};


export default ContactUsForm;
