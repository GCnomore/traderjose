import Head from "next/head";
import ItemList from "./src/component/ItemList";

export default function Home() {
  return (
    <div className="index">
      <Head>
        <title>Home | TraderJose</title>
        <meta name="description" content="This is Next JS" />
      </Head>
      <ItemList />
    </div>
  );
}
