---
title: Automate store messages with flows
description: Finish and publish the ready-made store automations, such as order confirmation, abandoned checkout recovery and COD verification, or build your own from store events.
---

# Automate store messages with flows

Send WhatsApp messages to shoppers when something happens in your store, such as a new order or an unfinished checkout. At the end, the store automations you want are checked, tested and running on real orders.

## Before you start

- Your Shopify or WooCommerce store is connected in **Connect** → **Store Connections**.
- Your WhatsApp number is connected.
- The WhatsApp templates each automation sends are approved by Meta. Check them in **WhatsApp** → **Template**.
- You can open **Flows** and publish flows. See [Understand flows and the Flows list](flows-overview-and-list.md).

## The ready-made store automations

When you open **Flows**, Ohanvi adds 12 store automations as drafts. They send nothing until you publish them. Each one works for Shopify and WooCommerce stores.

| Automation | What it does |
| --- | --- |
| **Welcome new customer** | Welcomes a shopper the first time they become a store customer. |
| **Browse nudge** | Nudges a shopper about a product they looked at and did not buy. |
| **Order confirmation** | Sends the order confirmation when a new order is placed. |
| **Abandoned checkout recovery** | Messages a shopper 45 minutes after they leave a checkout, then after a day and 2 more days. Stops as soon as they order. |
| **Payment failed** | Tells the shopper their payment did not go through. |
| **Order shipped** | Sends tracking details when the order is fulfilled. |
| **Out for delivery** | Tells the shopper their parcel is out for delivery today. |
| **Delivered confirmation** | Confirms delivery once the carrier reports it. |
| **COD verification** | Asks the shopper to confirm a cash-on-delivery order before dispatch. |
| **Cancellation and refund update** | Tells the shopper their order was cancelled. |
| **Review request** | Asks for a review 3 days after delivery. |
| **Reorder reminder** | Reminds the shopper to reorder a month after delivery. |

**Welcome new customer**, **Browse nudge** and **Reorder reminder** are marketing messages. Send them only to contacts who opted in.

## Steps

### Find the store automations

1. Open **WhatsApp** in the left rail, then select **Flows**.
2. Open the kind drop-down and choose **Automations**.
3. Click the **Draft** pill. The store automations are listed with the other drafts.

If your store or WhatsApp is not connected yet, the row's status reads **Inactive**. Its panel shows a note, such as **Connect WhatsApp to turn these automations on.**, and a **Connect store** or **Connect WhatsApp** button.

### Check and finish an automation

1. Click the automation's row, then click **Open builder**.
2. Click each step and read its **Setup** tab. Check the template name and the values it sends.
3. Fill in any field that is empty. For example, **Review request** needs your review link, and **Welcome new customer** needs your store name.
4. For **COD verification**, check that the condition matches how your checkout names cash on delivery. The draft looks for `Cash on Delivery`.
5. Click **Save**.

### Publish and turn it on

1. Click **Publish** in the top bar.
2. Read the message. **Published and live — new runs use this version.** means it now runs on real orders.
3. Repeat for each automation you want.

You can also publish from the list: click the row, then click **Publish & turn on**.

!!! warning "Live automations message real shoppers"
    From now on, each matching store event sends a WhatsApp message. Messages already sent cannot be taken back.

### Cover refunds as well as cancellations

1. In the list, click **Cancellation and refund update**, open **More** (**…**), and click **Duplicate**.
2. In the copy, click the trigger node and change **Which event** to **A refund is issued**.
3. Change the template to your refund message, then save and publish.

### Build your own store automation

1. Click **New flow**, then **Add first step…**, then **Run by hand**.
2. In **When this runs**, choose **When something happens here**.
3. In **Which event**, choose a store event, for example **A new store order is placed** or **A shopper leaves a checkout unfinished**. The panel shows which store the event comes from.
4. Add an **Action** step and choose **Send a WhatsApp template**. Set **Send to** to the shopper's phone from the trigger, and type the **Template name**.
5. Add a **Wait** or a **Continue only if…** step if you need one. To check that the shopper has not ordered since, add **Check if they ordered recently** before the condition.
6. Save and publish. See [Build an automation flow](build-automation-flow.md).

### Use store actions inside a chatbot

A chatbot can look up orders during a WhatsApp conversation. In the builder, click **All steps** and look under **Store actions**:

- **Order status**, **Cancel order**, **Reorder**, **Confirm address**, **COD check**, **COD to prepaid**, **Book appointment**

Each one has an outcome for each result, such as found or not found, that you wire to the next message. To let the customer pick an order first, add **Pick a recent order** or **Pick an open order** from **Advanced**. For building the chatbot, see [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md).

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Connect WhatsApp before publishing — this flow sends a WhatsApp message and there is no WhatsApp number to send it from.** | WhatsApp is not connected. | Click **Connect WhatsApp** in the flow's panel, connect, then publish. |
| **Connect your store before publishing — nothing raises this flow's trigger until a store is connected.** | No store is connected. | Click **Connect store**, connect Shopify or WooCommerce, then publish. |
| **The template '…' is not approved by Meta yet, so this flow cannot send it. Wait for approval, then publish.** | The template is missing or waiting for Meta. | Create or fix the template in **WhatsApp** → **Template**, wait for approval, then publish. |
| **Out for delivery**, **Delivered confirmation**, **Review request** or **Reorder reminder** never run | Stores do not report carrier milestones. These wait for a shipping integration that sends them. | Use **Order shipped** instead, or connect a shipping integration that reports delivery. |
| COD shoppers do not get the COD message | Your checkout names cash on delivery differently. | Open **COD verification**, change the condition's value to match your checkout, then publish. |
| A deleted store automation does not come back | Archived automations are not created again. | Build it yourself from the store event, or duplicate a similar one. |

## Related

- [Build an automation flow](build-automation-flow.md)
- [Test a flow and fix failed runs](test-and-monitor-flows.md)
- [Understand flows and the Flows list](flows-overview-and-list.md)
- [Read store analytics](../analytics/read-store-analytics.md)

!!! note "Screenshots to add"
    - After step 3 of "Find the store automations" — the list filtered to draft automations, with the store automations.
    - After step 2 of "Check and finish an automation" — the **Abandoned checkout recovery** flow on the canvas.
    - After step 2 of "Publish and turn it on" — the **Published and live** message.
