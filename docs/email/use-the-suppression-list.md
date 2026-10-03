---
title: Block addresses with the Suppression List
description: See every address that must never receive email, add addresses by hand, export the list, and understand why bounces and complaints land here.
---

# Block addresses with the Suppression List

The Suppression List holds every address that must never receive email from your account. Bounces, complaints and unsubscribes land here on their own, and you can add addresses by hand. At the end, blocked addresses are skipped by every campaign, journey and digest.

## Before you start

- You can see **Manage** in the **Email** panel. If not, ask your admin.
- For a manual block, you have the addresses, and optionally a note about why.

## Steps

### Open the list

1. Open **Email** in the left rail, then select **Manage**.
2. Select **Suppression List**. The page title reads **Suppression list**.
3. Read the line under the title. With nothing blocked it says: **Addresses that must never receive email — bounces, complaints and unsubscribes land here automatically.**
4. Read the **Email**, **Reason**, **Remarks**, **Suppressed On** and **Status** columns.

### Filter and export

1. Click a **Reason** chip above the list to show only that reason. Each chip shows a count. Click the first chip to show all.
2. Click **Export CSV** to download the rows you are looking at.

### Block an address by hand

1. Click **Add**. The **Add to Suppression List** dialog opens.
2. In **Email Addresses**, type or paste 1 address per line, or separate them with commas, for example `jane@example.com`.
3. Optional: in **Remarks (optional)**, say why, for example `Requested via support ticket #1234`.
4. Click **Add to List**. The dialog shows how many were added. If some fail, it lists them.

These addresses never receive campaigns, journeys or digests from this account.

### See the details of one address

1. Click **View Details** on a row. The **Suppression Details** dialog opens.
2. Read **Source Campaign**. It says **Manually added** for addresses you added.
3. Click **View Contact** to open the contact, if there is one.
4. Read **Record Status**, **Record Info** and **History**.

### Remove an address

1. Click **Delete** on the row and confirm.

!!! warning
    Unsubscribes, hard bounces and complaints are permanent compliance records and cannot be lifted. Only addresses you added by hand can be removed. A person who unsubscribed must sign up again themselves.

!!! note
    Rows are added or deleted. They cannot be edited.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Enter at least one email address** | The **Email Addresses** box is empty. | Type or paste an address. |
| **Invalid email address: …** | One entry is not a valid address. | Fix the address and try again. |
| **Added N of M. Failed: …** | Some addresses could not be added. | Read the failed list, fix them and add again. |
| **Export CSV** is greyed out. | The list is empty. | Add an address first. |
| **Skipped suppressed** appears in Send Logs. | The recipient is on this list. | Leave it blocked. The send is not charged. |

## Related

- [Read the send logs](read-send-logs.md)
- [Track results and handle unsubscribes and bounces](track-email-results.md)
- [Send an email campaign](send-email-campaign.md)
