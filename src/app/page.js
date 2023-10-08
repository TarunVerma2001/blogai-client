"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Card from "@/components/Card";
import { HeartIcon, ShareIcon, BookmarkIcon } from "@heroicons/react/outline";
import { useState } from "react";
export default function Home() {
  const [acc, setAcc] = useState(1);
  return (
    <div className="pb-16">
      <Header />

      <section className="px-16 py-2 flex space-x-8 items-center">
        <h1 className="text-[80px] md:text-[100px] font-bold tracking-tighter">
          Blog
        </h1>
        <div className="flex flex-col pt-8">
          <h2 className="text-sm font-semibold text-gray-400">
            A place where you can
          </h2>
          <h2 className="text-sm font-semibold text-gray-400">
            write with freedom
          </h2>
        </div>
      </section>

      <section className="flex justify-between items-center px-16 pt-4 text-sm font-semibold">
        <div className="flex space-x-4 md:space-x-8 items-center ">
          <h1
            onClick={() => {
              setAcc(1);
            }}
            className={`cursor-pointer scaleAnimationText2 ${
              acc == 1
                ? "font-bold text-purple-800 transfrom scale-105"
                : "text-gray-600"
            }`}
          >
            Featured
          </h1>
          <h1
            onClick={() => {
              setAcc(2);
            }}
            className={`cursor-pointer scaleAnimationText2 ${
              acc == 2
                ? "font-bold text-purple-800 transfrom scale-105 "
                : "text-gray-600"
            }`}
          >
            Popular
          </h1>
          <h1
            onClick={() => {
              setAcc(3);
            }}
            className={`cursor-pointer scaleAnimationText2 ${
              acc == 3
                ? "font-bold text-purple-800 transfrom scale-105 "
                : "text-gray-600"
            }`}
          >
            Trending
          </h1>
          <h1
            onClick={() => {
              setAcc(4);
            }}
            className={`cursor-pointer scaleAnimationText2 ${
              acc == 4
                ? "font-bold text-purple-800 transfrom scale-105 "
                : "text-gray-600"
            }`}
          >
            Newest
          </h1>
        </div>
        <div className="cursor-pointer scaleAnimationText2 flex space-x-4 items-center text-gray-600">
          <h1>Filter-by</h1>
        </div>
      </section>
      <div className="pt-4 px-16 w-full ">
        <div className=" border-2"></div>
      </div>

      <h1 className="px-16 text-2xl font-bold py-4">Trending Now</h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-16 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
