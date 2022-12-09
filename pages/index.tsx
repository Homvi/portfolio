import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLight, setisLight] = useState(true);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isLight]);

  const toggleMode = () => {
    setisLight(!isLight);
    if (isLight) {
      // Whenever the user explicitly chooses light mode
      localStorage.theme = "light";
    }
    if (isLight === false) {
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = "dark";
    }
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-white dark:bg-black text-white dark:text-black">
        <div className="bg-gray-50 dark:bg-gray-900">
          <div
            className="bg-white text-black px-2 w-fit m-2 cursor-pointer dark:bg-gray-900 dark:text-white border-2 rounded-2xl"
            onClick={toggleMode}
          >
            toggle dark theme
          </div>
          <main className="flex flex-col justify-center px-8 bg-gray-50 min-h-screen dark:bg-gray-900">
            <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
              <div className="flex flex-col-reverse sm:flex-row items-start">
                <div className="flex flex-col pr-8">
                  <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                    Adam Honvedo
                  </h1>
                  <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                    Front-end developer
                    {/* <span className="font-semibold"> Akman solutions</span> */}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-16">
                    I build and deploy fast and responsive websites with the
                    help of Next.js, Tailwind and Vercel.
                  </p>
                </div>
                <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
                  <Image
                    height={156}
                    width={158}
                    src="/img/profile.png"
                    alt="adam"
                    className="rounded-full filter grayscale"
                  />
                </div>
              </div>
            </div>
          </main>

          <footer></footer>
        </div>
      </body>
    </>
  );
}
