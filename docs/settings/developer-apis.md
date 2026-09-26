---
title: Send WhatsApp messages with the Developer APIs
description: Find the base URL, sign-in step and ready-to-copy request bodies you need to send WhatsApp messages from your own systems through Ohanvi.
---

# Send WhatsApp messages with the Developer APIs

Use the **Developer APIs** page to send WhatsApp messages from your own software. You will have the base URL, a way to get a sign-in token, and a ready request body for each message type.

## Before you start

- Your WhatsApp number is connected to Ohanvi. You can check this on **Settings** → **WhatsApp** → **Configuration**.
- Your role has WhatsApp access. Anyone on your team with WhatsApp access can call these APIs.
- A developer on your team can send HTTP requests from your system.

## Steps

### Open Developer APIs

1. Click your initials in the bottom-left corner, then click **Settings**.
2. Click your name at the top of the Settings list.
3. Under **Developer**, click **Developer APIs**. The **Developer APIs** page opens.

### Authenticate

The **AUTHENTICATION** section shows the **Base URL** (`https://app.ohanvi.com`) and 3 steps:

1. **Sign in for a token** — send `POST /login/signin` with your `username` and `password`. The bearer token is valid for 7 days.
2. **Send the token on every call** — add the header `Authorization: Bearer <token>` to each request.
3. **Post a message** — call `POST /api/v1/save?apiName=…` with the JSON body for the message type.

Use your own Ohanvi login. For a dedicated machine integration, ask an admin to create a separate user for it. See [Manage team members, roles and permissions](roles-and-permissions.md).

### Copy a request body

1. Under **MESSAGE ENDPOINTS**, click a message type: **Text**, **Template**, **Media**, **Contact**, **Location**, **Interactive**, **Reaction** or **Reply**. The row opens and shows its **REQUEST BODY**.
2. Click **Copy**. The message **Payload copied** appears.
3. Replace the sample values with yours, then send it from your system.

A successful call returns `{ "status": "success", "whatsappMessageId": "wamid…" }`.

### Rules to keep in mind

- **Rate limit 60 req/min per user**
- **Charged on delivery**
- **Recipients in E.164 (8–15 digits)** — include the country code, for example +919876543210.
- **Templates open conversations outside the 24-hour window** — use **Text** only within 24 hours of the customer's last message. See [Create a WhatsApp message template](../whatsapp/create-message-template.md).

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| Calls fail after about a week | The bearer token expired after 7 days. | Sign in again with `POST /login/signin` and use the new token. |
| A text message is not delivered | The customer has not messaged you in the last 24 hours. | Send an approved **Template** instead. |
| Calls are rejected when you send many at once | You passed 60 requests per minute for this user. | Slow down, or spread the load across time. |
| Clicking **Postman** does not download a file | The Postman collection is not on this page yet. | Use the request bodies under **MESSAGE ENDPOINTS** instead. |
| **Developer APIs** is missing under your name | Your role cannot see it. | Ask your workspace owner. |

## Related

- [Send a WhatsApp broadcast campaign](../whatsapp/send-broadcast-campaign.md)
- [Create a WhatsApp message template](../whatsapp/create-message-template.md)
- [Choose your own or Ohanvi's managed services](choose-connectors.md)

!!! note "Screenshots to add"
    - After step 3 of Open Developer APIs — the **AUTHENTICATION** section with the base URL and 3 steps
    - After step 1 of Copy a request body — an open **Template** row showing **REQUEST BODY** and **Copy**
