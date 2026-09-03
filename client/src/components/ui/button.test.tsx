import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./button";

describe("Button", () => {
  it("renders its children", () => {
    render(<Button>Enviar</Button>);
    expect(screen.getByRole("button", { name: "Enviar" })).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Clique</Button>);

    await userEvent.click(screen.getByRole("button", { name: "Clique" }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not fire onClick when disabled", async () => {
    const onClick = vi.fn();
    render(
      <Button onClick={onClick} disabled>
        Desabilitado
      </Button>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Desabilitado" }));

    expect(onClick).not.toHaveBeenCalled();
  });

  it("applies the destructive variant class", () => {
    render(<Button variant="destructive">Excluir</Button>);
    expect(screen.getByRole("button", { name: "Excluir" }).className).toMatch(
      /bg-destructive/,
    );
  });
});
