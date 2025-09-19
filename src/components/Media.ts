import { MediaGalleryBuilder } from "discord.js"
import { MediaProps } from "../types"

export function Media(props: MediaProps): MediaGalleryBuilder {
  return new MediaGalleryBuilder().addItems(props)
}
