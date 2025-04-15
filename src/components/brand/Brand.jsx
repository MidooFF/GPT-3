import React from "react";
import google from "../../../public/google.png";
import slack from "../../../public/slack.png";
import atlassian from "../../../public/atlassian.png";
import dropbox from "../../../public/dropbox.png";
import shopify from "../../../public/shopify.png";

const Brand = () => {
  return (
    <div className="gpt3__brand section-padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
