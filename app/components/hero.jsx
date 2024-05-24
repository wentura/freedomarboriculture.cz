import React from "react";

export default function Hero() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <header className="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
          {/* logo - start */}
          <a
            href="/"
            className="inline-flex items-center gap-2.5 text-md font-bold text-black md:text-2xl"
            aria-label="logo"
          >
            {/* <svg
              width="95"
              height="94"
              viewBox="0 0 95 94"
              className="h-auto w-6 text-indigo-500"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg> */}
            <h3>
              <span className="text-zelena">Freedom</span>
              <span className="text-cervena">Arboriculture</span>
            </h3>
          </a>
          {/* logo - end */}

          {/* nav - start */}
          <nav className="flex gap-4 md:gap-12">
            <a
              href="/#sluzby"
              className="text-sm md:text-lg font-medium md:font-semibold text-tmava transition duration-300 hover:text-cervena active:text-cervena"
            >
              Služby
            </a>
            <a
              href="/#kontakt"
              className="text-sm md:text-lg font-medium md:font-semibold text-tmava transition duration-300 hover:text-cervena active:text-cervena"
            >
              Kontakt
            </a>
            {/* <a
              href="#"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Pricing
            </a> */}
          </nav>
          {/* nav - end */}
        </header>

        <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row-reverse">
          {/* content - start */}
          <div className="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-24 lg:text-left xl:py-32">
            {/* <img
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1705930205/freedomarboriculture/f1_psbw3b.webp"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="h-full w-full object-contain object-center"
            /> */}
            <h1 className="mb-8 text-4xl font-extrabold text-black sm:text-5xl md:mb-2 md:text-7xl">
              <span className="text-zelena">Freedom</span>
              <br className="block 2xl:hidden" />
              <span className="text-cervena">Arboriculture</span>
            </h1>

            <p className="mb-8 leading-relaxed text-cerna font-bold text-xl md:text-2xl md:mb-12 lg:w-4/5">
              Odborné arboristické poradenství
              <br />
              Projektování
              <br />
              Technický dozor
            </p>
          </div>
          {/* content - end */}

          {/* image - start */}
          <div className="h-96 overflow-hidden rounded-lg lg:h-auto xl:w-5/12">
            <img
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1705589827/freedomarboriculture/pnhb_z7xceo.webp"
              loading="lazy"
              alt="Odborné arboristické poradenství, mapa hodnocení"
              className="h-full w-full object-contain object-center"
            />
          </div>
          {/* image - end */}
        </section>
      </div>
    </div>
  );
}
