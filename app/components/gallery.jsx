import React from "react";

export default function Gallery() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* text - start */}
        {/* <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Gallery
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div> */}
        {/* text - end */}

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:gap-6 xl:gap-8">
          {/* image - start */}
          <div className="group relative flex h-96 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
            <img
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1705589826/freedomarboriculture/mapa_tkq0u4.webp"
              loading="lazy"
              alt="Dendrologické průzkumy, mapa"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-lg text-gray-200 backdrop-blur md:px-3">
              Dendrologické průzkumy
            </span>
          </div>
          {/* image - end */}

          {/* image - start */}
          <div className="group relative flex h-96 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
            <img
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1705589827/freedomarboriculture/AirSpade_ovdcfl.webp"
              loading="lazy"
              alt="Air Spade, ilustrační obrázek"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-lg text-gray-200 backdrop-blur md:px-3">
              Air Spade
            </span>
          </div>
          {/* image - end */}
          {/* image - start */}
          <div className="group relative flex h-96 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
            <img
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1705589828/freedomarboriculture/AirInjektor_fal9km.webp"
              loading="lazy"
              alt="Air Injektor, ilustrační obrázek"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-lg text-gray-200 backdrop-blur md:px-3">
              Air Injektor
            </span>
          </div>
          {/* image - end */}
        </div>
      </div>
    </div>
  );
}
