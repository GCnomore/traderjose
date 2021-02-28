import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { Menu, Input } from "semantic-ui-react";
import styled from "styled-components";
import { normalModeTheme } from "../../../styles/theme";

export default function Header() {
  const [currentLocation, setLocation] = useState({ activeItem: "home" });
  const { activeItem } = currentLocation;
  const router = useRouter();

  return (
    <>
      <AppName>NAME OF THE APP</AppName>
      <HeaderContainer>
        <MenuWrapper>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/"}>Home</Link>
        </MenuWrapper>
        <SearchWrapper>
          <input placeholder="Search"></input>
          <input placeholder="Location"></input>
        </SearchWrapper>
        <AuthWrapper>
          <Link href={"/login"}>Log In</Link>
          <Link href={"/register"}>Sign Up</Link>
        </AuthWrapper>
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
  > a {
    margin: 0rem 1rem;
  }
`;

const SearchWrapper = styled.div``;

const AuthWrapper = styled.div`
  > a {
    margin: 0rem 1rem;
  }
`;
