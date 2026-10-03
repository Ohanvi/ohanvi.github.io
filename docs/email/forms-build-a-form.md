---
title: Build a form
description: Add questions, set the page look, choose what happens after submission, and publish.
---

# Build a form

The form builder has 3 tabs: **Questions**, **Responses** and **Settings**. At the end, you have a form that asks what you need and sends the answers somewhere useful.

## Before you start

- You have created a form. See [Create and manage forms](forms-create-and-manage.md).

## Steps

### Add questions

1. Open the form. The **Questions** tab opens.
2. Click a question type. The common ones show first. Click **More types** for the rest.
3. Choose from: **Short answer**, **Paragraph**, **Number**, **Multiple choice**, **Checkboxes**, **Dropdown**, **Yes / No**, **Rating**, **Net Promoter Score (0–10)**, **Grid**, **Phone**, **Email**, **Date**, **Time**, **File upload**, **Location** or **Statement**.
4. Type the wording. Add **Help text (optional)** if needed.
5. Turn on the required switch for answers you must have.
6. For choices, type 1 option per line, or click **Add option**. A **Grid** has **Rows** and **Columns**.
7. Open **Only ask this sometimes** to show a question only after an earlier answer.
8. Use **Duplicate this question** or **Delete this question** to tidy up.
9. Use **Stop asking this — it stays here** to hide a question. **Ask this again** brings it back.

### Add structure

1. Click **Break the form up** to add a page break.
2. Click **Leave a note** to add a sticky note for your team.
3. Click **Do something with the answers** to add an outcome.

### Import questions

1. Click **Import questions**.
2. Choose **From a file** with the columns `question`, `type`, `required`, `help` and `choices`. Separate choices with a semicolon. Click **Copy a sample** to see the format.
3. Or choose **From another form**.

### Style the page

1. Click the theme button: **Colour, typeface, layout and how to reach you**.
2. Set the headline, button text and the line under it. Pick a colour and a layout, **Landing page** or **card form**.
3. Under **Ways to reach you**, add **Phone**, **WhatsApp**, **Website** or **Details page**. Add an address and open hours if you like.

### Choose settings

1. Open the **Settings** tab.
2. Under **General**, set **Status** to **Draft**, **Active** or **Archived**. Set a short **Key** for the link.
3. Under **Sharing**, turn on **Share with a public link**. The form must be **Active**. Optional: **Domain**, **Let search engines find it** and an **Analytics tag**.
4. Under **Responses**, choose **Collect email addresses**, **Limit to one response** and a **Lead source**.
5. Under **After submission**, set the **Thank-you message**, **Button after submitting** and a link to **Or send them straight on**.
6. Turn on outcomes: a new lead in CRM, save answers on the contact under keys, record consent, or book an appointment with a **Service** and **Staff member**.

### Save and publish

1. Click **Save**. The bar shows **All changes saved** or **Unsaved changes**.
2. Click **Publish**. Fix any problem it lists, then publish again.
3. If you leave with changes, **Leave without saving?** offers **Keep editing**, **Discard changes** or **Save and leave**.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| Publish is refused. | A check failed. Common ones: 2 questions share a key, a choice question has no options, or answers go nowhere. | Read the message, fix it and publish again. |
| A conditional question is not allowed. | It depends on a later question. | Pick an earlier question. |
| The public link does not work. | The form is not **Active**. | Set **Status** to **Active**. |

## Related

- [Create and manage forms](forms-create-and-manage.md)
- [Preview and share a form](forms-share-and-preview.md)
- [Read form responses](forms-read-responses.md)
