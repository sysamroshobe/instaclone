import React from "react";
import Image from "next/image";
import { BiSearchAlt } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiHeartLine } from "react-icons/ri";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtom";

type Props = {};

function InsidHeader() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut();
  };
  const handleSignIn = async () => {
    await signIn();
  };
  console.log(session);

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between bg-white max-w-screen cursor-pointer p-3">
        <div
          onClick={() => router.push("/")}
          className="relative pt-6 hidden lg:inline-grid w-32"
        >
          <img src="https://links.papareact.com/ocw" alt="" />
        </div>
        <div className="relative w-10 pt-6 lg:hidden inline-grid flex-shrink-0 cursor-pointer">
          <img src="https://links.papareact.com/jjm" alt="" />
        </div>

        <div
          onClick={() => router.push("/")}
          className="relative mt-1 p-3 rounded-md"
        >
          <div className="absolute inset-y-0 pl-3 flex items-center">
            <BiSearchAlt className="h-10 w-10 text-gray-500" />
          </div>
          <input
            className="bg-gray-50 block h-12 pl-14 border-gray-300 focus:ring-black focus:border-black rounded-md"
            type="text"
            placeholder="Search"
          ></input>
        </div>
        <div className=" flex items-center justify-end space-x-8">
          <AiFillHome onClick={() => router.push("/")} className="navBtn" />
          {session ? (
            <>
              <div className="relative navBtn">
                <HiOutlinePaperAirplane className="navBtn" />
                <div className="absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                  3
                </div>
              </div>
              <AiOutlinePlusCircle
                onClick={() => setOpen(true)}
                className="navBtn"
              />
              <HiOutlineUserGroup className="navBtn" />
              <RiHeartLine className="navBtn" />
              <img
                onClick={handleSignOut}
                src={session?.user?.image ?? undefined}
                className="h-10 w-10 rounded-full  shadow-lg"
                alt="Avatar"
              />
            </>
          ) : (
            <button onClick={handleSignIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default InsidHeader;
