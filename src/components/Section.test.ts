import { ButtonStyle } from "discord.js"
import { Button } from "./Button"
import { Section } from "./Section"
import { Text } from "./Text"
import { Thumbnail } from "./Thumbnail"

describe("Section component", () => {
  test("should create a section with a text field and a button accessory", () => {
    const section = Section({
      textComponents: [Text("This is a section with a button")],
      buttonAccessory: Button({
        customId: "section-button",
        label: "Click me",
        style: ButtonStyle.Primary,
      }),
    })

    expect(section.data.type).toBe(9) // 9 is the type for sections
    expect(
      section.data.components?.forEach((component) => {
        expect(component.type).toBe(10) // 10 is the type for text display components
        expect(component.content).toBe("This is a section with a button")
      })
    )
    expect(section.accessory?.data.type).toBe(2) // 2 is the type for buttons
  }),
    test("should create a section with a text field and a thumbnail accessory", () => {
      const section = Section({
        textComponents: [Text("This is a section with a thumbnail")],
        thumbnailAccessory: Thumbnail({
          media: { url: "https://example.com/image.png" },
        }),
      })

      expect(section.data.type).toBe(9) // 9 is the type for sections
      expect(
        section.data.components?.forEach((component) => {
          expect(component.type).toBe(10) // 10 is the type for text display components
          expect(component.content).toBe("This is a section with a thumbnail")
        })
      )
      expect(section.accessory?.data.type).toBe(11) // 11 is the type for thumbnails
    })
})
