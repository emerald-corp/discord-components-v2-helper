import { StringSelector } from "../components/StringSelector"

/**
 *  Here is an example of usage to create a stringSelector.
 *  If you want to check what does this return to the discord API use :
 *  @package "npx ts-node src/templates/StringSelector.template.ts"
 **/

const stringSelector = StringSelector({
  customId: "string_selector_custom_id",
  options: [
    {
      label: "Option 1",
      value: "option_1",
      description: "This is the first option",
      emoji: { name: "1️⃣" },
      default: false,
    },
    {
      label: "Option 2",
      value: "option_2",
      description: "This is the second option",
      emoji: { name: "2️⃣" },
      default: true,
    },
    {
      label: "Option 3",
      value: "option_3",
      description: "This is the third option",
      emoji: { name: "3️⃣" },
      default: false,
    },
  ],
})

console.log(stringSelector.toJSON())
