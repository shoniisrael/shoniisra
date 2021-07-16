import React, { Component } from "react";
import {
  Hero,
  HeroGradient,
  CallToAction,
  Cards,
  ImageAndText,
  Pricing,
} from "@components/slices/index";

class Page extends Component {
  render() {
    return (
      <div className="leading-normal tracking-normal text-white gradient" >
        <Hero></Hero>
        <HeroGradient></HeroGradient>
        <ImageAndText></ImageAndText>
        <Cards></Cards>
        <Pricing></Pricing>
        <CallToAction></CallToAction>
      </div>
    );
  }
}

export default Page;
