"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Home: React.FC = () => {
    const router = useRouter();

    const handleSelection = () => {
        router.push(`/quiz`);
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-bg">
            <Image
                src="/images/ad.svg"
                alt="logo"
                width={150}
                height={150}
                className="mb-6" // Margin bottom added
            />
            <Image
                src="/images/cube.svg"
                alt="logo"
                width={150}
                height={150}
                className="mb-6" // Margin bottom added
            />
            <Image
                src="/images/start.svg"
                alt="logo"
                width={250}
                height={250}
                className="mb-8" // Larger margin bottom added for more spacing
            />
            <button
                className="btn bg-btn text-btn-blue w-64 mb-4 shadow-lg"
                onClick={handleSelection}
            >
                Next
            </button>
        </div>
    );
};

export default Home;
