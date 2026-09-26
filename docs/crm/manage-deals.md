---
title: Create and manage deals
description: Add a deal, move it through your pipeline stages on the list or the board, set the next step, and close it as won or lost with a reason.
---

# Create and manage deals

Add the sales you are working on as deals, move each one through your pipeline stages, and close it as won or lost. At the end, every open deal has a stage, a value, an expected close date and a next step, and every closed deal records why.

## Before you start

- You can see **CRM** in the left rail, with **Deals** in its panel. If not, ask your admin for CRM access.
- Optional: a pipeline with stages exists. If none does, Ohanvi creates a default **Sales Pipeline** with your first deal. See [Set up pipelines, lead sources and products](set-up-pipelines.md).
- Optional: the company is saved as an account. See [Add and manage accounts](manage-accounts.md).

## Steps

### Add a deal

1. Open **CRM** in the left rail, then select **Deals**.
2. Click **Add deal** at the top right. The **Add Deal** form opens.
3. In **Deal Name**, type a name, for example `Acme ERP rollout`.
4. Pick the **Account** and the **Contact** the deal is with. Both are optional.
5. Pick the **Stage** the deal is in.
6. Enter the **Amount** and **Currency**. Currency defaults to **INR**.
7. Pick an **Expected Close Date** and a **Lead Source**.
8. In **Next Step**, write what happens next, for example `Send the revised quote by Friday`.
9. Optional: under **Products**, click **Add Product** and fill **Product**, **Qty**, **Unit Price** and **Disc %**. The form shows the **Estimated Total**.
10. Click **Submit**. The message **Deal created** appears and the deal shows in the list.

!!! note
    When a deal has product lines, its amount is the sum of the line totals. The **Amount** you typed is used only when there are no lines.

The deal's probability comes from its stage. Its expected revenue is the amount multiplied by that probability.

### Find deals in the list

1. On **Deals**, keep **List** selected at the top.
2. Click a view to narrow the list: **Open**, **Closing this week**, **Overdue**, **Later than a month**, **Gone cold**, **No next step**, **Won** or **Lost**. Click it again to show all deals.
3. Click a deal. Its summary opens on the right, with its line items and next step.
4. To change the next step, click the next-step box. The **Next step** window opens. Type in **What happens next** and click **Save**.
5. To see everything about the deal, click **Open full record**.

**Gone cold** lists open deals nobody has updated for 7 days or more.

### Move deals on the board

1. On **Deals**, click **Board**. Each stage is a column of deal cards.
2. If you have more than 1 pipeline, pick one from the **Pipeline** menu.
3. Press and hold a card, then drag it to another stage. The deal moves and its probability changes to the new stage's.
4. Click a card to open the deal's full record.

**Priority** lists deals that are **Overdue** or **Closing Soon**. **Follow-ups** lists follow-ups that are due.

### Use the full record

The full record has the tabs **Overview**, **Stage History**, **Notes & Activities**, **Contacts** and **Quotations**.

- **Overview** shows the amount, **Probability**, **Expected Revenue** and close dates.
- **Stage History** shows every stage the deal has been in.
- **Notes & Activities** lets you type in **Add a note…** and click **Add Note**, or type in **Add a follow-up task…** and click **Add Task**.

### Close a deal as won or lost

1. Open the deal's full record.
2. To close it as won, click **Mark Won** at the top. The deal moves to the pipeline's won stage at 100%.
3. To close it as lost, click **Mark Lost**. The **Mark "…" as Lost** window opens.
4. Pick a **Loss Reason**: **Price**, **Lost to a competitor**, **No budget**, **No decision made**, **Timing** or **Other**.
5. Optional: add **Notes**, then click **Mark Lost**. The deal moves to the lost stage at 0%.

On the board, dragging a card into the **Lost** column asks for the same reason.

!!! warning "Loss reason is required"
    A deal cannot be closed as lost without a loss reason. Ohanvi uses it to show where deals die on the **Dashboard**.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Deal name is required.** | **Deal Name** is empty. | Type a name and submit again. |
| **Loss reason is required when a deal is lost.** | You moved a deal to a lost stage without a reason. | Pick a **Loss Reason** in the window that opens. |
| **No LOST stage configured for this deal's pipeline** | The pipeline has no stage with the **LOST** category (or no **WON** stage for a win). | Add one. See [Set up pipelines, lead sources and products](set-up-pipelines.md). |
| **No pipeline configured** on **Deal Board** | No pipeline exists yet. | Create one, or add a deal and let Ohanvi create the default pipeline. |
| A card does not move when you drag it | The drag starts only after a short press. | Press and hold the card for a moment, then drag. |
| **Probability must be between 0 and 100.** | A probability outside 0–100 was entered. | Enter a number from 0 to 100. |

## Related

- [Set up pipelines, lead sources and products](set-up-pipelines.md)
- [Add and manage accounts](manage-accounts.md)
- [Log activities and notes](log-activities-and-notes.md)
- [Track sales performance](track-sales-performance.md)

!!! note "Screenshots to add"
    - After step 2 of "Add a deal" — the **Add Deal** form
    - After step 3 of "Find deals in the list" — the list with a deal's summary on the right
    - After step 3 of "Move deals on the board" — a card being dragged between stages
    - After step 3 of "Close a deal as won or lost" — the **Mark "…" as Lost** window
