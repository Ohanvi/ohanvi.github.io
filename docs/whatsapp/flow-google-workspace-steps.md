---
title: Add Google Sheets, Calendar, Meet and Contacts steps to a flow
description: Use the Google Sheets, Google Calendar, Google Meet and Google Contacts steps in a flow, with every field explained and the values each step gives you.
---

# Add Google Sheets, Calendar, Meet and Contacts steps to a flow

Google steps let a flow work with your Google apps. A flow can add a row to a sheet, book a calendar event with a Meet link, share a meeting link, or save a contact. Follow this page to add each step, fill its fields, and use what it returns.

## Before you start

- You opened a flow in the builder. See [Understand the flow builder](understand-the-flow-builder.md).
- The Google app is connected. See [Connect an app and use it in a flow](../flows/connect-apps-for-flows.md).
- You know how to use data from earlier steps in a field. See [Build an automation flow](../flows/build-automation-flow.md).

## How Google steps work

Each Google step runs as one connected Google account. The account's access is checked again every time the flow runs.

| Group | Steps | What it is for |
| --- | --- | --- |
| **Google Sheets** | **Add a row**, **Read rows**, **Create spreadsheet** | Save or read lines in a spreadsheet. |
| **Google Calendar** | **Create event**, **Find events**, **Check availability**, **Update event**, **Cancel event** | Book, find, move and cancel events. |
| **Google Meet** | **Instant Meet link** | Get a meeting link to share now. |
| **Google Contacts** | **Find contact**, **Save contact** | Look up or save a person. |

In the fields below, `{{N...}}` means the step number. For example, `{{2.eventId}}` is a value from step 2. Type `{{` or copy a value from the previous step's output.

## Steps

### Choose the Google account

1. Add a Google step. See [Add a Google step](#add-a-google-step).
2. In the **Step** panel, open **Google account** and click **Choose an account**.
3. Pick a connected account. The list also shows **Default account** if your admin set one.
4. If the panel says the service is not ready, click **Open Google Workspace** and grant it. Then click **Check again**.

The panel reads **Runs as this account. Access is checked again every time the flow runs.**

### Add a Google step

1. Click the **+** after the step where it should run.
2. Click **All steps**, or type the app name, for example `sheets`, in **Search**.
3. Under **Google Sheets**, **Google Calendar**, **Google Meet** or **Google Contacts**, click the step.
4. Click the step on the canvas to fill its fields.

### Add a row to a spreadsheet

**Add a row** appends one row after the last row.

1. Add **Add a row**. The step is titled **Add a row to Google Sheets**.
2. In **Spreadsheet**, paste the link, for example `docs.google.com/spreadsheets/d/…`. The sheet must be one the account can open.
3. Click **Load sheet tabs**. The button reads **Opening…** while it works.
4. In **Sheet**, keep `Sheet1!A1` or type your tab, for example `Leads!A1`.
5. Under **Row to add**, fill **Column A**, **Column B** and so on. Type a value, or use data from an earlier step, for example `{{trigger.form.name}}`.
6. Click **Add a column** for more columns. Click **Remove column** to delete one.
7. Read the **How** line. It is fixed: **add after the last row**.

The step returns `{{N.updatedRange}}` and `{{N.spreadsheetUrl}}`. A retried step never adds the row twice. Text that starts with `=`, `+`, `-` or `@` is written as text, not a formula.

### Read rows from a spreadsheet

1. Add **Read rows**. The step is titled **Read rows from Google Sheets**.
2. In **Spreadsheet**, paste the link and click **Load sheet tabs**.
3. In **Range**, type the cells to read, for example `Sheet1!A1:D100`. It is required.
4. In a later step, use `{{N.data.values}}`. It is a list of rows. Loop over it with a **For each** step.

Reading changes nothing, so a retry is safe.

### Create a spreadsheet

1. Add **Create spreadsheet**. The step is titled **Create a Google spreadsheet**.
2. In **Title**, type the name, for example `Leads {{trigger.form.name}}`. It is required.
3. Use `{{N.spreadsheetId}}` and `{{N.spreadsheetUrl}}` in later steps.

A retried step never creates a second spreadsheet.

### Check availability

1. Add **Check availability**. The step is titled **Find availability in Google Calendar**.
2. In **From**, type the start of the window, for example `2026-10-01T09:00:00+05:30`. It is required.
3. In **To**, type the end, for example `2026-10-01T18:00:00+05:30`. It is required.
4. In **Time zone**, type `Asia/Kolkata` or your zone.
5. Use `{{N.isFree}}` and `{{N.busy}}` after the step. `{{N.isFree}}` is true only if nobody is busy and every calendar could be read. Branch on it before you book. See [Ask for name, phone, email and address](chatbot-ask-details-blocks.md).

### Find events

1. Add **Find events**. The step is titled **Find Google Calendar events**.
2. In **From** and **To**, type the window. Both are required.
3. In **Matching words**, type a word to match, for example `Demo call`. This box is optional.
4. In **Time zone**, type `Asia/Kolkata`.
5. In **At most (events)**, type a number. The default is `50`.
6. Use `{{N.data.items}}` in later steps. Each event has `summary`, `start.dateTime`, `htmlLink` and `hangoutLink`. A repeating event comes back once for each time it occurs.

### Create an event

1. Add **Create event**. The step is titled **Create a Google Calendar event**.
2. In **Title**, type the name, for example `Call with {{trigger.identity.email}}`. It is required.
3. In **Starts**, type the start time, for example `2026-10-01T10:00:00+05:30`. It is required.
4. In **Ends**, type the end time, for example `2026-10-01T10:30:00+05:30`. It is required.
5. In **Time zone**, type `Asia/Kolkata`.
6. In **Description**, type notes for the invitation. This box is optional.
7. In **Attendees (optional)**, type the emails to invite, separated by commas, for example `{{trigger.identity.email}}, sales@example.com`.
8. Open **Google Meet** and choose **Add a Meet link** or **No Meet link**. The default is **Add a Meet link**.
9. Open **Email attendees** and choose **Everyone**, **Outside the organisation only** or **Nobody**. The default is **Everyone**.

The step returns `{{N.eventId}}`, `{{N.htmlLink}}` and `{{N.meetLink}}`. A retried step finds the event it already made.

### Update an event

1. Add **Update event**. The step is titled **Update a Google Calendar event**.
2. In **Which event**, type the event id, for example `{{2.eventId}}`. It is required.
3. Fill only what changes: **New title**, **New start**, **New end** and **Time zone**.
4. In **Attendees (optional)**, type the emails, separated by commas, for example `sales@example.com`.
5. Choose **Email attendees**.

Only the fields you fill in change.

### Cancel an event

1. Add **Cancel event**. The step is titled **Cancel a Google Calendar event**.
2. In **Which event**, type the event id, for example `{{2.eventId}}`. It is required.
3. Choose **Email attendees**.

An event that is already cancelled counts as done.

### Get an instant Meet link

1. Add **Instant Meet link**. The step is titled **Create an instant Google Meet link**.
2. Use `{{N.meetingUri}}` in a later message to share the link.

This step has no fields. It makes no calendar event, so nobody is invited or reminded. To invite people with reminders, use **Create event** with **Add a Meet link**.

### Find a contact

1. Add **Find contact**. The step is titled **Find a Google contact**.
2. In **Email**, type the email, for example `{{trigger.identity.email}}`.
3. In **Phone**, type the phone, for example `{{trigger.phone}}`.
4. Use `{{N.found}}`, `{{N.name}}`, `{{N.email}}`, `{{N.phone}}`, `{{N.company}}` and `{{N.url}}` afterwards.

Finding nobody is not an error. Add a **Condition** that tests `{{N.found}}`.

### Save a contact

1. Add **Save contact**. The step is titled **Save to Google Contacts**.
2. Fill **First name**, **Last name**, **Email**, **Phone**, **Company** and **Notes**. For example, type `Came from the Diwali form` in **Notes**.
3. Open **If the contact already exists** and choose **Update it** or **Leave it as it is**. The default is **Update it**.
4. Use `{{N.action}}` and `{{N.url}}` afterwards. `{{N.action}}` is `created`, `updated` or `unchanged`.

An update never erases what is in Google. A new email or phone is added next to the old ones. Name, company and notes change only when you fill them in.

### Set the spreadsheet and its tab

1. In **Spreadsheet**, paste the link of the sheet. The box shows `Paste the link — docs.google.com/spreadsheets/d/…`.
2. Click **Load sheet tabs**. The button reads **Opening…** while it works. If the sheet cannot be opened, the message reads **Could not open that spreadsheet.**
3. Click a tab name to fill the range, for example `Sheet1!A1`.
4. Read the note. The spreadsheet must be one the chosen Google account can open. Ohanvi does not ask for Drive access, so you paste the link and do not browse for the file.

### Start a flow when a Google Form gets an answer

1. Open the flow's **Flow trigger** card and choose the Google Form response start.
2. Under **Google account that can open the form**, choose an account. The box shows `Choose an account`. The list also shows **Default account**, or **Default account (none set)** if your admin did not set one.
3. In **Which Google Form**, paste the form's edit link. The box shows `Paste the edit link — docs.google.com/forms/d/…/edit`.
4. Click **Use this form**. The button reads **Checking…** while it works. This also switches the form's watch on, so the flow can start.
5. Read the line under it. The flow starts on each new response. It checks every 5 minutes. Responses from before you connected the form are not replayed, and an edited response does not start a second run.
6. Under **Answers later steps can use**, click a chip such as `{{trigger.answers.<question key>}}` to copy it. Paste it into a later step to use that answer.

If the form cannot be reached, the message reads **Google Forms could not be reached.**

### Start a flow for each new Google contact

1. Open the flow's **Flow trigger** card and choose the new Google contact start.
2. Under **Whose new contacts**, choose a Google account. The box shows `Choose a Google account`.
3. Read the line under it. The flow starts for each contact added to that account from now on. It checks every 5 minutes. Contacts that already exist are not replayed, and editing a contact starts nothing.
4. The first check only remembers the address book and starts nothing. If it shows that note, add a test contact afterwards.

If Google cannot be reached, the message reads **Google Contacts could not be reached.**

### Test the step

1. Click **Save**.
2. Click **Test**, then **Run test**. See [Test a flow and fix failed runs](../flows/test-and-monitor-flows.md).
3. Click the step and open **Output** to read what it returned.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| The panel says the service is not ready | The Google app is not connected or not granted. | Click **Open Google Workspace**, connect it, then click **Check again**. |
| **Could not open that spreadsheet.** | The account cannot open the sheet, or the link is wrong. | Share the sheet with the account, and paste the full link. |
| A required field shows an error | **Range**, **Title**, **From**, **To**, **Starts**, **Ends** or **Which event** is empty. | Fill the field. |
| The calendar step books at the wrong hour | The time has a different offset from your zone. | Use the same offset as **Time zone**, for example `+05:30` with `Asia/Kolkata`. |

## Related

- [Understand the flow builder](understand-the-flow-builder.md)
- [Connect an app and use it in a flow](../flows/connect-apps-for-flows.md)
- [Build an automation flow](../flows/build-automation-flow.md)
- [Test a flow and fix failed runs](../flows/test-and-monitor-flows.md)
- [Use the Action step and conditions in a flow](flow-action-and-condition-steps.md)
