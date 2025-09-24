import { ButtonBuilder, SectionBuilder, ThumbnailBuilder } from "discord.js"
import { SectionProps } from "../types"

export function Section(props: SectionProps): SectionBuilder {
  const section = new SectionBuilder()

  if (props.textComponents && Array.isArray(props.textComponents)) {
    props.textComponents.forEach((component) => {
      section.addTextDisplayComponents(component)
    })
  }

  if (props.buttonAccessory instanceof ButtonBuilder) {
    section.setButtonAccessory(props.buttonAccessory)
  }

  if (props.thumbnailAccessory instanceof ThumbnailBuilder) {
    section.setThumbnailAccessory(props.thumbnailAccessory)
  }

  return section
}
