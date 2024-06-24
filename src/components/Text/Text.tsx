"use client";
import styled, { css } from "styled-components";

interface Props {
  as?: string;
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isUpperCase?: boolean;
  weight?: number;
  className?: string;
}

const Element = styled.div<{
  $size: Props["size"];
  $isUpperCase: Props["isUpperCase"];
  $weight: Props["weight"];
}>(
  ({ $isUpperCase, $size, $weight }) => css`
    text-transform: ${$isUpperCase ? "uppercase" : "none"};
    font-size: var(--font-size-${$size});
    line-height: var(--line-height-${$size});
    font-weight: ${$weight};
  `,
);
export const Text: React.FC<Props> = ({
  as = "p",
  children,
  size = "sm",
  isUpperCase = false,
  weight = 400,
  className,
}) => {
  return (
    <Element
      as={as}
      $size={size}
      $isUpperCase={isUpperCase}
      $weight={weight}
      className={className}
    >
      {children}
    </Element>
  );
};
