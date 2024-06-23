"use client";

import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const PageWrapper = styled.div`
  animation: ${fadeIn} 0.5s ease-in-out;
`;
