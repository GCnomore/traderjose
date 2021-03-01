import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Menu, Input, Modal, Button } from "semantic-ui-react";
import styled from "styled-components";
import { normalModeTheme } from "../../../styles/theme";
import axios from "axios";

export default function Header() {
  const [location, setLocation] = useState("");
  const [open, setOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [locationMenu, setLocationMenu] = useState(false);
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

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target.id !== "locationInput" && e.target.id !== "currenLocation") {
        if (locationMenu) {
          setLocationMenu(false);
        }
      }
    });
  }, []);

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
              <a key={item.name}>{item.name}</a>
            ))}
          </div>
        </CategoryModal>
      </Modal>
    );
  };

  const getCurrentLocation = async () => {
    const API_KEY = process.env.GEOCODE_KEY;
    navigator.geolocation.getCurrentPosition(success, handleError);
    function handleError() {
      console.log("error");
    }
    async function success(position) {
      const latlng = `${position.coords.latitude},${position.coords.longitude}`;
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&key=${API_KEY}`
      );
      console.log(API_KEY);
      console.log(res.data);
      setLocation(res.data.results[6].formatted_address);
    }
  };

  return (
    <>
      <MenuWrapper>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
      </MenuWrapper>
      <AppName>NAME OF THE APP</AppName>
      <HeaderContainer>
        <div style={{ width: "100%" }}></div>
        <SearchWrapper>
          <div>
            <SearchItemWrapper>
              <input placeholder="Search"></input>
            </SearchItemWrapper>
            <LocationWrapper>
              <input
                id="locationInput"
                onFocus={() => setLocationMenu(true)}
                value={location && location}
                onChange={(e) => setLocationMenu(e.target.value)}
                placeholder="Location"
              ></input>
              {locationMenu && (
                <div>
                  <div
                    onClick={() => getCurrentLocation()}
                    style={{ width: "100%" }}
                    id="currenLocation"
                  >
                    Current Location
                  </div>
                </div>
              )}
            </LocationWrapper>
          </div>
          <SearchButton>Search</SearchButton>
          {renderCategory()}
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
  background-color: ${normalModeTheme.mainThemeColor};
  width: 100%;
  > a {
    color: white;
    margin: 0rem 1rem;
    text-decoration: none;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  > div {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  > div > div > input {
    height: 2rem;
    width: 100%;
  }
  > button {
    width: 10rem;
    align-self: center;
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

const SearchButton = styled.button`
  height: 2rem;
  background-color: yellow;
  outline: none;
  border: none;
  :hover {
    cursor: grabbing;
  }
`;

const SearchItemWrapper = styled.div`
  width: 100%;
`;

const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > div {
    display: flex;
    justify-content: flex-start;
    background-color: white;
    padding: 0.5rem 0;
    color: black;
    border: 1px solid gray;
  }
`;
