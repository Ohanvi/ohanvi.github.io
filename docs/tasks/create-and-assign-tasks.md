---
title: Create and assign tasks
description: Create a task from the Tasks panel or the board, set its assignee, priority and due date, and break it into subtasks.
---

# Create and assign tasks

Create tasks, give each one an owner, a priority and a due date, and split larger work into subtasks. At the end, each task sits in a board column with a key such as OHANVI-12, and the assignee sees it in their **Assigned to me** list.

## Before you start

- Your workspace has a task project with at least 1 board column. See [Set up a task project](set-up-task-project.md).
- The people you want to assign are members of the project. Only project members appear in the assignee list.

## Steps

### Create a task from the Tasks panel

1. Click **Tasks** in the right-hand rail. The **Tasks** panel opens.
2. Click **Create** at the top of the panel. The task dialog opens.
3. Click **Add a summary** and type what needs to be done. The summary is the only required field.
4. Optional: in **Description**, add details. Type `- ` or `1. ` to start a list, and paste images or files straight in.
5. Optional: set the fields in the right-hand panel, as described in [Set the task details](#set-the-task-details).
6. Click **Create**. The task is added to the board.

### Create a task on the board

1. On the board, click **Create** at the top of the page. The same task dialog opens, with the first column as its status.
2. Fill in the task as in steps 3–6 above.

### Add a task straight into a column

Use this for quick tasks when you only need a summary, a type and an assignee.

1. On the board, hover over a column and click **Create** at the bottom of its cards.
2. In **What needs to be done?**, type the summary.
3. Optional: click the type icon (tooltip **Work type**) and pick **Epic**, **Story**, **Task**, **Bug** or **Sub-task**.
4. Optional: click the person icon and pick an assignee.
5. Press Enter, or click the tick (tooltip **Create**). The task appears in that column.

### Set the task details

The right-hand panel of the task dialog holds the task's details. Expand **Details** if it is collapsed.

| Field | What it does |
| --- | --- |
| Status (top of the panel) | The column the task sits in. For a new task, it is the column you started from. |
| **Assignee** | The project member who owns the task. Click **Assign to me** to take it yourself. |
| **Labels** | Free-text tags to group related tasks. |
| **Priority** | **Highest**, **High**, **Medium**, **Low** or **Lowest**. New tasks default to **Medium**. |
| **Parent** | The epic or story this task belongs to. |
| **Team** | A team the task belongs to. |
| **Sprint** | The sprint the task is planned for. See [Plan work in sprints](plan-sprints.md). |
| **Story point estimate** | A size estimate for the work. |
| **Start date** / **Due date** | When work starts and when it is due. The due date drives the **Due today** and **Overdue** tags. |
| **Original estimate** / **Remaining estimate** | Time estimates. Use w, d, h and m, for example `2h 30m` or `1d`. |
| **Reporter** | The person who raised the task. Filled in with your name. |

### Change the assignee or other details later

1. Click a task card on the board, or a task row in the **Tasks** panel. The task dialog opens.
2. Change **Assignee**, **Priority**, **Due date** or any other field.
3. Click **Save**.

You can also change the assignee from the board without opening the task: click the avatar on the card and pick a person.

### Break a task into subtasks

1. Open a task that is already saved.
2. Under **Subtasks**, click **Add subtask**.
3. In **Name this subtask**, type the subtask summary.
4. Press Enter, or click the tick (tooltip **Create**). The subtask appears in the **Subtasks** table with its **Priority**, **Assignee** and **Status**.

### Copy a task

1. On the board, hover over a task card and click its **…** menu.
2. Click **Clone**. The message **Ticket cloned.** appears and the copy is added to the board.

Tasks cannot be deleted once created. To take a task off the active board, move it to a done or cancelled column.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Create** does nothing and the summary box opens | The summary is empty. | Type a summary, then click **Create** again. |
| **No ticket project is loaded.** | The board has not finished loading the project, or no project exists. | Wait a moment, or create a project first. See [Set up a task project](set-up-task-project.md). |
| The person you want is not in the **Assignee** list | They are not a member of this project. | On the board, click **Add members** and add them. |
| **Save this work item before adding subtasks.** | The task has not been created yet. | Click **Create** first, then open the task and add subtasks. |
| **Could not create ticket. Please try again.** | The save did not reach the server. | Check your connection and click **Create** again. |
| **Could not update assignee.** | The change did not save. | Refresh the board and pick the assignee again. |

## Related

- [Set up a task project](set-up-task-project.md)
- [Move tasks across the board](move-tasks-on-board.md)
- [Comment, mention and attach files](collaborate-on-tasks.md)

!!! note "Screenshots to add"
    - After step 2 of "Create a task from the Tasks panel" — the empty task dialog with **Add a summary** and the right-hand details panel.
    - After step 3 of "Add a task straight into a column" — the inline composer with the **Work type** menu open.
    - "Set the task details" — the expanded **Details** panel with **Assignee**, **Priority** and **Due date** filled in.
    - After step 4 of "Break a task into subtasks" — the **Subtasks** table with 2 subtasks.
