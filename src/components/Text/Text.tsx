"use client";
import styled from "styled-components";

interface Props {
  as?: string;
  children: React.ReactNode;
  size?: number;
  isUpperCase?: boolean;
  weight?: number;
}

const Element = styled.div<Props>(
  ({ isUpperCase, size, weight }) => `
  text-transform: ${isUpperCase ? "uppercase" : "none"};
  font-size: ${size}px;
  font-weight: ${weight};
`,
);
export const Text: React.FC<Props> = ({
  as = "p",
  children,
  size = 16,
  isUpperCase = false,
  weight = 400,
}) => {
  return (
    <Element as={as} size={size} isUpperCase={isUpperCase} weight={weight}>
      {children}
    </Element>
  );
};
