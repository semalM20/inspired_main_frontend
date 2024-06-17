import React from "react";
import { useNavigate } from "react-router-dom";

const FinalTest = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="w-full">
        <iframe
          title="Google Form"
          src="https://docs.google.com/forms/d/1IJnmI9Z4eu3YXF5WcL6NCsrDhrvgQ_xXue74cDBdRWc"
          width="100%"
          height="700"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading...
        </iframe>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p>Go back to home page</p>
        <button
          className="px-3 py-1 m-2 rounded-full text-white bg-red-600 hover:bg-red-700"
          onClick={handleClick}
        >
          Home Page
        </button>
      </div>
    </>
  );
};

export default FinalTest;
