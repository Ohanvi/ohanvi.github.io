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

This is read-only access. To create a property, edit an event or mark a key event, Ohanvi opens Google Analytics for you.

Ohanvi asks for this permission only from the **Google Analytics** card. **Connect Google** and **Add Google account** do not ask for it.

## Steps

### Connect Google Analytics

1. Open **Connect** in the left rail, then select **Google Workspace** under **Connectors**.
2. On the **Google Analytics** card, click **Connect Google Analytics**. If your Google account is already connected for another service, the card reads **Needs permission**. Click **Grant Analytics access** instead.
3. In the Google window, choose the Google account that has access to your property.
4. Read the permission Google lists, **See and download your Google Analytics data**, and click **Continue**.
5. Back in Ohanvi, the card reads **Ready**.

Google asks only for Analytics. The permissions the account already gave are kept.

!!! note "If Google says it has not verified the app"
    While Google is still reviewing Ohanvi's access to Analytics, Google shows a warning screen before the permission. Open the advanced option on that screen and continue to Ohanvi. Then read the permission and click **Continue**.

### Link a property

1. On the **Google Analytics** card, click **Open**.
2. Read **Properties on** followed by your Google account. It lists every Analytics account that Google account can see, with its properties. Each property shows its number, for example **Property 123456789**, and **Sub-property** or **Roll-up property** when it is one.
3. Next to the property you want, click **Link**.
4. Ohanvi shows **linked. Ohanvi is fetching its history now.** The property moves to **Linked properties** and reads **Fetching history**, then **Active**. In the list below, it now reads **Linked · Open**.

A linked property that reads **Lost access** or **Account needs attention** cannot be read right now. See [Troubleshooting](#troubleshooting).

Ohanvi saves the property's daily totals for the last 14 months in the background, then adds each new day. Summaries and alerts read these saved totals, so they load quickly. Ohanvi also reads the property's time zone, currency and web stream addresses from Google.

The property you link first is the **Default**. Flow steps use it when you do not choose a property.

To read the list again, for example after you created a property in Google Analytics, click **Refresh** beside **Properties on**.

A property is linked through one Google account. If you link the same property through another Google account, the link moves to that account. A property with no web stream, such as an app-only property, can still be linked.

### Read the Overview tab

1. Open **Analytics** in the left rail, or under **More** if it is not on the rail, and click **Website Analytics**. The **Google Analytics** dashboard opens on the **Overview** tab. Under the title, it names the property and the Google account it reads through.

    You can also open it from Google Workspace: on the **Google Analytics** card, click **Open**, then click **Open dashboard** under **Linked properties**.

    If Google Analytics is not connected yet, the page shows **Connect Google Analytics**. If it is connected but no property is linked, it shows **Link a property**. Both open Google Workspace.

2. If you linked more than one property, choose one in the list at the top.
3. Choose a date range: **7d**, **28d**, **3m**, **6m** or **12m**. The range ends yesterday.
4. Under **Compare**, choose **Off**, **Prev** for the period just before, or **YoY** for the same dates a year earlier.
5. Read the tiles: **Users**, **Sessions**, **Engagement rate**, **Key events** and **Revenue**. Each shows the change against the comparison period. A tile reads **No earlier data** when the comparison period had none. **Revenue** appears only when your site sends e-commerce data to Google Analytics.
6. Click a tile to show that number in **Trend**, or choose it above the chart. The solid line is the current period, the dashed line the comparison period.
7. Read the chip above the tiles, for example **12 users right now**. It counts people active on your site in the last 30 minutes.

To add today, tick **Include today**. Today is not over yet, so it shows as a dotted line in **Trend**.

To fetch the numbers again, click **Refresh**. To see the same property in Google Analytics, click **Open in Google Analytics**.

If the tab reads **No visits in this period**, choose a longer range. If your site has visitors, check that the Google Analytics tag is on every page.

!!! note "Dates are in the property's time zone"
    Google Analytics counts each day in the time zone set on the property. Ohanvi shows the same dates as Google Analytics, so the totals match. The line under the dashboard reads **Dates in** followed by the time zone, **as Google Analytics reports them. The last two days can still change.**

!!! note "Recent days can still change"
    A day's numbers take about 12 hours to arrive, and longer on large properties. Google then keeps updating them: totals can change for 2 days, and key events can move for up to 12 days. Ohanvi reads the last 14 days again every day, so its numbers catch up with Google's.

### Read the Acquisition tab

1. Open the **Acquisition** tab. The **Acquisition**, **Pages** and **Conversions** tabs load the first time you open them.
2. Read **Channels**. It lists the channels that bring visitors, such as search, social, ads, email, direct and other sites. **Share** shows each channel's share of sessions.
3. Choose a view:
    - **Top**: the channels that brought the most sessions.
    - **Losing**: the channels that brought fewer sessions than the previous period, biggest drop first. It compares with the previous period even when **Compare** is **Off**.
4. Read **Source / medium** for the exact site or campaign behind each visit.

Each table shows **Sessions**, **Users**, **Engagement** and **Key events**, and **Revenue** when the site records it. With a comparison, **Change** shows the change in sessions. It reads **New** for a row the comparison period did not have.

One person can arrive by two channels, so users per channel do not add up to the **Users** tile. Sessions, key events and revenue do add up.

### Read the Pages tab

1. Open the **Pages** tab.
2. Read **Landing pages**: the first page of each visit, and which of them lead to key events. Use it to see which pages turn visitors into buyers or leads.
3. Read **All pages** to see how often each page was viewed, under **Views**.

On a small screen, scroll the table sideways to see every column.

### Read the Conversions tab

1. Open the **Conversions** tab.
2. Read **Key events**: purchases, sign-ups, form submissions and the other events marked as key events. Each shows its **Count**, its **Change** against the comparison period and, when it has one, its **Value**.

Under each key event, **Counted once per session** or **Counted every time** shows how Google Analytics counts it.

The tab reads **No key events set up** when the property has none. Click **Open Google Analytics**, mark an event as a key event there, then come back.

### Unlink a property

1. On the **Google Analytics** card, click **Open**.
2. Under **Linked properties**, click **Unlink** next to the property. It is the icon beside **Open dashboard**.
3. In the **Unlink** window that names the property, click **Unlink**.

The dashboard stops showing the property. Daily totals Ohanvi already saved are kept and come back if you link the property again. Nothing changes in Google Analytics.

### Disconnect Google Analytics

1. On the **Google Analytics** card, click **Disconnect**.
2. In **Disconnect Google Analytics?**, click **Disconnect**. The account's other Google services keep working.
3. To use it again, click **Connect Google Analytics** on its card.

## Ask the AI assistant about your website

Ohanvi's AI agents can read your linked properties too. When you set up an agent, the Google Analytics tools are listed under **ANALYTICS**: **Analytics properties**, **Website traffic**, **Top traffic sources and pages** and **Why website traffic changed**. Turn them on, then ask in plain words, for example:

- "Why did my visitors drop last week?" The agent compares two periods. It finds the channels, landing pages and devices that moved most, and tells you whether you lost visitors or the visitors you had converted less.
- "Which channel brings the most sales?"
- "Which pages convert best?"
- "Is my tracking working?" The agent looks for a day with no sessions at all, or a property with no web stream.

The agent only reads. It cannot link properties or change anything in Google Analytics.

## Get a weekly summary or an alert

A flow can send you a weekly website report on WhatsApp or email, or start when visits drop, conversions drop or tracking goes silent. See [Send a weekly Analytics summary](../whatsapp/flow-google-workspace-steps.md#send-a-weekly-analytics-summary) and [Start a flow when visitors or conversions drop](../whatsapp/flow-google-workspace-steps.md#start-a-flow-when-visitors-or-conversions-drop).

## Compare Analytics revenue with your store

If you connected a Shopify, Wix or WooCommerce store, Ohanvi matches it to the property whose web stream has the store's address. **Store analytics** then compares the revenue Google Analytics recorded with your store's own orders, and shows the difference as **Tracking gap**. See [See your store in Google Analytics](connect-your-store.md#see-your-store-in-google-analytics).

## See search visitors on your site

The **Overview** tab of the Search Console dashboard has an **On your site** card. Once a property is linked, **From search to your site** follows people from Google Search to your site: impressions, clicks, organic sessions and key events. See [Compare organic, paid and local](connect-google-search-console.md#compare-organic-paid-and-local).

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **No Google Analytics properties** | The Google account has no Google Analytics 4 property. The message reads **No Google Analytics 4 properties on** your account **. Create one at analytics.google.com, or connect the Google account that has access to it.** | Click **Open Google Analytics** and create one, or connect the Google account that has access to it. |
| Linking says the property **is not in Google Analytics for** your account | The Google account can no longer see that property. | Check the property, or connect the Google account that has access to it. |
| **Ohanvi lost access to this property**, or a property reads **Lost access** | The Google account was removed from the property, or the property was deleted. The message reads **Google Analytics no longer gives** your account **access to this property.** | Ask the property's owner to add the account again with **Viewer** access, or link the property through another Google account. |
| **Google Analytics is busy** (**Google Analytics is busy for this property, try again in a few minutes.**) or **Showing saved numbers** | Google limits how much each property can be read per hour, and other tools share that limit. Ohanvi shows the last numbers it fetched when it has them. | Click **Refresh** in about 15 minutes. |
| **Google hid some rows to protect privacy** | **Small numbers are withheld when Google signals is on, so some rows are missing. Totals still show.** | Choose a longer range. |
| **Numbers are estimated** | **Google sampled this report because of its size. Totals are close, but not exact.** | Choose a shorter range for exact numbers. |
| **No visits in this period** | The site had no visits in these dates, or the tag is missing. | Choose a longer range. Check that the Google Analytics tag is installed on every page. |
| **No key events set up** | The property has no key events. | Click **Open Google Analytics** and mark an event as a key event. |
| The **Revenue** tile is missing | The site does not send e-commerce data to Google Analytics. | Set up e-commerce tracking on your site. |
| Analytics revenue does not match your store | Ad blockers and cookie consent stop some purchases from reaching Google Analytics. | Read **Tracking gap** in **Store analytics**. A gap under 5% is normal. |
| Yesterday's numbers look low, or changed | Google is still adding that day's data. | Check again tomorrow. See [Recent days can still change](#read-the-overview-tab). |
| Numbers differ from Google Analytics | The dates differ, or Google updated recent days. | Compare the same dates in the property's time zone. |
| Google shows a warning that it has not verified the app | Google is still reviewing Ohanvi's access to Analytics. | Open the advanced option on the warning and continue to Ohanvi. |
| A property reads **Account needs attention** | The Google account it reads through needs permission, a reconnect, or was disconnected. | Open the dashboard and follow its message, or fix the account on its **Google Analytics** card. |
| A card reads **Needs permission**, or the dashboard reads **Analytics access not granted** | The Google account has not allowed Google Analytics yet. | Click **Grant Analytics access** on the **Google Analytics** card. |
| A card reads **Reconnect needed**, or the dashboard reads **Reconnect Google** | Google access was revoked or expired. | Click **Reconnect** and sign in again. Saved daily totals are kept. |
| The dashboard reads **Google account disconnected** | The Google account was disconnected. | Click **Go to Google Workspace** and reconnect it. |
| A card reads **Not enabled on server**, or the dashboard reads **Google Analytics is switched off** | Google Analytics is switched off for your workspace. | Contact Ohanvi support. |
| **The Google Analytics API is not enabled on this app's Google Cloud project.** | The server is not set up for Google Analytics yet. | Contact Ohanvi support. |

## Related

- [Connect Google Workspace](connect-google-workspace.md)
- [Connect Google Search Console](connect-google-search-console.md)
- [Send a weekly Analytics summary or start a flow when visitors drop](../whatsapp/flow-google-workspace-steps.md#send-a-weekly-analytics-summary)
- [Connect your online store](connect-your-store.md)
- [Integrations](integrations/index.md)
