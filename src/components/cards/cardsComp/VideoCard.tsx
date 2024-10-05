import {  useRef,  } from "react";

const AutoPlayVideo = ({videoUrl,catergory}: {videoUrl:string,catergory:string}) => {
  const videoRef = useRef(null);

 
  return (
    <>
   <div className="z-0 relative">
   <iframe
      ref={videoRef}
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      className="object-cover h-[400px]  w-full"
      frameBorder="0"
      src={`https://www.youtube.com/embed/${videoUrl}`} 
      title="YouTube video player"
    />
    {catergory && <p className='bg-slate-900/85 da text-white  w-fit px-4 p-1 uppercase text-sm font-bold absolute top-3 z-50 rounded-lg right-3'>{catergory}</p>}
   </div>
  
    </>
  );
};

const VideoCard = ({video,catergory}:{video:string,catergory:string}) => {
  return <AutoPlayVideo catergory={catergory} videoUrl={video as string} />;
};

export default VideoCard;
