"use client"
import React from 'react'

import HNavigation from "../hnav/page";
import VNavigation from "../vnav/page";
export default function page() {
  return (
    <>
      <HNavigation />
      <VNavigation />
      <div className='ml-52'>page</div>
    </>
  );
}
