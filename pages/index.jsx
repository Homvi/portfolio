import Head from "next/head";
import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Contact from "../components/Contact";

const cardsData = [
  {
    name: "Akman Solutions",
    desc: "Made for my current company",
    technologies: "Html, Css, Sass,  Javascript",
    git: "https://github.com/Homvi/akmanSolutions",
    live: "https://akmansolutions.com/",
    speed:
      "https://pagespeed.web.dev/report?url=https%3A%2F%2Fakmansolutions.com%2F&form_factor=desktop",
  },
  {
    name: "Goldkert transfer",
    desc: "HTML5UP based website. Made for the Goldkertbau Kft. The site shares and gathers information.",
    technologies: "Html, Css, Sass, Javascript",
    git: "https://github.com/Homvi/GoldkertTransfer",
    live: "https://goldkerttransfer.com/",
    speed:
      "https://pagespeed.web.dev/report?url=https%3A%2F%2Fgoldkerttransfer.com%2F&form_factor=desktop",
  },
  {
    name: "Wedding site",
    desc: "Custom website made for share information about the wedding of the client.",
    technologies: "React, Next.js, Tailwind, Netlify",
    git: "https://github.com/Homvi/next-wedding",
    live: "https://brigieskalmi.com/",
    speed:
      "https://pagespeed.web.dev/report?url=https%3A%2F%2Fbrigieskalmi.com%2F&form_factor=desktop",
  },
  {
    name: "Luxcode",
    desc: "Hobby project made for my future business.",
    technologies: "React, Git, Tailwind, BrowserRouter",
    git: "https://github.com/Homvi/luxcode",
    live: "https://luxcode.dev/",
    speed:
      "https://pagespeed.web.dev/analysis/https-luxcode-dev/qkgacrtoyi?form_factor=desktop",
  },
];

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

  return (
    <>
      <Head>
        <title>Adakin&apos;s portfolio</title>
        <meta name="description" content="adakin's official portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-20 overflow-x-hidden text-white bg-black">
        <Navbar isBorder={isBorderOnNav} />
        <div className="flex flex-col justify-center min-h-screen px-8 bg-black">
          <div className="flex flex-col items-start justify-center max-w-2xl pb-16 mx-auto border-gray-700">
            <Introduction />
            <h3
              id="works"
              className="w-full mb-6 text-2xl font-bold tracking-tight text-left text-white md:text-4xl"
            >
              Works and Projects
            </h3>
            <div className="overflow-x-scroll md:overflow-x-hidden relative left-[-30px] flex justify-start px-5  w-screen">
              <div className="flex justify-start">
                {cardsData.map((card, id) => {
                  return (
                    <Card
                      key={`card_${id}`}
                      name={card.name}
                      desc={card.desc}
                      speed={card.speed}
                      technologies={card.technologies}
                      git={card.git}
                      live={card.live}
                    />
                  );
                })}
              </div>
            </div>
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
