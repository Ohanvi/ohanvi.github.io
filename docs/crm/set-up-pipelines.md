---
title: Set up pipelines, lead sources and products
description: Create the sales pipeline your deals move through, set stage probabilities, and add the lead sources and products your deals use.
---

# Set up pipelines, lead sources and products

Set up the pieces your CRM is measured in: a pipeline with the stages a deal moves through, the lead sources your enquiries come from, and the products a deal is made of. Once they exist, every deal, board, funnel and forecast uses them.

## Before you start

- You can see **CRM** in the left rail. If not, ask your admin to give your role CRM access. The CRM also needs to be enabled for your workspace.
- You are an admin. The CRM settings page reads **Configure how your CRM works — admin only**.

## Steps

### Open the CRM settings

1. Click your initials in the bottom-left corner, then click **Settings**.
2. Select **CRM**. It lists **Pipelines**, **Lead Sources**, **Products** and **Funnel Stages**.
3. Click the row you want to set up. Its screen opens.

You can also press **Ctrl K** (**⌘K** on a Mac), type **Pipelines**, **Lead Sources** or **Products**, and select the screen.

### Start with the default stages

If you have no pipeline yet, the **Pipelines** tab shows **No pipelines yet**.

1. Click **Use the default 10 stages**.
2. Ohanvi creates a pipeline named **Sales Pipeline** and shows **Default funnel stages created.**

The default stages and their win probabilities are:

| Stage | Probability | Category |
| --- | --- | --- |
| New Lead | 5% | Open |
| Contacted | 10% | Open |
| Qualified | 25% | Open |
| Meeting Scheduled | 40% | Open |
| Needs Analysis | 50% | Open |
| Proposal Sent | 65% | Open |
| Negotiation | 80% | Open |
| Nurture | 15% | Open |
| Lost | 0% | Lost |
| Won | 100% | Won |

!!! note
    If you create a deal before you set up a pipeline, Ohanvi creates this default pipeline for you and puts the deal in its first stage.

### Create a pipeline

1. On **Pipelines**, click **New pipeline**. The **Add Pipeline** form opens.
2. In **Pipeline Name**, type a name, for example `Enterprise Sales`.
3. Optional: add a **Description**.
4. Tick **Default Pipeline** if new deals should start in this pipeline.
5. Under **Stages (top to bottom = board order)**, fill each row:
    - **Stage Name** — what the stage is called.
    - **Prob %** — the chance a deal in this stage closes, from 0 to 100.
    - **Category** — **OPEN** for a working stage, **WON** for the winning stage, **LOST** for the losing stage.
6. Click **Add Stage** for more rows. Click the remove icon (**Remove stage**) to delete a row.
7. Click **Submit**. The message **Pipeline created** appears and the pipeline shows as a card.

Give every pipeline exactly 1 **WON** stage and 1 **LOST** stage. **Mark Won** and **Mark Lost** on a deal look for them.

### Add a stage to an existing pipeline

1. On the pipeline's card, click **+ Stage**. The **Add stage** window opens.
2. In **Stage name**, type the name, for example `Proposal sent`.
3. Click **Add stage**. The message **Stage added.** appears.

A stage added this way goes to the end of the pipeline with 0% probability and the **OPEN** category.

To open the pipeline's deals, click **Open board →** on its card.

### Add lead sources

A lead source is the channel a lead or deal came through. Ohanvi starts you with **Website**, **Referral**, **Cold Call**, **Trade Show**, **Social Media**, **Email Campaign**, **Partner** and **Other**.

1. Open **Lead Sources**. The **Performance by source** view shows leads and conversion per source.
2. Click **Add source**. The **Add Lead Source** form opens.
3. In **Name**, type the source, for example `Instagram`.
4. Optional: add a **Description**, and tick **Default Source** to preselect it.
5. Click **Submit**. The message **Lead source created** appears.

### Add products

Products are what a deal is made of. A deal can carry product lines, and then its amount is the sum of the lines.

1. Open **Products**, then click **Add**. The **Add Products** form opens.
2. Enter a **Code** and a **Name**. Both are required, and the code must be unique.
3. Enter the **Unit Price** and **Currency**. Currency defaults to **INR**.
4. Keep **Active** ticked so the product can be picked on a deal.
5. Click **Submit**. The message **Product created** appears.

### Change funnel stages

The **Funnel Stages** tab is read-only. It is marked **Sysadmin only**, and only a platform sysadmin can rename, reorder or hide stages from **Funnel** → **Edit stages**.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Pipeline 'Sales' already exists.** | Another pipeline has that name. | Use a different **Pipeline Name**. |
| **Stage probability must be between 0 and 100.** | A **Prob %** is below 0 or above 100. | Enter a number from 0 to 100. |
| **Pipeline has active deals in stage '…'. Move or delete them first.** | You tried to delete a pipeline that still holds deals. | Move those deals to another pipeline's stage, or delete them, then try again. |
| **No WON stage configured for this deal's pipeline** when you mark a deal won | The pipeline has no stage with the **WON** category (or no **LOST** stage for a loss). | Edit the pipeline and set one stage's **Category** to **WON** (and one to **LOST**). |
| **Product code '…' already exists.** | Another product uses that code. | Give the product a unique **Code**. |
| You cannot change an existing stage's probability or order from the pipeline card | The wide card view only adds stages at the end. | Open **Pipelines** in a narrow window, where each pipeline row has an **Edit** action with the full stage editor [VERIFY: edit path on desktop]. |

## Related

- [Create and manage deals](manage-deals.md)
- [Track sales performance](track-sales-performance.md)
- [CRM overview](../crm/index.md)
- [Settings overview](../settings/index.md)

!!! note "Screenshots to add"
    - After step 2 of "Open the CRM settings" — Settings with the CRM rows listed
    - After step 5 of "Create a pipeline" — the stage editor with name, Prob % and Category filled
    - After step 3 of "Add a stage to an existing pipeline" — pipeline card with its stage chips and **+ Stage**
    - After step 1 of "Add lead sources" — the **Performance by source** view
