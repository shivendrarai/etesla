import React from "react";
import styled from "styled-components";
import Section from "./section";
// import "./home.css";
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundimg="s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        id="1"
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundimg="y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundimg="x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundimg="3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Lowest Cost Solar panels in America"
        description="Money-back guarantee"
        backgroundimg="sp.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Solar for new roof"
        description="Solar Roof Costs less than New Roof Solar Panels"
        backgroundimg="sf.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundimg="as.jpg"
        leftBtnText="Shop now"
        // rightBtnText="Learn more"
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;
