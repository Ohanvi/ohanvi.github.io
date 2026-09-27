---
title: Read a WhatsApp campaign report
description: See how many campaign messages were sent, delivered, read, clicked and replied to, why some failed, and resend or export the results.
---

# Read a WhatsApp campaign report

Open a sent campaign and read how it landed: how many people got it, read it and acted on it, and why some messages failed. At the end, you know what to fix, you have resent the failures, and you have a report file to share.

## Before you start

- You have sent at least 1 campaign. See [Send a broadcast campaign](send-broadcast-campaign.md).
- You can see **Campaign** in the **WhatsApp** panel.

## What each delivery status means

Figures fill in as WhatsApp confirms each message, so a campaign sent a minute ago is still counting.

| Status | Meaning |
| --- | --- |
| **Queued** | Waiting to be handed to WhatsApp. |
| **Sent** | WhatsApp accepted the message. |
| **Delivered** | The message reached the person's phone. |
| **Read** | The person opened it. People who turned off read receipts never show as **Read**, even when they read it. |
| **Clicked** | The person tapped a tracked link button. Needs **Enable Click Tracking** on the template. |
| **Replied** | The person wrote back. |
| **Failed** | WhatsApp did not deliver it. The reason is written on the row. Failed messages are not charged. |

## Steps

### Read the summary

1. Open **WhatsApp** in the left rail, then select **Campaign**.
2. At the top, read the totals across all campaigns: **Campaigns**, **Messages sent**, **Delivered**, **Read** and **Failed**.
3. Click a campaign in the list. Its report opens on the right, with a **GRADE** and 3 tabs: **Overview**, **Recipients** and **Diagnostics**. On the right, **Message sent** shows the message that went out.

    ![Campaign report with the Overview, Recipients and Diagnostics tabs, Where the audience went, and Message sent](../assets/screenshots/whatsapp-campaign-report-1-report.png)

### Read the Overview tab

- **Where the audience went** shows each stage from sent to delivered, read, clicked, replied and ordered. The drops are where you lose people. Click a stage to open that exact list of people.
- **What the readers then did** shows how many readers **Clicked**, **Replied**, **Ordered** or **Unsubscribed**.
- **vs your last broadcast** compares this send with the broadcast before it. Green beat the one before, red slipped.
- **What it drove** shows reads and clicks. With a store connected, it also shows the revenue.
- **Do this next** lists suggested actions, for example following up people who read but never clicked, or leaving out numbers that failed twice in a row.
- **How fast it landed** shows the **Median time to deliver**, **Median time to read** and **Peak reading hour**.

### Find out why messages failed

1. Open the **Diagnostics** tab. **Is this good?** compares this campaign's **Delivery rate**, **Read rate**, **Click rate** and **Reply rate** with **Your average** and **Your best** over your own last 30 days. Green is **ahead** of your average, red is **behind** it.

    ![Diagnostics tab with Is this good? comparing this campaign with your average and your best](../assets/screenshots/whatsapp-campaign-report-2-diagnostics.png)

2. When messages failed, read **Why messages failed**. It groups failures by WhatsApp's reason, in plain words, with the fix.
3. Read **Links & buttons** for clicks per link, and **Template health** for the template's quality rating.
4. Read **What this send cost your list**: **Reached first time**, **At risk** (2 or more failures in a row), **Unsubscribed** and **Excluded**.

### Resend to the people it missed

1. On the campaign, click the **Resend** icon (a paper plane) at the top right. The **Resend?** window shows how many people it goes to. If every message was delivered, the message **Nothing to resend — every message landed.** appears instead.

    ![Nothing to resend — every message landed.](../assets/screenshots/whatsapp-campaign-report-4-nothing-to-resend.png)

2. Click **Resend**. **Resend started** appears. Delivery updates arrive as WhatsApp confirms each one.

Resend goes to the failed recipients. When nothing failed, it goes to the people whose message was not delivered. Each resent message is charged when it is delivered.

### See who received it

1. On the campaign, open the **Recipients** tab, or click the **Who received it** icon (a list with ticks) at the top right. Each row shows the **Contact**, how far the message **Reached**, and **When**.
2. Filter with the chips **All**, **Delivered**, **Read**, **Clicked**, **Replied** or **Failed**. Each chip shows its count. The set you filter to is the set you can resend.

    ![Recipients tab with the All, Delivered, Read, Clicked, Replied and Failed chips](../assets/screenshots/whatsapp-campaign-report-3-recipients.png)

3. To resend only the failures, click **Resend … failed**.

### Open the full report and download it

1. On the campaign, open **More actions** and click **Full report**. **Campaign Analytics** opens.
2. Use the tabs **Overview**, **Sent**, **Delivered**, **Read**, **Clicked**, **Replied**, **Failed** and **Test**. Each tab shows its share, for example **94% (250)**.
3. On a list tab, filter by **Click Status** (**Has Clicked** / **Not Clicked**) or **Reply Status** (**Has Replied** / **Not Replied**).
4. Click **Broadcast** to send the campaign again to only the people in the filtered list, then confirm in **Re-send to filtered recipients?**.
5. Click **Export** to download the filtered list, or **Download Report** to download the whole report.

The **Test** tab lists the test messages you sent for this campaign, with their status.

For totals across all your campaigns, including revenue from broadcasts, use **Analytics**. See [Read Marketing Analytics](../analytics/read-marketing-analytics.md).

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Read** is lower than **Delivered** by a lot | Some people turned off read receipts, or have not opened it yet. | Compare with **Replied** and **Clicked**, and check again later. |
| Clicks show 0% with **No URL button on template** | The template has no link button, so no click can be tracked. | Add a URL button with **Enable Click Tracking** to your next template. |
| Failure reason: **This person has chosen not to receive marketing messages from your business, so WhatsApp blocked this one.** | The person opted out of marketing messages in WhatsApp. | Leave them out of marketing campaigns. |
| Failure reason: **WhatsApp did not deliver this one. It limits how many marketing messages a person receives so their inbox stays useful …** | Meta caps the marketing messages each person gets. | Try again later, or reach this person another way. |
| Failure reason: **This number cannot receive WhatsApp messages. …** | The number is not on WhatsApp, is mistyped, or blocked you. | Check the number on the contact. |
| **Nothing to resend — every message landed.** | No message failed or was left undelivered. | No action needed. |

## Related

- [Send a broadcast campaign](send-broadcast-campaign.md)
- [Create a WhatsApp message template](create-message-template.md)
- [Read Marketing Analytics](../analytics/read-marketing-analytics.md)

!!! note "Screenshots to add"
    - After step 2 of Find out why messages failed — **Why messages failed** with grouped reasons
    - After step 2 of Open the full report — **Campaign Analytics** with its status tabs
