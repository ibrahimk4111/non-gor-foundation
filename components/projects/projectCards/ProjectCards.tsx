import React from 'react'

const ProjectCards:React.FC = () => {
  return (
    <div className=" p-3 text-white rounded-lg overflow-hidden bg-gradient-to-br from-green-500 to-green-700">
      <section className="p-5 flex flex-col justify-between items-start gap-5">
        <h1 className=" text-xl lg:text-2xl text-center font-bold">
          As-Sunnah Foundation Masjid Complex
        </h1>
        <p className=" overflow-auto text-justify">
          The As-Sunnah Foundation Masjid Complex will be the focal point of the
          multi-faceted activities of the As-Sunnah Foundation for the welfare
          of the country, nation and ummah. In-Sha-Allah it will be the center
          of various humanitarian and public welfare projects, including an
          ideal mosque, a modern madrasah with an integrated syllabus aimed at
          creating an Islamic scholar to meet the needs of the age.
        </p>
        <div className=" w-full ">
          <button
            className="py-3 px-5 text-green-700 bg-white rounded-lg w-full "
          >
            Read More
          </button>
        </div>
      </section>
    </div>
  )
}

export default ProjectCards