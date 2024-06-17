import React from "react";

const Online = () => {
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
          href="https://app.payitmonthly.uk/agreement/pay-by-link/d3ed3135-c7c3-47ce-a47e-72c9fd6ff1d8/kfGyU8epXrzfilMwWde620L3l/button"
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

export default Online;
