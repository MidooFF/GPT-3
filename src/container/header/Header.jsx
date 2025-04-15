import React from "react";
import people from "../../../public/people.png";
import ai from "../../../public/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section-padding" id="home">
      <div className="gpt3__header-content">
        <h1
          className="gradient__text font-extrabold text-[40px]/[60px]
        max-sm:text-[36px]/[48px]"
        >
          Let's Build Something Amazing With GPT-3 OpenAI
        </h1>
        <p
          className="text-[18px]/[27px] text-(--color-text) mt-[1.5rem]
        max-sm:text-[14px]/[24px]"
        >
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of
        </p>
        <div className="gpt3__header-content__input">
          <input
            type="email"
            placeholder="Your Email Address"
            className=" text-white rounded-tl-[5px] rounded-bl-[5px] text-[20px]/[27px]
            bg-(--color-footer) flex-2 w-full min-h-[50px] border-2 border-solid 
            border-(--color-footer) px-[1rem] outline-none max-sm:text-[12px]/[16px]"
          />
          <button
            type="button"
            className="flex-[0.6] w-full min-h-[50px] font-semibold text-[18px]/[27px] 
            text-white bg-(--color-orange-600) rounded-tr-[5px] rounded-br-[5px]
            px-[1rem] border-none max-sm:text-[16px]/[24px]"
          >
            Get Started
          </button>
        </div>

        <div className="gpt3__header-content__people max-sm:flex-col">
          <img src={people} alt="people" className="w-[181.79px] h-[38px]" />
          <p
            className="font-medium text-[12px]/[38px] text-white ml-[1rem] text-center
          max-sm:m-0 "
          >
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
