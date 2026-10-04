---
title: Set up pipelines
description: Create the sales pipeline your deals move through, set stage probabilities, and add or change stages.
---

# Set up pipelines

Set up the pipeline your deals move through, with its stages and the chance of winning at each one. Once it exists, every deal, board, funnel and forecast uses it. Lead sources and products have their own pages.

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

### Add lead sources and products

Lead sources and products have their own pages:

- [Manage lead sources and see which ones convert](manage-lead-sources.md)
- [Add products](add-products.md)

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
| You cannot change an existing stage's probability or order from the pipeline card | The wide card view only adds stages at the end. | Open **Pipelines** in a narrow window, where each pipeline row has an **Edit** action with the full stage editor [VERIFY: edit path on desktop]. |

## Related

- [Create and manage deals](manage-deals.md)
- [Manage lead sources and see which ones convert](manage-lead-sources.md)
- [Add products](add-products.md)
- [Track sales performance](track-sales-performance.md)
- [CRM overview](../crm/index.md)
- [Settings overview](../settings/index.md)
