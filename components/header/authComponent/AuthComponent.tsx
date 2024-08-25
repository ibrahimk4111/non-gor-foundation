"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { paths } from "@/utils/paths";
import Link from "next/link";
import React, { useEffect } from "react";
import userAvatar from "@/public/activitiesLogo/Activities-5.png";
import { RxAvatar } from "react-icons/rx";
import { MdExitToApp } from "react-icons/md";
import Image from "next/image";
import { useCreatedContext } from "@/components/context/Context";

const AuthComponent = () => {

  const [user, setUser] = React.useState<Boolean>(false);

  const navItemClassNames =
    " cursor-pointer py-2 px-3 text-slate-500 hover:text-black bg-green-100 hover:bg-white rounded-md transition-all duration-500 ease-in-out";

  return (
    <>
      <ul className={`${user ? "hidden" : "flex"} justify-center items-center`}>
        <li className={navItemClassNames}>
          <Link href={paths.auth.signin}>Log in</Link>
        </li>
        <li className={navItemClassNames}>
          <Link href={paths.auth.signup}>Sign up</Link>
        </li>
      </ul>
      <div className={`${navItemClassNames} ${!user ? "hidden" : "block"}`}>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild className=" overflow-hidden h-6 w-6 ">
            <Image src={userAvatar} alt="user avatar" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="">
            <Link href={paths.registration.volunteer}>
              <DropdownMenuItem>
                <RxAvatar /> <span className=" ml-2 ">Profile</span>
              </DropdownMenuItem>
            </Link>
            <Link href={paths.registration.ordinary_member}>
              <DropdownMenuItem className=" bg-red-50 ">
                <MdExitToApp /> <span className=" ml-2 ">Log out</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default AuthComponent;
