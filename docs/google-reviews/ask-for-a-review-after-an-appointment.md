---
title: Ask for a Google review after an appointment
description: Add the flow starter that sends customers your Google review link on WhatsApp 2 hours after their appointment is marked completed.
---

# Ask for a Google review after an appointment

Add a ready-made flow that sends each customer your Google review link on WhatsApp 2 hours after their appointment is marked completed. At the end, the flow is published and runs on every completed appointment. It takes about 10 minutes, plus Meta's template approval.

## Before you start

- Your review page is set up and linked to your Google listing. See [Get more Google reviews](get-more-google-reviews.md).
- Your WhatsApp number is connected. See [Connect your WhatsApp number](../whatsapp/connect-whatsapp-number.md).
- You use Appointments, and your team marks visits completed. See [Manage appointments](../appointments/manage-appointments.md).
- You have a WhatsApp template approved by Meta with `{{1}}` for the customer's name and `{{2}}` for the review link. See [Create a message template](../whatsapp/create-message-template.md).
- You can open **Flows** and publish flows. See [Understand flows and the Flows list](../flows/flows-overview-and-list.md).

## What the starter does

**Ask for a Google review after an appointment** — When an appointment is marked completed, wait 2 hours, then send the customer your Google review link on WhatsApp. Skipped when your review page is not set up.

| Step | What it does |
| --- | --- |
| **Wait 2 hours** | Gives the customer time to get home after the visit. |
| **Only continue if the review page is set up** | Stops quietly when your review page has no link, instead of sending a broken message. |
| **Send the review request on WhatsApp** | Sends your template to the customer's phone, with their name and your review link filled in. |

The review link comes from your review page each time the flow runs. If you make a new QR code, the flow sends the new link without any change. With several branches, it sends the default branch's link. See [Make a branch the default](manage-branches.md#make-a-branch-the-default).

## Steps

### Prepare the WhatsApp template

1. Open **WhatsApp** in the left rail, then select **Template**.
2. Create a template with 2 variables: `{{1}}` for the customer's name and `{{2}}` for the review link. For example: `Hi {{1}}, thanks for visiting us today. If you have a minute, please share your experience on Google: {{2}}`
3. Submit it and wait until Meta approves it.

!!! warning "No offers in the message"
    Don't offer a discount, gift or anything else for a review. Google doesn't allow it, and can remove the reviews.

### Add the starter

1. Open **WhatsApp** in the left rail, then select **Flows**.
2. Click the arrow (**⌄**) on the right side of **New flow**, then click **Start from library**.
3. Under **Starters**, find **Ask for a Google review after an appointment**. Type `review` in **Search templates** to find it faster.
4. Click **Use**. The flow opens in the builder as a draft named **Untitled** followed by a number.
5. Click the name at the top and rename it, for example `Google review after appointment`.

### Finish the WhatsApp step

1. Click the step **Send the review request on WhatsApp**.
2. Check **Send to**. It is already set to the customer's phone from the appointment.
3. Under **Template**, open **Choose an approved template** and pick your review template.
4. If the template is approved in more than one language, pick one in **Language**.
5. Under **What goes in the message**, check **Variable {{1}}** and **Variable {{2}}**. They are filled with the customer's name and your review link.
6. Optional: click **Wait 2 hours** and change the wait.
7. Click **Save**.

### Publish it

1. Click **Publish** in the top bar.
2. Read the message. **Published and live — new runs use this version.** means it now runs on real appointments.

!!! warning "Live flows message real customers"
    From now on, every appointment marked completed sends a WhatsApp message 2 hours later. Messages already sent cannot be taken back.

### Test it

1. Book a test appointment for your own WhatsApp number.
2. Mark it completed. See [Manage appointments](../appointments/manage-appointments.md).
3. After 2 hours, check that the message arrived and the link opens your review page.
4. To check the run sooner, see [Test a flow and fix failed runs](../flows/test-and-monitor-flows.md).

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| The run stops at **Only continue if the review page is set up** | Your review page has no review link yet. | Confirm your business on **Review page**. See [Get more Google reviews](get-more-google-reviews.md). |
| **Choose an approved template** lists nothing, or reads **No template is approved yet** | No template is approved by Meta yet. | Create the template in **WhatsApp** → **Template** and wait for approval. |
| **The template needs a value for {{2}}.** | The template has a variable the step does not fill. | Check **What goes in the message**, or use a template with only `{{1}}` and `{{2}}`. |
| No message after an appointment | The appointment was not marked completed, or the flow is not published. | Mark the visit completed, and check that the flow is published. |
| The customer's link shows **This review link is not active** | **Page is live** is off on your review page. | Turn on **Page is live** on **Review page**. |

## Related

- [Start a flow from a template](../flows/use-flow-templates.md)
- [Get more Google reviews](get-more-google-reviews.md)
- [Manage appointments](../appointments/manage-appointments.md)
- [Build an automation flow](../flows/build-automation-flow.md)
