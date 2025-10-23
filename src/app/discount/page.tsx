// pages/discount.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const DiscountContent: React.FC = () => {
  const searchParams = useSearchParams();
  const choice = searchParams.get('choice');

  const getDiscountMessage = () => {
    if (choice === 'sports') {
      return 'Congratulations! You have earned a 10% discount at Adidas.';
    } else if (choice === 'art') {
      return 'Congratulations! You have earned 1 month of free Netflix.';
    }
    return 'Congratulations! You have earned a special discount!';
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-bg p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4 text-black">Your Reward</h1>
        <p className="text-lg mb-8 text-gray-600">{getDiscountMessage()}</p>
        <button
          className="btn btn-black text-white w-full"
          onClick={() => alert('Discount Applied!')}
        >
          Apply Discount
        </button>
      </div>
    </div>
  );
};

export default function DiscountPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DiscountContent />
    </Suspense>
  );
}
