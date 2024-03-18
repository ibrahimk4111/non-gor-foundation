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
  const navItemClassNames =
    " py-2 hover:border-b-2 border-green-500 text-white text-lg hover:text-green-500 transition-all duration-500 ease-in-out";

  return (
    <div className=" bg-green-900 mb-7 tracking-wider">
      <ul className="max-w-[1280px] mx-auto flex justify-between items-center h-14">
        <li >
          <Link href="#" className={navItemClassNames} >Home</Link>
        </li>
        <li>
          <Link href="#" className={navItemClassNames}>About</Link>
        </li>
        <li>
          <Link href="#" className={navItemClassNames}>Projects</Link>
        </li>
        <li>
          <Link href="#" className={navItemClassNames}>Donor and lifetime Member</Link>
        </li>
        <li>
          <Link href="#" className={navItemClassNames}>Gallery</Link>
        </li>
        <li>
          <Link href="#" className={navItemClassNames}>Video</Link>
        </li>
        <li>
          <Link href="#" className={navItemClassNames}>Voluteer Registration</Link>
        </li>
        <li>
          <Link href="#" className={navItemClassNames}>News</Link>
        </li>
        <li>
          <Link href="#" className={navItemClassNames}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
