import Head from "next/head";
import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import { useEffect, useState } from "react";
import Card from "../components/Card"

const cardsData = [
  {
    name: "Akman Solutions",
    desc: "Made for my current company",
    technologies: "Html, Css, Sass,  Javascript",
    git: "https://github.com/Homvi/akmanSolutions",
    live: "https://akmansolutions.com/"
  },
  {
    name: "Goldkert transfer",
    desc: "HTML5UP based website. Made for the Goldkertbau Kft. The site shares and gathers information.",
    technologies: "Html, Css, Sass, Javascript",
    git: "https://github.com/Homvi/GoldkertTransfer",
    live: "https://goldkerttransfer.com/"
  },
  {
    name: "Wedding site",
    desc: "Custom website made for share information about the wedding of the client.",
    technologies: "React, Next.js, Tailwind, Netlify",
    git: "https://github.com/Homvi/next-wedding",
    live: "https://brigieskalmi.com/"
  },
]

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
        <title>Adakin</title>
        <meta name="description" content="adakin official portfolio" />
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
                {cardsData.map((card, id) => {
                  return <Card key={`card_${id}`} name={card.name} desc={card.desc} technologies={card.technologies} git={card.git} live={card.live} />
                })}


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
