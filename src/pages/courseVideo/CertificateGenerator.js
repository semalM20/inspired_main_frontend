// CertificateGenerator.js
import React from "react";
import { jsPDF } from "jspdf";

const CertificateGenerator = ({ userName }) => {
  const generateCertificate = () => {
    const doc = new jsPDF();

    const date = new Date().toLocaleDateString();

    // Add text to the PDF
    doc.setFontSize(30);
    doc.text("CERTIFICATE OF COMPLETION", 105, 30, null, null, "center");
    doc.setFontSize(16);
    doc.text(
      `THIS CERTIFICATE IS PROUDLY PRESENTED TO`,
      105,
      75,
      null,
      null,
      "center"
    );
    doc.text(`${userName}`, 105, 85, null, null, "center");
    doc.setFontSize(14);
    doc.text(
      `FOR SUCCESSFULLY COMPLETING THE BEGINNER-BARBER COURSE ONLINE.`,
      105,
      95,
      null,
      null,
      "center"
    );
    doc.setFontSize(10);
    doc.text(`Date: ${date}`, 30, 115, null, null, "center");
    doc.setFontSize(10);
    doc.text(`INSTRUCTOR : ADRIAN MECHERES`, 35, 120, null, null, "center");

    // Save the PDF
    doc.save("certificate.pdf");
  };

  return (
    <div className="certificate-container">
      <button
        onClick={generateCertificate}
        className="px-3 py-1 m-2 rounded-full text-white bg-red-600 hover:bg-red-700"
      >
        GENERATE CERTIFICATE
      </button>
    </div>
  );
};

export default CertificateGenerator;
