import { ButtonStyle } from "discord.js"
import { Button } from "./Button"

describe("Button component", () => {
  test("should create a button with correct properties", () => {
    const button = Button({
      customId: "test-button",
      label: "Test button",
      style: ButtonStyle.Primary,
    })

    expect(button.data.type).toBe(2) // 2 is the type for buttons
    expect(button.data.style).toBe(ButtonStyle.Primary)
  })

  test("should create a disabled button", () => {
    const button = Button({
      customId: "disabled-button",
      label: "Disabled button",
      style: ButtonStyle.Secondary,
      disabled: true,
    })

    expect(button.data.type).toBe(2)
    expect(button.data.disabled).toBe(true)
  })

  test("should create a button with a link", () => {
    const button = Button({
      label: "Link button",
      style: ButtonStyle.Link,
      link: "https://example.com",
    })

    expect(button.data.type).toBe(2)
    expect(button.data.style).toBe(ButtonStyle.Link)
  })
})
