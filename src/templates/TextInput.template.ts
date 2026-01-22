import { TextInputStyle } from "discord.js"
import { TextInput } from "../components/TextInput"

/**
 *  Here is an example of usage to create a text input.
 *  If you want to check what does this return to the discord API use :
 *  @package "npx ts-node src/templates/TextInput.template.ts"
 **/

const shortTextInput = TextInput({
  customId: "username_input",
  label: "Username",
  style: TextInputStyle.Short,
  placeholder: "Enter your username",
  minLength: 3,
  maxLength: 20,
  required: true,
})

const paragraphTextInput = TextInput({
  customId: "description_input",
  label: "Description",
  style: TextInputStyle.Paragraph,
  placeholder: "Tell us about yourself...",
  minLength: 10,
  maxLength: 1000,
  required: false,
})

const prefilledTextInput = TextInput({
  customId: "email_input",
  label: "Email Address",
  style: TextInputStyle.Short,
  value: "user@example.com",
  required: true,
})

console.info("Short Text Input:")
console.log(shortTextInput.toJSON())
console.info("\nParagraph Text Input:")
console.log(paragraphTextInput.toJSON())
console.info("\nPrefilled Text Input:")
console.log(prefilledTextInput.toJSON())
