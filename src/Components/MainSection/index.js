import React from "react";

const Images = () => {
  return (
    <>
      <div className="">
        <h1 className="text-white w-96 ml-72 my-10  text-6xl font-bold mx-5">
          Find logistic Services
        </h1>
        <p className="text-white ml-72 pr-10 w-7/12 my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Quia,
          obcaecati dolorem voluptatem ex, quos laboriosam quas veniam
          voluptatum eum incidunt.
        </p>
        <div className="flex justify-evenly px-20">
          <div><input
            placeholder="Your ZIP code or City. e.g. New York"
            className="bg-transparent w-96 h-10"
          ></input></div>
          <div><button
            type="submit"
            className="bg-[#00eaff] px-8 text-[#081158] rounded h-10"
          >
            Search
          </button></div>
        </div>
      </div>
    </>
  );
};

export default Images;
