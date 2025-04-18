"use client";

import { cn } from '@/lib/utils';
import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
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
import { usePathname } from 'next/navigation';
interface INavBarProps {
  menu: {
    _key: string;
    label: string;
    url: string;
  }[];
  className?: string;
}

const NavBar: React.FunctionComponent<INavBarProps> = ({ menu, className }) => {

  const pathname = usePathname();
  return (
    <NavigationMenu className={cn("relative flex items-center", className)}>
      <NavigationMenuList className="relative gap-2">
        {menu?.map((item: { _key: string, label: string, url: string }) => (
          <NavigationMenuItem key={item._key} className="flex justify-center items-center text-primary">
            <Link href={item.url} legacyBehavior passHref scroll={true}>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), pathname.includes(item.url) && "bg-accent text-accent-foreground tracking-tighter")}>
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
