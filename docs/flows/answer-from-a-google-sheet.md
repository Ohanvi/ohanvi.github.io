---
title: Answer from a Google Sheet
description: Reply on WhatsApp with a value from a Google Sheet row, start a flow from new sheet rows, or let an AI agent read the sheet.
---

# Answer from a Google Sheet

Answer a question such as `status 1042` with the matching row of your Google Sheet. At the end, a published flow catches the number in the message, finds its row, and replies with the row's status, or says it was not found.

## Before you start

- A Google account is connected with Google Sheets allowed. See [Connect Google Workspace](../settings/connect-google-workspace.md).
- The tab has a header row, and one column holds the value people ask about, for example `Order Number`.
- Your WhatsApp number is connected, and your role can create and change flows. See [Understand flows and the Flows list](flows-overview-and-list.md).

## Three ways to use a sheet

| You want | Use | Where |
| --- | --- | --- |
| A flow to answer one question from a row | The **Look up a row** step | **Apps** → **Google Sheets** in the **Add a step after** panel |
| A flow to start when a row is added | The trigger **A row is added to a Google Sheet, or is due today** | **What starts this flow?** → **Google** |
| An AI agent to answer free questions from the whole sheet | A **Google Sheet** knowledge source | **AI Hub** → **Knowledge Base** |

This page covers all three. The worked example uses the first.

## How a lookup finds the row

- It compares the value with each cell of **Column to look in**, ignoring capitals and spaces.
- If that finds nothing, it compares letters and digits only. `dk 1042` finds `DK-1042`.
- With **Also match cells that contain it** on, a cell that contains the value also counts. The value needs 3 or more characters.
- It returns up to 5 matching rows. The first match fills `{{N.row}}` and `{{N.fields}}`.
- It reads the tab at most once a minute. A cell changed a moment ago can take up to 1 minute to show.
- A tab can hold up to 10,000 rows.

## Steps

### Start from the recipe

The recipe builds the whole example flow for you. Skip this part to build it step by step.

1. Create a flow. See [Build an automation flow](build-automation-flow.md#create-the-flow-and-choose-a-trigger).
2. On the blank canvas, click **Add first step…**, then **Start from a recipe**.
3. Click **Answer status from a Google Sheet**. The trigger and 4 steps appear.
4. Fill in the parts below that the recipe leaves blank: the number, the spreadsheet, the tab and the column.

### Catch the number in the message

1. Click the trigger at the start of the canvas, then click the box at the top of the **When this runs** panel. The **What starts this flow?** window opens.
2. Open **WhatsApp** and click **A WhatsApp message arrives**. See [Start a flow from a WhatsApp message](start-a-flow-from-a-whatsapp-message.md).
3. In **Which WhatsApp number**, choose the number people message.
4. Turn on **Only when the text matches**.
5. In **Pattern**, type `status\s+(?<item>\d+)`. The part in brackets is named `item`. Later steps read it as `{{trigger.match.item}}`.
6. Click **Test**. In **Texts to try (one per line)**, type `status 1042` and check that it matches.
7. In **Who it answers**, choose **Customers only (not staff)** for customers, or **Staff only (people in HR)** for staff.

    [SCREENSHOT: When this runs panel with the pattern status\s+(?<item>\d+) and Who it answers open]

For more on patterns, see [Use text rules in conditions](use-text-rules-in-conditions.md).

### Look up the row

1. Click **+** after the trigger. Scroll to **Apps**, open **Google Sheets** and click **Look up a row**.
2. In **Google account**, keep **Default account** or choose the account that can open the sheet.
3. In **Which sheet**, keep **Another spreadsheet**.
4. Click **Choose from Google Drive** and pick the spreadsheet. Ohanvi can only open spreadsheets you choose this way.
5. Click **Load sheet tabs**, then click the tab's name. It fills **Tab**.

    [SCREENSHOT: Look up a row step with the spreadsheet chosen and the tab names shown under Load sheet tabs]

6. In **Column to look in**, type the header of the column, for example `Order Number`.
7. Check **Value to find**. It already reads `{{trigger.match.item}}` when the trigger has a text rule.
8. For customers, turn on **Only this customer's rows**. In **Column with the customer's phone**, type that header, for example `Customer Phone`. **Their phone** reads `{{trigger.from}}`.
9. Click **Test this step**. Check that `found` reads `true` for a real number. See [Test a step and pin sample data](test-a-step-and-pin-sample-data.md#test-one-step).

With **Only this customer's rows** on, someone who types another customer's number finds nothing. No close matches are suggested to them.

### Reply with the row

1. Click **+** after the lookup step. Type `paths` in **Search** and click **Split into paths**.
2. Click **Add two paths**. Set the first path's rule to `{{1.found}}` **is** `true`. Set **If nothing matches, take** to the second path.
3. On the first path, add **WhatsApp** → **Send message**.
4. In **Send to**, type `{{trigger.from}}`. In **Message**, type `Order {{trigger.match.item}}: {{1.fields.status}}`. Change `status` to your column's name, written in lower case with `_` for spaces.
5. Beside **Send from**, click **Change** and choose **Same number the message arrived on**.
6. On the second path, add another **Send message** with `Couldn't find {{trigger.match.item}}. Please check the number and try again.`
7. Click **Save**, then **Publish**.
8. From a phone, send `status` followed by a real number from the sheet. The reply quotes its status.

    [SCREENSHOT: the finished flow on the canvas with the lookup, the two paths and both Send message steps]

### Start a flow from a new sheet row

Use this to message someone when a row is added, for example to confirm a new booking.

1. Click the trigger, then the box at the top of the **When this runs** panel.
2. In **What starts this flow?**, open **Google** and click **A row is added to a Google Sheet, or is due today**.
3. Choose **Google account that can open the sheet**, then click **Choose from Google Drive** and pick the spreadsheet.
4. Click **Load sheet tabs** and choose the **Tab**.
5. In **When does a row start the flow**, choose **Each new row, once**.
6. In **Column that is different on every row**, choose a column such as an order number.
7. Optional: under **Send a row only when these are filled**, choose the columns that must have a value. Choose the **Phone number column** if later steps message that number.
8. Click **Use this sheet**. **First rows** shows how the first rows would be treated, and **Values later steps can use** lists the fields.
9. Click **Save**, then **Publish**.

Ohanvi checks the tab every 5 minutes. Each complete row starts the flow once. A row that is missing a required cell waits until it is filled. Changing a row that already started the flow does not start it again. Rows already in the sheet start nothing unless you turn on **Also send rows already in the sheet**.

Later steps read a cell as `{{trigger.fields.order_number}}`: the header in lower case, with `_` for spaces. For a one-word header, `{{trigger.row.Status}}` also works.

### Let an AI agent answer from the sheet

Use this when people ask in their own words and a fixed pattern will not catch it.

1. Open **AI Hub** → **Knowledge Base** and click **New source**.
2. Under **Source type**, choose **Google Sheet**. Type a **Name**.
3. Choose the **Google account**, then click **Choose from Google Drive** and pick the spreadsheet. Every tab is read, up to 10,000 rows in all.
4. In **Check for changes**, choose how often to read it again, for example **Every 15 min**.
5. Optional: for each tab, choose a **Key column**, for example the order number. Without one, rows go by number.
6. Click **Save source**. The sheet is read in the background, and its status updates by itself.
7. Open the agent under **AI Agents** and pick the source under **Knowledge it answers from**. [VERIFY: where Knowledge it answers from sits in the agent editor]

The agent then reads the sheet when it answers. Only rows that changed are read again at each check.

## Look up a row outputs

`N` is the step's number on the canvas.

| Output | What it holds |
| --- | --- |
| `{{N.found}}` | `true` when at least one row matched |
| `{{N.count}}` | How many rows matched |
| `{{N.fields.status}}` | A cell of the first match, by column name in lower case with `_` for spaces |
| `{{N.row.Status}}` | The same cell, by the exact header. Use it for one-word headers. |
| `{{N.rowNumber}}` | The first match's row number in the sheet |
| `{{N.rows}}` | Up to 5 matches, each with its own `row`, `fields` and `rowNumber` |
| `{{N.headers}}` | The tab's column names |
| `{{N.suggestions}}` | Close values when nothing matched. Empty when **Only this customer's rows** is on. |

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **The tab '…' has no column '…'. Its columns: …** | **Column to look in** does not match a header. | Copy a header from the list in the message into the field. |
| **The tab '…' is not in this spreadsheet — it was renamed or deleted. Choose the tab again in this step.** | The tab was renamed or deleted. | Click **Load sheet tabs** and choose the tab again. |
| **The tab '…' is empty — it needs a header row (column names) first.** | Row 1 of the tab is empty. | Type the column names in row 1. |
| **The tab '…' has more than 10000 rows. Move old rows to another tab.** | The tab is over the limit. | Move old rows to another tab. |
| **Choose the column with the customer's phone** and the flow does not publish | **Only this customer's rows** is on with no phone column. | Fill in **Column with the customer's phone**, or turn the switch off. |
| The reply shows the old value | The tab is read at most once a minute. | Wait a minute and ask again. |

## Related

- [Connect Google Workspace](../settings/connect-google-workspace.md)
- [Start a flow from a WhatsApp message](start-a-flow-from-a-whatsapp-message.md)
- [Use text rules in conditions](use-text-rules-in-conditions.md)
- [Use Tasks and HR steps in flows](use-tasks-and-hr-steps-in-flows.md)
- [Test a step and pin sample data](test-a-step-and-pin-sample-data.md)
