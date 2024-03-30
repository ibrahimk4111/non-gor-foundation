"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { paths } from "@/utils/paths";

const NavBar: React.FC = () => {
  const navItemClassNames =
    " cursor-pointer py-2 text-white hover:text-green-500 transition-all duration-500 ease-in-out";

  return (
    <div className=" bg-green-900 mb-2 tracking-wider">
      <ul className="container mx-auto hidden lg:flex justify-start items-center gap-x-10 h-14 ">
        <li>
          <Link href={paths.home} className={navItemClassNames}>
            Home
          </Link>
        </li>
        <li>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <div className=" flex justify-between items-center gap-2">
                <span className={navItemClassNames}>Information</span>
                <ChevronDown className=" text-white h-4 w-4 " />
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
                    <Link href={paths.information.nature_of_the_organization}>
                      <DropdownMenuItem>
                        Nature of the organization
                      </DropdownMenuItem>
                    </Link>
                    <Link href={paths.information.arena_limits}>
                      <DropdownMenuItem>Arena limits</DropdownMenuItem>
                    </Link>
                    <Link href={paths.information.aims_and_objectives}>
                      <DropdownMenuItem>Aims and Objectives</DropdownMenuItem>
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
            </DropdownMenuContent>
          </DropdownMenu>
        </li>

        <li>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <div className=" flex justify-between items-center gap-2">
                <span className={navItemClassNames}>Activities</span>
                <ChevronDown className=" text-white h-4 w-4 " />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <Link href={paths.activites.human_needs}>
                <DropdownMenuItem>
                  Human needs (Food, Housing, Clothing)
                </DropdownMenuItem>
              </Link>
              <Link href={paths.activites.education}>
                <DropdownMenuItem>Education Health Training The Culture</DropdownMenuItem>
              </Link>
              <Link href={paths.activites.health}>
                <DropdownMenuItem>Health</DropdownMenuItem>
              </Link>
              <Link href={paths.activites.training}>
                <DropdownMenuItem>Training</DropdownMenuItem>
              </Link>
              <Link href={paths.activites.the_culture}>
                <DropdownMenuItem>The Culture</DropdownMenuItem>
              </Link>
              <Link href={paths.activites.awareness}>
                <DropdownMenuItem>Awareness</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>

        <li>
          <Link href={paths.campaign} className={navItemClassNames}>
            Campaign
          </Link>
        </li>
        <li>
          <Link href={paths.news} className={navItemClassNames}>
            News
          </Link>
        </li>
        <li>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <div className=" flex justify-between items-center gap-2">
                <span className={navItemClassNames}>Registration</span>
                <ChevronDown className=" text-white h-4 w-4 " />
              </div>
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
        <li>
          <Link href={paths.donate} className={navItemClassNames}>
            Donate
          </Link>
        </li>
        <li>
          <Link href={paths.contact} className={navItemClassNames}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
