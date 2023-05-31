import React from "react";

type Props = {};

function Suggestion({
  name,
  userImg,
  work,
}: {
  name: string;
  userImg: string;
  work: string;
}) {
  return (
    <div className="flex items-center justify-between mt-3">
      <img
        className="w-10 h-10 rounded-full border p-[2px]"
        src={userImg}
        alt=""
      />
      <div className="flex-1 ml-4">
        <h2 className="font-semibold text-sm">{name}</h2>
        <h3 className="textt-xs text-gray-400"> Works at {work}</h3>
      </div>

      <button className="text-blue-400 text-sm font-bold">Follow</button>
    </div>
  );
}

export default Suggestion;
