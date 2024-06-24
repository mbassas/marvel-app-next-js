"use client";
import { Character } from "@/types/MarvelApiTypes";
import CharacterCard from "../CharacterCard/CharacterCard";
import styled from "styled-components";
import Link from "next/link";

const CharactersList: React.FC<{ characters: Character[] }> = ({
  characters,
}) => {
  return (
    <>
      <Ul>
        {characters.map((character) => (
          <Li key={character.id}>
            <Link href={`/characters/${character.id}`}>
              <CharacterCard
                name={character.name}
                thumbnail={character.thumbnail}
                id={character.id}
                description={character.description}
              />
            </Link>
          </Li>
        ))}
      </Ul>
    </>
  );
};

const Li = styled.li`
  list-style: none;
`;
const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(172px, 1fr));
  gap: 16px;
  justify-content: space-between;
`;

export default CharactersList;
