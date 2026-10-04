---
title: Work with items in the Backlog
description: Add, edit and move tasks in the Backlog view: create a task inline, rename it, change its status or assignee, drag it into a sprint, and use the row and sprint menus.
---

# Work with items in the Backlog

The **Backlog** view lists the work that is not in a sprint yet, with each sprint above it. Add tasks, tidy them, and drag them into the sprint where they belong. For starting and finishing sprints, see [Plan work in sprints](plan-sprints.md).

## Before you start

- You can open the task board. See [Set up a task project](set-up-task-project.md).
- Your project has at least 1 board column, so tasks have a status to pick from.

## Steps

### Open the Backlog

1. Click **Tasks** in the right-hand rail, then click **Board**.
2. In the view switcher, click **Backlog**.
3. Look at the page. Sprints sit at the top. The **Backlog** list sits below them.
4. If the list reads **Your backlog is empty.**, add your first task below.

### Add a task to the Backlog

1. Click **Create** at the bottom of the **Backlog** list. A row opens.
2. Click the type button, and pick the type. The default is a task.
3. Type the title. The **Create** button stays off until you type something.
4. Optional: click the date button, then use **Pick date** to set a due date.
5. Click **Create**. The task appears in the list.
6. To close the row without adding, click **Cancel**.

### Rename a task

1. Hover the task title. A pencil appears. Its tooltip is **Edit summary**.
2. Click the pencil, and type the new title.
3. Click the tick, tooltip **Save summary**, or press Enter.
4. To undo, click the cross, tooltip **Cancel**.

### Change a task's status

1. Click the status label at the end of the row. The label shows the current status, for example **TO DO**.
2. Pick a new status from the list. The list shows your board's columns.
3. The task moves to that status. If it fails, the page reads **Could not update status.**

### Change a task's assignee

1. Click the person icon at the end of the row.
2. Pick a person from the list, or pick **Unassigned**.
3. Your own name shows as **You**.

### Remove a story point estimate

1. Find the estimate on the task, shown as a small number.
2. Click the cross beside it. Its tooltip is **Remove estimate**.
3. To set an estimate, open the task and use **Story point estimate**. See [Create and assign tasks](create-and-assign-tasks.md).

### Drag a task into a sprint

1. Find the drag handle at the start of the row. Its tooltip is **Drag into sprint or backlog**.
2. Drag the task onto a sprint. You can also drop it on the sprint's footer.
3. Release. The task now belongs to that sprint.
4. To take it out, drag it back to the **Backlog** list. If the move fails, the page reads **Could not move ticket to sprint.**
5. If a sprint is empty, it reads **Plan a sprint by dragging work items into it, or by dragging the sprint footer.**

### Use the sprint menu

1. Click the **...** button on a sprint header. Its tooltip is **More actions**.
2. Click **Edit sprint** to change its name, goal or dates. See [Plan work in sprints](plan-sprints.md).
3. Click **Delete sprint** to remove it. A window asks **Delete sprint?** to confirm.
4. The menu also lists **Reorder work items**. It does nothing yet.

### Use the row menu

1. Hover a task row and click the **...** button. Its tooltip is **More actions**.
2. Read the list: **Move work item**, **Copy link**, **Copy key**, **Add flag**, **Assignee**, **Story point estimate**, **Split Task** and **Delete**.
3. These items are shown but do not run an action yet.
4. To copy a task's link or key now, open the task and use the buttons in its header.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Create** stays off. | The title is empty. | Type a title. |
| **Could not create ticket.** | The project could not save the task. | Check your connection, and try again. |
| **Select or load a ticket project before creating work.** | No project is open. | Pick a project on the board. |
| **Could not load sprints.** | The sprints did not load. | Reload the page. |
| **Could not move ticket to sprint.** | The drop did not save. | Drag the task again. |
| The row menu items do nothing. | They are not active yet. | Use the task's details window. |

## Related

- [Plan work in sprints](plan-sprints.md)
- [Move tasks across the board](move-tasks-on-board.md)
- [Use the List view](use-the-list-view.md)
