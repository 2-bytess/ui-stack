import React from "react";

const Main = () => {
  return (
    <>
      <section class="bg-gradient-to-b text-gray-600 body-font">
        <div class="container px-5 pb-24 pt-10 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 transition duration-300 rounded-2xl hover:shadow-2xl shadow-lg lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/200x200"
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Alper Kamu
                  </h2>
                  <p class="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
