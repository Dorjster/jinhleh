import Image from "next/image";

const HomePage = () => {
  return (
    <div className="w-full mt-[400px] ml-[200px]">
      <section className="w-xl-screen relative ">
        <h1 className="text-7xl font-extrabold text-center  text-green-600  ">
          Дадлагажих тайлан
        </h1>
        <Image
          src="/images.png"
          alt="Your Name"
          width={200}
          height={200}
          className="w-[200px] mx-auto my-10  "
        />
      </section>
    </div>
  );
};

export default HomePage;
