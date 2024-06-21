"use client";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  $paddingTop?: number;
  $paddingBottom?: number;
  $paddingLeft?: number;
  $paddingRight?: number;
}

export const ContentWrapper: React.FC<Props> = ({
  children,
  $paddingTop = 0,
  $paddingBottom = 0,
  $paddingLeft = 0,
  $paddingRight = 0,
}) => {
  return (
    <Wrapper
      $paddingTop={$paddingTop}
      $paddingBottom={$paddingBottom}
      $paddingLeft={$paddingLeft}
      $paddingRight={$paddingRight}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<Omit<Props, "children">>(
  ({ $paddingTop, $paddingBottom, $paddingLeft, $paddingRight }) => `
    padding-top: ${$paddingTop}px;
    padding-bottom: ${$paddingBottom}px;
    padding-left: ${$paddingLeft}px;
    padding-right: ${$paddingRight}px;
    `,
);
