import React from "react";
import { useState, useContext, useEffect } from "react";
import ProfileData from "./../data/ProfileData";
import Story from "./Story";
import { useSession, signOut } from "next-auth/react";

type Props = {};

function Stories({}: Props) {
  const [stories, setStories] = useState(ProfileData);
  const { data: session } = useSession();

  return (
    <div className="flex w-auto space-x-6 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story
          name={session?.user?.name ?? "undefined"}
          img={session.user?.image ?? "fallback-image-url"}
        />
      )}
      {stories.map((profile) => (
        <Story key={profile.id} name={profile.name} img={profile.avatar} />
      ))}
    </div>
  );
}

export default Stories;
