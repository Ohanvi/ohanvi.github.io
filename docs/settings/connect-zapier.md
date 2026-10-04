---
title: Connect Zapier
description: Create an Ohanvi API key, paste it into Zapier, and build Zaps that react to your leads, deals, chats and forms.
---

# Connect Zapier

Connect Ohanvi to Zapier so your CRM, WhatsApp, forms and email can talk to thousands of other apps without code. You create an API key in Ohanvi, paste it into Zapier, and build your Zaps there. Takes about 10 minutes.

## Before you start

- You can open **Integrations** in **Settings**. If you do not see it, ask your workspace owner.
- You have a Zapier account at zapier.com.
- You know which user should own the key. The key works with the permissions of the user who creates it. See [Manage team members, roles and permissions](roles-and-permissions.md).

## How Zapier and Ohanvi work together

Zapier starts the connection, so there is nothing to "connect" inside Ohanvi except a key. Ohanvi does three things on this screen:

- It issues, lists and revokes API keys.
- It shows the **Triggers** (when this happens in your account) and **Searches** (look up a record) that Ohanvi offers Zapier.
- It shows ready-made ideas under **Popular automations**.

The Zaps you build are not listed here. Manage them in your Zapier dashboard.

## Steps

### Open the Zapier screen

1. Click your initials in the bottom-left corner, then click **Settings**.
2. In the left list, under **Workspace**, select **Integrations**.
3. Under **Integration**, click **Zapier**. The **Zapier** page opens.
4. Read the pills under the title. One shows how many keys are active, for example **1 active key**. If there is none it reads **No active key yet**.

### Create an API key

1. Click **Create key**. The **Create Zapier API key** window opens.
2. In **Key name**, type a name for yourself, for example `Marketing Zaps`. Name it after the Zaps it will run. It is required. The window asks **Give the key a name so you can recognise it later.** if you leave it empty.
3. Under **Expires after**, choose **30 days**, **90 days**, **1 year** or **Never expires**.
4. Read the note at the bottom. The key acts with your own permissions. To limit what Zapier can reach, sign in as a restricted user and create the key there.
5. Click **Create key**. The **Connect Zapier** window opens.

### Copy the key into Zapier

1. In the **Connect Zapier** window, read the warning. The key is shown **only once**. If you lose it, you must create a new key.
2. Copy the **Base URL**. Zapier asks for it.
3. Copy the **API Key**. Zapier asks for it too.
4. Tick **I have copied my key somewhere safe**.
5. Click **Open Zapier**. Zapier opens in a new browser tab.
6. In Zapier, start a new Zap, pick Ohanvi as the app, and paste the key when it asks you to connect.

### Build a Zap

1. In Zapier, choose a trigger. For example, **New Lead**, then choose what should happen in the other app.
2. Let Zapier pull a sample record to check the connection.
3. If the sample looks right, publish the Zap. It then runs by itself.

The page lists the same four steps under **How to set this up**: create a key, connect in Zapier, pick a trigger, test and turn on.

### Start from a ready-made idea

1. Scroll to **Popular automations**. The line under it says each idea opens Zapier, and you pick the trigger named on the card.
2. Under **Bring data in from other apps**, find ideas that start somewhere else and create records in Ohanvi.
3. On a card, click **Set up in Zapier**. Zapier opens and the page shows a hint, for example **In Zapier, choose the "New Lead" trigger.**
4. If no key exists yet, the cards show **Create a key first**. Create a key before you continue.

Examples of ideas: welcome every new lead on WhatsApp, log new leads to a sheet, celebrate closed-won deals, send a WhatsApp template when an order ships, and turn form responses into leads.

### See what you can automate

1. Scroll to **What you can automate**. The line under it says these are the triggers and searches this server offers Zapier.
2. Read **Triggers**, labelled **When this happens in your account…**. Each is a name you will see when you build a Zap.
3. Read **Searches**, labelled **Look up a record from another app…**.

### Check or revoke a key

1. Under **API keys**, read each key. It shows its name, the start of the key, and **Created**, **Last used** and **Expires**.
2. To stop a key, click **Revoke** on its row.
3. In **Revoke "name"?**, click **Revoke**. Every Zap using this key stops working at once. You would need to create a new key and reconnect those Zaps in Zapier.
4. The message **Key revoked.** appears. Revoked and expired keys stay in the list as a record.
5. Click **Refresh** at the top to reload the list.

!!! warning "Revoking cannot be undone"
    Anything using a revoked key fails on its very next request. Create a replacement key first if the Zap must keep running.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Could not create the key.** | The key request failed. | Check your connection, then click **Create key** again. |
| **Give the key a name so you can recognise it later.** | **Key name** is empty. | Type a name and click **Create key** again. |
| I lost the key. | A key is shown only once and cannot be shown again. | Create a new key, update Zapier, then revoke the old one. |
| **Could not open Zapier.** | Your browser blocked the new tab. | Allow pop-ups for Ohanvi, or open zapier.com yourself. |
| The popular automations show **Create a key first**. | No active key exists. | Click **Create key** at the top. |
| A Zap stopped working. | Its key was revoked or has expired. | Create a new key and reconnect the Zap in Zapier. |

## Related

- [Connect Pabbly](connect-pabbly.md)
- [Own vs managed services](choose-connectors.md)
- [Send WhatsApp messages with the Developer APIs](developer-apis.md)
- [Manage team members, roles and permissions](roles-and-permissions.md)
