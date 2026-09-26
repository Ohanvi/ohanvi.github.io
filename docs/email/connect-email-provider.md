---
title: Connect your own email provider
description: Send campaign and transactional email through your own SMTP server, SendGrid, Mailgun or Postmark instead of Ohanvi's shared default sender.
---

# Connect your own email provider

Connect your own SMTP relay, SendGrid, Mailgun or Postmark account so your emails leave through it. At the end, the provider's card shows **Active**, and campaigns and transactional emails send through it instead of Ohanvi's shared default sender.

## Before you start

- You do not need this page to send email. With nothing connected, every send uses Ohanvi's shared default sender (Amazon SES).
- You have your provider's details: SMTP host, port, username and password, or an API key. For Mailgun you also need your sending domain.
- You can see **Connect** in the left rail with **Email Provider** in its panel, or **Email Sending Server** in the **Email** panel. Both open the same screen. If you see neither, ask your admin for access.

## Steps

### Open the Email Provider screen

1. Open **Connect** in the left rail, then select **Email Provider**. You can also open **Email** and select **Email Sending Server**.
2. The **Email Provider** screen shows 1 card each for **SMTP**, **SendGrid**, **Mailgun** and **Postmark**. A card you have not set up reads **not connected** with a **Set up** chip.

### Connect an SMTP server

1. On the **SMTP** card, click **Connect**. The **Connect SMTP** dialog opens.
2. Optional: in **Name (optional)**, type a name you will recognise.
3. In **SMTP Host \***, type your server's host name.
4. In **Port \***, type the port your provider gives you.
5. In **Username** and **Password**, type your SMTP login.
6. Turn **Auth**, **STARTTLS** or **SSL** on or off to match your provider's settings.
7. Click **Test connection**. Wait for **Connected successfully.**
8. Leave **Use for sending once saved** ticked if this provider should send from now on.
9. Click **Connect**. The card shows **Connected**, or **Active** when it is the sender.

### Connect SendGrid, Mailgun or Postmark

1. On the provider's card, click **Connect**.
2. In **API Key \***, paste the API key from your provider's dashboard.
3. For Mailgun only: in **Sending Domain \***, type your Mailgun domain, and choose **US** or **EU** in **Region**.
4. Optional: fill in **API Base URL Override (optional)** only if your provider told you to use a different address.
5. Click **Test connection**, then click **Connect**.

### Switch, edit or remove a provider

- To make a connected provider the sender, click **Set active** on its card. Only 1 provider is active at a time. The message **… is now sending email.** appears.
- To change details, click **Configure**. Leave **Password (leave blank to keep)** or **API Key (leave blank to keep)** empty to keep the saved secret. Click **Save changes**.
- To remove a provider, click **Disconnect**, then click **Disconnect** again in the dialog.

!!! note
    You cannot change the provider type of a saved connection. Disconnect it and connect the other provider instead.

### What changes when your own provider sends

- Your sender address still comes from **Sender Identities**. See [Set up a sender address and verify your domain](set-up-sender-identity.md).
- The DNS records on **Sender Identities** authenticate your domain for Ohanvi's default sender. When your own provider sends, also add the SPF and DKIM records your provider gives you.
- Emails still use credits. With your own provider, each email is charged when it is sent, because your provider does not report delivery back to Ohanvi. See [Credits and billing](../credits-and-billing.md).
- Opens, clicks and unsubscribes are still tracked. **Delivered**, bounce and complaint figures come from Ohanvi's default sender only [VERIFY: own-provider delivery tracking].

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Could not connect — check the details and try again.** | The host, port, login or API key is wrong, or the TLS setting does not match the port. | Check each value against your provider's settings page, then click **Test connection** again. |
| **SMTP username is required when auth is enabled.** | **Auth** is on but **Username** is empty. | Type the username, or turn **Auth** off if your relay does not need a login. |
| **Mailgun sending domain is required.** | **Sending Domain \*** is empty. | Type the domain you set up in Mailgun. |
| Emails stop after you disconnect | — | Nothing is lost. Disconnecting the active provider falls back to Ohanvi's default sender automatically. |

## Related

- [Set up a sender address and verify your domain](set-up-sender-identity.md)
- [Send an email campaign](send-email-campaign.md)
- [Credits and billing](../credits-and-billing.md)

!!! note "Screenshots to add"
    - After step 2 of "Open the Email Provider screen" — the 4 provider cards
    - After step 7 of "Connect an SMTP server" — the dialog with **Connected successfully.**
    - After step 9 — the SMTP card showing **Active**
