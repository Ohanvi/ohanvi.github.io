---
title: Plan and move campaigns in the Scheduler
description: See every campaign on a month, week, day or list view, plan a send for a day, drag a campaign to a new date, and hold or resume a scheduled send.
---

# Plan and move campaigns in the Scheduler

The Scheduler lays every email campaign out on the date it goes out. Use it to see what is sending and when, plan a new campaign on a day, and move a campaign by dragging it. At the end, your campaigns sit on the days you want.

## Before you start

- You have at least 1 campaign, or you are ready to plan one. See [Send an email campaign](send-email-campaign.md).
- Your role can see campaigns. The Scheduler shows only what **Campaigns** already shows you.
- Optional: you added your closed days under **Business Holidays**. See [Add holidays and closed days](manage-business-holidays.md).

## Steps

### Open the Scheduler

1. Open **Email** in the left rail, then select **Manage**.
2. Select **Scheduler**. The page title reads **Scheduler**.
3. Read the line under the title. It says how many campaigns are in the month, and how many are scheduled or already sent. It also counts festivals you can send around.

### Change the view and filter the plan

1. Click **Month**, **Week**, **Day** or **List** to cut the plan a different way. **Week** and **Day** open on the day you picked.
2. Click **Today** to jump back to now.
3. Click a status chip to show only campaigns in that state: **All**, **In progress**, **In review**, **Approved**, **Scheduled**, **Sending**, **Sent** or **Failed**. Each chip shows a count.
4. Open the list that reads **All lists** to show only campaigns aimed at one list.
5. Click **Refresh** to reload campaigns and holidays.

!!! tip
    **In progress** and **In review** campaigns look planned on their day but will not go out until someone finishes or approves them. Click those chips first.

### Plan a campaign on a day

1. Click a day on the month view. The day opens beside the grid.
2. Click **Plan a campaign for this day**. A new campaign starts with that date filled in.
3. To start without a date, click **Create campaign** at the top.

### Move a campaign to another date

1. Drag the campaign onto the new day.
2. If the new day is a **Company closed** holiday, **The office is closed that day** opens. Click **Move it** to move it anyway, or cancel to leave it where it was.
3. A message confirms the move. If it fails, the message **Could not move "…".** appears and the campaign snaps back.

### Work on a campaign from its day

1. Click the campaign on its day. Its actions appear in the day pane.
2. Click **Review** to approve or reject a campaign that is **In review**.
3. Click **Send for review** to pass a campaign that is still **In progress** to a reviewer.
4. Click **Edit content** to give this campaign its own wording over the template. If it already has its own wording, the link reads **Edit wording**.
5. Click **Hold** to stop a scheduled send from going out. Click **Resume** to let it go again. A held campaign waits at **Approved** and keeps its date and its approval.
6. Click **Duplicate here** to copy any campaign, even a sent one, onto the day you selected.
7. Click **Holidays** at the top to see the days your business does not send on.

!!! note
    A campaign is the Scheduler entry. Its send date is the date on the grid, and its status is the colour. There is nothing else to keep in sync.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| Nothing is going out in the month. | No campaign has a send date in this month. | Click **Plan a campaign for this day**, or move to another month. |
| **Could not move "…".** | The campaign cannot move, for example it is already sending or sent. | Open the campaign and check its status. Use **Duplicate here** to repeat a sent campaign. |
| **Could not hold "…".** or **Could not resume "…".** | The campaign is not in a state that can be held. | Only a **Scheduled** campaign can be held, and only a held one can resume. |
| The **Hold** link is missing. | The campaign is not **Scheduled**. | Check the status chip. |
| The **Holidays** button is missing. | Your role cannot see business holidays. | Ask your admin. |

## Related

- [Send an email campaign](send-email-campaign.md)
- [Add holidays and closed days](manage-business-holidays.md)
- [Read the send logs](read-send-logs.md)
