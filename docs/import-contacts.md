# Import contacts from a CSV file

Add customers or leads into Ohanvi so they can be used in WhatsApp, email, workflow, and ad follow-up campaigns.

## Goal

By the end of this guide, the user has imported a contact list, mapped the important fields, and confirmed which rows were added or skipped.

## Prepare the CSV file

1. Create one row per contact.
2. Keep the first row as column names.
3. Include useful fields such as `name`, `phone`, `email`, `city`, `tags`, and `opt_in_status`.
4. Format WhatsApp numbers with country code, for example `919876543210`.
5. Export the spreadsheet as a comma-separated CSV file.

## Upload the file

1. Open **CRM** from the left navigation.
2. Select **Contacts**.
3. Choose **Import**.
4. Drag the CSV file into the upload area or choose it from your computer.
5. Select whether duplicate contacts should be skipped or updated.
6. Click **Continue**.

## Map and review fields

| CSV column | Ohanvi field |
| --- | --- |
| `name` | Full name |
| `phone` | WhatsApp number |
| `email` | Email address |
| `tags` | Contact tags |

!!! tip "Screenshot suggestion"
    Add a screenshot here showing the mapping screen before clicking **Import**.

## Fix skipped rows

| Problem | Fix |
| --- | --- |
| Phone numbers skipped | Confirm country codes are present. |
| Duplicates skipped | Choose update existing contacts and upload again. |
| Tags missing | Check the tag separator format supported by your import screen. |
