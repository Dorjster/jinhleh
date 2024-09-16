import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="absolute top-0 left-0 w-full mt-[50px]">
      <h1 className="text-7xl font-extrabold text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-green-400 to-yellow-400 tracking-wide">
        Ажлын байрны үндсэн үүрэг
      </h1>

      <div className="  mt-16 flex flex-col items-center gap-[30px] space-x-8">
        <div className=" w-[40%] bg-gray-800 text-white p-6 w-80 rounded-lg shadow-lg ml-[30px]">
          <h2 className="text-2xl font-bold text-teal-400 mb-4 text-center">
            Шийдэл гаргах
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Тухайн байгууллагын сүлжээг эрсдэл бага, эмх цэгцтэйгээр шийдэх
            </li>
          </ul>
        </div>

        <div className="w-[40%] bg-gray-800 text-white p-6 w-80 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-teal-400 mb-4 text-center">
            Суурилуулалт хийх
          </h2>
          <ul className="list-disc list-inside space-y-2"></ul>
        </div>

        <div className=" w-[40%] bg-gray-800 text-white p-6 w-80 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-teal-400 mb-4 text-center">
            Үйлчлүүлэгчдэдээ дэмжлэг туслалцаа үзүүлэх
          </h2>
          <ul className="list-disc list-inside space-y-2"></ul>
        </div>
      </div>
      <div className="text-3xl text-green-600 flex flex-col items-center gap-[30px] mt-10">
        With great attidude comes with great customers!{" "}
        <Image
          src={"/asd.gif"}
          width={500}
          height={200}
          alt="asd"
          className="flex self-center"
        />
      </div>
    </div>
  );
};

export default Page;
