import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="px-10 pt-20">
        <Main />
      </div>
      <Footer />
    </>
  );
}
