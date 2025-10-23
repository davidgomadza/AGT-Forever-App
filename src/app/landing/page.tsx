'use client';

import { useState } from 'react';

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);

  const handleContactClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="py-6 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-4xl font-bold">Ad Game</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#worldcoin" className="hover:underline">Worldcoin</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with Image */}
      <section className="relative text-center">
        <img
          src="/images/hero-image.avif"
          alt="A diverse group of people engaging with digital content"
          className="w-full h-screen object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 text-white p-6">
          <h2 className="text-4xl font-bold mb-4 text-white">Engage with Verified Users, Deliver Authentic Rewards</h2>
          <p className=" text-2xl mb-8 max-w-lg text-white">
            Empower your brand with Worldcoin's cutting-edge identity verification technology to ensure your marketing efforts reach real, verified individuals.
          </p>
          <button onClick={handleContactClick} className="btn btn-primary btn-lg rounded-full bg-gradient-to-r from-blue-500 to-teal-400">
            Contact Us
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-10 text-black">Why Ad Game?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-black">
              <h4 className="text-2xl font-bold mb-4">Powered by Worldcoin</h4>
              <p className="text-gray-700">
                Leverage Worldcoin's unique identity verification system to ensure your audience is real and engaged, reducing fraud and maximizing impact.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-black">
              <h4 className="text-2xl font-bold mb-4">Targeted Campaigns</h4>
              <p className="text-gray-700">
                Deliver personalized offers and rewards based on verified user preferences, driving higher engagement and conversions.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-black">
              <h4 className="text-2xl font-bold mb-4">Data-Driven Insights</h4>
              <p className="text-gray-700">
                Gain actionable insights from authenticated user data, allowing you to refine your marketing strategies for maximum effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Worldcoin Focus Section */}
      <section id="worldcoin" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-6 text-black">The Power of Worldcoin</h3>
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-4">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              <h4 className="text-xl font-bold mb-4 text-black">Identity Verification</h4>
              <p className="text-gray-700">
                Worldcoin's secure and privacy-preserving identity verification ensures that your audience is composed of real, unique individuals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              <h4 className="text-xl font-bold mb-4 text-black">Global Reach</h4>
              <p className="text-gray-700">
                Tap into a global network of verified users, expanding your reach and impact across multiple markets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              <h4 className="text-xl font-bold mb-4 text-black">Fraud Prevention</h4>
              <p className="text-gray-700">
                Protect your brand and campaigns from fraudulent activity by ensuring every interaction is genuine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center px-4">
          <p>&copy; 2024 Ad Game. All rights reserved.</p>
          <nav className="mt-4">
            <ul className="flex justify-center space-x-4">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#worldcoin" className="hover:underline">Worldcoin</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </footer>

      {/* Modal for Contact Information */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full justify-center flex flex-col items-center">
            <h3 id="contact" className="text-2xl font-bold mb-4 text-black">Reach Out to Us</h3>
            <p className="text-lg mb-6 text-gray-700">
              We would love to hear from you! Reach out to us through any of the following channels:
            </p>
            <div className="flex flex-col items-start space-y-4">             
              <a href="https://t.me/t0t0_eth" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline text-black">
                Telegram: @t0t0_eth
              </a>
              <a href="https://github.com/Paul-Sizon/worldcoin-app" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline text-black">
                GitHub: https://github.com/Paul-Sizon/worldcoin-app
              </a>
            </div>
            <button onClick={handleCloseModal} className="mt-6 btn btn-primary rounded-full bg-gradient-to-r from-blue-500 to-teal-400 max-w-20">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
