"use client";
import { Character, Comic } from "@/types/MarvelApiTypes";
import ComicsCarrousel from "./ComicsCarrousel";
import CharacterCard from "./CharacterCard";
import { ContentWrapper } from "./ContentWrapper/ContentWrapper";

const CharacterDetails: React.FC<{
  character: Character;
  comics?: Comic[];
}> = ({ character, comics = [] }) => {
  return (
    <ContentWrapper $paddingBottom={24}>
      <CharacterCard
        isDetailed
        name={character.name}
        thumbnail={character.thumbnail}
        id={character.id}
        description={character.description}
      />
      {comics.length > 0 && <ComicsCarrousel comics={comics} />}
    </ContentWrapper>
  );
};
export default CharacterDetails;
