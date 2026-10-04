---
title: See your scheduled WhatsApp messages
description: Open the WhatsApp schedule to see every broadcast, message, reply and reminder waiting to go out on WhatsApp.
---

# See your scheduled WhatsApp messages

Use the **WhatsApp** view to see everything scheduled on WhatsApp in one calendar or list: broadcasts, single messages, replies, cart reminders and appointment reminders. At the end you can check, move or stop any of them.

## Before you start

- You can see **Schedule** in the left rail. By default only the workspace's Super Admin role has it. Ask your admin if it is missing.
- Something is scheduled in WhatsApp, for example a broadcast. See [Send a broadcast campaign](../whatsapp/send-broadcast-campaign.md).

## Steps

### Open the WhatsApp schedule

1. Open **Schedule** in the left rail, then select **WhatsApp**. The page title reads **WhatsApp schedule**.
2. The page opens in **Calendar** view for the current month. The channel chips are hidden, because the page is already limited to WhatsApp.
3. Click a day to see its items. Click **List** to see them by time under day headings.
4. Click an item. Its details open on the right: **When**, **Recurrence**, **Audience / with**, **Owner**, **Channel** and **Type**.

### Read what each type means

The **Type** shows what kind of item it is.

| Type | What it is |
| --- | --- |
| **Broadcast** | A campaign send to a group of contacts. |
| **Message** | One message scheduled to one person. |
| **Reply** | A reply scheduled to a customer. |
| **Cart nudge** | An abandoned-cart reminder. |
| **Appointment reminder** | A reminder sent before a booking. It is created by your appointment reminder rules. |
| **Bot step timeout** | A chatbot step that waits for a reply and moves the chat on when none comes. |

The **Audience / with** line shows the phone number the message goes to.

### Read the status

| Status | Meaning |
| --- | --- |
| **Scheduled** | Waiting for its time. |
| **Live** | Sending now. |
| **Sent** | Went out. |
| **Paused** | Held in the WhatsApp **Scheduler**. |
| **Failed** | The send did not go through. |
| **Cancelled** | Called off. The record is kept. |

### Change an item

1. Click **Reschedule** to pick a new date and time. See [Reschedule, cancel or delete a scheduled item](reschedule-cancel-delete.md).
2. Click **Edit** to open the WhatsApp **Scheduler**. See [Check scheduled messages and delivery logs](../whatsapp/scheduler-and-delivery-logs.md).
3. Click **Cancel** to call it off. The scheduled job is stopped and leaves the WhatsApp **Scheduler**.
4. Click **Delete** to remove it from WhatsApp.

### Narrow the view

1. Click **Everyone's schedule** and choose **My schedule** to see only items you own.
2. Click **Any status** and choose **Scheduled**, **Draft**, **Sent** or **Cancelled**.

### Add something new

1. Click **New schedule**, then choose **New in WhatsApp**. Ohanvi opens the WhatsApp **Scheduler**, where you create the item.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Nothing scheduled here** | No WhatsApp item matches the owner or status filter. | Choose **Everyone's schedule** and **Any status**. |
| An item is **Failed** | The send did not go through, for example the template was not approved. | Open the item in the WhatsApp **Scheduler** to see why, then send it again. |
| A repeating broadcast shows only once | The calendar shows the next send. | Open **Recurring** to see the whole series. |
| **Could not reschedule.** | The new time was refused. | Pick another time. |

## Related

- [View everything scheduled](view-schedule.md)
- [Reschedule, cancel or delete a scheduled item](reschedule-cancel-delete.md)
- [Check scheduled messages and delivery logs](../whatsapp/scheduler-and-delivery-logs.md)
- [Manage recurring schedules](manage-recurring-schedules.md)
