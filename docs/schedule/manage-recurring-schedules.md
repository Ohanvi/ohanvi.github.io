---
title: Manage recurring schedules
description: Find every repeating schedule, check when it next runs, move its next send, and pause, stop or change the repeat rule in the WhatsApp Scheduler.
---

# Manage recurring schedules

A recurring schedule sends again and again, for example a WhatsApp broadcast that repeats every week. Use **Recurring** to see all of them in one list, then move, pause or stop a series. At the end you know what repeats, when, and how to end it.

## Before you start

- You can open **Schedule** in the left rail. See [View everything scheduled](view-schedule.md).
- You have at least 1 repeating item. Today, repeating schedules come from WhatsApp broadcasts that use the **Repeat** option (**Daily**, **Weekly**, **Monthly** or **Yearly**).

## Steps

### See what repeats

1. Open **Schedule** in the left rail, then select **Recurring**. The **Recurring** page opens in list view.
2. Click a series. The **Recurrence** field in the details shows the repeat rule, for example **WEEKLY** [VERIFY: displayed value format].
3. Check the status. A running series shows **Live** or **Scheduled**.

### Move the next send

1. With the series selected, click **Reschedule**.
2. Pick the new date and time. The message **Rescheduled.** appears.

### Pause, stop or change the repeat rule

The Schedule shows the series; the WhatsApp **Scheduler** controls it.

1. With the series selected, click **Edit**. The WhatsApp **Scheduler** opens.
2. Select the series. The panel shows **Repeats**, **Next send** and **Ends**.
3. Choose what to do:
    - Click **Pause** to hold the series. Click **Resume** to start it again.
    - Click **Stop** to end the series.
    - Change **Ends** to set a last date, or choose **No end date** to keep it running until you stop it.

You can also reach the WhatsApp **Scheduler** from **WhatsApp** → **Manage** → **Scheduler**.

### Set up a new repeating broadcast

1. Click **New schedule**, then **New in WhatsApp**.
2. In the broadcast's **When** field, choose **Schedule** and pick the first send time.
3. In **Repeat**, choose **Daily**, **Weekly**, **Monthly** or **Yearly**. The hint confirms the first send time and the repeat rule.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Nothing scheduled here** on **Recurring** | No item has a repeat rule other than **Once**. | Set **Repeat** on a WhatsApp broadcast, or check that the series was not stopped. |
| A series you stopped is still listed | A stopped series can stay on the Schedule with the status **Cancelled**. | Set the status filter to **Scheduled** to hide it. |
| **Cancel** on a recurring series removes the whole series | Cancelling a WhatsApp schedule stops the job. There is no "skip one" option. | To skip a single send, click **Reschedule** and move the next send instead. |
| **Could not reschedule.** | The new time was refused by WhatsApp scheduling. | Pick a time in the future and try again. |

## Related

- [View everything scheduled](view-schedule.md)
- [Reschedule, cancel or delete a scheduled item](reschedule-cancel-delete.md)
- [Create a WhatsApp template](../whatsapp/create-message-template.md)

!!! note "Screenshots to add"
    - After step 2 of See what repeats — **Recurring** list with a series selected and **Recurrence** visible
    - After step 2 of Pause, stop or change the repeat rule — WhatsApp **Scheduler** panel with **Repeats**, **Next send**, **Ends**
    - After step 3 of Set up a new repeating broadcast — the **Repeat** selector on a broadcast
