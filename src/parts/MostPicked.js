import { data } from "autoprefixer";
import React from "react";

export default function MostPicked(props) {
  return (
    <div ref={props.refMostPicked}>
      <h1 className="font-semibold text-font-primary text-2xl mb-5">
        Most Picked
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <div
            className="relative flex w-full overflow-hidden rounded-xl h-full"
            key={props.data[0]._id}
          >
            <a className="relative mt-3 flex overflow-hidden rounded-xl">
              <img
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500 ease-in-out"
                src={props.data[0].imageUrl}
                alt="product image"
              />
              <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
              <span className="absolute top-0 right-0 m-2 rounded-full bg-label-pink px-6 py-1 text-center text-md font-light text-white">
                <span className="font-medium">${props.data[0].price}</span> per
                night
              </span>
              <div className="absolute bottom-0 left-0 m-7 rounded-full bg-label-blue text-start text-base text-white">
                <span className="text-lg">{props.data[0].name}</span>
                <span className="text-sm block font-light">
                  {props.data[0].city}, {props.data[0].country}
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:col-span-8">
          {props.data.map((item, _) => {
            // skip the first item
            if (_ === 0) return null;
            return (
              <div
                className="relative flex w-full overflow-hidden rounded-xl"
                key={item._id}
              >
                <a className="relative mt-3 flex overflow-hidden rounded-xl">
                  <img
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500 ease-in-out"
                    src={item.imageUrl}
                    alt="product image"
                  />
                  <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
                  <span className="absolute top-0 right-0 m-2 rounded-full bg-label-pink px-6 py-1 text-center text-md font-light text-white">
                    <span className="font-medium">${item.price}</span> per night
                  </span>
                  <div className="absolute bottom-0 left-0 m-7 rounded-full bg-label-blue text-start text-base text-white">
                    <span className="text-lg">{item.name}</span>
                    <span className="text-sm block font-light">
                      {item.city}, {item.country}
                    </span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
