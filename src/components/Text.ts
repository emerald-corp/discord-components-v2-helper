import { TextDisplayBuilder } from "discord.js"

export function Text(props: string): TextDisplayBuilder {
  return new TextDisplayBuilder().setContent(props)
}
