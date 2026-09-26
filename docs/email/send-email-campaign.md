---
title: Send an email campaign
description: Create an email campaign, send yourself a test, then send it now, schedule it for later, or pass it to a teammate for review.
---

# Send an email campaign

Create a campaign, pick who it goes to and which email it sends, and test it in your own inbox. At the end, the campaign is sending or scheduled, and **Send Logs** shows who received and opened it.

## Before you start

- You have a verified sending address. See [Set up a sender address and verify your domain](set-up-sender-identity.md).
- You have contacts in a list, or you know which contacts to pick. See [Add email contacts, lists and segments](manage-email-contacts.md).
- You have an approved email template, or you will use a ready-made one. See [Create an email template](create-email-template.md).
- You have credits. Each email sent through Ohanvi's default sender uses credits. See [Credits and billing](../credits-and-billing.md).

## Steps

### Create the campaign

1. Open **Email** in the left rail, then select **Campaigns**.
2. Click **Create email**. The **Create Campaign** page opens with 5 cards. Fill them in any order.
3. In **Name this email**, type an **Email name**, for example `Newsletter - May 2026`. Only your team sees it. It is not the subject line.
4. In **Who is sending it?**, choose an address in **Send from**. If the list is empty, click **Add a sending address**.
5. In **Who will receive it?**, choose a list in **Send to a list**. To add people 1 by 1, click **Pick people**, tick them in **Who should get this?**, and click **Done**.
6. Optional: choose a segment in **Segment (optional — narrows the list above)**. Only people on the list who also match the segment receive it.
7. In **What are you sending?**, choose a template in **Email to send**. Click **Preview this email** to check it, or **Design a new email** to make one.

The bar at the top shows which cards are done, and the footer reads **N of 5 completed**.

### Test the campaign

1. In **Preview & test**, click **Send Test Email**. On a new campaign, click **Save Draft & Send Test** instead.
2. In **Test Send — …**, type 1 or more addresses in **Recipient emails (comma-separated)**.
3. Confirm. The test arrives with **[TEST]** before the subject.
4. Open the test and check the links, images and merge tags.

A test send does not count toward the campaign's figures and does not appear in **Send Logs**.

### Optional: A/B test 2 versions

1. In **What are you sending?**, turn on **Enable A/B Testing**.
2. Choose a different template in **Variant B Template**.
3. Drag the slider to set what share of the audience gets Variant B. The rest gets the main template.

After sending, compare opens and clicks for each version on the campaign's performance view.

### Send now or schedule

1. Optional: in **Preview & test**, click **Schedule (blank = send on approval)** and pick a date and time. Leave it blank to send right away. If **Recommended send time** appears, click **Apply** to use it.
2. Optional: leave **Google Analytics / UTM tracking** ticked to tag every link with `utm_source=email`, `utm_medium=email` and the campaign name.
3. Click **Send email**. The **Send this email?** dialog shows the list, the sender, and that people who unsubscribed or bounced are skipped.
4. Click **Send email**. **Your email is on its way** appears. A scheduled campaign shows **Scheduled** in the list and sends at the chosen time.

To stop before sending, click **Save for later**. The campaign is saved as **In progress**.

### Pass a campaign to a teammate for review

1. On **Campaigns**, click **⋮** (**More actions**) on the campaign, then click **Send for review**. The status changes to **In review**.
2. The reviewer opens **⋮** → **Review & approve**. The **Send "…"?** dialog opens.
3. The reviewer adds a **Note (optional)**, then clicks **Send email** or **Reject**.

A rejected campaign can be edited and sent for review again.

### Manage a campaign after you create it

Open **⋮** on a campaign row:

- **Edit** — only while the campaign is **In progress**.
- **Duplicate** — copies the campaign as a new draft.
- **Send Test** — sends another test.
- **Cancel** — stops an **Approved**, **Scheduled** or **Sending** campaign.
- **Finish sending** — restarts a campaign stuck on **Sending**. Nobody gets it twice.
- **Resend to Non-openers** — for a **Sent** campaign, creates a draft copy that goes only to people who did not open it. The copy still needs to be sent.

### See campaigns on the calendar

1. Open **Email** in the left rail, then select **Calendar**. Campaigns show on the day they send.
2. Click a day, then click **Plan a campaign for this day** to start a campaign with that date filled in.
3. Click **Holidays** to see the days your business does not send on.

## Campaign statuses

| Status | Meaning |
| --- | --- |
| **In progress** | Saved, still being written. You can edit it. |
| **In review** | Waiting for a reviewer. |
| **Approved** | Approved and about to send. |
| **Scheduled** | Approved, waiting for its send time. |
| **Sending** | Going out now. |
| **Sent** | Every recipient has been handled. |
| **Rejected** | The reviewer sent it back. Edit it and send it for review again. |
| **Cancelled** | Stopped before it finished. |
| **Failed** | The send could not complete. |

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Your wallet balance is empty. Please add money to your wallet before sending an email campaign.** | You have no credits and the campaign uses Ohanvi's default sender. | [Add funds](../add-funds.md), then send again. |
| **Choose a list, or pick the people this should go to.** | No recipients are chosen. | Choose a list, or click **Pick people**. |
| **Pick a sender identity or configure a default one first.** | No sender is chosen and there is no default sender. | Choose a sender in **Send from**, or set a default sender. |
| **A segment narrows a list. Choose a list too, or clear the segment.** | A segment is chosen without a list. | Choose a list as well. |
| **Variant B must be a different template than the main one.** | Both versions use the same template. | Choose a different **Variant B Template**. |
| **This account requires a different user to approve a campaign than the one who created it.** | Your workspace requires a second person to approve. | Click **Send for review** and ask a teammate to approve it. |
| **This was due …** when approving | The scheduled time has passed. | Click **Pick a new date**, or **Send it now anyway**. |

## Related

- [Create an email template](create-email-template.md)
- [Track results and handle unsubscribes and bounces](track-email-results.md)
- [Credits and billing](../credits-and-billing.md)

!!! note "Screenshots to add"
    - After step 2 of "Create the campaign" — the **Create Campaign** page with the 5 cards
    - After step 2 of "Test the campaign" — the **Test Send** dialog
    - After step 3 of "Send now or schedule" — the **Send this email?** dialog
    - After step 1 of "Manage a campaign" — the row menu on a **Sent** campaign
