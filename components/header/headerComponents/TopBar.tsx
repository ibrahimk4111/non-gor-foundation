import { AiFillMail } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { ExternalLink, ShareIcon } from "lucide-react";

const TopBar: React.FC = () => {

  let size = 15;
  return (
    <section className=" pt-2 bg-white ">
      <div className=" flex sm:flex-row flex-col justify-end md:items-center items-end lg:gap-x-10 gap-1 container mx-auto ">
        <div className=" hidden sm:flex items-center gap-2 hover:underline hover:underline-offset-4 cursor-pointer">
          <AiFillMail size={size} />
          <span className=" text-xs ">nongorfoundation@gmail.com</span>
        </div>
        <div className=" flex items-center gap-2 hover:underline hover:underline-offset-4 cursor-pointer">
          <IoCall size={size}/>
          <span className=" text-xs ">01700-000 000</span>
        </div>
        <div className=" hidden sm:flex items-center gap-2 hover:underline hover:underline-offset-4 cursor-pointer">
          <ExternalLink size={size} />
          <span className=" text-xs ">Share</span>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
