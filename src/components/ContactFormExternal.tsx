"use client"
import * as React from "react"

interface IContactFormExternalProps {
  className?: string;
}

export function ContactFormExternal({ className }: IContactFormExternalProps) {
  return (
    <iframe src="https://share-na2.hsforms.com/29rHuhh_1SNuWu8urGMlFpg40eyp0" width="100%" height="600" className="w-full h-[1000px]">
    </iframe>
  )
}
