"use client";
import styled from "styled-components";
import Link from "next/link";
import { useFavoritesContext } from "@/context/FavoritesContext";
import { Heart } from "@/components/icons/Heart";

const Header = () => {
  const { favorites } = useFavoritesContext();
  return (
    <Container>
      <Link href="/">
        <Icon src="marvel_logo.svg" alt={"marvel"} width={100} height={100} />
      </Link>

      <Favorites href="/favorites">
        <RedHeart selected size="lg" />
        <FavoritesCounter>{favorites.length}</FavoritesCounter>
      </Favorites>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: #000;
`;

const RedHeart = styled(Heart)`
  color: var(--marvel-red);
`;
const Icon = styled.img<{ $width?: number; $height?: number }>`
  width: ${(props) => (props.$width ? `${props.$width}px` : "130px")};
  height: ${(props) => (props.$height ? `${props.$height}px` : "52px")};
`;

const Favorites = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
`;

const FavoritesCounter = styled.span`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 18.75px;
`;

export default Header;
