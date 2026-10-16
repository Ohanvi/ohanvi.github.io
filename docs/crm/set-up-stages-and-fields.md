---
title: Set up stages and fields
description: Name your own lead stages, deal stages and campaign statuses, and add the extra fields your team fills in on every lead, deal, campaign, activity and account.
---

# Set up stages and fields

Shape the CRM around how your business sells. At the end, the **Leads**, **Deals** and **Campaigns** boards show your own stages as columns, and every form asks for the extra details your team tracks.

## Before you start

- You are a CRM admin or manager. Other roles see the screen as **View only**.
- Deal stages come from a pipeline. If you have none, open the **Deals** board once and the default pipeline is created for you. See [Set up pipelines, lead sources and products](set-up-pipelines.md).

## Steps

### Open Stages & fields

1. Open **CRM** in the left rail, then select **Leads**, **Deals** or **Campaigns**.
2. Click **Board** at the top.
3. Click **Stages & fields** at the top right. The **Stages & fields** screen opens on that record type.
4. Use the tabs to switch between **Leads**, **Deals**, **Campaigns**, **Activities** and **Accounts**.

### Name your stages

1. On the **Leads** or **Deals** tab, pick a ready-made list under **Start from:** if one fits, for example **Clinic**, **D2C store**, **Real estate** or **Education** for leads, or **Short sale** or **Long B2B** for deals.
2. Rename a stage by typing over its name. Pick a colour for its column.
3. Set what each stage means. For leads pick **In progress**, **Converted** or **Dropped**. For deals pick **Open**, **Won** or **Lost**.
4. Click **Add stage** to add one. Use **Move up** and **Move down** to change the order of the columns.
5. Click **Remove** on a stage you no longer need. Its records move to the first stage with the same meaning. Nothing is lost.
6. Check the **Preview** of the board on the right.
7. Click **Save changes** at the top right. The message **Saved. Boards now follow these stages.** appears.

!!! note "Built-in statuses"
    Campaign statuses, activity statuses and account types start the work Ohanvi does on its own, such as sending a campaign. You can rename them, recolour them and reorder them. You cannot remove them. **Built in. Rename it instead.** shows on those.

### Add your own fields

1. On any tab, go to **Custom fields** and click **Add field**.
2. In **Field name**, type what your team fills in, for example `Budget` or `Treatment`.
3. Pick a type: **Text**, **Number**, **Amount (₹)**, **Date**, **Dropdown** or **Yes / No**.
4. For **Dropdown**, type the choices separated by commas, for example `Hair PRP, Laser, Facial`.
5. Turn on **On card** to show the field on the board cards.
6. Click **Save changes**.

Every field shows in the add and edit forms for that record type. Your fields also get their own columns in the import template. See [Import leads and deals](import-leads-and-deals.md).

### See what moves on its own

The **Moves on its own** card lists what Ohanvi does without anyone dragging a card:

- A completed call, email or WhatsApp moves a lead out of its first stage to the next one.
- A meeting held moves the lead to the last working stage, ready to convert.
- A new deal gets a follow-up task for its owner, due in 2 days.
- A deal moved to an open stage with nothing planned gets a next-step task.
- A won deal turns its account from **Prospect** into **Customer**, and its contact into a customer.
- A scheduled campaign goes **Active** on its start date and starts sending.
- An active campaign is marked **Completed** the day after its end date.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **View only** at the top, and nothing can be changed | Only CRM admins and managers can change stages and fields. | Ask your admin to make the change, or to give you the role. |
| **Save changes** stays greyed out | Nothing has changed, or a rule is not met. | Read the message under the stages, for example **Keep at least one stage a lead works through.** |
| **Mark one stage as "Converted" so conversion has somewhere to land.** | No lead stage means **Converted**. | Set one stage's meaning to **Converted**. |
| **Mark one stage as "Dropped" for leads that go nowhere.** | No lead stage means **Dropped**. | Set one stage's meaning to **Dropped**. |
| **No pipeline yet** on the **Deals** tab | No deal pipeline exists. | Open the **Deals** board once. The default pipeline is created for you. |
| A field does not show on the board cards | **On card** is off for that field. | Turn on **On card** and click **Save changes**. |

## Related

- [Move leads through your stages](move-leads-through-stages.md)
- [Create and manage deals](manage-deals.md)
- [Import leads and deals](import-leads-and-deals.md)
- [Set up pipelines, lead sources and products](set-up-pipelines.md)
