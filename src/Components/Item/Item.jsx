import React from "react";
import { FaRegHeart } from "react-icons/fa6";

const Item = ({ item }) => {
  return (
    <tr className="text-center item center">
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={item.image}
                alt="Avatar Tailwind CSS Component"
              />
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
        <button className="hover:cursor-pointer">
          <FaRegHeart />
        </button>
      </td>
    </tr>
  );
};

export default Item;
