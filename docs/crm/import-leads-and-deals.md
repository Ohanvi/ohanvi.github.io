---
title: Import leads and deals
description: Bring many leads or deals into CRM from an Excel or CSV file, with your own fields, a check before anything is saved and a report of any rows to fix.
---

# Import leads and deals

Add hundreds of leads or deals at once from a spreadsheet. At the end, every valid row is a lead or a deal in your stages, and any row that needs fixing is listed with the reason.

## Before you start

- You can see **CRM** in the left rail, with **Leads** and **Deals** in its panel.
- Your role can add leads or deals. The **Import** button shows only then.
- Your file is `.xlsx`, `.xls` or `.csv`, with 1 header row and 1 lead or deal per row.
- Optional: your own fields are set up first, so the template has a column for each. See [Set up stages and fields](set-up-stages-and-fields.md).

## Steps

### Download the template

1. Open **CRM** in the left rail, then select **Leads** or **Deals**.
2. Click **Import** at the top right. The **Upload Template - Import leads** window opens, or **Upload Template - Import deals** on **Deals**.
3. Under **Template**, click **Download Sample CSV**. The file has every column in order and 1 example row.
4. Fill in your rows. Keep the header row as it is.

Only 2 columns are required. Every other column, your own fields too, can be left blank.

| File | Required | Other columns |
| --- | --- | --- |
| Leads | **First Name**, and **Phone** or **Mobile** | Last Name, Company, Designation, Email, Website, Lead Source, Stage, Rating, Industry, Annual Revenue, Employees, Address, City, State, Country, Pincode, Email Opt Out, Owner, Description, then your own fields |
| Deals | **Deal Name** and **Contact Phone** | Pipeline, Stage, Amount, Currency, Probability, Expected Close Date, Account Name, Contact Name, Contact Email, Lead Source, Owner, Next Step, Loss Reason, Description, then your own fields |

Columns are matched by their header name, so their order in your file does not matter.

### Upload and check the file

1. Click **Select File** and pick your file, or drag the file anywhere onto the window.
2. Click **Upload File**. The file name shows once it is uploaded.
3. Click **Submit**. Ohanvi checks every row. The **Validation Results** window opens.
4. Read **Will create** and **Will match**. **Will match** counts rows for leads or deals you already have.
5. Click **Invalid only** to see the rows with a problem. Each row says what to fix, for example **Stage 'Hot lead' is not one of yours (New, Contacted, …)**.
6. Optional: click **Download validation report (Excel)** to fix the rows in the file itself.

### Import the rows

1. Click **Import**. When some rows are invalid, the button reads **Import 120 valid row(s)** and brings in only those.
2. The **Import complete** window shows how many were added and how many were already on file.
3. Click **Done**. The new leads or deals show on the screen.

To import the rows you fixed, upload the fixed file again. Rows already imported are left as they are.

!!! tip "Paste leads instead of a file"
    On **Leads**, click **Paste leads instead**, paste names and phone numbers copied from Excel or Sheets, and click **Use this list**. Ohanvi turns them into a file and checks them the same way.

### What Ohanvi fills in for you

- **Stage** takes the names on your board, for example `Contacted`. Leave it blank to start in your first stage.
- On deals, a blank **Pipeline** and **Stage** start the deal in your first stage.
- A **Lead Source** you do not have yet is created.
- On deals, an **Account Name** you do not have yet is saved as a new account, type **Prospect**.
- On deals, the contact is found by **Contact Email** or **Contact Phone**. If nobody matches, a new contact is created.
- A lead whose email or phone is already on file is left as it is. So is a deal with the same name for the same account.
- Imported leads and deals follow the same rules as ones added by hand. A new deal gets its follow-up task.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| No **Import** button | Your role cannot add leads or deals. | Ask your admin for CRM access. |
| **Phone or mobile number is required** | The lead row has no number. | Add a **Phone** or **Mobile** and upload again. |
| **Contact phone is required** | The deal row has no **Contact Phone**. | Add the number of the person on the deal. |
| **Stage '…' is reached by converting a lead — pick an open stage** | A lead row names your converted stage. | Pick a working stage. Convert the lead from the board after import. |
| **A lost deal needs a Loss Reason** | A deal row is in a lost stage with no reason. | Add **Loss Reason**: Price, Competitor, No budget, No decision, Timing or Other. |
| **Stage '…' is not one of yours** | The stage name does not match a board column. | Use a name from your board, or leave **Stage** blank. |
| Your own field is not in the template | The field was added after the template was downloaded. | Click **Download Sample CSV** again. |

## Related

- [Move leads through your stages](move-leads-through-stages.md)
- [Create and manage deals](manage-deals.md)
- [Set up stages and fields](set-up-stages-and-fields.md)
- [Import and sync contacts](import-and-sync-contacts.md)
