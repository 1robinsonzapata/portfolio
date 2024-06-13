"use client";
import React, { useState } from "react";
import Link from "next/link";

import { MdMenuOpen } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";

function vnav() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [expanded, setExpanded] = useState(true);
  return (
    <div
      className={` bg-gray-50 fixed h-full overflow-hidden transition-all ${
        expanded ? "w-52 ml-3" : "w-20"
      }`}
    >
      <div>
        <ul className=" text-center font-bold ">
          <li>
            <button
              onClick={() => setExpanded((curr) => !curr)}
              // className=" my-2  w-8 h-8  rounded hover: shadow hover:bg-blue-500 "
            >
              {expanded ? (
                <AiOutlineMenuFold className=" my-2 ml-44 w-8 h-8 rounded hover: shadow hover:bg-gray-200 hover:text-gray-700 " />
              ) : (
                <AiOutlineMenuUnfold className=" mb-2 my-2 ml-0 w-8 h-8 rounded hover: shadow hover:bg-gray-200 hover:text-gray-700" />
              )}
            </button>
          </li>

          <hr />
          <li className="mb-2 ml-2  mr-2 mt-4 rounded-lg hover: shadow hover:bg-gray-200 hover:text-gray-700 py-2">
            <Link href="#"> Year 7 </Link>
          </li>
          <li className="mb-2 ml-2  mr-2 mt-4 rounded-lg hover: shadow hover:bg-gray-200 hover:text-gray-700  py-2">
            <Link href="#"> Year 8 </Link>
          </li>
          <li className="mb-2 ml-2  mr-2 mt-4 rounded-lg hover: shadow hover:bg-gray-200 hover:text-gray-700 py-2">
            <Link href="#"> Year 9 </Link>
          </li>
          <li className="mb-2 ml-2  mr-2 mt-4 rounded-lg hover: shadow hover:bg-gray-200 hover:text-gray-700   py-2">
            <Link href="#"> Year 10</Link>
          </li>
          <li className="mb-2 ml-2  mr-2 mt-4 rounded-lg hover: shadow hover:bg-gray-200 hover:text-gray-700   py-2">
            <Link href="#"> Year 11 </Link>
          </li>
          <li className="mb-2 ml-2  mr-2 mt-4 rounded-lg hover: shadow hover:bg-gray-200 hover:text-gray-700   py-2">
            <Link href="#">Year 12</Link>
          </li>
          <li className="mb-4 ml-2  mr-2 mt-4 rounded-lg hover: shadow hover:bg-gray-200 hover:text-gray-700  py-2">
            <Link href="#">Year 13</Link>
          </li>
          <hr />
        </ul>
      </div>

      <div className="flex flex-col h-4/5 justify-center mb-40 ">
        <button className=" flex"> Welcome RZ </button>
        <h3 className=" flex"> Admin Mr Zapata</h3>
      </div>
    </div>
  );
}

export default vnav;
