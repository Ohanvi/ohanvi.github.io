---
title: Set up a task project
description: Create your first task project, open the task board, add teammates as project members, and edit or delete the project.
---

# Set up a task project

Create the project that holds your tasks, open its board, and add the teammates who will work on it. At the end, your team has a shared board where anyone you added can be assigned tasks, and every task gets a key made from the project key, such as OHANVI-1.

## Before you start

- You can see the **Tasks** icon (a ticked box) in the right-hand rail, next to the notification bell. If you cannot, ask your admin to give your role Task access. See the [Settings overview](../settings/index.md).
- Your teammates already have Ohanvi logins. You can only add people who are users in your workspace.

## Steps

### Create your first project from the Tasks panel

1. Click **Tasks** in the right-hand rail. The **Tasks** panel opens beside the page.
2. If your workspace has no project yet, the panel shows **Set up your tasks**. Type a project name in the box, for example your company name.
3. Click **Create project**. The panel switches to your task list, with **Create** and **Board** at the top.

Ohanvi builds the project key from the letters in the name, upper-cased and cut to 6 letters. For example, "Ohanvi" becomes OHANVI. A name with no letters gets the key TASK.

### Create another project from the board

1. In the **Tasks** panel, click **Board**. The full task board opens.
2. In the left panel, under **Task**, click **Create project**. The **Create ticket project** dialog opens.
3. In **Uniq key**, type a short key for the project, for example SALES. The key can be up to 10 characters.
4. In **Name**, type the display name for the project.
5. Optional: in **Description**, say what the project is used for.
6. Click **Create project**. The new project opens on the board.

To switch projects, click a project name under **Task** in the left panel. Each project row shows its name and key.

### Add your first columns

A new project's board has no columns yet. Columns are the statuses a task moves through, such as To Do, In Progress and Done.

1. On the board, click the **+** button at the right end of the board (tooltip **Add column**).
2. Type the column name in **Column name**, then click **Save** (the tick).
3. Repeat for each status you need. Columns appear left to right in the order you add them.

See [Move tasks across the board](move-tasks-on-board.md) to rename, reorder or remove columns later.

### Add members to the project

Only project members appear in the assignee list, so add everyone who will own tasks.

1. On the board, click **Add members** in the toolbar. The **Add people** dialog opens.
2. Under **Available people**, type in **Search by name…** and tick each person to add.
3. Under **Selected Members & Roles**, choose a role for each person: **Admin**, **Member** or **Viewer**. New people start as **Member**.
4. Click **Add**. The message **Members added successfully.** appears.

To remove someone, open **Add members** again and click the red bin icon next to their name under **Selected Members & Roles**. The message **Member removed successfully.** appears.

### Edit the project

1. On the board, click **Edit project**. The **Edit ticket project** dialog opens.
2. Change **Name** or **Description**. The **Project key** cannot be changed after creation.
3. Click **Update project**.

### Delete the project

!!! warning "Deleting a project cannot be undone"
    **Delete project** permanently deletes the project from the board. Check with your team before you delete it.

1. On the board, click **Edit project**.
2. Click **Delete project**. The **Delete ticket project?** dialog opens.
3. Click **Delete**.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| No **Tasks** icon in the right-hand rail | Your role has no access to the Task module. | Ask your admin to give your role Task access. |
| **Enter a project name.** | You clicked **Create project** with an empty name. | Type a name, then click **Create project** again. |
| **Could not create the project. Please try again.** in the panel | Another project already uses the key built from this name, or the network dropped. | Try a different name, or create the project from the board with your own **Uniq key**. |
| **Could not create ticket project.** in the board dialog | The **Uniq key** is already in use, or is longer than 10 characters. | Use a shorter key that no other project uses. |
| **No people found** in **Add people** | The person is not a user in your workspace, or the search does not match. | Check the spelling, or ask your admin to add the person as a user first. |
| **Failed to add members.** | The save did not reach the server. | Click **Add** again. If it still fails, refresh the page and retry. |

## Related

- [Create and assign tasks](create-and-assign-tasks.md)
- [Move tasks across the board](move-tasks-on-board.md)
- [Tasks overview](../tasks/index.md)

!!! note "Screenshots to add"
    - After step 2 of "Create your first project from the Tasks panel" — the **Set up your tasks** prompt with a name typed in.
    - After step 2 of "Create another project from the board" — the **Create ticket project** dialog with **Uniq key**, **Name** and **Description**.
    - After step 3 of "Add members to the project" — the **Add people** dialog with two people selected and their role dropdowns.
    - After step 3 of "Add your first columns" — a board with three new columns.
