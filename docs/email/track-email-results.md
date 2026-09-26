---
title: Track results and handle unsubscribes and bounces
description: Read the Email dashboard and Send Logs, see who opened and clicked, and understand how unsubscribes, bounces and complaints stop future sends.
---

# Track results and handle unsubscribes and bounces

See how your emails performed, down to each recipient, and keep your list clean. At the end you know who received, opened and clicked each campaign, and why some people were skipped, unsubscribed or suppressed.

## Before you start

- You have sent at least 1 campaign. See [Send an email campaign](send-email-campaign.md).
- You can see **Email** in the left rail with **Dashboard** and **Send Logs** in its panel. The **Dashboard** needs report access for your role. If you do not see it, ask your admin.

## Steps

### Read the dashboard

1. Open **Email** in the left rail, then select **Dashboard**. The **Email Marketing** dashboard opens.
2. On a new account, follow **Get set up to send**: **Confirm a sending address**, **Add your contacts**, **Put them in a list** and **Send your first campaign**.
3. Read the totals: **Sent**, **Delivered**, **Opened** and **Clicked**.
4. Scroll for **Campaign Funnel**, **Recent Campaigns**, **Engagement Trend**, **Subscriber Growth**, **Top Links Clicked**, **Device Analytics** and **Suppression Breakdown**.

Click **View Report** on a row in **Recent Campaigns** to open that campaign's figures.

### See each recipient in Send Logs

1. Open **Email** in the left rail, then select **Send Logs**.
2. Choose a campaign in **Campaign**. The table lists every recipient with **Recipient**, **Status**, **Sent**, **Opened**, **Clicked**, **Unsubscribed** and **Error**.
3. Click a filter to narrow the list: **All**, **Queued**, **Failed**, **Opened**, **Not Opened**, **Clicked**, **Bounced**, **Complained** or **Unsubscribed**.
4. Type in **Search recipient email** to find 1 person.
5. Click a row to see its **Activity Timeline**. Click **View Contact** or **View Template** for more.
6. To download, click **Export**, then **Export Excel (full log)** or **Export CSV (current page)**.

### What each send status means

| Status | Meaning |
| --- | --- |
| **Queued** | Waiting to go out. |
| **Sent** | Handed to the sending server. |
| **Delivered** | Accepted by the recipient's inbox provider. |
| **Bounced** | The address could not receive it. |
| **Complained** | The recipient marked it as spam. |
| **Failed** | The send did not go through. The **Error** column says why. |
| **Skipped suppressed** | Not sent, because the address is on the suppression list. |

### How unsubscribes, bounces and complaints work

Ohanvi removes these people from future sends on its own:

- **Unsubscribe** — when a recipient clicks the `{{unsubscribeUrl}}` link, the contact becomes **Unsubscribed** and the address is suppressed.
- **Hard bounce** — an address that permanently bounces is suppressed.
- **Complaint** — a recipient who marks your email as spam is suppressed.

Every campaign skips suppressed and unsubscribed people. They show as **Skipped suppressed** in **Send Logs**, and you are not charged for them.

!!! warning
    Unsubscribes, hard bounces and complaints are permanent compliance records. You cannot lift them. A person who unsubscribed must sign up again themselves.

### Unsubscribe or reactivate a contact by hand

1. Open **Email** in the left rail, then select **Contacts**.
2. Open the contact's row menu, then click **Unsubscribe**. In **Unsubscribe Contact**, click **Unsubscribe**.
3. To undo a manual unsubscribe, click **Reactivate (mark Subscribed)**, then click **Reactivate**.

Only reactivate someone you unsubscribed yourself. If the contact unsubscribed themselves, their new consent should come from them.

### Block an address from all sends

The **Suppression List** screen lists every blocked address with its **Reason**. It is not in the **Email** panel by default [VERIFY: how users reach Suppression List].

1. Open **Suppression List**, then open **Add to Suppression List** [VERIFY: button label].
2. In **Email Addresses**, type 1 address per line. Add **Remarks (optional)**, for example the support ticket number.
3. Click **Add to List**.

Only addresses you added by hand can be removed from the list later.

### See what email cost you

Each delivered email uses credits. Open the **Credits** box at the top right to see **Spend by product** and every charge. See [Credits and billing](../credits-and-billing.md).

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Select a campaign** on Send Logs | No campaign is chosen. | Choose one in **Campaign**. |
| **No send logs yet** | The campaign has not sent to anyone yet. | Check its status on **Campaigns**. |
| Many rows show **Failed** | The sender is not verified, or your own email provider refused the connection. | Read the **Error** column. Check **Sender Identities** and the **Email Provider** screen. |
| **… suppressions are permanent and cannot be lifted.** | The address unsubscribed, bounced or complained. | Leave it suppressed. Ask the person to sign up again if they want your emails. |
| A campaign is stuck on **Sending** | The send was interrupted. | On **Campaigns**, open **⋮** → **Finish sending**. |
| Opens look low | Some inboxes block the tracking image. | Compare clicks as well as opens. |

## Related

- [Send an email campaign](send-email-campaign.md)
- [Add email contacts, lists and segments](manage-email-contacts.md)
- [Credits and billing](../credits-and-billing.md)

!!! note "Screenshots to add"
    - After step 3 of "Read the dashboard" — the dashboard totals and **Campaign Funnel**
    - After step 3 of "See each recipient in Send Logs" — Send Logs with a filter selected
    - After step 5 — a recipient's **Activity Timeline**
