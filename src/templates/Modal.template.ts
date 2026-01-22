import { TextInputStyle, FileUploadBuilder } from "discord.js"
import { Modal } from "../components/Modal"
import { TextInput } from "../components/TextInput"
import { StringSelector } from "../components/StringSelector"

/**
 *  Here is an example of usage to create a modal.
 *  If you want to check what does this return to the discord API use :
 *  @package "npx ts-node src/templates/Modal.template.ts"
 **/

// Simple feedback modal with category selector
const feedbackModal = Modal({
  customId: "feedback_modal",
  title: "Feedback Form",
  description: ["We value your feedback! Please share your thoughts with us."],
  components: [
    {
      component: StringSelector({
        customId: "feedback_category",
        placeholder: "Select a category",
        options: [
          { label: "Bug Report", value: "bug", emoji: { name: "🐛" } },
          { label: "Feature Request", value: "feature", emoji: { name: "✨" } },
          {
            label: "General Feedback",
            value: "general",
            emoji: { name: "💬" },
          },
          { label: "Other", value: "other", emoji: { name: "📝" } },
        ],
        required: true,
      }),
      label: "Category",
      description: "What type of feedback is this?",
    },
    {
      component: TextInput({
        customId: "feedback_message",
        label: "Message",
        style: TextInputStyle.Paragraph,
        placeholder: "Share your feedback...",
        minLength: 10,
        maxLength: 1000,
        required: true,
      }),
      label: "Message",
      description: "Detailed feedback",
    },
  ],
})

// User registration modal with role selector
const registrationModal = Modal({
  customId: "registration_modal",
  title: "User Registration",
  components: [
    {
      component: TextInput({
        customId: "reg_username",
        label: "Username",
        style: TextInputStyle.Short,
        placeholder: "Choose a username",
        minLength: 3,
        maxLength: 20,
        required: true,
      }),
      label: "Username",
      description: "Your unique username (3-20 characters)",
    },
    {
      component: StringSelector({
        customId: "reg_role",
        placeholder: "Select your role",
        options: [
          { label: "Developer", value: "developer", emoji: { name: "💻" } },
          { label: "Designer", value: "designer", emoji: { name: "🎨" } },
          { label: "Manager", value: "manager", emoji: { name: "📊" } },
          { label: "Other", value: "other", emoji: { name: "👤" } },
        ],
        required: true,
      }),
      label: "Role",
      description: "What best describes you?",
    },
  ],
})

// Bug report modal with severity and priority selectors
const bugReportModal = Modal({
  customId: "bug_report_modal",
  title: "Report a Bug",
  description: [
    "Help us fix the issue by providing detailed information.",
    "The more details you provide, the faster we can resolve it!",
  ],
  components: [
    {
      component: TextInput({
        customId: "bug_title",
        label: "Bug Title",
        style: TextInputStyle.Short,
        placeholder: "Brief description of the bug",
        maxLength: 100,
        required: true,
      }),
      label: "Bug Title",
    },
    {
      component: StringSelector({
        customId: "bug_severity",
        placeholder: "Select severity",
        options: [
          {
            label: "Critical - App is unusable",
            value: "critical",
            emoji: { name: "🔴" },
          },
          {
            label: "High - Major functionality broken",
            value: "high",
            emoji: { name: "🟠" },
          },
          {
            label: "Medium - Feature doesn't work",
            value: "medium",
            emoji: { name: "🟡" },
          },
          { label: "Low - Minor issue", value: "low", emoji: { name: "🟢" } },
        ],
        required: true,
      }),
      label: "Severity",
      description: "How severe is this bug?",
    },
    {
      component: TextInput({
        customId: "bug_steps",
        label: "Steps to Reproduce",
        style: TextInputStyle.Paragraph,
        placeholder: "1. Go to...\n2. Click on...\n3. See error",
        minLength: 20,
        required: true,
      }),
      label: "Steps to Reproduce",
      description: "How can we recreate this bug?",
    },
  ],
})

// Document upload modal with file upload component
const documentUploadModal = Modal({
  customId: "document_upload_modal",
  title: "Upload Documents",
  description: ["Please provide details and upload your document."],
  components: [
    {
      component: TextInput({
        customId: "doc_title",
        label: "Document Title",
        style: TextInputStyle.Short,
        placeholder: "Enter document name",
        required: true,
      }),
      label: "Title",
      description: "Name of the document",
    },
    {
      component: new FileUploadBuilder()
        .setCustomId("doc_file")
        .setRequired(true),
      label: "Document File",
      description: "Upload your document (PDF, DOC, etc.)",
    },
    {
      component: StringSelector({
        customId: "doc_category",
        placeholder: "Select document type",
        options: [
          { label: "Contract", value: "contract", emoji: { name: "📄" } },
          { label: "Invoice", value: "invoice", emoji: { name: "🧾" } },
          { label: "Report", value: "report", emoji: { name: "📊" } },
          { label: "Other", value: "other", emoji: { name: "📁" } },
        ],
        required: true,
      }),
      label: "Document Type",
      description: "Categorize your document",
    },
  ],
})

console.info("Feedback Modal:")
console.log(JSON.stringify(feedbackModal.toJSON(), null, 2))
console.info("\n\nRegistration Modal:")
console.log(JSON.stringify(registrationModal.toJSON(), null, 2))
console.info("\n\nBug Report Modal:")
console.log(JSON.stringify(bugReportModal.toJSON(), null, 2))
console.info("\n\nDocument Upload Modal:")
console.log(JSON.stringify(documentUploadModal.toJSON(), null, 2))
