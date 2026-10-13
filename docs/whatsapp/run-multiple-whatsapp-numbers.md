---
title: Run several WhatsApp numbers
description: Connect more than one WhatsApp number, name each one, pick a default, see which number every message used, and send campaigns from the right number.
---

# Run several WhatsApp numbers

Use more than one WhatsApp number in Ohanvi, for example **Sales** and **Support**. At the end, each number has its own name and badge, your team replies from the number the customer wrote to, and each campaign goes out from the number you choose.

## Before you start

- At least one WhatsApp number is connected. See [Connect your WhatsApp number](connect-whatsapp-number.md).
- You can open **Settings** → **WhatsApp** → **Configuration**. If not, ask your admin for WhatsApp access.
- For a new number, you have a phone number that can receive a text message or a call, or the details from Meta. See [Connect your WhatsApp number](connect-whatsapp-number.md).

## How several numbers work

- **One Default number.** One number is always the **Default**. Campaigns, broadcasts and the first message to a new contact leave from it.
- **Replies leave from the number the customer wrote to.** You do not pick this. Ohanvi does it for you.
- **Each number has a label and a badge.** You give a number a label, such as `Sales`. The first letter of the label is the badge you see on every message in the inbox. You can pick the badge colour.
- **Templates are shared.** Numbers in the same WhatsApp Business Account use the same approved templates.

### Why replies leave from the number the customer wrote to

WhatsApp's 24-hour window does not belong to your business as a whole. It belongs to the pair: one customer and one of your numbers. When Sana writes to your **Sales** number, only **Sales** can send her a free-text reply for the next 24 hours. A reply from your **Support** number is refused, even though the chat looks fresh in the inbox.

So Ohanvi always replies from the number the customer last wrote to. If the same customer later writes to your other number, replies follow that number from then on.

## Steps

### Open your numbers

1. Click your initials in the bottom-left corner, then click **Settings**.
2. Select **WhatsApp**, then **Configuration**. The page title reads **WhatsApp numbers**.

    <!-- SCREENSHOT TODO: add the image, then restore this line: ![WhatsApp numbers with the list of numbers on the left, the Default tag, quality rating and the detail pane on the right](../assets/screenshots/whatsapp-numbers-1-list.png) -->

3. Read the list on the left. Each row shows the badge, the label, a **Default** tag on one number, the phone number and the number's quality rating.
4. To find a number, type in **Search label or number**.
5. Click a number. Its details open on the right.

### Add a number

1. Click **Add number** at the top right. The **Connect WhatsApp** page opens.
2. Under **How do you want to connect?**, pick **New number**, **Verified number**, **WhatsApp Business app** or **Cloud API credentials**.
3. Follow the steps for that option. See [Connect your WhatsApp number](connect-whatsapp-number.md).
4. Give the number a label. It becomes the badge in the inbox.

!!! tip "Use the same WhatsApp Business Account"
    A number you add to a WhatsApp Business Account you already use shares its templates. Campaigns and flows can use the same approved templates from any of those numbers.

### Connect a number that is already in your WhatsApp account

Sometimes a number is in your WhatsApp Business Account on Meta and customers are already writing to it, but it is not connected in Ohanvi. You can connect it in one click. You do not need a code or a token.

1. Open **Settings** → **WhatsApp** → **Configuration**.
2. Look for **In your WhatsApp account, not connected** in the list. The number has a **Receiving messages** tag.
3. To see only these numbers, click **Not connected** above the list.

    <!-- SCREENSHOT TODO: add the image, then restore this line: ![The list with a not connected number marked Receiving messages and a Connect button](../assets/screenshots/whatsapp-numbers-2-not-connected.png) -->

4. Click **Connect** on the number. **Name this number** opens.
5. In **Label**, type a name, for example `Sales`. The first letter becomes this number's badge on every message in the inbox.
6. Under **Badge colour**, pick **blue**, **purple**, **teal**, **orange** or **gold**.
7. Click **Connect**. A message tells you the number is connected, and replies to its chats now send from it.

You can also connect it from a chat. See [Connect the number a customer wrote to](#connect-the-number-a-customer-wrote-to).

### Read a number's details

Click a number in the list. The pane on the right has these parts.

| Part | What it shows |
| --- | --- |
| **Number details** | Facts Ohanvi reads from Meta: **Verified name**, **Display name status**, **Quality rating**, **Messaging limit**, **Throughput**, **Phone verification**, **Platform**, **Account mode** and **Official business account**. |
| **IDs and connection** | The **Phone number ID**, your **WhatsApp Business Account**, **Business verification**, **Access token**, **Graph API version** and **Webhook**. Click it to open. |
| **Working hours** | The opening hours of this number. |
| **Call settings** | Whether customers can call this number. |

<!-- SCREENSHOT TODO: add the image, then restore this line: ![The detail pane of a number with Number details, IDs and connection, Working hours and Call settings](../assets/screenshots/whatsapp-numbers-3-details.png) -->

To refresh the facts from Meta, click the refresh button above the list. Its tooltip reads **Sync from Meta**.

### Set working hours for a number

1. Click the number in the list.
2. Scroll to **Working hours**. Read the time zone beside the heading.
3. For each day, turn the switch on or off. A day that is off shows **Closed**.
4. For a day that is on, set the opening time and the closing time.

These hours apply to chats on this number only. Outside them, customers get the off-hours reply, and handed-off chats wait for the next opening. To write the replies, see [Set up live chat settings](set-up-live-chat-settings.md).

### Set call settings for a number

1. Click the number in the list.
2. Scroll to **Call settings**.
3. Turn on **WhatsApp voice calling** to let customers call this number and your agents call them back.

The call schedule and the team members who ring are shared. They apply to all your numbers. See [Use WhatsApp Calling](whatsapp-calling.md).

### Rename a number or change its badge

1. Click the number in the list.
2. Click **Edit**.
3. In **Label**, type the new name. The badge letter changes as you type.
4. Under **Badge colour**, pick a colour.
5. Click **Save**.

The same window holds the number's other details, such as the access token. See [Edit a WhatsApp number](whatsapp-configuration-settings.md).

!!! note "Use a different label for each number"
    Two numbers in one business cannot share a label. If you try, the save is refused.

### Make a number the default

1. Click the number in the list.
2. Click **Make default**. **Make Sales the default?** opens.
3. Read the note. New campaigns, broadcasts and first messages to new contacts send from this number. Replies keep going from the number each customer wrote to.
4. Click **Make default**.

The **Make default** button does not show on the number that is already the default.

### Disconnect a number

1. Click the number in the list.
2. Click **Disconnect**. **Disconnect Support?** opens.
3. Read the note. Ohanvi stops receiving and sending on this number. Its chats stay in the inbox, but replies cannot be sent until you connect it again. The number itself stays in your WhatsApp account.
4. Click **Disconnect**.

!!! warning "The Default number cannot be disconnected"
    While you have other numbers, the Default cannot be disconnected. The window says **Make another number the default first, then disconnect this one.** Make another number the default, then disconnect it. You can disconnect your only number.

A number you disconnect appears again under **In your WhatsApp account, not connected**, so you can connect it again later.

### See which number a message used

In **Inbox**, every message carries a small badge with the first letter of a number's label. Colours tell the numbers apart.

1. Open **WhatsApp** in the left rail, then select **Inbox**.
2. Look at the top of the list. It names each of your numbers next to its badge.
3. Open a chat. Under each message, find the badge. On a message from the customer, it shows the number they wrote to. On a message from your team, it shows the number it left from.
4. Hover a badge. The tooltip reads the label and the phone number, for example `Sales · +91 98100 45210`.
5. Look at the chat header. It says which number the customer wrote to.
6. Look above the composer. It reads **Replying from**, then the badge, the label and the number.

<!-- SCREENSHOT TODO: add the image, then restore this line: ![A chat with a letter badge under every message, the header naming the number the customer wrote to and Replying from above the composer](../assets/screenshots/whatsapp-numbers-4-inbox.png) -->

A grey badge with `?` means the number is not connected in Ohanvi. Its tooltip reads **Not connected in Ohanvi**.

### Connect the number a customer wrote to

When a customer writes to a number that is not connected, you cannot reply from Ohanvi. The composer is turned off and shows **This customer wrote to a number that isn't connected**, with the number's ID.

1. Click **Connect** beside the message. **Configuration** opens.
2. Under **In your WhatsApp account, not connected**, click **Connect** on the number. **Name this number** opens.
3. Type a **Label**, pick a **Badge colour** and click **Connect**.
4. Go back to the chat and type your reply. It leaves from the number the customer wrote to.

WhatsApp delivers a reply only from the number the customer wrote to. If that number is in your WhatsApp account, connecting it takes one click. If it is not, add it first. See [Add a number](#add-a-number).

### Send a campaign from a number

1. Open **WhatsApp** in the left rail, then select **Campaign**, then click **New Campaign**.
2. Type a **Broadcast name**.
3. Under **Send from**, pick the number. It starts on your **Default** number. Each choice shows the badge, the label, the phone number and the messaging limit.
4. Check the note on the right. It names the number the campaign goes out from.

    <!-- SCREENSHOT TODO: add the image, then restore this line: ![Send from with a list of numbers, the Default tag and each number's messaging limit](../assets/screenshots/whatsapp-numbers-5-send-from.png) -->

5. Finish the campaign as usual. See [Send a WhatsApp broadcast campaign](send-broadcast-campaign.md).

When a customer replies to the campaign, the chat stays on the number it was sent from, and your team replies from that number automatically.

A number with a low messaging limit shows a note. Larger audiences are spread over several days, or should use another number.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **This person has not messaged you in the last 24 hours** on a chat that shows time left. | The customer wrote to a number that is not connected, so a reply cannot leave from it. | Connect that number. See [Reply says the 24-hour window is closed but the chat shows time left](fix-24-hour-window-error.md). |
| **This customer wrote to a number that isn't connected** | The number the customer wrote to is not connected in Ohanvi. | Click **Connect** beside the message, or connect it from **Configuration**. |
| **Make another number the default first, then disconnect this one.** | You tried to disconnect the Default number. | Make another number the default, then disconnect this one. |
| A label is refused when you save. | Another number in your business has the same label. | Use a different label. |
| A number is missing from **Configuration**. | It is not connected, or it is in another WhatsApp Business Account. | Look under **In your WhatsApp account, not connected**. If it is not there, click **Add number**. |
| A campaign did not leave from the number you wanted. | **Send from** was left on the Default number. | Pick the number under **Send from** before you send. |

## Related

- [Connect your WhatsApp number](connect-whatsapp-number.md)
- [Edit a WhatsApp number](whatsapp-configuration-settings.md)
- [Use the WhatsApp inbox](use-whatsapp-inbox.md)
- [Send a WhatsApp broadcast campaign](send-broadcast-campaign.md)
- [Use WhatsApp Calling](whatsapp-calling.md)
- [Reply says the 24-hour window is closed but the chat shows time left](fix-24-hour-window-error.md)
