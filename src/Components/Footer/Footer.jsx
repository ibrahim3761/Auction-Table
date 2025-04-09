import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal  footer-center  text-base-content rounded p-20 sora">
        <div className="gap-y-6">
          <div>
            <a href="#">
              <h1 className="text-xl font-sora font-semibold">
                <span className="text-[#003EA4]">Auction</span>
                <span className="font-extrabold text-[#FFD337]">Table</span>
              </h1>
            </a>

            <nav className="grid grid-cols-3 gap-x-0">
              <h3>Bid.</h3>
              <h3>Win.</h3>
              <h3>Own.</h3>
            </nav>
          </div>

          <nav>
            <div className="grid grid-flow-col gap-8 poppins">
              <a>Home</a>
              <a>Auctions</a>
              <a>Categories</a>
              <a>How to works</a>
            </div>
          </nav>
          <aside>
            <p>© 2025 AuctionHub. All right reserved.</p>
          </aside>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
