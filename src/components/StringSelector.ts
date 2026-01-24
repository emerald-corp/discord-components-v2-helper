import { StringSelectMenuBuilder } from "discord.js"
import { StringSelectorProps } from "../types"

export function StringSelector(
  props: StringSelectorProps,
): StringSelectMenuBuilder {
  const select = new StringSelectMenuBuilder()
    .setCustomId(props.customId)
    .addOptions(props.options)

  if (props.placeholder) select.setPlaceholder(props.placeholder)
  if (props.minValues !== undefined) select.setMinValues(props.minValues)
  if (props.maxValues !== undefined) select.setMaxValues(props.maxValues)
  if (props.disabled !== undefined) select.setDisabled(props.disabled)

  if (props.required === false && props.minValues === undefined) {
    select.setMinValues(0)
  }

  return select
}
