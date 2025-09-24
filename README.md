# discord-components-v2-helper

Helpers for [Discord.js](https://discord.js.org/) ComponentsV2 (v14+).  
Easily build Discord message components with a simple, type-safe API.

## Features

- Type-safe helpers for all major Discord ComponentsV2 builders
- Simple, composable functions for building complex UIs
- Written in TypeScript

## Installation

```sh
npm install discord-components-v2-helper
```

> Requires `discord.js@^14.22.1` as a peer dependency.

## Usage

```ts
import {
  Button,
  Container,
  Media,
  Section,
  Separator,
  StringSelector,
  Text,
  Thumbnail,
} from "discord-components-v2-helper"

// Example: Create a button
const myButton = Button({
  customId: "my_button",
  label: "Click me!",
  style: ButtonStyle.Primary,
})

// Example: Create a section with text and a button
const mySection = Section({
  textcomponents: [Text("Hello, world!")],
  buttonAccessory: myButton,
})

// Example: Create a container with components
const myContainer = Container({
  components: [mySection, Separator("medium")],
  accentColor: [0, 255, 0],
})
```

Or even use it like this:

```ts
import {
  Button,
  Container,
  Section,
  Separator,
  Text,
} from "discord-components-v2-helper"
import { SeparatorSpacingSize, ButtonStyle } from "discord.js"

const container = Container({
  [
    Text('Hello this is the second example!'),
    Separator(SeparatorSpacingSize.small),
    Text('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'),
    Separator(SeparatorSpacingSize.large),
    Section({
      textComponents: [Text('In the side here is a button.')],
      buttonAccessory: Button({
        customId: 'this_is_custom_id',
        label: 'Test Button',
        emoji: { name: '🎲' },
        disabled: false,
        style: ButtonStyle.primary
      })
    }),
    Separator(SeparatorSpacingSize.small),
    Text('-# Enjoy this helper!')
  ],
  [0, 255, 0]
})
```

## Components

- [`Button(props)`](src/components/Button.ts): Create a Discord button.
- [`Container(props)`](src/components/Container.ts): Compose multiple components into a container.
- [`Media(props)`](src/components/Media.ts): Add media galleries.
- [`Section(props)`](src/components/Section.ts): Create a section with text, button, and/or thumbnail.
- [`Separator(props)`](src/components/Separator.ts): Add a separator with spacing.
- [`StringSelector(props)`](src/components/StringSelector.ts): Create a string select menu.
- [`Text(props)`](src/components/Text.ts): Create a text display.
- [`Thumbnail(props)`](src/components/Thumbnail.ts): Add a thumbnail.

See [src/types.ts](src/types.ts) for detailed prop types.

## License

This project is licensed under the [MIT License]()
