---
title: Read your current usage
description: See what each billing cycle cost, product by product and rate by rate, forecast the rest of the month, and export the usage as a CSV file.
---

# Read your current usage

Use the **Current usage** page to see exactly what your credits were spent on in a billing cycle. You get the cost of every product at every rate, a forecast for the rest of the cycle, and a CSV file you can share with your accounts team.

## Before you start

- You are signed in to Ohanvi. See [Sign in to Ohanvi](../sign-in.md).
- You know how credits work. See [Credits and billing in Ohanvi](../credits-and-billing.md).
- You are an admin of your workspace. The billing pages are shown only to your workspace's own admin. If you cannot open them, ask your admin.

## How billing cycles work

- A billing cycle is one calendar month, from the 1st to the last day of the month.
- The cycle in progress shows how far through it you are, for example **Cycle 1 Sep – 30 Sep · day 25 of 30**.
- A finished cycle shows **closed** instead of the day count.
- You can look back at the current cycle and the 5 cycles before it.
- Nothing falls due on the 1st. Each charge comes off your credit balance as it happens.

## Steps

### Open Current usage

1. Click your initials in the bottom-left corner. The profile menu opens.
2. Click **Current usage**. The **Current usage** page opens.

You can also click **Current usage** at the top of the **Credits** page.

### Pick a cycle

1. Click the cycle chip at the top right, for example **Cycle 1 Sep – 30 Sep · day 25 of 30**. A list of recent cycles opens.
2. Click the month you want, for example **Aug 2026**. The current month is marked **this cycle**.
3. Every card on the page updates to that cycle.

### Read the cards

| Card | What it tells you |
| --- | --- |
| **Spend by product** | This cycle's spend split by product, for example **WhatsApp messages**, **AI replies**, **Email delivered**, **Extra messages over plan** and **Social posts**. |
| **Biggest line items** | Your 6 largest costs. Each line is one product at one rate, with its share of the total. |
| **Breakdown** | Every charge in the cycle, grouped by product. Columns: **RATE LINE**, **CHARGES**, **USED**, **PERIOD** and **COST**, with a **SUBTOTAL** per product. |
| **Cost this cycle** | **Actual**: **Used so far** and **Credit balance now**. For the cycle in progress, **Forecast** (at today's rate): **Rest of the cycle**, **Cycle total**, and **Left at cycle end** or **Short by**. |

!!! tip "Read the forecast"
    The forecast assumes you keep spending at today's daily rate. If it shows **Short by**, your balance runs out before the end of the month. A **Recharge credits** button appears in the card. See [Add funds to your account](../add-funds.md).

### Export the usage as CSV

1. Pick the cycle you want to export.
2. Click **Export CSV** at the top of the page. A file named like `usage-2026-09.csv` downloads, and **Usage downloaded.** appears.
3. Open the file in Excel or Google Sheets.

The file has one row per rate line, with the columns **Product**, **Category**, **Rate**, **Charges**, **Quantity**, **Cost**, **First** and **Last**. The last 3 rows show **Used so far this cycle**, **Projected to cycle end** and **Credit balance now**.

**Export CSV** stays grey until the cycle has at least one charge.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **No usage yet this cycle.** | Nothing paid has been sent in the chosen cycle. | Pick an earlier cycle, or send your first paid message. |
| **Export CSV** is grey | The chosen cycle has no charges yet. | Pick a cycle that has charges. |
| **Failed to load this cycle’s usage.** | The page could not reach Ohanvi. | Click **Refresh** at the top of the page. If it keeps failing, sign out and sign in again. |
| **Short by** shows in **Cost this cycle** | At today's rate, your balance will not last to the end of the month. | Recharge before your next campaign. See [Add funds to your account](../add-funds.md). |
| You cannot find a cycle older than 6 months | The cycle picker lists only the current cycle and the 5 before it. | Use **Export CSV** on the **Credits** page to download your statement. See [Export your statement and view invoices](statement-and-invoices.md). |

## Related

- [Credits and billing in Ohanvi](../credits-and-billing.md)
- [Export your statement and view invoices](statement-and-invoices.md)
- [When credits run low or run out](low-or-empty-credits.md)
- [Billing overview](index.md)

!!! note "Screenshots to add"
    - After "Open Current usage" step 2 — the full **Current usage** page for the cycle in progress.
    - After "Pick a cycle" step 1 — the open cycle list with **this cycle** marked.
    - **Cost this cycle** card showing **Short by** and the **Recharge credits** button.
    - After "Export CSV" step 2 — the downloaded file open in a spreadsheet.
