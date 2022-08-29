import React from "react";

function SectionCard() {
  return (
    <div className="flex flex-col bg-white shadow m-2">
      <img src="./image16.png" className="max-w-[300px] pt-0.5  m-auto"/>
      <div className="text-black m-auto text-center font-semibol">
        <h3 className="font-semibold">Learn Everything about managing and operating a Self Storage</h3>
        <div className="flex">
          <span className="flex items-center justify-center text-center">
            <img src="./totalUnits.svg"  />
            Total Units:
          </span>
          <span className="flex items-center justify-center">
            <img src="./size.svg" />
            Size:
          </span>
          <span className="flex items-center justify-center">
            <img src="./size.svg" />
            Size:
          </span>
        </div>
        <button className='bg-blue-700 flex items-center  px-5 py-2 rounded-md text-white m-auto'>Read More</button>
      </div>
    </div>
  );
}

export default SectionCard;
