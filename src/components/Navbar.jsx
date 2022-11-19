import React from "react";
// import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Container = styled.div`
  height: 80px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  width: 170px;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Input = styled.input`
  font-size: 16px;
  border: none;
  outline: none;
  padding: 5px;
  margin: 0px 10px 0px 10px;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding: 5px;
  border-radius: 25px;
`;

const SignIn = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-right: 20px;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo style={{ cursor: "pointer" }}>KAIMONO.</Logo>
        </Left>
        <Center>
          <MenuItem>HOME</MenuItem>
          <MenuItem>COLLECTIONS</MenuItem>
          <MenuItem>ABOUT</MenuItem>
        </Center>
        <Right>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", cursor: "pointer" }} />
          </SearchContainer>
          <SignIn>SIGN IN</SignIn>
          <Badge>
            <ShoppingCartOutlined style={{ cursor: "pointer" }} />
          </Badge>
          <Language>EN</Language>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
