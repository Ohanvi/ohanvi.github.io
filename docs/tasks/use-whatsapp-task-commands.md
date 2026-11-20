---
title: Use WhatsApp task commands
description: What staff can type or tap on WhatsApp to list, begin, finish, give and remind tasks, send photo proof and ask for documents.
---

# Use WhatsApp task commands

Run your tasks from WhatsApp: list them, begin and finish them, give work to others, set reminders and send photo proof. Share this page with your staff. Each reply also updates the **WhatsApp Tasks** board.

## Before you start

- Your admin has set up WhatsApp Tasks. See [Set up WhatsApp Tasks](set-up-whatsapp-tasks.md).
- You are on the staff list with your WhatsApp number. See [Add staff](../hr/add-staff.md).
- You have the number your team uses for tasks saved in your phone.
- You have sent `hi` to that number once, so it can send you messages freely.

## How your message is read

Ohanvi checks a message in this order and stops at the first match:

1. A button you tapped, or a reply to a task card.
2. A built-in command, such as `2 done` or `my tasks`.
3. Your team's own words, such as `2 khatam`. See [Set your own command words](set-your-own-command-words.md).
4. Anything else goes to the task assistant (AI), if AI is on for your team.

Capital letters do not matter. A full stop or `!` at the end is ignored. A `?` at the end turns a change into a question, so `2 done?` does not finish the task.

Send `help` (or `menu`, or `?`) at any time. The reply lists the commands, your team's own words and the buttons **My tasks** and **Today**.

## Steps

### See your tasks

1. Send `my tasks`. The reply is **Task List for …:** with each open task numbered, its status and due time.
2. Read the line **Progress: …% (… Done)** and the footer **Reply *1 done* or *1 begin* to update a task.**

Other lists:

| Send | You get |
| --- | --- |
| `today tasks` (or `today`, `aaj`) | Today's tasks. |
| `completed tasks` | What you finished in the last 7 days. |
| `personal tasks` | Tasks you gave yourself. |
| `my reminders` | Your coming reminders. |
| `tasks #Project` | Your tasks in one project, for example `tasks #Website`. |

The numbers belong to the last list you got. They work for 12 hours by default. Your admin can change this.

### Update a task by its number

1. Send `my tasks` to see the numbers.
2. Send the number and a word, for example `2 done`.

| Send | What happens |
| --- | --- |
| `2 begin` | Task 2 is in progress. `2 in progress` and `2 shuru` work too. |
| `2 done` | Task 2 is done. `2 complete` and `2 ho gaya` work too. You get the updated list back. |
| `2 paused` | Task 2 moves to **Paused** on the board. |
| `2 discuss` | Task 2 moves to **Discuss** on the board. |
| `2 cancel` | Task 2 is cancelled. Only the person who gave it, or an admin, can cancel. |
| `2 #Website` | Task 2 is added to the **Website** project. |

The number plus any board column name works too, for example `2 review` for a column your team named **Review**.

### Use the buttons on a task card

When someone gives you a task, you get a card such as **New Task from …** with the task, notes and due time.

1. Tap **Begin** when you pick up the work. In Hindi or Hinglish, the button reads in that language.
2. Tap **Done** when it is finished. The reply is **Task marked as COMPLETED** with the task name.

    [SCREENSHOT: WhatsApp New Task card with the Begin and Done buttons]

You can also swipe to reply to a card and type `done` or `begin`. That acts on the task in the card, without a number. A reminder card has the buttons **In progress** and **Done**.

### Add a task for yourself or a reminder

1. Send `add my task call the supplier`. The task goes on your personal list.
2. Send `remind me at 5 pm to call the client`. The reply is **Reminder Scheduled** with the time. The reminder arrives at that exact time.

A reminder needs a time. Times like `5 pm`, `5:30 pm tomorrow`, `monday 11 am` and `kal shaam 5 baje` work. Each reply has a **Cancel** button if you change your mind.

### Give a task to someone

1. Send `assign fix the printer to Rahul by 5 pm`. The time is optional.
2. Read the reply **Task Created & Assigned** with **To**, **Task** and **Due**. Rahul gets the task card.

With AI on, you can write it as you would say it: `Rahul, fix the printer by 5 pm` or `Rahul ko printer theek karna hai kal tak`. Write `urgent` to mark it urgent.

- For a due time, `by 5 pm today`, `by tomorrow 11 am` and `by EOD` work. A day with no hour means 6 PM that day.
- If 2 people match the name, the reply asks you to send it again with the full name.
- If your team turned on **Confirm before assigning**, you first get a draft with **Confirm**, **Edit** and **Cancel**. A draft more than a day old is dropped.
- If your team allows only admins and managers to give tasks, you can still add tasks for yourself.

### Change a task by chat (AI on)

Send the number and the change in your own words, for example `2 kal tak kar do` (move task 2 to tomorrow) or `3 Ravi ko de do` (give task 3 to Ravi). Only the person who gave the task, or an admin, can change it. The assignee gets a notice.

### Send a photo or file as proof

1. Swipe to reply to the task card, and attach a photo, video or document.
2. Optional: type `done` as the caption to attach it and finish the task in one go.
3. Read the reply **Photo added to "…".**

If you send a file without replying to a card, it goes to your only task that is in progress. If you have none or several, the reply asks **Which task is this for?** Voice notes and stickers are not saved as proof.

If your team turned on **Photo proof to finish**, `done` works only after a photo or file is attached.

### Ask for a document (AI on)

Send the document's name, for example `send the GST certificate` or `GST certificate bhejo`. If your admin has shared the file, it arrives in the chat. If several files match, the reply lists them so you can pick one.

### Repeat a task (AI on)

Send `every Monday stock check` or `har Monday stock check`. The reply confirms the schedule and the first date. To end it, say `turn off` with its name, for example `turn off Monday stock check`. Your admin can also manage these in the **Recurring** tab.

## Commands for admins and managers

Admins can use these for everyone. A manager can use them for the people below them in HR.

| Send | You get |
| --- | --- |
| `team report` | Today's numbers per person. |
| `pending team tasks` | Your team's open tasks. |
| `completed team tasks` | Your team's finished tasks. |
| `@Ravi tasks` | One person's tasks. They are not messaged. |
| `@Ravi 2 cancel` | Cancels task 2 on Ravi's list. |
| `delete task 2 @Ravi` | Deletes task 2 on Ravi's list. It stays on the board under **Cancelled**. |
| `projects` | All projects. |
| `create project Website Redesign` | A new project. The reply gives its tag without spaces, `#WebsiteRedesign`. |

If attendance on WhatsApp is on, attendance commands work too. See [Mark attendance on WhatsApp](../hr/whatsapp-attendance.md).

## When AI is off

Commands, buttons, card replies and photos still work. Typed `assign … to … by …` and `remind me at … to …` still work. Any other sentence gets **AI is turned off for your team, so I understand only these commands:** followed by the list. Documents by chat and repeating tasks by chat need AI.

## Messages from people not on the staff list

- **Separate staff number:** someone not on the list gets **This WhatsApp number is for staff tasks only. Please contact us on our main number.** at most once a day. Your admin can change this text.
- **Business number (Direct):** customers keep getting your chatbot. Tasks answers only people on the staff list.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Send *my tasks* first to see the numbers.** | You have no recent list, or it is older than the time limit. | Send `my tasks`, then the number. |
| **There is no task 5 in your last list.** | The number is not on your last list. | Send `my tasks` and use a number from it. |
| **That task isn't yours.** | Only the assignee, the person who gave it, their manager or an admin can change a task. | Send `my tasks` and pick one of yours. |
| **Send a photo of the work first** | Your team requires photo proof to finish. | Reply to the task card with a photo, with `done` as the caption. |
| **I couldn't find *…* in the staff list.** | No one on the staff list has that name. | Check the spelling, or ask your admin to add the person. |
| **Here only admins and managers give tasks to others** | Your team limits who can give tasks. | Add it as your own task, or ask your manager. |

## Related

- [Set up WhatsApp Tasks](set-up-whatsapp-tasks.md)
- [Set your own command words](set-your-own-command-words.md)
- [Set up task reminders and the daily summary](whatsapp-task-reminders-and-summary.md)
- [Move tasks across the board](move-tasks-on-board.md)
