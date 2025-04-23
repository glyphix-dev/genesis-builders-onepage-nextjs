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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/ContactForm';
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
            <Link href={item.url} legacyBehavior passHref scroll={true}>
              <NavigationMenuLink className={cn(linkClassName)}>
                {item.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" size="lg">Get Started!</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Get Started!</DialogTitle>
                {/* <DialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </DialogDescription> */}
              </DialogHeader>
              <ContactForm />
            </DialogContent>
          </Dialog>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
