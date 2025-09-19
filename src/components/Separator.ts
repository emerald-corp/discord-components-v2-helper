import { SeparatorBuilder, SeparatorSpacingSize } from "discord.js"

export function Separator(props: SeparatorSpacingSize): SeparatorBuilder {
  return new SeparatorBuilder().setSpacing(props)
}
