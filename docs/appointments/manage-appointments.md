---
title: Manage appointments
description: Confirm or reject booking requests, move an appointment to a free time, cancel it, and mark it completed or no-show from the Appointments page.
---

# Manage appointments

The **Appointments** page lists your bookings by day with their status. Use it to approve new requests, move a booking to another time, cancel it, and close it off after the visit. At the end every booking will have the right status, and the customer will have been told about the change on WhatsApp.

## Before you start

- You can see **Appts** in the left rail. If not, ask your admin to give your role Appointments access.
- Bookings are coming in. See [Take bookings on WhatsApp](take-bookings-on-whatsapp.md).

## Steps

### Find a booking

1. Open **Appts** in the left rail, then select **Appointments**. The **Appointments** page opens. The subtitle shows how many requests are waiting, for example **3 pending requests**.
2. Bookings are grouped under day headings: **Today**, **Tomorrow**, then the full date.
3. Each row shows the status, the service and time, the customer's phone and the provider, for example **with Dr Mehta**.
4. To see one day, click **Today**. Use **Previous day** and **Next day** to move. Click **Show all upcoming** (the X icon) to see every day again.
5. Click **Refresh** to load new bookings.

### Confirm or reject a request

New requests show the status **Requested**.

1. On the booking, click **Confirm** to accept it, or **Reject** to turn it down.
2. The message **Done** appears. The status changes to **Confirmed** or **Rejected**.

Ohanvi sends the customer a WhatsApp message: **Your appointment has been confirmed.** or **Sorry, your appointment request could not be accepted.**

### Move a booking to another time

**Move** is available on **Requested** and **Confirmed** bookings.

1. Click **Move**. A date picker opens. Pick the new date.
2. A time picker opens. Pick the new time.
3. If the time is free, the message **Appointment moved** appears. The booking is confirmed at the new time and its reminders move with it.
4. If the time is not free, the **Move appointment** dialog opens with the reason and **These times are free:**. Click one of the offered times to move the booking there.

**Move** does not send the customer a message. Tell them the new time yourself.

### Cancel a booking

1. On a **Requested** or **Confirmed** booking, click **Cancel**.
2. The message **Done** appears and the status changes to **Cancelled**. Queued reminders are removed.

Ohanvi sends the customer **Your appointment has been cancelled.**

!!! warning "A cancelled booking cannot be reopened"
    **Cancelled**, **Rejected**, **Completed** and **No-show** are final. To bring the customer back, they need to book again.

### Close off a visit

1. On a **Confirmed** booking, click the three-dot menu.
2. Choose **Mark completed** after the visit, or **Mark no-show** if the customer did not come.

To mark no-shows automatically, set **Mark as no-show after (minutes, 0 = never)**. See [Set booking rules and reminders](set-booking-rules-and-reminders.md).

### Booking statuses

| Status | Meaning | Actions offered |
| --- | --- | --- |
| **Requested** | Waiting for your approval. | **Confirm**, **Reject**, **Move**, **Cancel** |
| **Confirmed** | Booked. Reminders are queued if turned on. | **Move**, **Cancel**, **Mark completed**, **Mark no-show** |
| **Rescheduled** | Moved to a new time. | None on this page |
| **Rejected**, **Cancelled**, **Completed**, **No-show** | Closed. | None |

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Action failed** | The booking changed in the meantime, for example it was already cancelled or completed. | Click **Refresh** and check the status. |
| **That time is not available** | The new time is outside working hours or your booking rules, or no provider is free. | Pick one of the times under **These times are free:**. |
| **Somebody just took that time** | Another booking took the slot while you were moving this one. | Pick one of the offered times. |
| The customer did not get the WhatsApp message | Status messages are plain text. WhatsApp refuses plain text to customers who have not written to you in the last 24 hours. | Contact the customer from the WhatsApp inbox with an approved template. |
| **No appointments yet** | No booking has been made. | Add a booking flow. See [Take bookings on WhatsApp](take-bookings-on-whatsapp.md). |
| An older booking is missing | The page loads the latest bookings only [LIMIT]. | Find it on the **Schedule** → **Appointments** view. See [Schedule](../schedule/index.md). |

## Related

- [Take bookings on WhatsApp](take-bookings-on-whatsapp.md)
- [Set booking rules and reminders](set-booking-rules-and-reminders.md)
- [Schedule](../schedule/index.md)

!!! note "Screenshots to add"
    - After step 1 of Find a booking — **Appointments** page with day headings and a **Requested** booking
    - After step 1 of Confirm or reject a request — a row with **Confirm**, **Reject**, **Move** and **Cancel**
    - After step 4 of Move a booking — the **Move appointment** dialog with free times
    - After step 1 of Close off a visit — the menu with **Mark completed** and **Mark no-show**
