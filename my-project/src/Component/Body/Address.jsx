import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../fix/redux/cartSlice";

const Address = () => {
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    mobile: "",
    wardNo: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogin = useSelector((state) => state.auth.isLogin);
  const finalPay = useSelector((state) => state.cart.price);

  const HandleClearCart = () => {
    dispatch(clearCart());
  };
  const loadScript = (src1) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");

      script.src = src1;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorPay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("you are offline check your connection");
      return;
    }
    if (!isLogin) {
      navigate("/UserLogin");
      return;
    }

    const options = {
      key: "rzp_test_uv5yiT1eAXgJYm",
      currency: "INR",
      amount: finalPay * 100,
      name: "Urban Services",
      description: "thanks For purchasing",
      image: "",
      handler: function (response) {
        HandleClearCart();
        alert(response.razorpay_payment_id);
        alert("payment Done");
      },
      prefill: {
        name: "Shivam",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    displayRazorPay(finalPay);
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center flex-col bg-gray-100">
      <div className="text-xl font-bold my-6 text-center">
        Please Fill Address
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4 flex gap-8">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Fname"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Fname"
              name="Fname"
              type="text"
              placeholder="First Name"
              value={formData.Fname}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Lname"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Lname"
              name="Lname"
              type="text"
              placeholder="Last Name"
              value={formData.Lname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="mobile"
          >
            Mobile No
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="mobile"
            name="mobile"
            type="text"
            placeholder="Enter your mobile number"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="wardNo"
          >
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="wardNo"
            name="wardNo"
            type="text"
            placeholder="Enter your ward number"
            value={formData.wardNo}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4"></div>
        <div className="mb-4 flex gap-8">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="city"
            >
              City
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="city"
              name="city"
              type="text"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pinCode"
            >
              Pin-Code
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pinCode"
              name="pinCode"
              type="text"
              placeholder="Enter your pinCode"
              value={formData.pinCode}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4 flex gap-8">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="state"
            >
              State
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="state"
              name="state"
              type="text"
              placeholder="Enter your state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="country"
            >
              Country
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="country"
              name="country"
              type="text"
              placeholder="Enter your country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Address;
