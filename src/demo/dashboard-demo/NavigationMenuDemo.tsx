// "use client";

// import * as React from "react";
// import Link from "next/link";

// import { cn } from "@/lib/utils";
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import { UploadIcon } from "@radix-ui/react-icons";
// import { RiNotificationBadgeFill } from "react-icons/ri";

// // const settings: { title: string; href: string }[] = [
// //   {
// //     title: "all settings",
// //     href: "/",
// //   },
// // ];



// export function NavigationMenuDemo() {
//   return (
//     <NavigationMenu
//       className="text-md text-gray-500 dark:text-slate-400"
//       style={{ letterSpacing: "0.10em" }}
//     >
//       <NavigationMenuList>
//         <NavigationMenuItem>
//           <Link href="/pages/contact" legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//               <b>Dashboard</b>
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link href="/pages/contact" legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//               <b className="flex gap-2">Upload data <UploadIcon /> </b>
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link href="/pages/contact" legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//               <b className="flex gap-2">Alerts <RiNotificationBadgeFill size={16} /> </b>
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
        
//       </NavigationMenuList>
//     </NavigationMenu>
//   );
// }

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gradient-to-l from-lime-500 to-cyan-500 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-bold leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";
