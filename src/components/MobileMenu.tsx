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

import { Button } from '@/components/ui/button';
// import { ContactFormExternal } from '@/components/ContactFormExternal';

interface IMobileMenuProps {
  menu: {
    showCTA?: boolean;
    nav?: {
      _key: string;
      label: string;
      url: string;
    }[];
  };
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
          {menu?.nav?.map((item: { _key: string, label: string, url: string }) => (
            <DropdownMenuItem key={uuidv4()}>
              <Link href={item.url} className="text-lg my-1">
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
          {menu?.showCTA && (
            <div className="mt-4 w-full">
              <Button size="lg" className="font-bolder text-2xl">
                <Link href="/#contact">
                  {'Stay Informed'}
                </Link>
              </Button>
            </div>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileMenu;
