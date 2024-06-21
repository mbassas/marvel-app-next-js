import CharactersList from "@/components/CharactersList";
import { getCharacters } from "@/services/marvelApi";

export default async function Home() {
  const { data } = await getCharacters();
  if (!data) return <div>not found</div>;

  return <CharactersList characters={data.results} />;
}
