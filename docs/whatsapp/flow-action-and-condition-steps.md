---
title: Use the Action step and conditions in a flow
description: Pick a ready-made action, fill in every field, send data to Zapier or Pabbly, and stop or branch a run with conditions. Every field explained.
---

# Use the Action step and conditions in a flow

The **Action** step does one job for you: send a WhatsApp template, create a CRM lead, enrol someone in an email journey, call Zapier and more. The **Continue only if…** and **Many paths by rule** steps decide which runs go on. This page explains every field of each one and what to type. It takes about 10 minutes to read.

## Before you start

- You have a flow open in the builder. See [Understand the flow builder](understand-the-flow-builder.md).
- For **Send a WhatsApp template**, you have at least one template with the status **Approved**. See [Create a WhatsApp message template](create-message-template.md).
- For **Send to Zapier / Pabbly**, you have a Zap **Catch Hook** URL or a Pabbly webhook URL.
- For connector apps, the app is connected under **Integrations** → **Connectors**. See [Connect apps for flows](../flows/connect-apps-for-flows.md).

## What the Action step can do

Open **All steps** → **Advanced** → **Action**. In **This step will**, the list shows Ohanvi's own actions first, then your connector apps.

| Action | What it does | Needs |
| --- | --- | --- |
| **Save the form to the CRM** | Saves the person who filled in a form as a CRM lead. | A flow that starts when a form is submitted. |
| **Send a WhatsApp message** | Sends plain text to one number. | The person wrote to you in the last 24 hours. |
| **Send a WhatsApp template** | Sends an approved template to anyone. | An **Approved** template. |
| **Check if they ordered recently** | Asks your store if this person ordered lately. | A connected store. |
| **Start a chatbot conversation** | Opens one of your chatbots with this person. | A published chatbot. |
| **Start the WhatsApp social assistant** | Messages you a template, then helps you draft a post. | An approved template. |
| **Create a CRM lead** | Adds a lead to the CRM. | A first name. |
| **Send a form** | Sends a form as a link or on WhatsApp. | A published form. |
| **Enrol in an email journey** | Adds a person to an email journey. | A journey and an email address. |
| **Post to social** | Creates a social post from a saved template. | A post template. |
| **Change a lead's status** | Moves a lead to another status. | A lead id. |
| **Convert a lead to a contact** | Turns a lead into a contact. | A lead id. |
| **Send to Zapier / Pabbly** | Posts data to a Zap or Pabbly workflow. | A saved target. |
| **Check BUSY stock** | Looks up a product in your last BUSY stock upload. | A BUSY upload. |
| Google Sheets, Calendar, Meet and Contacts actions | Work with your Google account. | A connected Google account. See [Use Google Workspace steps in a flow](flow-google-workspace-steps.md). |

## Steps

### Add an Action step and pick what it does

1. Click **+** next to a step, then click **All steps**.
2. Under **Advanced**, click **Action**. A card is added and its settings open in the **Step** panel on the right.
3. In **Step name**, type what the step is for, for example `Tell the customer their slot`. The box shows `What this step is for`.
4. Under **This step will**, click the list and choose what happens. The box shows `Choose what happens`.
5. Read the sentence under the list. It says what the action does.
6. To pick a different action later, click **Change**.

If the list shows only Ohanvi's own actions, the message reads **Connector apps couldn't be loaded right now, so only Ohanvi's own actions are listed. Reopen the flow to try again.** If you have no connector apps, it reads **Connector apps appear here once one is set up under Integrations → Connectors.**

### Fill in the fields of an action

1. Under **Details**, fill in each field the action shows. A field marked as required cannot stay empty.
2. To use data from the trigger or an earlier step, click the field picker next to the box and choose a field. Or type an expression, for example `{{trigger.phone}}` or `{{2.publicUrl}}`.
3. For a list field, such as **How to send it**, click it and choose one option.
4. Some fields are fixed. They show as a sentence, for example **the form that was just submitted**. You do not type them.
5. Read the note under the fields. It tells you the one thing to watch out for.

!!! tip "A number is the step number"
    In `{{2.publicUrl}}`, the `2` is the number on the step card. Use the number of the step that made the value.

### Send a WhatsApp message

1. Choose **Send a WhatsApp message**.
2. In **Send to**, type the phone number or pick the trigger's phone field. Required.
3. In **Message**, type the text. Required. Example: `Thanks for registering, {{trigger.form.name}}…`.

Plain text only reaches people who messaged you in the last 24 hours. For anyone else, use **Send a WhatsApp template**.

### Send a WhatsApp template

1. Choose **Send a WhatsApp template**.
2. Read the note. It says WhatsApp only delivers a business-started message as a template that Meta approved, so an unapproved template is not sent at all.
3. In **Send to**, type a full international number, or pick an expression that gives one. The box shows `{{trigger.phone}}`.
4. In **Template**, click **Choose an approved template** and pick one. While the list loads, it reads **Loading your approved templates…**.
5. If the template is approved in more than one language, click **Language** and choose one. The box shows **This template is approved in more than one language**.
6. Under **What goes in the message**, read the template text. Then fill in **Variable {{1}}**, **Variable {{2}}** and so on. Pick a field or type a value for each.
7. If you need a different message, click **Browse the template library** under **Need another message?**.

A template shows one of these states: **Approved**, **Waiting for Meta to review it**, **Meta rejected it**, **Meta paused it for quality**, **Meta disabled it**, **Under appeal with Meta** or **Status unknown**. Only **Approved** can be sent.

### Check if they ordered recently

1. Choose **Check if they ordered recently**.
2. In **Their phone**, type the number or pick the phone field.
3. In **Their email**, type the email or pick the email field. Fill in at least one of the two.
4. In **Within the last (minutes)**, type how far back to look. The default is `45`.
5. Add a **Continue only if…** step after it to act on the answer.

The step asks your store live, every time it runs.

### Start a chatbot conversation

1. Choose **Start a chatbot conversation**.
2. In **Send to**, type the phone number. Required.
3. In **Chatbot**, type the id of the chatbot to open. The box shows `The chatbot this card is`. Required.
4. In **Give up after (minutes)**, type how long to wait for the customer. The hint shows `1440`, which is one day.

### Start the WhatsApp social assistant

1. Choose **Start the WhatsApp social assistant**.
2. In **Send to**, type your own WhatsApp number. Required.
3. In **Template name**, type the name of an approved template, for example `social_daily_post`. Required.
4. In **Language**, keep `en` or type another code.
5. In **Region**, keep `IN` or type another code.
6. Leave **Assistant conversation** as it is. It means the built-in post assistant.

The step messages you with the template. When you reply, the post-drafting chat starts.

### Create a CRM lead

1. Choose **Create a CRM lead**.
2. In **First name**, type the name. Required.
3. Fill in **Last name**, **Phone**, **Email** and **Company** if you have them.

### Save the form to the CRM

1. Choose **Save the form to the CRM**.
2. Leave **Which submission** as it is. It means the form that was just submitted.
3. Keep **What to do with it** on **Create a CRM lead**.

It is safe to run twice. A lead already made for the same submission is kept, not duplicated.

### Send a form

1. Choose **Send a form**. The step shows the form name, how many questions it has and how it is sent.
2. Under **Form to send**, pick a published form.
3. Under **How to send it**, choose one:
    - **Create a public link** makes a link and hands it to the next step. It sends nothing on its own. The form must be **Active** with its public link switched on.
    - **Message it on WhatsApp** sends the form to a number. The form must be published to WhatsApp first.
4. Under **WHO IT GOES TO** (WhatsApp) or **WHO IT'S FOR (OPTIONAL)** (link), fill in the person. For WhatsApp, the phone is required. The box shows `{{trigger.identity.phone}}`. The send is refused without it, and it does not fall back to the email.
5. For a public link, you can also record an email or a contact id. They are kept with the record. A link is not delivered to them.
6. In **Message (optional)**, type a line to go with it, for example `Please complete your registration:`. On WhatsApp it is sent just before the form. For a link it is carried along for a later step.
7. To deliver a public link, add a WhatsApp or email step after this one and paste `{{N.publicUrl}}` into its message. `N` is the number of this step.

If the form is not published to WhatsApp, the card says it will be refused. Publish it from the form's menu first.

### Enrol in an email journey

1. Choose **Enrol in an email journey**.
2. In **Journey**, type the id of the journey. The box shows `The journey id`. Required.
3. In **Their email**, type the address or pick the email field. Required.

### Post to social

1. Choose **Post to social**.
2. In **Post template**, type the id of a saved template. The box shows `The template id`. Required.
3. In **Caption (optional)**, type words to use instead of the template's words.
4. In **Then**, choose **Save as a draft** or **Publish now**. The default is **Save as a draft**.
5. Set which accounts to post to under **Advanced**, in the `accountIds` value.

!!! warning "Publish now posts without review"
    Keep **Save as a draft** while you test.

### Change a lead's status or convert a lead

1. To change a status, choose **Change a lead's status**. In **Lead**, type the lead id. The box shows `The lead id`. In **New status**, choose **New**, **Contacted**, **Qualified**, **Unqualified** or **Lost**. Both are required.
2. To convert, choose **Convert a lead to a contact**. In **Lead**, type the lead id. Required.
3. Set **Also create an account** to **Yes** or **No**. The default is **No**.

### Check BUSY stock

1. Choose **Check BUSY stock**.
2. In **Product name**, type what to look for, for example `blue shirt xl`.
3. Use the result in a later step. It lists each match with its item name, quantity, unit and whether it is in stock, plus the date of the upload.

The stock comes from the last upload under **WhatsApp** → **BUSY**. It is not live from BUSY.

### Send data to Zapier or Pabbly

1. Choose **Send to Zapier / Pabbly**.
2. Under **Send to**, click the list and pick a saved target. While it loads, the box reads **Loading…**.
3. To save a new target, click **Add target**. The **Add a Zapier / Pabbly target** window opens.
4. Under **Platform**, choose **ZAPIER** or **PABBLY**.
5. In **Name**, type a name, for example `Zap: new lead`.
6. In **Webhook URL**, paste the URL. It must start with `https://`. For Zapier it looks like `https://hooks.zapier.com/hooks/catch/…`. For Pabbly it looks like `https://connect.pabbly.com/workflow/sendwebhookdata/…`. After saving, only a hidden form is shown. Anyone with the URL can send data to your Zap.
7. Optional: in **Signing secret (optional)**, type a secret. Ohanvi adds an `X-Ohanvi-Signature` header, an HMAC-SHA256 of the body, that your workflow can check.
8. Optional: turn on **Safe to send twice** only if your workflow ignores repeats. It lets a failed call be retried with an `Idempotency-Key` header.
9. Click **Save target**. If it fails, the message reads **The target was not saved**.
10. Back in the step, in **Data to send (JSON)**, type the data as a JSON object. Example: `{ "email": "{{trigger.email}}" }`.
11. Optional: in **Extra headers (JSON, optional)**, type headers. Example: `{ "X-Source": "ohanvi" }`.
12. In **If it answers with an error**, choose **Stop the flow** or **Carry on, and pass the status to the next steps**. The default is **Stop the flow**.
13. In **Wait at most (seconds)**, type how long to wait. The hint shows `20`.
14. Click **Test call** to send the data now. Your Zap or workflow really runs. The `{{…}}` fields are not filled in outside a run.

Zapier and Pabbly answer as soon as they get the data, with a receipt, not the result of the Zap. Later steps can read `{{N.statusCode}}` and `{{N.responseBody.…}}`. A failed call is not retried unless the target is marked safe to repeat. After a test call, later steps can pick the fields it returned.

### Use a connector app

1. In **This step will**, choose an app operation. It reads the app name, then the operation.
2. Under **Connection**, click **Signs in as** and choose the connection. If it reads **No connections yet. Connect the app under Integrations → Connectors before this step can authenticate.**, connect the app first.
3. Fill in the fields the operation shows.

### Set a handler by name (advanced)

1. In **Platform handler**, type the name of an Ohanvi action, for example `saveCrmLeadApiService`.
2. In **Input mapping (JSON)**, type what to send as a JSON object. Example: `{ "email": "{{trigger.email}}" }`.
3. Remember: set a handler or a connector app, not both.

Values are expressions over the trigger and the steps before this one. Anything else is sent as written. If the box shows **Input mapping must be a JSON object.** or **Input mapping is not valid JSON.**, fix the braces and quotes.

### Stop a run unless a rule holds

1. Add a **Continue only if…** step.
2. Under **Only continue if**, click **Add condition**. Until you do, the box reads **No condition yet — every record will continue.**
3. In **Field**, pick the data to check by name. To type your own, choose **Something else…** and type an expression such as `{{trigger.status}}` in **Expression**.
4. Choose the comparison:

    | Comparison | The run goes on when the field… |
    | --- | --- |
    | **is** | equals the value. |
    | **is not** | does not equal the value. |
    | **contains** | has the value inside it. |
    | **does not contain** | does not have the value inside it. |
    | **starts with** | begins with the value. |
    | **ends with** | ends with the value. |
    | **is empty** | has nothing in it. |
    | **is not empty** | has something in it. |
    | **is greater than** | is bigger than the value. |
    | **is less than** | is smaller than the value. |
    | **is at least** | is the value or bigger. |
    | **is at most** | is the value or smaller. |

5. In **Value**, type or pick what to compare with. The box shows `paid` as an example. For **is empty** and **is not empty**, there is no value.
6. To add more rules, click **Add condition** again. When there are two or more, **Continue when** appears. Choose **all match** to need every rule, or **any match** to need one. Between the rules the card shows **and** or **or**.
7. To delete a rule, click **Remove this condition**.

A run that stops here ends as **Filtered**. That is a normal result, not a failure.

!!! warning "An empty condition lets everything through"
    With no rule, every run goes on. Always add at least one rule.

### Send runs down different paths

1. Add a **Many paths by rule** step.
2. Click **Add two paths**. To add more later, click **Add a path**.
3. For each path, set its rule the same way as above.
4. Read the rule. The first path whose rule matches wins. Order the paths from the most specific to the least.
5. Under **If nothing matches, take**, choose a path, or choose **nothing — end the run**.

A step with no paths cannot be published. The message reads **Add a path on the canvas first — a branch with no paths cannot publish.**

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **No recipient. Map the customer's phone** | **Send to** is empty. | Pick the phone field of the trigger, or type a full international number. |
| **Choose the approved template to send.** | No template is picked. | Pick one in **Template**. |
| **Meta only delivers approved templates outside the 24-hour window.** | The chosen template is not **Approved**. | Wait for Meta, or pick another template. |
| **Choose which language of … to send** | The template exists in more than one language. | Pick one in **Language**. |
| **The template needs a value for {{1}}.** | A variable is empty. | Fill in every **Variable**. |
| **Variable {{1}} is still the placeholder.** | The box still holds the sample text. | Replace it with the real value or a field. |
| **This must be a JSON object: { … }** or **This is not valid JSON.** | The data or headers box is not valid JSON. | Check the braces, quotes and commas. |
| **The target this step used was deleted. Choose another one.** | The saved target no longer exists. | Pick another target under **Send to**. |
| **No targets yet.** | You have not saved a Zapier or Pabbly target. | Click **Add target**. |
| **Not published to WhatsApp, so this step will be refused** | **Message it on WhatsApp** is chosen but the form is not published to WhatsApp. | Publish the form to WhatsApp from its menu. |
| **No connections yet.** | The connector app is not connected. | Connect it under **Integrations** → **Connectors**. |

## Related

- [Understand the flow builder](understand-the-flow-builder.md)
- [Add integration and advanced steps to a flow](chatbot-integration-and-advanced-steps.md)
- [Use Google Workspace steps in a flow](flow-google-workspace-steps.md)
- [Build an automation flow](../flows/build-automation-flow.md)
- [Connect apps for flows](../flows/connect-apps-for-flows.md)
