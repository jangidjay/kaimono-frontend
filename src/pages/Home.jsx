import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Heading = styled.h1`
  font-size: 18px;
  text-align: center;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 40px;
`;

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Heading>
        <h1>SHOP BY CATEGORY</h1>
      </Heading>
      <Categories />
    </div>
  );
};

export default Home;
