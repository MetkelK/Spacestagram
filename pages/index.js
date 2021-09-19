import Head from "next/head";
import ImageGrid from "../components/ImageGrid";

const Home = ({ images }) => {
  return (
    <div>
      <Head>
        <title>Spacestagram</title>
        <meta name="description" content="Nasa" />
        <link rel="icon" href="/asteroid_88863.ico" />
      </Head>

      <main>
        <ImageGrid images={images} />
      </main>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?start_date=2021-09-01&api_key=${process.env.API_KEY}`
  );
  const images = await res.json();

  if (!images) {
    return {
      notFound: true,
    };
  }

  return {
    props: { images },
  };
};

export default Home;
