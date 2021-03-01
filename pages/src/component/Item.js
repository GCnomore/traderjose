import styled from "styled-components";
import { normalModeTheme } from "../../../styles/theme";

export default function Item({ item }) {
  if (item) {
    return (
      <Items>
        <ItemContainer>
          <TitleWrap>
            <h1>{item.name}</h1>
            <p>Main category > Subcategory</p>
            <p>Item#: {item.id}</p>
          </TitleWrap>
          <ItemImageContainer>
            <img src={item.image_link} />
          </ItemImageContainer>

          <SellerWrap>
            <h2 style={{ margin: 0 }}>{item.brand.toUpperCase()}</h2>
            <p>Trader Rank</p>
            <p>Trader Rate</p>
            <p>Deal</p>
            <p>Contact Seller</p>
          </SellerWrap>
          <ItemInfo>
            <TradeOptionsWrap>
              <h1>Tradable options</h1>
              <div>
                <h2>Category > Subcategory or cash</h2>
                <h3>${item.price}</h3>
              </div>
            </TradeOptionsWrap>
            <p>{item.description}</p>
          </ItemInfo>
          <SimilarItemContainer>See similar items</SimilarItemContainer>
        </ItemContainer>
      </Items>
    );
  } else {
    return <></>;
  }
}

const Items = styled.div`
  height: 100%;
  width: 100%;
  color: rgb(0, 175, 29);
`;

const ItemContainer = styled.div`
  display: "flex";
  flex-direction: "row";
  justify-content: "space-evenly";
  height: 100%;
  width: 100%;
  padding: 2rem 20%;
  backdrop-filter: brightness(0.3);
`;

const TitleWrap = styled.div`
  width: 100%;
  > h1 {
    margin: 0;
  }
  > p {
    margin: 0;
    font-size: 0.8rem;
  }
  > p:nth-child(3) {
    margin: 0.5rem 0;
  }
`;

const ItemImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SellerWrap = styled.div`
  position: absolute;
  right: 20%;
  padding: 1rem;
  border: 5px solid rgb(0, 175, 29);
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
`;

const TradeOptionsWrap = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;
  > :nth-child(1) {
    margin-right: 10%;
    width: 100%;
  }
  > div > * {
    margin: 0;
  }
  > div {
    width: 100%;
    direction: rtl;
  }
`;

const ItemInfo = styled.div`
  margin-top: 10%;
  padding: 1rem;
  border: 5px solid rgb(0, 175, 29);
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
`;

const SimilarItemContainer = styled.div`
  margin-top: 20%;
  padding: 1rem;
  border: 5px solid rgb(0, 175, 29);
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
`;
