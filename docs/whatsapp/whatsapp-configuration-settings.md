---
title: Edit a WhatsApp configuration
description: Open a number's configuration, check its IDs, token and API version, set up AI smart replies and Voice Calling, and switch the number on or off.
---

# Edit a WhatsApp configuration

Open the configuration of a connected number and change its details, smart replies and calling. At the end, your changes are saved, the number is switched on or off as you chose, and smart replies and calls work the way you set them.

## Before you start

- Your WhatsApp number is connected to Ohanvi. See [Connect your WhatsApp number](connect-whatsapp-number.md).
- You can open **Settings** → **WhatsApp** → **Configuration**. If not, ask your admin for WhatsApp access.
- You have your Meta details at hand: the **Phone Number ID**, **WABA ID**, **Business ID** and a permanent access token. Find them in Meta Business Settings.
- For smart replies with **Your own key**, you have an API key from your AI provider.

## What the form holds

**Edit Configuration** is one form. From top to bottom it has:

| Part | What it does |
| --- | --- |
| Number details | Name, IDs, access token, **API Version** and **Webhook Verify Token**. |
| Smart replies | The AI that answers greetings and simple messages. |
| **Voice Calling** | Lets customers call your number. See [Use WhatsApp Calling](whatsapp-calling.md). |
| **Active** | Switches this configuration on or off. |

## Steps

### Open the configuration

1. Click your initials in the bottom-left corner, then click **Settings**.
2. Select **WhatsApp**, then **Configuration**.
3. Find your number's card. It shows **Phone ID**, **WABA** and **Connected** or **Incomplete**.
4. Click **Edit**. **Edit Configuration** opens.

To add another number instead, click **Add Configuration**. See [Connect your WhatsApp number](connect-whatsapp-number.md).

### Check the number details

1. In **Configuration Name**, type a name only your team sees, for example `Sales Number` or `Support WABA`. It is required.
2. In **Business Name**, type the business name. It is required.
3. In **Display Phone Number**, type the number with the country code and no spaces, for example `919899920019`.
4. In **Access Token**, paste a permanent token from Meta. The field hides what you type. It is required when you add a configuration.
5. In **Phone Number ID**, paste the ID from Meta. It is required.
6. In **WABA ID**, paste your WhatsApp Business Account ID.
7. In **Business ID**, paste your Meta Business Manager ID.
8. In **API Version**, pick `v24.0`, `v23.0` or `v22.0`. The default is `v24.0`.
9. In **Webhook Verify Token**, keep the token you pasted in Meta's webhook settings.

A field that is empty and required shows its name followed by **is required**.

!!! warning "Use a permanent token"
    A temporary token expires in 24 hours and messaging stops. If a card shows **Access token expired or revoked**, click **Fix now** and paste a new permanent token.

### Choose who runs the smart replies

The banner at the top of this part names the AI in use. It reads **Live now — smart replies are answered by …**, or **Not answering yet — add your API key below to switch smart replies on.**

1. Under **Service**, choose **Ohanvi AI** or **Your own key**.
2. For **Ohanvi AI**, stop here. The card **Managed by Ohanvi** shows **No API key needed.** The usage shows on your invoice.
3. For **Your own key**, the **Your provider** card opens. In **Provider**, pick **Gemini**, **Claude**, **Opus**, **Sarvam** or **ChatGPT (OpenAI)**.
4. In **Model**, pick a model from the list. Or pick **Custom model…** and type the exact name in **Custom model id**.
5. In the API key box, paste your key. The label shows your provider's name, for example **Gemini API key**.
6. To keep a saved key, leave the box empty. It shows **Saved · leave blank to keep the current key**.

Your provider bills you for a key you bring. **Ohanvi AI** is billed with your invoice.

### Tell the AI about your business

1. Under **Business context**, type what the AI should know before it answers. For example: `We sell handmade jewellery, ship in 3–5 days, no COD, based in Jaipur.`
2. Add your tone, delivery promise, support style and policies. More detail gives more accurate replies.

### Turn on auto-reply

1. Under **Auto-reply**, turn on the switch.
2. Read the line beside it. The bot answers greetings, thanks and stop requests at once.
3. Know that the bot stays silent while an agent is on the chat.

For a fuller AI that knows your products and hands over to people, see [Set up the WhatsApp AI agent](set-up-ai-agent.md).

### Turn on Voice Calling

1. Under **Voice Calling**, turn on the switch.
2. Read the card **Before this works: Meta setup checklist** that opens below it.
3. Set **Call Availability** and click **Save calling settings**. See [Use WhatsApp Calling](whatsapp-calling.md).

Calling needs Meta Calling API access for this number. The switch alone does not give it.

### Switch the number on or off

1. Find **Active** at the bottom of the form.
2. Tick the box to keep the configuration on.
3. Clear the box to switch it off.

### Save your changes

1. Click **Save Configuration**. The message **Configuration saved successfully.** appears.
2. To close the form without saving, click **Cancel**.

To use a different number for sending, go back to **Configuration** and click **Switch to this** on its card.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Configuration Name is required** | The field is empty. | Type a name. The same rule applies to **Business Name** and **Phone Number ID**. |
| **Access Token is required** | You are adding a configuration without a token. | Paste a permanent token from Meta. |
| **Unable to save configuration.** | The save did not reach Ohanvi. | Check your connection and click **Save Configuration** again. |
| **Access token expired or revoked** | The token was temporary or was removed in Meta. | Click **Fix now** and paste a new permanent token. |
| **Not answering yet — add your API key below to switch smart replies on.** | **Your own key** is chosen and no key is saved. | Paste your API key, or choose **Ohanvi AI**. |
| **Call Availability** does not show. | **Voice Calling** is off. | Turn on **Voice Calling**. |

## Related

- [Connect your WhatsApp number](connect-whatsapp-number.md)
- [Use WhatsApp Calling](whatsapp-calling.md)
- [Set up the WhatsApp AI agent](set-up-ai-agent.md)
- [Set up WhatsApp webhooks and integrations](whatsapp-webhooks-and-integrations.md)
- [Set up your WhatsApp business profile](whatsapp-business-profile.md)
