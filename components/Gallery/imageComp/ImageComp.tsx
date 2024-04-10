"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GalleryData } from "@/api/gellary/Gellary";
// light-gallery-------------
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import image1 from '@/public/gallery/pimg1.jpg';
import image2 from '@/public/gallery/images/pimg2.jpg';
import image3 from '@/public/gallery/images/pimg3.jpg';
import image4 from '@/public/gallery/pimg4.jpg';
import image5 from '@/public/gallery/pimg5.jpg';
import image6 from '@/public/gallery/pimg6.jpg';
import image7 from '@/public/gallery/pimg7.jpg';
import image8 from '@/public/gallery/pimg8.jpg';
import image9 from '@/public/gallery/pimg9.jpg';
import image10 from '@/public/gallery/pimg10.jpg';
import image11 from '@/public/gallery/pimg11.jpg';
import image12 from '@/public/gallery/pimg12.jpg';

const galleryImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12]

const ImageComp: React.FC = () => {
  return (
    <>
      {galleryImages.map((img, index) => (
        <LightGallery
          key={index}
          elementClassNames=" h-32 overflow-hidden rounded-md "
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
        >
            <a href={img.src}>
              <img alt={`img${index}`} src={img.src} className=" w-full h-full" />
            </a>

        </LightGallery>
      ))}
    </>
  );
};

export default ImageComp;
