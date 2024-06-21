"use client";
import { getCookie } from "@/utils/getCookie";
import { setCookie } from "@/utils/setCookie";
import { createContext, useState, useContext, useEffect } from "react";

interface FavoritesContextValue {
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

const FavoritesContext = createContext<FavoritesContextValue>({
  favorites: [],
  toggleFavorite: () => {},
});

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  let [favorites, setFavorites] = useState<number[]>(() => {
    const cookie = getCookie("favorites");
    if (cookie) {
      return cookie.split(",").map((id) => parseInt(id));
    }
    return [];
  });

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favorite) => favorite !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  useEffect(() => {
    if (favorites.length === 0) {
      setCookie("favorites", "", 0);
      return;
    } else {
      setCookie("favorites", favorites.join(","), 365);
    }
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoritesContext() {
  return useContext(FavoritesContext);
}
