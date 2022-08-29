import React from "react";
import Card from "./Card";

function Main() {
  return (
    <>
      <div className="text-center">
        <h3 className="text-4xl font-semibold text-blue-800 mb-5">
          Featured Self Storages
        </h3>
        <p className="text-xl mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
          sapien sagittis maecenas tincidunt. Quis pretium ornare
        </p>
      </div>
      <div className="flex justify-around items-center w-4/5 m-auto p-5">
        <Card bgcolor={"slate-100"} />
        <Card bgcolor={"slate-100"} />
        <Card bgcolor={"slate-100"} />
      </div>
    </>
  );
}

export default Main;
