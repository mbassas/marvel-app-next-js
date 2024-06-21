import CharacterDetails from "@/components/CharacterDetails";
import { getCharacter, getComics } from "@/services/marvelApi";
import { ReactNode } from "react";

export default async function Details({
  params,
}: {
  params: { charactersId: number };
}): Promise<ReactNode> {
  const [characterData, comicsData] = await Promise.all([
    getCharacter(params.charactersId),
    getComics(params.charactersId),
  ]);

  if (!characterData) {
    return <div>Character not found</div>;
  }

  return (
    <CharacterDetails
      character={characterData}
      comics={comicsData.data?.results}
    />
  );
}
