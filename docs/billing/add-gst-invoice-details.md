---
title: Add your GSTIN and invoice details
description: Save your registered business name, GSTIN and address so they print on your Ohanvi invoices and you can claim the GST as input tax credit.
---

# Add your GSTIN and invoice details

Save your business's legal name, GSTIN and billing address once, and Ohanvi prints them on every invoice it raises after that. With a GSTIN on your invoices, you can claim the 18% GST you pay on recharges and plans as input tax credit.

## Before you start

- You are signed in to Ohanvi. See [Sign in to Ohanvi](../sign-in.md).
- You are an admin of your workspace. **Invoice Details** is shown only to your workspace's own admin.
- You have your GST registration certificate at hand. You need the 15-character GSTIN and the registered business name exactly as they appear on it.

## Steps

### Open Invoice Details

1. Click the **Credits** box in the top-right corner. The **Credits** page opens.
2. In the **This cycle** card, click **Invoice Details** in the line **Add your GSTIN in Invoice Details**. The **Invoice details** page opens.

You can also open it from **Settings**: select **Organization**, then **Invoice Details** under **Billing & credits** [VERIFY: Settings → Organization → Invoice Details path]. While choosing a plan, the **Add GSTIN** button on **Plans & Pricing** opens the same page.

### Fill in your details

1. In **Registered business name**, type your legal business name as it appears on your GST certificate.
2. In **GSTIN**, type your 15-character GSTIN, for example `29ABCDE1234F1Z5`. Letters change to capitals as you type, and spaces or dashes are not accepted.
3. Check the hint under the field. Once saved, it shows **State code [nn] — determines your place of supply.**
4. Fill in **Address line 1**, and **Address line 2 (optional)** if you need it.
5. Fill in **City**, **State** and **PIN code**.
6. Click **Save details**. **Invoice details saved.** appears at the top of the page.

!!! info "Why the GSTIN's state matters"
    The first 2 digits of your GSTIN are your state code. They decide how GST is split on your invoice. A business in Ohanvi's state pays **CGST** and **SGST**. A business in another state pays **IGST**. The total is the same either way.

### Change or remove your GSTIN

1. Open **Invoice details**.
2. Change the **GSTIN**, or clear the field to remove it.
3. Click **Save details**.

Your details apply to invoices raised after you save them. Invoices that were already raised keep the details they were raised with.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **A GSTIN is 15 characters — this one has [n].** | The GSTIN is too short. | Check it against your GST certificate and type all 15 characters. |
| **Doesn't look like a GSTIN. Expected 29ABCDE1234F1Z5.** | The characters are in the wrong order, for example a letter where a digit belongs. | Check each character against your GST certificate. **Save details** stays grey until it is fixed. |
| Yellow note **Add your GSTIN to reclaim the GST on your subscription as input tax credit.** | No GSTIN is saved yet. | Add your GSTIN and click **Save details**. The GSTIN is optional, but without it you cannot claim the GST. |
| A past invoice has no GSTIN | The GSTIN was saved after that invoice was raised. | Save your GSTIN before your next recharge or plan payment. |
| **Failed to save your invoice details.** | The details could not be saved. | Check the GSTIN and try again. If it keeps failing, click **Reload** and try once more. |
| You cannot find **Invoice Details** | Your workspace is billed through Shopify, or you are not the workspace admin. | Ask your workspace admin. |

## Related

- [Add funds to your account](../add-funds.md)
- [Export your statement and view invoices](statement-and-invoices.md)
- [Credits and billing in Ohanvi](../credits-and-billing.md)

!!! note "Screenshots to add"
    - After "Open Invoice Details" step 2 — the empty **Invoice details** form with the yellow GSTIN note.
    - After "Fill in your details" step 2 — the GSTIN field showing the **Doesn't look like a GSTIN** error.
    - After "Fill in your details" step 6 — the saved form with **Invoice details saved.** and the state code hint.
