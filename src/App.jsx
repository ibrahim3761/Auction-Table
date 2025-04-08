import { Suspense } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Items from "./Components/Items/Items";
import Navbar from "./Components/Navbar/Navbar";
import { FaRegHeart } from "react-icons/fa6";

const itemspromise = fetch("data.json").then((res) => res.json());

console.log(itemspromise);

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Hero></Hero>
      </div>
      {/* auction */}
      <div className="sora main-container bg-[#EBF0F5] py-10 px-14">
        <h1 className="text-[#0E2954] text-3xl">Active Auctions</h1>
        <p className="font-normal pt-3">Discover and bid on extraordinary items</p>
        {/* left side */}
        <div className="flex gap-10 text-center mt-5">
          <div className="left-container w-[70%] bg-white  rounded-lg">
            <Suspense fallback={<h1>Loading...</h1>}>
              <Items itemspromise={itemspromise}></Items>
            </Suspense>
          </div>
          {/* right side */}
          <div className="items-center right-container w-[30%]  bg-white rounded-lg py-4">
            <h1 className="flex justify-center items-center border-b px-4 text-center font-semibold pb-4 gap-1"><FaRegHeart /> Favorite Items</h1>
            <div className="border-b text-center p-6">
              <h1 className="text-2xl font-semibold">No favorites yet</h1>
              <p className="text-sm opacity-80 mt-2 px-14">Click the heart icon on any item to add it to your favorites</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
