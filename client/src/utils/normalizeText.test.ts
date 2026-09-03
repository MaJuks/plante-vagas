import { describe, expect, it } from "vitest";
import { normalizeText } from "./normalizeText";

describe("normalizeText", () => {
  it("removes accents and diacritics", () => {
    expect(normalizeText("Veterinário")).toBe("veterinario");
  });

  it("lowercases the text", () => {
    expect(normalizeText("PRODUÇÃO AGRÍCOLA")).toBe("producao agricola");
  });

  it("treats accented and plain versions as equal", () => {
    expect(normalizeText("Veterinário")).toBe(normalizeText("veterinario"));
  });

  it("leaves text without diacritics unchanged besides casing", () => {
    expect(normalizeText("Zootecnia")).toBe("zootecnia");
  });

  it("returns an empty string for empty input", () => {
    expect(normalizeText("")).toBe("");
  });
});
