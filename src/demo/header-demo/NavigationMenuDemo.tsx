"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// const settings: { title: string; href: string }[] = [
//   {
//     title: "all settings",
//     href: "/",
//   },
// ];

// const aboutUs: { title: string; href: string }[] = [
//   {
//     title: "about",
//     href: "/",
//   },
//   {
//     title: "about",
//     href: "/",
//   },
//   {
//     title: "about",
//     href: "/",
//   },
//   {
//     title: "about",
//     href: "/",
//   },
//   {
//     title: "about",
//     href: "/",
//   },
// ];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu
      className="text-md text-gray-500 dark:text-slate-400"
      style={{ letterSpacing: "0.10em" }}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/pages/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <b>Home</b>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pages/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <b>About Us</b>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pages/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <b>Contact Us</b>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
       
        {/* <NavigationMenuItem>
          <Link href="/login" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <b>Logout</b>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gradient-to-l from-lime-500 to-cyan-500 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
