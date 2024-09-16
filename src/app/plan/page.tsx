import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="absolute top-0 left-0 w-full mt-[50px]">
      <h1 className="text-7xl font-extrabold text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-green-400 to-yellow-400 tracking-wide">
        Дадлагажих хугацааний төлөвлөгөө
      </h1>
      <div className="flex flex-col items-center gap-[30px] mt-10">
        {" "}
        <Image
          src={"/Screenshot 2024-09-15 at 18.57.38.png"}
          width={500}
          height={300}
          alt="as"
        />
        <Image
          src={"/Screenshot 2024-09-15 at 19.02.32.png"}
          width={600}
          height={300}
          alt="asd"
        />
      </div>
    </div>
  );
};

export default page;
