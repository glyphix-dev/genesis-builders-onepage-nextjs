"use client"
import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// import { toast } from "@/components/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
import { tryCatch } from "@/lib/tryCatch"
import validator from 'validator';

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  contactMethod: z.string().min(1, {
    message: "Please select a contact method.",
  }),
  start: z.string().min(1, {
    message: "Please select a timeframe.",
  }),
  phone: z.string().refine(validator.isMobilePhone, {
    message: "Please enter your phone number.",
  }),
  address: z.string().min(1, {
    message: "Please enter the address of the property you’re looking to rebuild.",
  }),
  // message: z.string().min(2, {
  //   message: "Message must be at least 2 characters.",
  // }),

})

export function ContactForm({ buttonText }: { buttonText?: string }) {
  const [loading, setLoading] = React.useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      // message: "",
      // contactMethod: "",
      // start: "",
      phone: "",
      address: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('submit', data)
    setLoading(true);
    const { data: response } = await tryCatch(
      fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      })
    );

    if (!response?.ok) {
      toast.error(response?.statusText || "Message failed to send");
      setLoading(false);
      return;
    }

    toast.success("Message sent successfully");
    setLoading(false);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 not-prose">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address of the property you’re looking to rebuild</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription className="text-left">
                {"(This helps us understand your property’s specific requirements such as zoning/rebuilding requirements, etc.)"}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  // placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can <span>@mention</span> other users and organizations.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        {/* <FormField
          control={form.control}
          name="contactMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Contact Method</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pick one" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="phone">Phone</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="text">Text/SMS</SelectItem>
                  <SelectItem value="any">Any of the above</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="start"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How soon would you like to start?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pick one" className="bg-white" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="30 days">30 Days</SelectItem>
                  <SelectItem value="60 days">60 Days</SelectItem>
                  <SelectItem value="90 days">90 Days</SelectItem>
                  <SelectItem value="sooner">Sooner</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        {loading ? <Button type="submit" disabled>Sending...</Button> : <Button type="submit" onClick={() => onSubmit(form.getValues())}>{buttonText || "Submit"}</Button>}
      </form>
    </Form>
  )
}
