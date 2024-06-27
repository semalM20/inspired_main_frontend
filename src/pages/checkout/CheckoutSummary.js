import React, { useEffect, useState } from "react";
import SummaryApi from "../../common";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CheckoutSummary = () => {
  const cartCount = useSelector((state) => state.cart.count);

  // State for holding cart products and loading state
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Function to fetch cart data
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(SummaryApi.addToCartProductView.url, {
        method: SummaryApi.addToCartProductView.method,
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
      });

      const responseData = await response.json();

      if (responseData.success && responseData.data.length > 0) {
        setData(responseData.data[0].products);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Failed to fetch cart data", error);
    } finally {
      setLoading(false); // Ensure loading state is set to false after fetch
    }
  };

  // Function to handle initial loading of data
  const handleLoading = async () => {
    await fetchData();
  };

  useEffect(() => {
    handleLoading(); // Load data on component mount
  }, []);

  // Calculate total quantity and total price
  const totalQty = data.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );

  const totalPrice = data.reduce(
    (prev, curr) => prev + curr.quantity * curr?.productId?.sellingPrice,
    0
  );

  // Handle payment button click
  const handlePayment = () => {
    navigate("/shopPayment"); // Navigate to payment page
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-2xl text-red-600 uppercase underline my-10">
        Checkout Summary
      </h3>
      {loading ? (
        <div className="h-36 bg-slate-200 border border-slate-300 animate-pulse"></div>
      ) : (
        <div className=" h-52 bg-white w-96 flex flex-col justify-around">
          <h2 className="text-white bg-red-600 px-4 py-1">Summary</h2>
          <div className="flex justify-between items-center px-4 gap-2 font-medium text-lg text-slate-600">
            <p>Quantity</p>
            <p>{totalQty}</p>
          </div>
          <div className="flex justify-between items-center px-4 gap-2 font-medium text-lg text-slate-600">
            <p>Total Price</p>
            <p>{totalPrice.toFixed(2)} GBP</p>
          </div>
          <button
            className="bg-blue-600 p-2 mt-2 text-white w-full"
            onClick={handlePayment}
          >
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutSummary;
