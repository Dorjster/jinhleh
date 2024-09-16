import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-green-400 to-yellow-400 mt-[200px]">
        Дүгнэлт
      </h1>
      <Image
        src={"/leo.gif"}
        width={400}
        height={100}
        alt="a`"
        className="mt-[100px]"
      />
    </div>
  );
};

export default page;
