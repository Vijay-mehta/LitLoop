'use client'
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [description, setDescription] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [amount, setAmount] = useState(0);
  const [customerAddress, setCustomerAddress] = useState({
    line1: '123 Default Street',
    country: 'US',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      return;
    }

    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
        setError('Unable to create payment intent');
        return;
      }

      const { paymentIntent: confirmedPaymentIntent, error: confirmError } = await stripe.confirmCardPayment(paymentIntent.clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (confirmError) {
        setError(confirmError.message);
        return;
      }

      if (confirmedPaymentIntent && confirmedPaymentIntent.status === 'succeeded') {
        setSuccess(true);
      } else {
        setError('Payment failed');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Enter customer name"
          required
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter transaction description"
          required
        />
      </label>

      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
        />
      </label>

      <label>
        Address:
        <input
          type="text"
          value={customerAddress.line1}
          onChange={(e) => setCustomerAddress({ ...customerAddress, line1: e.target.value })}
          placeholder="Enter address line 1"
          required
        />
      </label>

      <label>
        Postal Code:
        <input
          type="text"
          value={customerAddress.postal_code}
          onChange={(e) => setCustomerAddress({ ...customerAddress, postal_code: e.target.value })}
          placeholder="Enter postal code"
          required
        />
      </label>
      <label>
        Country:
        <input
          type="text"
          value={customerAddress.country}
          onChange={(e) => setCustomerAddress({ ...customerAddress, country: e.target.value })}
          placeholder="Enter country"
          required
        />
      </label>
      <CardElement />
      <button type="submit" disabled={!stripe}>Pay</button>
      {error && <div>{error}</div>}
      {success && <div>Payment Successful!</div>}
    </form>
  );
};

export default CheckoutForm;
