---
title: Manage team members, roles and permissions
description: Add teammates, give each one a role, edit or remove them, and understand what Super Admin, Manager and Executive can do in Ohanvi.
---

# Manage team members, roles and permissions

Add teammates to your workspace, give each one the right role, and edit or remove them later. At the end, every person on your team signs in with their own account and sees only what their role allows.

## Before you start

- You are the workspace owner or another **Super Admin**. Only admins see **Add**, **Invite teammate** and **Edit** on the team screen.
- Your plan has a free seat. When every seat is used, **Add** and **Invite teammate** are hidden. See [Credits and billing in Ohanvi](../credits-and-billing.md) and the [Billing section](../billing/index.md) to add seats.
- You have each teammate's name, email and mobile number.

## Roles in Ohanvi

Each person has exactly 1 role. The role decides what they can do in every module.

| Role | What it allows |
| --- | --- |
| **Super Admin** | Full access, including team & billing. |
| **Manager** | Everything except delete. |
| **Executive** | Day-to-day work — no delete, approve or cancel. |

Permissions come from the role. You cannot switch single actions on or off for 1 person. To change what someone can do, change their role.

The person who created the workspace is the account owner. Their role cannot be changed and their account cannot be deleted.

## Steps

### Open the team list

1. Click your initials in the bottom-left corner, then click **Settings**.
2. Click your name at the top of the Settings list.
3. Under **Team & access**, click **App User**. The **App User Management** list opens.

The list shows **Status**, **Name**, **Username**, **Role**, **Email** and **Phone Number** for each person.

### Add a teammate

Use this when you want to set the teammate's username and first password yourself. To let them sign up on their own, [invite them with a link](invite-teammates.md) instead.

1. Click **Add**. The **Add teammate** window opens.
2. Under **User Details**, fill in **Name**, **Username**, **Email** and **Phone Number**.
3. Wait for **Username available** under **Username**. If you see **Username already taken**, try another.
4. Leave **User Type** as **Standard** [VERIFY: when to pick Generic].
5. Type a first **Password**. It must meet every rule in the checklist below the box.
6. Under **Role**, click **Super Admin**, **Manager** or **Executive**.
7. If you picked **Executive**, choose who they report to under **Reports To** → **Manager (optional)**. Only Managers and Super Admins are listed.
8. Click **Add teammate**. The message **<Name> added to your team.** appears.
9. Share the username and password with your teammate. They can change the password later on **My Account**.

### Change a teammate's details or role

1. In the **App User Management** list, click the pencil icon (**Edit**) on the person's row. The **Edit teammate** window opens.
2. Change their details, or pick a new role under **Role**.
3. To reset their password, type a new one in **Password**. Leave it blank to keep the current one.
4. Click **Save**. The message **<Name> updated.** appears.

You cannot change **Username** after the account is created.

### Bring back a teammate after a plan downgrade

When a plan downgrade leaves fewer seats than people, some accounts are switched off. Their row shows a seat icon with the tooltip **Deactivated by a plan downgrade — no free seat.**

1. Free a seat, or add seats to your plan.
2. Click the pencil icon (**Edit**) on their row, then click **Save**. The account is active again.

### Remove a teammate

!!! warning "The teammate loses access at once"
    A removed teammate can no longer sign in. Their past work stays in Ohanvi.

1. On the person's row, click **Delete**. A confirmation appears.
2. Click **Delete** to confirm.

### Group teammates with User Groups

Super Admins also see **User Group** under **Team & access**. A user group holds people who share a role.

1. Under **Team & access**, click **User Group**. The **User Group Management** list opens.
2. To see who is in a group, check **Users Count**, or open the group.
3. To change members, edit the group, then add or remove names in **App Users**.
4. Click save [VERIFY: exact save button label in the grid form].

Change roles from **App User** when you can. Editing groups by hand can move people between roles.

### Switch between your own roles

If you hold more than 1 role, click your initials bottom-left, then **Switch role**, and pick a role. The app reloads with that role's access.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Add** and **Invite teammate** are missing | You are not a Super Admin, or every seat on your plan is used. | Ask the workspace owner, or add seats in the [Billing section](../billing/index.md). |
| **Cannot reactivate: the tenant's plan has no free seats (…). Upgrade the plan or add seats first.** | All seats are in use. | Remove someone or add seats, then try again. |
| **Email … already exists with user: …** | Another active user has that email. | Use a different email for this teammate. |
| **Mobile number … already exists with user: …** | Another user has that mobile number. | Use a different number. |
| **Delete** is greyed out with **This account can't be deleted** | This is the account owner. | The owner account cannot be removed. |
| **This is the account owner — their role can’t be changed.** | You opened the owner's account. | Change other teammates' roles instead. |

## Related

- [Invite teammates with a link](invite-teammates.md)
- [Update your profile and password](update-your-profile.md)
- [Open Settings and find a setting](open-settings.md)
- [Settings overview](../settings/index.md)

!!! note "Screenshots to add"
    - After step 3 of Open the team list — the **App User Management** list with the **Role** column
    - After step 6 of Add a teammate — the **Add teammate** window with **Super Admin**, **Manager** and **Executive**
    - After step 1 of Change a teammate's details or role — the **Edit teammate** window
    - After step 1 of Remove a teammate — the delete confirmation
