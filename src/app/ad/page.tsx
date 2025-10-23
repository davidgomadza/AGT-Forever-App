import React from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const AdContent: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const choice = searchParams.get('choice');

    const handleWatchAd = () => {
        router.push(`/video?choice=${choice}`);
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-bg text-center">
            <h1 className="text-2xl font-bold mb-8 text-white">
                Watch an advertisement to participate in a game
            </h1>
            <button className="btn bg-btn text-btn-blue w-64 mb-4 shadow-lg" onClick={handleWatchAd}>
                Next
            </button>
        </div>
    );
};

const Advertisement: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AdContent />
        </Suspense>
    );
};

export default Advertisement;
