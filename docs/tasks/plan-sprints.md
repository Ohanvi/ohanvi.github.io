---
title: Plan work in sprints
description: Use the Backlog view to create a sprint, drag tasks into it, start it, and complete it by moving unfinished work on.
---

# Plan work in sprints

Plan your team's work in fixed time boxes called sprints, usually 1 to 4 weeks. At the end, you have a sprint with a goal and a set of tasks, the sprint is running, and when it ends the unfinished work moves to the next sprint or back to the backlog.

## Before you start

- Your project has tasks. See [Create and assign tasks](create-and-assign-tasks.md).
- Your board's last column is your "done" column. Completing a sprint counts tasks in the last column as completed.

## Steps

### Create a sprint

1. Click **Tasks** in the right-hand rail, then click **Board**.
2. Click the **Backlog** view. The **Backlog** section lists every task not in a sprint.
3. Click **Create sprint**. The **Create sprint** dialog opens.
4. In **Sprint name**, type a name, for example "Sprint 12".
5. Set the **Start date** and **End date**.
6. Optional: in **Sprint goal**, write what the sprint should achieve.
7. Click **Create**. The sprint appears above the backlog.

### Add tasks to a sprint

1. In the **Backlog** view, drag a task from **Backlog** into the sprint.
2. Repeat for each task you plan to finish in this sprint.

To take a task out, drag it back into **Backlog**. You can also set the **Sprint** field inside a task. See [Create and assign tasks](create-and-assign-tasks.md).

### Start a sprint

A project can have only 1 active sprint at a time.

1. On the sprint you want to run, click **Start sprint**. The **Start another sprint** dialog opens.
2. Check the **Sprint name**.
3. Pick a **Duration** from **1 week** to **4 weeks**, and set the **Start date**. The **End date** follows from the duration.
4. Optional: update the **Sprint goal**.
5. Click **Start**. The sprint is marked **ACTIVE**.

### Complete a sprint

1. On the active sprint, click **Complete sprint**. The dialog shows how many work items are completed and how many are open.
2. In **Move open work items to**, pick a planned sprint or **Backlog**.
3. Click **Complete sprint**. Open tasks move to where you chose.

Completed work items are the ones in the last column on the board. Open work items are everything in any other column.

### Edit or delete a sprint

1. On the sprint, click **More actions**.
2. Click **Edit sprint** to change its name, dates or goal, then click **Update**.

!!! warning "Deleting a sprint cannot be undone"
    **Delete sprint** removes the sprint for good. Move its tasks to the backlog first if you still need them planned.

3. To delete it instead, click **Delete sprint**, then click **Delete** in the **Delete sprint?** dialog.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Could not start sprint.** | The project already has an active sprint, or the save failed. | Complete the active sprint first, then start the next one. |
| **Could not create sprint.** | A required field is empty, or the save failed. | Fill in **Sprint name**, **Start date** and **End date**, then click **Create** again. |
| **Could not move ticket to sprint.** | The sprint is completed, or the move did not save. | Drag the task into a planned or active sprint instead. |
| **Could not complete sprint.** | The save did not reach the server. | Click **Complete sprint** again. |
| **Sprint completed but refresh failed.** | The sprint closed, but the view did not reload. | Click **Refresh** on the board. |
| **Your backlog is empty.** | Every task is already in a sprint, or there are no tasks yet. | Create a task, or drag one out of a sprint. |

## Related

- [Find, filter and view tasks](find-and-filter-tasks.md)
- [Move tasks across the board](move-tasks-on-board.md)
- [Tasks overview](../tasks/index.md)

!!! note "Screenshots to add"
    - After step 3 of "Create a sprint" — the **Create sprint** dialog.
    - After step 1 of "Add tasks to a sprint" — the **Backlog** view with a task being dragged into a sprint.
    - After step 1 of "Start a sprint" — the **Start another sprint** dialog with **Duration**.
    - After step 2 of "Complete a sprint" — the complete dialog with **Move open work items to**.
