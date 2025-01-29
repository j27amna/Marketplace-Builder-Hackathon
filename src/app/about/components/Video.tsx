import React from "react";

const VideoSection = () => {
  return (
    <section className="flex justify-center items-center pt-0 pb-16 bg-white">
      <div className="relative md:w-[90%] md:h-[540px] w-[306px] h-[316px] max-w-4xl rounded-lg overflow-hidden shadow-lg">
        {/* Background Image */}
        <img
          src="/images/video.jpg"
          alt="Video Thumbnail"
          className="w-full md:h-auto h-[540px] brightness-75"
        />

        {/* Play Button */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-[#23A6F0] rounded-full p-4 cursor-pointer hover:bg-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              width="40px"
              height="40px"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
