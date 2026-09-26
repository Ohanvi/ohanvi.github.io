---
title: Read Marketing Analytics
description: Understand every number on Marketing Analytics — sending health, delivery and read rates, weekly performance, best campaigns, failures and revenue.
---

# Read Marketing Analytics

Read the **Marketing Analytics** screen section by section. At the end, you know whether you can send, how many broadcast messages were delivered, opened and acted on, which campaigns worked, why messages failed, and what revenue your broadcasts earned.

## Before you start

- You can see **Analytics** → **Marketing Analytics**. See [Set up data for Analytics](set-up-analytics-data.md).
- You have sent at least one WhatsApp **Campaign** broadcast in the window you want to review.

## Steps

### Open the screen and choose a window

1. Open **Analytics** in the left rail, then select **Marketing Analytics**. The screen shows **Broadcast delivery, reads and who to follow up with.**
2. Click **7d**, **30d**, **90d** or **All** at the top right. **30d** is selected when the screen opens.
3. Click **Refresh** to reload the numbers.

The window covers broadcasts created in that period. Every number comes from broadcasts sent from Ohanvi and the status updates WhatsApp sends back.

### Check if you can send

The **Can you send?** strip at the top shows your WhatsApp number's health.

| Item | What it tells you |
| --- | --- |
| **Quality** | Your quality rating from WhatsApp. Green is healthy; anything else shows in amber. |
| **Limit** | Your messaging limit tier, for example `1K / day`, or **Unlimited**. |
| **Used** | Conversations started in the last 24 hours, out of your daily cap, and the percentage left. |
| **Health** | **Available** when your account is connected; otherwise the account status. |
| **Access** | Shows **Reconnect needed** when your WhatsApp access has expired. |

Items appear only when Ohanvi has that information.

### Read Where you stand

The **Where you stand** tiles count messages, not people. One contact reached by 3 campaigns counts 3 times.

| Tile | Meaning | Shown green when |
| --- | --- | --- |
| **New contacts** | Not tracked yet. Always shows **—**. | — |
| **Messages delivered** | Messages that reached the phone, and the % of sent. | 95% or more of sent |
| **Messages opened** | Delivered messages that were read, and the % of delivered. | 75% or more of delivered |
| **Clicks and replies** | Messages that got a click or a reply, and the % of opens. | 10% or more of opens |
| **Orders** | Orders credited to your broadcasts, and the % of delivered. Shows only with a store connected. | 3% or more of delivered |

A tile below its threshold shows in red.

### Read Do this next

**Do this next** lists up to 4 suggestions worked out from the current window. Each has a button. See [Act on your analytics](act-on-analytics.md).

### Read Performance over time

**Performance over time** shows one bar per calendar week (Monday start) across the window. Each bar splits into:

- **Read it** — delivered and read.
- **Delivered, unread** — delivered but not opened.
- **Never arrived** — failed to deliver.

The last bar is usually a part week, so its total is lower.

### Read What works, what does not

**Best campaigns** and **Worst campaigns** each list up to 5 campaigns, ranked by read rate (reads ÷ delivered). Each row shows the read rate and how many messages were sent. A rate at or above the average of all campaigns shows green; below average shows red.

Only campaigns with at least 1 delivered message appear.

### Read When sending goes wrong

**Why messages failed** lists each failure reason WhatsApp reported, with a count. This section appears only when there were failures in the window.

### Read What it earned

**What it earned** appears when a store is connected and at least 1 order was credited in the window.

- **Orders** — orders credited to your broadcasts.
- **Attributed revenue** — the value of those orders.
- A list of up to 5 campaigns by revenue, with orders and revenue for each.

An order is credited to the last broadcast the buyer received within 7 days before ordering (last-touch attribution).

### Read Last broadcast

The **Last broadcast** panel, on the right, shows your most recent campaign in the window with **Delivered**, **Read**, **Replied** and **Failed** counts.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Couldn't load analytics** | The report timed out. Your broadcasts are not affected. | Click **Try again**. If it repeats, pick a shorter window. |
| **No broadcasts in this window** | Nothing was sent in the selected period. | Choose a longer window, such as **All**. |
| **Messages opened** looks low | WhatsApp reports a read only when the recipient's phone sends a read receipt. | Compare read rates between campaigns rather than against 100%. |
| **Can you send?** strip is missing | Ohanvi could not load your WhatsApp configuration. | Check **WhatsApp** → **Configuration**, then click **Refresh**. |
| No **What it earned** section | No store is connected, or no order was credited in the window. | Connect a store. See [Set up data for Analytics](set-up-analytics-data.md). |

## Related

- [Set up data for Analytics](set-up-analytics-data.md)
- [Act on your analytics](act-on-analytics.md)
- [Read Store Analytics](read-store-analytics.md)
- [Create a WhatsApp template](../whatsapp/create-message-template.md)

!!! note "Screenshots to add"
    - After Open the screen, step 2 — full screen with the window pills and **Can you send?** strip
    - After Read Where you stand — the tile row with green and red captions
    - After Read Performance over time — the weekly bar chart with its legend
    - After Read What it earned — the revenue panel with campaign rows
