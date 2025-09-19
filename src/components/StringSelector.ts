import { StringSelectMenuBuilder } from "discord.js"
import { StringSelectorProps } from "../types"

export function StringSelector(
  props: StringSelectorProps
): StringSelectMenuBuilder {
  const select = new StringSelectMenuBuilder()
    .setCustomId(props.customId)
    .addOptions(props.options)

  if (props.placeholder) select.setPlaceholder(props.placeholder)

  return select
}
