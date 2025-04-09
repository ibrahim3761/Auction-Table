import React, { useState,useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

const Item = ({ item, handleFavorite, favorites }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Sync local state with props.favorites
  useEffect(() => {
    const currentlyFavorite = favorites.some((favItem) => favItem.id === item.id);
    setIsFavorite(currentlyFavorite);
  }, [favorites, item.id]);

  const toggleFavorite = (item) => {
    handleFavorite(item);
    
  };

  return (
    <tr className="text-center border-black">
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask h-12 w-12">
              <img src={item.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{item.title}</div>
          </div>
        </div>
      </td>
      <td>{item.currentBidPrice}</td>
      <td>{item.timeLeft}</td>
      <td>
        <button
          onClick={() => toggleFavorite(item)}
          disabled={isFavorite}
          className={`${
            isFavorite
              ? "cursor-not-allowed"
              : "hover:text-red-500 hover:cursor-pointer"
          }`}
        >
          {isFavorite ? (
            <FaHeart size={20} className="text-red-500" />
          ) : (
            <FaRegHeart size={20} />
          )}
        </button>
      </td>
    </tr>
  );
};

export default Item;
