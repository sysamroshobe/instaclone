import React from "react";
import { useSession, signOut } from "next-auth/react";

type Props = {};

function Miniprofile({}: Props) {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src={session?.user?.image}
        className="rounded-full h-16 w-16 shadow-lg border p-[2px] "
        alt="Avatar"
      />
      <div>
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400"> Welcome to instagram</h3>
      </div>

      <button onClick={signOut} className="text-blue-400 text-sm font-semibold">
        Sign Out
      </button>
    </div>
  );
}

export default Miniprofile;
