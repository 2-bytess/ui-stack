import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="border-t-2 border-[#0000005b] body-font">
        <div className="text-center text-xl text-black font-bold pt-5">
          Contributers
        </div>
        <section class="body-font py-7">
          <div class="px-5 mx-auto">
            <div class="flex justify-center flex-wrap">
              <a
                href="https://github.com/srajankumar"
                target="_blank"
                className="mx-5"
              >
                <div class="h-full text-center">
                  <img
                    alt="testimonial"
                    class="w-24 h-24 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://avatars1.githubusercontent.com/srajankumar"
                  />
                  <h2 class="font-medium title-font tracking-wider text-medium">
                    srajankumar
                  </h2>
                </div>
              </a>
              <a
                href="https://github.com/TejasNayak42"
                target="_blank"
                className="mx-5"
              >
                <div class="h-full text-center">
                  <img
                    alt="testimonial"
                    class="w-24 h-24 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://avatars1.githubusercontent.com/TejasNayak42"
                  />
                  <h2 class="font-medium title-font tracking-wider text-medium">
                    TejasNayak42
                  </h2>
                </div>
              </a>
            </div>
          </div>
        </section>
        <div className="bg-black text-white py-4 text-center">
          © 2023 UI-Stack
        </div>
      </footer>
    </>
  );
};

export default Footer;
