import React from 'react';
import { Navbar, Hero, Footer, Memory, Explore, Advertise, Pricing, Banner, Newslatter } from './componenets';
import { hero, navlinks, memory, placesAPI, brands, pricingapi, bannerAPI, footerAPI } from './data/infraveldata';

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore title="Explore The Beauty of India" placesAPI={placesAPI} />
      <Advertise brands={brands} />
      <Pricing pricingapi={pricingapi} />
      <Banner bannerAPI={bannerAPI} />
      <Newslatter />
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
