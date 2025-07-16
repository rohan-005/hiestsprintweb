import React from "react";
import videoBg from "../../assets/video.mp4";

// import logo from '../assets/images/logo.png';

const VideoBackground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
          autoPlay
        loop
        muted
        playsInline
        className="absolute -top-0 left-0 w-full h-full object-cover z-[-1] blur-xs brightness-60 saturate-100 "
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="">
        

        <div className="text-6xl font-astroz text-amber-100 m-6 ml-20 anim-right ">Run. <br/> Dodge. <br/>Escape.</div>
        <div className=" absolute text-end text-6xl font-astroz text-white m-6 anim-left bottom-30 right-10 ">A perfect heist <br/> — gone loud.</div>

      </div>
    </div>
  );
};

export default VideoBackground;
