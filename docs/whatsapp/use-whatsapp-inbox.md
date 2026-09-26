---
title: Use the WhatsApp inbox
description: Reply to customers, take over chats from the bot, assign them to teammates, use quick replies, notes and tags, and resolve chats inside the 24-hour window.
---

# Use the WhatsApp inbox

Answer your customers' WhatsApp messages as a team. At the end of this page you can pick up a waiting chat, reply inside the 24-hour window or with a template, hand the chat to a teammate, and give it back to the bot when you are done.

## Before you start

- Your WhatsApp number is connected. See [Connect your WhatsApp number](connect-whatsapp-number.md).
- You can see **Inbox** in the **WhatsApp** panel. Agents with the WhatsApp executive role see only **Inbox**. If you see nothing, ask your admin. See [Manage team members, roles and permissions](../settings/roles-and-permissions.md).
- To assign chats, you are an admin or a manager. Executives cannot assign.

## Steps

### Find a conversation

1. Open **WhatsApp** in the left rail, then select **Inbox**.
2. On the left, under **Folders**, pick **All conversations**, **My chats** or **Unassigned**. Managers and admins can also pick a teammate under **TEAM** to see that person's inbox.
3. Use the tabs above the list:

    | Tab | What it shows |
    | --- | --- |
    | **All** | Every conversation, newest first, including broadcasts still waiting for a reply and closed chats. |
    | **Requesting** | The customer replied and nobody is handling it yet. These wait for a person. |
    | **Active** | The bot is handling the chat, or an agent took it over. Taken-over chats show **Intervened by** and a name. |
    | **Orders** | Chats with store activity, such as an order placed, shipped or cancelled, or an abandoned cart. Shown only when a store is connected. |

4. To narrow the list, type in **Search name or number…**, or open **Refine** and pick **Unread only** or **Search message text**.
5. Click a conversation. The chat opens on the right.

To switch the layout, pick **List** or **Board**. To find an old chat, open **Chat history**.

### Take over a chat from the bot

1. Open a chat in **Requesting**. It shows **This chat is waiting for a human. Click Intervene to take over and reply.**
2. Click **Intervene**. If the chat belongs to a teammate, **Take over this conversation?** appears. Click **Intervene** again to confirm.
3. The bot stops replying to this chat. You are now the live agent.

In an **Active** chat, typing a reply takes the chat over too. It stays yours until someone resolves it.

### Reply inside the 24-hour window

WhatsApp lets you send free-text messages for 24 hours after the customer's last message. The time left shows in the chat header. It turns amber in the last hour. Any new message from the customer resets it to 24 hours.

1. Type your reply in the composer at the bottom.
2. To add more, click **Add to this message** and pick **Document**, **Photo or video**, **Template**, **Emoji**, **Bold**, **Italic** or **Schedule this reply**.
3. Press Enter or click **Send Reply**.

### Reply after the 24-hour window closes

When the window is closed, the composer shows **24-hour window closed** and **Only approved templates deliver now — a reply reopens the chat for 24 hours.**

1. Click **Send Template**. The template list opens.
2. Search with **Search templates…** and pick an approved template.
3. Fill in each field under **Variables**, then click **Send**. The message **Template sent.** appears.

Clicking **Write anyway** unlocks the composer, but WhatsApp does not deliver free text outside the window. Sending a template does not take the chat over, so a flow started by the template can still run.

### Use quick replies

1. In the composer, type **/** followed by part of a shortcut. The **Canned messages** list opens.
2. Pick a reply. It is inserted into the composer. Filter by **All**, **Starred**, **Text**, **Image**, **Video** or **Doc**.
3. Star a reply to find it faster later.

To create quick replies, open **WhatsApp** → **Manage** → **Canned Messages**, then click **New quick reply**. Give it a **Shortcut** and a message, then click **Create**.

To draft with AI, click **Help me write**, or click **Rephrase with AI** to rewrite your draft.

### Assign a chat to a teammate

1. In the chat header, click the owner chip. It shows **Intervene**, **You** or the owner's name.
2. Type in **Search teammate or team**, then pick a person.

You can also right-click a conversation in the list and choose **Assign to teammate**. In **Assign conversation**, pick a person or click **Unassign**. Chats only go to agents whose chat rules match. See [Add WhatsApp agents](add-whatsapp-agents.md).

### Add notes and tags

1. Click the contact's name at the top of the chat. The profile panel opens.
2. Under **Tags**, type in **Add a tag…** and press Enter.
3. Under **Notes**, type in **Add a note…**, then click **Add note**. Only your team sees notes.

The profile also shows the **WA conversation** state (**Open — free replies deliver** or **Closed — template only**), opt-in, orders, campaigns and **Custom attributes**.

### Resolve a chat

1. When you are done, click the owner chip in the chat header.
2. Click **Done — hand back to the bot**, or press **E**. The chat returns to the bot.

To give the chat back to the queue without resolving it, click **Release this chat**. Right-click a conversation for **Resolve — back to bot**, **Mark as read**, **Pin to top**, **Flag for follow-up** and **Close chat**.

### Set auto-resolve, welcome messages and working hours

1. Open **WhatsApp** in the left rail, then select **Manage**.
2. Select **Live Chat Settings**.
3. Set what you need:

    | Setting | What it does |
    | --- | --- |
    | **Auto Resolve Chats** | Resolves taken-over chats left untouched, and handed-off chats nobody answered. Pick **Resolve after** 1 to 72 hours of inactivity. The default is 24 hours. |
    | **Welcome Message** | Replies to the first message of a new conversation during working hours. A chatbot flow with a Welcome trigger takes priority. |
    | **Off Hours Message** | Replies to the first message of a new conversation outside working hours. |
    | **Waiting for an Agent** | Tells a customer who writes again that the team has the chat. Sent at most once every 30 minutes, and never after an agent replies. |
    | **Escalate Unanswered Handoffs** | Routes a handed-off chat with no reply to another available agent, and alerts admins, managers and the assignee. Pick **Escalate after** 5 to 60 minutes. The default is 15 minutes. |
    | **Working Hours** | Pick a **Timezone** and set hours per day, or mark a day **Closed**. |

4. Click **Save**. The message **Live chat settings saved.** appears.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **This person has not messaged you in the last 24 hours, so WhatsApp only allows an approved template here — a normal message will not go through. Send a template instead.** | The 24-hour window is closed. | Click **Send Template** and send an approved template. |
| **No approved templates found.** | You have no approved templates yet. | Create a template and wait for Meta's approval. See the [WhatsApp overview](index.md). |
| You cannot type in a **Requesting** chat | These chats need an explicit takeover. | Click **Intervene** first. |
| **No one to assign to yet — add agents under Manage → Team.** | No agents exist yet. | Add agents. See [Add WhatsApp agents](add-whatsapp-agents.md). |
| **Live updates paused** | The live connection dropped. | Wait. New messages appear once it reconnects. Click **Refresh** if needed. |
| **This number cannot receive WhatsApp messages.** | The number is not on WhatsApp, is mistyped, or blocked your business. | Check the number on the contact. |

## Related

- [Add WhatsApp agents](add-whatsapp-agents.md)
- [Set up the WhatsApp AI agent](set-up-ai-agent.md)
- [Manage WhatsApp contacts](manage-whatsapp-contacts.md)
- [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md)

!!! note "Screenshots to add"
    - After step 3 of Find a conversation — the inbox with **Folders** and the **All**, **Requesting**, **Active** tabs.
    - After step 2 of Take over a chat from the bot — the **Take over this conversation?** dialog.
    - After step 1 of Reply after the 24-hour window closes — the **24-hour window closed** banner with **Send Template**.
    - After step 1 of Add notes and tags — the profile panel with **Tags** and **Notes**.
