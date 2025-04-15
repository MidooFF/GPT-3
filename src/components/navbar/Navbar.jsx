import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <React.Fragment>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT3 ?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </React.Fragment>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div
      className="flex  items-center px-[6rem] py-[2rem] justify-between 
    max-md:py-[2rem] max-md:px-[2rem] mx-sm:py-[4rem] "
    >
      <div className="flex justify-between items-center ">
        <div className="mr-[2rem]">
          <img
            src={"./logo.svg"}
            alt="logo"
            className="w-[62.56px] h-[16.02]"
          />
        </div>
        <div
          className="gpt3__navbar-links_container flex justify-between items-center 
          max-lg:hidden
        "
        >
          <Menu></Menu>
        </div>
      </div>
      <div className="flex items-center justify-space-between max-sm:hidden cursor-pointer">
        <p className="text-[#fff] ">Sign In</p>
        <button
          type="button"
          className="text-white bg-orange-600 px-[1rem] py-[0.5rem]
           ml-[15px] text-medium cursor-pointer rounded-[5px]"
        >
          Sign Up
        </button>
      </div>
      <div className="hidden ml-[3px] relative max-lg:flex">
        {toggleMenu ? (
          <FontAwesomeIcon
            className="text-[#fff] text-[30px]"
            icon={faClose}
            onClick={() => {
              setToggleMenu(false);
            }}
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            className="text-[#fff] text-[30px]"
            icon={faBars}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu && (
          <div
            className="flex justify-end items-end flex-col text-end
           bg-(--color-footer) p-[2rem] absolute top-[40px]  right-0 mt-[1rem] 
           min-w-[210px] rounded-[5px] shadow-[0_0_0_0_rgba(0,0,0,0.2)]
          scale-left scale-right max-sm:top-[20px] "
          >
            <div className="gpt3__navbar-menu_container-links ">
              <Menu></Menu>
              <div className="items-center justify-space-between hidden max-sm:block">
                <p className="text-[#fff] ">Sign In</p>
                <button
                  type="button"
                  className="text-white bg-orange-600 px-[1rem] py-[0.5rem]
           ml-[15px] text-medium cursor-pointer rounded-[5px]"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
