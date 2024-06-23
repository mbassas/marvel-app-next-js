import { CharacterSearchForm } from "@/components/CharacterSearchForm";
import CharactersList from "@/components/CharactersList";
import { ContentWrapper } from "@/components/ContentWrapper/ContentWrapper";
import { Text } from "@/components/Text/Text";
import { getCharacter } from "@/services/marvelApi";
import { cookies } from "next/headers";

const getFavoriteCharacters = async (favoriteIds: number[]) => {
  return await Promise.all(favoriteIds.map((id) => getCharacter(id)));
};

export default async function Favorites({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const cookieStore = cookies();
  const favoritesCookie = cookieStore.get("favorites");
  const searchValue = searchParams.q || "";

  if (!favoritesCookie) {
    return <CharactersList characters={[]} />;
  }

  const favoritesIds = favoritesCookie.value
    .split(",")
    .map((id) => parseInt(id));

  const characters = await getFavoriteCharacters(favoritesIds);

  const filteredCharacters = characters
    .filter((c) => c?.name.toLowerCase().startsWith(searchValue.toLowerCase()))
    .filter((c) => !!c);

  return (
    <ContentWrapper
      $paddingBottom={24}
      $paddingTop={24}
      $paddingLeft={16}
      $paddingRight={16}
    >
      <ContentWrapper $paddingBottom={24}>
        <Text isUpperCase size={24} weight={700}>
          Favorites
        </Text>
      </ContentWrapper>
      <CharacterSearchForm
        initialSearch={searchValue}
        resultCount={filteredCharacters.length}
      />
      <CharactersList characters={filteredCharacters} />
    </ContentWrapper>
  );
}
