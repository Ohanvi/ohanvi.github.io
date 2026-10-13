---
title: Reply says the 24-hour window is closed but the chat shows time left
description: Fix the red 24-hour window message on a chat that still shows time left, by connecting the WhatsApp number the customer wrote to.
---

# Reply says the 24-hour window is closed but the chat shows time left

Fix a reply that WhatsApp refuses even though the chat header still shows time left. At the end, the number the customer wrote to is connected and your reply goes out.

## What you see

- The chat header shows time left, for example **23h 46m left**.
- When you send a reply, a red message appears: **This person has not messaged you in the last 24 hours, so WhatsApp only allows an approved template here — a normal message will not go through. Send a template instead.**

## Why it happens

WhatsApp's 24-hour window belongs to the pair: one customer and one of your WhatsApp numbers. The time left in the header counts from the customer's last message. But WhatsApp lets you reply with free text only from the number the customer wrote to.

If your business has two numbers and the customer wrote to the one that is not connected in Ohanvi, a reply cannot leave from it. The window is open for that number, and closed for every other number. That is why the chat looks fresh and the reply is still refused.

Ohanvi now replies from the number the customer last wrote to, and tells you when that number is not connected.

## Before you start

- You can open **Settings** → **WhatsApp** → **Configuration**. If not, ask your admin.
- The number the customer wrote to is in your WhatsApp Business Account on Meta, or you have its details. See [Connect your WhatsApp number](connect-whatsapp-number.md).

## Steps

### Find the number the customer wrote to

1. Open **WhatsApp** in the left rail, then select **Inbox**.
2. Open the chat.
3. Read the chat header. It says which number the customer wrote to.
4. Look at the badge on the customer's messages. A grey `?` badge means that number is not connected. Hover it to read **Not connected in Ohanvi**.
5. Look above the composer. If it reads **This customer wrote to a number that isn't connected**, go to the next task.

If the composer reads **Replying from** and a connected number, that number is connected. Go to [Other causes](#other-causes).

### Connect the number

1. Click **Connect** in the message above the composer. **Configuration** opens.
2. Under **In your WhatsApp account, not connected**, find the number and click **Connect**. **Name this number** opens.
3. In **Label**, type a name, for example `Support`.
4. Pick a **Badge colour**.
5. Click **Connect**.
6. Go back to the chat, type your reply and send it. It leaves from the number the customer wrote to.

If the number is not listed under **Not connected**, add it first.

1. In **Configuration**, click **Add number** and pick how to connect. See [Run several WhatsApp numbers](run-multiple-whatsapp-numbers.md).

### Other causes

If the number is connected and the message still shows, the customer's 24 hours may truly have ended on that number.

1. Check the time left in the chat header.
2. If it has run out, click **Send Template** and send an approved template. See [Use the WhatsApp inbox](use-whatsapp-inbox.md).

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| The composer is turned off and asks you to connect a number. | The customer wrote to a number that is not connected. | Click **Connect**, then connect and name the number in **Configuration**. |
| The number is not listed under **Not connected**. | The number is not in your WhatsApp Business Account in Ohanvi. | Click **Add number** in **Configuration**. |
| Chatbot or automatic replies to this customer also fail. | They use the number the customer wrote to. If it is not connected, they fall back to your Default number, and WhatsApp can refuse them for the same reason. | Connect the number the customer wrote to. |
| The customer wrote to both of your numbers. | Each number has its own 24-hour window. | Replies leave from the number the customer wrote to last. Check the header. |

## Related

- [Run several WhatsApp numbers](run-multiple-whatsapp-numbers.md)
- [Use the WhatsApp inbox](use-whatsapp-inbox.md)
- [Connect your WhatsApp number](connect-whatsapp-number.md)
