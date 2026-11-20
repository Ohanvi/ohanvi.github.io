---
title: Use Tasks and HR steps in flows
description: Add Ohanvi's own Tasks and HR steps to an automation, read their outputs, and build your own WhatsApp command for staff.
---

# Use Tasks and HR steps in flows

Add steps that create and update tasks or mark attendance, then send their ready-made reply on WhatsApp. At the end, you have a staff command of your own, such as `my month`, that answers from HR.

## Before you start

- Your role can create and change flows. See [Understand flows and the Flows list](flows-overview-and-list.md).
- For Tasks steps, WhatsApp Tasks is set up and your staff are on its staff list. See [Set up WhatsApp tasks](../tasks/set-up-whatsapp-tasks.md).
- For HR steps, each staff member is an active employee in HR with their WhatsApp number. See [Add staff](../hr/add-staff.md).
- The flow is an automation or a store journey. Tasks and HR steps are not offered in WhatsApp chatbots.

## How Ohanvi's own apps appear

In the **Add a step after** panel, Ohanvi's own modules sit under **Apps**, next to connected apps. Each module, such as **Tasks**, **HR**, **WhatsApp** or **CRM**, has one row.

- Each row says what it offers, for example **13 actions · 7 searches** for **Tasks** and **4 actions · 2 searches** for **HR**.
- These rows show no **Connected** or **Connect** label. They run on your own workspace, so there is no account to connect.
- Click a row to open it. Its steps appear under sub-headings:

| App | Sub-headings |
| --- | --- |
| **Tasks** | **Staff messages**, **Tasks**, **Lists & reports**, **Projects**, **Repeating**, **Documents** |
| **HR** | **Attendance**, **Staff** |

The list shows a short name, such as **Create task**. On the canvas, the step takes its full name, such as **Create a task**.

!!! note "Tasks and HR steps never send messages"
    They return a reply that is ready to send, in `{{N.text}}` or `{{N.replyText}}`. Add a **Send message** step after them to send it. `N` is the step's number on the canvas.

## Steps

### Add a Tasks or HR step

1. Open the flow in the builder. See [Build an automation flow](build-automation-flow.md).
2. Click **+** after the trigger or after a step. The **Add a step after** panel opens.
3. Scroll to **Apps** and click **Tasks** or **HR**.
4. Click the step, for example **Check in** under **Attendance**. The step lands on the canvas and its **Step** panel opens.

    [SCREENSHOT: Add a step after panel with Tasks open, showing the Staff messages, Tasks and Lists & reports sub-headings]

5. Fill in the fields. Most phone fields start with `{{trigger.from}}`, the sender of a WhatsApp message.
6. Read the note under the fields. It lists the step's outputs.

You can also type a step's name in **Search steps**, for example `check in`.

### Build your own staff command

This example answers a staff member who sends `my month` with their attendance for this month.

1. Create a flow named `My month`. See [Build an automation flow](build-automation-flow.md#create-the-flow-and-choose-a-trigger).
2. Click the trigger at the start of the canvas, then click the box at the top of the **When this runs** panel. The **What starts this flow?** window opens.
3. Open **WhatsApp** and click **A WhatsApp message arrives**. See [Start a flow from a WhatsApp message](start-a-flow-from-a-whatsapp-message.md).
4. In **Which WhatsApp number**, choose the number your staff message.
5. Turn on **Only when the text matches**. In **Pattern**, type `my month`. Turn on **Whole text**.
6. In **Who it answers**, choose **Staff only (people in HR)**.

    [SCREENSHOT: When this runs panel with Only when the text matches on, the pattern my month, and Who it answers set to Staff only (people in HR)]

7. Click **+** after the trigger. Open **HR** under **Apps** and click **Attendance summary**.
8. In **Asked by (phone)**, type `{{trigger.from}}`. In **Period**, choose **This month**.
9. Click **+** after that step. Open **WhatsApp** under **Apps** and click **Send message**.
10. In **Send to**, type `{{trigger.from}}`. In **Message**, type `{{1.text}}`.
11. Beside **Send from**, click **Change** and choose **Same number the message arrived on**.

    [SCREENSHOT: Send message step with Send to {{trigger.from}}, Message {{1.text}} and Send from set to Same number the message arrived on]

12. Click **Save**, then **Publish**.
13. From a staff member's phone, send `my month` to the number. The reply lists their attendance for this month.

The same shape works with other steps. Swap step 1 for one of these:

| Staff sends | Step | Set | Message |
| --- | --- | --- | --- |
| `my tasks today` | **Tasks** → **List tasks** | **Or: their phone** `{{trigger.from}}`, **Which tasks** **Due today and overdue** | `{{1.text}}` |
| `my projects` | **Tasks** → **List projects** | **Or: their phone** `{{trigger.from}}` | `{{1.replyText}}` |
| `yesterday` | **HR** → **Attendance summary** | **Asked by (phone)** `{{trigger.from}}`, **Period** **Yesterday** | `{{1.text}}` |

**Attendance summary** shows each person only what they may see. Staff see their own. Managers can name someone in their team in **About (name)**, and HR admins can name anyone.

!!! tip "Stop numbers that are not in HR"
    With **Who it answers** set to **Anyone**, add **HR** → **Find employee by phone** as step 1. Then add **Continue only if…** with `{{1.found}}` **is** `true`. `{{1.text}}` already says what went wrong, if you want to send it instead.

To catch a value inside a command, such as the number in `job 42 status`, see [Use text rules in conditions](use-text-rules-in-conditions.md).

### Edit the staff assistant flow

When you set up WhatsApp Tasks, Ohanvi creates flows for it. **WhatsApp tasks: staff assistant** answers every staff message on the tasks number. It is a normal flow.

1. Open **Flows** and click **WhatsApp tasks: staff assistant**.
2. Read its steps. **Read the staff message** works out what the message means. **What kind of message?** sends it to a reply, to the AI Task assistant, or to **Tell an unknown sender**.
3. If attendance is on, the flow starts with **In, out, a break or anything else?**. That step holds the attendance words. See [Set your own command words](../tasks/set-your-own-command-words.md).
4. Change a step, then click **Save** and **Publish**.

!!! warning "Running Tasks setup again"
    Setup rewrites this flow while it is a draft. If the flow is live, setup writes a new draft version for you to review. Your live version keeps running. Before you publish that draft, compare it with your own changes. See [Review flow versions](review-flow-versions.md).

## Tasks steps

| Step | What it does | Key outputs |
| --- | --- | --- |
| **Read staff message** | Works out what a staff message means: `my tasks`, `2 done`, a button tap, or text for the AI. | `{{N.route}}` (**HANDLED**, **AI**, **UNKNOWN** or **IGNORE**), `{{N.replyText}}`, `{{N.buttons}}`, `{{N.aiInput}}`, `{{N.memberId}}`, `{{N.memberName}}`, `{{N.isAdmin}}` |
| **Act on AI result** | Creates, updates or lists tasks from what an AI agent understood. The staff list decides who may do what. | `{{N.replyText}}`, `{{N.buttons}}`, `{{N.taskId}}`, `{{N.intent}}` |
| **Link message to task** | Remembers which WhatsApp message carried a task, so a tap or reply on it finds the task. Put it right after the template send. | `{{N.updated}}` |
| **Attach proof to task** | Adds a photo or file a staff member sent to their task. A caption `done` also completes it. | `{{N.ok}}`, `{{N.taskId}}`, `{{N.text}}` |
| **Create task** | Adds a task or a reminder for a staff member, by name, phone or staff id. They are told on WhatsApp. | `{{N.taskId}}`, `{{N.created}}`, `{{N.text}}` |
| **Update task status** | Marks a task **Started**, **Done** or **Cancelled**. Only the creator or an admin can cancel. | `{{N.taskId}}`, `{{N.taskStatus}}`, `{{N.text}}` |
| **Edit a task** | Changes who a task is for, its due date, title or priority. | `{{N.replyText}}`, `{{N.taskId}}` |
| **Move to a board column** | Puts a task in a column of the Tasks board, for example `On hold`. | `{{N.replyText}}`, `{{N.taskId}}` |
| **Tag task to a project** | Files a task under a project. | `{{N.replyText}}`, `{{N.taskId}}` |
| **Delete task** | Removes a task from the lists and the board. Nobody is told. | `{{N.taskId}}`, `{{N.replyText}}` |
| **Find tasks** | Looks up tasks by status, assignee, due date or where they came from. | `{{N.tasks}}`, `{{N.totalCount}}`; with one task id, `{{N.title}}`, `{{N.taskStatus}}`, `{{N.assigneeName}}`, `{{N.dueAt}}` |
| **List tasks** | A numbered list of a staff member's open tasks, ready to send. | `{{N.text}}`, `{{N.total}}`, `{{N.done}}`, `{{N.percent}}`, `{{N.tasks}}` |
| **Team summary** | Done, open and overdue tasks for each person today. | `{{N.text}}` (several lines), `{{N.line}}` (one line, for a template), `{{N.perPerson}}` |
| **Staff list** | Everyone on the Tasks staff list, or one person. | `{{N.members}}`, `{{N.totalCount}}`; with one id, `{{N.name}}`, `{{N.phone}}` |
| **List projects** | The projects a staff member can tag tasks to. | `{{N.replyText}}` |
| **Create project** | Adds a project. The staff member's chat rules decide if they may. | `{{N.replyText}}` |
| **Add repeating task** | A task made every day, week or month. Only an admin may add one. | `{{N.id}}`, `{{N.scheduleText}}`, `{{N.nextRunOn}}` |
| **Repeating tasks** | The repeating task rules, with when each runs next. | `{{N.rules}}`, `{{N.totalCount}}` |
| **Stop a repeating task** | Ends a repeating task rule. | `{{N.replyText}}` |
| **Find a document** | Finds the file a staff member asked for in the Knowledge Base sources picked under **Tasks** → **Settings**. | `{{N.found}}`, `{{N.fileUrl}}`, `{{N.fileName}}`, `{{N.text}}` |

Steps that act for a staff member take **Staff member** (`{{1.memberId}}` from **Read staff message**) or **Or: their phone**. That person's own chat rules apply, the same as when they type the command.

## HR steps

Each HR step finds the employee from the phone number, never from the message text. Nobody can mark someone else present.

| Step | What it does | Key outputs |
| --- | --- | --- |
| **Check in** | Marks the employee checked in for today. | `{{N.ok}}`, `{{N.text}}` (for example "Checked in at 9:48 AM."), `{{N.employeeName}}`, `{{N.timeText}}` |
| **Check out** | Records when they left and the hours worked. | `{{N.ok}}`, `{{N.text}}`, `{{N.timeText}}`, `{{N.workedText}}` |
| **Start a break** | Starts a **Lunch** or **Break**. Needs today's check-in and no open break. Hours worked and payroll do not change. | `{{N.ok}}`, `{{N.text}}`, `{{N.breakType}}`, `{{N.timeText}}` |
| **End a break** | Ends the open lunch or break. | `{{N.ok}}`, `{{N.text}}`, `{{N.breakType}}`, `{{N.timeText}}` |
| **Attendance summary** | Who is present, on leave, late or absent, for one person or the team. **Period** is **Today**, **Yesterday**, **This month** or **Last month**. | `{{N.text}}` (several lines), `{{N.line}}` (one line, for a template), `{{N.counts.present}}` and the other counts, `{{N.ok}}` |
| **Find employee by phone** | Finds the active HR employee a number belongs to, using their main and extra numbers. | `{{N.found}}`, `{{N.employeeId}}`, `{{N.employeeName}}`, `{{N.reason}}` (**NOT_FOUND**, **AMBIGUOUS** or **INVALID_PHONE**), `{{N.text}}` |

A refusal, such as "already checked in", is not a failed step. `{{N.ok}}` is `false` and `{{N.text}}` says why, ready to send.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Tasks** and **HR** are not under **Apps** | The flow is a WhatsApp chatbot. These steps are offered in automations and store journeys. | Build the command as an automation. See [Build an automation flow](build-automation-flow.md). |
| A staff member gets the Tasks reply, not your flow's reply | **Who it answers** is not set to Staff. For people on the Tasks staff list, only a Staff rule goes ahead of WhatsApp Tasks. | Set **Who it answers** to **Staff only (people in HR)**, then publish again. |
| A staff member added a moment ago gets no answer | Ohanvi remembers who is staff for about 5 minutes. | Wait 5 minutes, then send the command again. |
| The reply says the number was not found | The phone is not on an active HR employee. | Add the number to the employee in HR. See [Add staff](../hr/add-staff.md). |
| **Read staff message** gives `{{N.route}}` **UNKNOWN** | The sender is not on the Tasks staff list. | Add them to the staff list. See [Set up WhatsApp tasks](../tasks/set-up-whatsapp-tasks.md). |
| The step ran but nothing reached WhatsApp | Tasks and HR steps never send messages. | Add a **Send message** step with `{{N.text}}` or `{{N.replyText}}`. |

## Related

- [Set up WhatsApp tasks](../tasks/set-up-whatsapp-tasks.md)
- [Mark attendance on WhatsApp](../hr/whatsapp-attendance.md)
- [Start a flow from a WhatsApp message](start-a-flow-from-a-whatsapp-message.md)
- [Use text rules in conditions](use-text-rules-in-conditions.md)
- [Add an app step to a flow](add-an-app-step.md)
