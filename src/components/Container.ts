import {
  ActionRowBuilder,
  ButtonBuilder,
  ContainerBuilder,
  MediaGalleryBuilder,
  MessageActionRowComponentBuilder,
  SectionBuilder,
  SeparatorBuilder,
  StringSelectMenuBuilder,
  TextDisplayBuilder,
} from "discord.js"
import { ContainerProps } from "../types"

export function Container(props: ContainerProps): ContainerBuilder {
  const container = new ContainerBuilder()

  const classMethodMap: [any, (c: any) => void][] = [
    [
      SeparatorBuilder,
      (c: SeparatorBuilder) => container.addSeparatorComponents(c),
    ],
    [SectionBuilder, (c: SectionBuilder) => container.addSectionComponents(c)],
    [
      MediaGalleryBuilder,
      (c: MediaGalleryBuilder) => container.addMediaGalleryComponents(c),
    ],
    [
      TextDisplayBuilder,
      (c: TextDisplayBuilder) => container.addTextDisplayComponents(c),
    ],
    [
      StringSelectMenuBuilder,
      (c: any) =>
        container.addActionRowComponents(
          new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(
            c
          )
        ),
    ],
    [
      ButtonBuilder,
      (c: any) =>
        container.addActionRowComponents(
          new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(
            c
          )
        ),
    ],
  ]

  for (const component of props.components) {
    let handled = false
    for (const [Class, handler] of classMethodMap) {
      if (component instanceof Class) {
        handler(component)
        handled = true
        break
      }
    }
    if (!handled) {
      throw new TypeError("Unsupported component passed to Container")
    }
  }

  if (props.accentColor) {
    container.setAccentColor(props.accentColor)
  }

  return container
}
