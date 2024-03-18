'use client'

import Link from "next/link";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const DrawerNavBar: React.FC = () => {
    const [activeBtn, setActiveBtn] = useState<string>('Home')
  const navItemClassNames = (btnName: string) =>
    `${activeBtn === btnName? "bg-green-700 text-white": "hover:text-green-700 w-full bg-slate-200/80"} text-center text-xl p-2 rounded-md`;

  return (
    <Drawer>
      <DrawerTrigger className=" flex justify-center items-center bg-green-700 hover:bg-green-700 text-white p-2 rounded-full ">
        <RxHamburgerMenu className=" md:text-xl text-base " />
      </DrawerTrigger>
      <DrawerContent>
        <div>
          <ul className=" flex flex-col gap-3 p-10 ">
            <Link href="#">
              <li onClick={()=>setActiveBtn('Home')} className={navItemClassNames('Home')}>Home</li>
            </Link>
            <Link href="#">
              <li onClick={()=>setActiveBtn('About')} className={navItemClassNames('About')}>About</li>
            </Link>
            <Link href="#">
              <li onClick={()=>setActiveBtn('Projects')} className={navItemClassNames('Projects')}>Projects</li>
            </Link>
            <Link href="#">
              <li onClick={()=>setActiveBtn('Donate')} className={navItemClassNames('Donate')}>Donate</li>
            </Link>
            <Link href="#">
              <li onClick={()=>setActiveBtn('Gallery')} className={navItemClassNames('Gallery')}>Gallery</li>
            </Link>
            <Link href="#">
              <li onClick={()=>setActiveBtn('Video')} className={navItemClassNames('Video')}>Video</li>
            </Link>
            <Link href="#">
              <li onClick={()=>setActiveBtn('Volunteer')} className={navItemClassNames('Volunteer')}>Volunteer</li>
            </Link>
            <Link href="#">
              <li onClick={()=>setActiveBtn('News')} className={navItemClassNames('News')}>News</li>
            </Link>
            <Link href="#">
              <li onClick={()=>setActiveBtn('Contact')} className={navItemClassNames('Contact')}>Contact</li>
            </Link>
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerNavBar;
