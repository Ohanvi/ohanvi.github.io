---
title: Set up data for Analytics
description: Get numbers into Marketing Analytics and Store Analytics by sending WhatsApp broadcasts and connecting your Shopify or WooCommerce store.
---

# Set up data for Analytics

Get your **Analytics** screens filled with real numbers. At the end, **Marketing Analytics** shows how your WhatsApp broadcasts performed, and **Store Analytics** shows orders and revenue from your connected Shopify or WooCommerce store, including what WhatsApp added.

## Before you start

- You can see **Analytics** in the left rail. It appears only when your workspace has WhatsApp enabled and your role can open WhatsApp.
- Your WhatsApp number is connected. See [Connect your WhatsApp number](../whatsapp/connect-whatsapp-number.md).
- You have admin rights in your Shopify or WooCommerce store, if you want store numbers.

## Steps

### Check what you can see

1. Open **Analytics** in the left rail. The panel lists the screens your role can open.
2. Look for **Marketing Analytics**. It appears when your role can view WhatsApp broadcasts.
3. Look for **Store Analytics**. It appears when your role can view store integrations.

If an item is missing, ask your admin to add that access to your role. If both are missing, the **Analytics** icon does not appear at all.

### Feed Marketing Analytics

**Marketing Analytics** counts only messages sent through WhatsApp **Campaign** broadcasts. Chats in the **Inbox** do not count.

1. Open **WhatsApp** in the left rail, then select **Campaign**.
2. Send a broadcast to at least one contact.
3. Wait for WhatsApp to report delivery and reads. These updates arrive over the next minutes and hours.
4. Open **Analytics** in the left rail, then select **Marketing Analytics**. Click **Refresh** to load the latest numbers.

### Connect a store for Store Analytics and revenue

1. Open **Connect** in the left rail, then select **Store Connections**.
2. On the Shopify or WooCommerce card, click **Connect store** or **Connect**.
3. Approve access on your store's own screen. When you return, a message confirms the store is connected and that customers and orders are syncing.
4. Wait for the sync to finish. New orders then arrive as soon as your store sends them.
5. Open **Analytics** in the left rail, then select **Store Analytics**. Click **Refresh**.

A store connected here also powers WhatsApp store features. You do not need to connect it again under **WhatsApp** → **Manage** → **Integrations**.

!!! note
    Once a store is connected, **Marketing Analytics** also shows an **Orders** tile and a **What it earned** panel. Orders count toward a broadcast when the buyer ordered within 7 days of receiving it (last-touch attribution).

### Pick a date window

Both screens use preset windows. There is no custom date range.

| Screen | Windows |
| --- | --- |
| **Marketing Analytics** | **7d**, **30d** (default), **90d**, **All** |
| **Store Analytics** | **7d**, **30d** (default), **90d**, **1y**, **All** |

1. Click a window pill at the top right. The screen reloads for that period.
2. Click **Refresh** to reload without changing the window.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Analytics** is not in the left rail | Your workspace does not have WhatsApp enabled, or your role has neither analytics access. | Ask your admin to enable WhatsApp and grant broadcast or store access to your role. |
| **No broadcasts in this window** | No **Campaign** broadcast was sent in the selected period. | Choose a longer window such as **90d** or **All**, or send a broadcast. |
| **No orders in this window** on **Store Analytics** | No store is connected, or it sent no orders in the period. | Connect a store under **Connect** → **Store Connections**, or choose a longer window. |
| **Access was not approved on …, so nothing was connected.** | You declined access on the WooCommerce approval screen. | Click **Connect** again and approve access. |
| Numbers look low right after connecting | Customers and orders are still syncing from your store. | Wait a few minutes, then click **Refresh**. |
| No **Orders** tile on **Marketing Analytics** | No store is connected and enabled. | Connect a store, then click **Refresh**. |

## Related

- [Read Marketing Analytics](read-marketing-analytics.md)
- [Read Store Analytics](read-store-analytics.md)
- [Act on your analytics](act-on-analytics.md)
- [Connect your WhatsApp number](../whatsapp/connect-whatsapp-number.md)

!!! note "Screenshots to add"
    - After Check what you can see, step 1 — the **Analytics** panel with **Marketing Analytics** and **Store Analytics**
    - After Connect a store, step 2 — the **Store Connections** screen with the Shopify and WooCommerce cards
    - After Pick a date window, step 1 — the window pills and **Refresh** button, with **30d** selected
