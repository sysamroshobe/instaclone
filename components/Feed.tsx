import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import Miniprofile from "./Miniprofile";
import Suggestions from "./Suggestions";
import { useSession } from "next-auth/react";

type Props = {};

function Feed({}: Props) {
  const { data: session } = useSession();
  return (
    <main
      className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${
        !session && "!grid-cols-1 !max-w-3xl"
      }`}
    >
      <section className="col-span-2">
        {/*Stories */}
        <Stories />
        {/*Posts */}
        <Posts />
      </section>

      {session && (
        <section className="hidden xl:inline-grid col-span-1">
          <div>
            {/*Mini profiles */}
            <Miniprofile />
            {/*Suggestions */}
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}

export default Feed;
