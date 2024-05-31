import React from "react";

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto p-6  bg-white">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Have any questions? We'd love to hear from you. Reach out to us through any of the channels below.
        </p>
      </section>
      <section className="mb-12">
        <div className="flex flex-col sm:flex-row justify-around items-center space-y-8 sm:space-y-0 sm:space-x-8">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
            <p className="text-lg text-blue-500">infovijay1998@gmail.com</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold text-gray-800">Follow Us</h3>
            <p className="text-lg text-blue-500">@LitLoop</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold text-gray-800">Chat with Us</h3>
            <p className="text-lg text-blue-500">Live Chat</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
