"use client";
import styled from "styled-components";
import Link from "next/link";
import { useFavoritesContext } from "@/context/FavoritesContext";
import { Heart } from "@/components/icons/Heart";
import { Text } from "../Text/Text";

const Header = () => {
  const { favorites } = useFavoritesContext();
  return (
    <>
      <Container>
        <MarvelIcon href="/">
          <Icon src="marvel_logo.svg" alt={"marvel"} width={100} height={100} />
        </MarvelIcon>

        <Favorites href="/favorites">
          <RedHeart selected size="lg" />
          <FavoritesCounter size="md" as="span">
            {favorites.length}
          </FavoritesCounter>
        </Favorites>
      </Container>
      <HeaderSpacer />
    </>
  );
};

const HeaderSpacer = styled.div`
  height: 90px;
`;

const Container = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-sm);
  background: var(--bg-dark);
  /* position: relative; */
  z-index: 2;
  border: 1px solid #333333;
`;

const RedHeart = styled(Heart)`
  color: var(--marvel-red);
`;
const Icon = styled.img<{ $width?: number; $height?: number }>`
  width: ${(props) => (props.$width ? `${props.$width}px` : "130px")};
  height: ${(props) => (props.$height ? `${props.$height}px` : "52px")};
`;

const MarvelIcon = styled(Link)`
  @media (min-width: 768px) {
    padding: 0 var(--spacing-lg) 0 var(--spacing-lg);
  }
`;

const Favorites = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs);
  @media (min-width: 768px) {
    padding: var(--spacing-xs) var(--spacing-lg) var(--spacing-xs)
      var(--spacing-lg);
  }
`;

const FavoritesCounter = styled(Text)`
  color: #fff;
`;

export default Header;
