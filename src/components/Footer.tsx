import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full text-white sm:px-16 px-8 pb-5  pt-7 bg-black dark:bg-purple-500/10 rounded-t-[2rem]">
      <h1 className="py-5 border-b-2 border-purple-800 md:text-3xl text-2xl font-semibold">
        Contributors
      </h1>
      <div className="flex flex-wrap md:justify-start justify-center py-5">
        <Link
          href="github.com/"
          target="_blank"
          className="aspect-square hover:rotate-3 transition duration-200 m-3 w-36 md:w-48"
        >
          <Card isFooterBlurred radius="lg" className="border-none">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={200}
              src="https://avatars.githubusercontent.com/u/103196610?v=4"
              width={200}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">srajankumar</p>
            </CardFooter>
          </Card>
        </Link>
        <Link
          href="github.com/"
          target="_blank"
          className="aspect-square hover:rotate-3 transition duration-200 m-3 w-36 md:w-48"
        >
          <Card isFooterBlurred radius="lg" className="border-none">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={200}
              src="https://avatars.githubusercontent.com/u/111585606?v=4"
              width={200}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">srajankumar</p>
            </CardFooter>
          </Card>
        </Link>
      </div>
      <div className="flex py-3 items-center font-normal justify-center tracking-wider">
        Made on Earth with{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 256 256"
          className="mx-2"
        >
          <path
            fill="currentColor"
            d="M178 28c-20.09 0-37.92 7.93-50 21.56C115.92 35.93 98.09 28 78 28a66.08 66.08 0 0 0-66 66c0 72.34 105.81 130.14 110.31 132.57a12 12 0 0 0 11.38 0C138.19 224.14 244 166.34 244 94a66.08 66.08 0 0 0-66-66Zm-5.49 142.36a328.69 328.69 0 0 1-44.51 31.8a328.69 328.69 0 0 1-44.51-31.8C61.82 151.77 36 123.42 36 94a42 42 0 0 1 42-42c17.8 0 32.7 9.4 38.89 24.54a12 12 0 0 0 22.22 0C145.3 61.4 160.2 52 178 52a42 42 0 0 1 42 42c0 29.42-25.82 57.77-47.49 76.36Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Footer;
