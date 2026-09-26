---
title: Schedule posts and manage the queue
description: Schedule social posts for a later time, move them on the calendar, cancel or publish them early, and retry posts that failed.
---

# Schedule posts and manage the queue

Pick a future date and time for a post, then track it on the **Publish** screen until it goes out. You can move posts on the calendar, publish one early, cancel a schedule, and retry a post that failed on some networks.

## Before you start

- You can see **Social** in the left rail, with **Publish** in its panel.
- At least one network is connected. See [Connect social accounts](connect-social-accounts.md).
- You know how to write a post in the composer. See [Create and publish a social post](create-social-post.md).

## Steps

### Schedule a post

1. Open **Social** in the left rail, then select **Publish**.
2. Click **New Post** and write your post.
3. At the bottom of the composer, click **Schedule**.
4. Pick a date, then a time. The footer shows **Publishes** followed by your date and time.
5. Click **Schedule Post**. The message **Post scheduled for …** appears, and the post shows in the **Queue** tab.

To remove the time before saving, click **Clear schedule** next to the date. To change it, click **Reschedule**.

!!! note
    **Facebook** only accepts a time between 10 minutes and 6 months from now. The other networks accept up to 2 years ahead. If you pick a network that does not accept your date, Ohanvi clears it and shows **Cleared the schedule — … does not accept that date.**

### Read the Publish screen

The **Publish** screen has 4 tabs:

- **Queue** — posts waiting to go out: **Scheduled**, **Queued** and **Publishing**.
- **Drafts** — posts not yet scheduled.
- **Approvals** — posts waiting for review. See [Review posts before they publish](approve-social-posts.md).
- **Sent** — **Published**, **Partial**, **Failed** and **Cancelled** posts.

Click **List** or **Calendar** to switch views. Click **Filters** to narrow by **Channels**. The **Publishing Overview** panel on the right counts this week's **Queued**, **Drafts**, **Published** and **Failed** posts.

Times use your device's time zone.

### Use the calendar

1. Click **Calendar**.
2. Pick **Day**, **Week** or **Month**. Click **Today** to jump back to the current date.
3. To move a scheduled post, drag it to a new slot. The message **Post rescheduled to …** appears. In **Month** view the post keeps its time of day.
4. To plan a new post, click an empty slot. The composer opens for that date.
5. Click **No Date** to see **Undated drafts**, the drafts that have no date yet.

You cannot drag posts that are **Published**, **Partial**, **Publishing** or **Cancelled**.

### Publish a draft or a queued post now

1. In the **Drafts** tab, click **Publish** on the post. In the **Queue** tab, click the **⋯** menu, then **Publish Now**.
2. The **Publish to** window lists your connected accounts. Tick the ones to post to.
3. Click **Publish Now**. The post goes live immediately on the ticked accounts.

### Cancel a scheduled post

1. In the **Queue** tab, click the **⋯** menu on the post, then click **Cancel schedule**.
2. The **Cancel this scheduled post?** window opens. Click **Cancel schedule** to confirm.

The post moves to **Cancelled** in the **Sent** tab. You can still edit or reschedule it.

### Retry a failed post

Ohanvi tries each network up to 5 times before it marks the post **Failed**.

1. Open the **Sent** tab.
2. On a **Failed** or **Partial** post, click **Retry**. Only the networks that failed are tried again. Networks where the post already went out are left as they are.
3. To see which network failed and why, click the **⋯** menu, then **Post Details**.

### Delete a post

1. Click the **Delete** icon or menu item on the post. The **Delete this post?** window opens.
2. Click **Delete**.

!!! warning "Deleting does not un-publish"
    Delete removes the post from **Publish** only. Anything already sent to a network stays live there.

## Post statuses

| Status | Meaning |
| --- | --- |
| **Draft** | Saved, not scheduled or published. |
| **Scheduled** | Has a publish time. |
| **Queued** | Its publish jobs are waiting to run. |
| **Publishing** | At least one network is being posted to now. |
| **Published** | Went out on every selected network. |
| **Partial** | Went out on some networks and failed on others. |
| **Failed** | Failed on every network. |
| **Cancelled** | The schedule was cancelled before publishing. |

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **scheduledAt must be in the future** | The picked time has already passed. | Pick a later time. |
| **Channel account is disconnected: …** | The network was disconnected after you wrote the post. | Reconnect it in **Connect** → **Social Connections**, then try again. |
| **Post is awaiting approval and cannot be scheduled until approved** | The post was submitted for review. | Ask an approver to approve it in the **Approvals** tab. |
| **No channel is connected yet — posts cannot be published until at least one network is connected.** | No network is connected. | Click **Connect** and connect a network. |
| A post shows **Partial** or **Failed** | A network rejected the post, or its access expired. | Open **Post Details** to read the reason, fix it, then click **Retry**. |

## Related

- [Create and publish a social post](create-social-post.md)
- [Review posts before they publish](approve-social-posts.md)
- [Read social insights](view-social-insights.md)

!!! note "Screenshots to add"
    - After "Schedule a post" step 4 — the composer footer showing **Publishes** and **Schedule Post**.
    - After "Use the calendar" step 2 — the **Week** view with scheduled posts.
    - After "Retry a failed post" step 2 — a **Partial** post with the **Retry** button.
