"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import axios from "axios";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  address: z.string().min(10, {
    message: " Address must have 10 chars at least",
  }),
  instruction: z.string().min(10, {
    message: " Instruction must have 10 chars at least",
  }),
  quantity: z.number().min(1, {}),
});

const OrderPage = () => {
  const router = useRouter();
  const [Quantity, setQuantity] = useState<number>(1);
  const session = useKindeBrowserClient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Jashandeep Singh",
      phoneNumber: "9912399123",
      address: "address wo keya hota mere bhai ham pe to na ha ",
      instruction: "agar deliver keya to dekh lena",
      quantity: 1,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await axios.post(`/api/order`, {
        ...values,
        quantity: Quantity,
      });
      router.push(response.data.url);
    } catch (error) {
      console.log(error);
    }
  }
  if (session.isLoading) {
    return <div className="container md:mt-12 mt-6">Loading auth...</div>;
  }
  if (session.isAuthenticated === false) {
    router.push("/api/auth/login?");
  }
  if (session.isAuthenticated) {
    return (
      <div className="container md:mt-12 mt-6">
        {/* <h1 className="text-lg font-bold">Order Details</h1>
      <p className="text-sm text-muted-foreground ">
        Enter your address details{" "}
      </p> */}

        <div className="">
          <h2 className="text-lg font-bold">Plant Quantity</h2>
          <p className="text-sm text-muted-foreground">Price of 1 is ₹100.</p>

          <div className="mt-6">
            <h2 className="text-lg font-bold text-muted-foreground flex gap-2">
              Quantity:{" "}
              <span className="text-foreground">{String(Quantity)}</span> at
              <span className="text-foreground">₹{Quantity * 100}</span>
            </h2>

            <div className="flex flex-wrap gap-2 items-center mt-4">
              <button
                onClick={() => {
                  Quantity > 1 && setQuantity(Quantity - 1);
                }}
                className="minus border border-primary rounded-full p-1 hover:bg-primary text-primary hover:text-white duration-300"
              >
                <Minus size={16} />
              </button>
              <span className="px-3">{String(Quantity)}</span>
              <button
                onClick={() => {
                  setQuantity(Quantity + 1);
                }}
                className="plus border border-primary rounded-full p-1 hover:bg-primary text-primary hover:text-white duration-300"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>

        <hr className="my-8" />
        <div>
          <h2 className="text-lg font-bold ">Address</h2>
          <p className="text-sm text-muted-foreground">
            Your address where you want to deliver these plants.
          </p>
          <div className="">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className=" grid gap-8 md:grid-cols-2 mt-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Jashandeep Singh" {...field} />
                      </FormControl>
                      <FormDescription>
                        Your full name as per your ID
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="99123-99123"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Without including the country code.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a little about your address where you want to ship the plants"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Your complete address</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="instruction"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Instruction</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Don't ship on sunday"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Any instructions that you want, we would like to follow.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Proceed to Pay</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

export default OrderPage;
