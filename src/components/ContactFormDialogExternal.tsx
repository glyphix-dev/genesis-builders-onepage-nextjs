"use client"
import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { ContactFormExternal } from '@/components/ContactFormExternal';

interface IContactFormExternalProps {
  className?: string;
}

export function ContactFormDialogExternal({ className }: IContactFormExternalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" size="lg" className="font-bolder text-2xl">Get Started</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Take the First Step</DialogTitle>
          <DialogDescription>
            Tell us a bit about your needs so we can get started on rebuilding your home.
          </DialogDescription>
        </DialogHeader>
        <ContactFormExternal className="w-[512px] -m-10" />
      </DialogContent>
    </Dialog>
  )
}
