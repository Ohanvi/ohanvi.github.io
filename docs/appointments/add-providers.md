---
title: Add providers and working hours
description: Add the people customers are booked with, choose which services each performs, and set the working hours that decide which times are offered.
---

# Add providers and working hours

A provider is the person an appointment is booked with. Ohanvi works out free times per provider, so you need at least 1 before any time can be offered. At the end you will have providers linked to their services and working hours that limit when bookings can happen.

## Before you start

- You can see **Appts** in the left rail. If not, ask your admin to give your role Appointments access.
- You have added your services. See [Add bookable services](add-services.md).
- You know the Ohanvi username of each person who will take bookings.

## Steps

### Add a provider

1. Open **Appts** in the left rail, then select **Providers**. The **Providers** page opens.
2. Click **Add provider**. The **Add provider** dialog opens.
3. In **Name**, type the name customers see when picking a provider, for example `Dr Mehta`.
4. In **Username**, type the Ohanvi login this provider maps to.
5. Under **Services performed**, click the services this person performs. Leave all unselected if they perform every service.
6. Leave **Taking bookings** on.
7. Click **Add provider**. The message **Saved** appears and the provider is listed with their username and services, or **all services**.

!!! note
    You cannot change **Username** after you add the provider. It links their bookings to that person's calendar. To use a different login, add a new provider and turn **Taking bookings** off on the old one.

### Edit a provider or stop their bookings

1. On the **Providers** page, click the pencil icon (**Edit**) on the provider. The **Edit provider** dialog opens.
2. Change **Name** or **Services performed**.
3. To stop offering their times but keep the record, turn **Taking bookings** off. The provider shows an **Inactive** badge.
4. Click **Save provider**.

### Set working hours

Working hours apply to the whole business. They come from your WhatsApp settings, not from each provider.

1. Click your initials in the bottom-left corner, then click **Settings**.
2. Select **WhatsApp**, then **Live Chat Settings**. You can also open **WhatsApp** → **Manage** → **Live Chat Settings**.
3. Scroll to **Working Hours**.
4. In **Timezone**, choose your business timezone, for example `Asia/Kolkata`.
5. For each day, tick the box to open that day, then click the start and end times to change them. An unticked day shows **Closed**.
6. Click **Save**.

Ohanvi offers only times inside these hours. The same hours also decide which WhatsApp auto-reply customers get, **Welcome** or **Off Hours**.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **No providers yet** — **Until one exists, no appointment slots can be offered.** | No provider has been added. | Click **Add provider**. |
| **Required** under **Name** or **Username** | The field is empty. | Fill in both fields. |
| **Could not save the provider** | The server refused the save. | Check the username and try again. If it keeps failing, ask your admin. |
| A service offers no times | No active provider performs it, or the day is **Closed** in **Working Hours**. | Add the service to a provider's **Services performed**, or open more days. |
| Times are offered at night | No working hours were saved, so every hour counts as open [VERIFY: open-all-day behaviour]. | Set **Working Hours** and click **Save**. |

## Related

- [Add bookable services](add-services.md)
- [Set booking rules and reminders](set-booking-rules-and-reminders.md)
- [Take bookings on WhatsApp](take-bookings-on-whatsapp.md)
- [Settings](../settings/index.md)

!!! note "Screenshots to add"
    - After step 2 of Add a provider — the **Add provider** dialog with **Services performed** chips
    - After step 7 of Add a provider — the **Providers** list
    - After step 5 of Set working hours — **Working Hours** with **Timezone** and day rows
