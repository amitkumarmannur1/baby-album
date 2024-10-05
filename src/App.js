import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BabyAlbum = ({ title, description, mediaItems }) => {
  const [currentItem, setCurrentItem] = useState(0);

  const nextMedia = () => {
    setCurrentItem((prevItem) => (prevItem + 1) % mediaItems.length);
  };

  const prevMedia = () => {
    setCurrentItem((prevItem) => (prevItem - 1 + mediaItems.length) % mediaItems.length);
  };

  return (
    <div className="max-w-2xl mx-auto my-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="relative h-96 bg-white shadow-lg rounded-lg overflow-hidden">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-300 ${
              index === currentItem ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
              />
            )}
          </div>
        ))}
        <button
          onClick={prevMedia}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-r-lg"
        >
          <ChevronLeft className="text-gray-800" />
        </button>
        <button
          onClick={nextMedia}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-l-lg"
        >
          <ChevronRight className="text-gray-800" />
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {mediaItems.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === currentItem ? 'bg-gray-800' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const albumData = [
    {
      title: "First Days",
      description: "This is how I looked when I was born: a tiny burrito wrapped in blankets, with a squished potato face, wrinkly like a raisin, and hair that looked like it was styled by a static balloon! Definitely ready to take on the world… or maybe just nap.",
      mediaItems: [
        { type: 'image', src: 'PXL_20240802_040414000.PORTRAIT.jpg', alt: 'Baby photo 1' },
        { type: 'image', src: 'PXL_20240801_223932447.RAW-01.MP.COVER.jpg', alt: 'Baby photo 2' },
        { type: 'image', src: 'PXL_20240801_225544162.RAW-01.COVER.jpg', alt: 'Baby photo 3' },
      ],
    },
    {
      title: "Family Moments",
      description: "Here I am, cozy in the lap of my sweet sister! She's holding me like a pro, already showing off her big sister skills. I'm snuggled up and loving the extra attention, while she beams proudly like she's been waiting for this moment forever!",
      mediaItems: [
        { type: 'image', src: 'PXL_20240801_225648983.RAW-02.ORIGINAL.dng', alt: 'Family photo 1' },
        { type: 'image', src: 'PXL_20240802_023154578.PORTRAIT.ORIGINAL.jpg', alt: 'Family photo 2' },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">My Interactive Baby Album</h1>
      {albumData.map((album, index) => (
        <BabyAlbum key={index} {...album} />
      ))}
    </div>
  );
};

export default App;