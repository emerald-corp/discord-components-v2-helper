import { SeparatorSpacingSize } from "discord.js"
import { Separator } from "../components/Separator"

/**
 *  Here is an example of usage to create a separator.
 *  If you want to check what does this return to the discord API use :
 *  @package "npx ts-node src/templates/Separator.template.ts"
 **/

const separator = Separator(SeparatorSpacingSize.Large)

console.log(separator.toJSON())
