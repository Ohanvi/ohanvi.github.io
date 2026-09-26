---
title: Move tasks across the board
description: Update a task's status by dragging it between columns or picking a status, and add, rename, reorder or remove board columns.
---

# Move tasks across the board

Move tasks through your workflow as work progresses, and shape the board's columns to match how your team works. At the end, every task sits in the column that matches its real status, and everyone on the project sees the same columns in the same order.

## Before you start

- Your project has a board with columns. See [Set up a task project](set-up-task-project.md).
- You have at least 1 task on the board. See [Create and assign tasks](create-and-assign-tasks.md).

## Steps

### Drag a task to a new column

1. Click **Tasks** in the right-hand rail, then click **Board**. The board opens in the **Board** view.
2. Drag a task card from one column and drop it on another. Empty columns show **Drop tasks here**.
3. The card moves, and the change is saved to the task's history.

If the target column has a work-in-progress limit and is full, the **WIP limit reached** dialog opens. Click **Move anyway** to move the task, or **Cancel** to leave it where it was.

### Change the status without dragging

Use any of these, whichever is closest:

- **On a card:** click the card's **…** menu, point to **Change status**, and pick a column.
- **In the task dialog:** open the task and pick a status from the dropdown at the top of the right-hand panel. Click **Save**.
- **In the Tasks panel:** click **Tasks** in the right-hand rail and pick a status from the dropdown under the task's summary. The change saves at once.

### Change the status of many tasks at once

1. On the board, click the **List** view.
2. Tick the tasks to change, or tick **Select all**.
3. Click **Change status** and pick a status. To change priority instead, click **Set priority**.

### Add a column

1. At the right end of the board, click **+** (tooltip **Add column**).
2. Type the name in **Column name**.
3. Click **Save** (the tick). The column is added at the end.

### Rename a column

1. Click the column's title, or its **…** button (tooltip **More actions**).
2. Edit the name.
3. Click **Save** (the tick). Click **Cancel** (the cross) to keep the old name.

### Reorder columns

1. Point at a column's header. The pointer changes to a hand.
2. Drag the header left or right and drop it in its new place.

The new order is saved for the whole project, so every member sees the same arrangement.

### Remove a column

!!! warning "Tasks move to another column"
    Removing a column moves all of its tasks to another column. The dialog names that column before you confirm.

1. Click the column's **…** button (tooltip **More actions**).
2. Click the bin icon (tooltip **Remove column**). The **Remove column?** dialog opens and shows where the tasks will go.
3. Click **Remove**.

A board always keeps at least 1 column.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Could not update status.** | The move did not save, so the card goes back. | Refresh the board with the **Refresh** button and try again. |
| **That status is not available on this project.** in the Tasks panel | The column was removed or renamed on the board. | Close and reopen the **Tasks** panel to load the current columns. |
| **Statuses load with your tasks — try again in a moment.** | The panel has not loaded the project's columns yet. | Wait a few seconds and click the filter again. |
| **At least one column must stay on the board.** | You tried to remove the last column. | Add another column first, then remove this one. |
| **Could not add column. Please try again.** | The column did not save. | Try again. If it keeps failing, try a different column name. |
| The column count badge turns amber or red | The column is at or over its work-in-progress limit. | Finish or move tasks out of that column. |

## Related

- [Create and assign tasks](create-and-assign-tasks.md)
- [Find, filter and view tasks](find-and-filter-tasks.md)
- [Plan work in sprints](plan-sprints.md)

!!! note "Screenshots to add"
    - After step 2 of "Drag a task to a new column" — a card mid-drag over a highlighted column.
    - "Change the status without dragging" — a card's **…** menu with **Change status** expanded.
    - After step 2 of "Remove a column" — the **Remove column?** dialog.
    - After step 3 of "Change the status of many tasks at once" — the **List** view with tasks ticked and the **Change status** menu open.
