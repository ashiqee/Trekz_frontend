import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ImageCard = ({images}:{images:string[]}) => {
    return (
        <div   className={` mt-2 gap-1.5 relative   grid place-items-center ${images.length === 1 ? "grid-cols-1" : "grid-cols-2"} `}
      >
        {images?.slice(0,4).map((image, index) => (
          <Link
            key={index}
            className={`w-full  ${images.length === 3 && index === 0 ? "col-span-2" : "col-span-1"}`}
            href={`/post/${index}`}
          >
            <Image
              alt={`image-${index}`}
              className={`${images.length >= 2 && 'h-[400px]'} max-h-[400px] relative z-10 rounded-md w-full object-cover`}
              height={500}
              src={image}
              width={500}
            />
         
          </Link>
        ))}
           {images.length > 4 && <div className="absolute text-slate-200   p-10  z-50 right-[15%] bottom-[12%] 2xl:text-5xl font-bold text-3xl">+{images.length-4}</div>
    }
        </div>
    );
};

export default ImageCard;