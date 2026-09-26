---
title: Add email contacts, lists and segments
description: Add or import the people you email, group them into lists, and build segments that aim a campaign at part of a list.
---

# Add email contacts, lists and segments

Bring in the people you want to email, then group them. At the end you have contacts marked **Subscribed**, at least 1 list to send a campaign to, and optional segments that narrow a list to the people who match your conditions.

## Before you start

- You can see **Email** in the left rail with **Contacts**, **Lists** and **Segments** in its panel. If not, ask your admin for access.
- You have permission to email these people. Only **Subscribed** contacts receive marketing emails.
- To import, your file is a CSV, XLSX or XLS file with the columns **Email**, **First Name**, **Last Name** and **Phone**.

## Steps

### Add contacts one at a time or several at once

1. Open **Email** in the left rail, then select **Contacts**.
2. To add 1 person, click **Add Contact**. Fill in **Email**, and optionally **First Name**, **Last Name**, **Phone**, **Birthday**, **Subscription Status** and **Tags (comma-separated) — e.g. vip,newsletter**. Save the form.
3. To add several, click the arrow next to **Bulk Import Contacts**, then click **Add Multiple**. The **Add Multiple Contacts** dialog opens.
4. Type 1 address in each **Email** row. Click **Add another row** for more.
5. Optional: choose a list in **Add to Mailing List (optional)**, or click **Create New List…**.
6. In **Subscription Type**, keep **Marketing (Subscribed)** unless these people have not agreed to marketing email.
7. Click **Add**. The **Result** section shows which rows were added. Click **Retry Failed** to try failed rows again.

On a new account, the **Add the people you want to email** card offers **Add contacts**, which opens the same dialog.

### Import contacts from a file

1. On **Contacts**, click **Bulk Import Contacts**. The **Import Contacts** wizard opens.
2. Under **How would you like to add contacts?**, choose **Upload a file** or **Copy and paste**. Click **Continue**.
3. Select your file, or paste 1 contact per line as `email, first name, last name, phone`. Click **Continue**.
4. Under **Organize your contacts**, optionally choose a list in **Mailing List (optional)**. Click **Continue**.
5. Under **Tag your contacts**, optionally type tags in **Tags (comma-separated)**, for example `vip,newsletter`. Click **Continue**.
6. Under **Match Columns**, match each column in your file to **Email**, **First Name**, **Last Name**, **Phone** or **Skip this column**. At least 1 column must be **Email**. Click **Continue**.
7. Under **Set a marketing status**, choose the status for every contact in this file. Only subscribed contacts receive marketing emails. Click **Continue**.
8. Under **Review and complete your import**, check the details, then click **Complete Import**.
9. **Import complete** shows **New contacts detected**, and how many were added to the list and tagged. Rows that failed are listed with the reason. Click **Done**.

!!! note
    Column matching works for CSV files only. Excel files must use the standard column order: **Email**, **First Name**, **Last Name**, **Phone**.

To see earlier imports, click **Manage audience** on **Contacts**, then click **Import history**.

### Create a list and add people to it

1. Open **Email** in the left rail, then select **Lists**.
2. Click **Create list**. In **List name**, type a name such as `Newsletter`. Add a **Description (optional)**, then click **Create list**.
3. On the new list, click **Add contacts — this list is empty**. The **Members** dialog opens.
4. In **Search contacts to add…**, find and tick the people to add, then click **Add**.
5. Click **Close**.

To work with an existing list, open its **⋮** menu. **Manage Members** adds or removes people, **Duplicate** copies it, and **Merge Into Another List** moves its members into another list.

To add people from a file straight into a list, open **Manage Members**, then click **Import to This List**.

### Build a segment

A segment narrows a list to the people who match your conditions. It never adds people who are not on the list.

1. Open **Email** in the left rail, then select **Segments**.
2. Click **Create segment**. The **New segment** screen opens.
3. Pick a card under **Start with a common segment**, or click **Build from scratch**.
4. Click **Add filter**, choose a filter in **Choose a filter**, then set its value.
5. To combine conditions, set **Contacts match** to **all** or **any**. Click **Add AND group** or **Add OR group** for nested groups.
6. Check the preview. **WHO MATCHES THIS SEGMENT** shows the count and **SAMPLE CONTACTS**.
7. Type a name in **Untitled segment**, then click **Save segment**.

To aim a campaign at a segment, choose a list and the segment in the campaign. See [Send an email campaign](send-email-campaign.md).

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **A contact with email '…' already exists.** | The address is already in **Contacts**. | Edit the existing contact instead. |
| **A deleted contact with this email exists — reactivate it instead of recreating.** | The contact was deleted earlier. | Find the deleted contact and reactivate it. |
| Import row shows **Contact with this email already exists** or **Invalid email address '…'** | The row repeats an existing contact or has a bad address. | Fix the row in your file and import it again. |
| **Map at least one column to Email before continuing** | No column is matched to **Email**. | Match your email column to **Email**. |
| **Add at least one complete condition before saving.** | A segment filter has no value. | Fill in or remove the incomplete filter. |
| **No contacts match these conditions yet.** | The conditions are too narrow. | Loosen a filter, or switch **all** to **any**. |

## Related

- [Send an email campaign](send-email-campaign.md)
- [Track results and handle unsubscribes and bounces](track-email-results.md)

!!! note "Screenshots to add"
    - After step 3 of "Add contacts one at a time or several at once" — the **Add Multiple Contacts** dialog
    - After step 6 of "Import contacts from a file" — the **Match Columns** step
    - After step 4 of "Create a list" — the **Members** dialog with contacts ticked
    - After step 6 of "Build a segment" — the builder with the **WHO MATCHES THIS SEGMENT** preview
