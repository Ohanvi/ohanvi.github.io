---
title: See your scheduled email campaigns
description: Open the Email schedule to see every campaign waiting to send, sending now or already sent.
---

# See your scheduled email campaigns

Use the **Email** view to see every scheduled email campaign in one calendar or list. At the end you can check when each campaign sends and move or stop it before it goes out.

## Before you start

- You can see **Schedule** in the left rail. By default only the workspace's Super Admin role has it. Ask your admin if it is missing.
- A campaign has a scheduled time. See [Send an email campaign](../email/send-email-campaign.md).

## Steps

### Open the Email schedule

1. Open **Schedule** in the left rail, then select **Email**. The page title reads **Email schedule**.
2. The page opens in **Calendar** view for the current month. The channel chips are hidden, because the page is already limited to Email.
3. Click a day to see its items. Click **List** to see them by time under day headings.
4. Click an item. Its details open on the right: **When**, **Recurrence**, **Audience / with**, **Owner**, **Channel** and **Type**.

### Read what each type means

The **Type** shows what kind of item it is.

| Type | What it is |
| --- | --- |
| **Regular** | An ordinary campaign you write and send. |
| **Rss** | A campaign built from an RSS feed. |

The **Audience / with** line shows the audience of the campaign. The **Channel** field shows the email channel it sends on.

### Read the status

| Status | Meaning |
| --- | --- |
| **Draft** | The campaign is **Draft**, **Pending review** or **Rejected**. |
| **Scheduled** | The campaign is **Approved** or **Scheduled** and waits for its time. |
| **Live** | The campaign is sending now. |
| **Sent** | The campaign went out. |
| **Failed** | The send did not go through. |
| **Cancelled** | Called off. It does not send. |

### Change an item

1. Click **Reschedule** to pick a new date and time. See [Reschedule, cancel or delete a scheduled item](reschedule-cancel-delete.md).
2. Click **Edit** to open the Email campaigns screen. See [Send an email campaign](../email/send-email-campaign.md).
3. Click **Cancel** to call it off. The campaign is cancelled and does not send.
4. Click **Delete** to remove it from Email.

### Narrow the view

1. Click **Everyone's schedule** and choose **My schedule** to see only items you own.
2. Click **Any status** and choose **Scheduled**, **Draft**, **Sent** or **Cancelled**.

### Add something new

1. Click **New schedule**, then choose **New in Email**. Ohanvi opens the Email campaigns screen, where you create the item.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Nothing scheduled here** | No campaign has a scheduled time, or a filter hides it. | Open the campaign in Email and set a send time. |
| A campaign is missing | A campaign with no scheduled time is not shown on the Schedule. | Give it a send time. |
| **Could not cancel.** | The campaign has already sent or your role cannot change it. | Check the status. Ask your admin for Email access. |

## Related

- [View everything scheduled](view-schedule.md)
- [Reschedule, cancel or delete a scheduled item](reschedule-cancel-delete.md)
- [Send an email campaign](../email/send-email-campaign.md)
