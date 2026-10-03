---
title: Read the send logs
description: See every recipient of a campaign, filter by delivered, opened, clicked, bounced or failed, and export the log.
---

# Read the send logs

Send Logs shows what happened to each recipient of a campaign. Use it to see who got an email, who opened and clicked, and why some sends failed. At the end, you can export the full log.

## Before you start

- You have sent at least 1 campaign. See [Send an email campaign](send-email-campaign.md).
- You can see **Manage** in the **Email** panel. If not, ask your admin.

## Steps

### Open the log for a campaign

1. Open **Email** in the left rail, then select **Manage**.
2. Select **Send Logs**.
3. In **Campaign**, choose the campaign. Until you do, the page says **Select a campaign**.
4. Read the table. It lists **Recipient**, **Status**, **Sent**, **Opened**, **Clicked**, **Unsubscribed** and **Error** for each person.

### Filter and search

1. Click a filter to narrow the list: **All**, **Queued**, **Failed**, **Opened**, **Not Opened**, **Clicked**, **Bounced**, **Complained** or **Unsubscribed**.
2. Type in **Search recipient email** to find one person.

### Read one recipient

1. Click a row. Its **Activity Timeline** opens.
2. Click **View Contact** to open the person, or **View Template** to see the email they received.

### Export the log

1. Click **Export**.
2. Click **Export Excel (full log)** for every row, or **Export CSV (current page)** for the rows on screen.

### What each status means

| Status | Meaning |
| --- | --- |
| **Queued** | Waiting to go out. |
| **Sent** | Handed to the sending server. |
| **Delivered** | Accepted by the recipient's inbox provider. |
| **Bounced** | The address could not receive it. |
| **Complained** | The recipient marked it as spam. |
| **Failed** | The send did not go through. The **Error** column says why. |
| **Skipped suppressed** | Not sent, because the address is on the suppression list. |

A test send does not appear in Send Logs.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Select a campaign** | No campaign is chosen. | Choose one in **Campaign**. |
| **No send logs yet** | The campaign has not sent to anyone yet. | Check its status on **Campaigns**. |
| Many rows show **Failed**. | The sender is not verified, or your own provider refused the connection. | Read the **Error** column. Check **Sender Identities** and **Email Sending Server**. |
| Opens look low. | Some inboxes block the tracking image. | Compare clicks as well as opens. |

## Related

- [Track results and handle unsubscribes and bounces](track-email-results.md)
- [Block addresses with the Suppression List](use-the-suppression-list.md)
- [Set up a sender address and verify your domain](set-up-sender-identity.md)
