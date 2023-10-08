"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { HeartIcon, ShareIcon, BookmarkIcon } from "@heroicons/react/outline";
function Card() {
  return (
    <motion.div
      className="w-[320px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* image and name */}
      <div className=" flex space-x-4 items-center py-4">
        <div className="h-10 w-10 relative">
          <Image
            layout="fill"
            src="/img/katherinepeirce.jpeg"
            className="rounded-full"
          />
        </div>
        <h1 className="font-bold">Clément Mihailescu</h1>
      </div>
      {/* thumbnail */}
      <div>
        <div className="h-[180px] w-[320px] relative">
          <Image
            layout="fill"
            src="/img/thumbnail.jpg"
            className="rounded-lg"
          />
        </div>
      </div>
      {/* title */}
      <div>
        <h1 className="text-xl font-bold pr-[89px] pt-4 pb-4 ">
          How traveling made me a happier person.
        </h1>
      </div>
      {/* icons */}
      <div className="flex justify-between ">
        <div className="flex space-x-4">
          <HeartIcon width={24} />
          <ShareIcon width={24} />
          <BookmarkIcon width={24} />
        </div>

        <div>duration</div>
      </div>
    </motion.div>
  );
}

export default Card;
