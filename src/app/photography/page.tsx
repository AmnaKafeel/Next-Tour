

import React from 'react';
import Image from 'next/image';

const Photography = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-white bg-gradient-to-r from-orange-900 to-purple-600 p-4 rounded-lg border-4 border-white shadow-lg mb-8">
        Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="relative w-full h-64">
          <Image
            src="/spellbound.jpg"
            alt="Spellbound"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative w-full h-64 col-span-2">
          <Image
            src="/religious1.jpg"
            alt="Religious"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative w-full h-64">
          <Image
            src="/korakoram1.jpg"
            alt="Karakoram"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative w-full h-64">
          <Image
            src="/culture.jpeg"
            alt="Culture"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* pic2 spans across 2 columns */}
        <div className="relative w-full h-64 col-span-2">
          <Image
            src="/pic2.jpg"
            alt="Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative w-full h-64">
          <Image
            src="/pic3.jpg"
            alt="Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative w-full h-64">
          <Image
            src="/pic4.jpg"
            alt="Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* pic7 spans across 2 columns */}
        <div className="relative w-full h-64 col-span-2">
          <Image
            src="/pic7.jpg"
            alt="Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative w-full h-64">
          <Image
            src="/pic5.jpg"
            alt="Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative w-full h-64">
          <Image
            src="/pic6.jpg"
            alt="Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* pic8 spans across 2 columns */}
        <div className="relative w-full h-64 col-span-2">
          <Image
            src="/pic8.jpg"
            alt="Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative w-full h-64">
          <Image
            src="/pic10.jpg"
            alt="Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
          </div>

        <div className="relative w-full h-64 col-span-2">
          <Image
            src="/pic9.jpg"
            alt="Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative w-full h-64 col-span-2">
          <Image
            src="/pic13.webp"
            alt="Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
       
       
      </div>
    </div>
  );
};

export default Photography;

     