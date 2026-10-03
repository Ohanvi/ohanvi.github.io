---
title: Add integration and advanced steps to a flow
description: Save leads to CRM, post to social, send a form, report to Meta, run email journey steps, and use waits, loops, parallel paths and sub-flows in a flow.
---

# Add integration and advanced steps to a flow

Add steps that reach beyond the chat: save a lead in CRM, post to social, send a form, send an email, split a path, call a webhook, repeat over a list, or run paths at the same time. Each step takes about 2 minutes to set up.

## Before you start

- You have a flow open on the canvas. See [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md) or [Build an automation flow](../flows/build-automation-flow.md).
- For **CRM**, you have a step before it that asks for a name or a phone number. See [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md).
- For **Social**, your social accounts are connected. See [Connect social accounts](../social/connect-social-accounts.md).
- For **Forms**, you have a published form.
- For **Send email**, you have an email template. See [Create an email template](../email/create-email-template.md).

## Where each step lives

Open the **Add a step after** menu with the **+**, then click **All steps**. These steps sit in 2 groups.

| Group | Steps |
| --- | --- |
| **Integrations** | **CRM**, **Social**, **Forms**, **Meta Conversion** |
| **Advanced** | **Action**, **Continue only if…**, **Many paths by rule**, **Delay**, **For each**, **Sub-flow**, **Parallel**, **Join**, **Send email**, **Wait**, **Tag contact**, **Remove tag**, **Unsubscribe**, **Split A/B**, **Webhook**, **Request Intervention**, **Invoke Action** |

The steps in **Advanced** belong to 3 kinds of flow:

| Kind | Steps |
| --- | --- |
| Chatbot | **Request Intervention**, **Invoke Action** |
| Automation | **Action**, **Continue only if…**, **Many paths by rule**, **Delay**, **For each**, **Sub-flow**, **Parallel**, **Join** |
| Email journey | **Send email**, **Wait**, **Tag contact**, **Remove tag**, **Unsubscribe**, **Split A/B**, **Webhook** |

[VERIFY: whether the menu hides steps that do not fit the kind of flow you are building.]

## Steps

### Save a lead in CRM

1. Add a **CRM** step. The description reads **Create or update a CRM record**. In **COMMON**, the same step is named **Save to CRM**.
2. Under **What to do in the CRM**, choose one:
    - **Create a lead**
    - **Move the lead to a status**
    - **Convert the lead**
    - **Move the deal to a stage**
    - **Update a contact**
    - **Add to a campaign**
    - **Update a segment**
3. For **Create a lead**, read **Will save**. It lists the answers the flow asked for so far.
4. If it reads **Nothing asked yet — add an "Ask name" or "Ask phone" step before this one.**, add that step before the **CRM** step.
5. For **Move the lead to a status**, choose a **Status**: **NEW**, **CONTACTED**, **QUALIFIED**, **UNQUALIFIED**, **LOST** or **CONVERTED**. The default is **QUALIFIED**.
6. For **Move the deal to a stage**, type the **Stage** name, for example `Negotiation`. Use a stage name from your pipeline.

The step runs as the flow's owner, with that person's access.

### Post to social

1. Add a **Social** step. The description reads **Post to a social account**.
2. Under **Channels**, click each account to turn it on: **Instagram**, **Facebook**, **LinkedIn**, **X** or **Threads**.
3. In **Caption**, type the post text, for example `What to post...`. It can hold up to 2,200 characters.
4. Next to **Mode**, click the value to switch between **DRAFT** and **PUBLISH**. The default is **DRAFT**.

!!! warning "Posting cannot be taken back"
    **PUBLISH** posts without review. Keep **DRAFT** while you test, and review the post in **Social**.

### Send a form to fill

1. Add a **Forms** step. On the canvas the card reads **Send a form to fill**.
2. Under **Form**, choose a published form. If the list reads **No forms published yet.**, publish a form first.
3. Under **Reaches the contact over**, choose the channel: **WHATSAPP_FLOW**, **BOT_CHAIN**, **META_LEAD_ADS**, **WEB** or **API**. The default is **BOT_CHAIN**.

When the contact submits, the form raises the event **form.submitted**. A flow can start from it.

### Report a conversion to Meta

1. Add a **Meta Conversion** step. The description reads **Report a conversion to Meta**.
2. Check **Node type**. It reads **META_CONVERSION**. Leave it as it is.
3. Fill in each value the step lists below **Node type**. [VERIFY: the config fields this step shows.]

### Run an engine action by name

1. Add an **Invoke Action** step. The description reads **Run an engine action by name**.
2. Check **Node type**. It reads **INVOKE_ACTION**.
3. Fill in each value listed below **Node type**.
4. Read the note **Advanced step**. It says the step is kept exactly as the chatbot engine stores it.

### Flag a chat for an agent

1. Add a **Request Intervention** step. The description reads **Flag the chat for an agent to step in**.
2. Read the note **Request Intervention**. The step has no fields.

It works like **Chat with agent**. See [Add action blocks to a chatbot flow](chatbot-action-blocks.md).

### Send an email in a journey

1. Add a **Send email** step.
2. Under **Template · template_id**, choose an email template. If the list reads **No email templates yet.**, create one first.
3. In **Subject override**, type a subject. Leave it empty to use the template's subject.
4. In **Preview text**, type the preheader.
5. Turn on **Send at any hour** to send at once. Leave it off to set a window.
6. With the switch off, set **Send window · local hours** with a start hour and an end hour from 0 to 23.
7. Under **Send days · send_days_of_week**, click the days emails may go out.
8. Turn on **Track opens** and **Track clicks** to count them.

### Wait in a journey

1. Add a **Wait** step.
2. In **Wait for · wait_minutes**, type the number of minutes.
3. Read the note under it. It shows the wait in hours or days. The contact leaves the queue and comes back when it is due.

### Tag or untag a contact in a journey

1. Add a **Tag contact** step. In **Tag · tag_value**, type the tag name.
2. To remove a tag, add a **Remove tag** step. In **Remove tag · tag_value**, type the tag name.

### Take a contact off the journey

1. Add an **Unsubscribe** step.
2. Read the note. It marks the contact unsubscribed and stops every journey they are in.

!!! warning "There is no undo from inside a journey"
    Place **Unsubscribe** only where a contact should leave for good.

### Split a journey into two paths

1. Add a **Split A/B** step.
2. Read the note. The split is by contact id and is not weighted, so about half of the contacts take each path.
3. Path A is the next block. Under **Path B starts at**, choose where path B begins.

### Branch a journey by a contact detail

1. Add a **Condition** block to the journey.
2. Under **If the contact's**, click the first row. The list **Which field** opens. Choose **Tags**, **Subscription status**, **Email address**, **Source** or **Lawful basis**.
3. Click the second row to choose the comparison. The options depend on the field:

    | Field | Comparisons |
    | --- | --- |
    | **Tags** | **is tagged**, **is not tagged**, **tags contain** |
    | **Subscription status** | **is**, **is not** |
    | **Email address** | **is**, **is not**, **contains** |
    | **Source** | **is**, **is not** |
    | **Lawful basis** | **is**, **is not** |

4. In **Value**, type what to compare with, for example a tag name.
5. Read the line **If yes, the next block runs.** The yes path is the block right below.
6. Under **If no, jump to**, choose the block where the no path starts. The list only shows blocks after this one. If there are none, the list is not shown.

### Skip ahead after a journey block

1. Click a journey block that does not branch, for example a **Send email** or **Wait** block.
2. Under **Afterwards, jump to**, choose a later block.
3. When this block finishes, the journey goes to that block and skips the ones in between.

Use it to step over the blocks of another path. The list only shows blocks after this one, and it is not shown on the last block.

### Call a webhook from a journey

1. Add a **Webhook** step.
2. Next to **Method**, click the value to cycle through **POST**, **GET** and **PUT**. The default is **POST**.
3. In **URL**, type the address.
4. In **Headers (JSON)** and **Body (JSON)**, type the data to send.
5. Choose where the reply is saved.

### Wait, repeat and run paths at the same time

These steps work in an automation flow. See [Build an automation flow](../flows/build-automation-flow.md) for the full list.

1. Add a **Delay** or **Wait** step. Under **How long**, set **Wait for** and choose **minutes**, **hours** or **days**. The step holds no worker. It sleeps on the queue.
2. Add a **For each** step. Under **What to repeat over**, type a list in **For each item in**, for example `{{2.lineItems}}`. Loops cannot nest. Use a **Sub-flow** for the inner level.
3. Add a **Sub-flow** step. Under **Which flow**, open **Runs** and choose the flow. The other flow runs to its end before this one continues.
4. Add a **Parallel** step. Read **Lanes**: each lane runs at the same time. Add lanes from the card.
5. Add a **Join** step after the lanes. It waits for every lane above it before going on.
6. Add a **Many paths by rule** step. Click **Add two paths**, then **Add a path** for more. Set a rule for each path.
7. To stop a path, click **Turn this path off**. To delete it, click **Remove this path**. A path with steps on it cannot be removed. Delete those steps first.

For every automation step, **Step name** lets you type what the step is for.

!!! tip "Many paths take the first match"
    The first path whose condition matches is taken. A record that matches none takes the default path.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Nothing asked yet — add an "Ask name" or "Ask phone" step before this one.** | **Create a lead** has no answers to save. | Add **Ask name** or **Ask phone** before the **CRM** step. |
| **No forms published yet.** | The workspace has no published form. | Publish a form, then reopen **Forms**. |
| **No email templates yet.** | **Send email** has no template to choose. | Create an email template, then reopen the step. |
| **This path has steps on it. Delete those first.** | You tried to remove a path that still has steps. | Delete the steps on the path, then remove it. |
| **No paths yet. A branch needs at least two.** | **Many paths by rule** has fewer than 2 paths. | Click **Add two paths**. |
| A **Social** post did not go out | **Mode** is **DRAFT**. | Review the draft in **Social**, or switch **Mode** to **PUBLISH**. |
| **Could not publish — the step that needs fixing is marked on the canvas** | A step is incomplete. | Select the marked step, fill in the field, save and publish. |

## Related

- [Understand the flow builder](understand-the-flow-builder.md)
- [Add Google Sheets, Calendar, Meet and Contacts steps](flow-google-workspace-steps.md)
- [Add action blocks to a chatbot flow](chatbot-action-blocks.md)
- [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md)
- [Build an automation flow](../flows/build-automation-flow.md)
- [Connect an app and use it in a flow](../flows/connect-apps-for-flows.md)
- [Test a flow and fix failed runs](../flows/test-and-monitor-flows.md)
- [Use the Action step and conditions in a flow](flow-action-and-condition-steps.md)
