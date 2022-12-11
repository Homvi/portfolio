import Head from "next/head";
import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";

export default function Home() {
  return (
    <>
      <Head>
        <title>Luxcode</title>
        <meta name="description" content="Luxcode official site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black text-white pt-20">
        <Navbar />
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat,
              saepe est sed tenetur sint, delectus id itaque eveniet quos
              numquam magnam dignissimos esse vero soluta, laborum pariatur
              accusamus incidunt mollitia. Molestiae quisquam recusandae
              doloribus, a provident repudiandae totam error sequi cumque
              architecto aspernatur tenetur optio ratione nesciunt dicta rerum,
              est expedita quibusdam voluptatem delectus? Iusto officia
              blanditiis aut optio recusandae, molestias, saepe laborum nostrum
              quis dolore modi dignissimos pariatur provident suscipit
              voluptatum, eaque odio quae voluptate nisi porro. Deleniti saepe
              ex hic ducimus? Eum magni totam expedita quae, laborum nemo
              quaerat architecto, quam corporis aspernatur rem, quibusdam
              nesciunt vel accusamus corrupti. Odio accusantium quos nisi
              accusamus dolorum exercitationem animi eligendi ad necessitatibus
              delectus, tenetur quam facere quas aliquid nesciunt adipisci
              recusandae aspernatur voluptate impedit! Incidunt ipsam eligendi
              maxime cum debitis doloribus, deleniti temporibus ea tenetur
              laboriosam itaque qui, laudantium pariatur. Recusandae assumenda
              impedit optio dicta molestiae deleniti minus illo iusto et
              quibusdam placeat quis, voluptatem labore libero nostrum possimus
              suscipit rerum hic quaerat nam maiores? Laborum odio temporibus
              esse assumenda ipsa non? Id dignissimos rem a totam repellat
              reiciendis obcaecati, culpa eligendi harum inventore est esse
              similique placeat aliquam iste dolore consequuntur necessitatibus,
              nostrum nulla ipsa vel tenetur atque! Nostrum aliquid dolores
              pariatur esse est? Suscipit maiores cupiditate sit officia eum
              optio sint officiis recusandae omnis magnam. Sapiente perferendis
              iusto dolores vero incidunt, accusamus veritatis fugit ipsam quo
              neque rerum cupiditate, ex omnis repellendus! Officia iusto
              corporis, facilis quas deserunt quasi est minus pariatur enim
              ipsam repudiandae assumenda natus illum vitae velit in
              reprehenderit magnam obcaecati error consequatur maxime distinctio
              hic exercitationem saepe? Sit, ea! Repellat, incidunt placeat!
              Maiores praesentium molestias reiciendis dolor? Numquam illum
              nesciunt alias saepe, vitae doloribus autem, vero atque sequi eum
              dolor magnam, nulla non pariatur quae architecto labore? Culpa
              tempora quos soluta qui accusamus aliquid omnis eligendi
              provident, saepe nesciunt reiciendis voluptatum repudiandae, hic
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
