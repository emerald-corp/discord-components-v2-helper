import { TextInputStyle, FileUploadBuilder } from "discord.js"
import { Modal } from "./Modal"
import { TextInput } from "./TextInput"
import { StringSelector } from "./StringSelector"

describe("Modal component", () => {
  test("should create a basic valid modal", () => {
    const modal = Modal({
      customId: "test-modal",
      title: "Test Modal",
      components: [
        {
          component: TextInput({
            customId: "test-input",
            style: TextInputStyle.Short,
          }),
          label: "Test Label",
        },
      ],
    })

    expect(modal.data.custom_id).toBe("test-modal")
    expect(modal.data.title).toBe("Test Modal")
    expect(modal.components).toHaveLength(1)
    expect(() => modal.toJSON()).not.toThrow()
  })

  test("should create a modal with one text input", () => {
    const textInput = TextInput({
      customId: "username-input",
      style: TextInputStyle.Short,
    })

    const modal = Modal({
      customId: "user-modal",
      title: "User Information",
      components: [
        {
          component: textInput,
          label: "Username",
          description: "Enter your username",
        },
      ],
    })

    expect(modal.data.custom_id).toBe("user-modal")
    expect(modal.data.title).toBe("User Information")
    expect(modal.components).toHaveLength(1)
    // Modal components are now LabelBuilders
    expect(modal.components[0].data.type).toBe(18) // Label type
    expect(() => modal.toJSON()).not.toThrow()
  })

  test("should create a modal with multiple text inputs", () => {
    const nameInput = TextInput({
      customId: "name-input",
      style: TextInputStyle.Short,
    })

    const emailInput = TextInput({
      customId: "email-input",
      style: TextInputStyle.Short,
    })

    const messageInput = TextInput({
      customId: "message-input",
      style: TextInputStyle.Paragraph,
    })

    const modal = Modal({
      customId: "contact-modal",
      title: "Contact Form",
      components: [
        { component: nameInput, label: "Your Name" },
        { component: emailInput, label: "Email Address" },
        { component: messageInput, label: "Your Message" },
      ],
    })

    expect(modal.data.custom_id).toBe("contact-modal")
    expect(modal.data.title).toBe("Contact Form")
    expect(modal.components).toHaveLength(3)

    // Each component should be a LabelBuilder
    modal.components.forEach((component) => {
      expect(component.data.type).toBe(18) // Label type
      expect(() => modal.toJSON()).not.toThrow()
    })
  })

  test("should handle text inputs with various configurations", () => {
    const simpleInput = TextInput({
      customId: "simple",
      style: TextInputStyle.Short,
    })

    const complexInput = TextInput({
      customId: "complex",
      style: TextInputStyle.Paragraph,
      placeholder: "Enter details...",
      minLength: 10,
      maxLength: 500,
      required: true,
    })

    const modal = Modal({
      customId: "mixed-modal",
      title: "Mixed Form",
      components: [
        { component: simpleInput, label: "Simple Field" },
        {
          component: complexInput,
          label: "Complex Field",
          description: "Detailed input field",
        },
      ],
    })

    expect(modal.components).toHaveLength(2)
    // Verify labels are wrapping the inputs
    expect(modal.components[0].data.type).toBe(18)
    expect(modal.components[1].data.type).toBe(18)
    expect(() => modal.toJSON()).not.toThrow()
  })

  test("should create modal with StringSelectMenu component", () => {
    const selector = StringSelector({
      customId: "role-selector",
      placeholder: "Select a role",
      options: [
        { label: "Developer", value: "dev" },
        { label: "Designer", value: "design" },
      ],
      required: true,
    })

    const modal = Modal({
      customId: "role-modal",
      title: "Select Your Role",
      components: [
        {
          component: selector,
          label: "Role",
          description: "Choose your primary role",
        },
      ],
    })

    expect(modal.components).toHaveLength(1)
    expect(modal.components[0].data.type).toBe(18) // Label type
    expect(() => modal.toJSON()).not.toThrow()
  })

  test("should create modal with FileUpload component", () => {
    const fileUpload = new FileUploadBuilder()
      .setCustomId("document-upload")
      .setRequired(true)

    const modal = Modal({
      customId: "upload-modal",
      title: "Upload Document",
      components: [
        {
          component: fileUpload,
          label: "Document",
          description: "Upload your file",
        },
      ],
    })

    expect(modal.components).toHaveLength(1)
    expect(modal.components[0].data.type).toBe(18) // Label type
    expect(() => modal.toJSON()).not.toThrow()
  })

  test("should create modal with mixed component types", () => {
    const textInput = TextInput({
      customId: "title",
      style: TextInputStyle.Short,
    })

    const selector = StringSelector({
      customId: "category",
      placeholder: "Select category",
      options: [{ label: "General", value: "general" }],
    })

    const fileUpload = new FileUploadBuilder().setCustomId("attachment")

    const modal = Modal({
      customId: "mixed-component-modal",
      title: "Mixed Components",
      components: [
        { component: textInput, label: "Title" },
        { component: selector, label: "Category" },
        { component: fileUpload, label: "Attachment" },
      ],
    })

    expect(modal.components).toHaveLength(3)
    modal.components.forEach((component) => {
      expect(component.data.type).toBe(18)
      expect(() => modal.toJSON()).not.toThrow()
    })
  })

  test("should add modal description as TextDisplay components", () => {
    const textInput = TextInput({
      customId: "input",
      style: TextInputStyle.Short,
    })

    const modal = Modal({
      customId: "described-modal",
      title: "Described Modal",
      description: ["First line of description", "Second line of description"],
      components: [{ component: textInput, label: "Field" }],
    })

    expect(modal.components).toHaveLength(3) // 1 label + 2 text displays
    // Text displays should come after the label components
    expect(() => modal.toJSON()).not.toThrow()
    expect(modal.components[1].data.type).toBe(10) // TextDisplay type
    expect(modal.components[2].data.type).toBe(10) // TextDisplay type
  })
})
