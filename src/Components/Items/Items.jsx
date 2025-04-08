import React, { use } from "react";
import Item from "../Item/Item";

const Items = ({ itemspromise }) => {
  const items = use(itemspromise);
  // console.log(items);

  return (
    <div className="sora">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-black">Item</th>
              <th className="text-center item center text-black">CurrentBid</th>
              <th className="text-center item center text-black">Time Left</th>
              <th className="text-center item center text-black">Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <Item key={item.id} item={item}></Item>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Items;
