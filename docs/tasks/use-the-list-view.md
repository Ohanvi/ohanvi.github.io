---
title: Use the List view
description: See every task as a table, add tasks inline, edit titles, assignees and statuses in place, reorder columns, and change the priority or status of many tasks at once.
---

# Use the List view

The **List** view shows your tasks as a table, one row each. Add a task without leaving the table, edit a row in place, and update many rows with one action. Cards from the **Summary** view open here too.

## Before you start

- You can open the task board. See [Set up a task project](set-up-task-project.md).
- The project has at least 1 task, or you will use **Create** to add the first one.

## What the List shows

| Column | What it holds |
| --- | --- |
| **Work** | The type icon, the task key and the title. |
| **Assignee** | The person who owns the task, or **Unassigned**. |
| **Reporter** | The person who created it. |
| **Priority** | **Highest**, **High**, **Medium**, **Low** or **Lowest**. |
| **Status** | The board column the task sits in. |
| **Resolution** | **Unresolved** until the task is resolved. |
| **Created** | The date the task was created. |
| **Updated** | The date it last changed. |
| **Due date** | The date it is due. |

## Steps

### Open the List

1. Click **Tasks** in the right-hand rail, then click **Board**.
2. In the view switcher, click **List**.
3. If the table reads **No tasks found**, clear your filters or add a task.

### Add a task from the List

1. Click **Create** at the bottom of the table. A row opens.
2. Click the type button, tooltip **Select work type**, and pick the type. The default is a story.
3. Type the title in **What needs to be done?**.
4. Optional: pick an assignee with the person button.
5. Press Enter, or click **Create**. The task joins the table.
6. To close the row without adding, click **Cancel**.

### Edit a title in place

1. Click the **Work** cell of a row. The title turns into a text box.
2. Type the new title.
3. Click the tick to save, or the cross to cancel.

### Change a status or an assignee in place

1. Click the **Status** cell of a row, then pick the new status.
2. Click the **Assignee** cell, then pick a person.
3. The change saves at once. If it fails, the list reads **Error updating status** or **Error updating assignee**.

### Move, resize or reorder columns

1. Drag the edge of a column header to change its width.
2. Drag a column header sideways to move the column.
3. Look for the columns icon at the end of the header row. [VERIFY: whether it opens a list of columns to show or hide]

### Select rows

1. Tick the box at the start of a row to select it.
2. Tick more rows to add them. A dark bar appears at the bottom of the table.
3. Read the number in the bar. It shows how many rows are selected, followed by **selected**.
4. Click **Select all** in the bar to select every row.
5. To clear the selection, click the cross at the right end of the bar.

### Change the priority of many tasks

1. Select the rows.
2. Click **Set priority** in the bar. A window opens.
3. Click **HIGHEST**, **HIGH**, **MEDIUM**, **LOW** or **LOWEST**.
4. The message **Updated 3 work item(s).** appears, with your number.
5. If it fails, the message reads **Bulk action failed.**

### Change the status of many tasks

1. Select the rows.
2. Click **Change status** in the bar. A window opens with your board's columns.
3. Click the status you want.
4. The message **Updated N work item(s).** appears.

!!! note "No bulk delete"
    The bar has no delete button. To finish many tasks, set their status to a done column instead.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **No tasks found** | The project is empty, or filters hide every task. | Clear the filters, or click **Create**. |
| **Error creating ticket inline** | The new task did not save. | Check the title, and try again. |
| **Bulk action failed.** | The change was refused. | Try fewer rows, or change them one by one. |
| **Error updating summary** | The new title did not save. | Edit the title again. |
| The dark bar does not appear. | No row is selected. | Tick a row. |

## Related

- [Read the board Summary](read-the-board-summary.md)
- [Move tasks across the board](move-tasks-on-board.md)
- [Find, filter and view tasks](find-and-filter-tasks.md)
