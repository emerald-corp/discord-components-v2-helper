import { ModalBuilder, LabelBuilder, StringSelectMenuBuilder } from "discord.js"
import { Modal } from "./Modal"
import { StringSelector } from "./StringSelector"

describe("Modal Reproduction", () => {
  test("Compare Manual vs Helper outputs", () => {
    const type = "runner"

    // 1. Manual Implementation (User said this works)
    const manualModal = new ModalBuilder()
      .setCustomId(`ticket/modal/${type}`)
      .setTitle("Formulaire de recrutement")

    const selectMenu = new LabelBuilder()
      .setLabel("Quel poste souhaitez-vous ?")
      .setStringSelectMenuComponent(
        new StringSelectMenuBuilder()
          .setCustomId(`ticket/modal/${type}/position`)
          .setPlaceholder("📌 Sélectionnez le poste auquel vous postulez")
          .addOptions([
            {
              emoji: { name: "🏃‍♂️" },
              label: "Runner",
              description: "Postuler au poste de runner chez PizzaThis...",
              value: "runner",
            },
            {
              emoji: { name: "🍽️" },
              label: "Serveur",
              description: "Postuler au poste de serveur chez PizzaThis...",
              value: "serveur",
            },
          ]),
      )
    // Note: The user's code had `modalRecruitment.addLabelComponents(selectMenu);`
    // assuming manualModal is just a ModalBuilder
    manualModal.addLabelComponents(selectMenu)

    // 2. Helper Implementation (User said this doesn't work)
    const helperModal = Modal({
      customId: `ticket/modal/${type}`,
      title: "Formulaire de recrutement",
      components: [
        {
          component: StringSelector({
            customId: `ticket/modal/${type}/position`,
            placeholder: "📌 Sélectionnez le poste auquel vous postulez",
            options: [
              {
                emoji: { name: "🏃‍♂️" },
                label: "Runner",
                description: "Postuler au poste de runner chez PizzaThis...",
                value: "runner",
              },
              {
                emoji: { name: "🍽️" },
                label: "Serveur",
                description: "Postuler au poste de serveur chez PizzaThis...",
                value: "serveur",
              },
            ],
            // Note: User's example had required: true.
            // The helper 'StringSelector' might set this locally.
            // But let's follow the user's second block exactly.
            required: true,
          }),
          label: "Quel poste souhaitez-vous ?",
        },
      ],
    })

    let manualJSON: any
    try {
      manualJSON = manualModal.toJSON()
      console.log("Manual JSON Success")
    } catch (e) {
      console.error("Manual JSON Failed:", e)
    }

    let helperJSON: any
    try {
      helperJSON = helperModal.toJSON()
      console.log("Helper JSON Success")
    } catch (e: any) {
      console.error("Helper JSON Failed:", e)
      if (e.errors) {
        console.error("Validation Errors:", JSON.stringify(e.errors, null, 2))
      }
    }

    expect(helperJSON).toEqual(manualJSON)
  })
})
