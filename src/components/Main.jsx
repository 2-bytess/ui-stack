import React from "react";
import Link from "next/link";

const Main = () => {
  const items = [
    {
      name: "Alper Kamu",
      description:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      imageSrc: "https://dummyimage.com/200x200",
      link: "product_1",
    },
    {
      name: "Haleluya",
      description:
        "DIY Sipper",
      imageSrc: "https://dummyimage.com/200x200",
      link: "product_2",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-b text-gray-600 body-font">
        <div className="container pb-24 pt-10 mx-auto">
          <div className="flex justify-center flex-wrap">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="p-4 m-5 transition duration-300 rounded-2xl hover:shadow-2xl shadow-lg lg:w-1/4 md:w-1/2"
              >
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src={item.imageSrc}
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      {item.name}
                    </h2>
                    <p className="mb-4">{item.description}</p>
                  </div>
                </div>
                
              </Link>
              
              
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
