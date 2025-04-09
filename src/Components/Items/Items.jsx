import React, { use } from "react";
import Item from "../Item/Item";

const Items = ({ itemspromise ,handleFavorite,favorites }) => {
  const items = use(itemspromise);
  // console.log(items);

  return (
    <div className="sora px-8 py-6">
      <div className="overflow-hidden border  rounded-lg ">
        <table className="table w-full border-black rounded-lg">
          {/* head */}
          <thead>
            <tr className="border-b-1 border-black">
              <th className="text-black">Item</th>
              <th className="text-center text-black">CurrentBid</th>
              <th className="text-center text-black">Time Left</th>
              <th className="text-center text-black">Bid Now</th>
            </tr>
          </thead>
          <tbody className="sora">
            {items.map((item) => (
              <Item key={item.id} item={item} handleFavorite={handleFavorite} favorites={favorites}></Item>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Items;
