---
title: Mark attendance on WhatsApp
description: Let staff check in, check out and take breaks by sending one word on WhatsApp. Turn it on, set the words, and read what HR records.
---

# Mark attendance on WhatsApp

Let staff mark attendance by sending one word, such as `in` or `out`, to your WhatsApp number. HR records the time against the person who owns that number and replies to them with the time.

## Before you start

- WhatsApp tasks is set up, so staff have a number to message. See [Set up WhatsApp tasks](../tasks/set-up-whatsapp-tasks.md).
- Your role has access to Task Manager. These settings are stored with WhatsApp tasks. Without it, the page says **No access to WhatsApp attendance**.
- Each staff member has their own WhatsApp number in **App User**. See [Add staff](add-staff.md).

## Steps

### Turn on WhatsApp attendance

1. In the sidebar, open **HR**, then click **WhatsApp attendance**. The **Attendance Settings** page opens. [VERIFY: HR entry name in the left rail]
2. Find the **WhatsApp attendance** card. Its badge reads **On**, **Off** or **Not set up**.
3. If the card says **Set up WhatsApp tasks first: attendance uses the same staff number.**, click **Open WhatsApp tasks settings** and finish that setup first.
4. Turn on the switch at the top right of the card. The message **WhatsApp attendance is on.** appears.
5. Click **Run setup**. The button reads **Setting up…** while it works.
6. Read the result under **Attendance set up**. It lists the attendance policy, how many staff were added, and the flows it made.

    [SCREENSHOT: WhatsApp attendance card with the switch on, the Attendance set up result and the Run setup again button]

7. If the message says **Review and publish the new draft**, click **Review and publish** beside each flow. Check the flow, then publish it.

Setup creates a **Default attendance policy** for your organisation if it has none. It never changes a policy you already have. You can click **Run setup again** at any time. It only adds what is missing.

### Fix staff who can't use it yet

If some staff cannot be matched, the page shows a **Staff who can't use it yet** card.

1. Read the reason under each name. For example, the person has no WhatsApp number, or shares one with someone else.
2. Click **Add number** or **Fix number** beside the name. The person's **Edit** window opens.
3. Enter their own number, then click **Save**.

## Words staff send

A message counts only when it is exactly one of the words. `in` works, but `in at the shop` does not. Case, extra spaces and a full stop, `!` or `?` at the end are ignored.

| Field on the page | What it records | Default words |
| --- | --- | --- |
| **In** | Check in | `in`, `check in`, `checkin`, `login`, `present`, `aa gaya`, `aa gayi`, `pahunch gaya`, `pahunch gayi` |
| **Out** | Check out | `out`, `check out`, `checkout`, `logout`, `bye`, `ja raha`, `ja rahi`, `nikal raha`, `nikal rahi` |
| **Lunch-break begins** | A lunch or a break begins | `lunch`, `break` |
| **Lunch-break ends** | The open break ends | `lunch end`, `break end`, `back` |

A start word that contains "lunch" records a **Lunch**. Any other start word records a **Break**.

### Use your own words

1. On the **Attendance Settings** page, find the **Punch words** card.
2. Under **In**, **Out**, **Lunch-break begins** or **Lunch-break ends**, type a word in **Add a word**.
3. Press Enter. The word appears as a chip and is saved straight away.
4. To remove a word, click the **×** on its chip.
5. To go back to the defaults, click **Use the default words**. The message **Back to the default words.** appears.

Each list holds up to 30 words, and each word up to 40 characters. Ohanvi refuses a word that:

- is already on another list, for example the same word for **In** and **Out**
- is already a task command, such as `2 done`
- contains a word WhatsApp keeps for opting in or out of messages

!!! note "Your own words need direct replies"
    Your own words work when WhatsApp tasks answers staff directly on your business number. If staff message a separate staff number, they use the default words. The card shows a warning when this applies. See [Set up WhatsApp tasks](../tasks/set-up-whatsapp-tasks.md). [VERIFY: name of the reply mode setting in WhatsApp tasks settings]

Staff can also ask for their attendance by chat. The **What staff can type** card lists those commands. See [Read attendance reports and the dashboard](attendance-reports-and-dashboard.md).

## What staff get back

HR replies to every word with the time it recorded.

| Staff sends | Reply |
| --- | --- |
| An **In** word | **Checked in at 9:32 AM.** |
| An **Out** word | **Checked out at 6:05 PM.** |
| `lunch` | **Lunch break started at 1:10 PM.** |
| `break` | **Break started at 4:00 PM.** |
| A **Lunch-break ends** word | **Lunch break ended at 1:40 PM.** or **Break ended at 4:15 PM.** |

When HR cannot record the word, it replies with the reason instead:

| Reply | Why |
| --- | --- |
| **You already checked in at 9:32 AM today.** | They sent an **In** word twice. The first time is kept. |
| **You haven't checked in today, so there's nothing to check out from. Please check in first.** | They sent an **Out** word with no check-in today. |
| **You haven't checked in today. Please check in first.** | They started a break before checking in. |
| **You've already checked out today.** | They started a break after checking out. |
| **You're already on lunch since 1:10 PM.** | A lunch or break is still open. |
| **You're not on a break right now.** | They sent a **Lunch-break ends** word with no open break. |
| **You can't check in today: you're on approved leave.** | The day is approved leave. A holiday or week off gets a similar reply. |
| **Your number isn't linked to a staff profile yet. Please ask your admin to add it.** | No active person has this WhatsApp number. |
| **Attendance isn't set up for you yet. Ask your admin to set it up in HR.** | Setup has not run, your organisation has no active attendance policy, or the person has no HR record. |

## What HR records

- **Check-in and check-out:** the time of each, saved on that day's attendance record with source **WhatsApp**. The **Source** column on the dashboard shows it.
- **Late:** a check-in after the shift start plus the policy's grace time counts as late. Without a shift start, lateness is not judged.
- **Status:** at check-out, HR sets the day's status from the time between check-in and check-out, against the shift's expected hours.
- **Breaks:** each lunch or break is saved with its start and end, so the dashboard can show **On break**. Breaks are recorded only. They don't change worked hours, the day's status or payroll.
- **Second check-out:** if staff send an **Out** word again the same day, the check-out time moves to the later time.
- **Open breaks at check-out:** checking out ends any break that is still open, at the check-out time.

WhatsApp replies never state worked hours, because breaks are not deducted from them.

### Night shifts

A break can end after midnight. Ohanvi treats a check-in from the last 20 hours as still open, so `back` after midnight ends the break that began before it.

[VERIFY: night-shift check-out after midnight. The check-out looks only for a record on the new date, so an **Out** word after midnight may get **You haven't checked in today…**]

## Turn WhatsApp attendance off

1. On the **Attendance Settings** page, turn off the switch on the **WhatsApp attendance** card. The message **WhatsApp attendance is off.** appears.
2. Read the note: **While this is off, staff messages are not recorded as attendance.**

Your attendance policy stays as it is. Staff words such as `in` become ordinary messages, and the evening summary leaves attendance out.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| The card badge stays **Not set up** with the switch on | Setup has not run, or no active attendance policy exists. | Click **Run setup**. |
| Staff get **Attendance isn't set up for you yet. Ask your admin to set it up in HR.** | Setup has not run, or the person has no HR record. | Click **Run setup again**. Check the **Staff who can't use it yet** card. |
| Staff get **Your number is on more than one staff profile (…)** | Two people share the sender's number. | Give each person their own number. See [Add staff](add-staff.md#one-whatsapp-number-one-person). |
| Staff get **Attendance on WhatsApp needs the HR licence. Please contact your admin.** | Your workspace has no HR licence. | Ask your workspace owner to add HR. |
| A word you added does nothing | The message had other words in it, or staff message a separate staff number. | Ask staff to send the word alone. With a separate staff number, use the default words. |
| A new flow stays in **Draft** | Setup kept your live version and made a new draft. | Click **Review and publish**, check the flow, then publish it. |

## Related

- [Add staff](add-staff.md)
- [Read attendance reports and the dashboard](attendance-reports-and-dashboard.md)
- [Set up WhatsApp tasks](../tasks/set-up-whatsapp-tasks.md)
- [Set your own command words](../tasks/set-your-own-command-words.md)
- [Reminders and the daily summary](../tasks/whatsapp-task-reminders-and-summary.md)
