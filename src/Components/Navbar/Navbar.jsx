import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = ({favorites,Total}) => {
  return (
    <div className="poppins">
      <div className="flex items-center justify-between bg-base-100 shadow-sm px-14 py-4">
        <div>
          <a className="text-xl font-sora font-semibold">
            <span className="text-[#003EA4]">Auction</span>
            <span className="font-extrabold text-[#FFD337]">Table</span>
          </a>
        </div>

        <ul className="flex gap-6 text-gray-700 text-lg font-medium">
          <li className="hover:text-[#003EA4] cursor-pointer">Home</li>
          <a href="#auction-items"><li className="hover:text-[#003EA4] cursor-pointer">Auction</li></a>
          <li className="hover:text-[#003EA4] cursor-pointer">Categories</li>
          <li className="hover:text-[#003EA4] cursor-pointer">How it works</li>
        </ul>

        <div className="flex items-center gap-4">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <IoMdNotificationsOutline size={23} />
                <span className="badge badge-sm indicator-item">{favorites.length}</span>
              </div>
            </div>
            <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">{favorites.length} Items</span>
                <span className="text-info">Subtotal: ${Total}</span>
                <div className="card-actions">
                  <a href="#auction-items"><button className="btn btn-primary btn-block">View Items</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-14 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              <li><a className="justify-between">Profile <span className="badge">New</span></a></li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
