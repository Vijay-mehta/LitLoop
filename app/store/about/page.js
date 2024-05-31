import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto p-6   bg-white">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to LitLoop, your ultimate destination for a diverse range of
          books. Whether you're a fiction fanatic, non-fiction enthusiast, or
          seeking children's books, we have something for everyone!
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
        <p className="text-lg text-gray-600">
          LitLoop was founded with the passion and love for books. Our journey
          began when Vijay Mehta decided to turn his lifelong dream of creating
          a haven for book lovers into reality. We are dedicated to bringing you
          the best selection of books from around the world, right to your
          doorstep.
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Meet Our Team
        </h2>
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Image
              src="/home/vijay-pic.jpg"
              alt="Vijay Mehta"
              quality={100}
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-gray-800">
                Vijay Mehta
              </h3>
              <p className="text-lg text-gray-600">Frontend Developer</p>
            </div>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Our Values
        </h2>
        <p className="text-lg text-gray-600">
          At LitLoop, we believe in quality, customer satisfaction, and
          community. We strive to provide a seamless shopping experience, offer
          a diverse range of high-quality books, and give back to the community
          through various initiatives.
        </p>
      </section>
    </div>
  );
};

export default About;
