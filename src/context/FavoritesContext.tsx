"use client";
import { getCookie } from "@/utils/getCookie";
import { setCookie } from "@/utils/setCookie";
import { createContext, useState, useContext, useEffect } from "react";

interface FavoritesContextValue {
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

export const FavoritesContext = createContext<FavoritesContextValue>({
  favorites: [],
  toggleFavorite: () => {},
});

const persistFavoritesCookie = (favorites: number[]) => {
  if (favorites.length === 0) {
    setCookie("favorites", "", 0);
    return;
  } else {
    setCookie("favorites", favorites.join(","), 365);
  }
};

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  let [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const cookie = getCookie("favorites");
    if (cookie) {
      setFavorites(cookie.split(",").map((id) => parseInt(id)));
    }
  }, []);

  const toggleFavorite = (id: number) => {
    const nextFavorites = favorites.includes(id)
      ? favorites.filter((favorite) => favorite !== id)
      : [...favorites, id];
    setFavorites(nextFavorites);
    persistFavoritesCookie(nextFavorites);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoritesContext() {
  return useContext(FavoritesContext);
}
