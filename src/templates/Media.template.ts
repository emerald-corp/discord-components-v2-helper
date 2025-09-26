import { Media } from "../components/Media"

/**
 *  Here is an example of usage to create a media.
 *  Media is also used for thumbnails and images in embeds for example.
 *  If you want to check what does this return to the discord API use :
 *  @package "npx ts-node src/templates/Media.template.ts"
 **/

const media = Media([
  {
    media: { url: "https://i.imgur.com/AfFp7pu.png" },
    spoiler: false,
  },
  {
    media: { url: "https://i.imgur.com/AfFp7pu.png" },
    spoiler: true,
  },
])

console.log(media.toJSON())
