import { ButtonStyle } from "discord.js"
import { Button } from "../components/Button"
import { Section } from "../components/Section"
import { Text } from "../components/Text"

/**
 *  Here is an example of usage to create a section.
 *  If you want to check what does this return to the discord API use :
 *  @package "npx ts-node src/templates/Section.template.ts"
 **/

const section = Section({
  textComponents: [Text("In the side here is a button.")],
  buttonAccessory: Button({
    customId: "this_is_custom_id",
    label: "Test Button",
    emoji: { name: "🎲" },
    disabled: false,
    style: ButtonStyle.Primary,
  }),
})

console.log(section.toJSON())
