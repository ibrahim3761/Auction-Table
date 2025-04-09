import { Suspense, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Items from "./Components/Items/Items";
import Navbar from "./Components/Navbar/Navbar";
import { FaRegHeart } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { ToastContainer, toast, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const itemspromise = fetch("data.json").then((res) => res.json());

console.log(itemspromise);

function App() {
  const [favorites, setFavorites] = useState([]);
  const [Total, setTotal] = useState(0);

  const handleFavorite = (item) => {
    const isAlreadyFavorite = favorites.some((fav) => fav.id === item.id);

    if (isAlreadyFavorite) {
      // Removing from favorites
      setFavorites(favorites.filter((i) => i.id !== item.id));
      setTotal((prevTotal) => prevTotal - parseFloat(item.currentBidPrice));
      
      toast.warn('Item Removed From Favorites!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    } else {
      // Adding to favorites
      setFavorites([...favorites, item]);
      setTotal((prevTotal) => prevTotal + parseFloat(item.currentBidPrice));
      toast.dismiss();
      toast.success('Item Added to your Favorite Lists!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
        
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      {/* Same as */}
      <ToastContainer />
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Hero></Hero>
      </div>
      {/* auction */}
      <div className="sora main-container bg-[#EBF0F5] py-10 px-14">
        <h1 className="text-[#0E2954] text-3xl">Active Auctions</h1>
        <p className="font-normal pt-3">
          Discover and bid on extraordinary items
        </p>
        <div className="grid grid-cols-3 gap-10 text-center mt-5">
          {/* left side */}
          <div className="left-container col-span-2 bg-white rounded-lg">
            <Suspense fallback={<h1>Loading...</h1>}>
              <Items
                itemspromise={itemspromise}
                handleFavorite={handleFavorite}
                favorites={favorites}
              ></Items>
            </Suspense>
          </div>
          {/* right side */}
          <div className="items-center right-container col-span-1 ">
            <div className="bg-white py-5 rounded-lg">
              <h1 className="flex justify-center items-center border-b px-4 text-center font-semibold pb-4 gap-1">
                <FaRegHeart /> Favorite Items
              </h1>

              {favorites.length === 0 ? (
                // Default design when no favorites
                <div className="border-b text-center p-6 favorite-item">
                  <h1 className="text-2xl font-semibold">No favorites yet</h1>
                  <p className="text-sm opacity-80 mt-2 px-14">
                    Click the heart icon on any item to add it to your favorites
                  </p>
                </div>
              ) : (
                <div className="favorite-items">
                  {favorites.map((item) => (
                    <div
                      key={item.id}
                      className="border-b p-4 text-left flex justify-between items-start"
                    >
                      <div className="flex gap-3">
                        <div className="avatar">
                          <div className="mask h-18 w-18">
                            <img src={item.image} alt={item.title} />
                          </div>
                        </div>
                        <div className="px-2 flex flex-col justify-around">
                          <h3 className="font-bold">${item.title}</h3>
                          <div className="flex gap-3 items-center">
                            <p className="text-sm">{item.currentBidPrice}</p>
                            <p>Bids: {item.bidsCount}</p>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleFavorite(item)}
                        className="hover:text-red-700"
                      >
                        <MdCancel size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <h1 className="font-semibold pt-3">
                Total Amount: ${Total === 0 ? "0000.00" : Total}
              </h1>
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
