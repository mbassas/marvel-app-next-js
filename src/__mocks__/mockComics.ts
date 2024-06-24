import { Comic } from "@/types/MarvelApiTypes";

const mockComic: Comic = {
  id: 1,
  title: "Test Comic",
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
    extension: "jpg",
  },
  dates: [{ type: "onsaleDate", date: new Date() }],
};

export const mockComics: Comic[] = [mockComic, mockComic, mockComic, mockComic];
