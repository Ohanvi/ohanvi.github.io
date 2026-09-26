---
title: Collect signups with signup and popup forms
description: Build a signup form or a website popup that adds new subscribers straight to an email list, with optional double opt-in.
---

# Collect signups with signup and popup forms

Build a form that visitors fill in to join your email list: an embedded or hosted signup form, or a popup on your website. At the end, every new signup lands in the list you chose, and can start a welcome journey on its own.

## Before you start

- You have a list for new subscribers. See [Add email contacts, lists and segments](manage-email-contacts.md).
- For double opt-in, you have a confirmation email template. See [Create an email template](create-email-template.md).
- You can edit your website, or you can send a code snippet to the person who does.

!!! note "Where to find these screens"
    **Signup Forms** and **Popup Forms** are not in the **Email** panel by default [VERIFY: how users reach Signup Forms and Popup Forms]. If you cannot find them, ask your admin.

## Steps

### Build a signup form

1. Open **Signup Forms**. The **Signup forms** screen opens.
2. Click **Create signup form**. The **Build a signup form** page opens.
3. Give the form a name your team will recognise.
4. Under **Form Type**, choose **Embedded**, **Pop-up**, **Fullscreen** or **Landing Page**.
5. Choose the fields visitors fill in, such as **Email Address**, **First Name**, **Last Name**, **Phone Number** or **Company**.
6. Choose the **Target List** where new signups land.
7. Optional: turn on **Double Opt-in** and choose a **Confirmation Email Template**. New signups stay **Pending Confirmation** until they click the confirmation email, and are not sent campaigns until then.
8. Optional: type a **Redirect URL after signup (optional)**. Leave it blank to show a default "Thanks for subscribing" message.
9. Optional: set **Branding**, **Localization** and **Enable Bot Protection**.
10. Click **Create signup form**.

### Put the signup form on your site

After the form is saved, the preview area offers 3 ways to use it:

- **Copy Embed Code** — paste the code into a page on your website.
- **Copy Hosted Page URL** — share a signup page Ohanvi hosts for you. Use this for **Landing Page** forms.
- **Copy Endpoint URL** — send signups from your own form to Ohanvi.

### Create a popup form

1. Open **Popup Forms**, then click **Create popup form**.
2. Under **What are you offering?**, pick the incentive for the popup.
3. Under **Choose a template**, click a design, then click **Use this template**.
4. In **Popup name**, type a name. In **Audience**, choose the list new subscribers join.
5. Under **What should it collect?**, choose **Email address**, and optionally **Phone number (optional)**.
6. Click **Create form**. The popup editor opens.
7. Edit the text, colours, **THANK-YOU MESSAGE** and **REWARD CODE**, for example `WELCOME10`. Click **Save and close**.

### Publish the popup on your site

1. Open the popup. Under **Where should it show?**, type your site address in **YOUR SITE**, for example `https://www.example.com`.
2. Choose **All pages** or **Specific pages**. For specific pages, fill **SHOW ON PAGES CONTAINING** and **NEVER SHOW ON PAGES CONTAINING**. Click **Save site settings**.
3. Under **INSTALL SNIPPET**, copy the snippet and paste it before `</head>` on your site.
4. Under **Who should see it?**, choose **All visitors**, **New visitors only** or **Returning subscribers only**.
5. Click **Publish or schedule**. The popup shows **Showing on your site now.** once it is live.

The **Performance** section shows **Impressions**, **Subscribers** and **Conversion**. To stop the popup, click **Pause**.

### Start a welcome email automatically

To greet each new subscriber, build a journey with the **Signs up for email** starting point on the same list. See [Automate emails with journeys](create-email-automation.md).

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| No **Copy Embed Code** button | The form has not been saved yet. | Click **Create signup form** first. |
| **Enter a valid http(s) URL, or leave blank** | The redirect address does not start with `http://` or `https://`. | Type the full address, or leave it blank. |
| New signups do not get campaigns | **Double Opt-in** is on and they have not confirmed. | Wait for them to click the confirmation email. |
| **No impressions yet — add your site address below to get started.** | No site address is saved, or the snippet is not installed. | Fill in **YOUR SITE**, install the snippet, then publish. |
| **You need an audience list before a popup can collect contacts.** | No list exists. | Create a list in **Lists**, then come back. |

## Related

- [Add email contacts, lists and segments](manage-email-contacts.md)
- [Automate emails with journeys](create-email-automation.md)
- [Email overview](../email/index.md)

!!! note "Screenshots to add"
    - After step 7 of "Build a signup form" — the **Double Opt-in** section
    - After "Put the signup form on your site" — the preview with the 3 copy buttons
    - After step 3 of "Publish the popup" — the **INSTALL SNIPPET** box
