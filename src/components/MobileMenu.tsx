"use client";

import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';
import { MenuIcon } from 'lucide-react'
import { v4 as uuidv4 } from 'uuid';
import { cn } from '@/lib/utils';

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

interface IMobileMenuProps {
  menu: {
    _key: string;
    label: string;
    url: string;
  }[];
  children?: React.ReactNode;
  className?: string;
}

const MobileMenu: React.FunctionComponent<IMobileMenuProps> = ({ children, menu, className }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <span className="sr-only">Open Menu</span>
          <MenuIcon className="size-6 fill-current" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-8">
          <DropdownMenuLabel>
            {children}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {menu?.map((item: { _key: string, label: string, url: string }) => (
            <DropdownMenuItem key={uuidv4()}>
              <Link href={item.url} className="text-lg my-1">
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
          <div className="mt-4 w-full">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" size="lg" className="w-full rounded-sm">Get Started</Button>
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
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileMenu;
