export interface DataWrapper<T> {
  code: string;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML?: string;
  data: DataContainer<T>;
  etag?: string;
}

export interface DataContainer<T> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Array<T>;
}

export type CharacterDataWrapper = DataWrapper<Character>;
export type CharacterDataContainer = DataContainer<Character>;

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Url[];
  thumbnail: Image;
  comics: ComicList;
}

export interface Url {
  type: string;
  url: string;
}

export interface Image {
  path: string;
  extension: string;
}

export interface ComicList {
  available: number;
  returned: number;
  collectionURI: string;
  items: ComicSummary[];
}

export interface ComicSummary {
  resourceURI: string;
  name: string;
}

export type ComicDataWrapper = DataWrapper<Comic>;
export type ComicDataContainer = DataContainer<Comic>;

export interface Comic {
  id: number;
  title: string;
  dates: ComicDate[];
  thumbnail: Image;
}

interface ComicDate {
  type: string;
  date: Date;
}
