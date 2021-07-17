import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>Amazon</title>
      </Head>
      <Header />
      
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={ products }/>
      </main>

    </div>
  );
}

export async function getServerSideProps(context) { // tells server that it is no longer serving static page
  const products = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
  
  return {
    props: {
      products
    }
  }
}
