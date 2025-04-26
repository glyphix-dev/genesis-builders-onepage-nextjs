"use client"
import * as React from "react"
import Script from "next/script"
import { cn } from "@/lib/utils"
interface IContactFormExternalProps {
  className?: string;
}

export function ContactFormExternal({ className }: IContactFormExternalProps) {
  return (
    <div className={cn("-mx-10", className)}>
      <Script src="https://js-na2.hsforms.net/forms/embed/242562852.js" />
      <div className="hs-form-frame" data-region="na2" data-form-id="f6b1ee86-1ff5-48db-96bb-cbab18c945a6" data-portal-id="242562852"></div>
    </div>
  )
}
