---
title: Start a flow from a webhook
description: Give a flow its own webhook URL so any app, form or Google Sheet button can start it, then capture a test call and use its fields in your steps.
---

# Start a flow from a webhook

Give a flow its own webhook URL. Any app, website form or Google Sheet button that calls the URL starts the flow, and the data it sends is ready for your steps.

## Before you start

- Your role can create and change flows. See [Understand flows and the Flows list](flows-overview-and-list.md).
- The flow is saved at least once. The webhook URL belongs to a saved flow.
- For a Google Sheet button, you can edit the sheet and open **Extensions → Apps Script** in Google Sheets.
- For Zapier or Pabbly, see [Connect Zapier](../settings/connect-zapier.md) or [Connect Pabbly](../settings/connect-pabbly.md) instead.

## What the webhook URL accepts

| The caller sends | The flow gets |
| --- | --- |
| **POST** or **PUT** with a JSON body | Each JSON field as `{{trigger.<field>}}`, for example `{{trigger.order.id}}`. |
| **POST** or **PUT** with form fields (`name=Asha&city=Pune`) | Each form field as `{{trigger.<field>}}`. A name sent twice becomes a list. |
| **GET** with fields in the URL (`?name=Asha&city=Pune`) | Each URL field as `{{trigger.<field>}}`. |

Every call also carries details under `{{trigger._inbound.…}}`:

| Field | What it holds |
| --- | --- |
| `{{trigger._inbound.method}}` | `GET`, `POST` or `PUT` |
| `{{trigger._inbound.query.<name>}}` | A field from the URL, when the call also has a body |
| `{{trigger._inbound.headers.<name>}}` | The content type, the user agent and the caller's own `X-…` headers. Keys, passwords and signatures are never kept. |
| `{{trigger._inbound.receivedAt}}` | When the call arrived |

File uploads are not supported. Link previews and crawlers, such as the bot that WhatsApp or Slack sends when you paste a link, are ignored and start nothing.

## Steps

### Create the webhook URL

1. Open the flow in the builder and click **Save**. Until then the panel says **Save the flow first. The webhook URL belongs to a saved flow.**
2. Click the trigger at the start of the canvas. The **When this runs** panel opens.
3. Click the box at the top of the panel. Its right side reads **Change**. The **What starts this flow?** window opens.
4. Under **START**, click **Webhook**. Its line reads **Any app, form or Google Sheet button sends data to a URL**.
5. Under **Webhook URL**, click **Create webhook URL**.
6. Click the copy button on **Webhook URL** and keep the URL somewhere safe.

    [SCREENSHOT: Webhook trigger panel with the Webhook URL, the red "Copy it now" note, Google Sheet button (Apps Script) and Test URL]

!!! warning "The URL is shown only once"
    The panel reads **Copy it now — for security it is shown only once. Reset link makes a new one (the old one stops working).** After you close the flow, the URL cannot be shown again. Anyone who has the URL can start the flow, so share it only with the app that needs it.

### Capture a test call

A test call records the fields for your steps. It does not start the flow.

1. Under **Test event**, copy the **Test URL**. It is the webhook URL with `/test` at the end.
2. Click **Listen for test event**. The panel reads **Listening for a test call…** and checks every 5 seconds, for up to 5 minutes.
3. Send one call to the test URL from your app or form. For example, from a terminal:

    ```bash
    curl -X POST "<Test URL>" -H "Content-Type: application/json" \
      -d '{"name": "Asha", "phone": "919123456789", "order": {"id": "ORD-1042"}}'
    ```

4. Read the fields that appear. The panel shows **From the latest call** with the time, and a count such as **3 fields received**.

The fields are now offered as `{{trigger.…}}` in every step. Values that look like secrets, such as a token or password, are stored as `••••••••`.

If the test URL is no longer on screen, send the call to your webhook URL with `/test` added at the end.

### Publish the flow

1. Add your steps and map the trigger fields. See [Build an automation flow](build-automation-flow.md).
2. Click **Save**, then **Publish**. Check that the switch in the toolbar reads **Active**.
3. Point your app at the webhook URL, without `/test`.

Each call to the webhook URL now starts one run. Calls to a flow that is not published and active are refused.

### Start the flow from a Google Sheet button

1. Copy **Google Sheet button (Apps Script)** from the panel. It shows only while the webhook URL is on screen.
2. In your Google Sheet, open **Extensions → Apps Script**. Paste the script and save it.
3. In the sheet, insert a drawing or an image to act as the button.
4. Open the drawing's menu, choose **Assign script**, and type `startOhanviFlow`. [VERIFY: Google Sheets menu label]
5. Select a cell in a row, then click the button.

The script sends the selected row. Each column header becomes a field, for example `{{trigger.Phone}}` for a column headed `Phone`, plus `{{trigger.sheet}}` and `{{trigger.row}}`. The sheet shows the reply in a small pop-up, for example **Flow started.**

### Stop duplicate runs

Some apps send the same event twice when they retry.

1. Click **More options**.
2. Under **Duplicates**, type the field that identifies one event in **Field that identifies one event (optional)**, for example `order.id`. You can also click one of the suggested field names under the box.
3. Press Enter or click outside the box to save it.

The same value sent twice starts the flow once. The caller gets **Already received; nothing new was started.** If you leave the box empty, a top-level `eventId` or `deliveryId` field is used when the call has one.

### Switch off or reset the URL

1. Click **More options**.
2. To pause the URL, turn off **Accepting calls**. It then reads **Switched off — calls are refused**. The line under it shows how many calls arrived, for example **Received 12 times**.
3. To replace the URL, click **Reset link**. In **Reset the webhook URL?**, click **Reset**. The old URL stops working at once. Give the new URL to every app, form or sheet that used the old one.

## What the caller gets back

The webhook URL answers each call with JSON that has a `message`, and on success a `status` and `runId`.

| Code | `message` | Means |
| --- | --- | --- |
| 200 | **Flow started.** | A run started. |
| 200 | **Already received; nothing new was started.** | A duplicate. See "Stop duplicate runs". |
| 200 | **Test call recorded for the flow builder. It did not start the flow.** | A call to the test URL. |
| 404 | **Not found.** | The URL is wrong, was reset, or is switched off. |
| 413 | **The body is larger than the 256 KB limit.** | The call sent too much data. |
| 415 | **Send JSON, a form or URL fields; file uploads aren't supported yet.** | The call tried to upload a file. |
| 422 | A reason, for example that the flow is not published and active | The flow cannot take the call. |
| 429 | **Too many calls. Retry in a moment.** | A limit was reached. Retry after a short wait. |

Limits per webhook URL: 60 calls a minute. Each flow also starts at most about 5 runs a second, and each workspace about 10. [VERIFY: per-second limits are server defaults and may differ]

## Use Zapier or Pabbly

The panel reads **Using Zapier? Add the Ohanvi app’s “Start Ohanvi Flow” action.** Under **More options** → **Authentication**, it shows **URL (POST)**, **Header X-Api-Key** and **Body (JSON)** for the Zapier and Pabbly apps, which use an API key instead of the webhook URL. For keys and setup, see [Connect Zapier](../settings/connect-zapier.md) and [Connect Pabbly](../settings/connect-pabbly.md).

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **This flow has a webhook URL, made earlier. For security it can’t be shown again — reset the link to get a new one.** | The URL was created in an earlier session. | Use the copy you saved. If it is lost, click **Reset link** and update every caller. |
| The caller gets **Not found.** | The URL is wrong, was reset, or **Accepting calls** is off. | Check the URL, turn **Accepting calls** on, or reset the link and send the new URL. |
| The caller gets a 422 saying the flow is not published and active | The flow is a draft or turned off. | Click **Publish**, then check the toolbar switch reads **Active**. |
| **Listening for a test call…** stops and no fields appear | No call reached the test URL within 5 minutes, or the call had no fields. | Check the app sends to the URL ending in `/test` with at least one field. Click **Listen for test event** again. |
| A link pasted in a chat started nothing | Link previews are ignored on purpose. | Call the URL from the app itself, or open it with `curl`. |
| The caller gets **Too many calls. Retry in a moment.** | More than 60 calls a minute reached the URL, or the flow is busy. | Slow the caller down, or make it retry after a few seconds. |

## Related

- [Build an automation flow](build-automation-flow.md)
- [Test a step and pin sample data](test-a-step-and-pin-sample-data.md)
- [Start a flow from an app event](start-a-flow-from-an-app-event.md)
- [Connect Zapier](../settings/connect-zapier.md)
- [Test a flow and fix failed runs](test-and-monitor-flows.md)
