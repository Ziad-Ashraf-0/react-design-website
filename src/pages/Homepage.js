import React from "react";
import Client from "../components/Clients/Client";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import Content from "../components/Content/Content";
import { heroOne, heroTwo, heroThree, heroFour } from "../data/HeroData";
import { Heading } from "../globalStyles";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Client />
      <Heading id="projects">Our Projects</Heading>
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Content {...heroFour} />
    </>
  );
};

export default Homepage;
