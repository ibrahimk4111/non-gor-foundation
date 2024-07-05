import {MdMail} from 'react-icons/md'
import {HiLocationMarker} from 'react-icons/hi'
import {RiFacebookFill} from 'react-icons/ri'
import { AiOutlineWhatsApp } from "react-icons/ai";

import Link from "next/link";

const TopBar: React.FC = () => {
  let size = 16;
  return (
      <div className=" bg-green-900 w-full flex justify-between items-center gap-2 px-5 py-1">
        <div className='flex justify-start items-center gap-2 '>
          <p className=' text-slate-300 '>connect with us: </p>
          <Link href="https://www.facebook.com/nongor.official" >
            <RiFacebookFill size={size} className=' text-white hover:text-amber-600 transition-all duration-500 ease-in-out' />
          </Link>
          <Link href="#">
            <AiOutlineWhatsApp size={size} className='text-white cursor-pointer hover:text-amber-600 transition-all duration-500 ease-in-out' />
          </Link>
        </div>
        <div className='flex justify-end items-center gap-4 '>
          <Link href="#" className=' group flex items-center gap-2 '>
            <HiLocationMarker size={size} className='text-white group-hover:text-amber-600 transition-all duration-500 ease-in-out' />
            <span className=' text-slate-300 text-sm '>Debhata, Satkhira, Bangladesh.</span>
          </Link>
          <Link href="#" className='group flex items-center gap-2 '>
            <MdMail size={size} className='text-white group-hover:text-amber-600 transition-all duration-500 ease-in-out' />
            <span className=' text-slate-300 text-sm '>nongorfoundation@gmail.com</span>
          </Link>
        </div>
      </div>
  );
};

export default TopBar;
