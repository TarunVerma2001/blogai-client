"use client";
import React from "react";
import { ShareIcon } from "@heroicons/react/outline";
function Header() {
  return (
    <header className="flex justify-between items-center px-16 py-4 text-sm bg-black text-gray-100">
      <div className="flex space-x-8 items-center ">
        {/* <img src="" alt="" /> */}
        <h1 className="text-2xl text-bold text-white">Blogai</h1>
        <h1 className="hidden md:flex scaleAnimationText">Categories</h1>
        <h1 className="hidden md:flex scaleAnimationText">About</h1>
        <h1 className="hidden md:flex scaleAnimationText">Contact</h1>
        <h1 className="hidden md:flex scaleAnimationText">Careers</h1>
      </div>
      <div className="hidden md:flex space-x-4 items-center">
        <h1 className="authAnimate">Login</h1>
        <h1 className="authAnimate">Register</h1>
      </div>
      <ShareIcon width={24} color="white" className="md:hidden" />
    </header>
  );
}

export default Header;
