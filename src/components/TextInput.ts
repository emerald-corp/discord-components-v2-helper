import { TextInputBuilder } from "discord.js"
import { TextInputProps } from "../types"

export function TextInput(props: TextInputProps): TextInputBuilder {
  const textInput = new TextInputBuilder()
    .setCustomId(props.customId)
    .setLabel(props.label)
    .setStyle(props.style)

  if (props.placeholder) textInput.setPlaceholder(props.placeholder)
  if (props.value) textInput.setValue(props.value)
  if (props.minLength !== undefined) textInput.setMinLength(props.minLength)
  if (props.maxLength !== undefined) textInput.setMaxLength(props.maxLength)
  if (props.required !== undefined) textInput.setRequired(props.required)

  return textInput
}
