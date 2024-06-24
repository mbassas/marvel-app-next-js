import { Character } from "@/types/MarvelApiTypes";

export const mockCharacter: Pick<
  Character,
  "name" | "thumbnail" | "id" | "description"
> = {
  id: 1,
  name: "Test Character",
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
    extension: "jpg",
  },
  description: "Test description",
};
