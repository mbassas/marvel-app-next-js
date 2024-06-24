import { Character } from "@/types/MarvelApiTypes";

export const mockCharacter: Character = {
  id: 1,
  name: "Test Character 1",
  description: "A test character 1",
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
    extension: "jpg",
  },
  modified: new Date(),
  resourceURI: "",
  urls: [],
  comics: {
    available: 1,
    returned: 1,
    collectionURI:
      "http://gateway.marvel.com/v1/public/characters/1011334/comics",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/43506",
        name: "Age of Ultron (2013) #10",
      },
    ],
  },
};
