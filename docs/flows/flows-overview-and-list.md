---
title: Understand flows and the Flows list
description: Learn what a flow is, find chatbots, automations and journeys in one list, read each flow's status, and publish, pause, duplicate or delete it.
---

# Understand flows and the Flows list

Find every chatbot, automation and email journey in your workspace on one screen. At the end, you can read what starts each flow, whether it is running, and how its last run went. You can also publish, pause, duplicate or delete it.

## Before you start

- You can see **Flows** in the **WhatsApp** panel or in the **Connect** panel. If you see neither, ask your admin for access. See [Roles and permissions](../settings/roles-and-permissions.md).
- The **Connect** → **Flows** entry is for admins by default, because every step of a flow runs as the flow's owner.
- To create or change flows, your role needs save access to flows. Without it, you can open flows but not edit them.

## What a flow is

A flow starts on a trigger and then runs its steps in order. The same canvas builds 3 kinds of flow:

| Kind | What starts it | Guide |
| --- | --- | --- |
| **Chatbot** | A customer sends a keyword on WhatsApp. | [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md) |
| **Automation** | Something happens in Ohanvi or a connected app, a schedule, a webhook, or you run it by hand. | [Build an automation flow](build-automation-flow.md) |
| **Journey** | A contact joins an email list or gets a tag. | [Build an automation flow](build-automation-flow.md) |

Each flow has a draft you edit and a published version that runs. Your edits never change the published version until you publish again.

## Steps

### Open the Flows list

1. Open **WhatsApp** in the left rail, then select **Flows**. The **Automation flows** screen opens.
2. Or open **Connect** in the left rail, then select **Flows** under **Integration**. The same screen opens.

The list shows every flow in your workspace, whichever way you came in.

### Find a flow

1. Type in **Search flows**. The search matches the flow name, its trigger and its step names.
2. Click a status pill to narrow the list: **All**, **Active**, **Draft** or **Paused**.
3. Open the first drop-down to pick a kind: **All flows**, **Chatbots**, **Automations** or **Journeys**.
4. Open the second drop-down to pick a trigger, for example **On a schedule**. Choose **Any trigger** to clear it.
5. Click the sort icon (tooltip **Sort**) and choose **Recently updated**, **Name (A–Z)** or **Last run first**.

If nothing matches, click **Clear filters**.

### Read a flow's row

Each row shows 3 lines:

- **Name and status icon** — **Active**, **Draft**, **Paused** or **Archived**. A second icon, **Not published**, means there are edits that are not live yet.
- **What starts it** — for a chatbot, **Starts on:** followed by its keywords. For other flows, a sentence about the trigger.
- **Last run** — for example **Succeeded 2 hours ago**, or **Never run**. **Stuck** means a run has been going for more than 6 hours.

A row may also show **Reconnect needed** or **Connection problem**. See [Connect an app and use it in a flow](connect-apps-for-flows.md).

Rows under **Not yet migrated** are older chatbots or email journeys. Open one to bring it into your flows.

### Open a flow's preview panel

1. Click a row. A panel opens beside the list.
2. Read the **Overview** tab. It shows the steps as a timeline and in plain words.
3. Open **Version, owner & technical** to see **Last run**, **Owner**, **Trigger**, **Current version**, **Steps** and **Flow ID**.
4. Use the other tabs to check results: **Recent runs**, **Latest output** and **Versions**. See [Test a flow and fix failed runs](test-and-monitor-flows.md).
5. Click **Open builder** to edit the flow on the canvas.

### Publish a draft from the list

1. Click the flow's row.
2. Click **Publish & turn on**. For a flow that is already live, the button reads **Publish changes**.
3. Read the message. **Published and live.** means the flow now runs. **Published.** means it is published but switched off.

### Turn a flow on or off

1. Click the flow's row. The **On**/**Off** switch sits beside the flow's name. It appears only after the flow is published once.
2. To stop it, click the switch. The **Pause this flow?** window opens.
3. Click **Pause only**. New events stop starting runs. Runs already going will finish.
4. If a run is going right now, you can click **Pause and stop runs** instead. This also cancels the runs in progress.
5. To start it again, click the switch, or click **Resume**. The message **Flow resumed. New events start runs again.** appears.

!!! warning "Stopping runs cannot undo what was sent"
    A step already running finishes, and messages it already sent cannot be taken back.

### Duplicate a flow

1. Click the flow's row, then click the **More** menu (**…**).
2. Click **Duplicate**. A copy named **Copy of** followed by the flow's name opens in the builder.

The copy is a draft. Publish it before it can run.

### Delete a flow

1. Click the flow's row, then click the **More** menu (**…**).
2. Click **Delete**. The **Delete this flow?** window opens.
3. Click **Delete**. The message **Flow deleted.** appears.

For flows Ohanvi created for you, such as store automations, the menu reads **Archive** instead. The effect is the same.

!!! warning "Deleted flows do not come back"
    The flow stops running and leaves the list. Finished runs keep their history. A store automation you archive is not created again.

### Create a new flow

1. Click **New flow**. A blank canvas opens.
2. To start from a ready-made flow instead, open the menu on **New flow** [VERIFY: how the New flow menu opens] and click **Start from library**. Pick a flow under **Starters** or **Chatbot templates**.

For the next steps, see [Build an automation flow](build-automation-flow.md) or [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md).

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **New flow** is missing | Your role can view flows but not create them. The empty list says **Your role can view flows but not create them.** | Ask your admin for save access to flows. |
| **Flows** is not in the **Connect** panel | That entry is for admins by default. | Open **WhatsApp** → **Flows**, or ask your admin. |
| Row shows **Not published** next to **Active** | You saved edits but did not publish them. The live version still runs. | Click the row, then click **Publish changes**. |
| Row shows **Stuck** | A run has been waiting or running for more than 6 hours. | Open **Recent runs** and read the run. See [Test a flow and fix failed runs](test-and-monitor-flows.md). |
| No **On**/**Off** switch in the panel | The flow has never been published. | Click **Publish & turn on**. |
| **The flow could not be copied.** | The copy failed on the server. | Try again. If it fails again, note the **Flow ID** and contact support. |

## Related

- [Build an automation flow](build-automation-flow.md)
- [Automate store messages with flows](store-journeys.md)
- [Test a flow and fix failed runs](test-and-monitor-flows.md)
- [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md)
- [Manage CRM automations](../crm/manage-automations.md)

!!! note "Screenshots to add"
    - After step 1 of "Open the Flows list" — the **Automation flows** screen with the list and the preview panel.
    - After step 5 of "Find a flow" — the status pills, the kind and trigger drop-downs and the sort menu.
    - After step 2 of "Turn a flow on or off" — the **Pause this flow?** window.
    - After step 1 of "Duplicate a flow" — the **More** menu with **Duplicate** and **Delete**.
