---
title: Export your statement and view invoices
description: Download your credits statement as a CSV file, find every invoice raised on your account, open an invoice's GST breakdown and pay an open one.
---

# Export your statement and view invoices

Use this page to get your billing records out of Ohanvi. At the end you will have your credits statement as a CSV file, and you will know where to find every invoice, read its GST breakdown, copy its number and pay any invoice that is still open.

## Before you start

- You are signed in to Ohanvi. See [Sign in to Ohanvi](../sign-in.md).
- You are an admin of your workspace. The billing pages are shown only to your workspace's own admin.
- To claim GST on your invoices, your GSTIN is saved in **Invoice Details** before you pay. See [Add your GSTIN and invoice details](add-gst-invoice-details.md).

## Steps

### Export your statement as CSV

1. Click the **Credits** box in the top-right corner. The **Credits** page opens.
2. Scroll to **Statement**. It lists every movement of money, newest first. Click **Full statement →** to see more than the latest few.
3. Click **Export CSV** at the top of the page. A file named `credits-statement.csv` downloads, and **Statement downloaded.** appears.
4. Open the file in Excel or Google Sheets.

The file has the columns **Date**, **Description**, **Type** (**CREDIT** or **DEBIT**), **Source/Purpose**, **Money In**, **Money Out** and **Balance** (the balance after that movement).

### Find your invoices

Ohanvi raises an invoice for every recharge and every plan charge. Recharge invoices are labelled **Credit recharge**, and plan invoices are labelled **Subscription** or with the plan name.

1. On the **Credits** page, find the **Invoices** card. It shows your latest invoices, each with its number, status and total.
2. Click **All invoices →**. The **Billing** page opens on the **Ohanvi** tab.
3. Scroll to **Invoices**. The table shows **Date**, **Invoice**, **Total**, **Status** and **Actions** for every invoice.

You can also open this page from **Settings**: select **Organization**, then **Billing** under **Billing & credits** [VERIFY: Settings → Organization → Billing path].

### Open an invoice

1. Click an invoice row, or click **View** in its **Actions** column. The invoice window opens.
2. Read what the invoice is for. A recharge says **Credit recharge — prepaid credit added to the account**. A plan invoice shows the plan and its **Billing period**.
3. Check the amounts: **Taxable amount**, any **Discount** (with the coupon code), the GST lines, and **Total value**.
    - A business in Ohanvi's state, or one with no GSTIN, sees **CGST** and **SGST** lines.
    - A business in another state sees one **IGST** line.
4. If part of a plan invoice was paid from your credits, a **Paid from credits credit** line appears above **Amount payable**.
5. To copy the invoice number, click the copy icon beside it. **Invoice number copied** appears.
6. Click **Close**.

### Pay an open invoice

An invoice that is not yet paid shows **Pending** or **Awaiting payment**, with a button in its **Actions** column.

1. On the **Billing** page, find the invoice under **Invoices**.
2. Click **Pay now**, or **Open** if a payment link already exists. The Razorpay payment page opens.
3. Complete the payment. The status changes to **Paid** once Razorpay confirms it.

### Invoice statuses

| Status | Meaning |
| --- | --- |
| **Paid** | The invoice is settled. |
| **Pending** / **Awaiting payment** | The invoice is raised but not paid yet. On the **Credits** page this shows as **Open**. |
| **Expired** | The payment link ran out before it was paid. |
| **Cancelled** | The invoice was cancelled and is not payable. |

!!! note "Invoice PDFs"
    The app shows each invoice's full breakdown on screen. It has no **Download PDF** button. Invoices and receipts are sent to the **Billing email** you set on **Plans & Pricing** [VERIFY: invoice email delivery].

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Export CSV** is grey | Your account has no money movements yet. | Recharge or send your first paid message, then try again. |
| **No invoices raised yet.** or **No invoices yet** | You have not recharged or bought a plan yet. | An invoice appears after your first recharge or plan payment. See [Add funds to your account](../add-funds.md). |
| Invoice window shows **This invoice was cancelled and is not payable.** | The invoice was cancelled, for example when you kept your current plan instead of switching. | Nothing to pay. Check the other invoices in the list. |
| Invoice window shows **Last payment attempt failed: …** | The card was declined, the bank refused it, or the OTP was not completed. | Click **Pay now** or **Open** and try again, or use another payment method. |
| Invoice has no GSTIN | The GSTIN was not saved before the invoice was raised. | Add it in **Invoice Details**. It applies to invoices raised after that. See [Add your GSTIN and invoice details](add-gst-invoice-details.md). |
| You cannot see **All invoices →** or the **Billing** page | Your workspace is billed through Shopify, or you are not the workspace admin. | Shopify-billed workspaces see plan invoices in Shopify admin. Otherwise, ask your admin. |

## Related

- [Credits and billing in Ohanvi](../credits-and-billing.md)
- [Add your GSTIN and invoice details](add-gst-invoice-details.md)
- [Read your current usage](read-current-usage.md)
- [Manage your plan and users](manage-plan-and-users.md)

!!! note "Screenshots to add"
    - After "Export your statement" step 2 — the **Statement** card with **Export CSV** at the top of the page.
    - After "Find your invoices" step 3 — the **Invoices** table on the **Billing** page.
    - After "Open an invoice" step 3 — the invoice window with the GST lines.
    - After "Pay an open invoice" step 2 — an invoice row with **Pay now**.
