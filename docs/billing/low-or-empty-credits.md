---
title: When credits run low or run out
description: Learn how Ohanvi warns you when credits run low, which sends stop when your balance is empty, and how to get them going again after a recharge.
---

# When credits run low or run out

Ohanvi warns you before your credits run out, and stops paid actions once they do. This page shows you each warning, what stops at ₹0, and how to restart anything that was held back after you recharge.

## Before you start

- You know how credits work. See [Credits and billing in Ohanvi](../credits-and-billing.md).
- You know how to recharge. See [Add funds to your account](../add-funds.md).

## How Ohanvi decides "low" and "empty"

- **Empty** means your spendable balance is ₹0 or less. Expired credits do not count. Credits expire 1 year after they are added.
- **Low** means your balance will not last to the end of this month at your current daily spend. With no spend yet this month, only an empty balance counts as low.
- During a free trial, an empty balance does not stop anything.

## Steps

### Spot a low balance

Check these places:

1. **Credits box, top right.** The amount turns red when your balance is under ₹100. Hover over it to see **Credits low — recharge**.
2. **Credits page.** Under **Credit balance** you see **running low — recharge soon**, and the **This cycle** card shows a **Low** badge instead of **Healthy**.
3. **Current usage page.** The **Cost this cycle** card shows **Short by** and a **Recharge credits** button. See [Read your current usage](read-current-usage.md).
4. **Email.** Once you have recharged at least once, Ohanvi emails your billing address when your balance drops below ₹100 [VERIFY: threshold on live]. The subject reads **Your Ohanvi wallet is running low (₹[amount])**. You get 1 email per low spell, not one every day.

!!! tip "Credits about to expire"
    If some credits expire soon, the **Credits** page shows **₹[amount] of credits expire on [date]**. Unused credits are removed on that date. Use them or plan your next recharge around it.

### Send a WhatsApp broadcast or campaign with low or no credits

Before a WhatsApp broadcast, campaign or test message goes out, Ohanvi checks your balance.

1. If your balance is low, the **Your credits are running low** window opens and shows your **Balance**.
    - Click **Send anyway** if you know the balance covers this send.
    - Click **Recharge credits** to top up first. The **Recharge credits** page opens.
2. If your balance is empty, the **Your credits are empty** window opens. The send is blocked.
    - Click **Recharge credits** to top up, then send again.
    - Click **Cancel** to go back.

!!! warning "Recharge before a big campaign"
    If the balance runs out partway through a send, the messages after that point fail. Recharge first when **Short by** or **Low** shows.

### What stops when your credits are empty

| Action | What happens at ₹0 | After you recharge |
| --- | --- | --- |
| WhatsApp template messages (broadcasts, campaigns, automations and reminders) | Each send is refused with **Your wallet is empty. Add the minimum top-up on the Wallet screen (Billing → Wallet → Add funds) before sending messages — our fee is charged from this balance.** Your agents' replies inside an open chat are not blocked. | Send the message or campaign again. |
| AI replies on WhatsApp | The AI agent stops replying. Conversations get no AI answer. An AI agent test shows **Your wallet balance is zero. Test replies use the same AI provider as live replies, so add balance to the wallet and try again.** | AI replies resume on the next incoming message. |
| Email campaigns sent through Ohanvi's email sender | Approving the campaign is refused with **Your wallet balance is empty. Please add money to your wallet before sending an email campaign.** A campaign already sending pauses; the recipients not yet reached stay queued. | Retry the campaign. It continues where it stopped, and nobody gets it twice. |
| Social posts | The post fails with **Your wallet balance is empty. Add money to your wallet, then retry this post.** | Open the post and retry it. |
| Email campaigns sent through your own email provider | Not blocked by Ohanvi's credits. | — |

!!! note
    The app now calls your balance **Credits**. Some older messages still say "wallet". They mean the same balance.

### Recharge and resume

1. Click **Recharge** beside the **Credits** box, or **Recharge credits** in any of the windows above.
2. Complete the recharge. See [Add funds to your account](../add-funds.md).
3. Wait for the new balance to show on the **Credits** page. If you paid but the balance has not changed, the page shows **A recharge has not completed yet**. Do not pay again.
4. Send, retry or approve what was held back, as shown in the table above.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Your credits are empty** when you try to send a broadcast | Your spendable balance is ₹0 or less, or your remaining credits have expired. | Recharge, then send again. |
| **Free message limit reached for this month. Upgrade your plan to send more messages.** | Your plan's free message allowance for the month is used up. This is a plan limit, not a credits problem. | Change to a plan with more messages. See [Manage your plan and users](manage-plan-and-users.md). |
| Balance shows **₹0** but you recharged a few minutes ago | Razorpay has not confirmed the payment yet. | Wait a few minutes and refresh the **Credits** page. The page shows **A recharge has not completed yet** meanwhile. |
| Credits box shows **—** instead of an amount | The balance could not be read. This is not the same as ₹0. | Refresh the page. Sends are not blocked just because the balance failed to load. |
| The AI agent stopped answering customers | Your credits are empty, so AI replies are paused. | Recharge. AI replies resume on the next message. |
| You never got the low-balance email | You have not recharged yet, you are on a free trial, or the email already went out for this low spell. | Watch the **Credits** box and the **Credits** page instead. |

## Related

- [Add funds to your account](../add-funds.md)
- [Credits and billing in Ohanvi](../credits-and-billing.md)
- [Read your current usage](read-current-usage.md)
- [Manage your plan and users](manage-plan-and-users.md)

!!! note "Screenshots to add"
    - After "Spot a low balance" step 1 — the red **Credits** box with the **Credits low — recharge** tooltip.
    - After "Spot a low balance" step 2 — the **Credit balance** tile showing **running low — recharge soon**.
    - After "Send a WhatsApp broadcast" step 1 — the **Your credits are running low** window.
    - After "Send a WhatsApp broadcast" step 2 — the **Your credits are empty** window.
