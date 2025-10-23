"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Quiz: React.FC = () => {
  const router = useRouter();

  const handleSelection = (choice: string) => {
    if (choice === 'Maligno Torres') {
      router.push(`/win`);
    } else {
      router.push(`/wrong`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-bg p-4">
      <h1 className="text-2xl font-bold mb-8 text-white text-center">Which Olympic athlete appears in the video?</h1>
      <button
        className="btn bg-btn text-btn-blue w-full max-w-xs mb-4 shadow-lg"
        onClick={() => handleSelection('Paula Paretto')}
      >
        Paula Paretto
      </button>
      <button
        className="btn bg-btn text-btn-blue w-full max-w-xs mb-4 shadow-lg"
        onClick={() => handleSelection('Maligno Torres')}
      >
        "Maligno" Torres
      </button>
      <button
        className="btn bg-btn text-btn-blue w-full max-w-xs mb-4 shadow-lg"
        onClick={() => handleSelection('Maria Jose Granatto')}
      >
        Maria Jose Granatto
      </button>
    </div>
  );
};

export default Quiz;
