import { ButtonBuilder, ButtonStyle } from "discord.js"
import { ButtonProps } from "../types"

type ButtonHandler = (builder: ButtonBuilder, props: ButtonProps) => void

const buttonStyleMap: [ButtonStyle, ButtonHandler][] = [
  [ButtonStyle.Primary, (builder) => builder.setStyle(ButtonStyle.Primary)],
  [ButtonStyle.Secondary, (builder) => builder.setStyle(ButtonStyle.Secondary)],
  [ButtonStyle.Success, (builder) => builder.setStyle(ButtonStyle.Success)],
  [ButtonStyle.Danger, (builder) => builder.setStyle(ButtonStyle.Danger)],
  [ButtonStyle.Link, (builder) => builder.setStyle(ButtonStyle.Link)],
]

export function Button(props: ButtonProps): ButtonBuilder {
  const button = new ButtonBuilder()

  if (props.customId) button.setCustomId(props.customId)
  if (props.label) button.setLabel(props.label)
  if (props.emoji) button.setEmoji(props.emoji)
  if (typeof props.disabled === "boolean")
    button.setDisabled(props.disabled || false)

  let handled = false
  for (const [style, handler] of buttonStyleMap) {
    if (props.style === style) {
      handler(button, props)
      handled = true
      break
    }
  }

  if (!handled && props.style) {
    button.setStyle(props.style)
  }

  return button
}
