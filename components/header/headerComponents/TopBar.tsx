import { AiFillMail } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { ExternalLink, ShareIcon } from "lucide-react";

const TopBar: React.FC = () => {

  let size = 15;
  return (
    <section className=" pt-2 bg-white ">
      <div className=" flex justify-end items-center gap-x-10 container mx-auto ">
        <div className=" flex items-center gap-2 hover:underline hover:underline-offset-4 cursor-pointer">
          <AiFillMail size={size} />
          <span className=" text-sm ">nongorfoundation@gmail.com</span>
        </div>
        <div className=" flex items-center gap-2 hover:underline hover:underline-offset-4 cursor-pointer">
          <IoCall size={size} />
          <span className=" text-sm ">01700-000 000</span>
        </div>
        <div className=" flex items-center gap-2 hover:underline hover:underline-offset-4 cursor-pointer">
          <ExternalLink size={size} />
          <span className=" text-sm ">Share</span>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
