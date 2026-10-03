---
title: Ask for name, phone, email and address, then wait or branch
description: Use the ready-made Ask name, Ask phone, Ask email and Ask address blocks, pause with Delay, and split the chat with Condition.
---

# Ask for name, phone, email and address, then wait or branch

Four blocks are ready-made questions: **Ask name**, **Ask phone**, **Ask email** and **Ask address**. Each one asks, checks the answer, and saves it on the contact. Two more blocks control the chat: **Delay** pauses the bot, and **Condition** sends the chat one way or another. This page shows how to fill each one.

## Before you start

- You opened a flow in the builder. See [Understand the flow builder](understand-the-flow-builder.md).
- For a free-text question, use **Ask Question**. See [Ask and wait blocks](chatbot-ask-and-wait-blocks.md).

## What each block does

| Block | Group | What it does |
| --- | --- | --- |
| **Ask name** | **Ask the customer** | Asks for the customer's name. Saves it as `name`. |
| **Ask phone** | **Ask the customer** | Asks for a phone number. Saves it as `contact_number`. |
| **Ask email** | **Ask the customer** | Asks for an email address. Saves it as `email`. |
| **Ask address** | **Ask the customer** | Asks for a delivery address. Saves it as `address`. |
| **Delay** | **Ask the customer** | Pauses the flow before the next message. |
| **Condition** | **Actions** | Sends the chat to a **True** exit or a **False** exit. |

## Steps

### Add a ready-made question

1. Click the **+** after the step where the question should go.
2. Click **All steps**.
3. Under **Ask the customer**, click **Ask name**, **Ask phone**, **Ask email** or **Ask address**.
4. Click the new block. Its settings open in the **Step** panel.

The block arrives filled in. You can change any part of it.

### Ask for the name

1. Add an **Ask name** block.
2. Check the **Question**. It reads `Hi! What's your name?` Change it if you like, for example `Hello! May I know your name?`
3. Check **Save the answer as**. It reads **Name**. The answer is saved as the variable `name`.
4. Check **The answer should be**. It reads **Short text**.
5. In a later message, type `{{name}}` to use the answer, for example `Thanks {{name}}!`

### Ask for the phone number

1. Add an **Ask phone** block.
2. Check the **Question**. It reads `What is your phone number?`
3. Check **Save the answer as**. It reads **Phone**. The answer is saved as `contact_number`.
4. Check **The answer should be**. It reads **Phone number**. [VERIFY: how the bot reacts to an answer that is not a phone number]

### Ask for the email address

1. Add an **Ask email** block.
2. Check the **Question**. It reads `What is your email address?`
3. Check **Save the answer as**. It reads **Email**. The answer is saved as `email`.
4. Check **The answer should be**. It reads **Email**. [VERIFY: how the bot reacts to an answer that is not an email]

### Ask for the address

1. Add an **Ask address** block.
2. Check the **Question**. It reads `Please share your address.`
3. Check **Save the answer as**. It reads **Address**. The answer is saved as `address`.
4. Check **The answer should be**. It reads **Long text**, so the customer can type several lines.

### Save an answer under your own name

1. Open any ask block.
2. Click **Save the answer as**. A list opens with **Name**, **Phone**, **Email**, **Address**, **City**, `interests` and `goal`, plus names your flow already uses.
3. To use a new name, choose **Custom…**. It reads **Your own name, e.g. company_name**.
4. In the box, type a name, for example `company name`. The helper reads **Use it in a message as {{company_name}}**.
5. Click **Use**. The name is saved in small letters with underscores.

When you pick **Name**, **Phone**, **Email**, **Address** or **City**, the builder also links the answer to the matching CRM field. A later **CRM** step puts it in the right place.

### Wait for a time

**Delay** pauses the flow before the next message.

1. Click the **+** after the step, then click **All steps**.
2. Under **Ask the customer**, click **Delay**.
3. In **Wait for · wait_minutes**, type the minutes, for example `60`.
4. Read the line under the box. It shows the time in hours or days, for example `1 hours`. It says the contact leaves the queue and comes back when it is due.
5. Click the **+** at the end of the block and add the step that runs after the wait.

!!! note "Use Set Delay for a short pause"
    For a few seconds before one message, use **Set Delay** on the **Text** block. See [Text and list blocks](chatbot-text-and-list-blocks.md). [VERIFY: how the Delay block behaves in a live chat flow]

### Split the chat with a condition

**Condition** reads one saved answer and chooses an exit.

1. Click the **+** after the step, then click **All steps**.
2. Under **Actions**, click **Condition**.
3. Under **If the answer saved as**, click **Choose…** and pick the answer to test, for example **Email**.
4. Click the comparison, which reads **is** at first. A list titled **How to compare** opens. Choose one:
    - **is**
    - **is not**
    - **contains**
    - **does not contain**
    - **is more than**
    - **is less than**
    - **is set**
    - **is empty**
5. For every choice except **is set** and **is empty**, type a **Value**, for example `Delhi`.
6. Read the note **Yes and No are the ports on the right.** The exits are labelled **True** and **False** on the card.
7. Click the **+** at **True** and add the step for the match, for example a message with the Delhi store address.
8. Click the **+** at **False** and add the step for no match.

Example: set **If the answer saved as** to **City**, choose **is**, and type **Delhi** as the **Value**. Delhi customers follow **True**. Everyone else follows **False**.

!!! tip "Test both exits"
    Run **Test** twice, once with an answer that matches and once without. See [Test a chatbot flow with the chat simulator](test-a-flow-with-the-chat-simulator.md).

### Handle no reply

1. Open an ask block.
2. Switch on **Set Timeout**.
3. Type **Timeout after (minutes)**.
4. Wire the **Timed out** exit to a reminder.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| The bot asks again | The answer did not fit **The answer should be**, for example text in a phone question. | Check the type in **The answer should be**, or choose **Short text**. |
| `{{name}}` shows as plain text | The variable has a capital letter, or the saved name differs. | Write `{{name}}` in small letters, or use the chip under the message box. |
| A **Condition** always goes to **False** | The saved answer is empty, or the **Value** has a different spelling. | Check the name in **If the answer saved as**, and match the spelling. |
| A **Condition** has no **Value** box | **is set** and **is empty** test the answer itself. | Choose another comparison if you want to compare to a value. |

## Related

- [Understand the flow builder](understand-the-flow-builder.md)
- [Ask and wait blocks](chatbot-ask-and-wait-blocks.md)
- [Action blocks](chatbot-action-blocks.md)
- [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md)
