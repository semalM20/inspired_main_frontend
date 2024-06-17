import React from "react";

const OfflineB = () => {
  const buttonStyle = {
    backgroundColor: "#c3aee1",
    borderRadius: "50px",
    color: "#313a46",
    display: "inline-block",
    fontFamily: "Arial, serif",
    fontSize: "15px",
    fontWeight: "bold",
    lineHeight: "50px",
    textAlign: "center",
    textDecoration: "none",
    width: "200px",
    WebkitTextSizeAdjust: "none",
  };
  return (
    <>
      <p>Pay the course fee on monthly basis by clicking on the below link</p>
      <div>
        <a
          href="https://app.payitmonthly.uk/agreement/pay-by-link/8b19c15c-d54a-4c9c-bab7-b9cfdb5cc32e/DdqW3X6ncjYasKBI6Zejfx5cj/button"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          Pay By Pay It Monthly
        </a>
      </div>
    </>
  );
};

export default OfflineB;
