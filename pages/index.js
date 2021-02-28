import Head from "next/head";
import ItemList from "./src/component/ItemList";
import axios from "axios";

export default function Home({ data }) {
  return (
    <div className="index">
      <Head>
        <title>Home | TraderJose</title>
        <meta name="description" content="This is Next JS" />
      </Head>
      <ItemList data={data} />
    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      data,
    },
  };
}
