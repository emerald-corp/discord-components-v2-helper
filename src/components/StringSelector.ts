import { StringSelectMenuBuilder } from "discord.js"
import { StringSelectorProps } from "../types"

export function StringSelector(
  props: StringSelectorProps
): StringSelectMenuBuilder {
  const select = new StringSelectMenuBuilder()
    .setCustomId(props.customId)
    .addOptions(props.options)

  if (props.placeholder) select.setPlaceholder(props.placeholder)
  if (props.minValues) select.setMinValues(props.minValues)
  if (props.maxValues) select.setMaxValues(props.maxValues)
  if (props.disabled) select.setDisabled(props.disabled)
  if (props.required) select.setRequired(props.required)

  return select
}
