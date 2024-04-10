import ImageComp from "./imageComp/ImageComp";

const Gallery = () => {
  return (
    <div className=" py-5 bg-slate-100 ">
      <div className="container mx-auto">
        <h1 className=" underline underline-offset-8 text-2xl text-center mb-10">
          Gallery
        </h1>
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1 ">
          <ImageComp />
        </div>
        <div className=" flex justify-center items-center mt-5">
          <button className="px-10 py-1 text-white bg-green-700 rounded-lg ">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
