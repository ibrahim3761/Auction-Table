import { Suspense } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Items from "./Components/Items/Items";
import Navbar from "./Components/Navbar/Navbar";

const itemspromise = fetch("data.json").then((res) => res.json());

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
      <div className="main-container flex gap-3 text-center bg-[#EBF0F5] py-10">
        <div className="left-container w-[70%] bg-white h-20 rounded-lg">
          <Suspense fallback={<h1>Loading...</h1>}>
            <Items itemspromise={itemspromise}></Items>
          </Suspense>
        </div>
        <div className="right-container w-[30%] bg-white h-20 rounded-lg">
          
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
