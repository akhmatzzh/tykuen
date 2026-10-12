import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import App from "./App"

describe("App", () => {
  it("renders the Тыкуэн homepage", () => {
    render(<App />)
    expect(screen.getByRole("heading", { name: /своё рядом/i })).toBeInTheDocument()
    expect(screen.getByRole("searchbox", { name: /поиск/i })).toBeInTheDocument()
  })
})
