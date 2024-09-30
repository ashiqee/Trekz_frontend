"use client";

import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";
import Link from "next/link";

interface IProps {
    images: string[];
  }
  
  export default function ImageGallery({ images }: IProps) {
   
    
    return (
      <LightGallery
        elementClassNames={` mt-2 gap-1.5  grid place-items-center ${images.length === 1 ? "grid-cols-1" : "grid-cols-2"} `}
        plugins={[lgThumbnail, lgZoom]}
        speed={500}
      >
        {images?.slice(0,images.length <= 4 ? images.length : 4).map((image, index) => (
          <Link
            key={index}
            className={`w-full ${images.length === 3 && index === 0 ? "col-span-2" : "col-span-1"}`}
            href={image}
          >
            <Image
              alt={`image-${index}`}
              className="h-[400px] relative rounded-md w-full object-cover"
              height={500}
              src={image}
              width={500}
            />
         
          </Link>
        ))}
           <span className="absolute z-10 right-10 top-10 text-3xl">{images.length-4}</span>
      </LightGallery>
    );
  }