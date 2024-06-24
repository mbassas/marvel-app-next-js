/**
 * Fix to be able to mock fetch, as it's not supported in jsdom environments
 * @jest-environment node
 */
import { mockCharacter } from "@/__mocks__/mockCharacter";
import { getCharacter, getCharacters, getComics } from "./marvelApi";
import { mockCharacters } from "@/__mocks__/mockCharacters";
import { mockComics } from "@/__mocks__/mockComics";

const date = new Date("2024-06-24");
jest.useFakeTimers().setSystemTime(date);

const fetchMock = jest.spyOn(global, "fetch");

describe("MarvelApi", () => {
  beforeEach(() => {
    fetchMock.mockReset();
  });

  it("should throw if no configuration", async () => {
    try {
      await getCharacter(1);
    } catch (e) {
      expect((e as Error).message).toBe(
        "You must provide a public and private key to use the Marvel API",
      );
    }
  });

  describe("getCharacters", () => {
    beforeEach(() => {
      process.env.CHARACTERS_API_URL = "https://marvel-api.com";
      process.env.CHARACTERS_API_KEY_PUBLIC = "public";
      process.env.CHARACTERS_API_KEY_PRIVATE = "private";
    });

    it("should return a character", async () => {
      fetchMock.mockResolvedValue({
        json: jest.fn().mockResolvedValueOnce({
          data: { results: [mockCharacter] },
        }),
      } as any);

      const character = await getCharacter(1);

      expect(fetchMock).toHaveBeenCalledWith(
        "https://marvel-api.com/characters/1?ts=1719187200000&apikey=public&hash=1922c7dcee804f140a8e7597e45bb117&limit=50&offset=0",
      );

      expect(character).toEqual(mockCharacter);
    });

    it("should return first 50 characters", async () => {
      fetchMock.mockResolvedValue({
        json: jest.fn().mockResolvedValueOnce({
          data: { results: mockCharacters },
        }),
      } as any);

      const characters = await getCharacters();

      expect(fetchMock).toHaveBeenCalledWith(
        "https://marvel-api.com/characters?ts=1719187200000&apikey=public&hash=1922c7dcee804f140a8e7597e45bb117&limit=50&offset=0",
      );

      expect(characters.data.results).toEqual(mockCharacters);
    });

    it("should return filtered characters", async () => {
      fetchMock.mockResolvedValue({
        json: jest.fn().mockResolvedValueOnce({
          data: { results: mockCharacters },
        }),
      } as any);

      const characters = await getCharacters("Spider");

      expect(fetchMock).toHaveBeenCalledWith(
        "https://marvel-api.com/characters?ts=1719187200000&apikey=public&hash=1922c7dcee804f140a8e7597e45bb117&limit=50&offset=0&nameStartsWith=Spider",
      );

      expect(characters.data.results).toEqual(mockCharacters);
    });
  });

  describe("getComics", () => {
    beforeEach(() => {
      process.env.CHARACTERS_API_URL = "https://marvel-api.com";
      process.env.CHARACTERS_API_KEY_PUBLIC = "public";
      process.env.CHARACTERS_API_KEY_PRIVATE = "private";
    });

    it("should return comics", async () => {
      fetchMock.mockResolvedValue({
        json: jest.fn().mockResolvedValueOnce({
          data: { results: mockComics },
        }),
      } as any);

      const characters = await getComics(1);

      expect(fetchMock).toHaveBeenCalledWith(
        "https://marvel-api.com/comics?ts=1719187200000&apikey=public&hash=1922c7dcee804f140a8e7597e45bb117&limit=20&offset=0&characters=1",
      );

      expect(characters.data.results).toEqual(mockComics);
    });
  });
});
