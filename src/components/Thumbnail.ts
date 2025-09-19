import { ThumbnailBuilder } from "discord.js"
import { ThumbnailProps } from "../types"

export function Thumbnail(props: ThumbnailProps): ThumbnailBuilder {
  const thumbnail = new ThumbnailBuilder()

  if (props.media && props.media.url) {
    thumbnail.setURL(props.media.url)
  }

  thumbnail.setSpoiler(props.spoiler || false)

  return thumbnail
}
