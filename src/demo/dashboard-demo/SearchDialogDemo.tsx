"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ScrollAreaDemo } from "./ScrollAreaDemo";

export function SearchDialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          Search by SKU...
          <span>
            <Search />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Input
          id="name"
          placeholder="Search by SKU...."
          className="col-span-3"
        />
        <ScrollAreaDemo />
      </DialogContent>
    </Dialog>
  );
}
