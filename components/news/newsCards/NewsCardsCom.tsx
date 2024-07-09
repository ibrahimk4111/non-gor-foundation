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


const NewsCardsCom: React.FC = () => {
  return (
    <>
      {newsDatas &&
        newsDatas.map((item, index) => (
          <div className=" rounded-lg overflow-hidden bg-white" key={index}>
            <div className=" h-48 overflow-hidden flex justify-center items-center ">
              <Image
                src={item.img}
                alt="assunnah_complex"
                className=" h-auto w-full"
              />
            </div>

            <div className="p-4 flex flex-col justify-between items-start gap-3">
              <h1 className=" text-green-700">{item.title}</h1>
              <p className=" line-clamp-4 text-sm">{item.desc}</p>
              <div className=" flex justify-center items-center w-full ">
                <Dialog>
                  <DialogTrigger asChild>
                    <h1 className=" cursor-pointer hover:underline hover:text-green-700 hover:scale-110 transition-all duration-300 ease-in text-center">
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
                      <DialogTitle className=" py-4 leading-6 text-green-700 ">{item.title}</DialogTitle>
                      <DialogDescription className=" leading-6 " >
                        {item.desc}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default NewsCardsCom;
