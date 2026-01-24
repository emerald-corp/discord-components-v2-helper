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
    if (input.component instanceof TextInputBuilder) {
      label.setTextInputComponent(input.component)
    } else if (input.component instanceof StringSelectMenuBuilder) {
      label.setStringSelectMenuComponent(input.component)
    } else if (input.component instanceof FileUploadBuilder) {
      label.setFileUploadComponent(input.component)
    }

    return label
  })

  modal.addLabelComponents(...labels)

  if (props.description) {
    const textDisplays = props.description.map((desc) =>
      new TextDisplayBuilder().setContent(desc),
    )
    modal.addTextDisplayComponents(...textDisplays)
  }

  return modal
}
