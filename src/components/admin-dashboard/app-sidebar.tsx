'use client'
import * as React from "react"
import {
  Bot,
  LifeBuoy,
  LucideGitCompare,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react"


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import Link from "next/link"
import Image from "next/image"
// import { auth } from "@/auth"
// import { redirect } from "next/navigation"



export  function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const data = {
    user: {
      name: "shadcn",
      email: "devstidax@gmail.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Metrics",
        url: "#",
        icon: SquareTerminal,
        isActive: false,
        items: [
          {
            title: "Inventory Levels",
            url: "#",
          },
          {
            title: "Predicted Demand",
            url: "#",
          },
        ],
      },
      {
        title: "Alerts",
        url: "#",
        icon: Bot,
        isActive:true,
        items: [
          {
            title: "Low Stock Alerts",
            url: "#",
          },
          {
            title: "Over Stock Alerts",
            url: "#",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Team",
            url: "#",
          },
          {
            title: "Billing",
            url: "#",
          },
          {
            title: "Limits",
            url: "#",
          },
        ],
      },
    ],
    navSecondary: [
      {
        title: "Support",
        url: "#",
        icon: LifeBuoy,
      },
      {
        title: "Feedback",
        url: "#",
        icon: Send,
      },
    ],
    projects: [
      {
        name: "Predicted vs Actual Sales/Inventory",
        url: "#",
        icon: LucideGitCompare,
      },
      {
        name: "Inventory Usage per Category/Product",
        url: "#",
        icon: PieChart,
      },
      {
        name: "Seasonal trends in demand",
        url: "#",
        icon: Map,
      },
    ],
  }

// const session =await auth();

// if(!session!.user) redirect('login')


  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="#">
                
                <Image src={'/assets/images/stidax-logo.png'} width={100} height={100} alt="stidax-logo"/>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
