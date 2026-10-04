---
title: Connect your online store
description: Connect Shopify, WooCommerce, Wix or Zoho Commerce so customers, products and orders sync to Ohanvi and WhatsApp can send order messages.
---

# Connect your online store

Connect your online store once. Its customers, products and orders then sync with your CRM, and WhatsApp uses the same connection for catalog sync and order messages. Shopify, WooCommerce, Wix and Zoho Commerce are supported. Takes about 5 minutes per store.

## Before you start

- You can open **Integrations** in **Settings**.
- You are an admin on your store. WooCommerce asks you to sign in as a WordPress administrator or shop manager.
- For Shopify and WooCommerce: you know your store address, for example `my-store.myshopify.com` or `mystore.com`.
- For a manual connection: you have the keys ready. Each field has a **How do I get this?** help icon in the window.

## How each store connects

| Store | Main way to connect | Manual fallback |
| --- | --- | --- |
| **Shopify** | You install the Ohanvi app from your Shopify admin and approve the access. | **Use credentials** with an Admin API access token. |
| **WooCommerce** | You approve a key request on your own store in one step. | **Enter keys manually** with a key pair. |
| **Wix** | You approve the install on Wix. | None. |
| **Zoho Commerce** | You approve access on Zoho. Your store is found for you. | None. |

## Steps

### Open Store connections

1. Click your initials in the bottom-left corner, then click **Settings**.
2. In the left list, under **Workspace**, select **Integrations**.
3. Under **Connectors**, click **Store Connections**. The page **Store connections** opens.
4. Read the line under the title. It says each store connects once, and WhatsApp picks up the same connection.
5. Find your store's card. It shows **connected** or **not connected**. Click **Refresh** to reload the cards.

### Connect with one-step approval (Shopify, WooCommerce, Wix, Zoho Commerce)

1. On your store's card, click **Connect store**.
2. If a window asks for your store, fill in the field. For Shopify it is the shop domain. For WooCommerce it is the **Store URL**. For Wix it is **Your Wix site name**. For Zoho Commerce it is **Your store name**.
3. Click **Continue to** your store's name, for example **Continue to Shopify**. Your store opens in a new window.
4. Approve the access. For WooCommerce, sign in to WordPress first, then click **Approve**.
5. Return to Ohanvi. The page says **Approve the install in** your store's name **, then refresh this page.** Click **Refresh**.
6. The message **Shopify connected.** (or your store's name) appears, and the card shows **connected**. Orders and products start syncing.

!!! note "No keys to copy"
    With one-step approval your store sends Ohanvi the access it needs. You do not copy any key yourself.

### Connect Shopify by hand with a token

Use this only for a private app set up with an Admin API token.

1. On the Shopify card, click **Use credentials**. The **Connect Shopify** window opens.
2. In **Shop domain**, type your domain, for example `my-store.myshopify.com`.
3. In **Admin API access token**, paste the token. It starts with `shpat_`.
4. In **API key**, paste the key if you have one. It is optional.
5. In **Webhook signing secret**, paste the app API secret key.
6. In **API version**, type a version such as `2024-10` if you need one. It is optional.
7. Click the help icon beside a field to read **How do I get this?** If you filled in the domain, click **Open store settings** to jump to the right page.
8. Click **Save connection**.

Fields without **optional** are required. The window says **Shop domain is required** (or the field's name) if one is empty.

### Connect WooCommerce by hand with keys

1. On the WooCommerce card, click **Enter keys manually**. The **Connect WooCommerce** window opens.
2. In **Store URL**, type your address, for example `mystore.com`. A full https:// link works too.
3. In WordPress admin, go to **WooCommerce → Settings → Advanced → REST API**, and click **Add key**.
4. Set **Permissions** to **Read/Write**, then click **Generate API key**.
5. Copy the **Consumer key** (starts with `ck_`) and the **Consumer secret** (starts with `cs_`). WooCommerce shows them only once.
6. In Ohanvi, paste them into **Consumer key** and **Consumer secret**.
7. Optional: if you use an abandoned-cart plugin, choose it in **Abandoned cart plugin**: `CARTFLOWS`, `ABANDONED_CART_LITE` or `CUSTOM`. For `CUSTOM`, type the plugin's address in **Custom cart REST path**, for example `/wp-json/your-plugin/v1/carts`.
8. Click **Test & connect**. The button says **Testing connection…** while it checks.
9. If the test fails, a message explains why. Fix the value and click **Test again**, or click **Save anyway**.

### Register webhooks

Webhooks let your store push order, customer and product changes to Ohanvi. Shopify, WooCommerce and Zoho Commerce show this button.

1. On a connected card, click **Register webhooks**. The **Register** your store's name **webhooks** window opens.
2. In **Public base URL**, type the public https address your store should call, for example `https://api.yourcompany.com`. It must start with https://. The window says **Public base URL is required** or **Must start with https://** if it does not.
3. Click **Register**. The message **Registered** a number **webhook topics.** appears.

### Switch on WhatsApp automations for the store

1. On a connected card, click **WhatsApp Automations**. The window shows your store's name followed by WhatsApp automations.
2. Turn on the journeys you want:
    - **Welcome message**: a new store customer becomes a WhatsApp contact and gets a welcome.
    - **Cart recovery**: an abandoned cart sends items, a product picture and a resume link.
    - **Order updates**: order placed, paid or cancelled sends a confirmation with details.
    - **Shipment tracking**: shipped, out for delivery or delivered sends a tracking link.
    - **Browse nudge**: a product viewed on your site sends a product message with its picture.
3. In **Nudge cooldown (minutes)**, type how long to wait. Each contact gets at most one cart or browse nudge in this time.
4. Click **Browse snippet** to copy the browse webhook path for your site.
5. Save. The message **WhatsApp automations saved — live from the next store event.** appears.

If you have not connected the store yet, the window says to connect the store first. The WhatsApp link is created when the store is connected.

### Check or change a connected store

1. On the card, read **Status**, **API version** and **Cart capture**.
2. For WooCommerce, read **Connected via** (**One-step approval** or **API keys**), **Webhooks** (**None registered yet** or a number **live**), and **Last event**.
3. If there was a problem, read **Last sync error**. It shows the event, how long ago and the reason.
4. Click **Configure** to change the saved fields. Leave a secret field empty to keep the current value. Click **Test & save** or **Save changes**.

### Disconnect a store

1. On the card, click **Disconnect**.
2. In **Disconnect** your store's name **?**, read what stops. Order, customer and abandoned-cart syncing stop. WhatsApp order messages pause. For Shopify and similar stores, Ohanvi's webhooks are removed.
3. Click **Disconnect**. The message **Shopify disconnected.** (or your store's name) appears.
4. Your saved keys stay, so you can reconnect later in one step.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Connecting Shopify failed.** | The install was not approved or was interrupted. | Try the install again from your Shopify admin, then click **Refresh**. |
| **Access was not approved on** your store **, so nothing was connected.** | You did not click **Approve** on WooCommerce. | Click **Connect store** again and approve. |
| **WooCommerce did not finish connecting** your store. | Your store could not reach Ohanvi (no https or a firewall). | Click **Enter keys manually**. |
| **Could not start the Shopify install.** | The connection request failed. | Check your connection and try again. |
| **Could not register** your store **webhooks.** | The public URL was refused. | Check the **Public base URL** is reachable and starts with https://. |
| The test fails with a message. | A key or address is wrong. | Fix the field and click **Test again**. |
| **Shopify is already connected.** | This store is already linked to your workspace. | Click **Configure** to change it. |
| **Could not disconnect** your store. | The request failed. | Try again. |

## Related

- [Own vs managed services](choose-connectors.md)
- [Connect Zapier](connect-zapier.md)
- [Connect Pabbly](connect-pabbly.md)
- [Set up your WhatsApp catalog](../whatsapp/set-up-whatsapp-catalog.md)
