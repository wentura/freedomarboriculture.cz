import React from "react";

export default function Service() {
  return (
    <div className="bg-white py-8 sm:py-16 lg:py-24" id="sluzby">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          {/* <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Our competitive advantage
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p> */}
        </div>
        {/* text - end */}

        <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
          {/* feature - start */}
          <div className="flex flex-col items-left border-l-gray-100 border-l-8 pl-2">
            <h3 className="mb-2 text-left text-tmavazelena text-lg font-bold md:text-xl underline underline-offset-4">
              DENDROLOGICKÉ PRŮZKUMY
            </h3>
            <ul className="mb-2 text-left text-tmava">
              <li>
                metodika <span className="text-bold">Hodnocení stromů</span>{" "}
                (standard AOPK)
              </li>
              <li>zaměření stromů – výstup dwg, pdf, shp.</li>
            </ul>
          </div>
          {/* feature - end */}

          {/* feature - start */}
          <div className="flex flex-col items-left border-l-gray-100 border-l-8 pl-2">
            <h3 className="mb-2 text-left text-tmavazelena text-lg font-bold md:text-xl underline underline-offset-4">
              DENDROLOGICKÝ POSUDEK A ZPRACOVÁNÍ ŽÁDOSTI O POVOLENÍ KÁCENÍ
            </h3>
          </div>
          {/* feature - end */}

          {/* feature - start */}
          <div className="flex flex-col items-left border-l-gray-100 border-l-8 pl-2">
            <h3 className="mb-2 text-left text-tmavazelena text-lg font-bold md:text-xl underline underline-offset-4">
              ÚPRAVA STANOVIŠTNÍCH POMĚRŮ DŘEVIN{" "}
            </h3>
            <ul className="mb-2 text-left text-tmava">
              <li>od projektu po realizaci</li>
              <li>Air Spade – pneumatický rýč</li>
              <li>Air Injektor – půdní injektáž</li>
            </ul>
          </div>
          {/* feature - end */}

          {/* feature - start */}
          <div className="flex flex-col items-left border-l-gray-100 border-l-8 pl-2">
            <h3 className="mb-2 text-left text-tmavazelena text-lg font-bold md:text-xl underline underline-offset-4">
              STROMOVÁ INJEKTÁŽ{" "}
            </h3>
            <p className="mb-2 text-left text-tmava">
              ekologická aplikace, ochrana cenných dřevin především v městském
              prostředí, hlavním pozitivním přínosem technologie stromové
              injektáže je možnost vpravit jakoukoliv látku beze zbytku pouze do
              fyziologicky aktivních pletiv (tzn. Sap Flow) ošetřované rostliny.
              Tato pletiva následně zajistí rozvedení látky do ostatních pletiv
              ošetřované rostliny.
            </p>
          </div>
          {/* feature - end */}

          {/* feature - start */}
          <div className="flex flex-col items-left border-l-gray-100 border-l-8 pl-2">
            <h3 className="mb-2 text-left text-tmavazelena text-lg font-bold md:text-xl underline underline-offset-4">
              PROJEKTOVÁNÍ{" "}
            </h3>
            <ul className="mb-2 text-left text-tmava">
              <li>
                <strong>zpracování projektové dokumentace</strong> pro výsadby
                stromů v městském prostředí i v krajině,
              </li>
              <li>
                <strong>podklady a projektové dokumentace</strong> pro dotační
                tituly SFŽP
              </li>
              <li>
                <strong>zpracování projektové dokumentace</strong> pro výsadby
                dle metodiky IPR Praha
                <br />
                <span className="italic">
                  (Městský standard plánování, výsadby a péče o uliční
                  stromořadí jako významného prvku modrozelené infrastruktury
                  pro adaptaci na změnu klimatu)
                </span>
              </li>
            </ul>
          </div>
          {/* feature - end */}

          {/* feature - start */}
          <div className="flex flex-col items-left border-l-gray-100 border-l-8 pl-2">
            <h3 className="mb-2 text-left text-tmavazelena text-lg font-bold md:text-xl underline underline-offset-4">
              OCHRANA STROMŮ PŘI STAVEBNÍ ČINNOSTI{" "}
            </h3>
            <ul className="mb-2 text-left text-tmava">
              <li>
                <strong>zpracování projektové dokumentaci</strong> podle
                požadavků ČSN 83 9061 a Standardů AOPK
              </li>
              <li>podklady potřebných opatření pro výkaz výměr</li>
              <li>
                <strong>zajištění technického dozoru</strong> ochrany stromů při
                stavbě
              </li>
            </ul>
          </div>
          {/* feature - end */}
        </div>
      </div>
    </div>
  );
}
