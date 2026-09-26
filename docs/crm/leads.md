---
title: Work with leads
description: Add leads, qualify them with status and score, convert a lead into a contact with an account and a deal, and follow up on abandoned carts.
---

# Work with leads

A lead is a prospect you are still qualifying. This page shows how to add leads, move them through statuses, and convert the good ones into contacts. At the end, a converted lead is a contact record, with an account and a deal if you chose them.

## Before you start

- You can see **Contacts** in the left rail with **Leads** in its panel. If not, ask your admin to give your role access to CRM leads. See the [Settings overview](../settings/index.md).
- To use **Lead Source** on a lead, the sources exist in CRM. See the [CRM overview](../crm/index.md).
- On a narrow window or a phone, **Leads** shows a simple grid instead of the triage view described here.

## Steps

### Open your leads

1. Open **Contacts** in the left rail, then select **Leads**.
2. The list on the left has 3 tabs with counts: **Open**, **Closed** and **All**. **Open** shows leads that are **NEW**, **CONTACTED**, **QUALIFIED** or **WORKING** and not yet converted.
3. Click a lead. Its details open on the right, with its status and score.

If you have no leads yet, you see **No leads yet** with an **Add lead** button.

### Add a lead

1. Click **Add lead**. The **Add Lead** form opens.
2. Type the **First Name**. It is the only required field.
3. Fill in what you know: **Last Name**, **Company**, **Designation**, **Email**, **Phone**, **Mobile** and **Website**.
4. Pick a **Lead Source** and a **Rating**: **HOT**, **WARM** or **COLD**.
5. Add **Industry**, **Annual Revenue**, **Employees** and the address fields if you have them.
6. Tick **Email Opt-out** if the person asked not to get emails.
7. Click **Submit**. The message **Lead created** appears.

### Read a lead's score

The lead's score is shown as a number. Under **Why this score**, Ohanvi lists what added to it, for example:

- **Rated hot** or **Rated warm**
- **Gave an email address**, **Gave a phone number**, **Named their company**, **Has a website**
- **Turnover above ₹1 Cr**, **100 or more staff**
- **Qualified** or **Contacted**

Missing details are listed too, such as **No email address** or **No phone number**. Fill them in to raise the score.

### Move a lead to another status

1. Select the lead and click **More actions** (the **…** button), then **Move Status**.
2. In **Move "…" to**, pick **NEW**, **CONTACTED**, **QUALIFIED**, **UNQUALIFIED** or **LOST**. The message **Lead status updated** appears.

A lead reaches **CONVERTED** only by being converted, not by moving its status.

### Convert a lead into a contact

1. Select the lead. Under **Before you convert**, check the duplicate result:
    - **No matching contact** — converting creates a new person.
    - **… is already a contact** — link the lead to that contact instead of creating a second one.
    - **Duplicate check unavailable** — the contact list did not load. Wait a moment and select the lead again.
2. Click **Convert**. The **Convert Lead** dialog opens.
3. Choose **Create a new contact**, or **Link the existing contact — …** when a match was found.
4. Tick **Create account "…"** to create an account from the lead's company. It shows **Create account (lead has no company)** when the lead has no company.
5. Tick **Create deal in default pipeline** to open a deal. Type a **Deal Name (optional)**.
6. Click **Convert**.

!!! warning "Converting is one-way"
    A lead becomes a contact, never the other way around. The lead is kept and marked **CONVERTED**, with its history. It can no longer be edited or change status.

### Merge duplicate leads

1. Select the lead to remove, then click **More actions** → **Merge into…**. The **Merge "…" into…** dialog opens.
2. In **Surviving record**, pick the lead to keep.
3. Click **Merge**.

!!! warning "Merging cannot be undone"
    Blank fields on the surviving lead are filled from the other one. Its notes, activities and memberships move over, and then the other lead is deleted.

### Log notes and activities

1. Select the lead, then click **More actions** → **Notes & Activities**.
2. Add a note or an activity for the lead. See the [CRM overview](../crm/index.md) for notes and activities.

### Follow up on abandoned carts (Commerce leads)

When a Shopify or WooCommerce store is connected, shoppers who leave without paying arrive as commerce leads.

1. Open the **Commerce Leads** screen. It is not listed in the **Contacts** panel. Open it from the **Abandoned Carts** tile in **Workspace**, using **Work the carts** [VERIFY: how users reach Commerce Leads].
2. Each row shows the **Platform**, **Cart** value, **Priority** and **Abandoned Since**.
3. Use the row actions:
    - **Overview** — see the lead and its cart.
    - **Copy resume-cart link** — copies a link that takes the shopper back to their cart. The message **Resume-cart link copied** appears.
    - **Send on WhatsApp** — opens WhatsApp with a message and the resume-cart link filled in.
    - **Notes & Activities**, **Move Status** and **Convert** — the same as for other leads.

If no store is connected, the screen says **No Shopify or WooCommerce store is connected yet.** Connect a store under **Connect** → **Store Connections**.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Lead is already converted.** | The lead was converted before. | Open the contact it became in **All contacts**. |
| **Lead is converted and can no longer change status.** | Converted leads are frozen. | Work with the contact, account or deal instead. |
| **Lead has no company — cannot create an account from it.** | **Create account** was ticked for a lead with no company. | Untick it, or add a **Company** to the lead first. |
| **Duplicate check unavailable** | The contact list had not loaded yet. | Wait a few seconds and select the lead again before converting. |
| Commerce leads screen is empty | No store is connected, or no cart has been abandoned yet. | Connect a store under **Connect** → **Store Connections**. Carts appear as shoppers leave. |

## Related

- [Manage contacts](manage-contacts.md)
- [Create and manage contact groups](contact-groups.md)
- [Import and sync contacts](import-and-sync-contacts.md)
- [CRM overview](../crm/index.md)

!!! note "Screenshots to add"
    - After step 3 of "Open your leads" — the leads triage view with a lead selected and its score.
    - After step 2 of "Convert a lead into a contact" — the Convert Lead dialog.
    - After step 2 of "Follow up on abandoned carts" — the Commerce Leads grid with row actions.
