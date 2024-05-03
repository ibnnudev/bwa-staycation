import React from "react";

// Icons
import IcTraveler from "../assets/icons/ic_traveler.svg";
import IcTreasure from "../assets/icons/ic_treasure.svg";
import IcCities from "../assets/icons/ic_cities.svg";

// Image
import Mockup from "../assets/images/banner.png";

export default function Hero(props) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-snug md:text-5xl xl:text-5xl dark:text-white text-font-primary">
            Forget Busy Work,
            <br />
            Start Next Vacation
          </h1>
          <p className="max-w-sm mb-6 font-light lg:mb-8 lg:text-lg dark:text-gray-400 text-font-gray">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-9 py-3.5 text-lg font-medium text-center text-white rounded-sm bg-button-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 shadow-primary-200 shadow-md"
          >
            Show Me Now
          </a>
          <div className="grid lg:grid-cols-3 gap-6 mt-20">
            <div className="space-y-2">
              <img src={IcTraveler} width={32} height={32} alt="" />
              <p className="text-font-primary font-semibold">
                {props.data.travelers}{" "}
                <span className="text-font-gray font-light">travelers</span>
              </p>
            </div>
            <div className="space-y-2">
              <img src={IcTreasure} width={32} height={32} alt="" />
              <p className="text-font-primary font-semibold">
                {props.data.treasures}{" "}
                <span className="text-font-gray font-light">treasures</span>
              </p>
            </div>
            <div className="space-y-2">
              <img src={IcCities} width={32} height={32} alt="" />
              <p className="text-font-primary font-semibold">
                {props.data.cities}{" "}
                <span className="text-font-gray font-light">cities</span>
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={Mockup} alt="mockup" />
        </div>
      </div>
    </section>
  );
}
