import React from "react";

type Props = {};

function Story({ name, img }: { name: string; img: string }) {
  return (
    <div className="flex flex-col items-center">
      <img
        className="h-20 w-20 rounded-full p-[1.5px] border-red-500 border-4 object-contain cursor-pointer hover:scale-110 transition transform
        duration-200 ease-out"
        src={img}
        alt=""
      ></img>
      <p className=" text-sm truncate text-center">{name}</p>
    </div>
  );
}

export default Story;
