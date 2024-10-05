"use client";
import { useState } from "react";


// import required modules
import { Image } from "@nextui-org/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ImageSlider = ({ images }: { images: string[] }) => {
  const [imgIndex, setImgUrl] = useState(0);

  return (
    <>
      
      <div
        className=" min-h-[35vh] bg-slate-700/15 flex flex-col justify-center items-center overflow-hidden
             xl:min-h-[80vh] xl:max-h-[80vh] xl:min-w-[65vw]
             rounded-md shadow-md relative shadow-blue-700/15"
      >
        <Image className="w-full min-h-[60vh] transition-all duration-1000 scale-105 hover:scale-150 " src={images[imgIndex]} />

        <button
          className={`${images.length === imgIndex + 1 && "disabled:bg-gray-700/40"} hover:bg-slate-500/45 absolute p-2 rounded-full top-1/2 right-5 z-10`}
          disabled={images.length === imgIndex + 1}
          onClick={() => setImgUrl(imgIndex + 1)}
        >
          <ArrowRight />
        </button>

        <button
          className={`${images.length === imgIndex + 1 && "disabled:bg-gray-700/40"}
         hover:bg-slate-500/45 absolute p-2 rounded-full top-1/2 left-5 z-10`}
          disabled={imgIndex === 0}
          onClick={() => setImgUrl(imgIndex - 1)}
        >
          <ArrowLeft />
        </button>
      </div>
    </>
  );
};

export default ImageSlider;
