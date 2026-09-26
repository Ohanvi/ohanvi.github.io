---
title: Set up a sender address and verify your domain
description: Add the From address your emails come from, confirm it with Amazon, and add the SPF, DKIM and DMARC records that authenticate your domain.
---

# Set up a sender address and verify your domain

Add the address your emails come from and confirm it, then authenticate your whole domain in 3 DNS steps. At the end, the address shows **Verified**, the domain reads **Ready to send**, and your campaigns can go out from it.

## Before you start

- You can see **Email** in the left rail. It appears only when your workspace has the Email Marketing module enabled and your role has access to it. If not, ask your admin.
- You can open the inbox of the address you want to send from.
- To verify a domain, you can add DNS records at your domain provider (the company where you bought the domain), or you can forward the records to the person who manages it.

## Steps

### Add a sending address

1. Open **Email** in the left rail, then select **Sender Identities**. The **Sender identities** screen opens on **Sender addresses**.
2. Click **Add sending address**. The **Add Sender Address** dialog opens.
3. In **Email Address**, type the address campaigns will be sent from, for example `marketing@company.com`.
4. Optional: in **Reply To (Optional)**, type the address replies should go to.
5. Optional: in **From Name (Optional)**, type the name people see in their inbox. **How it will look in their inbox** shows a preview as you type.
6. Click **Add Sender Address**. The dialog shows **Sender Address Added**, and the address appears in the list as **Not Verified**.
7. Click **Done**.

### Confirm the address from your inbox

Amazon SES sends a confirmation email to the address you added.

1. Open that inbox and click the link in the email from Amazon.
2. Back in Ohanvi, click the **⋮** (**More actions**) button on the address row, then click **Recheck status with Amazon**. The status changes to **Verified**.

If several addresses are waiting, click **Recheck all** on the notice above the list. It checks every unverified address at once.

!!! note
    Campaigns can only send from a verified address. Until then the screen shows **Your sender address is not verified yet, so campaigns cannot be sent.**

### Make an address the default sender

1. On the address row, click **⋮**, then click **Set as default sender**.
2. In **Set as Default Sender**, click **Set as Default**. Any other default sender is unset.

A campaign with no sender chosen uses the default sender.

### Verify your domain

Authenticate a whole domain once and every address on it can send.

1. On **Sender identities**, click **Sender domains**.
2. Click **Add Domain**. In **Domain**, type your domain without `https://` or a path, for example `example.com`.
3. Click **Add**. The message **Domain added — add the DNS records shown to verify it.** appears, and a card for the domain opens.
4. Click each step on the card to open its records. Each record shows a **Name** and a **Value**, each with a copy icon.
5. At your domain provider, create each record exactly as shown. Use the copy icon instead of retyping.
6. Wait for DNS to update, then click the refresh icon (**Recheck Status**) on the domain card.

The card has 3 steps:

| Step on the card | What it is | Records to add |
| --- | --- | --- |
| **Prove you own this domain** | Domain verification + SPF | 1 **TXT** record named `_amazonses.<your domain>`, and 1 **TXT** record on your domain with `v=spf1 include:amazonses.com ~all` |
| **Sign your emails so they cannot be faked** | DKIM | 3 **CNAME** records named `<token>._domainkey.<your domain>`, pointing to `<token>.dkim.amazonses.com` |
| **Tell inboxes what to do with fakes** | DMARC | 1 **TXT** record named `_dmarc.<your domain>` with `v=DMARC1; p=none; rua=mailto:dmarc@<your domain>` |

The card copies the exact tokens for your domain. Each step shows **Done** or **Not yet**. The top line shows **N of 3 checks passed**, then **Ready to send** when all 3 pass.

!!! tip "Already have an SPF record?"
    A domain can have only 1 SPF record. If your domain already has a `v=spf1` TXT record, add `include:amazonses.com` to it instead of creating a second one.

!!! warning "Do not skip DMARC"
    Gmail and Yahoo have required DMARC from bulk senders since February 2024. Without it, your campaigns can land in spam even when the first 2 steps are done.

### Check reputation and sending limits

1. On the address row, click the eye icon (**View Details**).
2. Read **Deliverability & Reputation** and **Sending Limits & Quota**. **Used In** lists the campaigns, journeys and RSS feeds that use this address.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Your sender address is not verified yet, so campaigns cannot be sent.** | The confirmation link from Amazon has not been clicked. | Click the link in the Amazon email, then click **Recheck all**. |
| No confirmation email arrived | It went to spam, or the send failed. | Check spam. Then click **⋮** → **Resend verification email** on the row. |
| **A sender with email '…' already exists.** | That address is already added. | Use the existing row. |
| **Enter a valid domain, e.g. example.com (no scheme, no path).** | The domain includes `https://`, a path or a slash. | Type only the domain, such as `example.com`. |
| A step stays **Not yet** after adding records | DNS changes can take a while to show up, or a value was retyped with a typo. | Wait, then click **Recheck Status**. Compare each value with the copy icon's text. |

## Related

- [Connect your own email provider](connect-email-provider.md)
- [Send an email campaign](send-email-campaign.md)
- [Email overview](../email/index.md)

!!! note "Screenshots to add"
    - After step 5 of "Add a sending address" — the **Add Sender Address** dialog with the inbox preview
    - After step 2 of "Confirm the address" — the row menu with **Recheck status with Amazon**
    - After step 4 of "Verify your domain" — a domain card with all 3 steps and their records open
    - After step 6 of "Verify your domain" — the card showing **Ready to send**
