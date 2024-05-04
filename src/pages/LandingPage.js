import React, { useRef } from "react";
import Header from "../parts/Header";
import Hero from "../parts/Hero";

// JSON
import landingJson from "../json/landingPage.json";
import MostPicked from "../parts/MostPicked";

export default function LandingPage() {
  // add refMostPicked
  const refMostPicked = useRef(null);

  return (
    <div>
      <Header></Header>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Hero refMostPicked={refMostPicked} data={landingJson.hero}></Hero>
        <MostPicked
          refMostPicked={refMostPicked}
          data={landingJson.mostPicked}
        ></MostPicked>
      </div>
    </div>
  );
}
