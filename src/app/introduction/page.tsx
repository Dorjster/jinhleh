import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 ml-[350px] w-[80%] h-[600px] flex flex-col items-center justify-around ">
        <div>
          {" "}
          <Image
            src="/dorjo.jpg"
            alt="Your Name"
            width={200}
            height={200}
            className="w-40 h-40 rounded-full mx-auto border-4 border-teal-400 mb-6"
          />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Ж.Буяндорж</h1>
            <p className="text-xl text-teal-300 mb-4">Сүлжээний инженер</p>
          </div>
        </div>
        <div className=" ">
          <ul className="text-left space-y-2 text-gray-300">
            <li className="flex gap-[5px]">
              <strong className="text-teal-200">🎓 Сургууль:</strong>
              <div className="flex ">93-р сургууль [2022]</div>
            </li>
            <li className="">
              <strong className="text-teal-200">👨‍💻 Давхар мэргэжил:</strong>{" "}
              Certified MERN stack developer
            </li>
            <li className="flex gap-[5px]">
              <strong className="text-teal-200">🕹️ Хобби:</strong> Singer,
              Coder, Volleyball guy
            </li>
            <li className="flex gap-[10px]">
              <strong className="text-teal-200"></strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
