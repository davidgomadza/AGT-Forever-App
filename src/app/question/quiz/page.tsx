"use client";


import React from 'react';
import { useRouter } from 'next/navigation'

const Quiz: React.FC = () => {
  const router = useRouter();

  const handleSelection = (choice: string) => {
    router.push(`/ad`);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-bg">
      <h1 className="text-2xl font-bold mb-8 text-white">Choose your interests</h1>
      <button
        className="btn bg-btn text-btn-blue w-64 mb-4 shadow-lg"
        onClick={() => handleSelection('sports')}
      >
        Sports
      </button>
      <button
        className="btn bg-btn text-btn-blue w-64 mb-4 shadow-lg"
        onClick={() => handleSelection('art')}
      >
        Art
      </button>
      <button
        className="btn bg-btn text-btn-blue w-64 mb-4 shadow-lg"
        onClick={() => handleSelection('fashion')}
      >
        Fashion
      </button>
    </div>
  );
};

export default Quiz;
