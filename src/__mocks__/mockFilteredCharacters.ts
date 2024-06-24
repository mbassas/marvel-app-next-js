import { Character } from "@/types/MarvelApiTypes";

export const mockFilteredCharacters: Pick<
  Character,
  "name" | "thumbnail" | "id" | "description"
>[] = [
  {
    id: 1,
    name: "Spider",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
      extension: "jpg",
    },
    description: "Test description",
  },
  {
    id: 2,
    name: "Spiderman",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
      extension: "jpg",
    },
    description: "Test description",
  },
  {
    id: 3,
    name: "Spiderman 3",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
      extension: "jpg",
    },
    description: "Test description",
  },
  {
    id: 4,
    name: "Spiderman 2",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
      extension: "jpg",
    },
    description: "Test description",
  },
  {
    id: 5,
    name: "Spiderman 4",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
      extension: "jpg",
    },
    description: "Test description",
  },
];
