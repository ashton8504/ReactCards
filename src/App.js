import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Origins from "./Origins";

const StyledContainer = styled.div`
  background-color: #ffffcc;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <StyledContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gaming-origins" element={<Origins />} />
        </Routes>
      </BrowserRouter>
    </StyledContainer>
  );
}

export default App;
