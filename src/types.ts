import {
  ButtonBuilder,
  ButtonStyle,
  MediaGalleryBuilder,
  SectionBuilder,
  SeparatorBuilder,
  StringSelectMenuBuilder,
  TextDisplayBuilder,
  ThumbnailBuilder,
} from "discord.js"

type ComponentsContainerProps =
  | SeparatorBuilder
  | SectionBuilder
  | MediaGalleryBuilder
  | TextDisplayBuilder
  | StringSelectMenuBuilder
  | ButtonBuilder

type RGBColor = [number, number, number]

export type ContainerProps = {
  components: ComponentsContainerProps[]
  accentColor?: RGBColor
}

type emojiProps = { id?: string; name: string }

export type ButtonProps =
  | {
      customId?: string
      label: string
      emoji?: emojiProps
      disabled?: boolean
      style: ButtonStyle.Link
      link: string
    }
  | {
      customId: string
      label?: string
      emoji?: emojiProps
      disabled?: boolean
      style: Exclude<ButtonStyle, ButtonStyle.Link>
      link?: never
    }

export type StringSelectorProps = {
  customId: string
  placeholder?: string
  options: {
    label: string
    value: string
    description?: string
    emoji?: emojiProps
    default?: boolean
  }[]
}

export type SectionProps =
  | {
      textComponents: TextDisplayBuilder[]
      buttonAccessory?: ButtonBuilder
      thumbnailAccessory: ThumbnailBuilder
    }
  | {
      textComponents: TextDisplayBuilder[]
      buttonAccessory: ButtonBuilder
      thumbnailAccessory?: ThumbnailBuilder
    }

export type MediaProps = ThumbnailProps[]

export type ThumbnailProps = {
  media: { url: string }
  spoiler?: boolean
}
