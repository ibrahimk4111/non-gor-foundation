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
  }),
});

const page: React.FC = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      number: 10,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("form values");
  }

  return (
    <section className="my-8 lg:px-5">
      <div className=" container mx-auto ">
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-5 ">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" flex flex-col justify-start items-start md:gap-5 gap-2 border-2 rounded-md bg-white p-5"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
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
                  <FormItem>
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
                  <FormItem>
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
                <button
                  type="submit"
                  className="py-2 px-5 text-white bg-green-700 rounded-md "
                >
                  Donate
                </button>
              </div>
            </form>
          </Form>
          <section>
            <div className=" border-2 rounded-lg mb-5 p-5 "> 
                <h1 className=" text-xl font-semibold py-2" >Where we are ?</h1>
                <div className=" h-60 w-full ">
                    here
                </div>
            </div>
            <div  className=" border-2 rounded-lg mb-5 p-5 flex flex-col gap-3 ">
              <h1 className=" text-xl font-semibold" >Contact Details</h1>
              <hr className=" h-1 " />
              <div>
                <h1 className=" text-xl font-semibold py-2">Address</h1>
                <p>As-Sunnah Foundation</p>
                <p>
                  Plot-60, Road-3, Block-C, (Opposite Siraj Convention Center)
                  Aftabnagar, Dhaka-1212
                </p>
              </div>

              <div>
                <h1 className=" text-xl font-semibold py-2">Phone</h1>
                <p>+88-09610-001089</p>
              </div>
              <div>
                <h1 className=" text-xl font-semibold py-2">Email</h1>
                <p>assunnahfoundationbd@gmail.com</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default page;
