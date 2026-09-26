---
title: Manage your plan and users
description: See your current Ohanvi plan and user count, switch to another plan, undo a pending change, cancel, and understand trial, grace and expiry.
---

# Manage your plan and users

Use the **Billing** page to see which plan your workspace is on and how many users it allows, then change or cancel it on **Plans & Pricing**. You will also know what each plan status means and what happens when a plan payment is overdue.

## Before you start

- You are signed in to Ohanvi. See [Sign in to Ohanvi](../sign-in.md).
- You are an admin of your workspace. Only your workspace's own admin sees **Billing** and **Plans & Pricing**. Other users see no plan pages.
- Your workspace is not billed through Shopify. If you installed Ohanvi from the Shopify App Store, you manage your plan in Shopify instead. See the Troubleshooting table.
- To claim GST on the plan invoice, your GSTIN is saved first. See [Add your GSTIN and invoice details](add-gst-invoice-details.md).

## Steps

### See your current plan

1. Click the **Credits** box in the top-right corner, then click **All invoices →** in the **Invoices** card. The **Billing** page opens on the **Ohanvi** tab.
    - You can also open **Settings**, select **Organization**, then **Billing** under **Billing & credits** [VERIFY: Settings → Organization → Billing path].
2. Read the plan card at the top:

    | Field | What it tells you |
    | --- | --- |
    | Plan name and status badge | Your plan, for example **Pay as you go** [VERIFY: plan name], and whether it is on trial, active or overdue. |
    | **Billed monthly** | How often the plan is billed. |
    | **Users** | Active users against the plan's limit, for example **4 of 5**. |
    | **Cycle** | The billing period, for example **Monthly**. |
    | **Renews on** / **Ends on** | When the current period ends. A Pay as you go plan shows **Does not expire**. |

3. Below it, the **Payment** section shows **Ohanvi credits**: **Plan fees and message usage both come off this balance**. Click **Open credits** to see the balance.

The **Meta Billing** tab beside **Ohanvi** shows what you pay Meta for WhatsApp.

### Change your plan

1. On the **Billing** page, click **Change plan**. The **Plans & Pricing** page opens with **Pick the plan that’s right for you**.
2. Compare the plan cards. Click **Switch to this plan** on the one you want. New subscribers see **Choose this plan** or the plan's own button.
3. If the new plan allows fewer users than you have, the **Downgrade plan?** window opens. It says how many users will be deactivated at your next renewal. Click **Continue** to go ahead, or **Cancel**.
4. On the review step, **Complete your subscription**, check the **Order summary**.
    - Type a coupon in **Coupon code** and click **Apply** if you have one.
    - Any credits you have are applied automatically. You see **You have ₹[amount] in credits credit — it will be applied to this purchase automatically.**
    - Check **Billing email**. Invoices and receipts are sent here.
5. Click the button at the bottom. It reads **Pay ₹[amount] securely**, **Confirm switch**, or **Confirm — nothing to pay** when your credits cover it all.
6. If a payment is due, complete it in the Razorpay window. When it succeeds, **You’re all set! 🎉** appears. Click **View my plan** to go back to **Billing**.

!!! info "When a change takes effect"
    An upgrade applies straight away and is prorated for the rest of the period. A downgrade starts at your next renewal, so you keep your current plan until then.

### Undo a pending plan change

A plan you picked but that is not active yet shows under the plan card as **Moving to [plan] at the next renewal.** or **Switching to [plan] once the invoice below is paid.**

1. Click **Keep [current plan]**. The **Keep [current plan]?** window opens.
2. Click **Keep [current plan]** to confirm. You stay on your current plan. An unpaid invoice for the switch is voided and nothing is charged.

### Cancel your subscription

!!! warning "Cancelling ends your plan immediately"
    **This immediately ends your subscription. This cannot be undone.** Your credits balance stays yours, and message usage keeps drawing from it.

1. On the **Billing** page, scroll to **Cancel subscription** at the bottom.
2. Click **Cancel plan**. The **Cancel subscription?** window opens.
3. Click **Cancel subscription** to confirm. **Subscription cancelled.** appears.

### Plan statuses and what they mean

| Status | What you see | What you can do |
| --- | --- | --- |
| Trial | In the last days, a banner **[n] days left in your free trial — pick a plan to keep every module.** Nothing is charged automatically during the trial. | Click **View plans** and pick a plan. |
| Active | No banner. | Use every module in your plan. |
| Grace (payment overdue) | A banner **Your payment is overdue. Access ends in [n] days — renew to stay active.** You keep full access for the grace period of [LIMIT] days, and get a reminder email every 3 days. | Click **Renew now**, or pay the open invoice under **Invoices**. |
| Expired or cancelled | A banner **Your subscription has ended. Choose a plan to restore access to your modules.** Actions in paid modules are refused with **No active licence for your organisation — contact your administrator to renew.** | Click **Choose a plan**. |

Your credits are separate from your plan. An expired plan does not remove your credits, and topping up credits does not renew a plan.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Module '[name]' is not included in your organisation's plan.** | Your plan does not include that module. | Change to a plan that includes it, or pick the module when building your plan. |
| **You don't have a seat for '[name]' — ask your administrator to assign one.** | Your workspace licenses users one by one, and you have no seat for that module. | Ask your workspace admin to assign you a seat. |
| **Free message limit reached for this month. Upgrade your plan to send more messages.** | Your plan's free WhatsApp messages for the month are used up. | Change to a plan with more messages. |
| **No active subscription** on the **Billing** page | Your workspace has no plan yet. | Click **Change plan** and choose one on **Plans & Pricing**. |
| **Your plan is managed in Shopify** | You installed Ohanvi from the Shopify App Store. | Click **Manage plan in Shopify**. Your message usage still comes off your Ohanvi credits. |
| Payment window shows **Your payment did not go through. You can try again.** | The card or UPI payment failed or was cancelled. | Click **Retry payment**. If money left your account, click **I have already paid** and wait. |

## Related

- [Export your statement and view invoices](statement-and-invoices.md)
- [When credits run low or run out](low-or-empty-credits.md)
- [Credits and billing in Ohanvi](../credits-and-billing.md)
- [Settings overview (users and roles)](../settings/index.md)

!!! note "Screenshots to add"
    - After "See your current plan" step 2 — the plan card with **Users**, **Cycle** and **Renews on**.
    - After "Change your plan" step 1 — the **Plans & Pricing** plan cards.
    - After "Change your plan" step 4 — the review step with **Order summary** and the credits note.
    - After "Cancel your subscription" step 2 — the **Cancel subscription?** window.
