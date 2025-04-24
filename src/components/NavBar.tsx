"use client";

import { cn } from '@/lib/utils';
import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from 'next/link';
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
import { v4 as uuidv4 } from 'uuid';

interface INavBarProps {
  menu: {
    _key: string;
    label: string;
    url: string;
  }[];
  className?: string;
  linkClassName?: string;
}

const NavBar: React.FunctionComponent<INavBarProps> = ({ menu, className, linkClassName }) => {
  return (
    <NavigationMenu className={cn("relative items-center", className)}>
      <NavigationMenuList className="relative gap-4">
        {menu?.map((item: { _key: string, label: string, url: string }) => (
          <NavigationMenuItem key={uuidv4()} className="">
            <Link href={item.url} legacyBehavior passHref scroll={true} className="font-bolder text-xl">
              <NavigationMenuLink className={cn(linkClassName, "text-xl")}>
                {item.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
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
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
