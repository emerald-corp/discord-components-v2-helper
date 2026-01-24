import {
  LabelBuilder,
  ModalBuilder,
  TextInputBuilder,
  StringSelectMenuBuilder,
  TextDisplayBuilder,
  FileUploadBuilder,
} from "discord.js"
import { ModalProps } from "../types"

export function Modal(props: ModalProps): ModalBuilder {
  const modal = new ModalBuilder()
    .setCustomId(props.customId)
    .setTitle(props.title)

  // Wrap each component in a LabelBuilder with appropriate setter
  const labels = props.components.map((input) => {
    const label = new LabelBuilder().setLabel(input.label)

    if (input.description) label.setDescription(input.description)

    // Route to the appropriate setter based on component type
    // We check inputs broadly to support different discord.js instances (dependency resolution issues)
    const isTextInput =
      input.component instanceof TextInputBuilder ||
      input.component.constructor.name === "TextInputBuilder"

    const isStringSelect =
      input.component instanceof StringSelectMenuBuilder ||
      input.component.constructor.name === "StringSelectMenuBuilder"

    const isFileUpload =
      input.component instanceof FileUploadBuilder ||
      input.component.constructor.name === "FileUploadBuilder"

    if (isTextInput) {
      label.setTextInputComponent(input.component as TextInputBuilder)
    } else if (isStringSelect) {
      label.setStringSelectMenuComponent(
        input.component as StringSelectMenuBuilder,
      )
    } else if (isFileUpload) {
      label.setFileUploadComponent(input.component as FileUploadBuilder)
    }

    return label
  })

  modal.addLabelComponents(...labels)

  if (props.description) {
    // If user passes a string, wrap it in array. If array, use as is.
    // This supports both single string prop and multiple paragraphs.
    const descriptions =
      Array.isArray(props.description) ? props.description : [props.description]

    const textDisplays = descriptions.map((desc) =>
      new TextDisplayBuilder().setContent(desc),
    )
    modal.addTextDisplayComponents(...textDisplays)
  }

  return modal
}
