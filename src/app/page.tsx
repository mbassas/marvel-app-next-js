import CharactersList from "@/components/CharactersList";
import { ContentWrapper } from "@/components/ContentWrapper/ContentWrapper";
import { getCharacters } from "@/services/marvelApi";

export default async function Home() {
  const { data } = await getCharacters();
  if (!data) return <div>not found</div>;

  return (
    <ContentWrapper
      $paddingTop={24}
      $paddingBottom={24}
      $paddingLeft={16}
      $paddingRight={16}
    >
      <CharactersList characters={data.results} />
    </ContentWrapper>
  );
}
