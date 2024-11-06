"use client";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import LoginButton from "../buttons/LoginButton";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export const FormSchema = z.object({
  name: z.string().min(2, {
    message: "this field must contains at least 2 character",
  }),
  email: z.string().email({
    message: "invalid email address",
  }),
  password: z.string().min(5, {
    message: "this field must contains at least 8 character",
  }),
});

const RegisterFormDemo = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const { name, email, password } = data;
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      response.status === 201 && router.push("/login");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Link href="/">
        <Image
          src="/assets/images/stidax-logo.png"
          alt="image"
          width={118}
          height={40}
        />
      </Link>
      <p className="font-semibold" style={{ fontSize: "50px" }}>
        Register Now
      </p>
      <p className="font-medium text-gray-600">please enter your details</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col p-20 gap-5 "
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Your name"
                    name="name"
                    autoComplete="name"
                    required
                    style={{ height: "48px" }}
                  />
                </FormControl>
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Your email address"
                    name="email"
                    autoComplete="email"
                    required
                    style={{ height: "48px" }}
                  />
                </FormControl>
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Enter a strong password"
                    name="password"
                    autoComplete="password"
                    required
                    style={{ height: "48px" }}
                  />
                </FormControl>
              </FormItem>
            )}
          ></FormField>

          <LoginButton name="Register" />
          <div className="flex items-center gap-2 justify-center">
            <p style={{ color: "gray"}}>
            Already have an account?
            </p>
          <Link
            href={"/login"}
            style={{ color: "black" }}
            className="font-bold"
          >
            Login
          </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RegisterFormDemo;
