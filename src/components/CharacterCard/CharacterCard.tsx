"use client";
import { Character } from "@/types/MarvelApiTypes";
import styled, { css } from "styled-components";
import { useFavoritesContext } from "@/context/FavoritesContext";
import { Heart } from "../icons/Heart";
import { useRouter } from "next/navigation";
import { Text } from "../Text/Text";

interface CharacterCardProps
  extends Pick<Character, "name" | "thumbnail" | "id" | "description"> {
  isDetailed?: boolean;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  thumbnail,
  id,
  description,
  isDetailed = false,
}) => {
  const { toggleFavorite, favorites } = useFavoritesContext();
  const router = useRouter();
  const isFavorite = favorites.includes(id);
  const handleToggleFavorite = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    toggleFavorite(id);
    router.refresh();
  };

  const showDescription = isDetailed && description;
  return (
    <Container>
      <CharacterCardContentWrapper $isDetailed={isDetailed}>
        <CharacterPhotoWrapper $isDetailed={isDetailed}>
          <CharacterPhoto
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={name}
            loading="lazy"
          />
        </CharacterPhotoWrapper>

        <CharacterInfoWrapper>
          <CharacterInfo>
            {!isDetailed && <Rectangle />}
            <Name
              isUpperCase
              weight={isDetailed ? 700 : 400}
              size={isDetailed ? "xl" : "sm"}
            >
              {name}
            </Name>
            <NoStyleButton
              onClick={handleToggleFavorite}
              aria-label="heart-icon"
            >
              <Heart selected={isFavorite} size={isDetailed ? "lg" : "sm"} />
            </NoStyleButton>
          </CharacterInfo>
          {showDescription && (
            <Description size="md">{description}</Description>
          )}
        </CharacterInfoWrapper>
      </CharacterCardContentWrapper>
      <Cut />
    </Container>
  );
};

const Rectangle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 5px;
  background: var(--marvel-red);
  transition: height 0.3s ease-in-out;
`;

const NoStyleButton = styled.button`
  background: none;
  border: none;
  padding: 12px;
  margin: 0;
  cursor: pointer;
  z-index: 1;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--bg-dark);
`;

const CharacterCardContentWrapper = styled.div<{ $isDetailed: boolean }>(
  (props) => css`
    /*---------------------------------------
    the card expands if another one in the row
    has a longer name
    */
    height: 100%;
    display: flex;
    flex-direction: column;
    /** ------------------------------------- */

    @media (hover: hover) {
      &:hover ${Rectangle} {
        height: 100%;
      }
      ${!props.$isDetailed &&
      `
      &:hover ${NoStyleButton} {
        color: #fff;
      }
    `}
    }

    ${NoStyleButton} {
      transition: color 0.3s ease-in-out;
      color: #ec1d24;
    }

    ${props.$isDetailed &&
    css`
      @media (min-width: 768px) {
        flex-direction: row;
        width: 100%;
        max-width: 960px;
        margin: auto;
        gap: var(--spacing-xl);
      }
    `}
  `,
);

const CharacterPhotoWrapper = styled.div<{ $isDetailed: boolean }>(
  (props) => css`
    ${!props.$isDetailed && "height: 190px;"}
    ${props.$isDetailed &&
    css`
      @media (min-width: 768px) {
        width: 320px;
        height: 320px;
        object-fit: cover;
      }
    `}
  `,
);

const CharacterPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CharacterInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-sm);
  padding-top: 21px;
  align-items: center;
`;

const Name = styled(Text)`
  color: #fff;
  z-index: 1;
  flex: 1;
`;

const Cut = styled.div`
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 13px;
  height: 13px;
  background-color: var(--bg-light);
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
`;

const CharacterInfoWrapper = styled.div`
  flex: 1;
  align-content: center;
`;

const Description = styled(Text)`
  color: #fff;
  padding: var(--spacing-xs) var(--spacing-sm) var(--spacing-xl)
    var(--spacing-sm);
`;

export default CharacterCard;
