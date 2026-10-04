---
title: Connect Pabbly
description: Connect Pabbly Connect to Ohanvi both ways: send Ohanvi events out to a workflow, or let a workflow write into Ohanvi with an API key.
---

# Connect Pabbly

Connect Pabbly Connect to Ohanvi in both directions. Subscriptions push CRM, WhatsApp, form and email events out to a Pabbly workflow. API keys let a Pabbly workflow write records back into Ohanvi. You can use one direction or both. Takes about 15 minutes.

## Before you start

- You can open **Integrations** in **Settings**.
- You have a Pabbly Connect account at connect.pabbly.com.
- For events going out: you have a Pabbly workflow that starts with a **Webhook** trigger. That trigger gives you the webhook URL you paste here.
- For records coming in: you know which user the key should act as. See [Manage team members, roles and permissions](roles-and-permissions.md).

## The two directions

| Direction | What it does | What you need in Ohanvi |
| --- | --- | --- |
| Ohanvi to Pabbly | Ohanvi sends an event to your Pabbly workflow when something happens. | A **subscription** with a webhook URL. |
| Pabbly to Ohanvi | Your Pabbly workflow reads or writes records in Ohanvi. | An **API key**. |

Both are optional and independent.

## Steps

### Open the Pabbly screen

1. Click your initials in the bottom-left corner, then click **Settings**.
2. In the left list, under **Workspace**, select **Integrations**.
3. Under **Integration**, click **Pabbly**. The **Pabbly Connect** page opens.
4. Read the pills under the title. They show the active keys, for example **1 active key**, and the live subscriptions.

### Send events out with a subscription

1. In Pabbly Connect, create a workflow. Add a **Webhook** trigger. Copy the URL it shows.
2. In Ohanvi, scroll to **Subscriptions** and click **New subscription**. The **New Pabbly subscription** window opens.
3. In **Event**, choose what should be sent, for example **New contact**. It is required. The window says **Choose an event** if you skip it.
4. In **Name (optional)**, type a label, for example `Notify sales on new deal`.
5. In **Webhook URL**, paste the URL from Pabbly. It must start with https://. The window says **Paste the webhook URL from Pabbly.** if it is empty, and **Must be an https URL — the server rejects anything else.** for other links.
6. Click **Save subscription**. The message **Subscription saved.** appears.
7. On the new subscription row, click **Test**. This sends one real request. Pabbly's webhook trigger cannot be set up until it has received one request.
8. In Pabbly, finish the workflow using the sample fields it captured.
9. Read the row to check it. It shows the event, the target URL, **Last delivered** and **Status**. A **Live** chip means it is active. **Retired** means it is switched off.

#### Events you can send

| Group | Events |
| --- | --- |
| CRM | **New contact**, **Updated contact**, **New deal**, **Updated deal**, **New lead**, **New account** |
| WhatsApp | **WhatsApp message received**, **WhatsApp message delivered or read** |
| Forms | **Form submitted** |
| Email | **Email opened**, **Email link clicked**, **Email bounced**, **Joined an email list** |
| Other | **Appointment booked**, **Ticket created** |

### Start from a popular event

1. Scroll to **Popular events to subscribe to**.
2. On a card, click **Subscribe**. **New subscription** opens with the event already chosen.
3. Paste the webhook URL from your Pabbly workflow and click **Save subscription**.

### Delete a subscription

1. On the subscription row, click **Delete**.
2. In **Delete "name"?**, click **Delete**. Pabbly stops receiving this event at once.
3. The message **Subscription deleted.** appears.

### Let Pabbly write into Ohanvi with a key

1. Under **API keys**, click **Create key**. The **Create Pabbly API key** window opens.
2. In **Key name**, type a name, for example `Ops workflows`. It is only for your reference.
3. Under **Acts as**, choose **You** (the key carries your own permissions) or **A specific user**. For a specific user, type the **Username** of a least-privilege service account, for example `pabbly.service`.
4. Under **Expires after**, choose **30 days**, **90 days**, **1 year** or **Never expires**.
5. Read the note at the bottom. The two connection-test handlers stay admin-only, even for a service account key. Every write action still works with that account's own permissions.
6. Click **Create key**. The **Your Pabbly API key** window opens.
7. Copy the **Server URL** and the **API Key**. The key is shown only once.
8. Tick **I have copied my key somewhere safe**, then click **Done**.
9. In Pabbly Connect, add an **API by Pabbly Connect** step. Set an `X-Api-Key` header to this key. Point it at the server URL followed by `/api/v1/save?apiName=…` (or `/find`, `/update` and so on).

### Add a signing secret (optional)

1. Find **Advanced: Signing secret**. The chip beside it reads **Set** or **Not set**.
2. Click **Set secret**. The **Set a signing secret** window opens.
3. In **Signing secret**, type a long random string of at least 16 characters.
4. Click **Save**. The message **Signing secret saved.** appears.
5. In your Pabbly workflow, check the `X-Pabbly-Signature` header. It is an HMAC-SHA256 signature of each delivery, so you can confirm it came from Ohanvi.
6. To change it later, click **Update secret**, type the new value and click **Update**. Update every workflow that checks the header at the same time, or its checks will fail.

### Revoke a key

1. Under **API keys**, click **Revoke** on the key's row.
2. In **Revoke "name"?**, click **Revoke**. Anything using this key stops on its very next request.
3. The message **Key revoked.** appears.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Must be an https URL — the server rejects anything else.** | The webhook URL does not start with https://. | Paste the exact URL from the Pabbly Webhook trigger. |
| **Could not save the subscription.** | The event or URL was refused. | Check both fields and save again. |
| Pabbly's trigger will not finish setting up. | It has not received a request yet. | Click **Test** on the subscription, then refresh the trigger in Pabbly. |
| **Could not send the test delivery.** | The webhook URL did not accept the request. | Check the workflow is on and the URL is correct. |
| **Use at least 16 characters — this is what verifies deliveries came from your server.** | The signing secret is too short. | Type a longer random string. |
| Signature checks fail after an update. | The workflow still checks the old secret. | Update the secret in every workflow that verifies it. |
| A workflow's writes stopped. | Its key was revoked or expired. | Create a new key and update the **API by Pabbly Connect** step. |

## Related

- [Connect Zapier](connect-zapier.md)
- [Own vs managed services](choose-connectors.md)
- [Manage team members, roles and permissions](roles-and-permissions.md)
