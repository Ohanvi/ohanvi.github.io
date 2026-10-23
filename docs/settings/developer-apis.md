---
title: Send WhatsApp messages with the Developer APIs
description: Create an API key, copy ready request bodies and download the Postman files to send WhatsApp messages from your own systems through Ohanvi.
---

# Send WhatsApp messages with the Developer APIs

Use the **Developer APIs** page to send WhatsApp messages from your own software with an API key. You create the key on this page, and the same page has the request bodies and the Postman files. There is no sign-in or token step.

## Before you start

- Your WhatsApp number is connected to Ohanvi. You can check this on **Settings** → **WhatsApp** → **Configuration**.
- Your role has WhatsApp access.
- A developer on your team can send HTTP requests from your system.

## Steps

### Open Developer APIs

1. Click your initials in the bottom-left corner, then click **Settings**.
2. Click your name at the top of the Settings list.
3. Under **Developer**, click **Developer APIs**. The page opens with 3 tabs: **API Keys**, **Usage Log** and **Docs**.

### Create an API key

1. On the **API Keys** tab, click **Create key** (or **Create your first key**).
2. Give the key a name, choose when it expires, and click **Create key**.
3. Copy the key now. It is shown only once. It looks like `wak_…`.

The key can send messages and read your approved templates, delivery status, contacts and segments, for your workspace only. It cannot reach anything else.

### Send with the key

Add the key to every request in the `X-Api-Key` header, and call `POST /api/v1/save?apiName=…` with the JSON body for the message type. The base URL is `https://app.ohanvi.com`.

A login token does not work on these APIs. Only an API key does.

### Copy a request body

1. Open the **Docs** tab. It lists one ready request for each message type: **Text**, **Template**, **Media**, **Contact**, **Location**, **Interactive**, **Reaction** and **Reply**.
2. Click **Copy** on the one you need.
3. Replace the sample values with yours, then send it from your system.

A successful call returns `{ "status": "success", "whatsappMessageId": "wamid…" }`.

### Use Postman

On the **Docs** tab, click **Postman collection** and **Environment** to download the two files. Import both into Postman, open the environment, paste your key into `apiKey`, and run any request under **1. Send Messages** or **2. Find / Read**. The key is added to every request for you.

### Send one template to many numbers

Use the bulk call to send one approved template to up to 100 numbers at once. Open the **Docs** tab and copy **Queued template, bulk**, or call `POST /api/v1/wa/messages/template/bulk` with your key.

1. Put the template name and language at the top of the request. These are shared by everyone in the call.
2. List each number under `recipients`. A number can carry its own `variables`, for example the person's name.
3. Send the request. It replies once every number has been tried.

The reply gives you a `batchId`, and counts for `sentCount`, `failedCount` and `retryingCount`. A number that is not valid is listed under `rejected` with its position, and the rest are still sent. Keep the `batchId`. You need it to check the whole batch later.

You can make one bulk call a minute.

### Check the status of a message

Use the message id from the send reply.

1. Open the **Docs** tab and copy **Message status**, or call `GET /api/v1/wa/messages/{messageId}` with your key.
2. Read `status`. It is `QUEUED`, `SENDING`, `SENT` or `FAILED`, and it tells you whether Ohanvi handed the message to WhatsApp.
3. Once WhatsApp reports back, `deliveryStatus` shows `DELIVERED` or `READ`, with `deliveredAt` and `readAt`. If the message failed, `failureReason` says why.

### Check the status of a whole bulk call

You do not need to check each message one by one. Use the `batchId` from the bulk reply.

1. Open the **Docs** tab and copy **Bulk message status**, or call `GET /api/v1/wa/messages/bulk/{batchId}` with your key.
2. Read the counts at the top: `total`, `sentCount`, `failedCount` and `inProgressCount`. They add up to `total`. The batch is finished when `inProgressCount` is 0.
3. Read `deliveredCount`, `readCount` and `deliveryFailedCount` for what WhatsApp reported. These can be a little behind `sentCount`, because WhatsApp reports after it delivers.
4. Look in `messages` for one entry per number, with its `to`, `status`, `wamid`, `error` and `deliveryStatus`. Match the entries by `to`.

You see only your own batches. An unknown `batchId` returns "Batch not found". Status is kept for 90 days.

### Download the Tally scripts

On the **Docs** tab, click **Tally scripts** to download 2 Windows scripts that send invoice PDFs from a folder. See [Send TallyPrime invoices on WhatsApp](../whatsapp/send-tally-invoices-on-whatsapp.md).

### Rules to keep in mind

- **Rate limit 60 req/min per user**
- **Charged on delivery**
- **Recipients in E.164 (8–15 digits)** — include the country code, for example +919876543210.
- **Templates open conversations outside the 24-hour window** — use **Text** only within 24 hours of the customer's last message. See [Create a WhatsApp message template](../whatsapp/create-message-template.md).
- **A utility template sent through the API costs Meta's rate plus 8 paise** from your credits.
- **Pay as you go includes 10,000 API messages a month.** Paid plans have no limit. Past 10,000 on **Pay as you go**, calls are refused with a message to choose a plan.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| Calls fail with 401 | The key is missing, wrong, revoked or expired, or a login token was sent instead of a key. | Send the key in the `X-Api-Key` header. If it was revoked, create a new key. |
| A text message is not delivered | The customer has not messaged you in the last 24 hours. | Send an approved **Template** instead. |
| A bulk call is refused with "one call per minute" | You sent a second bulk call within a minute. | Wait for the number of seconds in the message, then send it again. |
| A message in a bulk call shows `retrying` | WhatsApp could not be reached for that number on the first try. | Check it again with **Bulk message status**. Ohanvi retries it on its own. |
| Bulk message status says "Batch not found" | The `batchId` is wrong, belongs to another workspace, or is older than 90 days. | Use the `batchId` from your own bulk reply. |
| Calls are rejected when you send many at once | You passed 60 requests per minute for this user. | Slow down, or spread the load across time. |
| **Postman collection** does not download a file | Downloads work in the web app only. | Open Ohanvi in a browser, or copy the request bodies from the **Docs** tab. |
| **Developer APIs** is missing under your name | Your role cannot see it. | Ask your workspace owner. |

## Related

- [Send TallyPrime invoices on WhatsApp](../whatsapp/send-tally-invoices-on-whatsapp.md)
- [Send a WhatsApp broadcast campaign](../whatsapp/send-broadcast-campaign.md)
- [Create a WhatsApp message template](../whatsapp/create-message-template.md)
- [Choose your own or Ohanvi's managed services](choose-connectors.md)

