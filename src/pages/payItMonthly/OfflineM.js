import React from "react";

const OfflineM = () => {
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
          href="https://app.payitmonthly.uk/agreement/pay-by-link/c403c06f-7fa7-4046-ba01-5f0878dd8c9e/s5EK9JfZf9aFCj6wUWkmp3f28/button"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          Pay By Pay It Monthly
        </a>
      </div>
      <p>
        After successful payment, course will be updated in the next 24 hours
      </p>
    </>
  );
};

export default OfflineM;
