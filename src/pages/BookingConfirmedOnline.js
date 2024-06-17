import React from "react";
import { useSelector } from "react-redux";
import RedirectToLogin from "../components/RedirectToLogin";
import { useNavigate } from "react-router-dom";

const BookingConfirmed = () => {
  const user = useSelector((state) => state?.user?.user);

  const userDetails = JSON.parse(localStorage.getItem("session"));

  let onlineCourse;

  if (userDetails) {
    onlineCourse = userDetails.onlineCoursePayment === 1;
  }

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/onlineCoursePayment");
  };

  const handleVideoClick = () => {
    navigate("/videoCourse");
  };

  return (
    <>
      {user?._id ? (
        onlineCourse ? (
          <>
            <div className="flex flex-col justify-center items-center h-96">
              <p>You have successfully purchased the online course</p>
              <h1>Click here to go to the course page</h1>
              <button
                onClick={handleVideoClick}
                className="px-3 py-1 m-2 rounded-full text-white bg-red-600 hover:bg-red-700"
              >
                Video Course
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-center flex-col items-center h-96">
            <p className="text-red-600 font-bold">
              Video Course Fee: 1250 GBP{" "}
            </p>
            <p>You have not purchased the video course</p>
            <p>click here to buy the course </p>
            <button
              onClick={handleClick}
              className="px-3 py-1 m-2 rounded-full text-white bg-red-600 hover:bg-red-700"
            >
              Buy Video Course
            </button>
          </div>
        )
      ) : (
        <RedirectToLogin />
      )}
    </>
  );
};

export default BookingConfirmed;
