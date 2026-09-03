import { describe, expect, it } from "vitest";
import { hashPassword } from "./hashPassword";

describe("hashPassword", () => {
  it("produces the expected SHA-256 hex digest", () => {
    expect(hashPassword("senha123")).toBe(
      "55a5e9e78207b4df8699d60886fa070079463547b095d1a05bc719bb4e6cd251",
    );
  });

  it("is deterministic for the same input", () => {
    expect(hashPassword("abc")).toBe(hashPassword("abc"));
  });

  it("produces different hashes for different inputs", () => {
    expect(hashPassword("abc")).not.toBe(hashPassword("abd"));
  });

  it("always returns a 64-character hex string", () => {
    expect(hashPassword("qualquer coisa")).toMatch(/^[0-9a-f]{64}$/);
  });
});
