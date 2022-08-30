import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="bg-[url('../public/Headerbg.png')] bg-cover text-white mb-10">
      <Navbar />
      <div className="flex flex-col justify-center pt-7">
        <h1 className="text-6xl text-center font- mb-2">Self Storage Business</h1>
        <h1 className="text-6xl text-center font-bold">Buy. Sell. Learn.</h1>
        <h3 className="text-center text-xl pt-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Sit sagittis, aliquam non tortor blandit lobortis. blandit{" "}
        </h3>
        <div className="flex justify-center text-black mt-10 mb-20 font-semibold">
            <button className="px-2 py-4 bg-yellow-500 mr-2 rounded-md">Sell Your Self Storage</button>
            <button className="px-2 py-4 bg-slate-200  rounded-md">Activate Self Storage Listings</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
