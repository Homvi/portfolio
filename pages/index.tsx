import Head from "next/head";

import Introduction from "../components/Introduction";

export default function Home() {
  return (
    <>
      <Head>
        <title>Luxcode</title>
        <meta name="description" content="Luxcode official site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black text-white">
        <div className="bg-black text-white">
          <div className="flex flex-col justify-center px-8  min-h-screen bg-black">
            <div className="flex flex-col justify-center items-start max-w-2xl border-gray-700 mx-auto pb-16">
              <Introduction />
              <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-white">
                Works and Projects
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
