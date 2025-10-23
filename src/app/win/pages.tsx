"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Win: React.FC = () => {
    const router = useRouter();

    const handleSelection = () => {
      
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-bg">
            <Image
                src="/images/yay.svg"
                alt="logo"
                width={200}
                height={200}
                className="mb-6" // Margin bottom added
            />
            <Image
                src="/images/stars.svg"
                alt="logo"
                width={200}
                height={200}
                className="mb-2" // Margin bottom added
            />
            <Image
                src="/images/win.svg"
                alt="logo"
                width={300}
                height={300}
                className="mb-8" // Larger margin bottom added for more spacing
            />
            <button
                className="btn bg-btn text-btn-blue w-64 mb-4 shadow-lg"
                onClick={handleSelection}
            >
                Claim
            </button>
        </div>
    );
};

export default Win;
