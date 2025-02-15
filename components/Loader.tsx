import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    width: 100px;
    height: 100px;
    border: 8px solid #1cd42550;
    border-top-color: #1cd425;
    animation: spin013151 1s linear infinite;
    border-radius: 100%;
  }

  @keyframes spin013151 {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
