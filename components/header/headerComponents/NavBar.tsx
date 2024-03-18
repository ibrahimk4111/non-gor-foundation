"use client";

import Link from "next/link";

const NavBar: React.FC = () => {
  const navItemClassNames =
    " py-2 hover:border-b-2 border-green-500 text-white text-lg hover:text-green-500 transition-all duration-500 ease-in-out";

  return (
    <div className=" bg-green-900 mb-7 tracking-wider">
      <ul className="container mx-auto hidden lg:flex justify-start items-center gap-x-10 h-14 ">
        <li>
          <Link href="#" className={navItemClassNames}>
            Home
          </Link>
        </li>
        <li>
          <Link href="#" className={navItemClassNames}>
            About
          </Link>
        </li>
        <li>
          <Link href="#" className={navItemClassNames}>
            Projects
          </Link>
        </li>
        <li className=" xl:block hidden">
          <Link href="#" className={navItemClassNames}>
            Donor and lifetime Member
          </Link>
        </li>
        <li className=" xl:hidden block">
          <Link href="#" className={navItemClassNames}>
            Donor
          </Link>
        </li>
        <li>
          <Link href="#" className={navItemClassNames}>
            Gallery
          </Link>
        </li>
        <li>
          <Link href="#" className={navItemClassNames}>
            Video
          </Link>
        </li>
        <li className=" xl:block hidden">
          <Link href="#" className={navItemClassNames}>
            Volunteer Register
          </Link>
        </li>
        <li className=" xl:hidden block">
          <Link href="#" className={navItemClassNames}>
            Volunteer
          </Link>
        </li>
        <li>
          <Link href="#" className={navItemClassNames}>
            News
          </Link>
        </li>
        <li>
          <Link href="#" className={navItemClassNames}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
