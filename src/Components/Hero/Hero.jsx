import React from "react";
import banner from '../../assets/Banner-min.jpg';
const Hero = () => {
  return (
    <div className="sora">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            `url(${banner})`,
        }}
      >
        <div className="text-neutral-content justify-start w-full px-14">
          <div className="max-w-lg">
            <h1 className="mb-5 text-4xl font-semibold">Bid on Unique Items from Around the World</h1>
            <p className="mb-5 font-light opacity-80">
                Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
            </p>
            <a href="#auction-items"><button className="btn rounded-4xl text-sm">Explore Auctions</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
