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
                src="/images/clock.svg"
                alt="logo"
                width={200}
                height={200}
                className="mb-6" // Margin bottom added
            />
                    <h1 className="text-4xl text-yellow-500">Try again later</h1> 
        </div>
    );
};

export default Win;
