import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { timeAgo } from "./timeAgo";

describe("timeAgo", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-10T12:00:00.000Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("shows singular hour for a 1 hour difference", () => {
    expect(timeAgo("2026-01-10T11:00:00.000Z")).toBe("1 hora");
  });

  it("shows plural hours for more than 1 hour", () => {
    expect(timeAgo("2026-01-10T09:00:00.000Z")).toBe("3 horas");
  });

  it("floors to a minimum of 1 hour even for very recent dates", () => {
    expect(timeAgo("2026-01-10T11:59:30.000Z")).toBe("1 hora");
  });

  it("switches to days once 24 hours have passed", () => {
    expect(timeAgo("2026-01-09T12:00:00.000Z")).toBe("1 dia");
  });

  it("shows plural days for more than 1 day", () => {
    expect(timeAgo("2026-01-05T12:00:00.000Z")).toBe("5 dias");
  });
});
