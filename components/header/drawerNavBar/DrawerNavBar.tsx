'use client'

import Link from "next/link";

import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const DrawerNavBar: React.FC = () => {
    const [activeBtn, setActiveBtn] = useState<string>('Home')
  const navItemClassNames = (btnName: string) =>
    `${activeBtn === btnName? "bg-green-700 text-white": "hover:text-green-700 w-full bg-slate-200/80"} text-center text-xl rounded-md`;

  return (
    <Drawer>
      <DrawerTrigger className=" flex justify-center items-center hover:bg-green-700 p-2 rounded-full ">
        <RxHamburgerMenu className=" md:text-xl text-base " />
      </DrawerTrigger>
      <DrawerContent>
        <div>
          <ul className=" flex flex-col gap-3 p-10 ">
            <Link href="/">
              <li onClick={()=>setActiveBtn('Home')} className={navItemClassNames('Home')}><DrawerClose className=" w-full h-full p-2" >Home</DrawerClose></li>
            </Link>
            <Link href="#">
              <li onClick={()=>setActiveBtn('About')} className={navItemClassNames('About')}><DrawerClose className=" w-full h-full p-2">About</DrawerClose></li>
            </Link>
            <Link href="/projects" >
              <li onClick={()=>setActiveBtn('Projects')} className={navItemClassNames('Projects')}><DrawerClose className=" w-full h-full p-2">Projects</DrawerClose></li>
            </Link>
            <Link href="#">
              <li onClick={()=>setActiveBtn('Donate')} className={navItemClassNames('Donate')}><DrawerClose className=" w-full h-full p-2">Donate</DrawerClose></li>
            </Link>
            <Link href="#">
              <li onClick={()=>setActiveBtn('Gallery')} className={navItemClassNames('Gallery')}><DrawerClose className=" w-full h-full p-2">Gallery</DrawerClose></li>
            </Link>
            <Link href="#">
              <li onClick={()=>setActiveBtn('Video')} className={navItemClassNames('Video')}><DrawerClose className=" w-full h-full p-2">Video</DrawerClose></li>
            </Link>
            <Link href="#">
              <li onClick={()=>setActiveBtn('Volunteer')} className={navItemClassNames('Volunteer')}><DrawerClose className=" w-full h-full p-2">Volunteer</DrawerClose></li>
            </Link>
            <Link href="#">
              <li onClick={()=>setActiveBtn('News')} className={navItemClassNames('News')}><DrawerClose className=" w-full h-full p-2">News</DrawerClose></li>
            </Link>
            <Link href="#">
              <li onClick={()=>setActiveBtn('Contact')} className={navItemClassNames('Contact')}><DrawerClose className=" w-full h-full p-2">Contact</DrawerClose></li>
            </Link>
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerNavBar;
