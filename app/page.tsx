
import CardContainer from "@/components/CardContainer";
import FeatureSection from "@/components/FeatureSection";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="container md:mt-12 mt-6">
      <Hero/>
      <CardContainer/>
      <FeatureSection/>

    </div>
  );
};

export default page;
