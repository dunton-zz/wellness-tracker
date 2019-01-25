import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  min-width: 100%;
  width: 100%;
  background: black;
  color: #fff;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-bottom: 20px;
  position: fixed;
`;

const Header = props => {
  return (
    <HeaderWrapper>
      <div>HEADER</div>
    </HeaderWrapper>
  );
};

export default Header;
