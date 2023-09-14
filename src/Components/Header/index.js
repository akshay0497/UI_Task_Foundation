import React from "react";
import './index.css'
const Headers = () => {
  return (
    <div id="Header">
      <div className=" py-9 flex justify-between mx-20">
        <a className="font-bold text-3xl text-white">Foundation</a>
        <div className="list-none flex text-base text-[#ffffff80]">
          <li className="mx-5"><a>Home</a></li>
          <div id="dropdown2">
                <button type="submit" id="btn">Dropdown</button>
                <div id="dropdown-contentss">
                    <div id="accs">
                        <a href="#" >Menu One</a>
                        <a href="#" >Menu Two
                        <ul id="dropdown2">
                          <li><a>Sub Menu One</a></li>
                          <li><a>Sub Menu Two</a></li>
                          <li><a>Sub Menu Three</a></li>
                        </ul>
                        </a>
                        <a href="#" >Menu Three</a>
                    </div>
                </div>
            </div>
          <li className="mx-5"><a>Services</a></li>
          <li className="mx-5"><a>About</a></li>
          <li className="mx-5"><a>Contact Us</a></li>
        </div>
      </div>
    </div>
  );
};

export default Headers;
