import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, Input } from "semantic-ui-react";
import styled from "styled-components";

export default function Header() {
  const [currentLocation, setLocation] = useState({ activeItem: "home" });
  const { activeItem } = currentLocation;
  const router = useRouter();

  const handleItemClick = (e, { name }) => {
    setLocation({ activeItem: name });
    router.push(`${name === "home" ? "/" : `/${name}`}`);
  };

  return (
    <HeaderContainer>
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: white;
    background-color: rgb(239, 136, 40, 0.7);
  }
`;
