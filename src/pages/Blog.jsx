import React from "react";
import { Hero } from "../components/Hero";
import { RecentPostGrid } from "../components/RecentPostGrid";
import { SliderPost } from "../components/SliderPosts";
export const Blog = () => {
  return (
    <>
      <Hero />
      <RecentPostGrid/>
      <SliderPost />
    </>
  );
};
