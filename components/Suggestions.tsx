import React from "react";
import { useState, useContext, useEffect } from "react";
import SuggestionData from "./../data/SuggestionData";
import Suggestion from "./Suggestion";

type Props = {};

function Suggestions({}: Props) {
  const [suggetionItem, setsuggetionItem] = useState(SuggestionData);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      <div>
        {suggetionItem.map((suggetionItem) => (
          <Suggestion
            key={suggetionItem.id}
            name={suggetionItem.name}
            userImg={suggetionItem.avatar}
            work={suggetionItem.work}
          />
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
