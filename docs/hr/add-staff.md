---
title: Add staff
description: Add people who work over WhatsApp with a name and a WhatsApp number. Staff get no app login and take no paid seat.
---

# Add staff

Add a staff member with a name and a WhatsApp number. Staff have no app login and take no paid seat. Once added, they can get tasks on WhatsApp and mark attendance from that number.

## Before you start

- You are a **Super Admin** in your workspace. Only admins see **Add** and **Edit** on the **App User Management** list. See [Manage team members, roles and permissions](../settings/roles-and-permissions.md).
- You have the person's WhatsApp number, with its country code.
- The number is not already on someone else in your workspace. One WhatsApp number belongs to one person.

## Staff and teammates

Everyone you add from **App User** is either a teammate, staff, or both.

| Type | App login | Paid seat | What they do |
| --- | --- | --- | --- |
| Teammate (**Super Admin**, **Manager** or **Executive**) | Yes | Yes | Signs in to Ohanvi with a username and password. |
| **Staff** | No | No | Works only over WhatsApp: gets tasks, marks attendance, asks for their attendance. |
| Teammate with **Staff** on | Yes | Yes | Signs in to Ohanvi, and also gets tasks and marks attendance on WhatsApp. |

Staff can never sign in, so they need no username, email or password. They show in the **App User Management** list with a green **Staff** tag.

## Steps

### Open the App User list

1. Click your initials in the bottom-left corner, then click **Settings**.
2. Click your name at the top of the Settings list.
3. Under **Team & access**, click **App User**. The **App User Management** list opens.

The top of the list shows **Seats: … of … used** and **Staff on WhatsApp: … active (all organisations)**.

### Add a staff member

1. Click **Add**. The **Add teammate** window opens with **Executive** picked.
2. Under **Role**, click **Executive** to clear it. The person then has no app login.
3. Click **Staff**, the card to the right of the divider. The window title changes to **Add staff** and reads **WhatsApp only: no app login, no seat.**

    [SCREENSHOT: Add staff window with the Staff card picked and the Name and WhatsApp Number fields]

4. Type the person's **Name**.
5. In **WhatsApp Number**, pick the country code, then type the number.
6. Click **Add staff**. The message **&lt;Name&gt; added as staff. They can now message your WhatsApp number for tasks.** appears.

The person appears in the list with the **Staff** tag. To see only staff, click **Staff** above the list. **All** and **With login** show the others.

You can also open the same window from these places. Each one opens it with **Staff** already picked:

- In HR, **Employee Management → Employees**: click **Add staff in Settings →**.
- WhatsApp tasks settings: click **Add staff** in the **Staff on WhatsApp** list. See [Set up WhatsApp tasks](../tasks/set-up-whatsapp-tasks.md).

### Add staff when every seat is used

Staff take no seat, so **Add** stays available when your plan is full.

1. Click **Add**. The window opens with **Staff** already picked.
2. Read the note under **Role**: **No free seat, so only Staff can be added. Upgrade the plan or free a seat to add someone with an app login.**
3. Fill in **Name** and **WhatsApp Number**, then click **Add staff**.

### Give a teammate a WhatsApp number

A teammate who signs in to Ohanvi can also get tasks and mark attendance on WhatsApp. Their login phone number is then their WhatsApp number too.

1. In the **App User Management** list, click the pencil icon (**Edit**) on the teammate's row. The **Edit teammate** window opens.
2. Under **Role**, click **Staff**. The note **Staff: gets tasks on WhatsApp on this number and shows in Tasks → People.** appears.
3. Check **WhatsApp Number**. This one number is both their login phone and the number tasks go to.
4. Click **Save**. The message **&lt;Name&gt; updated.** appears.

When you add a new teammate, you can click **Staff** in the same way before you click **Add teammate**.

If the field shows **Tasks go to … now. Change this number to send them here.**, their WhatsApp number differs from their login phone. Tasks keep going to the old number until you change the field.

### Change a staff member's number

1. Click the pencil icon (**Edit**) on the person's row. The **Edit staff** window opens.
2. Change **WhatsApp Number**.
3. Click **Save**. The message **&lt;Name&gt; updated.** appears.

From then on, the person sends tasks and attendance from the new number. Messages from the old number are no longer matched to them.

### Turn staff off

Staff are not deleted. You switch them off instead, so their attendance history stays.

1. Click the **Deactivate** icon on the person's row.
2. To bring them back, click **Activate**. Ohanvi checks their number again first, in case someone else has it now.

## One WhatsApp number, one person

Ohanvi tells who sent a WhatsApp message by the sender's number. So a number can belong to only one active person in your workspace, across all your organisations.

If you type a number that someone already has, Ohanvi refuses it and names that person:

- **This number is already &lt;Name&gt;'s WhatsApp number, so they already get tasks on it. To give it to someone else, remove it from &lt;Name&gt; first.**
- **This number is &lt;Name&gt;'s login phone. Edit &lt;Name&gt; and turn on Staff instead.**

This often happens when the person is already in your workspace, for example as a teammate or in another organisation. Edit their existing row instead of adding them again. [VERIFY: there is no way to add the same person to a second organisation from App User; new staff join the adding admin's own organisation]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **This number is already &lt;Name&gt;'s WhatsApp number, so they already get tasks on it. …** | Another active person has this number. | Edit that person instead. To move the number, remove it from them first. |
| **This number is &lt;Name&gt;'s login phone. …** | A teammate signs in with this phone number. | Edit that teammate and click **Staff**, as the message says. |
| **Enter WhatsApp number.** | **Staff** is picked but the number is empty or too short. | Type the full number and check the country code. |
| **Enter a valid WhatsApp number with its country code.** | The number could not be read. | Pick the right country code and type only the digits. |
| **Giving staff an app login comes in a later phase.** | You clicked a role while editing a staff member. | Staff cannot get an app login. Keep them as staff. |
| **This person can't be deleted. Staff are deactivated instead.** | Staff cannot be deleted. | Click **Deactivate** on their row. |

## Related

- [Mark attendance on WhatsApp](whatsapp-attendance.md)
- [Set up WhatsApp tasks](../tasks/set-up-whatsapp-tasks.md)
- [Manage team members, roles and permissions](../settings/roles-and-permissions.md)
- [Invite teammates with a link](../settings/invite-teammates.md)
