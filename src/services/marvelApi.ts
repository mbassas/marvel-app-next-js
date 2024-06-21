import { CharacterDataWrapper, ComicDataWrapper } from "@/types/MarvelApiTypes";
import crypto from "crypto";

const getAuthenticationParams = () => {
  if (
    !process.env.CHARACTERS_API_KEY_PUBLIC ||
    !process.env.CHARACTERS_API_KEY_PRIVATE
  ) {
    throw new Error(
      "You must provide a public and private key to use the Marvel API",
    );
  }

  const ts = new Date().getTime().toString();
  const hash = crypto
    .createHash("md5")
    .update(ts)
    .update(process.env.CHARACTERS_API_KEY_PRIVATE)
    .update(process.env.CHARACTERS_API_KEY_PUBLIC)
    .digest("hex");
  return {
    ts,
    apikey: process.env.CHARACTERS_API_KEY_PUBLIC,
    hash,
  };
};

export const getCharacters = async (startsWith = "") => {
  const endpoint = `${process.env.CHARACTERS_API_URL}/characters`;
  const params = new URLSearchParams({
    ...getAuthenticationParams(),
    limit: "50",
    offset: "0",
  });
  if (startsWith) {
    params.set("nameStartsWith", startsWith);
  }
  const url = `${endpoint}?${params.toString()}`;
  const response = await fetch(url);
  const data = (await response.json()) as CharacterDataWrapper;
  return data;
};

export const getCharacter = async (id: number) => {
  const endpoint = `${process.env.CHARACTERS_API_URL}/characters/${id}`;
  const params = new URLSearchParams({
    ...getAuthenticationParams(),
    limit: "50",
    offset: "0",
  });
  const url = `${endpoint}?${params.toString()}`;
  const response = await fetch(url);
  const data = (await response.json()) as CharacterDataWrapper;
  return data?.data?.results?.[0];
};

export const getComics = async (characterId: number) => {
  const endpoint = `${process.env.CHARACTERS_API_URL}/comics`;
  const params = new URLSearchParams({
    ...getAuthenticationParams(),
    limit: "20",
    offset: "0",
    characters: characterId.toString(),
  });
  const url = `${endpoint}?${params.toString()}`;
  const response = await fetch(url);
  const data = (await response.json()) as ComicDataWrapper;
  return data;
};
