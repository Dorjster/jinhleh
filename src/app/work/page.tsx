const WorkPage = () => {
  return (
    <div className="absolute top-0 left-0 w-full mt-[50px]">
      <h1 className="text-7xl font-extrabold text-center mt-10 text-green-600">
        Компаний алсын хараа, үнэт зүйлс
      </h1>
      <div className="max-w-4xl mx-auto mt-[50px]">
        {/* Mission Section */}
        <section className="mb-12">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-16 h-16 mb-4 bg-teal-500 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19l-7-7 7-7 7 7-7 7z"></path>
                <path d="M5 12h14"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-teal-400">
              Эрхэм Зорилго
            </h2>
            <p className="text-center text-gray-300">
              {/* ITZone LLC-ийн эрхэм зорилго бол мэдээллийн технологийн салбарт
              дэвшилтэт шийдлүүдийг санал болгох, үйлчлүүлэгчдийнхээ бизнесийн
              хэрэгцээг бүрэн хангах, болон өндөр чанартай үйлчилгээ үзүүлэх
              явдал юм. Бидний зорилго бол шинэ технологийг ашиглан хамгийн сайн
              үр дүнгүүдийг бий болгох явдал юм. */}
              Миний хандлагаар компанийг дүгнэнэ.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-12">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-16 h-16 mb-4 bg-teal-500 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-white"
                viewBox="2 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15l-7-7-7 7h14z"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-teal-400">
              Алсын Хараа
            </h2>
            <p className="text-center text-gray-300">
              {/* Бидний алсын хараа бол мэдээллийн технологийн салбарт тэргүүлэгч
              байгууллага болох, инноваци, мэргэжлийн ур чадвар болон
              үйлчлүүлэгчдийн сэтгэл ханамжийг хамгийн өндөр түвшинд байлгах
              явдал юм. Бидний зорилго бол дэлхий даяар шинэ шийдлүүдийг
              нэвтрүүлж, технологийн дэвшлийг хөгжүүлэхэд хувь нэмэр оруулах
              явдал юм. */}
              Шинээр нэвтрүүлж буй болон одоо ашиглаж байгаа шийдлүүдийг
              хэрэглэгчиддээ нийцүүлэн ашигтай ажиллахаас гадна илүү их танигдаж
              үнэнч хэрэглэгчидтэй болно.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-16 h-16 mb-4 bg-teal-500 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v18m9-9H3"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-teal-400">
              Үнэт Зүйлс
            </h2>
            <ul className="text-center text-gray-300 space-y-2">
              {/* <li>
                1. <strong className="text-teal-200">Иноваци</strong> - Бид шинэ
                шийдлүүдийг нэвтрүүлж, технологийн дэвшлийг хөгжүүлнэ.
              </li> */}

              <li>
                1.{" "}
                <strong className="text-teal-200">Мэргэжлийн Ур Чадвар</strong>{" "}
                - Мэргэжлийн өндөр түвшний үйлчилгээ, шийдлүүдийг санал болгоно.
              </li>
              <li>
                2.{" "}
                <strong className="text-teal-200">
                  Үйлчлүүлэгчийн Сэтгэл Ханамж
                </strong>{" "}
                - Үйлчлүүлэгчдийн хэрэгцээг бүрэн хангах, өндөр сэтгэл ханамжийг
                хүргэнэ.
              </li>
              <li>
                3. <strong className="text-teal-200">Итгэлцэл</strong> - Хамтран
                ажиллахдаа итгэлцлийг бий болгох, үнэнч байж ажиллана.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WorkPage;
