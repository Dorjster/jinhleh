import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  p-6">
      <div className="max-w-3xl text-center">
        <blockquote className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-green-400 to-yellow-400 mb-6">
          Чадахгүй байж чаддаг хүний дүр эсгэлгүй, чадахгүй гүйцэхгүй байгаагаа
          зоригтойгоор хүлээн зөвшөөрч сур. Ингэвэл жинхэнэ чадал суух эхний
          алхам болно.
        </blockquote>
        <footer className="text-lg text-teal-300 font-medium italic mb-[20px]">
          – Амжилтад хүрэх гал эрмэлзэл
        </footer>
        <div className="ml-[150px]">
          <Image src={"/suc.gif"} width={400} height={200} alt="as" />
        </div>
        {/* <blockquote className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-green-400 to-yellow-400 mb-6">
          Зүрх сэтгэл хүчгүй аваас хүн нэг л мэдэхэд авьяас чадварынхаа боол
          болно.
        </blockquote> */}
      </div>
    </div>
  );
};

export default Page;
