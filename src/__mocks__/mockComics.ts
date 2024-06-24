import { Comic } from "@/types/MarvelApiTypes";

export const mockComics: Comic[] = [
  {
    id: 1,
    title: "Test Comic",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
      extension: "jpg",
    },
    dates: [{ type: "onsaleDate", date: new Date() }],
  },
  {
    id: 2,
    title: "Test Comic",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
      extension: "jpg",
    },
    dates: [{ type: "onsaleDate", date: new Date() }],
  },
  {
    id: 3,
    title: "Test Comic",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
      extension: "jpg",
    },
    dates: [{ type: "onsaleDate", date: new Date() }],
  },
  {
    id: 4,
    title: "Test Comic",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
      extension: "jpg",
    },
    dates: [{ type: "onsaleDate", date: new Date() }],
  },
];
