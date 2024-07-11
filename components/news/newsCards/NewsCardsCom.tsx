import { newsDatas } from "@/api/news/News";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";
import { FcLike } from "react-icons/fc";

const NewsCardsCom: React.FC = () => {
  return (
    <>
      {newsDatas &&
        newsDatas.map((item, index) => (
          <div className="md:min-h-[75vh] sm:min-h-[70vh] min-h-[62vh]" key={index}>
            <div className=" h-48 rounded-md overflow-hidden flex justify-center items-center ">
              <Image
                src={item.img}
                alt="assunnah_complex"
                className=" h-auto w-full"
              />
            </div>

            <div className=" relative">
              <div className=" absolute -top-10 space-y-3 bg-white m-4 p-4 rounded-md">
                <h1 className=" text-green-700 font-semibold">{item.title}</h1>
                <p className=" line-clamp-6 text-sm">{item.desc}</p>
                <div className=" flex justify-center items-center w-full ">
                  <Dialog>
                    <DialogTrigger asChild>
                      <h1 className=" cursor-pointer hover:underline text-green-700 my-5 hover:scale-110 transition-all duration-300 ease-in text-center">
                        Read More
                      </h1>
                    </DialogTrigger>
                    <DialogContent className=" overflow-y-scroll h-[90vh] ">
                      <div className=" flex justify-center items-center rounded-md">
                        <Image
                          src={item.img}
                          alt="assunnah_complex"
                          className=" h-auto w-full"
                        />
                      </div>
                      <DialogHeader>
                        <DialogTitle className=" py-4 leading-6 text-green-700 ">
                          {item.title}
                        </DialogTitle>
                        <DialogDescription className=" leading-6 ">
                          {item.desc}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className=" text-slate-400 flex items-center justify-between w-full bg-slate-50 rounded-md p-1">
                  <h1>By: {item.name}</h1>
                  <p className=" font-bold blur-sm">|</p>
                  <div className=" flex items-center gap-2"> <FcLike /> <span>{item.rate}</span></div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default NewsCardsCom;
