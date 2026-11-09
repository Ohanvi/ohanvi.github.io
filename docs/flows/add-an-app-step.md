---
title: Add an app step to a flow
description: Pick an action from an app such as Shiprocket or Shopify, connect the account it signs in with, and fill in what the step sends.
---

# Add an app step to a flow

Add a step that does something in an outside app, signed in with your own account.

## Before you start

- The flow is an automation or a store journey. App steps are not offered in WhatsApp chatbots.
- Your role can create and change flows. See [Understand flows and the Flows list](flows-overview-and-list.md).
- You can sign in to the app, or you have its API key. You can connect it from the step itself.

## How an app step is laid out

The **Step** panel shows an app step in numbered parts, top to bottom:

- **The app header** — the app's logo and name, the action, and **Change**.
- **1 · Account** — the account the step signs in with.
- **2 · What to send** — the values the step sends to the app.
- **3 · Test** — runs the step once. See [Test a step and pin sample data](test-a-step-and-pin-sample-data.md).
- **If this step fails** — see [Choose what happens when a step fails](choose-what-happens-when-a-step-fails.md).

The account comes first because some fields load their choices from that account.

Some apps need no account, such as the built-in **Formatter**. Their parts read **What to send** and **Test**, without numbers.

## Steps

### Pick the app and the action

1. Open the flow in the builder. See [Build an automation flow](build-automation-flow.md).
2. Click **+** after the trigger or after a step. The **Add a step after** panel opens.
3. Scroll to **Apps**. Each app shows what it offers, for example **4 actions · 2 searches**. It also shows **Connected** or **Connect**.
4. Click the app. Its actions open under headings.
    - Large apps group them by topic, for example **Orders**, **Shipments** or **Tracking**.
    - Other apps list **Actions**, then **Searches**.
    - **Advanced** always comes last.

    [SCREENSHOT: the Add a step after panel with Shiprocket open, showing the Orders, Shipments and Tracking headings]

5. To find an action, type in **Search** followed by the app's name. Press **Enter** to add the top match.
6. Click the action. The step lands on the canvas and its **Step** panel opens.

You can also type an app or action name straight into **Search steps**. Results then show actions from every app.

### Choose the account

1. Under **1 · Account**, open **Account** and choose the account. If only one account exists, it is already chosen.
2. To add another account, click **Connect** followed by the app's name, under the list.
3. If no account exists yet, the panel says **No … account connected yet. Connect one to let this step sign in.** Click **Connect** followed by the app's name.

    [SCREENSHOT: 1 · Account with no account yet and the Connect Shiprocket button]

How the app connects depends on the app. The four ways are below.

#### Connect a delivery partner (Shiprocket)

1. The **Connect Shiprocket** window opens with three short instructions.
2. Click **Open Shiprocket**. In Shiprocket, open **Settings → API → Configure** and create an API user.
3. Back in Ohanvi, type the **API user email** and the **API user password**.
4. Click **Connect**. The step picks up the new account.

If no pickup location is set, the message asks you to add one under **Integrations → Delivery partners**.

#### Connect a sign-in app (OAuth)

1. A sign-in window for the app opens. The **Approve in the other window** message appears in Ohanvi.
2. Sign in to the app and approve access. The window closes by itself.
3. The message **… connected.** appears and the step picks up the account.

If pop-ups are blocked, the app opens in a new tab instead. Approve there, come back, and click **Done**.

#### Connect an API-key app

1. The **Connect** window opens with the app's name.
2. Keep or change the **Label**. It must be unique for the app.
3. Fill in the fields the app asks for, such as an API key.
4. Leave **Who can build on this** at **Everyone in this organisation**. The flow then keeps working when others edit it.
5. Click **Connect**.

#### Connect an app that has its own screen

Social accounts and stores such as Shopify connect on their own Ohanvi page.

1. The app's connect page opens in a new tab.
2. Finish connecting there.
3. Come back to the flow. In **Finished connecting …?**, click **I've connected it**. The step picks up the account.

For a store, see [Connect your store](../settings/connect-your-store.md).

### Fill in what to send

1. Under **2 · What to send**, fill in every field whose name ends in `*`. These are required.
2. To fill a field from the trigger or an earlier step, click the braces icon beside it. Its tooltip is **Use a field from the trigger or an earlier step**. See [Test a step and pin sample data](test-a-step-and-pin-sample-data.md#pick-a-value-from-earlier-data).
3. Click **+N more fields**, for example **+18 more fields**, to show the optional fields. Click **Hide optional fields** to fold them again.
4. For a drop-down that lists the account's own data, such as a pickup location, choose the account first. Until then it reads **Choose an account to load options**.
5. Optional: click **JSON** to see and edit the values as JSON. Click **Form** to go back.

    [SCREENSHOT: 2 · What to send with required fields, a braces icon, and the +N more fields link]

An optional field left empty shows its default in grey, for example **Default: India**. A value from earlier data shows under a drop-down as **Currently:** followed by the value.

### Change the action

1. In the app header, click **Change**. Its tooltip is **Change what this step does**.
2. Pick another action of the same app, or click **Something else…** for every action.

A new action starts from its own defaults. Values you typed for the old action are dropped.

### Save and publish

1. Click **Save**.
2. Click **Publish**. See [Build an automation flow](build-automation-flow.md#save-and-publish).

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **No … account connected yet. Connect it under Integrations → Connectors before this step can sign in.** | The step cannot connect the app itself, for example on a published version. | Add the account in **Connect** → **Connectors**. See [Connect an app and use it in a flow](connect-apps-for-flows.md). |
| **Couldn't open …'s sign-in page. Check that pop-ups are allowed, then try again.** | The browser blocked the sign-in window. | Allow pop-ups for app.ohanvi.com, then click **Connect** again. |
| **Ask a manager to connect Shiprocket — your role cannot.** | Your role cannot change delivery partners. | Ask a manager to connect Shiprocket. Then choose the account in the step. |
| A drop-down reads **Choose an account to load options** | No account is chosen yet. | Choose the account under **1 · Account**. |
| A drop-down reads **Nothing to choose from** | The account has no such records yet, for example no pickup location. | Add one in the app, then choose the account again. |
| The header reads **This operation is no longer in the catalog** | The action was removed from the app. | Click **Change** and pick another action. |

## Related

- [Connect an app and use it in a flow](connect-apps-for-flows.md)
- [Test a step and pin sample data](test-a-step-and-pin-sample-data.md)
- [Start a flow from an app event](start-a-flow-from-an-app-event.md)
- [Choose what happens when a step fails](choose-what-happens-when-a-step-fails.md)
- [Call any API of an app](call-any-api-of-an-app.md)
