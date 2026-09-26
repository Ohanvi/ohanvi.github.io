---
title: Take bookings on WhatsApp
description: Add a ready-made booking chatbot so customers pick a service, a day and a free time on WhatsApp, and the booking lands in Appointments.
---

# Take bookings on WhatsApp

Customers book appointments by chatting with your WhatsApp number. A booking chatbot asks for the service, the day and the time, checks real availability, and saves the booking. At the end you will have a live flow that fills your **Appointments** page on its own.

## Before you start

- Your WhatsApp Business number is connected. See [Connect your WhatsApp number](../whatsapp/connect-whatsapp-number.md).
- You have at least 1 service and 1 provider. See [Add bookable services](add-services.md) and [Add providers and working hours](add-providers.md).
- You have chosen how requests are confirmed. See [Set booking rules and reminders](set-booking-rules-and-reminders.md).

## Steps

### Add the booking chatbot from the library

1. Open **WhatsApp** in the left rail, then select **Flows**.
2. Click **Start from library**. The template gallery opens.
3. Under **Chatbot templates**, find a booking flow:
    - **Appointment Booking** — for any service business. Starts on the keywords `book`, `appointment`, `booking`, `slot`.
    - **Salon Booking** — for salons and spas.
    - **Clinic Appointment** — for clinics and doctors.
4. Click **Preview** to see the conversation, then click **Use template**. A copy of the flow opens in the builder.
5. Review the messages. Change the wording to suit your business.
6. Save and publish the flow, as in [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md).

### What the customer sees

1. The customer sends a keyword, for example `book`.
2. The bot lists your active services. The customer picks one.
3. The bot lists the next days with free times, then the free times on the chosen day.
4. The bot books the time and replies with one of these outcomes:

| Outcome | When it happens | Where it shows in Ohanvi |
| --- | --- | --- |
| Booked | The time is free and your rule is **Automatic confirmation**. | **Appointments** with the status **Confirmed**. |
| Request received | Your rule is **Manual approval**, or the time is outside working hours and you allow manual approval. | **Appointments** with the status **Requested**. |
| Time taken | Someone else booked the same time a moment earlier. | Nothing is saved. The customer is asked to pick again. |

### Build your own booking flow

If you build a flow from scratch, add these blocks in this order: **Pick a service**, **Pick a date**, **Pick a time slot**, then **Book appointment** [VERIFY: where these blocks sit in the step menu]. **Book appointment** has 4 outcomes you can route: `confirmed`, `requested`, `slot_taken` and `rejected_show_slots`.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| The bot lists no services | No service is **Active**. | Turn **Active** on for at least 1 service on **Appts** → **Services**. |
| The bot offers no days or times | No active provider performs the service, the working hours are **Closed**, or the booking limits leave no free time. | Check **Providers**, **Working Hours**, and **Minimum booking notice (minutes)** and **Maximum advance booking (days)**. |
| Bookings arrive as **Requested**, not **Confirmed** | A confirmation rule is set to **Manual approval**. | Approve them on the **Appointments** page, or switch to **Automatic confirmation**. |
| The flow does not start | The flow is not published, or the customer's message does not contain a trigger keyword. | Publish the flow and check its keywords. |
| The confirmation message tells customers to reply `CANCEL` | The library text mentions it, but the ready-made flow does not handle a cancel reply [VERIFY: customer self-cancel]. | Edit the message, or cancel on the customer's behalf. See [Manage appointments](manage-appointments.md). |

## Related

- [Manage appointments](manage-appointments.md)
- [Set booking rules and reminders](set-booking-rules-and-reminders.md)
- [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md)

!!! note "Screenshots to add"
    - After step 3 of Add the booking chatbot — **Chatbot templates** with **Appointment Booking** visible
    - After step 4 of Add the booking chatbot — the cloned booking flow in the builder
    - After step 4 of What the customer sees — a phone chat showing service, day and time lists
