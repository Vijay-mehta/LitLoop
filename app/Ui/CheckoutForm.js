import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CheckoutForm = ({ priceBuy, priceRent }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [amount, setAmount] = useState(priceBuy + priceRent);
  const [customerAddress, setCustomerAddress] = useState({
    line1: "123 Default Street",
    postal_code: "10001",
    country: "US",
  });

  useEffect(() => {
    setAmount(priceBuy + priceRent);
  }, [priceBuy, priceRent]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      setLoading(false);
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
        setLoading(false);
        return;
      }

      const { paymentIntent: confirmedPaymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(paymentIntent.clientSecret, {
          payment_method: paymentMethod.id,
        });

      if (confirmError) {
        setError(confirmError.message);
        setLoading(false);
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      router.push('/success');
    }
  }, [success, router]);

 

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col m-2 p-8 bg-white text-black">
        <div className="flex flex-col">
          <label className="mb-2 md:mb-3">Name:</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Enter customer name"
            required
            className="px-2 py-2 rounded-md border"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 mt-2 md:mt-5 md:mb-3">Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter transaction description"
            required
            className="px-2 py-2 rounded-md border"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 mt-2 md:mt-5 md:mb-3">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter amount"
            required
            className="px-2 py-2 rounded-md border"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 mt-2 md:mt-5 md:mb-3">Address:</label>
          <input
            type="text"
            value={customerAddress.line1}
            onChange={(e) =>
              setCustomerAddress({ ...customerAddress, line1: e.target.value })
            }
            placeholder="Enter address line 1"
            required
            className="px-2 py-2 rounded-md border"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 mt-2 md:mt-5 md:mb-3">Postal Code:</label>
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
            className="px-2 py-2 rounded-md border"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 mt-2 md:mt-5 md:mb-3">Country:</label>
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
            className="px-2 py-2 rounded-md border"
          />
        </div>

        <CardElement className="mt-5 mb-3 flex flex-col" />
        <button
          type="submit"
          disabled={!stripe || loading}
          className="bg-black text-white p-3 mt-3 rounded-md"
        >
          {loading ? "Processing..." : "Continue To Payment"}
        </button>
        <div className="text-center"> {loading? <p className=" text-red-700 mt-4 font-medium ">Please Do Not Back</p>:''}</div>

        {error && <div className="text-red-500 mt-3">{error}</div>}
        {success && <div className="text-green-600 mt-3">{toast.success('Payment Successful!')}</div>}
      </div>
    </form>
  );
};

export default CheckoutForm;
