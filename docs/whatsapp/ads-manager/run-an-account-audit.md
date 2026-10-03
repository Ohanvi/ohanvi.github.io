---
title: Run an account audit
description: Read the Account audit in Ads Manager to see what is working in your ad account, which findings to fix first, and how to share or email the report.
---

# Run an account audit

Open **Account audit** under **Reports** in **Ads Manager**. It reads your synced ad results and shows where money goes, what costs too much, and what to fix first. At the end, you have a short list of fixes and a report you can download, email or share. It takes about 10 minutes to read the first time.

## Before you start

- Your Facebook account, Page and ad account are connected in **Setup**. See [Set up Ads Manager](set-up-ads-manager.md).
- Your ads have spent money in the period you pick. The audit reads synced results, not live Meta screens.
- You can see **Ads Manager** in the **WhatsApp** panel. If not, ask your admin.

## What the audit shows

The audit has 5 tabs. Every tab compares the period you pick with the same number of days before it.

| Tab | What it answers |
| --- | --- |
| **Overview** | What did the audit find? How does spend split across funnel stages? |
| **Auction** | What does it cost to reach people? How are your ad sets set up? How does Meta rank your ads? |
| **Targeting** | Which audiences bring the best results? |
| **Geo & demo** | Which countries, regions, ages and languages bring results? |
| **Creative & copy** | Shortcuts to the image, video and ad text reports. |

## Steps

### Open the audit and set the period

1. Open **WhatsApp** in the left rail, then select **Ads Manager**.
2. Under **Reports** in the left column, select **Account audit**.
3. Pick a period: **Last 7 days**, **Last 14 days**, **Last 30 days** or **Last 90 days**. The line **vs the N days before** shows what each number is compared with.
4. Optional: narrow the audit with **Filter**, **Smart filter** or **Views**. See [Filter the audit](#filter-the-audit).
5. Click **Refresh** to rebuild the audit.

If the page says **No ad spend in this period**, pick a longer period or click **Sync from Meta** in **Creatives**.

### Read the Overview tab

1. Select the **Overview** tab.
2. Read **What the audit found** first. Findings are listed most important first. Each has a label.
3. If the card says **Nothing needs attention in this period.**, no finding was raised.
4. Read the tiles under it. Each tile shows the change against the period before. Green means better. Red means worse.
5. Read **By funnel stage**. Each ad set is placed in a stage by the audiences it targets: **Prospecting**, **Re-engagement**, **Retargeting** or **Retention**.
6. Click **Columns** to choose the numbers in the table: **Share of spend**, **Spend**, the result name, **Cost / result**, **Revenue**, **ROAS**, **CPM**, **CPC**, **CTR**, **Frequency**, **Impressions** and **Link clicks**.
7. Click **Reset** to go back to the default columns.
8. Read **Stage by stage**. Pick 2 numbers. One is drawn as bars and one as a line, for each stage, per day.
9. Read **Stage drilldown**. Pick a chip such as **Spend** or **CPM** to compare all stages on one number.
10. Read **Spend by stage**. It shows spend per day, stacked by stage.

| Label | Meaning |
| --- | --- |
| **Fix first** | A high-severity problem. Act on it before anything else. |
| **Worth a look** | A medium-severity problem. |
| **Opportunity** | Something that can bring better results. |
| **Tip** | A smaller suggestion. |

| Tile | What it shows |
| --- | --- |
| **Spend** | Money spent in the period. |
| Result tile | The result your ads are measured on: **Conversations**, **Leads**, **Purchases** or **Link clicks**. |
| **Cost per result** | Spend divided by results. Lower is better. |
| **ROAS** | Revenue divided by spend. |
| **CPM** | Cost for 1,000 impressions. Lower is better. |
| **Link CTR** | Link clicks divided by impressions. |
| **Frequency / day** | How often a person saw an ad that day. Lower is better. |

!!! tip
    Check that most of your spend goes to the stage you meant to fund. For example, a large **Retargeting** share with a small **Prospecting** share means few new people see your ads.

### Read the Auction tab

1. Select the **Auction** tab.
2. Read **Cost to reach people**. It shows CPM and cost per link click, per day.
3. Read **Attention**. It shows link CTR (%) and frequency, per day.
4. Pick **Dashboard view** or **Table view**. The dashboard shows bars. The table shows **GROUP**, a count, **SPEND**, **SHARE**, the result name, **COST / RESULT** and **ROAS**.
5. Read each breakdown card. Each one groups your spend and results.
6. Read **How Meta ranks your ads**. Bars show the share of your spend that is **Above average**, **Average**, **Below average** or **No ranking**.
7. Read the table under the bars. It lists each ad with **QUALITY**, **ENGAGEMENT** and **CONVERSION**.

| Card | What it tells you |
| --- | --- |
| **Learning phase** | Ad sets still learning, out of learning, or limited by too few results. |
| **Budget type** | Campaign budget (CBO) against ad set budgets (ABO). |
| **Budget breakdown** | Spend by budget size. Low, medium and high are the lower, middle and upper third of your own daily budgets. |
| **Automatic vs manual bid** | Meta bidding for the most results, or a cost, bid or ROAS goal you set. |
| **Bid strategy** | Every strategy in use. |
| **Campaign objective** | What each campaign asked Meta for. |
| **Ad delivery optimisation** | The result each ad set optimises for. |
| **Ad type** | Normal ads, dynamic creative (DCO), multiple texts (MTO) and catalogue ads (DPA). |
| **Quality ranking**, **Engagement rate ranking**, **Conversion rate ranking** | Meta's ranking against ads competing for the same people. |
| **Placement type** and **Placement** | Where the ads ran. |
| **Desktop vs mobile**, **Operating system**, **Device** | What people saw the ads on. |
| **Hour of day** | Results per hour in the ad account time zone, with cost per result. |
| **Day of week** | Which weekdays bring results cheapest. |
| **Frequency** | How many times a day a person saw the ad, and what that bought. |

!!! note "Ranking needs data"
    Ads under 500 impressions get no ranking. Rankings show as **Above average**, **Average**, **Bottom 35%**, **Bottom 20%** or **Bottom 10%**. A missing ranking shows **Not enough data**.

### Read the Targeting tab

1. Select the **Targeting** tab. It opens **Top audiences** with 3 views: **Audiences**, **Funnel** and **Breakdowns**.
2. Pick **Last 7 days**, **Last 14 days**, **Last 30 days** or **Last 90 days**.
3. In **Audiences**, read the table: **AUDIENCE**, **AD SETS**, spend, **RESULTS**, **COST / [result]**, **VS AVERAGE** and **EXCLUDED IN**.
4. Read **Account average**. It shows the cost per result for the whole account.
5. Click **Use in ad** on a row to open **Create Ad** with that audience chosen.
6. In **Funnel**, read each stage with **LIVE / CREATED**, results, cost and **VS AVERAGE**.
7. In **Breakdowns**, read **Buyers by frequency and value**, **Lookalike %**, **Lookalike × seed recency** and **Audience recency**.

If you see **No audience results yet**, ad sets using your audiences have not spent in this period. See [Build ad audiences](build-ad-audiences.md).

### Read the Geo & demo tab

1. Select the **Geo & demo** tab.
2. Under **Grade countries by**, pick **Cost per result**, **ROAS** or **CTR**.
3. Read **Countries**. It sorts countries into good, average, costly and result-free.
4. Read **Country tiers**. Tier 1 is the priciest markets. Tier 4 is the cheapest.
5. Read **Wasted spend by country**. It counts countries 1.5 times worse than the account, or with no results. It shows **Share of spend wasted** and **Potential uplift**.
6. Read **Trending countries**. It shows the biggest change against the period before.
7. Click a country on the map to see its regions. Click **Show all** to return.
8. Read **International scaling**. Pick **Tiers** or **Regions** to see day-by-day changes.
9. Read **Age & gender**. Pick **Age × gender**, **Age** or **Gender**.
10. Read **Language**. It covers **Targeting language**, **Copy language** and **Spoken country language**.

If the tab shows **No breakdowns for this period**, country, region and age results appear once ads have run.

### Read the Creative & copy tab

1. Select the **Creative & copy** tab.
2. Click **Open creative insights** to see which images and videos win, by format, with fatigue flags.
3. Click **Open ad copy insights** to see how text length, emojis, links and phrases perform.

See [Use ad creatives](use-ad-creatives.md) for these reports.

### Act on the findings

1. Start with each **Fix first** finding. Read its detail line.
2. Open the page that matches the finding.
3. Change 1 thing at a time.
4. Run the audit again after a few days to see the change.

| If the finding is about | Go to |
| --- | --- |
| Ads that spend with no results, or tired ads | [Automate your ads](automate-your-ads.md). Create a **Stop Loss** rule. |
| Weak or tired images and text | [Use ad creatives](use-ad-creatives.md) |
| Audiences that cost too much | **Targeting** tab, then **Use in ad** |
| Countries that waste spend | [Create an ad](create-an-ad.md). Remove those locations. |

### Filter the audit

1. Click **Filter**. The button reads **Filter · N** when filters are on.
2. Fill the **Filter data** window. See the fields in [Use ad creatives](use-ad-creatives.md#filter-the-data).
3. Or click **Smart filter** and pick a ready-made filter, for example **Spending with no results**.
4. Click **Views**, then **Save the current filter and columns…** to keep your setup.
5. Click **Clear filters** to remove all filters.

### Download the audit as a PDF

1. Click **PDF** to download the audit. [VERIFY: PDF button label is **Download PDF** when the ribbon is not shown]
2. Open the file. It is named like `ad-account-audit-30d.pdf`.

### Email the audit on a schedule

1. Click **Schedule**. The **New scheduled email** window opens.
2. Type a **Name (optional)**, for example "Monday numbers for the owner".
3. Under **How often**, pick **Daily**, **Weekly** or **Monthly**. Pick at least 1.
4. For **Monthly**, set **Day of month**.
5. Set **Minute**, the minute the email goes out. [VERIFY: hour field label]
6. In **Send to**, type up to 10 email addresses, separated by commas. Click **Add team members** to pick from your team.
7. Optional: type addresses in **CC (optional)** to copy them.
8. Optional: click **Edit PDF view** to choose the sections, measures and logo in the PDF.
9. Keep **Active** on. Switch it off to pause the schedule.
10. Click **Send a test email** to check it.
11. Click **Save**.

### Share the audit with a link

1. Click **Share**. The **Share the Account audit** window opens.
2. Pick the expiry, for example **Expires in 7 days**, **Expires in 30 days** or **Expires in 90 days**. [VERIFY: where the expiry is chosen]
3. Click **Create & copy link**.
4. Send the link. Anyone with it sees a live page with a PDF download, with no login.
5. To stop sharing, revoke the link in the same window.

!!! warning "A shared link is public"
    Anyone who has the link can read your spend and results until you revoke it or it expires.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Could not build the audit** | The audit could not read your synced data. | Click **Retry**. If it repeats, check **Setup**. |
| **No ad spend in this period** | Your ads did not spend in the period, or results have not synced. | Pick a longer period. Click **Sync from Meta** in **Creatives**. |
| **No data in this period.** on a card | No ad set or ad fell in that group. | Pick a longer period. |
| **No breakdowns for this period** | Ads have not run long enough for country, region and age results. | Wait until ads have run, then click **Refresh**. |
| **Not enough data** in a ranking | The ad has under 500 impressions. | Let the ad run longer. |
| **Could not build the PDF.** | The PDF export failed. | Click **PDF** again. If it repeats, shorten the period. |

## Related

- [Set up Ads Manager](set-up-ads-manager.md)
- [Read the performance report](read-the-performance-report.md)
- [Read the business dashboard](read-the-business-dashboard.md)
- [Use ad creatives](use-ad-creatives.md)
- [Automate your ads](automate-your-ads.md)
- [Run Click-to-WhatsApp ads](../click-to-whatsapp-ads.md)
