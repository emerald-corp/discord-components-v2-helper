import { TextInputStyle } from "discord.js"
import { TextInput } from "./TextInput"

describe("TextInput component", () => {
  test("should create a text input with required properties", () => {
    const textInput = TextInput({
      customId: "test-input",
      style: TextInputStyle.Short,
    })

    expect(textInput.data.type).toBe(4) // 4 is the type for text inputs
    expect(textInput.data.custom_id).toBe("test-input")
    expect(textInput.data.style).toBe(TextInputStyle.Short)
  })

  test("should create a paragraph style text input", () => {
    const textInput = TextInput({
      customId: "paragraph-input",
      style: TextInputStyle.Paragraph,
    })

    expect(textInput.data.type).toBe(4)
    expect(textInput.data.style).toBe(TextInputStyle.Paragraph)
  })

  test("should create a text input with optional properties", () => {
    const textInput = TextInput({
      customId: "full-input",
      style: TextInputStyle.Short,
      placeholder: "Enter text here...",
      value: "Default value",
      minLength: 5,
      maxLength: 100,
      required: true,
    })

    expect(textInput.data.custom_id).toBe("full-input")
    expect(textInput.data.placeholder).toBe("Enter text here...")
    expect(textInput.data.value).toBe("Default value")
    expect(textInput.data.min_length).toBe(5)
    expect(textInput.data.max_length).toBe(100)
    expect(textInput.data.required).toBe(true)
  })

  test("should create an optional text input", () => {
    const textInput = TextInput({
      customId: "optional-input",
      style: TextInputStyle.Short,
      required: false,
    })

    expect(textInput.data.required).toBe(false)
  })

  test("should handle minLength of 0", () => {
    const textInput = TextInput({
      customId: "min-zero",
      style: TextInputStyle.Short,
      minLength: 0,
    })

    expect(textInput.data.min_length).toBe(0)
  })

  test("should handle maxLength properly", () => {
    const textInput = TextInput({
      customId: "max-test",
      style: TextInputStyle.Paragraph,
      maxLength: 4000,
    })

    expect(textInput.data.max_length).toBe(4000)
  })
})
