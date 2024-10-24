import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { FaUpload } from "react-icons/fa6";
import { RiNotificationBadgeFill } from "react-icons/ri";

export function MenubarDemo() {
  return (
    <Menubar className="h-16">
      <MenubarMenu>
        <MenubarTrigger>
          <b>Dashboard</b>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem disabled>Admin Dashboard</MenubarItem>
          <MenubarItem disabled>User Dashboard</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <b className="flex gap-2">
            Upload data <FaUpload size={16} />
          </b>
        </MenubarTrigger>
        <MenubarContent className="w-screen h-[500px]"></MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <b className="flex gap-2">
            Alerts <RiNotificationBadgeFill size={16} />
          </b>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Reload <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <b>Profiles</b>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
