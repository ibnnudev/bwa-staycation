import React from "react";
import Header from "../parts/Header";
import Hero from "../parts/Hero";

// JSON
import landingJson from "../json/landingPage.json";

export default function LandingPage() {
  return (
    <div>
      <Header></Header>
      <Hero data={landingJson.hero}></Hero>
    </div>
  );
}
