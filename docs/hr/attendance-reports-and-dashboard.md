---
title: Read attendance reports and the dashboard
description: Ask for attendance on WhatsApp for yourself, a person or your team, and see who is in, on break, out or late today on the HR attendance dashboard.
---

# Read attendance reports and the dashboard

Ask for attendance on WhatsApp, or open the **Attendance Dashboard** in HR. Staff see their own attendance, managers see their team, and admins see everyone.

## Before you start

- WhatsApp attendance is on for reports by chat. See [Mark attendance on WhatsApp](whatsapp-attendance.md).
- The person asking has an HR record linked to their WhatsApp number. See [Add staff](add-staff.md).
- For the dashboard, your role can open it. Otherwise **Attendance Dashboard** is not in the HR menu.

## Ask for attendance on WhatsApp

Staff send these messages to the same WhatsApp number they use for tasks. The word `attendance` can also be spelled `attendence`.

| Send | You get | Who can send it |
| --- | --- | --- |
| `attendance` | Your attendance today | Everyone |
| `attendance october 2026` | Your totals for that month | Everyone |
| `attendance details october 2026` | Your in and out times for each day | Everyone |
| `team attendance` | Your team's attendance today | Admins and managers |
| `Ravi attendance october 2026` | One person's totals for that month | Admins and managers |
| `Ravi detailed attendance october 2026` | One person's in and out times for each day | Admins and managers |

Hinglish works too: `meri attendance`, `aaj ki attendance`, `Ravi ki attendance`.

On the **Attendance Settings** page, the **What staff can type** card lists these commands under **Everyone** and **Admins & managers**. You can add your own words for them there. See [Set your own command words](../tasks/set-your-own-command-words.md).

### Dates you can use

Put the date or month after `attendance`.

| Type | Examples |
| --- | --- |
| A named day | `today`, `aaj`, `yesterday` |
| A named month | `this month`, `last month`, `pichle month` |
| A day | `26 oct`, `26th october 2026`, `26/10/2026`, `2026-10-26` |
| A month | `october`, `oct 2026`, `october 2026`, `10/2026` |

- With no date, a report covers today. A **details** report with no date covers this month.
- Write the day first: `05/10` is 5 October.
- A day or month without a year means the latest one that has already come.

### What the reply shows

A report for one day shows the status and times, for example **In 9:32 AM (late)**, **On lunch since 1:10 PM** or **not checked out yet**.

A report for a month shows totals: **Present**, **Late**, **Half day**, **Leave**, **Absent**, **Not marked** and **Off**. A details report adds one line per day.

A team report starts with **Team attendance** and the date, then the totals, then one line per person. Long replies end with **…and … more**.

Replies never show worked hours, because breaks are not deducted from them.

### Who can see whom by chat

| Person asking | Can see |
| --- | --- |
| Staff member | Only their own attendance |
| Manager | Their own, and everyone who reports to them in HR, at every level below them |
| Admin | Everyone in the organisation, even without an HR record of their own |

A person is an admin here when **Admin** is turned on for them in the **Staff on WhatsApp** list of WhatsApp tasks settings. See [Set up WhatsApp tasks](../tasks/set-up-whatsapp-tasks.md). [VERIFY: where the Admin switch is shown in WhatsApp tasks settings]

To make someone a manager, set who reports to them. For a teammate, use **Reports To** in their **Edit teammate** window. See [Manage team members, roles and permissions](../settings/roles-and-permissions.md).

## Use the Attendance Dashboard

### Open today's view

1. In the sidebar, open **HR**, then click **Attendance Dashboard**. [VERIFY: HR entry name in the left rail]
2. Check that **Today** is picked at the top. The date button shows today's date.
3. Read the tiles: **In**, **On break**, **Checked out**, **Late**, **On leave**, **Not marked** and **Absent**. Each tile shows how many people are in that state.

    [SCREENSHOT: Attendance Dashboard Today view with the seven tiles and the staff table]

4. Click a tile to show only those people. The line **Showing … only** appears above the table. Click the tile again, or **Show everyone**, to see all.
5. Type a name in **Search staff** to find one person.

The table shows **Employee**, **Status**, **In**, **Out**, **On break since**, **Late by** and **Source**. **Source** says where the check-in came from: **WhatsApp**, **Web**, **App**, **Biometric** or **Manual**.

### See another day or a month

1. Click the left or right arrow beside the date to move one day. You can't go past today.
2. To jump to a day, click the date button and pick a day.
3. Click **Month** at the top to see the whole month as a grid. Each day shows a letter: **P** Present, **H** Half day, **A** Absent, **L** On leave, **O** Off, **–** Not marked.
4. Click a person's row in either view. A window opens with their month: **Date**, **Status**, **In**, **Out** and **Breaks**.

### Export the list

1. Click **Export CSV** at the top right.
2. The message **Exported attendance_….csv** appears. The file holds the view you are on, day or month.

Click **Refresh** to load the latest punches without leaving the page.

### What each status means

| Status | Meaning |
| --- | --- |
| **In** | Checked in, not checked out, no break open. |
| **On break** | Checked in with a lunch or break still open. **On break since** shows when it began. |
| **Checked out** | Checked in and out for the day. |
| **Late** | Checked in after the shift start plus the policy's grace time. Late people are also counted in **In**, **On break** or **Checked out**. |
| **On leave** | Approved leave covers the day. A check-in on a leave day still shows as **In**. |
| **Not marked** | Today, with no check-in yet. |
| **Absent** | A past day with no check-in, or a day closed as absent. |
| **Off** | A holiday or the person's week off. It shows in the table but has no tile. |

### Who can see whom on the dashboard

| Your role | You see |
| --- | --- |
| **Super Admin**, or an HR admin or HR manager role | Everyone in the organisation |
| Anyone else | Yourself and everyone who reports to you in HR |

[VERIFY: the HR admin and HR manager role names as shown in the app]

The dashboard shows one organisation: the one you are working in.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **No access to the dashboard** with **Your login has no staff profile, so there is no team to show.** | Your login has no HR record, and your role does not see everyone. | Ask an admin to add you in HR, or click **Open Logs** to see attendance records. |
| **Only admins and managers can see others' attendance. Send attendance for your own.** | A staff member asked for the team or another person. | Ask a manager or admin. Staff can send `attendance` for their own. |
| **I couldn't read that date. Try attendance today, attendance 26 oct or attendance october 2026.** | The date was not in a form Ohanvi reads. | Use one of the forms in [Dates you can use](#dates-you-can-use). |
| **I couldn't find anyone called "…" among the staff you can see.** | The name is wrong, or the person is not in your team. | Check the spelling. Managers can ask only about their own team. |
| **More than one person matches "…": …. Please send the full name.** | The name fits more than one person. | Send the full name. |
| **No staff for this day** on the dashboard | No active staff are in this organisation for you to see. | Add staff, then check you are in the right organisation. See [Add staff](add-staff.md). |

## Related

- [Mark attendance on WhatsApp](whatsapp-attendance.md)
- [Add staff](add-staff.md)
- [Reminders and the daily summary](../tasks/whatsapp-task-reminders-and-summary.md)
- [Use task commands on WhatsApp](../tasks/use-whatsapp-task-commands.md)
