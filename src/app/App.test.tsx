import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import App from "./App"

describe("App", () => {
  it("renders the Тыкуэн homepage", () => {
    render(<App />)
    expect(screen.getByRole("heading", { name: /своё рядом/i })).toBeInTheDocument()
    expect(screen.getByRole("searchbox", { name: /поиск/i })).toBeInTheDocument()
  })

  it("opens the sign-in and registration dialog", () => {
    render(<App />)
    fireEvent.click(screen.getByRole("button", { name: /войти/i }))
    expect(screen.getByRole("dialog", { name: /с возвращением/i })).toBeInTheDocument()
    expect(screen.getByRole("tab", { name: /регистрация/i })).toBeInTheDocument()
  })

  it("explains how to configure Supabase when credentials are missing", () => {
    render(<App />)
    fireEvent.click(screen.getByRole("button", { name: /войти/i }))
    expect(screen.getByRole("status")).toHaveTextContent(/подключи Supabase/i)
  })
})
