"use client";
import styled from "styled-components";

interface Props {
  as?: string;
  children: React.ReactNode;
  size?: number;
  isUpperCase?: boolean;
  weight?: number;
}

export const Text: React.FC<Props> = ({
  as = "p",
  children,
  size = 16,
  isUpperCase = false,
  weight = 400,
}) => {
  const Element = styled(as)`
    text-transform: ${isUpperCase ? "uppercase" : "none"};
    font-size: ${size}px;
    font-weight: ${weight};
  `;

  return <Element>{children}</Element>;
};
