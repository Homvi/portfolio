import Head from "next/head";
import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import { useEffect, useState } from "react";

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
      <div className="bg-black text-white pt-20">
        <Navbar isBorder={isBorderOnNav} />
        <div className="flex flex-col justify-center px-8  min-h-screen bg-black">
          <div className="flex flex-col justify-center items-start max-w-2xl border-gray-700 mx-auto pb-16">
            <Introduction />
            <h3
              id="works"
              className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-white"
            >
              Works and Projects
            </h3>
            <p>
              nemo exercitationem cum nihil. Quod provident consequuntur rerum
              itaque aliquam quasi autem repellendus error tempora, dicta
              inventore soluta sit fugiat pariatur laboriosam quibusdam, eveniet
              molestias. Inventore quidem dolore adipisci quae atque deserunt id
              totam mollitia quo, quos aperiam voluptatem natus similique sed
              saepe. Dolores voluptates animi, recusandae eum architecto
              accusantium maiores commodi modi odit praesentium eos est vel
              reiciendis ab neque eligendi magnam perspiciatis dolore inventore
              sed ducimus? Suscipit, animi minima quos placeat nemo sunt tenetur
              veniam asperiores officiis iusto magnam accusamus, unde nostrum
              voluptates qui sequi. Recusandae, officia dolorem! Recusandae?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
