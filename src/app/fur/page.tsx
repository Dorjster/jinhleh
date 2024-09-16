import React from "react";

const Page = () => {
  return (
    <div className="relative flex items-center justify-center flex-col -mr-[350px] ">
      <div className="w-full mt-10 mx-auto ">
        <h1 className="text-6xl md:text-8xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-green-400 to-yellow-400 tracking-wide">
          Зорилго болон төлөвлөгөө
        </h1>

        <div className="mt-16 text-gray-300">
          <h2 className="text-4xl font-bold text-teal-400 mb-6 text-center">
            Hard Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-teal-300 mb-4">
                2024
              </h3>
              <p className="text-lg">🏅 CCNA Certification</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-teal-300 mb-4">
                2025 (First Half)
              </h3>
              <p className="text-lg">🎯 NSE 4 & NSE 5 Certifications</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-teal-300 mb-4">
                2025 (Second Half)
              </h3>
              <p className="text-lg">📜 CCNP Certification</p>
              <p className="text-lg">💬 IELTS 7+ Score</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-teal-300 mb-4">
                2026
              </h3>
              <p className="text-lg">💡 NSE 7 Certification</p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-gray-300">
          <h2 className="text-4xl font-bold text-teal-400 mb-6 text-center">
            Soft Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-teal-300 mb-4">
                🗣 Speaking Skills
              </h3>
              <p className="text-lg">
                Өөрийнхөө хийх гэж байгаа эсвэл хийсэн зүйлээ тодорхой
                илэрхийлэх
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-teal-300 mb-4">
                📝 Documentation Skills
              </h3>
              <p className="text-lg">
                Тухайн ажлын төлөвлөлт болон тайланг эмх цэгцтэйгээр гаргах
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mt-20 mx-auto ">
        <h1 className="text-6xl md:text-8xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-green-400 to-yellow-400 tracking-wide">
          Компанид өгөх амлалт
        </h1>

        <div className="-ml-[60px] mt-16 text-gray-300 mb-[50px]">
          <div className="w-[1250px] grid grid-cols-1 md:grid-cols-3 gap-[50px]">
            <div className="w-[400px] bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-teal-700 transition-all">
              <h3 className="text-2xl font-semibold text-teal-300 mb-4">
                🎯 Хариуцлагатай байдал
              </h3>
              <p className="text-lg">
                Өөрийн хүлээж авсан даалгавар бүрийг цаг хугацаандаа мэргэжлийн
                түвшинд гүйцэтгэнэ.
              </p>
            </div>

            <div className="w-[400px] bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-teal-700 transition-all">
              <h3 className="text-2xl font-semibold text-teal-300 mb-4">
                🚀 Мэргэжлийн ур чадвар
              </h3>
              <p className="text-lg">Шинэ технологид үргэлж суралцах</p>
            </div>

            <div className="w-[400px] bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-teal-700 transition-all">
              <h3 className="text-2xl font-semibold text-teal-300 mb-4">
                🤝 Багийн ажиллагаа
              </h3>
              <p className="text-lg">
                Багийн гишүүдтэйгээ үр бүтээлтэй хамтран ажиллахад анхаарна.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
