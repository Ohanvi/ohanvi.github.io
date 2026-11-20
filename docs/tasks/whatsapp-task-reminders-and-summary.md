---
title: Set up task reminders and the daily summary
description: Choose when staff get WhatsApp reminders and follow-ups, who gets the evening task report, and how the 24-hour window decides between text and templates.
---

# Set up task reminders and the daily summary

Decide when WhatsApp Tasks reminds staff about their work, how often it follows up, and who gets the evening report. At the end, staff hear about due and late tasks on WhatsApp, and owners and managers get a short summary of the day.

## Before you start

- WhatsApp Tasks is set up and its message templates are approved. See [Set up WhatsApp Tasks](set-up-whatsapp-tasks.md).
- You are the account owner, a Super Admin or a System Admin.
- Tasks have a due time. A task without one gets no reminder and is never late.
- The **Timezone** under **More settings → Times and replies** is your team's. Every time below follows it.

## What staff and managers get

| Message | Who gets it | When |
| --- | --- | --- |
| **Task due soon** | The assignee | **Remind before due (minutes)** before the due time. Default 60. |
| **Reminder** | The person who set it | At the exact time they asked for. |
| **Still pending (follow-up 1 of 3)** | The assignee | Every few hours after the reminder, if you turn follow-ups on. |
| **You have … overdue tasks** | Each person with late tasks | Once a day at the **Morning reminder of late tasks** time. Default 10:00. |
| **Team tasks for …** | Everyone marked **Gets the evening report** | At the **Evening report** time. Default 19:00. |
| **New Task from …** | The assignee | As soon as the task is given. |
| **Task updated by …** or **Task cancelled by …** | The assignee | When someone else changes or cancels their task. |
| **… completed: …** | The person who gave the task | When someone else finishes it. |

## Steps

### Set the reminder before due

1. In the left panel, under **Task**, click **WhatsApp tasks**, then click **Settings**.
2. Open **More settings** and go to **Times and replies**.
3. In **Remind before due (minutes)**, type a number from 0 to 1440. It saves by itself.

The reminder card shows the task and its due time, with the buttons **In progress** and **Done**.

- A task given less than this many minutes before it is due gets its reminder at the due time.
- A task whose due time has already passed gets no reminder. The morning list covers it.
- Moving the due date or giving the task to someone else sets a fresh reminder.

### Turn on follow-ups

Follow-ups are off until you set them. They remind the assignee again while a task stays open after its first reminder.

1. Under **More settings → Follow-ups & quiet hours**, type a number of hours in **Follow up every (hours)**, from 1 to 72.
2. In **At most (follow-ups per task)**, type a number from 1 to 20. The default is 3.
3. Optional: set **Quiet hours from** and **Quiet hours until**. No follow-ups go out between these times. The range may cross midnight.

    [SCREENSHOT: Follow-ups & quiet hours with Follow up every, At most and the quiet hours rows]

A follow-up waits during quiet hours and goes out at the next check after they end. Follow-ups stop when the task is done or cancelled. A task in **Paused**, **Discuss** or a column your team added gets none. To turn follow-ups off, clear **Follow up every (hours)**.

### Set the morning list of late tasks

1. In the **Daily messages** card, find **Morning reminder of late tasks**.
2. Click the time and pick a new one.

Each person with late tasks gets one numbered list of them at this time. They can reply `1 done` to the list directly. This message has no off switch. A task appears in it once a day at most.

### Set the evening report

1. In the **Daily messages** card, turn **Evening report** on or off.
2. Click the time beside it and pick when it goes out.
3. Under **Staff on WhatsApp**, click the pencil beside each person who should get it. Turn on **Gets the evening report**, then click **Save**. Their row shows the badge **Gets the evening report**.

No one gets the evening report until you turn this on for at least one person.

The report lists each person as **Ravi: 3/5 done**, with how many are overdue, and a **Total** line. Admins and managers can ask for the same numbers at any time by sending `team report`.

If WhatsApp attendance is on, owners also get the day's attendance in the evening. See [Mark attendance on WhatsApp](../hr/whatsapp-attendance.md).

### Add extra reports

1. Under **More settings → Extra reports**, click **Add report**. The **Add summary** window opens.
2. Fill in:
    - **Name**: shown at the top of the message, for example "Weekly review".
    - **Send at**: the time.
    - **Days**: none picked means every day.
    - **Send to**: **Everyone who gets the evening report**, **Admins**, or **Each person, their own tasks**.
    - **Covers**: **Today** or **This week**.
3. Click **Add**.

You can keep up to 10 extra reports. Use the switch on a report to pause it, the pencil to edit it, and the bin to remove it. With **Each person, their own tasks**, each person gets their done and open tasks, ending with **Send *my tasks* to update them.**

## Notices about a task

- **New task:** the assignee gets a card with **Begin** and **Done**. If the task was given by chat, the giver gets **Task Created & Assigned** with a **Cancel** button.
- **Changed:** when the due date, title or priority changes, or the task is cancelled, the assignee gets the change, such as **due date moved to …**. They get nothing if they made the change themselves.
- **Given to someone else:** the new assignee gets the task card. The previous assignee is told who it went to.
- **Done:** the person who gave the task gets a notice, unless they finished it themselves.

A task someone gives themselves sends no notices.

## The 24-hour window and templates

WhatsApp lets a business send free messages to a person only within 24 hours of that person's last message to the number. Ohanvi counts 23 hours, to leave a margin.

- **Inside the window:** staff get the full message in their reply language, with buttons.
- **Outside the window:** they get the matching approved template instead. Templates are in English, whatever the reply language.
- **Before a template is approved:** its message reaches only staff who wrote in the last 24 hours.

Every message a staff member sends to the number opens the window again. Ask staff to send `hi`, or any command, at the start of the day.

| Template | Used for | Buttons |
| --- | --- | --- |
| `task_assigned_v2` | A new task | **Begin**, **Done** |
| `task_reminder_v2` | Reminders, follow-ups and the morning list of late tasks | **In progress**, **Done** |
| `task_changed` | A change notice | None |
| `task_done` | A done notice to the person who gave the task | None |
| `task_digest` | The evening report and extra reports | None |

Setup sends these to Meta for the staff number. You see their status under **Is WhatsApp Tasks working?** as **… of … message templates approved**. Older teams may also see `task_assigned` and `task_reminder`. The `_v2` versions replace them once Meta approves them.

!!! note "Changing the staff number"
    When you change the number staff message, the templates go to Meta again for the new number. Every staff member's 24 hours start over. Until they write to the new number, they get task messages only through approved templates.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| A staff member got no reminder | The task has no due time, or its due time had already passed when it was given. | Add a due time. Late tasks appear in the morning list. |
| Nobody gets the evening report | No one is marked **Gets the evening report**, or **Evening report** is off. | Turn on **Gets the evening report** for the right people and check the switch. |
| Messages arrive at the wrong hour | The **Timezone** is not your team's. | Change **Timezone** under **More settings → Times and replies**. |
| Follow-ups stopped on an open task | The task is in **Paused**, **Discuss** or a team column, or it reached the **At most** limit. | Move it back to **To do** or **In progress**, or raise **At most (follow-ups per task)**. |
| Some staff miss new-task messages | Templates are still waiting for Meta, and those staff have not written in 24 hours. | Ask them to send `hi`. Click **Check again** under **Is WhatsApp Tasks working?** later. |
| A template shows **Rejected** | Meta refused it. | Click **Fix** and correct it under **WhatsApp → Templates**. See [Create a WhatsApp message template](../whatsapp/create-message-template.md). |

## Related

- [Set up WhatsApp Tasks](set-up-whatsapp-tasks.md)
- [Use WhatsApp task commands](use-whatsapp-task-commands.md)
- [Create a WhatsApp message template](../whatsapp/create-message-template.md)
- [Mark attendance on WhatsApp](../hr/whatsapp-attendance.md)
