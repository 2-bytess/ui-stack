import Image from "next/image";

const Background = () => {
  return (
    <div className="">
      <div className="absolute sm:pt-20 md:pt-80 top-52 sm:top-10 -z-10 left-0">
        <Image
          width={700}
          height={500}
          priority
          src="/assets/blur.png"
          alt="bg"
          className="w-[35rem] rotate-180"
        ></Image>
      </div>
      <div className="absolute dark:flex hidden float1 top-52 sm:top-10 -z-10 right-0">
        <img
          src="/assets/Abstracto_069.png"
          alt="bg"
          className="w-[35rem]"
        ></img>
      </div>
      <div className="absolute dark:flex hidden float1 top-full mt-[35rem] -z-10 left-0">
        <img
          src="/assets/Abstracto_033.png"
          alt="bg"
          className="w-[35rem]"
        ></img>
      </div>
    </div>
  );
};

export default Background;
