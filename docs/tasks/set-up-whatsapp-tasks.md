---
title: Set up WhatsApp Tasks
description: Pick the WhatsApp number your staff message, add staff, get the task message templates approved, and choose what the AI handles.
---

# Set up WhatsApp Tasks

Connect a WhatsApp number to Tasks so your staff can get, begin and finish their tasks by chatting with it. At the end, staff on your list get new tasks on WhatsApp, and their replies update the **WhatsApp Tasks** board.

## Before you start

- You are the account owner, a Super Admin or a System Admin. Everyone else sees the settings read-only, with **Only a Super Admin or System Admin can change these settings.**
- Your role can open WhatsApp tasks. Without it, the **WhatsApp tasks** row is hidden. See [Manage team members, roles and permissions](../settings/roles-and-permissions.md).
- A WhatsApp number is connected. See [Connect your WhatsApp number](../whatsapp/connect-whatsapp-number.md).
- You know each staff member's WhatsApp number. You add them in **Settings → App User**. See [Add staff](../hr/add-staff.md).

## Choose how staff messages arrive

Staff can reach Tasks in 2 ways. You pick one under **More settings → Number options**.

| Option | How it works | Choose it when |
| --- | --- | --- |
| **Use a separate number only for staff** | Staff write to a number used only for tasks. Ready-made automations read every message and answer it. This is where setup starts. | You have a spare number, or you want to change how messages are handled in **Automations**. |
| **Staff message this number** | Staff write to your normal business number. Tasks answers people on your staff list. Everyone else keeps getting your chatbot. | You want one number for customers and staff. |

The trade-off in plain terms:

- **Separate number:** every message to it is read as a task command, so customers must not use it. The number must be set to **Automation flows only**. You publish the task automations once, and you can edit them like any other flow. Someone not on your staff list gets a short reply, at most once a day.
- **Your business number (Direct):** customers and staff share the number. Tasks replies using the login of the admin who turned it on. If that admin is switched off, replies stop until another admin clicks **Use my login**. The ready-made **Staff assistant** automation is paused, because Tasks answers staff itself.

Either way, task messages to someone who has not written in the last 24 hours go out as approved WhatsApp templates. See [The 24-hour window and templates](whatsapp-task-reminders-and-summary.md#the-24-hour-window-and-templates).

## Steps

### Open the settings

1. In the left panel, under **Task**, click **WhatsApp tasks**. The **WhatsApp tasks** page opens with the tabs **Today**, **Analytics**, **Recurring** and **Settings**.
2. Click **Settings**. The **Is WhatsApp Tasks working?** card is at the top. It lists what is ready and what needs action.

Every field on this tab saves itself. A heading shows **Saving…**, then **Saved**.

### Run setup

1. In **Is WhatsApp Tasks working?**, beside **Pick the WhatsApp number your staff will message**, click **Set up**. The **Set up WhatsApp tasks** window opens.
2. Under **Staff WhatsApp number**, pick the number.
3. Click **Set up**. Ohanvi creates the task assistant, the **WhatsApp Tasks** board and the message templates. A message says **WhatsApp tasks are set up. Finish under More settings → Number options.**

    [SCREENSHOT: Set up WhatsApp tasks window with the Staff WhatsApp number list open]

If you plan to use your business number (Direct), you still run setup first. **Staff message this number** stays locked with **Set up WhatsApp tasks first.** until you do. [VERIFY: which number to pick in the setup window when the team will switch to Direct right after]

### Finish a separate staff number

1. Open **WhatsApp → Configuration**, open the staff number and set **Who answers** to **Automation flows only**. Until you do, the settings show **Then set this number to "Automation flows only"…**
2. Back on the **Settings** tab, open **More settings**. Scroll to **Number options**.
3. Under **Task automations**, click **Publish all**. The number in brackets counts the automations not yet published, for example **Publish all (6)**. A message says **Published 6 task automations**.
4. Check that each automation shows **Live**.

Setup creates these automations:

| Automation | What it sends |
| --- | --- |
| **WhatsApp tasks: staff assistant** | Answers every staff message: commands, buttons, photos and free text. |
| **WhatsApp tasks: reminders** | Reminders before a task is due, follow-ups and the morning list of late tasks. |
| **WhatsApp tasks: daily summary for owners** | The evening report. |
| **WhatsApp tasks: tell the assignee** | The new task card, with **Begin** and **Done** buttons. |
| **WhatsApp tasks: tell the creator when it's done** | A notice to the person who gave the task. |
| **WhatsApp tasks: change notice** | A notice to the assignee when the task is changed. |

If you edit an automation later, it shows **Changes waiting**. The live version keeps running until you publish again.

These automations are ordinary flows. You can open and change them in **Flows**, or add your own staff commands next to them. See [Use Tasks and HR steps in flows](../flows/use-tasks-and-hr-steps-in-flows.md).

!!! warning "Running setup again"
    Setup rewrites **WhatsApp tasks: staff assistant** while it is still a draft. If it is live, setup adds a new draft version instead, and the live one keeps running. Check that draft before you publish it, or your own edits to the flow are replaced.

### Or switch to your business number (Direct)

1. Open **More settings → Number options**.
2. Click **Staff message this number**.
3. Under **Business number staff write to**, pick the number. Numbers set to **Automation flows only** are not offered.
4. Read the confirmation **Staff message …?** and click **Switch**. The task templates are sent to Meta again for this number.
5. Check the line **Replies use …'s login**. If it names someone who has left, click **Use my login**.

To go back, click **Use a separate number only for staff**, then **Switch**. Staff get no reply on the separate number until its automations are live.

### Add staff

1. In the **Staff on WhatsApp** card, click **Add staff**. **Settings → App User** opens. Add each person with their WhatsApp number. See [Add staff](../hr/add-staff.md).
2. Come back to **Settings**. Each person appears under **Staff on WhatsApp** with their number.
3. Click the pencil (**Edit task settings**) beside a person to set:
    - **Other names**: what others call them in messages, for example "Ravi ji". Press Enter after each one.
    - **Reply language**: blank uses the team's language under **Daily messages**.
    - **Admin**: can see the team list and cancel anyone's task.
    - **Gets the evening report**: receives the daily summary.
4. Click **Save**.
5. Ask each person to send `hi` to the number once. Their row then shows **Has messaged ✓**.

    [SCREENSHOT: Staff on WhatsApp card with the Admin, Manager and Gets the evening report badges]

A person shows **Manager** when someone reports to them in HR. Managers can use team commands for the people below them.

### Check the message templates

1. In **Is WhatsApp Tasks working?**, read the line **… of … message templates approved**.
2. If some are waiting, Meta usually answers within a few hours. Click **Check again** later.
3. If one needs a fix, click **Fix**. **WhatsApp → Templates** opens. See [Create a WhatsApp message template](../whatsapp/create-message-template.md).

Under **More settings → Number options**, **Repair setup** resubmits templates that were never sent. It also re-creates anything missing. Your tasks and settings stay.

## AI on or off

Short commands, buttons and photos never use AI. Free-text messages do.

| | AI on | AI off |
| --- | --- | --- |
| `2 done`, `my tasks`, buttons | Work | Work |
| `assign fix the printer to Rahul by 5 pm` | Works | Works |
| "Rahul, fix the printer by 5 pm" (free text) | Read by the task assistant | Staff get **AI is turned off for your team, so I understand only these commands:** and the list |
| "Send the GST certificate" (a document) | Sent if it is shared with the assistant | Not available |
| Hindi or Hinglish sentences | Understood | Only the commands and your own words |

AI is switched on or off for the whole team under **Settings → Features → AI**. Only an administrator can change it.

## Attendance on WhatsApp

Staff can also mark attendance on the same number. You switch it on in **HR → Attendance → Settings**, in the **WhatsApp attendance** card. It needs WhatsApp Tasks set up first. See [Mark attendance on WhatsApp](../hr/whatsapp-attendance.md).

## Other settings

These sit under **More settings**, except **Daily messages**.

| Setting | Default | What it does |
| --- | --- | --- |
| **Confirm before assigning** | **Off: assign straight away** | With **When assigning to someone else** or **Always**, a task given by chat first comes back with **Confirm**, **Edit** and **Cancel** buttons. |
| **Who can give tasks** | **Everyone** | With **Admins and managers**, a manager gives tasks only to the people below them in HR. Anyone can always add a task for themselves. |
| **Photo proof to finish** | Off | A task can be marked done by chat only after a photo or file is sent for it. |
| **Documents staff can ask for** | None | Files from Knowledge Base that staff can ask for by chat. |
| **Timezone** | India (IST) · Asia/Kolkata | Due times, "today" and the daily messages follow this clock. |
| **Reply to unknown numbers** | Default text | Sent at most once a day to a number not on your staff list (separate number only). |
| **List numbers like "2 done" work for (hours)** | 12 | How long a number from the last list stays valid. 1 to 48. |

Reminders, follow-ups and reports are covered in [Set up task reminders and the daily summary](whatsapp-task-reminders-and-summary.md).

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Staff messages on the separate number get no reply until the automations are live** | The task automations are still drafts. | Open **More settings → Number options** and click **Publish all**. |
| **Staff messages don't reach Tasks yet** with **Then set this number to "Automation flows only"…** | The separate number still answers with the chatbot or the inbox. | Set **Who answers** to **Automation flows only** in **WhatsApp → Configuration**. |
| **Staff messages on this number don't reach Tasks** | Direct is on, but the number is set to **Automation flows only**. | Change who answers it in **WhatsApp → Configuration**, or pick another number. |
| **The login Tasks replies with is switched off** | The admin whose login sends replies was deactivated. | An active admin opens **More settings → Number options** and clicks **Use my login**. |
| **… people have no WhatsApp number: …** | These people are in **App User** without a WhatsApp number. | Click **Add number** and add it. |
| Staff get no new-task messages | Templates are not approved yet, and they have not written in 24 hours. | Ask them to send `hi`. Wait for approval, then click **Check again**. |

## Related

- [Use WhatsApp task commands](use-whatsapp-task-commands.md)
- [Set your own command words](set-your-own-command-words.md)
- [Set up task reminders and the daily summary](whatsapp-task-reminders-and-summary.md)
- [Add staff](../hr/add-staff.md)
- [Mark attendance on WhatsApp](../hr/whatsapp-attendance.md)
