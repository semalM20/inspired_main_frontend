import React, { useState } from "react";
import axios from "axios";
import SummaryApi from "../../common";
import { useNavigate } from "react-router-dom";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "400px",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  backgroundColor: "black",
};

const inputStyle = {
  margin: "10px 0",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

function ReviewForm() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(SummaryApi.postReviews.url, {
      name,
      rating,
      comment,
    });
    setName("");
    setRating("");
    setComment("");
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/viewReviews");
  };

  return (
    <>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          style={inputStyle}
          min="1"
          max="5"
          required
        />
        <textarea
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={inputStyle}
          required
        />
        <button
          type="submit"
          className="w-fit mx-auto block py-1 px-3 rounded bg-red-600 text-white hover:bg-red-700"
        >
          Submit
        </button>
      </form>
      <button
        className="w-fit mx-auto block py-1 px-3 rounded bg-red-600 text-white hover:bg-red-700 mt-4"
        onClick={handleClick}
      >
        View Reviews
      </button>
    </>
  );
}

export default ReviewForm;
