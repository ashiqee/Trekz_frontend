import {  useRef,  } from "react";

const AutoPlayVideo = ({videoUrl}: {videoUrl:string}) => {
  const videoRef = useRef(null);

 
  return (
    <iframe
      ref={videoRef}
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      className="object-cover h-[400px] w-full"
      frameBorder="0"
      src={`https://www.youtube.com/embed/${videoUrl}`} 
      title="YouTube video player"
    />
  );
};

const VideoCard = ({video}:{video:string}) => {
  return <AutoPlayVideo videoUrl={video as string } />;
};

export default VideoCard;
