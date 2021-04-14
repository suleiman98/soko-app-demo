import React from "react";
import Header from "./Header";
import Search from "../helper/Search";
import CarouselCategories from "./HomeCarousel";
import TopSellers from "./TopSellers";
import Banner from "./Banner";
import StoreDetails from "./StoreDetails";
import More from "./More";
import Footer from "../helper/Menu";

export default function Home() {
  return (
    <div className="space-y-4">
      <Header />
      <Search placeholder="Search for products..." />
      <CarouselCategories />
      <TopSellers />
      <Banner />
      <StoreDetails />
      <More />
      <Footer />
    </div>
  );
}
