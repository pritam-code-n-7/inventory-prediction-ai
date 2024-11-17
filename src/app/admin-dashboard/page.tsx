
import { AppSidebar } from "@/components/admin-dashboard/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
import { BarGraphDemo } from "@/demo/dashboard-demo/BarGraphDemo";
import { LineChartDemo } from "@/demo/dashboard-demo/LineChartDemo";
import { InputFileDemo } from "@/demo/inputs/InputFileDemo";

export default function Page() {

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Admin Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50">
              <InputFileDemo />
            </div>
            <div className="aspect-video rounded-xl bg-muted/50">
              <LineChartDemo />
            </div>
            <div className="aspect-video rounded-xl bg-muted/50">
              <BarGraphDemo />
            </div>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
            {/* <Table>
              <TableCaption>A list of your inventory</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Name</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>City</TableHead>
                  <TableHead className="text-right">Occupation</TableHead>
                </TableRow>
              </TableHeader>
              {tableData.map((item, index) => (
                <TableBody key={index}>
                  <TableRow>
                    <TableCell className="font-medium">{item.Name}</TableCell>
                    <TableCell>{item.Age}</TableCell>
                    <TableCell>{item.City}</TableCell>
                    <TableCell className="text-right">
                      {item.Occupation}
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table> */}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
