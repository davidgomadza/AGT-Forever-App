'use client';

import { useRouter } from 'next/navigation';

export default function VideoPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/question');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen p-4 bg-bg">
      <div className="w-full h-[80vh] mb-4 max-w-md"> {/* Container takes 80% of the viewport height */}
        <div className="relative w-full h-full"> {/* Full width and height for the iframe */}
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://drive.google.com/file/d/1HQFZn4SzaJnARUyRzjcwSG0uuBrG6Ta2/preview"
            title="video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          ></iframe>
          {/* https://drive.google.com/file/d/1HQFZn4SzaJnARUyRzjcwSG0uuBrG6Ta2/view?usp=sharing */}
        </div>
      </div>
      <button className="btn bg-btn text-btn-blue w-64 mb-4 shadow-lg" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}
