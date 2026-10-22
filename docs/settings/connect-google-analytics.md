---
title: Connect Google Analytics
description: Connect Google Analytics, link your GA4 property, and read visitors, traffic sources, top pages and conversions in Ohanvi.
---

# Connect Google Analytics

Connect Google Analytics to see who visits your website or online store: users, sessions, engagement rate, key events (conversions) and revenue, where visitors come from and which pages they land on. Ohanvi only reads this data. It never creates properties, edits events or changes anything in Google Analytics. Takes about 5 minutes.

## Before you start

- You can see **Google Workspace** in the **Connect** panel. This screen is for admins by default. If you do not see it, ask your admin.
- Your website or store has a Google Analytics 4 property with a web stream, at analytics.google.com. Ohanvi does not create properties or install the Analytics tag for you.
- You know which Google account has access to the property. It needs **Viewer** access or higher.
- Your browser allows pop-ups for Ohanvi. Google sign-in opens in a pop-up.

Universal Analytics, the older version of Google Analytics, is not supported. Google has shut it down.

## What Ohanvi asks Google for

| What Google shows you | What Ohanvi uses it for |
| --- | --- |
| **See and download your Google Analytics data** | Listing your Analytics accounts and properties, and reading reports for the properties you link: visitors, traffic sources, pages, key events and revenue. |

This is read-only access. To create a property, edit an event or mark a key event, do it in Google Analytics.

Ohanvi asks for this permission only when you click **Connect Google Analytics**. Connecting another Google service, or adding a Google account, does not ask for it.

## Steps

### Connect Google Analytics

1. Open **Connect** in the left rail, then select **Google Workspace** under **Connectors**.
2. On the **Analytics** card, click **Connect Google Analytics**.
3. In the Google window, choose the Google account that has access to your property.
4. Read the permission Google lists, **See and download your Google Analytics data**, and click **Continue**.
5. Back in Ohanvi, the card reads **Ready**.

If your Google account is already connected for another service, Google asks only for Analytics. The permissions the account already gave are kept.

!!! note "If Google says it has not verified the app"
    While Google is still reviewing Ohanvi's access to Analytics, Google shows a warning screen before the permission. Open the advanced option on that screen and continue to Ohanvi. Then read the permission and click **Continue**.

### Link a property

1. On the **Analytics** card, click **Open**.
2. Read the list. It shows every Analytics account your Google account can see, with its properties.
3. Next to the property you want, click **Link**.
4. The property is linked. Ohanvi reads its time zone, currency and web stream addresses from Google.

Ohanvi saves the property's daily totals for the last 14 months in the background, then adds each new day. Trends, summaries and alerts read these saved totals, so they load quickly.

A property is linked through one Google account. If you link the same property through another Google account, the link moves to that account. A property with no web stream, such as an app-only property, can still be linked.

### Read the Overview tab

1. Next to the linked property, click **Open dashboard**. The dashboard opens on the **Overview** tab.
2. Choose a date range: **7d**, **28d**, **3m**, **6m** or **12m**. The range ends yesterday.
3. Choose what to compare with: the period just before, or the same dates a year earlier. You can also turn the comparison off.
4. Read the tiles: **Users**, **Sessions**, **Engagement rate**, **Key events** and **Revenue**. Each shows the change against the comparison period. **Revenue** appears only when your site sends e-commerce data to Google Analytics.
5. Read the trend chart. The solid line is the current period, the dashed line the comparison period.
6. Read the chip that shows how many users are on your site right now, for example **12 users right now**. It counts people in the last 30 minutes.

To add today, turn on **Include today**. Today is not over yet, so it shows as a dotted line.

!!! note "Dates are in the property's time zone"
    Google Analytics counts each day in the time zone set on the property. Ohanvi shows the same dates as Google Analytics, so the totals match. The footnote under the dashboard reads **Dates in** followed by the time zone.

!!! note "Recent days can still change"
    A day's numbers take about 12 hours to arrive, and longer on large properties. Google then keeps updating them: totals can change for 2 days, and key events can move for up to 12 days. Ohanvi reads the last 14 days again every day, so its numbers catch up with Google's.

### Read the Acquisition tab

1. Open the **Acquisition** tab.
2. Read the channels that bring visitors, such as Google search, social, ads, email, direct and other sites. The bar shows each channel's share.
3. Choose a view:
    - **Top**: the channels that brought the most sessions.
    - **Losing**: the channels that lost the most sessions against the comparison period.
4. Read **Source / medium** in the second table for the exact site or campaign behind each visit.

One person can arrive by two channels, so users per channel do not add up to the **Users** tile. Sessions, key events and revenue do add up.

### Read the Pages tab

1. Open the **Pages** tab.
2. Read the landing pages, the first page people open on your site. Each shows sessions, engagement rate, key events and revenue, so you can see which pages turn visitors into buyers or leads.
3. Read all pages to see how often each page was viewed.

On a small screen, scroll the table sideways to see every column.

### Read the Conversions tab

1. Open the **Conversions** tab.
2. Read each key event, such as a purchase, a sign-up or a form submission, with its count, its value and its change against the comparison period.

The tab reads **No key events set up. Mark an event as a key event in Google Analytics** when the property has none. Mark one in Google Analytics, then come back.

### Unlink a property

1. On the **Analytics** card, click **Open**.
2. Click **Unlink** next to the property.
3. Choose whether to also delete the daily totals Ohanvi saved, then confirm.

The dashboard stops showing the property. If you keep the daily totals, they come back if you link the property again. Nothing changes in Google Analytics.

### Disconnect Google Analytics

1. On the **Analytics** card, click **Disconnect**.
2. Confirm in the window that opens. The account's other Google services keep working.

## Ask the AI assistant about your website

Ohanvi's AI agents can read your linked properties too. When you set up an agent, turn on the Google Analytics tools. They read performance, top lists and the reason numbers changed. Then ask in plain words, for example:

- "Why did my visitors drop last week?" The agent compares two periods. It finds the channels, landing pages and devices that moved most, and tells you whether you lost visitors or the visitors you had converted less.
- "Which channel brings the most sales?"
- "Which pages convert best?"
- "Is my tracking working?" The agent looks for a sudden day with no visitors, or a property with no web stream.

The agent only reads. It cannot link properties or change anything in Google Analytics.

## Get a weekly summary or an alert

A flow can send you a weekly website report on WhatsApp or email, or start when visitors drop, conversions drop or tracking goes silent. See [Send a weekly Analytics summary](../whatsapp/flow-google-workspace-steps.md#send-a-weekly-analytics-summary) and [Start a flow when visitors or conversions drop](../whatsapp/flow-google-workspace-steps.md#start-a-flow-when-visitors-or-conversions-drop).

## Compare Analytics revenue with your store

If you connected a Shopify, Wix or WooCommerce store, Ohanvi matches it to the property whose web stream has the store's address. **Store analytics** then compares the revenue Google Analytics recorded with your store's own orders. See [See your store in Google Analytics](connect-your-store.md#see-your-store-in-google-analytics).

## See search visitors on your site

The **Overview** tab of the Search Console dashboard has an **On your site** card. Once a property is linked, it follows people from Google Search to your site: seen on Google, clicked, visited the site and converted. See [Compare organic, paid and local](connect-google-search-console.md#compare-organic-paid-and-local).

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| No properties are listed | The Google account has no Google Analytics 4 property. | Create one at analytics.google.com, or connect the Google account that has access to it. |
| Ohanvi says it lost access to the property | The Google account was removed from the property, or the property was deleted. | Ask the property's admin to add the account again with **Viewer** access, or link the property through another Google account. |
| **Google Analytics is busy for this property, try again in a few minutes** | Google limits how much each property can be read per hour, and other tools share that limit. Ohanvi shows the last numbers it fetched when it has them. | Try again in about 15 minutes. |
| **Google hid some rows to protect privacy** | The property has few visitors in this period, so Google holds back some rows. Totals still show. | Choose a longer range. |
| **Numbers are estimated** | Google estimated the report from part of the data. Totals still show. | Choose a shorter range for exact numbers. |
| **No key events set up. Mark an event as a key event in Google Analytics** | The property has no key events. | Mark an event as a key event in Google Analytics. |
| The **Revenue** tile is missing | The site does not send e-commerce data to Google Analytics. | Set up e-commerce tracking on your site. |
| Analytics revenue does not match your store | Ad blockers and cookie consent stop some purchases from reaching Google Analytics. | Compare both in **Store analytics**. A small gap is normal. |
| Yesterday's numbers look low, or changed | Google is still adding that day's data. | Check again tomorrow. See [Recent days can still change](#read-the-overview-tab). |
| Numbers differ from Google Analytics | The dates differ, or Google updated recent days. | Compare the same dates in the property's time zone. |
| Google shows a warning that it has not verified the app | Google is still reviewing Ohanvi's access to Analytics. | Open the advanced option on the warning and continue to Ohanvi. |
| A card reads **Reconnect needed** | Google access was revoked or expired. | Click **Reconnect** and sign in again. |
| A card reads **Not enabled on server** | Google Analytics is switched off for your workspace. | Contact Ohanvi support. |

## Related

- [Connect Google Workspace](connect-google-workspace.md)
- [Connect Google Search Console](connect-google-search-console.md)
- [Send a weekly Analytics summary or start a flow when visitors drop](../whatsapp/flow-google-workspace-steps.md#send-a-weekly-analytics-summary)
- [Connect your online store](connect-your-store.md)
- [Integrations](integrations/index.md)
