import { act, render } from "@testing-library/react";
import { FavoritesContext, FavoritesProvider } from "./FavoritesContext";
import { getCookie } from "../utils/getCookie";
import { setCookie } from "../utils/setCookie";

const mockGetCookie = jest.mocked(getCookie);
jest.mock("../utils/getCookie", () => ({
  getCookie: jest.fn(),
}));

const mockSetCookie = jest.mocked(setCookie);
jest.mock("../utils/setCookie", () => ({
  setCookie: jest.fn(),
}));

describe("FavoritesContext", () => {
  let favoritesContextValue: number[] = [];
  let toggleFavoriteContextValue: (id: number) => void = () => {};

  const renderComponent = () => {
    const screen = render(
      <FavoritesProvider>
        <FavoritesContext.Consumer>
          {({ toggleFavorite, favorites }) => {
            favoritesContextValue = favorites;
            toggleFavoriteContextValue = toggleFavorite;
            return null;
          }}
        </FavoritesContext.Consumer>
      </FavoritesProvider>,
    );

    return { screen };
  };

  it("should initialize without cookie", () => {
    renderComponent();

    expect(favoritesContextValue).toEqual([]);
  });

  it("should initialize with values from cookie", () => {
    mockGetCookie.mockReturnValueOnce("1,2,3");

    renderComponent();

    expect(favoritesContextValue).toEqual([1, 2, 3]);
  });

  it("should add favorite", async () => {
    renderComponent();

    act(() => {
      toggleFavoriteContextValue(1);
    });

    expect(mockSetCookie).toHaveBeenCalledWith("favorites", "1", 365);
    expect(favoritesContextValue).toEqual([1]);
  });

  it("should remove favorite", async () => {
    mockGetCookie.mockReturnValueOnce("1");
    renderComponent();

    act(() => {
      toggleFavoriteContextValue(1);
    });

    expect(mockSetCookie).toHaveBeenCalledWith("favorites", "", 0);
    expect(favoritesContextValue).toEqual([]);
  });
});
