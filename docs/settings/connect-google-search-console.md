---
title: Connect Google Search Console
description: Connect Google Search Console, link your verified sites, and read clicks, impressions, rankings, sitemaps and index status in Ohanvi.
---

# Connect Google Search Console

Connect Google Search Console to see how people find your website and online store on Google, before they click: how often Google shows your site, how many people click, your average rank, your top searches and pages, sitemap health and whether a page is indexed. Ohanvi only reads this data. It never adds sites, submits sitemaps or changes anything in Search Console. Takes about 5 minutes.

## Before you start

- You can see **Google Workspace** in the **Connect** panel. This screen is for admins by default. If you do not see it, ask your admin.
- Your site is already added and verified in Google Search Console, at search.google.com/search-console. Ohanvi does not verify sites for you.
- You know which Google account has access to the site in Search Console. It can be the owner or a user the owner added.
- Your browser allows pop-ups for Ohanvi. Google sign-in opens in a pop-up.

## What Ohanvi asks Google for

| What Google shows you | What Ohanvi uses it for |
| --- | --- |
| **View Search Console data for your verified sites** | Listing your sites, and reading their search performance, sitemaps and index status. |

This is read-only access. To submit a sitemap or add a site, Ohanvi opens Search Console for you.

## Steps

### Connect Google Search Console

1. Open **Connect** in the left rail, then select **Google Workspace** under **Connectors**.
2. On the **Search Console** card, click **Connect Google Search Console**. If your Google account is already connected for another service, the card reads **Needs permission**. Click **Grant Search Console access** instead.
3. In the Google window, choose the Google account that has access to your site.
4. Read the permission Google lists and click **Continue**.
5. Back in Ohanvi, the card reads **Ready**.

### Link a site

1. On the **Search Console** card, click **Open**. **Search Analytics** opens. You can also open it from **Analytics** in the left rail, or under **More** if it is not on the rail.
2. Read **Sites on** followed by your Google account. It lists every site that account can see in Search Console. If you connected more than one Google account, choose one under **Google account**.
3. Next to the site you want, click **Link**.
4. Ohanvi shows **linked. Ohanvi is fetching its history now.** The site's dashboard opens.

To link another site later, click **Manage properties** at the top of the dashboard. The **Search Console properties** window lists your linked sites under **Linked properties** and the account's other sites below them.

Ohanvi saves the site's daily totals for the last 16 months in the background, then adds each new day. Google itself keeps only 16 months, so Ohanvi keeps your history longer than Google does.

A site that reads **Verify in Search Console** is not verified for this Google account. Click it, finish verification in Search Console, then come back and click **Link**.

!!! note "Domain and URL-prefix sites"
    Search Console has two kinds of site. A domain site, such as `example.com`, covers every page on `example.com`, `www.example.com` and `shop.example.com`. A URL-prefix site, such as `https://www.example.com/`, covers only addresses that start with exactly that. You can link both.

### Read the Summary

The **Summary** tab answers three questions in a few seconds: is Google sending more people, which searches bring them, and what to do next.

1. Open **Analytics** in the left rail, or under **More** if it is not on the rail, and click **Search Analytics**. The dashboard opens on the **Summary** tab. You can also click **Open** on the **Search Console** card in Google Workspace.

    If Search Console is not connected yet, the page shows **Connect Search Console**, which opens Google Workspace. If no site is linked yet, the page lists your sites so you can link one there. See [Link a site](#link-a-site).

    To switch to another linked site, choose it in the list at the top, or click **Manage properties** and then **Open dashboard** next to the site.

2. Choose a date range, from **Last 7 days** to **Last 16 months**.
3. Choose what to compare with: **vs previous period**, **vs same days last year** or **No comparison**.
4. Read the sentence at the top. It says how often Google showed your site, how many times people clicked through, the change against the comparison period, and whether your average rank improved or dropped.
5. Read the three tiles:
    - **Seen on Google**: how many times your site showed up in Google results. Google calls this impressions.
    - **Clicks**: how many times people clicked through to your site. The line under it gives the click rate, for example **3.5% of people who saw you clicked**.
    - **Average rank**: where your site appears on average. Lower is better: 1 to 10 is page 1 of Google, so moving from 15 to 12 shows as an improvement.
6. Click a tile to chart it per day. The solid line is this period, the dashed line the previous period.
7. Read **What people searched**: the 5 searches that brought the most clicks, with their change. Click **See all searches** for the full table.
8. Read **Easy wins**: searches where you rank just off page 1, many people see you, but few click. A small climb pays most here. Click **See all** for the full list.
9. Read **From Google to your site**. It follows people from **Seen on Google** to **Clicked**, **Visited your site** and **Key actions**. Click **See what visitors did** to open [Website Analytics](connect-google-analytics.md#read-the-summary). Without Google Analytics, the last two steps read **—**: click **Link Google Analytics**.
10. Read **Can Google read your site?**. It checks your sitemaps and says **Yes**, or names the sitemaps with errors or warnings. Click **Open Indexing** to fix them, or **Check a page** to look up one page.

To include the last 2 days, tick **Include days not final yet**. Google still updates those numbers, so they show as dotted on the chart.

!!! note "More visits than clicks"
    **Visited your site** can be higher than **Clicked**. Google Analytics also counts people who came from Bing and other search engines.

!!! note "Dates are in Pacific Time"
    Search Console counts each day in Pacific Time, and its numbers arrive 2 to 3 days late. Ohanvi shows the same dates as Search Console, so the totals match.

### Find your top searches and pages

1. Open the **Searches & pages** tab, or click **See all searches** on the **Summary**.
2. Choose **Searches** for the words people searched, or **Pages** for your pages.
3. Choose a view:
    - **Top**: what brought the most clicks.
    - **Falling**: what lost the most clicks against the comparison period.
    - **Easy wins**: searches at rank 4 to 20 that many people see but fewer click than usual. A small climb pays most here.

Each row shows **Clicks**, **Change**, **Seen**, **Click rate** and **Avg rank**. **Change** reads **New** for a search the comparison period did not have.

### Check sitemaps and index status

1. Open the **Indexing** tab, or click **Open Indexing** on the **Summary**.
2. Read **Sitemaps: the pages you told Google about**. Each sitemap shows **Errors**, **Warnings** or **Pending**, how many addresses it lists and when Google last read it.
3. To submit a sitemap, click **Submit a sitemap in Search Console**. Search Console opens on its sitemaps page.
4. Under **Is this page on Google?**, paste the address of one page on this site, for example `https://www.example.com/products/shoe`, and click **Inspect**.
5. Read the result: **Indexed** or **Not indexed**, **Coverage**, **Last crawl**, **Google canonical**, **robots.txt** and any **Rich results**.

Inspection shows Google's saved copy of the page. It is not a live check.

### Compare organic, paid and local

1. Open the **Paid & local** tab. It uses the date range you chose above.
2. Read the cards:
    - **Organic search**: clicks, times seen on Google, click rate and average rank from Search Console.
    - **Paid search**: clicks, spend, conversions and times seen from your Google Ads account.
    - **Local (Business Profile)**: profile views, calls, direction requests and website clicks from your Google Business Profile.
3. Read **Organic vs paid clicks**. It draws both lines day by day and says what share of your search clicks were organic.

A card that reads **Not connected** says why:

- **Organic search**: click **Go to Google Workspace** and connect Search Console.
- **Local (Business Profile)**: click **Connect Business Profile** and connect your Google Business Profile.
- **Paid search**: there is no button. Your Google Ads account is not connected from a screen in Ohanvi, so contact Ohanvi support to compare paid clicks.

The other cards keep working either way.

!!! note "Each source keeps its own days"
    Search Console counts days in Pacific Time. Google Ads counts them in your ad account's time zone, and Google Analytics in your property's time zone. Numbers for the same date can come from slightly different hours.

### Link a site to your online store

If you connected a Shopify, Wix or WooCommerce store, **Store SEO** under **Store connections** suggests the site that covers it and links it in one click. See [See your store in Google Search](connect-your-store.md#see-your-store-in-google-search).

### Unlink a site

1. In **Search Analytics**, click **Manage properties** at the top of the dashboard.
2. Under **Linked properties**, click **Unlink** next to the site. It is the icon beside **Open dashboard**.
3. In the **Unlink** window that names the site, click **Unlink**.

The dashboard stops showing the site. Daily totals Ohanvi already saved are kept and come back if you link the site again. Nothing changes in Search Console.

### Disconnect Search Console

1. On the **Search Console** card, click **Disconnect**.
2. In **Disconnect Google Search Console?**, click **Disconnect**. The account's other Google services keep working.

## Ask the AI assistant about your search traffic

Ohanvi's AI agents can read your linked sites too. When you set up an agent, the Search Console tools are listed under **SEO**: **Search Console properties**, **Search performance**, **Top searches and pages** and **Why search traffic changed**. Turn them on, then ask in plain words, for example:

- "What were my top searches last month?"
- "Which pages lost the most clicks this month?"
- "Where can I get more clicks quickly?" The agent looks for searches at rank 4 to 20 that many people see but few click.
- "Why did my clicks drop?" The agent compares two periods and tells you whether fewer people saw your site, fewer clicked, or your rankings moved, and which searches and pages changed most.

The agent only reads. It cannot link sites or change anything in Search Console. It also sees only what your role may see: if your role cannot open Search Console in Ohanvi, the agent cannot either.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **No Search Console properties** | The Google account has no sites in Search Console. | Add or verify your site in Search Console, or connect the Google account that owns it. |
| A site reads **Verify in Search Console** | The site is not verified for this Google account. | Verify it in Search Console, then click **Link**. |
| **Ohanvi lost access to this property** | The Google account was removed as a user of the site in Search Console. | Ask the site owner to add the account again, or link the site through another Google account. |
| **Search Console is busy** or **Showing saved numbers** | Google asked Ohanvi to slow down. Ohanvi shows the last numbers it fetched. | Click **Refresh** in about 15 minutes. |
| **No search data in this period** | The site is new in Search Console, or had no searches in these dates. | New sites take 2 to 3 days to show data. Try a longer range. |
| **Easy wins** reads **Nothing right now** | No search ranks just off page 1 with many views in these dates. | Choose a longer range, or check **Falling** in **Searches & pages**. |
| The newest days are missing | Google publishes numbers 2 to 3 days late. | Tick **Include days not final yet** to see the last 2 days early. |
| A tile reads **Comparison cut short (16-month limit)** | The comparison period starts more than 16 months ago, where Google has no data. | Choose a shorter range, or **vs same days last year** for a range inside the last 4 months. |
| Inspection says the address is not part of the site | The page is on another domain or another URL prefix. | Inspect a page of this site, or link the site the page belongs to. |
| Inspection says the property has used today's inspections | Google allows a limited number of inspections per site per day. | Try again after midnight Pacific Time. Inspections of the same page within an hour are free. |
| A card reads **Reconnect needed** | Google access was revoked or expired. | Click **Reconnect** and sign in again. |
| A card reads **Not enabled on server** | Search Console is switched off for your workspace. | Contact Ohanvi support. |

## Related

- [Connect Google Workspace](connect-google-workspace.md)
- [Connect Google Analytics](connect-google-analytics.md)
- [Send a weekly Search Console summary or start a flow on a traffic drop](../whatsapp/flow-google-workspace-steps.md#send-a-weekly-search-console-summary)
- [Connect your online store](connect-your-store.md)
- [Integrations](integrations/index.md)
