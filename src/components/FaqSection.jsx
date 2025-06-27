import Lottie from "lottie-react";
import React from "react";
import faqanimation from "../animation/faq-animation.json";
import {Helmet} from "react-helmet";

const FaqSection = () => {
  return (
    <>
      <Helmet>
        <title>HOME - HobbyHub</title>
        <meta name="description" content="Frequently Asked Questions about HobbyHub" />
      </Helmet>
      <div className="text-center font-bold my-12 text-2xl">
        <h1 className="primary">Frequently Asked Questions</h1>
      </div>
      <div className="mx-5 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 md:gap-5 lg:gap-5">
        <div className="space-y-5 mt-8">
          <div
            tabIndex={0}
            className="collapse  collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title font-semibold primary">
                1. How to Get Started?
            </div>
            <div className="collapse-content secondary text-sm">
              To get started, simply create an account and log in.
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse  collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title font-semibold primary">
                2. How to Post a Group?
            </div>
            <div className="collapse-content text-sm secondary">
              To post a Group, click on the "Create Group" button and fill out the form with the required details.
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse  collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title font-semibold primary">
              3. How to Search for a Group?
            </div>
            <div className="collapse-content text-sm secondary">
              Browse through groups by using the search bar or filtering options.
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse  collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title font-semibold primary">
                4. How to Join a Group?
            </div>
            <div className="collapse-content text-sm secondary">
              To join a group, click on the "Join Group" button and follow the prompts.
            </div>
          </div>
        </div>

        <div className="ml-0 mx-5  lg:ml-38">
          <Lottie
            style={{ width: "380px" }}
            animationData={faqanimation}
            loop={true}
          ></Lottie>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
