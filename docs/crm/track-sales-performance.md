---
title: Track sales performance
description: Read the CRM Dashboard, Funnel and Forecast, set monthly sales quotas, and run and export the sales reports.
---

# Track sales performance

Read how your pipeline is doing and where it is heading. At the end, you can read the **Dashboard**, see where leads drop off in the **Funnel**, check the weighted **Forecast** against monthly quotas, and export any of the 7 sales reports to Excel or PDF.

## Before you start

- You can see **CRM** in the left rail, with **Dashboard**, **Funnel** and **Forecast** in its panel. These need access to the CRM reports. If you do not see them, ask your admin.
- Your deals have stages, amounts and expected close dates. The figures are worked out from them. See [Create and manage deals](manage-deals.md).

## Steps

### Read the Dashboard

1. Open **CRM** in the left rail, then select **Dashboard**.
2. Read the figures across the top:
    - **Open pipeline** — the value of all open deals.
    - **Closing this week** — open deals with an expected close date in the next 7 days.
    - **Won** — deals won in the chosen period.
    - **Win rate** — won deals out of finished deals. It needs at least 4 finished deals. Click it to open **Funnel**.
    - **Avg deal** — the average won deal, with the usual sales cycle. Click it to open **Forecast**.
    - **Going cold** — open deals untouched for 7 days or more.
3. To change the period for the closed figures, click the period button. In **What should the closed figures cover?**, pick **This month**, **Last month**, **This quarter**, **This year** or **All time**.
4. Scroll down for **When the money is due**, **How long since anyone touched them**, **Pipeline**, **Where deals die**, **Where wins come from** and **Won by owner**.
5. Click **Export** to download your deals as a CSV file.

Open pipeline, what is due and what has gone cold are always as of now, whatever period you pick.

### See where leads drop off

1. Select **Funnel** in the CRM panel.
2. Read **Conversion funnel**. Each bar is a stage, with the share lost before the next one.
3. Read **Funnel by source** to see which lead source converts best. Click **Lead Sources** to manage them.
4. Click **Board** to see leads as cards in their stages. Click **Funnel** to go back.
5. Click **Export** to download the funnel as an Excel file.

**Edit stages** shows only for the platform sysadmin. It hides stages and changes their order in your own view of the funnel.

### Set sales quotas

1. On **Forecast**, click **Manage quotas**. Or press **Ctrl K** (**⌘K** on a Mac), type **Sales Quotas**, and select it.
2. Click **Add**. The **Add Sales Quotas** form opens.
3. Fill **Owner Username** and, optionally, **Owner Display Name**.
4. Pick the **Year** and **Month**.
5. Enter the **Target Amount** and **Currency**. Currency defaults to **INR**.
6. Click **Submit**. The message **Quota created** appears.
7. To check progress, click **View** in the **Achievement** column. The **Forecast vs Quota** window opens for that month.

Each owner can have 1 quota per month.

### Read the Forecast

1. Select **Forecast** in the CRM panel.
2. Read the 3 figures at the top:
    - **Weighted forecast** — each open deal's value multiplied by its probability.
    - **Open pipeline** — the best case if every open deal closes.
    - **Committed** — the weighted value of deals in stages at 80% or higher.
3. Read **Weighted pipeline by stage**, **Quota attainment** and **3-month forecast**. In the 3-month chart, **Committed** is already won and **Upside** is the weighted open value.
4. Click **Export** to download the forecast.

### Run the sales reports

1. Press **Ctrl K**, type **Sales reports**, and select it. **Sales reports** is not listed in the CRM panel.
2. Pick a report: **Sales Funnel**, **Pipeline Value**, **Win / Loss**, **Lead Sources**, **Activity Productivity**, **Campaign ROI** or **Forecast vs Quota**.
3. Click the date range button to choose the period.
4. Click **Export Excel** or **Export PDF** to download the report.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Win rate** shows **—** | Fewer than 4 deals are won or lost in the period. | Pick a longer period, or wait for more deals to close. |
| **A quota for this owner and period already exists.** | That owner already has a quota for that month. | Edit the existing quota instead. |
| **Target amount must be positive.** | **Target Amount** is 0 or less. | Enter an amount above 0. |
| **Month must be between 1 and 12.** | The month is out of range. | Pick a month from 1 to 12. |
| **Forecast vs Quota** shows the whole team's figures | The report cannot filter by owner yet. | Compare the owner's quota with **Won by owner** on the **Dashboard**. |
| **Nothing in this period** on a sales report | No data falls in the date range. | Widen the date range. |

## Related

- [Create and manage deals](manage-deals.md)
- [Set up pipelines, lead sources and products](set-up-pipelines.md)
- [Analytics overview](../analytics/index.md)
- [CRM overview](../crm/index.md)

!!! note "Screenshots to add"
    - After step 2 of "Read the Dashboard" — the figures row
    - After step 2 of "See where leads drop off" — the **Conversion funnel**
    - After step 2 of "Read the Forecast" — the 3 forecast figures and **Quota attainment**
    - After step 2 of "Run the sales reports" — **Sales reports** with a report picked
