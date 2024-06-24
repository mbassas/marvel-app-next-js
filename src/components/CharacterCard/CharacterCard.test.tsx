import React from "react";
import { render, getByRole } from "@testing-library/react";
import CharacterCard from "./CharacterCard";
import { mockCharacter } from "@/__mocks__/mockCharacter";
import userEvent from "@testing-library/user-event";

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useRouter: jest.fn().mockReturnValue({ refresh: jest.fn() }),
}));

jest.mock("../../context/FavoritesContext", () => ({
  useFavoritesContext: () => ({
    toggleFavorite: mockToggleFavorite,
    favorites: [2],
  }),
}));

var mockToggleFavorite = jest.fn();

describe("CharacterCard", () => {
  it("should render without description when not detailed", () => {
    const screen = render(<CharacterCard {...mockCharacter} />);

    expect(screen.queryByText("Test description")).toBeNull();
    expect(getByRole(screen.container, "button")).toHaveAttribute(
      "aria-label",
      "heart-icon",
    );
  });

  it("should render with description when detailed", () => {
    const screen = render(<CharacterCard {...mockCharacter} isDetailed />);

    expect(screen.getByText(mockCharacter.description)).toBeVisible();
    expect(getByRole(screen.container, "button")).toHaveAttribute(
      "aria-label",
      "heart-icon",
    );
  });

  it("should render with heart icon filled when is favorite", () => {
    const screen = render(<CharacterCard {...mockCharacter} id={2} />);
    expect(screen.getByTestId("heart-icon")).toBeInTheDocument();
  });

  it("should render with heart icon outline when is not favorite", () => {
    const screen = render(<CharacterCard {...mockCharacter} />);
    expect(screen.getByTestId("heart-icon-outline")).toBeInTheDocument();
  });

  it("should add favorite", async () => {
    const user = userEvent.setup();

    const screen = render(<CharacterCard {...mockCharacter} />);

    expect(mockToggleFavorite).not.toHaveBeenCalled();
    await user.click(screen.getByRole("button", { name: /heart-icon/i }));
    expect(mockToggleFavorite).toHaveBeenCalledWith(mockCharacter.id);
  });

  it("should check that rectangle element is rendered", () => {
    const screen = render(<CharacterCard {...mockCharacter} />);

    const heartIcon = screen.getByRole("button", { name: /heart-icon/i });
    expect(heartIcon).toHaveProperty("parentElement");

    if (heartIcon.parentElement) {
      expect(heartIcon.parentElement).toHaveProperty("children");
      //childrens: text, button and rectangle
      expect(heartIcon.parentElement.children).toHaveLength(3);
    }
  });

  it("should check that rectangle element is not rendered", () => {
    const screen = render(<CharacterCard {...mockCharacter} isDetailed />);

    const heartIcon = screen.getByRole("button", { name: /heart-icon/i });
    expect(heartIcon).toHaveProperty("parentElement");

    if (heartIcon.parentElement) {
      expect(heartIcon.parentElement).toHaveProperty("children");
      //childrens: text, button
      expect(heartIcon.parentElement.children).toHaveLength(2);
    }
  });
});
