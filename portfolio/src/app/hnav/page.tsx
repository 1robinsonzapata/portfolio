"use client"

import Link from "next/link";
import React, { useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { GiCalendarHalfYear } from "react-icons/gi";
import { LuWarehouse } from "react-icons/lu";
import { SiEventstore } from "react-icons/si";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { MdLogin } from "react-icons/md";
import { FaRegRegistered } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaUserLarge } from "react-icons/fa6";

function Hnav() {

  const { data: session } = useSession();

  return (
    <>
      <div className="w-full flex flex-row items-center py-0 bg-gray-700 text-white">
        <h1 className=" flex ml-10 my-3 text-amber-500 text-2xl hover:text-white text-bold">
          Sports
          <FcSportsMode className="flex  ml-1 my-1 text-amber-500 text-3xl hover:text-white text-bold" />
          Day
        </h1>

        <ul className="flex-1 w-full justify-center flex-row flex space-x-8 text-1xl fa-2x font-bold">
          <li className="  text-white rounded hover:shadow hover:bg-gray-200 hover:text-gray-700 px-1 ">
            <Link href="Dashboard">
              <IoHomeOutline className=" inline-block w-5 h-5 mr-1" />
              Dashboard
            </Link>
          </li>

          <li className="  text-white rounded hover:shadow hover:bg-gray-200 hover:text-gray-700 px-1">
            <LuWarehouse className=" inline-block w-5 h-5 mr-1" />
            <Link href="house">House</Link>
          </li>
          <li className="text-white rounded hover:shadow hover:bg-gray-200 hover:text-gray-700 px-1">
            <SiEventstore className="inline-block w-7 h-6 px-1" />
            <Link href="events">Events</Link>
          </li>
          <li className="text-white rounded hover:shadow hover:bg-gray-200 hover:text-gray-700 px-1">
            <MdOutlineEmojiEvents className="inline-block w-8 h-7 px-1" />
            <Link href="results">Results</Link>
          </li>
        </ul>
        {session && session.user ? <><MdLogin className="inline-block w-8 h-8 px-1" />
        <li className=" inline-flex text-right rounded hover:shadow hover:bg-gray-200 hover:text-gray-700 px-1 mr-5  text-amber-500">
          <button onClick={() => signOut({ callbackUrl: '/login' })}> Logout </button>
        </li></>  :  
        <><MdLogin className="inline-block w-8 h-8 px-1" />
        <li className=" inline-flex text-right rounded hover:shadow hover:bg-gray-200 hover:text-gray-700 px-1 mr-5  text-amber-500">
          <Link href="" onClick={() =>  signIn('google', { callbackUrl: '/' })}> Login </Link>
        </li></>}
        {session && session?.user ?
        <FaUserLarge className="inline-block w-6 h-6 mr-3" /> : 
        <><FaRegRegistered className="inline-block w-8 h-8 px-1" />
        <li className=" inline-flex text-right rounded hover:shadow hover:bg-gray-200 hover:text-gray-700 px-1 mr-10  text-amber-500">
          <Link href="#"> Register</Link>
        </li>
        </>
      }
      </div>
    </>
  );
}

export default Hnav;
