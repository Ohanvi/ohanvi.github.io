---
title: Edit a WhatsApp number
description: Open a number's details, change its label, badge, IDs, token and API version, set calling, and make a number the default or disconnect it.
---

# Edit a WhatsApp number

Open a connected number and change its name, badge, IDs and access token. At the end, your changes are saved and the number is set up the way you want. To run more than one number, see [Run several WhatsApp numbers](run-multiple-whatsapp-numbers.md).

## Before you start

- Your WhatsApp number is connected to Ohanvi. See [Connect your WhatsApp number](connect-whatsapp-number.md).
- You can open **Settings** → **WhatsApp** → **Configuration**. If not, ask your admin for WhatsApp access.
- You have your Meta details at hand if you want to change them: the **Phone Number ID**, **WABA ID**, **Business ID** and a permanent access token. Find them in Meta Business Settings.

## What moved out of this screen

These settings used to sit in the configuration form. They now live in their own places.

| Setting | Where it is now |
| --- | --- |
| AI reply agent and auto-reply | Managed in the AI Assistant hub. See [Set up the WhatsApp AI agent](set-up-ai-agent.md). |
| Opt-out words | **WhatsApp** → **Manage** → **Opt-in Management**. See [Manage opt-in and opt-out words](manage-opt-in-and-opt-out-words.md). |
| Welcome message | **WhatsApp** → **Manage** → **Live Chat Settings**. See [Set up live chat settings](set-up-live-chat-settings.md). |

## Steps

### Open a number

1. Click your initials in the bottom-left corner, then click **Settings**.
2. Select **WhatsApp**, then **Configuration**. The page title reads **WhatsApp numbers**.

    <!-- SCREENSHOT TODO: add the image, then restore this line: ![WhatsApp numbers with the list of numbers on the left and the detail pane on the right](../assets/screenshots/whatsapp-numbers-1-list.png) -->

3. Click the number in the list. Its details open on the right, with **Make default**, **Edit** and **Disconnect** at the top.

To add another number instead, click **Add number**. See [Connect your WhatsApp number](connect-whatsapp-number.md).

### Change the label and badge

1. Click **Edit**. The window for that number opens.
2. In **Label**, type a name only your team sees, for example `Sales`. The first letter is the badge shown on every message in the inbox. It holds up to 30 characters.
3. Under **Badge colour**, pick **blue**, **purple**, **teal**, **orange** or **gold**.

    <!-- SCREENSHOT TODO: add the image, then restore this line: ![Edit window with the label, the badge preview, the badge colour choices and the number's IDs](../assets/screenshots/whatsapp-numbers-6-edit.png) -->

Each number in your business needs its own label.

### Check the number details

In the same window, check the details of this number.

1. In **Business name**, type the business name.
2. In **Display phone number**, type the number with the country code.
3. In **Phone Number ID**, paste the ID from Meta.
4. In **WABA ID**, paste your WhatsApp Business Account ID.
5. In **Business Manager ID**, paste your Meta Business Manager ID.
6. In **Graph API version**, pick the version.
7. In **Access token**, paste a permanent token from Meta. The field hides what you type. A saved token stays hidden. Paste a new one only to replace it.
8. In **Webhook verify token**, keep the token you pasted in Meta's webhook settings.
9. Click **Save**.

Your changes apply to this number only.

!!! warning "Use a permanent token"
    A temporary token expires in 24 hours and messaging stops. If a number shows **Access token expired or revoked**, click **Fix now** and paste a new permanent token.

### Set working hours

1. Click the number in the list.
2. Scroll to **Working hours**.
3. Turn each day on or off, and set the opening and closing times.

These hours apply to chats on this number only. See [Run several WhatsApp numbers](run-multiple-whatsapp-numbers.md).

### Turn on Voice Calling

1. Click the number in the list.
2. Scroll to **Call settings** and turn on **WhatsApp voice calling**.
3. Complete Meta's side of calling first. See [Use WhatsApp Calling](whatsapp-calling.md).

Calling needs Meta Calling API access for this number. The switch alone does not give it. The call schedule and the team members who ring apply to all your numbers.

### Make a number the default

1. Click the number in the list.
2. Click **Make default**, then confirm.

The default number sends campaigns, broadcasts and first messages to new contacts. Replies always leave from the number the customer wrote to. To use a different number for a single campaign, pick it under **Send from**. See [Send a WhatsApp broadcast campaign](send-broadcast-campaign.md).

### Disconnect a number

1. Click the number in the list.
2. Click **Disconnect**, then confirm.

Its chats stay in the inbox. The Default number cannot be disconnected while you have other numbers. Make another number the default first.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| Saving a label is refused. | Another number in your business has the same label. | Type a different label. |
| **Unable to save configuration.** | The save did not reach Ohanvi. | Check your connection and click **Save** again. |
| **Access token expired or revoked** | The token was temporary or was removed in Meta. | Click **Fix now** and paste a new permanent token. |
| **Make another number the default first, then disconnect this one.** | You tried to disconnect the Default number. | Make another number the default, then disconnect this one. |
| You cannot find the AI reply or auto-reply settings. | They are no longer on this screen. | See [What moved out of this screen](#what-moved-out-of-this-screen). |

## Related

- [Run several WhatsApp numbers](run-multiple-whatsapp-numbers.md)
- [Connect your WhatsApp number](connect-whatsapp-number.md)
- [Use WhatsApp Calling](whatsapp-calling.md)
- [Set up the WhatsApp AI agent](set-up-ai-agent.md)
- [Set up WhatsApp webhooks and integrations](whatsapp-webhooks-and-integrations.md)
- [Set up your WhatsApp business profile](whatsapp-business-profile.md)
