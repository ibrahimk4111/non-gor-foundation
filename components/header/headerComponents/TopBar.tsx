import {MdMail} from 'react-icons/md'
import {HiLocationMarker} from 'react-icons/hi'
import {RiFacebookFill} from 'react-icons/ri'
import { AiOutlineWhatsApp } from "react-icons/ai";

import Link from "next/link";

const TopBar: React.FC = () => {
  const classNameforIcon=' text-white hover:text-amber-600 group-hover:text-amber-600 transition-all duration-500 ease-in-out'
  let size = 16;
  return (
      <div className=" bg-green-800 w-full flex justify-between items-center gap-2 px-5 py-1">
        <div className='flex justify-start items-center gap-2 '>
          <p className=' text-slate-300 '>Call us: +88 01720-424 282</p>
        </div>
        <div className='flex justify-end items-center gap-4 '>
          <Link href="#" className=' group flex items-center gap-2 '>
            <HiLocationMarker size={size} className={classNameforIcon} />
            <span className=' text-slate-300 text-sm '>Debhata, Satkhira, Bangladesh.</span>
          </Link>
          <Link href="#" className='group flex items-center gap-2 '>
            <MdMail size={size} className={classNameforIcon}/>
            <span className=' text-slate-300 text-sm '>nongorfoundation@gmail.com</span>
          </Link>
          <Link href="https://www.facebook.com/nongor.official" >
            <RiFacebookFill size={size} className={classNameforIcon} />
          </Link>
          <Link href="#">
            <AiOutlineWhatsApp size={size} className={classNameforIcon} />
          </Link>
        </div>
      </div>
  );
};

export default TopBar;
