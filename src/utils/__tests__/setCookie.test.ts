import { setCookie } from "../setCookie";

describe("setCookie", () => {
  it("should set cookie", () => {
    setCookie("cookie", "value", 2);
    expect(document.cookie).toBe("cookie=value");
  });
});
