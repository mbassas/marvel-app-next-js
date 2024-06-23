import CharacterDetails from "@/components/CharacterDetails";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { getCharacter, getComics } from "@/services/marvelApi";
import { notFound } from "next/navigation";
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
    return notFound();
  }

  return (
    <PageWrapper>
      <CharacterDetails
        character={characterData}
        comics={comicsData.data?.results}
      />
    </PageWrapper>
  );
}
