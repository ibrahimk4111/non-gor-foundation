"use client";

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <>
      <Menubar className=" border-none bg-green-700 ">
        <MenubarMenu>
          <MenubarTrigger><Link href='#'>Home</Link></MenubarTrigger>
          <MenubarTrigger><Link href='#'>About</Link></MenubarTrigger>
          <MenubarTrigger><Link href='#'>Projects</Link></MenubarTrigger>
          <MenubarTrigger><Link href='#'>Donor</Link></MenubarTrigger>
          <MenubarTrigger><Link href='#'>Gallery</Link></MenubarTrigger>
          <MenubarTrigger><Link href='#'>Video</Link></MenubarTrigger>
          <MenubarTrigger><Link href='#'>Voluteer Registration</Link></MenubarTrigger>
          <MenubarTrigger><Link href='#'>News</Link></MenubarTrigger>
          <MenubarTrigger><Link href='#'>Contact</Link></MenubarTrigger>
          {/* <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent> */}
        </MenubarMenu>
      </Menubar>
    </>
  );
};

export default NavBar;
