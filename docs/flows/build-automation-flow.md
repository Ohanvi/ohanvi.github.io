---
title: Build an automation flow
description: Choose what starts an automation, add steps such as messages, waits and conditions, pass data between steps, then save and publish the flow.
---

# Build an automation flow

Build a flow that runs by itself when something happens, on a schedule, or when you start it. At the end, you have a published automation with a trigger, steps that use the trigger's data, and a live version that runs on real events.

## Before you start

- You can open **Flows** and see **New flow**. See [Understand flows and the Flows list](flows-overview-and-list.md).
- Anything the flow uses is connected first: your WhatsApp number, your store, a Google account or a connector app. See [Connect an app and use it in a flow](connect-apps-for-flows.md).
- WhatsApp templates the flow sends are approved by Meta. Check them in **WhatsApp** → **Template**.
- For a WhatsApp chatbot that talks with the customer, follow [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md) instead.

## Triggers you can choose

The **When this runs** panel offers 6 triggers:

| Trigger | Starts the flow when |
| --- | --- |
| **When something happens here** | An event happens in Ohanvi, for example a store order, a form, a tag. Pick it in **Which event**. |
| **Run by hand** | You click **Run test** in the list or the builder. |
| **When a record appears** | A connector app has a new record. Ohanvi checks the app on a timer. |
| **When a webhook arrives** | A connector app sends a webhook to Ohanvi. |
| **When Zapier/Pabbly sends data** | A Zap or a Pabbly workflow calls this flow. |
| **On a schedule** | A time you set comes round, for example every day at 09:00. |

Events in **Which event** include:

- **A form is submitted**, **A Google Form gets a new response**, **A contact is added in Google Contacts**
- **A WhatsApp conversation finishes**
- **A contact joins an email list**, **A contact is tagged**
- **Someone becomes a customer of the store**, **A new store order is placed**, **A shopper leaves a checkout unfinished**, **An order payment fails**, **An order ships**, **A parcel is out for delivery**, **A parcel is delivered**, **A shopper looks at a product on the storefront**, **An order is cancelled**, **A refund is issued**
- **A post is ready to publish**, **A post is created as a draft**, **A post finished publishing**, **A new comment arrives on a published post**

## Steps

### Create the flow and choose a trigger

1. Open **WhatsApp** in the left rail, then select **Flows**.
2. Click **New flow**. A blank canvas opens under a placeholder name.
3. Click the name in the toolbar and type a new one, for example `Order follow-up`.
4. Click **Add first step…**. The **How does this flow start?** menu opens.
5. Pick a starting point:
    - **Form submitted**, **Google Form response** or **New Google contact** for those events.
    - **Email journey** when someone joins a list or gets a tag.
    - **Run by hand** for any other trigger. You change it in the next step.
    - **Start from a recipe** for a complete example flow.

    The **When this runs** panel opens on the right.

6. Open the drop-down at the top of the panel and choose the trigger. See the table above.
7. Fill in the fields the trigger shows:
    - **When something happens here** — choose **Which event**. For **A contact joins an email list**, also choose **Which list**. For **A contact is tagged**, type **Which tag**.
    - **On a schedule** — click the time beside **Runs every day at**, then choose a **Timezone**. For other patterns, type a **Cron expression (advanced)** with 6 fields.
    - **When a record appears** — choose the **Trigger operation** and the **Connection**.
    - **When a webhook arrives** — type the connection's id in **Connection**. See [Connect an app and use it in a flow](connect-apps-for-flows.md).
    - **When Zapier/Pabbly sends data** — see "Start the flow from Zapier or Pabbly" below.

To change the trigger later, click the trigger node at the start of the canvas.

### Add steps

1. Click the **+** after the trigger or after any step. The **Add a step after** menu opens.
2. Pick a step under **COMMON**, or click **All steps** to see every group. You can also type in **Search**.
3. Click the new step. Its settings open in the **Step** panel on the right, on the **Setup** tab.
4. Fill in its fields. Repeat for each step.

Steps that suit automations:

| Step | Where to find it | What it does |
| --- | --- | --- |
| **Wait** | **COMMON** | Pauses the flow. Set **Wait for** in minutes, hours or days. |
| **Save to CRM** | **COMMON** | Creates or updates the contact in CRM. |
| **Action** | **All steps** → **Advanced** | Runs one action. In **This step will**, choose, for example, **Send a WhatsApp template**, **Send a WhatsApp message**, **Create a CRM lead**, **Enrol in an email journey**, **Post to social**, a Google Sheets or Calendar action, or a connector operation. |
| **Continue only if…** | **All steps** → **Advanced** | Stops the run unless a condition holds. |
| **Many paths by rule** | **All steps** → **Advanced** | Sends the run down the first path whose condition matches. |
| **For each** | **All steps** → **Advanced** | Repeats the next steps for each item in a list. |
| **Sub-flow** | **All steps** → **Advanced** | Runs another flow, then continues. |
| **Parallel** and **Join** | **All steps** → **Advanced** | Runs several paths at once, then waits for all of them. |
| Google Sheets, Calendar, Meet and Contacts steps | **All steps** | For example **Add a row** or **Create event**. |

**Send a WhatsApp message** only reaches people who messaged you in the last 24 hours. To reach anyone else, use **Send a WhatsApp template**.

### Add a condition

1. Add a **Continue only if…** step.
2. Under **Only continue if**, click **Add condition**.
3. Choose the **Field**, the comparison (for example **is**, **contains**, **is empty**) and the **Value**.
4. Add more conditions if needed. Set **Continue when** to **all match** or **any match**.

A run that stops at this step ends as **Filtered**. That is a normal result, not a failure.

For several paths, use **Many paths by rule**. Click **Add two paths**, set a rule for each path, and choose **If nothing matches, take**.

### Use data from the trigger or an earlier step

1. Select the step and click in a field, for example **Send to**.
2. Click the field icon beside it (tooltip **Use a field from the trigger or an earlier step**).
3. Pick a field, for example the customer's phone. Ohanvi inserts it as an expression.

Expressions use double curly braces:

- `{{trigger.phone}}` — a field from the event that started the flow.
- `{{2.meetLink}}` — a field from the output of step 2.

You can mix expressions with text, for example `Hi {{trigger.firstName}}, your order is on its way.` A step can only use steps that run before it.

### Start the flow from Zapier or Pabbly

1. Click **Save** first. The endpoint is created for a saved flow.
2. Click the trigger node and choose **When Zapier/Pabbly sends data**.
3. In **Which platform sends the data**, choose **Zapier** or **Pabbly Connect**, then click **Create endpoint**.
4. Copy **URL (POST)**, the **Header X-Api-Key** and the **Body (JSON)** into your Zap or Pabbly workflow.
5. Send a test from Zapier or Pabbly. Its fields appear under **Sample**, ready to use in your steps.
6. Optional: in **Field that identifies one event (optional)**, type a field such as `order.id`. The same value sent twice starts the flow once.

The API key comes from **Connect** → **Zapier** or **Connect** → **Pabbly**.

### Save and publish

1. Click **Save**. The toolbar shows **Saved just now**. The version chip reads **DRAFT**, with the version number in front, for example **v1 · DRAFT**.
2. Click **Publish** in the top bar.
3. If some steps are incomplete, a window lists them. Click **Fix the steps** to go back, or **Publish without them**.
4. Read the message. **Published and live — new runs use this version.** means the flow is running. The switch in the toolbar reads **Active**.
5. If the message reads **Published. This flow is turned off, so it will not run yet.**, click **Turn on**.

A step that blocks publishing is marked on the canvas. Select it to read why.

!!! warning "A published flow acts on real data"
    From now on, every matching event starts a run. Messages it sends cannot be taken back. Test with a small audience first.

### Change a published flow

1. Open the flow and edit it. The version chip reads **LIVE · NOT PUBLISHED** after you save.
2. Click **Publish**. New runs use the new version. Runs already going finish on the version they started with.
3. To go back to an older version, click the version chip, open the row's **More** menu, and click **Make this live**.

## Build with AI

1. On a blank canvas, click **Build with AI**. A chat panel opens.
2. In **Ask anything…**, describe the flow and send it, for example `When a new store order is placed, wait 1 hour, then send my order follow-up template`.
3. Review the steps it draws on the canvas, fix anything missing, then click **Save** and **Publish**.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Which event** is empty with **The list of triggers could not be loaded…** | The event list did not load. | Close the flow and open it again. |
| **Could not publish — the step that needs fixing is marked on the canvas.** | A step is missing a value, for example **'to' has no value. Fill it in, or remove it.** | Select the marked step, fill in the field, save and publish. |
| **'text' refers to step 3, which runs after this one.** | A field uses a step that has not run yet. | Pick a field from an earlier step. |
| **A scheduled flow needs a cron expression.** | **On a schedule** has no time set. | Click the time beside **Runs every day at**, or type a cron expression. |
| **An event flow needs the event it listens for.** | **When something happens here** has no event. | Choose **Which event**. |
| Scheduled flow never runs | Schedules fire only when the schedule scanner is on for your workspace. | Ask your admin or support to check it. |

## Related

- [Understand flows and the Flows list](flows-overview-and-list.md)
- [Connect an app and use it in a flow](connect-apps-for-flows.md)
- [Automate store messages with flows](store-journeys.md)
- [Test a flow and fix failed runs](test-and-monitor-flows.md)
- [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md)

!!! note "Screenshots to add"
    - After step 6 of "Create the flow and choose a trigger" — the **When this runs** panel with the trigger drop-down open.
    - After step 2 of "Add steps" — the **Add a step after** menu with **COMMON** and **All steps**.
    - After step 3 of "Use data from the trigger or an earlier step" — the field picker with trigger fields.
    - After step 4 of "Save and publish" — the **Published and live** message and the **Active** switch.
