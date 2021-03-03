import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Menu, Input, Modal, Button } from "semantic-ui-react";
import styled from "styled-components";
import { normalModeTheme } from "../../../styles/theme";

export default function Header() {
  const [currentLocation, setLocation] = useState({ activeItem: "home" });
  const [open, setOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const router = useRouter();

  const category = [
    { name: "Appliances", url: "/appliances" },
    { name: "Arts & cafts", url: "/artscrafts" },
    { name: "Auto parts", url: "/autoparts" },
    { name: "Baby & kids", url: "/babykids" },
    { name: "Beauty & health", url: "/beautyhealth" },
    { name: "Bicycles", url: "/bicycles" },
    { name: "Books & magazines", url: "/booksmagazines" },
    { name: "Business equipment", url: "/businessqeuipment" },
    { name: "Cars & Trucks", url: "/carstrucks" },
    { name: "Cell phones", url: "cellphones" },
    { name: "Clothing & shoes", url: "/clothingshoes" },
    { name: "Collectibles", url: "/collectibles" },
    { name: "Computers", url: "/computers" },
    { name: "Electronis", url: "/electronics" },
    { name: "Farming & garden", url: "/farminggarden" },
    { name: "Fitness", url: "/fitness" },
    { name: "Furniture", url: "/furniture" },
    { name: "Games & toys", url: "/gamestoys" },
    { name: "Home", url: "/home" },
    { name: "Jewelry & accessories", url: "/jewelryaccessories" },
    { name: "Motorcycles", url: "/motorcycles" },
    { name: "Musical instruments", url: "/musicalinstruments" },
    { name: "Pet supplies", url: "/petsupplies" },
    { name: "Sports & outdoors", url: "/sportsoutdoors" },
    { name: "Tools", url: "/tools" },
    { name: "Video games", url: "videogames" },
  ];

  const handleItemClick = (e, { name }) => {
    setLocation({ activeItem: name });
    router.push(`${name === "home" ? "/" : `/${name}`}`);
  };

  const renderCategory = () => {
    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<CategoryButton>Category</CategoryButton>}
      >
        <CategoryModal>
          <h1>Category</h1>
          <div>
            {category.map((item) => (
              <a>{item.name}</a>
            ))}
          </div>
        </CategoryModal>
      </Modal>
    );
  };

  return (
    <>
      <AppName>NAME OF THE APP</AppName>
      <HeaderContainer>
        <MenuWrapper>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          {renderCategory()}
        </MenuWrapper>
        <SearchWrapper>
          <input placeholder="Search"></input>
          <input placeholder="Location"></input>
        </SearchWrapper>

        <AccountWrapper>
          <FontAwesomeIcon
            onClick={() => {
              setShowAuth(!showAuth);
            }}
            width="3rem"
            icon={faUserCircle}
          />

          <AuthWrapper show={showAuth}>
            <Link href={"/login"}>Log In</Link>
            <Link href={"/register"}>Sign Up</Link>
          </AuthWrapper>
        </AccountWrapper>
      </HeaderContainer>
    </>
  );
}

const AppName = styled.h1`
  text-align: center;
  background-color: ${normalModeTheme.mainThemeColor};
  margin: 0;
  padding: 2rem 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  background-color: ${normalModeTheme.mainThemeColor};
`;

const MenuWrapper = styled.div`
  width: 100%;
  > a {
    margin: 0rem 1rem;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  > input {
    height: 2rem;
    margin: 0 1rem;
  }
`;

const AuthWrapper = styled.div`
  width: 100%;
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  right: 2%;
  top: 15%;
  height: 5rem;
  border: 1px solid ${normalModeTheme.mainThemeColor};
  > a {
    margin: 0rem 1rem;
  }
`;

const CategoryModal = styled.div`
  text-align: center;
  > div {
    margin: 3rem 1rem;
    font-size: 1.2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
  }
`;

const CategoryButton = styled.button``;
const AccountWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
