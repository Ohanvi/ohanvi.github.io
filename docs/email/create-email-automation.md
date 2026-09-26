---
title: Automate emails with journeys
description: Build an automation flow that sends emails on its own when a contact joins a list, gets a tag, has a birthday or abandons a cart.
---

# Automate emails with journeys

Build an automation flow (a journey) that emails contacts on its own, for example a welcome series when someone joins your newsletter list. At the end, the flow is **Active**, and each new contact who meets the starting point moves through its steps without you sending anything.

## Before you start

- You can see **Email** in the left rail with **Automations** in its panel. If not, ask your admin for access.
- You have a verified sending address and at least 1 approved email template. See [Set up a sender address and verify your domain](set-up-sender-identity.md) and [Create an email template](create-email-template.md).
- A teammate with approval access is available. You cannot activate a flow you created yourself.
- Every email a flow sends uses credits. See [Credits and billing](../credits-and-billing.md).

## Steps

### Start a flow

1. Open **Email** in the left rail, then select **Automations**. The **Automation flows** screen opens.
2. Choose how to start:
    - Click **Choose flow template** to pick a starter flow, such as **Single Welcome Email**, **Simple 2-Email Nurture**, **Welcome Series (3 emails)**, **Tag Engaged Contacts** or **Win-Back Then Sunset**.
    - Click **Build from scratch** for an empty flow.
3. The **Build a New Flow** page opens. You set everything on this 1 page.

### Name the flow and choose what starts it

1. In **Journey Name**, type a name your team will recognise, for example `New Subscriber Welcome`.
2. Choose a starting point:

    | Starting point | Starts when | Also fill in |
    | --- | --- | --- |
    | **Signs up for email** | A contact joins the list you choose, including signups from a signup form on that list. | **Trigger List (enroll on join)** |
    | **Tag added** | The tag you choose is added to a contact, by hand, in bulk or by an import. | **Trigger Tag (enroll when added)** |
    | **Birthday** | It is the contact's birthday, or a set number of days before it. | **Days Before Birthday** (0–365) |
    | **Abandons a cart** | A shopper leaves a checkout on your connected store without paying. It cancels itself if they buy. | — |

3. Optional: under **Filter contacts**, add conditions that decide who is let into the flow.

### Add the steps

1. Choose a **Sender**.
2. Drag steps from the palette onto the flow map:
    - **Send Email** — choose a **Template \***.
    - **Wait** — set **Wait (minutes) \***. For example, 1440 minutes is 1 day.
    - **Tag Contact** and **Remove Tag** — add or remove a tag.
    - **If/Else** — branch on a **Field**, **Operator** and **Value \***.
    - **Split Path (A/B)** — split contacts evenly into 2 paths.
    - **Unsubscribe** — unsubscribe the contact from all future sends.
    - **Webhook** — call a **Webhook URL \*** in another system.
3. Drag steps to reorder them.
4. Check the summary under **Check everything before saving**.
5. Click **Save Flow**. The flow is saved as **Draft**. It does not run yet.

For a cart email, use `{{cartValue}}`, `{{cartItems}}` and `{{recoveryUrl}}` in the template.

### Turn the flow on

1. Ask a teammate to open **Automations**.
2. They click **⋮** (**More actions**) on the flow, then click **Activate**. The status changes to **Active**.

To stop new contacts entering, click **⋮** → **Pause**. Contacts already in the flow wait where they are until you activate it again. To copy a flow, click **⋮** → **Clone**.

!!! note
    To edit an active flow, pause it first, make your changes, then activate it again.

## Flow statuses

| Status | Meaning |
| --- | --- |
| **Draft** | Saved and editable. Nobody is enrolled. |
| **Active** | Enrolling contacts and sending. |
| **Paused** | No new contacts join, and contacts already in the flow stop moving. |

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **You cannot activate your own journey.** | Flows need a second person to switch them on. | Ask a teammate with approval access to click **Activate**. |
| **Journey has no steps.** or **A journey needs at least one step.** | The flow map is empty. | Drag at least 1 **Send Email** step onto the map. |
| **Pause the journey before editing it.** | The flow is **Active**. | Click **Pause**, edit, then activate again. |
| **A journey named '…' already exists.** | The name is taken. | Use a different **Journey Name**. |
| **Trigger tag is required for a Tag Added journey.** | **Tag added** is chosen without a tag. | Fill in **Trigger Tag (enroll when added)**. |
| **Enter a whole number of days between 0 and 365** | **Days Before Birthday** is out of range. | Type a number from 0 to 365. |

## Related

- [Create an email template](create-email-template.md)
- [Add email contacts, lists and segments](manage-email-contacts.md)

!!! note "Screenshots to add"
    - After step 2 of "Start a flow" — the **Starter Flows** picker
    - After step 2 of "Name the flow" — the starting-point tiles
    - After step 2 of "Add the steps" — a flow map with Send Email and Wait steps
    - After step 2 of "Turn the flow on" — the row menu with **Activate**
