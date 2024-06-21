"use client";
import { Character } from "@/types/MarvelApiTypes";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const CharactersList: React.FC<{ characters: Character[] }> = ({
  characters,
}) => {
  return (
    <Ul>
      {characters.map((character) => (
        <Li key={character.id}>
          <CharacterCard
            name={character.name}
            thumbnail={character.thumbnail}
          />
        </Li>
      ))}
    </Ul>
  );
};

const Li = styled.li`
  list-style: none;
`;
const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 173px);
  row-gap: 16px;
  justify-content: space-between;
`;

export default CharactersList;
