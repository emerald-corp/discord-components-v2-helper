import { ButtonStyle, SeparatorSpacingSize } from "discord.js"
import { Container } from "../components/Container"
import { Separator } from "../components/Separator"
import { Text } from "../components/Text"
import { Section } from "../components/Section"
import { Button } from "../components/Button"

/**
 *  Here is an example of usage to create a container.
 *  If you want to check what does this return to the discord API use :
 *  @package "npx ts-node src/templates/Container.template.ts"
 **/

const container = Container({
  components: [
    Text("Hello this is the second example!"),
    Separator(SeparatorSpacingSize.Small),
    Text(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    ),
    Separator(SeparatorSpacingSize.Large),
    Section({
      textComponents: [Text("In the side here is a button.")],
      buttonAccessory: Button({
        customId: "this_is_custom_id",
        label: "Test Button",
        emoji: { name: "🎲" },
        disabled: false,
        style: ButtonStyle.Primary,
      }),
    }),
    Separator(SeparatorSpacingSize.Small),
    Text("-# Enjoy this helper!"),
  ],
  accentColor: [0, 255, 0],
})

console.log(container.toJSON())
