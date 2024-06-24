import { fireEvent, render } from "@testing-library/react";
import { CharacterSearchForm } from "./CharacterSearchForm";

var mockRouterPush: typeof jest.fn;
jest.mock("next/navigation", () => {
  mockRouterPush = jest.fn();
  return {
    ...jest.requireActual("next/navigation"),
    useRouter: jest.fn().mockReturnValue({ push: mockRouterPush }),
  };
});

describe("CharacterSearchForm", () => {
  it("should navigate when submitting the form", () => {
    const searchValue = "spider-man";
    const screen = render(<CharacterSearchForm />);
    const input = screen.getByPlaceholderText("search a character...");

    fireEvent.change(input, { target: { value: searchValue } });

    expect(mockRouterPush).toHaveBeenCalledWith(`?q=${searchValue}`);
  });
});
