import { StringSelector } from "./StringSelector"

describe("StringSelector component", () => {
  test("should create a string select menu", () => {
    const stringSelector = StringSelector({
      customId: "test-select",
      placeholder: "Select an option",
      options: [
        { label: "Option 1", value: "option_1" },
        { label: "Option 2", value: "option_2" },
      ],
    })

    expect(stringSelector.data.type).toBe(3) // 3 is the type for string select menus
    expect(stringSelector.data.custom_id).toBe("test-select")
    expect(stringSelector.options.length).toBe(2)
  }),
    test("should create a string select menu with a max value and default option", () => {
      const stringSelector = StringSelector({
        customId: "test-select",
        placeholder: "Select an option",
        options: [
          { label: "Option 1", value: "option_1", default: true },
          { label: "Option 2", value: "option_2" },
        ],
        maxValues: 2,
      })

      expect(stringSelector.data.type).toBe(3) // 3 is the type for string select menus
      expect(stringSelector.data.custom_id).toBe("test-select")
      expect(stringSelector.options.length).toBe(2)
      expect(stringSelector.options?.[0].data.default).toBe(true)
      expect(stringSelector.data.max_values).toBe(2)
    })
})
