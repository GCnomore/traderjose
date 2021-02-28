import axios from "axios";
import Item from "../src/component/Item";
import Head from "next/head";
import { useRouter } from "next/router";

import styled from "styled-components";

export default function Post({ item }) {
  return (
    <>
      {item && (
        <Listing>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description} />
          </Head>
          <Item item={item} />
        </Listing>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`;
  const res = await axios.get(apiUrl);
  const data = res.data;
  const paths = data.map((item) => `/detail/${item.id}`);

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const item = res.data;

  return {
    props: {
      item,
    },
  };
}

const Listing = styled.div`
  background-color: rgba(0, 0, 0);
  height: 100%;
`;
