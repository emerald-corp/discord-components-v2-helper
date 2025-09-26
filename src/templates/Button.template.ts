import { ButtonStyle } from "discord.js"
import { Button } from "../components/Button"

/**
 *  Here is an example of usage to create a button.
 *  If you want to check what does this return to the discord API use :
 *  @package "npx ts-node src/templates/Button.template.ts"
 **/

const normalButton = Button({
  customId: "this_is_custom_id",
  label: "Test Button",
  emoji: { name: "🎲" },
  disabled: true,
  style: ButtonStyle.Primary,
})

const linkButton = Button({
  label: "Test Link Button",
  emoji: { name: "🔗" },
  style: ButtonStyle.Link,
  link: "https://example.com",
})

console.info("Normal Button:")
console.log(normalButton.toJSON())
console.info("Link Button:")
console.log(linkButton.toJSON())
