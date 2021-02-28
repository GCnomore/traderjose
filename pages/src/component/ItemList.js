import Link from "next/link";

import styled from "styled-components";
import { normalModeTheme } from "../../../styles/theme";
import { useEffect, useState } from "react";
import { Image, Divider, Header } from "semantic-ui-react";

export default function ItemList({ data }) {
  const [list, setList] = useState(data);

  return (
    <>
      <Header>Hwa Jang Poom</Header>
      <Divider />
      <ItemListContainer>
        {list &&
          list.map((data) => (
            <Link key={data.id} href={`/detail/${data.id}`}>
              <Items key={data.id}>
                <Image src={data.image_link} />
                <strong>{data.brand}</strong>
                <p>{data.name}</p>
                <strong>${data.price}</strong>
              </Items>
            </Link>
          ))}
      </ItemListContainer>
    </>
  );
}

const ItemListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin: 0 20%;
  grid-gap: 0.5rem;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 0.1px solid ${normalModeTheme.mainThemeColor};
  border-radius: 0.5rem;
  :hover {
    cursor: pointer;
  }
  > img {
    width: 10rem;
    align-self: center;
  }
`;
