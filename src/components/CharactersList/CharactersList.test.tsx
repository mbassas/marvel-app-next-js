import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CharactersList from "@/components/CharactersList/CharactersList";
import { Character } from "@/types/MarvelApiTypes";
import { mockCharacters } from "@/__mocks__/mockCharacters";

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useRouter: jest.fn().mockReturnValue({ refresh: jest.fn() }),
}));

describe("CharactersList test suite", () => {
  it("should render characters list", async () => {
    render(<CharactersList characters={mockCharacters} />);
    expect(await screen.findAllByRole("listitem")).toHaveLength(
      mockCharacters.length,
    );
  });

  it("should render characters list with no characters", async () => {
    render(<CharactersList characters={[]} />);
    expect(screen.getByRole("list")).toBeEmptyDOMElement();
  });

  it("should match snapshot", async () => {
    const { container } = render(
      <CharactersList characters={mockCharacters} />,
    );
    expect(container).toMatchSnapshot();
  });
});
