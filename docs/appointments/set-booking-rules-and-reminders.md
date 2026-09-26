---
title: Set booking rules and reminders
description: Choose when bookings confirm automatically, set notice and advance limits, turn on WhatsApp reminders, and set cancellation and no-show rules.
---

# Set booking rules and reminders

Booking rules decide what happens when a customer asks for a time: confirm it, hold it for your approval, or offer other times. At the end your workspace will confirm or queue requests the way you want, send WhatsApp reminders before each appointment, and handle late cancellations and no-shows.

## Before you start

- You can see **Appts** in the left rail. If you cannot open the settings below, ask your admin for Appointments settings access.
- You have set working hours. See [Add providers and working hours](add-providers.md).
- To send reminders, you have at least 1 approved WhatsApp template. See [Create a WhatsApp template](../whatsapp/create-message-template.md).

## Steps

### Open the booking rules

1. Click your initials in the bottom-left corner, then click **Settings**.
2. Select **Appointments**, then **Booking Rules**. The **Appointment Request Handling** page opens.

### Choose how requests are confirmed

Ohanvi uses the time the customer sends the request to pick a rule.

1. Under **During working hours**, choose one:
    - **Automatic confirmation** — confirms only if the time passes every availability and booking rule.
    - **Manual approval** — creates a pending request for staff to approve.
2. Under **Outside working hours**, choose **Automatic confirmation** or **Manual approval**.
3. Under **If requested appointment time is outside working hours**, choose one:
    - **Reject and show available slots** — the customer is offered free times instead.
    - **Allow request for manual approval** — the request is kept as **Requested** for you to decide.

### Set booking limits

Under **Booking rules**, type a number in each box:

| Field | What it does | Default |
| --- | --- | --- |
| **Minimum booking notice (minutes)** | How soon from now a customer can book. | `60` |
| **Maximum advance booking (days)** | How far ahead a customer can book. | `30` |
| **Slot granularity (minutes)** | The step between offered start times, for example every 30 minutes. | `30` |

### Turn on reminders

Reminders are off by default.

1. Under **Reminders**, turn on **Send appointment reminders**.
2. In **Send before (minutes)**, type when to send, separated by commas. `1440,120` means 1 day before and 2 hours before.
3. In **Send as template**, choose an approved WhatsApp template. This is required, because WhatsApp refuses free-text messages to customers who have not written in the last 24 hours.

Ohanvi fills the template's first variable with the service name and the second with the appointment date and time, in your business timezone. A reminder is not sent if the appointment was cancelled or moved in the meantime.

### Set cancellation and no-show rules

1. Under **Cancellations and no-shows**, in **Cancellation notice (minutes, 0 = any time)**, type how long before the appointment customers can still cancel from the WhatsApp chat.
2. In **Mark as no-show after (minutes, 0 = never)**, type how long after a confirmed appointment ends Ohanvi marks it **No-show**. Leave `0` to mark no-shows by hand.

### Save

1. Click **Save**. The message **Saved** appears at the top of the page.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Required — reminders cannot be sent as free text** under **Send as template** | Reminders are on but no template is chosen. | Choose a template, or turn reminders off. |
| **No approved templates found** | Your WhatsApp account has no approved templates. | Create one and wait for approval. See [Create a WhatsApp template](../whatsapp/create-message-template.md). |
| **Save failed** | The server refused a value, for example reminders on without a template. | Check every field, then click **Save** again. |
| Every request stays **Requested** | Both confirmation rules are **Manual approval**. | Switch one or both to **Automatic confirmation**. |
| Customers cannot book tomorrow's early slots | **Minimum booking notice (minutes)** is too high, or the day is outside **Maximum advance booking (days)**. | Lower the notice or raise the advance limit. |

## Related

- [Add providers and working hours](add-providers.md)
- [Take bookings on WhatsApp](take-bookings-on-whatsapp.md)
- [Manage appointments](manage-appointments.md)

!!! note "Screenshots to add"
    - After step 2 of Open the booking rules — **Appointment Request Handling** page, top half
    - After step 3 of Turn on reminders — **Reminders** card with **Send before (minutes)** and **Send as template**
    - After step 2 of Set cancellation and no-show rules — **Cancellations and no-shows** card
