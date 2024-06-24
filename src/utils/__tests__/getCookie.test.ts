import { getCookie } from "../getCookie";

describe("getCookie", () => {
  it("should return empty string if cookie is not found", () => {
    expect(getCookie("nonexistent")).toBe("");
  });

  it("should return cookie value", () => {
    document.cookie = "existing=cookie";
    expect(getCookie("existing")).toBe("cookie");
  });
});
