---
title: Look up orders and bookings in a chatbot
description: Add store action blocks and Pick lists to a chatbot so customers can check, cancel or reorder an order, pay by link, and book an appointment.
---

# Look up orders and bookings in a chatbot

Store actions let the bot do real work inside a chat. A customer can check an order, cancel it, reorder it, confirm the address, switch Cash on Delivery to a payment link, or book an appointment. Each block has ready-made exits, and some give you a variable to show in a message. Follow this page to add and wire them.

## Before you start

- You opened a flow in the builder. See [Understand the flow builder](understand-the-flow-builder.md).
- For order blocks, your store is connected. See [Automate store messages with flows](../flows/store-journeys.md).
- For **Book appointment**, you added services and booking rules. See [Take bookings on WhatsApp](../appointments/take-bookings-on-whatsapp.md).
- You know how to add a message block. See [Text and list blocks](chatbot-text-and-list-blocks.md).

## What each block does

### Store actions

Find these under **All steps** → **Store actions**. Each one shows its **Outcomes** as chips on the card. Wire each outcome to a step.

| Block | What it does | Outcomes | Variable it gives you |
| --- | --- | --- | --- |
| **Order status** | Finds the order in your store. | `found`, `not_found` | `{{order_status_message}}` |
| **Cancel order** | Cancels the order on your store when it still can be. | `cancelled`, `not_cancellable`, `not_found` | None |
| **Reorder** | Rebuilds the last order as a pre-filled checkout link. | `ready`, `no_orders` | `{{reorder_url}}` |
| **Confirm address** | Looks up the delivery address. | `found`, `not_found` | `{{shipping_address}}` |
| **COD check** | Checks whether the order is Cash on Delivery. | `cod`, `not_cod` | None |
| **COD to prepaid** | Creates a payment link for the COD order. | `link_ready`, `no_payment`, `not_found` | `{{payment_url}}` |
| **Book appointment** | Books the chosen service, date and slot. | `confirmed`, `requested`, `slot_taken`, `rejected_show_slots` | None |

### Pick lists

A **Pick** block shows the customer a live list and saves the choice. Find them under **All steps** → **Advanced**.

| Block | What the customer picks | Saved as |
| --- | --- | --- |
| **Pick a recent order** | One of their recent orders. | `order_number` |
| **Pick an open order** | One of their orders that is still open. | `order_number` |
| **Pick a service** | A service that can be booked. | `service_id` |
| **Pick a date** | A day with free slots. | `date` |
| **Pick a time slot** | A free slot on the chosen day. | `slot` |
| **Pick my appointment** | One of their upcoming appointments. | `appointment_id` |
| **Pick a new slot** | A free slot to move an appointment to. | `slot` |
| **Pick a social account** | One of your connected social accounts. | `selected_social_account` |
| **Pick a niche** | A content niche for a post. | `social_niche` |
| **Pick a trend** | A trending topic for a post. | `social_trend` |

!!! warning "Do not rename the saved name"
    Each **Pick** block saves its answer under the name in the last column. The matching store action reads that exact name. If you change it, the action stops working.

## Steps

### Add a store action

1. Click the **+** after the step where the action should run. The **Add a step after** menu opens.
2. Click **All steps**.
3. Under **Store actions**, click the block, for example **Order status**.
4. Click the block on the canvas. The **Step** panel shows its name, what it does, and the list **Outcomes**.
5. Click the **+** at each outcome and add the step that follows it.

You do not type anything into a store action. The block arrives ready to use. [VERIFY: how each action finds the customer's order, for example from the saved order_number]

### Let the customer check an order

1. Add a **Text** block that asks the customer to choose an order, for example `Which order do you mean?`.
2. Add a **Pick a recent order** block. The panel reads **Saves the reply as order_number**.
3. Add an **Order status** block.
4. Wire the outcome `found` to a **Text** block. Type `{{order_status_message}}` in the message.
5. Wire the outcome `not_found` to a **Text** block, for example `We could not find that order.`

### Cancel an order

1. Add **Pick an open order** so the customer picks an order that can still change.
2. Add a **Cancel order** block.
3. Wire `cancelled` to a message, for example `Your order is cancelled.`
4. Wire `not_cancellable` to a message, for example `This order has already shipped.`
5. Wire `not_found` to a message that offers help from a person. See [Action blocks](chatbot-action-blocks.md).

### Reorder the last order

1. Add a **Reorder** block.
2. Wire `ready` to a **Text** block. Type `Reorder here: {{reorder_url}}`.
3. Wire `no_orders` to a message, for example `You have no past orders yet.`

### Confirm the delivery address

1. Add a **Confirm address** block.
2. Wire `found` to a **Text** block. Type `We will deliver to: {{shipping_address}}`.
3. Wire `not_found` to **Ask address** to collect a new one. See [Ask for name, phone, email and address](chatbot-ask-details-blocks.md).

### Move a Cash on Delivery order to prepaid

1. Add **Pick an open order**.
2. Add a **COD check** block.
3. Wire `cod` to a **COD to prepaid** block. Wire `not_cod` to a message, for example `This order is already paid.`
4. Wire `link_ready` to a **Text** block. Type `Pay here: {{payment_url}}`.
5. Wire `no_payment` and `not_found` to messages that offer help from a person.

### Book an appointment

1. Add **Pick a service**, then **Pick a date**, then **Pick a time slot**. Each one shows a list from your booking settings.
2. Add a **Book appointment** block.
3. Wire `confirmed` to a message, for example `Your appointment is booked.`
4. Wire `requested` to a message, for example `We received your request and will confirm soon.`
5. Wire `slot_taken` and `rejected_show_slots` back to **Pick a time slot**, so the customer chooses again.

### Move or check an existing appointment

1. Add **Pick my appointment** to let the customer choose one of their bookings.
2. Add **Pick a new slot** to show free slots to move it to.

[VERIFY: which block finishes a reschedule after Pick a new slot]

### Check the advanced fields

1. Click a store action, then click **Show JSON**. It opens the engine's own fields.
2. Read **Advanced step · INVOKE_ACTION** or **DYNAMIC_OPTIONS**.
3. Leave the fields as they are, unless your support team asks you to change one.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| The action always goes to `not_found` | The order number was not saved. | Add a **Pick** block before it, or ask for the number with **Ask Question** and save it as `order_number`. |
| A **Pick** list is empty | There are no orders, services or slots to show. | Check your store and your booking settings. |
| `{{order_status_message}}` shows as text | The message was sent before the **Order status** block ran. | Put the message after the `found` outcome. |
| An outcome has no wire | The chat stops there. | Click the **+** at the outcome and add a step. |

## Related

- [Understand the flow builder](understand-the-flow-builder.md)
- [Automate store messages with flows](../flows/store-journeys.md)
- [Action blocks](chatbot-action-blocks.md)
- [Take bookings on WhatsApp](../appointments/take-bookings-on-whatsapp.md)
