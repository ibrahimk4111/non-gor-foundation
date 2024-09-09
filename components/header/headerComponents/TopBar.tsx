import {MdMail} from 'react-icons/md'
import {HiLocationMarker} from 'react-icons/hi'
import {RiFacebookFill, RiInstagramFill, RiThreadsFill, RiTwitterXLine} from 'react-icons/ri'
import { AiOutlineWhatsApp } from "react-icons/ai";

import Link from "next/link";
import { IoLogoYoutube } from 'react-icons/io';

const TopBar: React.FC = () => {
  const classNameforIcon=' text-slate-300 hover:scale-125 hover:text-green-400 group-hover:text-green-400 transition-all duration-500 ease-in-out'
  const classNameforText = ' text-slate-300 text-sm hover:underline group-hover:text-green-400 transition-all duration-500 ease-in-out';
  let size = 16;
  return (
      <div className=" bg-green-950 w-full flex justify-between items-center gap-2 px-7 py-1">
        <div className='flex justify-start items-center gap-2 '>
          <p className=' text-slate-300 '>Connect with us: </p>
          <Link href="https://www.facebook.com/nongor.official" >
            <RiFacebookFill size={size} className={classNameforIcon} />
          </Link>
          <Link href="https://www.youtube.com/channel/UChhf0WXsZ2hfZVw5-xqSstw" >
            <IoLogoYoutube size={size} className={classNameforIcon} />
          </Link>
          {/* <Link href="https://api.whatsapp.com/send?phone=01917-900013&text=I have a question.">
            <AiOutlineWhatsApp size={size} className={classNameforIcon} />
          </Link> */}
          <Link href="https://twitter.com/nongor21" >
            <RiTwitterXLine size={size} className={classNameforIcon} />
          </Link>
          <Link href="https://www.instagram.com/nongorfoundation/" >
            <RiInstagramFill size={size} className={classNameforIcon} />
          </Link>
          <Link href="https://www.threads.net/@nongorfoundation" >
            <RiThreadsFill size={size} className={classNameforIcon} />
          </Link>
        </div>
        <div className='flex justify-end items-center gap-4 '>
          <Link href="https://www.google.com/maps?ll=22.535955,88.974496&z=15&t=m&hl=en&gl=BD&mapclient=embed&cid=3935304437305096477" className=' group flex items-center gap-2 '>
            <HiLocationMarker size={size} className={classNameforIcon} />
            <span className={classNameforText}>Debhata, Satkhira, Bangladesh.</span>
          </Link>
          <Link href='mailto:nongorfoundation@gmail.com?subject= feedback &body=Hello! welcome to Nongor Foundation.🙂' className='group flex items-center gap-2 '>
            <MdMail size={size} className={classNameforIcon}/>
            <span className={classNameforText}>nongorfoundation21@gmail.com</span>
          </Link>
        </div>
      </div>
  );
};

export default TopBar;
