import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe("sk_test_51PKaXmSIiKxOdskAnkbclWteOthAdBBlZVvWupYnyFL4gP6eu8xvTo4VllQl6bqTWKNFIzoONAq9Szf7rp8Y5PjF00eIe8wiyT", {
  apiVersion: '2022-11-15',
});

export async function POST(request) {
  const { amount, description, customerName, customerAddress } = await request.json();

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd', // Set your desired currency
      description,
      shipping: {
        name: customerName,
        address: {
          line1: customerAddress.line1,
          postal_code: customerAddress.postal_code,
          country: customerAddress.country,
        },
      },
      metadata: {
        export_description: description,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
