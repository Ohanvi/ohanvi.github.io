---
title: Ask for a location, a file or a reply in a chatbot
description: Ask the customer for a question, a shared location or a photo or file, or wait for a tap and branch on it, in a WhatsApp chatbot flow.
---

# Ask for a location, a file or a reply in a chatbot

Collect more than text answers in a chatbot. At the end, your bot can ask a typed question, request a shared location, request a photo or file, or wait for a tap and send each choice down its own path.

## Before you start

- You have a chatbot flow open in the builder. See [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md).
- You know which answers you want to keep. Each answer is saved under a name you choose.

## How ask blocks work

Every ask block sends a message, waits for the customer, and saves the answer under a name. You use that name later as `{{name}}` in a message.

| Block | What the customer does |
| --- | --- |
| **Ask Question** | Types an answer. |
| **Ask Location** | Shares a location from WhatsApp. |
| **Ask Media** | Sends a photo, video, document or audio file. |
| **Wait & Branch** | Taps one choice. Each choice leads to its own path. |

Find all four under **All steps** → **Ask the customer**.

## Steps

### Add an ask block

1. Open your flow in the builder.
2. Click **+** next to a step, or click **+ Add Content** at the bottom of a card.
3. Choose **All steps**.
4. Under **Ask the customer**, choose **Ask Question**, **Ask Location**, **Ask Media** or **Wait & Branch**.
5. Click the block to open its fields in the right panel.

### Ask a question and choose the answer type

The first steps are in [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md). This task adds the answer type.

1. Open an **Ask Question** block.
2. Type the **Question**.
3. Under **Save the answer as**, pick a name. See [Choose where the answer is saved](#choose-where-the-answer-is-saved).
4. Under **The answer should be**, pick a type.

The types are **Short text**, **Long text**, **Number**, **Email**, **Phone number**, **Date**, **Time**, **One choice**, **Several choices**, **Yes or no**, **A file**, **A location**, **A rating** and **An NPS score**.

### Ask for a location

1. Add an **Ask Location** block.
2. Under **Ask for a location**, type the message, for example `Please share your location…`.
3. Under **Save the answer as**, pick a name. See [Choose where the answer is saved](#choose-where-the-answer-is-saved).
4. Optional: switch on **Set Timeout** and type **Timeout after (minutes)**.

### Ask for a photo or file

1. Add an **Ask Media** block.
2. Under **Ask for a file**, type the message, for example `Please send a photo or document…`.
3. Under **Accepts**, click the row to switch between **IMAGE**, **VIDEO**, **DOCUMENT** and **AUDIO**.
4. Under **Save the answer as**, pick a name. See [Choose where the answer is saved](#choose-where-the-answer-is-saved).
5. Optional: switch on **Set Timeout** and type **Timeout after (minutes)**.

### Choose where the answer is saved

1. Click the row under **Save the answer as**. The **Save the answer as** list opens.
2. Pick a ready-made name, or a name this flow already saves.
3. To use your own name, pick **Custom…**. The detail reads **Your own name, e.g. company_name**.
4. Type the name and click **Use**. Ohanvi turns it into lowercase letters and underscores.
5. Use the answer later as `{{company_name}}`.

!!! warning "Use double curly braces in small letters"
    `{{company_name}}` works. `{{Company_Name}}` is sent to the customer as plain text.

### Wait for a tap and branch

**Wait & Branch** sends a message with choices and waits. Each choice has its own exit on the card.

1. Add a **Wait & Branch** block.
2. Optional: type a **Header**. It can hold up to 20 characters.
3. Type a **Body**. It can hold up to 4,096 characters.
4. Optional: type a **Footer**, up to 60 characters.
5. Click **+ Add Section** to add a choice. [VERIFY: the button reads Add Section but adds a list row]
6. In **Item**, type the choice name, up to 24 characters.
7. In **Describe it**, type a short line under the name, up to 72 characters.
8. Repeat steps 5 to 7 for each choice. You can add up to 10.
9. In **Button label**, type the words on the button that opens the choices, up to 20 characters.
10. Click the **+** at the right end of a choice and pick the step that runs for it.

Choices you leave unwired continue to the next block of the card.

### Handle a customer who does not reply

1. Open a block that waits for a reply: **Ask Question**, **Ask Location**, **Ask Media** or **Wait & Branch**.
2. Switch on **Set Timeout**.
3. Type **Timeout after (minutes)**.
4. Wire the new **Timed out** exit to a follow-up step, for example a reminder message.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| The answer shows as `{{Name}}` in the message. | The variable has a capital letter. | Write it in small letters: `{{name}}`. |
| The bot does not use a custom answer name. | The name has spaces or symbols. | Use letters, numbers and underscores only, then click **Use** again. |
| The customer sends the wrong kind of file. | **Accepts** is set to another type. | Change **Accepts** to the type you expect. |
| **+ Add Section** is missing. | The block already holds 10 choices. | Remove a choice, or split the choices over 2 blocks. |
| The conversation stops at a question. | The customer never answered and there is no **Timeout**. | Switch on **Set Timeout** and wire **Timed out** to a next step. |
| A choice does nothing. | Its exit has no wire. | Wire the choice to a step, or leave it to continue to the next block. |

## Related

- [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md)
- [Add media, catalogue, product, template and form blocks](chatbot-message-blocks.md)
- [Set tags, call an API and hand off to an agent](chatbot-action-blocks.md)
- [Test a flow with the chat simulator](test-a-flow-with-the-chat-simulator.md)
