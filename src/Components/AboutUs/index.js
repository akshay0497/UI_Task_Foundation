import React from "react";
import img1 from "../../Asset/Images/AboutUs/001-airplane.jpg";
import img2 from "../../Asset/Images/AboutUs/002-cargo-ship.jpg";

const AboutUs = () => {
  return (
    <div className="flex p-5 m-10 gap-5">
      <div className="w-1/2 px-10">
            <small className="text-[#adb5bd] font-bold text-xs" >MISSION</small>
            <h1 className="text-[#212529] font-bold text-4xl mt-1 mb-5">About Us</h1>
                <p className="!mb-12 font-normal text-sm font-sans text-justify p-1">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated they
                live in Bookmarksgrove right at the coast of the Semantics, a large
                language ocean.
                </p>
            <div className="flex justify-center items-center my-5">
                <div className="w-20 m-2">
                    <img src={img1} className="mr-10"></img>
                </div>
                <div>
                    <h1 className="font-semibold my-2">Air Freight</h1>
                    <p>
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center">
            <div className="w-20 m-2">
                <img src={img2}></img>
            </div>
            <div>
                <h1 className="font-semibold my-2">Sea Freight</h1>
                <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
                </p>
            </div>
            </div>
      </div>
      <div>
        <video width="320" height="240" controls autoPlay={true}>
          <source src="https://vimeo.com/342333493" type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
};

export default AboutUs;
