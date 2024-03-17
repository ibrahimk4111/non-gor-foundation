import React from "react";
// import VideoCards from './videoCards/VideoCards'

const Videos: React.FC = () => {
  const videoId = "7R0geoRoIn55f662";
  return (
    <div className=" py-10 bg-white ">
      <div className=" max-w-[1280px] mx-auto">
        <h1 className=" text-2xl text-center mb-10">Videos</h1>
        <div className=" grid lg:grid-cols-3 gap-5 ">
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/-AtfFUeeuIs?si=7R0geoRoIn55f662" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <ReactPlayer url='https://www.youtube.com/watch?v=wWgIAphfn2U' />  */}
          {/* <VideoCards videoId={videoId} /> */}
          {/* <video src="https://www.youtube.com/embed/-AtfFUeeuIs?si=7R0geoRoIn55f662"></video> */}
          {/* <video controls={true}>
                <source src="www.youtube.com/watch?v=IEDEtZ4UVtI" type="video/mp4">
              </video> */}
          videos will come here
        </div>
        <div className=" flex justify-center items-center py-5 mt-5">
          <button className="py-3 px-32 text-white bg-green-700 rounded-lg ">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Videos;
