import React from 'react';
import { Navbar, Hero, Footer, Memory, Explore, Advertise, Pricing, Banner, Newslatter } from './componenets';
import { hero, navlinks, memory, placesAPI, brands, pricingapi, bannerAPI, footerAPI } from './data/infraveldata';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore title="Explore The Beauty of India" placesAPI={placesAPI} />
      <Pricing pricingapi={pricingapi} />
      <Footer footerAPI={footerAPI} />
      <Advertise brands={brands} />
      <Banner bannerAPI={bannerAPI} />
      <Newslatter />
    </>
  );
};

export default App;
