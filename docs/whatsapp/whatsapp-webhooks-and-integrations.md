---
title: Set up WhatsApp webhooks and integrations
description: Connect Meta's webhook so delivery and message events reach Ohanvi, issue Developer API keys, and send BUSY invoice messages on WhatsApp.
---

# Set up WhatsApp webhooks and integrations

Set up the 3 WhatsApp connections that link Ohanvi to other systems: the Meta webhook, the Developer API and BUSY. At the end, delivery and message events flow into Ohanvi, your own software can send WhatsApp messages, and BUSY invoices go out on WhatsApp.

## Before you start

- Your WhatsApp number is connected to Ohanvi. See [Connect your WhatsApp number](connect-whatsapp-number.md).
- You are an admin, or your role has access to these screens. See [Roles and permissions](../settings/roles-and-permissions.md).
- For BUSY: you have an approved template whose body has exactly 1 variable, `{{1}}`. See [Create a WhatsApp message template](create-message-template.md).

## Where to find these screens

Click your initials bottom-left, then **Settings**. Under **WhatsApp**, choose **Webhooks**, **Developer API** or **BUSY**.

You can also open any WhatsApp setup screen and use the tabs across the top: **Configuration**, **Webhooks**, **Business Profile**, **Website Button**, **Developer API**, **BUSY** and **Migrate to Ohanvi**. BUSY is also listed as **BUSY (Accounting)** under **Connect** in the left rail.

| Screen | What it is for |
| --- | --- |
| **Webhooks** | Meta sends message and delivery events to Ohanvi in real time. Without it, campaigns never show **Delivered** or **Read**, and replies do not reach the **Inbox**. |
| **Developer API** | Lets your website, store or backend send WhatsApp messages through Ohanvi with an API key. |
| **BUSY** | Sends invoice and payment messages from BUSY accounting on WhatsApp. |

## Steps

### Connect the Meta webhook

1. Open **Webhooks**. The **Callback Endpoint** card shows your **Webhook URL** and **Verify Token**.
2. If **Verify Token** shows **Not set — add one in Configuration, then paste it into Meta.**, add a verify token in **Configuration** first.
3. In a new tab, open Meta Developer Console → your app → **WhatsApp** → **Configuration**.
4. Click **Copy** next to **Webhook URL** in Ohanvi and paste it into Meta.
5. Click **Copy** next to **Verify Token** and paste it into Meta. Save.
6. In Meta, subscribe to the **messages** webhook field and save.
7. Send a test message to your number. It appears in the **Inbox** at once.
8. Back in Ohanvi, click **Refresh Events**. The event shows under **Recent Webhook Events** with its **Contact**, **Campaign**, **Status** and **Updated** time.

### Send messages from your own software (Developer API)

1. Open **Developer API**. It has 3 tabs: **API Keys**, **Usage Log** and **Docs**.
2. Click **Create key**. The **Create API key** window opens.
3. Type a **Key name**, for example `Website checkout`.
4. Choose **Expires after**: **30 days**, **90 days**, **1 year** or **Never expires**.
5. Click **Create key**. **Your API key — copy it now** opens.
6. Click **Copy key** and store it somewhere safe. Tick **I have copied the key and stored it somewhere safe.** and click **Done**.

!!! warning "The key is shown only once"
    Ohanvi stores the key hashed, so it cannot be shown again. If you lose it, revoke it and create a new one.

The key can only send WhatsApp messages for your organisation. It cannot read contacts, campaigns or anything else. Every message sent with it appears in **Usage Log** as **Queued**, **Sent** or **Failed**, and is charged to your credits like any other message.

For the requests themselves, see the **Docs** tab and [Send WhatsApp messages with the Developer APIs](../settings/developer-apis.md).

To stop a key working, click **Revoke** on it, then **Revoke** in **Revoke this key?**.

### Send BUSY invoices on WhatsApp

BUSY → WhatsApp is one way. When BUSY sends an invoice message, Ohanvi delivers it on WhatsApp through your template. It does not sync BUSY data or read your inventory.

1. Open **BUSY**. Turn the switch at the top to **On**.
2. In **1. Template**, choose an approved template whose body has exactly 1 variable, `{{1}}`. BUSY's message goes into it. The template cannot have a media header or dynamic buttons. A body like `Message from {{business}}: {{1}} Thank you.` in the **Utility** category works, with your business name in place of `{{business}}`.
3. Set **Country code for 10-digit numbers**, for example `91`, and click **Save**.
4. In **2. BUSY URL**, click **Generate URL**. **Your BUSY URL — copy it now** opens.
5. Click **Copy URL**. Tick **I have pasted this URL into BUSY or stored it safely.** and click **Done**.
6. In BUSY, go to **Administration** → **Configuration** → **WhatsApp/SMS Configuration** → **Add New Format**.
7. Enter the values from **3. Enter these in BUSY** exactly as shown:

    | BUSY field | Value |
    | --- | --- |
    | **Format Name** | `OHANVI_WA` (any name) |
    | **Server** | **Service Provider Server** |
    | **WhatsApp/SMS API** | The URL from step 5 |
    | **User Name, Password, Senders ID** | Leave empty |
    | **Mobile** | The parameter name Ohanvi shows, by default `receiverMobileNo` |
    | **Message** | The parameter name Ohanvi shows, by default `message` |
    | **No. of Other Parameters** | `0` |
    | **Treatment of Mobile Number** | Leave as it is |
    | **Upload PDF** | Leave off until PDF is set up |

    For payment confirmations, also turn on **Send SMS after saving** for Receipt vouchers. For bulk payment reminders, tick **Separate Internet Call for Each Number During Bulk SMS**. Parameter names are case-sensitive.

8. In **4. Test**, type a number in **Send a test to** and click **Send test**. **Test message queued. Its status appears under Recent activity.** appears.
9. Send a real invoice from BUSY. Check that it appears under **Recent activity**.

The test from Ohanvi only checks Ohanvi's side. Only a real send from BUSY proves BUSY is set up.

!!! warning "Anyone with the BUSY URL can send as your business"
    The URL holds a secret key and is shown only once. If it may have leaked, click **Revoke URL**. BUSY messages are refused at once.

To replace the URL, click **Create new URL**, then **Create new URL** again in the **Create a new BUSY URL?** window. Use **Stop old URL now** once BUSY has the new URL. The old URL keeps working for 24 hours, so paste the new one into BUSY within that time.

#### Optional: invoice PDFs and stock

- **Invoice PDF (optional)**: choose a **PDF template (document header)** with 1 `{{1}}` variable. Keep it off, send 1 invoice from BUSY with **Upload PDF** on, then check **Recent activity** to see how BUSY sent the file. Pick the matching option and click **Save PDF settings**.
- **Stock from BUSY**: BUSY cannot be asked for live stock. Export the Stock Status report from BUSY as Excel or CSV and click **Upload stock report**. The WhatsApp AI agent can then answer "how much of X is left?", as of the last upload. See [Set up the AI agent](set-up-ai-agent.md).

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **No events yet** on **Webhooks** | The webhook is not set up in Meta, or not subscribed to **messages**. | Repeat the webhook steps and subscribe to the **messages** field. |
| Campaigns stay at **Sent** and never show **Delivered** | Delivery events are not reaching Ohanvi. | Check the **Webhook URL** and **Verify Token** in Meta match Ohanvi's. |
| Lost the API key | Keys are shown only once. | Revoke the key and create a new one. |
| **No approved template qualifies yet. Create one under WhatsApp → Templates.** | No approved template has exactly 1 `{{1}}` variable. | Create one, for example `Message from Sharma Traders: {{1}} Thank you.`, and wait for **Approved**. |
| **Connect a WhatsApp number first (WhatsApp → Configuration).** | No WhatsApp number is connected. | Connect your number, then open **BUSY** again. |
| **BUSY has not called this URL yet.** | BUSY is not using the URL yet. | Check the values in BUSY's WhatsApp/SMS Configuration, then send an invoice from BUSY. |

## Related

- [Send WhatsApp messages with the Developer APIs](../settings/developer-apis.md)
- [Send a broadcast campaign](send-broadcast-campaign.md)
- [Create a WhatsApp message template](create-message-template.md)
- [Settings](../settings/index.md)

!!! note "Screenshots to add"
    - After step 1 of Connect the Meta webhook — the **Callback Endpoint** card with **Webhook URL** and **Verify Token**
    - After step 5 of Developer API — the **Your API key — copy it now** window (key blurred)
    - After step 7 of Send BUSY invoices — the **3. Enter these in BUSY** card
    - After step 9 of Send BUSY invoices — **Recent activity** with a sent invoice
