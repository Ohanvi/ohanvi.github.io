---
title: Send text and list messages in a chatbot
description: Add Text and List / Buttons blocks to a chatbot flow: write the message, add reply buttons or list rows, and wire each choice.
---

# Send text and list messages in a chatbot

**Text** and **List / Buttons** are the two blocks you use most. **Text** sends a plain message, with up to 3 reply buttons. **List / Buttons** sends a message with a menu of up to 10 choices. Follow this page to write each message, add the choices, and wire them to the next steps.

## Before you start

- You opened a flow in the builder. See [Understand the flow builder](understand-the-flow-builder.md).
- You know where the flow starts. See [Choose how a flow starts](chatbot-flow-start-and-triggers.md).

## Which block to use

| Block | What the customer sees | Choices | Use it for |
| --- | --- | --- | --- |
| **Text** | A plain message. Optional buttons under it. | Up to 3 reply buttons. | Greetings, answers, short menus. |
| **List / Buttons** | A message with a button that opens a menu. | Up to 10 list rows. | Long menus, such as departments or products. |

Both blocks sit in the **Message types** group of the **Step** panel.

## Steps

### Send a text message

1. Click the **+** after the step where the message should go. The **Add a step after** menu opens.
2. Click **All steps**.
3. Under **Message types**, click **Text**. A card with a **Message** block appears.
4. Click the block. Its settings open in the **Step** panel.
5. Click the box that reads **Type message...** and type the message, for example `Hi! How can I help you today?`. It can hold up to 1,024 characters.
6. To show a saved answer, click a chip under the box, for example **{Name}**. It inserts `{{name}}`.

!!! tip "Use double curly braces in small letters"
    If you type a variable yourself, write `{{name}}`. A capital letter, such as `{{Name}}`, is sent to the customer as plain text.

### Add reply buttons to a text message

1. Click **+ Add Button** at the bottom of the message block. A button named **New button** appears.
2. Click the button and type its label, for example `Fees`.
3. Repeat for each button. A text message can hold up to 3 buttons.
4. To send a different reply for a button, click the **+** at the right end of that button and pick the next step.

Button limits:

- Up to 3 buttons on one message.
- A button label can hold up to 20 characters. Longer labels are cut.
- A button you do not wire continues to the next block of the same card.

### Set a delay or a timeout on a text message

1. Find the grey timing area under the block.
2. Switch on **Set Delay** and type the seconds in **Type delay in seconds...**, for example `3`. The message waits that long before it goes out.
3. Switch on **Set Timeout** and type **Timeout after (minutes)**, for example `30`. A **Timed out** exit appears on the card.
4. Wire **Timed out** to a follow-up step, for example a reminder.

### Send a list message

1. Click the **+** after the step where the menu should go, then click **All steps**.
2. Under **Message types**, click **List / Buttons**. A **List** block appears.
3. In **Header**, type a short title, for example `Our services`. It can hold up to 20 characters. This box is optional.
4. In **Body**, type the message, for example `Choose a service`. It can hold up to 4,096 characters.
5. In **Footer**, type a small line, for example `Reply any time`. It can hold up to 60 characters. This box is optional.
6. In **Button label**, type the words on the button that opens the menu, for example `View services`. It can hold up to 20 characters.

### Add the list rows

1. In the first row, replace **Item one** with the choice name, for example `Haircut`. It can hold up to 24 characters.
2. In **Describe it**, type a line under the name, for example `30 minutes`. It can hold up to 72 characters.
3. Click **+ Add Section** to add another row. [VERIFY: the button reads Add Section but adds a row]
4. Repeat for each choice. A list can hold up to 10 rows.
5. To remove a row, click the small **x** beside its name.
6. A new row starts with the name **New item** and the line **Describe it**. In a **Multi product** block the first row is **Section one**, and a new one is **New section**. In a **Buttons** block a new choice is **New button**. Replace each default name.

### Wire each choice

1. Click the **+** at the right end of a row or a button.
2. Pick the step that runs when the customer taps that choice, for example **Text** with the price list.
3. Repeat for every choice.

To act on an answer later, use a **Condition** block. See [Ask for name, phone, email and address](chatbot-ask-details-blocks.md).

### Set a timeout on a list

1. Switch on **Set Timeout** in the timing area under the list.
2. Type **Timeout after (minutes)**.
3. Wire the **Timed out** exit to a reminder step.

A list has no **Set Delay**. A question is not delayed.

### Check the message

1. Click **Save**.
2. Click **Test**. Read the message and tap each choice. See [Test a chatbot flow with the chat simulator](test-a-flow-with-the-chat-simulator.md).

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| The **+ Add Button** is missing | The block already has 3 buttons, or it is a list. | Remove a button, or use a **List / Buttons** block. |
| The **Body** will not take more text | You reached 1,024 characters on **Text**, or 4,096 on a list. | Shorten the message. |
| A row will not take more text | A row name holds 24 characters and a description holds 72. | Shorten the text. |
| The customer sees `{{Name}}` | The variable has a capital letter. | Write `{{name}}`, or use the chip under the box. |
| A tapped choice does nothing | The choice has no wire. | Click the **+** at the choice and add a step. |

## Related

- [Understand the flow builder](understand-the-flow-builder.md)
- [Media, product and form blocks](chatbot-message-blocks.md)
- [Ask and wait blocks](chatbot-ask-and-wait-blocks.md)
- [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md)
