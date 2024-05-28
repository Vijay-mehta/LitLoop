import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [description, setDescription] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [amount, setAmount] = useState(0);
  const [customerAddress, setCustomerAddress] = useState({
    line1: "123 Default Street",
    postal_code: "10001",
    country: "US",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      return;
    }

    try {
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          description,
          customerName,
          customerAddress,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const paymentIntent = await response.json();

      if (!paymentIntent.clientSecret) {
        setError("Unable to create payment intent");
        return;
      }

      const { paymentIntent: confirmedPaymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(paymentIntent.clientSecret, {
          payment_method: paymentMethod.id,
        });

      if (confirmError) {
        setError(confirmError.message);
        return;
      }

      if (
        confirmedPaymentIntent &&
        confirmedPaymentIntent.status === "succeeded"
      ) {
        setSuccess(true);
      } else {
        setError("Payment failed");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=" flex  flex-col  m-2 p-4 bg-white text-black">
        <div className=" flex flex-col  ">
          <label className=" mb-2 md:mb-3"> Name:</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Enter customer name"
            required
            className=" px-2 py-2  rounded-md border"
          />
        </div>

        <div className=" flex flex-col  ">
          <label className="mb-2 mt-2 md:mt-5 md:mb-3">Description: </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter transaction description"
            required
            className=" px-2 py-2  rounded-md border"

          />
        </div>

        <div className=" flex flex-col  ">
          {" "}
          <label className=" mb-2 mt-2 md:mt-5 md:mb-3 ">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
            className=" px-2 py-2  rounded-md border"

          />
        </div>

      <div className=" flex flex-col  "> <label className="mb-2 mt-2 md:mt-5 md:mb-3">   Address: </label>
        
          <input
            type="text"
            value={customerAddress.line1}
            onChange={(e) =>
              setCustomerAddress({ ...customerAddress, line1: e.target.value })
            }
            placeholder="Enter address line 1"
            required
            className="px-2 py-2  rounded-md border"

          /></div> 
      

       <div className=" flex flex-col  "> <label className=" mb-2 mt-2 md:mt-5 md:mb-3">
          Postal Code: </label>
          <input
            type="text"
            value={customerAddress.postal_code}
            onChange={(e) =>
              setCustomerAddress({
                ...customerAddress,
                postal_code: e.target.value,
              })
            }
            placeholder="Enter postal code"
            required
            className=" px-2 py-2  rounded-md border"

          /></div>
       
       <div className=" flex flex-col  "> <label className="mb-2 mt-2 md:mt-5 md:mb-3">
          Country: </label>
          <input
            type="text"
            value={customerAddress.country}
            onChange={(e) =>
              setCustomerAddress({
                ...customerAddress,
                country: e.target.value,
              })
            }
            placeholder="Enter country"
            required
            className=" px-2 py-2  rounded-md border"

          /></div>
       
        <CardElement className=" mt-5 mb-3"/>
        <button type="submit" disabled={!stripe} className="bg-black text-white p-3 mt-3 rounded-md">
          Continue To Payment
        </button>
        {error && <div>{error}</div>}
        {success && <div  className="text-green-600">{toast.success('Payment Successful!')}</div> 
        
        }
      </div>
    </form>
  );
};

export default CheckoutForm;
