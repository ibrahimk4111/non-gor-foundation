import React from "react";
import iftar from "@/public/iftar_gallery_4.jpg";
import Image from "next/image";

const ImageComp:React.FC = () => {
  return (
    <section className=" rounded-lg overflow-hidden">
      <Image src={iftar} alt="assunnah_complex" />
    </section>
  );
};

export default ImageComp;
