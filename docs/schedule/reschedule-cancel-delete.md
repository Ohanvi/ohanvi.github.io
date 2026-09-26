---
title: Reschedule, cancel or delete a scheduled item
description: Move a scheduled message, activity, campaign, post or appointment to a new time, open it for editing, call it off, or delete it from the Schedule.
---

# Reschedule, cancel or delete a scheduled item

Change a scheduled item without leaving the **Schedule** section. You can move it to a new date and time, open it in its own module to edit the content, cancel it, or delete it. The change is made on the real item in WhatsApp, CRM, Email, Social or Appointments, not only on the Schedule.

## Before you start

- You can open **Schedule** in the left rail. See [View everything scheduled](view-schedule.md).
- Your role can change the item in its own module. For example, to cancel an email campaign you need Email Marketing access.
- Your browser window is wide enough to show the details pane. The action buttons live there.

## Steps

### Open the item

1. Open **Schedule** in the left rail, then select **All schedules**.
2. Click **List**, then click the item. Its details open on the right. In **Calendar** view, click the item's chip instead; the page switches to **List** with the item selected.
3. Below the details you see four buttons: **Reschedule**, **Edit**, **Cancel** and **Delete**.

### Reschedule to a new time

1. Click **Reschedule**. A date picker opens.
2. Pick the new date and click **OK** [VERIFY: exact label]. A time picker opens.
3. Pick the new time and click **OK** [VERIFY: exact label]. The message **Rescheduled.** appears and the item moves on the Schedule.

The owning module re-checks the new time. For an appointment, the new time must be free and inside working hours, and reminders move with it. For a recurring WhatsApp schedule, this changes the time of the next send.

### Edit the content

1. Click **Edit**. The message **Opening WhatsApp…** (or the item's channel) appears.
2. Ohanvi opens the module where the item was created: the WhatsApp **Scheduler**, CRM activities, Email campaigns, Social publishing or **Appointments**.
3. Find the item there and change its content.

### Cancel an item

1. Click **Cancel**. The **Cancel schedule** dialog opens and says the item is cancelled in its channel and the record stays.
2. Click **Cancel it**. The message **Cancelled.** appears and the status changes to **Cancelled**.

What cancel does in each module:

| Channel | Result |
| --- | --- |
| **WhatsApp** | The scheduled job is stopped and removed from the WhatsApp **Scheduler**. |
| **CRM** | The activity's status is set to cancelled. |
| **Email** | The campaign is cancelled and does not send. |
| **Social** | The scheduled post is cancelled. |
| **Appointments** | The booking is set to **Cancelled** and its reminders are removed. |

### Delete an item

!!! warning "Delete removes the item from its module"
    Delete also removes the item from WhatsApp, CRM, Email or Social, not only from the Schedule. Appointments are never deleted: **Delete** cancels the booking instead.

1. Click **Delete**. The **Delete schedule** dialog opens.
2. Click **Delete**. The message **Deleted.** appears and the item leaves the Schedule.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Could not reschedule.** | The module refused the new time. For an appointment the time may be taken, outside working hours, or outside your booking rules. | Pick another time. For appointments, use **Move** on the **Appointments** page, which suggests free times. See [Manage appointments](../appointments/index.md). |
| **Could not cancel.** | The item has already been sent, completed or cancelled, or your role cannot change it in its module. | Check the status. Ask your admin for access to the module that owns the item. |
| **Could not delete.** | Your role cannot delete in the owning module, or the item no longer exists. | Refresh the page. Ask your admin for delete access in that module. |
| **Reschedule**, **Edit**, **Cancel** and **Delete** are not visible | The details pane is hidden on narrow windows. | Widen the browser window. |
| The item still shows the old time after **Rescheduled.** | The page has not refreshed. | Open another panel item and come back, or reload the page. |

## Related

- [View everything scheduled](view-schedule.md)
- [Manage recurring schedules](manage-recurring-schedules.md)
- [Appointments](../appointments/index.md)
- [CRM](../crm/index.md)

!!! note "Screenshots to add"
    - After step 3 of Open the item — details pane with **Reschedule**, **Edit**, **Cancel** and **Delete**
    - After step 1 of Reschedule to a new time — the date picker
    - After step 1 of Cancel an item — the **Cancel schedule** dialog
    - After step 1 of Delete an item — the **Delete schedule** dialog
