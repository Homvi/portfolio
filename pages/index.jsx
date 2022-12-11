import Head from "next/head";
import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import { useEffect, useState } from "react";
import Card from "../components/Card"

export default function Home() {
  const [isBorderOnNav, setIsBorderOnNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      if (window.pageYOffset) {
        setIsBorderOnNav(true);
      } else {
        setIsBorderOnNav(false);
      }
    });
  }, []);

  /*   const addBorderToNavbar = () =>{
    
  } */

  return (
    <>
      <Head>
        <title>Luxcode</title>
        <meta name="description" content="Luxcode official site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black text-white pt-20 overflow-x-hidden">
        <Navbar isBorder={isBorderOnNav} />
        <div className="flex flex-col justify-center px-8  min-h-screen bg-black">
          <div className="flex flex-col justify-center items-start max-w-2xl border-gray-700 mx-auto pb-16">
            <Introduction />
            <h3
              id="works"
              className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-left w-full text-white"
            >
              Works and Projects
            </h3>
            <div className="overflow-x-scroll md:overflow-x-hidden relative left-[-30px] flex justify-start px-5  w-screen">
              <div className="flex justify-start">
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
