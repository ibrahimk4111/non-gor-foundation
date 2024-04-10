import { AiFillFacebook, AiFillMail } from "react-icons/ai";
import { IoCall, IoLogoWhatsapp } from "react-icons/io5";
import { FaSquareInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { RxInstagramLogo } from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";


import Link from "next/link";

const TopBar: React.FC = () => {
  let size = 20;
  return (
    <section className=" pt-2 bg-white">
      <div className=" flex justify-end items-center gap-2 container ">
        <Link href="https://www.facebook.com/nongor.official" target="_blank">
          <AiFillFacebook size={size} fill="blue"/>
        </Link>
        <Link
          href="https://www.youtube.com/channel/UChhf0WXsZ2hfZVw5-xqSstw"
          target="_blank"
        >
          <FaYoutube size={size} fill="red"/>
        </Link>
        <Link href="https://twitter.com/nongor21" target="_blank">
          <FaXTwitter size={size} />
        </Link>
        <Link
          href="https://www.instagram.com/nongorfoundation/"
          target="_blank"
        >
          <FaSquareInstagram size={size} fill="red"/>
        </Link>
        <Link
          href="https://whatsapp.com/channel/0029VaFbIou5kg6xKkI05T2Q"
          target="_blank"
        >
          <IoLogoWhatsapp size={size} fill="green"/>
        </Link>
        <Link href="https://t.me/foundationnongor" target="_blank">
          <FaTelegramPlane size={size} fill="cyan" />
        </Link>
      </div>
    </section>
  );
};

export default TopBar;
