"use client";

import Name_logo from "@/public/Nogor-Foundation.png";
import React from "react";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { paths } from "@/utils/paths";
import Image from "next/image";
import TopBar from "./TopBar";
import DrawerNavBar from "../drawerNavBar/DrawerNavBar";
// import MiddleBar from "./MiddleBar";

const NavBar: React.FC = () => {
  const navItemClassNames =
    " cursor-pointer py-2 px-3 text-slate-500 hover:text-black hover:bg-slate-200 rounded-md transition-all duration-500 ease-in-out";

  return (
    <div className=" border-b-2 ">
      <div className=" flex justify-start gap-5">
        <div className="px-5 py-2 flex gap-10 h-full w-auto ">
          <div className=" lg:hidden block">
            <DrawerNavBar />
          </div>
          <Image src={Name_logo} alt="logo" className=" h-auto md:w-96 w-60 " />
        </div>
        <div className=" w-full hidden lg:flex flex-col justify-start">
          <TopBar />
          <div className=" flex justify-between items-center p-2">
            <ul className=" flex justify-start items-center p-2">
              <li className={navItemClassNames}>
                <Link href={paths.home}>Home</Link>
              </li>
              <li className={navItemClassNames}>
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <div className=" flex justify-between items-center gap-2">
                      <span>Information</span>
                      <ChevronDown className=" h-4 w-4 " />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>About</DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <Link href={paths.information.introduction}>
                            <DropdownMenuItem>Introduction</DropdownMenuItem>
                          </Link>
                          <Link
                            href={paths.information.nature_of_the_organization}
                          >
                            <DropdownMenuItem>
                              Nature of the organization
                            </DropdownMenuItem>
                          </Link>
                          <Link href={paths.information.arena_limits}>
                            <DropdownMenuItem>Arena limits</DropdownMenuItem>
                          </Link>
                          <Link href={paths.information.aims_and_objectives}>
                            <DropdownMenuItem>
                              Aims and Objectives
                            </DropdownMenuItem>
                          </Link>
                          <Link href={paths.information.slogan}>
                            <DropdownMenuItem>Slogan</DropdownMenuItem>
                          </Link>
                          <Link href={paths.information.vision}>
                            <DropdownMenuItem>Vision</DropdownMenuItem>
                          </Link>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <Link href={paths.information.structure}>
                      <DropdownMenuItem>Structure</DropdownMenuItem>
                    </Link>
                    <Link href={paths.information.faq}>
                      <DropdownMenuItem>FAQ</DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>

              <li className={navItemClassNames}>
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <div className=" flex justify-between items-center gap-2">
                      <span>Activities</span>
                      <ChevronDown className=" h-4 w-4 " />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <Link href={paths.activites.human_needs} scroll={true}>
                      <DropdownMenuItem>
                        Human needs (Food, Housing, Clothing)
                      </DropdownMenuItem>
                    </Link>
                    <Link href={paths.activites.education} scroll={true}>
                      <DropdownMenuItem>
                        Education Health Training The Culture
                      </DropdownMenuItem>
                    </Link>
                    <Link href={paths.activites.health} scroll={true}>
                      <DropdownMenuItem>Health</DropdownMenuItem>
                    </Link>
                    <Link href={paths.activites.training} scroll={true}>
                      <DropdownMenuItem>Training</DropdownMenuItem>
                    </Link>
                    <Link href={paths.activites.the_culture} scroll={true}>
                      <DropdownMenuItem>The Culture</DropdownMenuItem>
                    </Link>
                    <Link href={paths.activites.awareness} scroll={true}>
                      <DropdownMenuItem>Awareness</DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>

              <li className={navItemClassNames}>
                <Link href={paths.campaign}>Campaign</Link>
              </li>
              <li className={navItemClassNames}>
                <Link href={paths.news}>News</Link>
              </li>
              <li className={navItemClassNames}>
                <Link href={paths.contact} >Contact</Link>
              </li>
            </ul>
            <ul className=" flex justify-start items-center gap-2 p-2">
              <li >
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <p className=" cursor-pointer py-2 px-5 text-white rounded-md bg-green-800 hover:bg-green-700 transition-all duration-300 ease-in">
                      Register Now
                    </p>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <Link href={paths.registration.volunteer}>
                      <DropdownMenuItem>Volunteer</DropdownMenuItem>
                    </Link>
                    <Link href={paths.registration.ordinary_member}>
                      <DropdownMenuItem>Ordinary member</DropdownMenuItem>
                    </Link>
                    <Link href={paths.registration.lifetime_member}>
                      <DropdownMenuItem>Lifetime Member</DropdownMenuItem>
                    </Link>
                    <Link href={paths.registration.donor_member}>
                      <DropdownMenuItem>Donor Member</DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li className=" cursor-pointer py-2 px-5 text-white rounded-md bg-green-800 hover:bg-green-700 transition-all duration-300 ease-in">
                <Link href={paths.donate}>Donate Now</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
