import React from "react";
import MailIcon from "./mailIcon";
import PhoneIcon from "./phoneIcon";

export default function Contact() {
  return (
    <section className="text-tmava body-font relative mt-24" id="kontakt">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="sm:mr-10 mt-8 flex items-end justify-start relative mx-auto">
          <img
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1705930122/freedomarboriculture/f2_j6uwcw.jpg"
            loading="lazy"
            alt="Photo by Fakurian Design"
            className="h-full w-full rounded-full "
          />
        </div>
        <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h3 className="text-gray-900 text-lg md:text-xl lg:text-4xl mb-1 font-extrabold title-font">
            <span className="text-zelena">Freedom</span>
            <span className="text-cervena">Arboriculture</span>
          </h3>

          <p className="leading-relaxed mb-5 text-tmava font-bold">
            Odborné arboristické poradenství
          </p>
          <ul className="relative mb-4">
            <li className="text-md md:text-lg lg:text-3xl mb-1 font-extrabold title-font">
              <h4>
                <span className="text-sm md:text-md lg:text-xl">ing. </span>
                Markéta Svobodová
              </h4>
            </li>
            {/* <li className="md:text-lg">
              technický dozor a odborné poradenství v oboru arboristika a péče o
              zeleň
            </li>
            <li className="md:text-lg">
              soudní znalec v oboru ochrana přírody, specializace arboristika
            </li> */}

            <li className="md:text-lg mt-12 flex flex-wrap w-full justify-left">
              <PhoneIcon />
              <a
                href="tel:+420774437351"
                className="mx-8 py-2 hover:underline text-tmava transition duration-300 "
              >
                774 437 351
              </a>
              {/* <a
                href="tel:+420777672611"
                className="mx-8 py-2 hover:underline text-tmava transition duration-300 "
              >
                777 672 611
              </a> */}
            </li>
            <li className="md:text-lg mt-2 mb-2 flex w-100">
              <MailIcon />
              <a
                href="mail:info@freedomarboriculture.cz"
                className="mx-8 py-2 hover:underline text-tmava transition duration-300 "
              >
                info@freedomarboriculture.cz
              </a>
            </li>
            <li className="md:text-lg my-2 py-2">DS: ciwq7b9 </li>
            <li className="md:text-lg my-2 py-2">IČ: 86731297</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
