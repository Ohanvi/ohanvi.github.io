---
title: Check which email addresses actually exist
description: See which contacts' email addresses are confirmed deliverable, still being checked, or failed verification, and what that means for campaigns.
---

# Check which email addresses actually exist

The Email Whitelist page shows which of your contacts' email addresses are confirmed to exist, which are still being checked, and which failed the check. At the end you know, for any contact, whether their address is safe to send to or still unproven.

## Before you start

- You can see **Manage** in the **Email** panel. If not, ask your admin.
- You have at least one email contact. See [Add email contacts, lists and segments](manage-email-contacts.md).

## How the check works

Ohanvi checks a contact's email address in the background, without blocking you from saving or sending. Every address ends up in one of three states:

- **Whitelisted** — delivery has confirmed the address is real. These addresses can receive campaigns.
- **Under review** — still being checked, or the address belongs to a domain that does not confirm addresses up front (a catch-all domain). An under-review address gets exactly **one** trial email; its delivery decides the final result.
- **Failed** — the trial email bounced, or the check came back invalid. The address is also added to the [Suppression List](use-the-suppression-list.md).

## Steps

### Open the Email Whitelist page

1. Open **Email** in the left rail, then select **Manage**.
2. Select **Email Whitelist**.
3. Read the line under the title, for example **42 of 91 contacts can receive campaigns.**

### Read the three tabs

1. Click **Whitelisted** to see addresses confirmed deliverable. Each count badge updates as new addresses are confirmed.
2. Click **Under review** to see addresses still being checked, including ones waiting on their single trial email.
3. Click **Failed** to see addresses that do not exist or stopped accepting mail.
4. Hover a status chip to read why, for example *Its trial email bounced, so it was added to the suppression list.*

### Find one address

1. Type in the search box to filter by email or name within the open tab.

## What the columns mean

| Column | Meaning |
| --- | --- |
| **Email** | The contact's address. |
| **Name** | The contact's name, if known. |
| **Status** | Which of the three outcomes this address is at, with the reason as a tooltip. |
| **Last updated** | When this contact's record last changed. |

!!! note
    This page is read-only. A contact's email address is confirmed by the background check and the trial-email result, not by hand. To change a contact's details, open them from [Add email contacts, lists and segments](manage-email-contacts.md).

!!! note
    An address under review is not blocked. Unless your account has turned on stricter sending, campaigns can still send to it — Email Whitelist shows you what Ohanvi currently believes about each address so you can judge your list's health, rather than hiding unproven contacts from you.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| A contact has no row on any tab | The contact has no email address, or verification has not started yet. | Add or correct the contact's email, then check back. |
| An address stays **Under review** for a long time | It belongs to a catch-all or similar domain that never confirms up front; it is waiting for its one trial email to be sent and its delivery to come back. | Wait. If it moves to **Failed**, the address does not accept mail. |
| An address moved to **Failed** | Its trial email bounced, or the check found the address invalid. | Treat it like any other bounced address — it is already on the [Suppression List](use-the-suppression-list.md). |

## Related

- [Block addresses with the Suppression List](use-the-suppression-list.md)
- [Track results and handle unsubscribes and bounces](track-email-results.md)
- [Add email contacts, lists and segments](manage-email-contacts.md)
