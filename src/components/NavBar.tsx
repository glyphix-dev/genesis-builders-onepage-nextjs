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
import { v4 as uuidv4 } from 'uuid';
// import { ContactFormDialogExternal } from './ContactFormDialogExternal';
import { Button } from './ui/button';
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
      <NavigationMenuList className="relative gap-1 xl:gap-4">
        {menu?.map((item: { _key: string, label: string, url: string }) => (
          <NavigationMenuItem key={uuidv4()} className="">
            <Link href={item.url} legacyBehavior passHref scroll={true} className="font-bolder">
              <NavigationMenuLink className={cn(linkClassName, "text-center text-lg xl:text-xl")}>
                {item.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          {/* <ContactFormDialogExternal /> */}
          <Button size="lg" className="font-bolder text-2xl">
            <Link href="/#contact">
              {'Get Started'}
            </Link>
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
