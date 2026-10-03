---
title: Choose how a flow starts
description: Set the Flow Start block of a chatbot: keywords, match type, regex, templates, Meta ads, QR codes, custom events, intents and session settings.
---

# Choose how a flow starts

Every flow begins at **Flow Start**. This block decides which customer message wakes the bot, and how the bot behaves while it runs. Follow this page to set keywords, add other ways to start, and set the timeout and the reply when the bot does not understand.

## Before you start

- You opened a flow in the builder. See [Understand the flow builder](understand-the-flow-builder.md).
- For a template start, you have an approved template. See [Create a WhatsApp message template](create-message-template.md).
- For a Meta ad start, you ran a Click-to-WhatsApp ad. See [Run Click-to-WhatsApp ads](click-to-whatsapp-ads.md).

## How a flow can start

On a blank canvas, the menu **How does this flow start?** lists these choices.

| Start | What happens |
| --- | --- |
| **Start WhatsApp flow** | Someone messages you a keyword. This is the chatbot start. |
| **Form submitted** | A form on your site is filled in. |
| **Run by hand** | You start it yourself, for example with **Run test**. |
| **Email journey** | Someone joins a list or gets a tag. |
| **Google Form response** | Someone answers your Google Form. |
| **New Google contact** | A contact is added in Google Contacts. |
| **Start from a recipe** | A complete ready-made flow opens on the canvas. |

This page covers **Start WhatsApp flow**. For the other starts, see [Build an automation flow](../flows/build-automation-flow.md).

## Steps

### Start a flow with a keyword

1. Open your flow in the builder.
2. On the blank canvas, click **Add first step…**.
3. Choose **Start WhatsApp flow**. The window **Start a WhatsApp flow** opens.
4. In **Keywords**, type the words that wake the bot, for example `hi, menu, order`. Separate them with commas.
5. Open **Match when the message** and choose one:
    - **Has the keyword as a word**: the keyword appears as a whole word in the message. This is the default.
    - **Contains the keyword**: the keyword appears anywhere in the message.
    - **Is exactly the keyword**: the message is only the keyword.
6. In **Test on this number**, type the phone number that **Run test** sends the first message to, for example `+91 98765 43210`.
7. In **Session timeout (minutes)**, type how long the bot waits for a reply, for example `20`. Use 1 minute to 7 days.
8. Click **Start building**. The **Flow Start** card appears and its settings open in the **Step** panel.

!!! warning "A keyword can start only one bot"
    If another bot already uses a word, the window says `"hi" already starts "Welcome bot". Pick another word, or pause that bot.` Change the word or pause the other flow.

### Set the Flow Start block

1. Click the **Flow Start** card. Its settings open in the **Step** panel.
2. Under **Type, press enter to add keyword**, type a word and press **Enter**. Repeat for each keyword.
3. To use a pattern instead, switch on the toggle beside **Enter regex to match substring trigger. Enable toggle for case sensitive regex.**
4. In **Enter Regex**, type the pattern, for example `^(hi|hello)\b`.
5. Under **Add upto 1 template to begin flow**, click **Choose Template** and pick an approved template. The flow also starts when a customer replies to that template.
6. Under **Add upto 20 Meta Ads to begin flow**, click **Choose Facebook Ad** and pick an ad. The flow also starts when a customer messages from that ad.

If the lists are empty, the panel says **No approved templates yet.** or **No Meta ads found. Connect an ad account and run an ad that opens a WhatsApp chat.**

### Set the trigger panel

The trigger panel holds the full set of start options. Click the **Flow trigger** start tile to open it.

1. Under **WhatsApp · what starts it**, check **Keywords** and **Match when the message**.
2. In **Regex (optional)**, type a pattern, for example `^(hi|hello)\b`.
3. Switch on **Case-sensitive regex** if capital letters matter.
4. Switch on **Also start on a first message from a new contact** to greet every new contact, even without a keyword.

### Add more ways to start

1. Click **More ways to start it**. It reads **Templates, Meta ads, QR campaigns, custom events**.
2. Under **Templates that begin it**, click **Choose a template** and pick one.
3. Under **Meta ads that begin it (up to 20)**, add the ads.
4. Under **QR campaign**, click **Choose QR campaign** and pick one.
5. To make a new QR code, click **+ New QR campaign**. In **Message the scan sends**, type the text the customer sends after scanning, for example `Menu please`. Click **Create**.
6. Under **Custom events that begin it**, click **Choose a custom event** and pick one. If none are listed, the panel says **No custom events are defined.** See [Manage tags, user attributes and custom events](tags-attributes-and-events.md).

### Jump to a step by phrase

An intent sends the customer to a step when the message matches a phrase. The bot checks intents before the waiting step sees the reply.

1. Open **Intents (jump by phrase)**. It reads **No intents yet** until you add one.
2. Click **+ Add intent**.
3. In the name box, type a name, for example `Talk to a person`.
4. In **Phrases**, type the words, for example `agent, human, help`.
5. Open **Match when the message** and choose a match type.
6. Open **Jump to** and choose a step, or **Hand off to an agent**.
7. To delete an intent, click **Remove intent**.

### Set how the bot runs

1. Under **Testing**, in **Send test runs to (phone)**, type your own number, for example `+91 98765 43210`. A flow run by hand has no contact, so **Run test** starts the chat with this number.
2. Under **While the bot runs**, set **Session timeout (minutes)**. The chat closes after this much quiet. The default is 20 minutes. You can choose 1 minute to 7 days.
3. In **When the reply is not understood, say**, type the message, for example `Sorry, I didn't get that. Please choose an option.`
4. Open **Then** and choose what happens next:
    - **Ask again**
    - **Hand off to an agent**
    - **Start the flow over**
    - **End the conversation**
    - **Let the AI answer**
5. In **After how many tries**, type a number, for example `3`.

!!! note "Some trigger settings may not be live yet"
    [VERIFY: whether intents, session timeout and the not-understood reply already run in live chats. The builder stores them with the flow.]

### Save and test

1. Click **Save**.
2. Click **Test** and send a keyword. See [Test a chatbot flow with the chat simulator](test-a-flow-with-the-chat-simulator.md).
3. Click **Publish**.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| `"hi" already starts "…"` | Another flow uses the same keyword. | Pick a different word, or pause the other flow. |
| The bot does not answer a keyword | The message does not match the **Match when the message** setting. | Use **Contains the keyword**, or add more keywords. |
| **No approved templates yet.** | No template has the status **Approved**. | Create and submit one. See [Create a WhatsApp message template](create-message-template.md). |
| **No Meta ads found. Connect an ad account…** | No ad account is connected, or no ad opens a WhatsApp chat. | Connect an ad account and run a Click-to-WhatsApp ad. |
| The chat stops after a few minutes | **Session timeout (minutes)** is short. | Raise the number. |

## Related

- [Understand the flow builder](understand-the-flow-builder.md)
- [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md)
- [Text and list blocks](chatbot-text-and-list-blocks.md)
- [Build an automation flow](../flows/build-automation-flow.md)
