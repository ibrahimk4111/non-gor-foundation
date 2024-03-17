import { FaYoutube } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import EngBnToggle from "./EngBnToggle";
import Link from "next/link";

const TopBar: React.FC = () => {
  let size = 25;
  return (
    <section className=" py-5 ">
      <div className=" flex justify-end items-center gap-5">
        <Link href="https://facebook.com" target="_blank">
          <FaFacebookSquare size={size} fill="blue " />
        </Link>

        <Link href="https://youtube.com" target="_blank">
          <FaYoutube size={size} fill="red " />
        </Link>

        <Link href="https://gmail.com" target="_blank">
          <AiFillMail size={size} fill=" green " />
        </Link>

        <Link href="https://facebook.com" target="_blank">
          <IoCall size={size} fill=" green " />
        </Link>

        <EngBnToggle />
      </div>
    </section>
  );
};

export default TopBar;
