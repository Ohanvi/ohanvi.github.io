---
title: Start a flow from an app event
description: Start a flow when something happens in a connected app, such as a new Shopify order or a Shiprocket tracking update.
---

# Start a flow from an app event

Make a flow start by itself when something happens in an outside app, such as Shopify or Shiprocket.

## Before you start

- Your role can create and change flows. See [Understand flows and the Flows list](flows-overview-and-list.md).
- You can sign in to the app. You can connect it from the trigger panel itself.
- For Shiprocket, you can open its **Settings → API → Webhooks** page.

## How app events reach Ohanvi

Each app event in the list has a tag that says how soon the flow starts:

| Tag | What it means |
| --- | --- |
| **↻ Every 5 minutes** | Ohanvi checks the app on a timer. A new record starts the flow at the next check. Shopify works this way. |
| **⚡ Instant** | The app tells Ohanvi the moment it happens. Shiprocket works this way. |

- The first check of a timed event only marks where to start. Records that already exist do not start runs.
- One record or update starts one run. The same update sent twice starts the flow once.
- The flow starts only for the event you chose. Other events from the same account do not start it.

## Steps

### Choose the app event

1. Open the flow in the builder. See [Build an automation flow](build-automation-flow.md).
2. Click the trigger at the start of the canvas. The **When this runs** panel opens.
3. Click the box at the top of the panel. Its right side reads **Change**. The **What starts this flow?** window opens.
4. Scroll to the app's section, or type in **Search**, for example `order`.
5. Click the event, for example **New or updated order** under **Shopify**.

    [SCREENSHOT: What starts this flow? with the Shopify and Shiprocket sections and their ↻ and ⚡ tags]

On a blank canvas, **Add first step…** asks the same question.

### Choose the account

1. Under **1 · Account**, open **Listens to** and choose the account. If only one exists, it is already chosen.
2. If none exists, the panel says **No … account connected yet. Connect one so this flow can hear from it.**
3. Click **Connect** followed by the app's name. Each app connects its own way. See [Choose the account](add-an-app-step.md#choose-the-account).

### Finish a timed app (Shopify)

1. Read the line under the account: **Checks every 5 minutes. Shopify does not notify us, so a new record starts the flow on the next check.**
2. Click **Save**, then **Publish**.

New orders then start the flow within about 5 minutes.

### Link Shiprocket to the flow

Shiprocket cannot be set up for you. You paste a link into Shiprocket once per account.

1. Click **Save**. The link belongs to a saved flow. Before that, the panel says **Save the flow to get the link to paste into Shiprocket.**
2. Under **2 · Link it in Shiprocket**, read the instructions. Click **Copy** beside the link. It changes to **Copied**.
3. In Shiprocket, open **Settings → API → Webhooks**.
4. Paste the link as the URL for **A parcel's tracking changed**, then save.
5. Send a test event from Shiprocket.
6. Back in Ohanvi, click **Refresh** beside **Test event received?**.
7. Check that it reads **Test event received? Yes,** followed by when it arrived.

    [SCREENSHOT: 2 · Link it in Shiprocket with the link, the Copy button, and Test event received? Yes]

8. Click **Publish**.

After the test event arrives, click **Get sample event** under **Sample data**. Later steps can then pick the event's fields. See [Test a step and pin sample data](test-a-step-and-pin-sample-data.md#get-a-sample-event-for-the-trigger).

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Test event received? Not yet — send a test from Shiprocket, then refresh.** | Shiprocket has not sent anything to the link yet. | Check the link is saved in Shiprocket for the right event. Send a test, then click **Refresh**. |
| The flow starts a few minutes after the order | Shopify is checked every 5 minutes. | No fix needed. Use an app with **⚡ Instant** if timing matters. |
| Old orders did not start runs | The first check only marks where to start. | No fix needed. Only new records start runs. |
| **This app trigger is no longer offered, or the list of app triggers has not loaded. Use Change to pick another.** | The app event was removed, or the list did not load. | Reopen the flow. If it persists, click **Change** and pick another event. |
| **The list of app events could not be loaded. Reopen the flow to try again.** | The event list did not load. | Close the flow and open it again. |
| **Choose the account this webhook comes from first.** | No account is chosen under **Listens to**. | Choose the account, then save. |
| **Shopify did not accept this account's login. Reconnect it under Integrations, then fetch again.** | The app no longer accepts the account's login, for example after the app was removed from the store. | Reconnect the account under **Integrations**, then click **Get sample event** again. |

## Related

- [Add an app step to a flow](add-an-app-step.md)
- [Test a step and pin sample data](test-a-step-and-pin-sample-data.md)
- [Build an automation flow](build-automation-flow.md)
- [Connect an app and use it in a flow](connect-apps-for-flows.md)
- [Start a flow from a template](use-flow-templates.md#app-recipes)
