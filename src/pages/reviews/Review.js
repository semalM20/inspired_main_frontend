import React from "react";
import ReviewForm from "./ReviewForm";

const appStyle = {
  textAlign: "center",
  padding: "20px",
};

function Review() {
  return (
    <div style={appStyle} className="flex flex-col justify-center items-center">
      <h1 className="uppercase bg-red-700 text-white w-[266px] h-8 text-center mb-2 p-1 rounded font-medium">
        Reviews
      </h1>
      <ReviewForm />
    </div>
  );
}

export default Review;
