import ImageComp from "./imageComp/ImageComp";

const Gallery = () => {
  return (
    <div className=" py-20 bg-green-50 ">
      <div className="container mx-auto">
        <h1 className=" text-xl text-center mb-10 font-bold">
          Gallery
        </h1>
        <div>
          <ImageComp />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
