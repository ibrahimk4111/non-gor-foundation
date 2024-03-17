"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "example@gmail.com",
  }),
  number: z.number().min(2, {
    message: "Minimum Donation 10 taka.",
  })
});

const DonateForm: React.FC = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      number: 10
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("form values");
  }

  return (
    <div className=" max-w-[1280px] mx-auto shadow-lg shadow-slate-300 rounded-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" flex justify-start items-center p-5 gap-5">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem >
                  <FormControl>
                    <Input
                      placeholder="Your Name"
                      {...field}
                      className=" text-xl "
                    />
                  </FormControl>
                  <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem >
                  <FormControl>
                    <Input
                      placeholder="Email / Phone"
                      {...field}
                      className=" text-xl "
                    />
                  </FormControl>
                  <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem >
                  <FormControl>
                    <Input
                      placeholder="Donation Amount"
                      {...field}
                      className=" text-xl "
                    />
                  </FormControl>
                  <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <button type="submit" className="py-3 px-5 text-white bg-green-900 rounded-md ">Submit</button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DonateForm;
