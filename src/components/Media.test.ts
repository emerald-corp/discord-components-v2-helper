import { Media } from "./Media"

describe("Media component", () => {
  test("should create a media component with correct properties", () => {
    const media = Media([
      {
        media: { url: "https://example.com/image1.png" },
        spoiler: false,
      },
      {
        media: { url: "https://example.com/image2.png" },
        spoiler: false,
      },
    ])

    expect(media.data.type).toBe(12)
    expect(media.data.items?.forEach((item, index) => {
        expect(item.media.url).toBe(`https://example.com/image${index + 1}.png`)
        expect(item.spoiler).toBe(false)
    }))
  })
})
