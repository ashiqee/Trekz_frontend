import {  useRef,  } from "react";

const AutoPlayVideo = ({videoUrl}: {videoUrl:string}) => {
  const videoRef = useRef(null);

  return (
    <iframe
      ref={videoRef}
      className="object-cover h-[400px] w-full"
      src={videoUrl} // Autoplay if in view
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};


const VideoCard = ({videos}:{videos:string[]}) => {
  return <AutoPlayVideo videoUrl={videos[0] as string } />;
};

export default VideoCard;
