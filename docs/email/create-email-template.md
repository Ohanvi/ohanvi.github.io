---
title: Create an email template
description: Design a reusable email with a subject line, preview text and content blocks, add personalization and an unsubscribe link, and get it approved.
---

# Create an email template

Design the email you will send: a subject line, preview text and the body, built from blocks or your own HTML. At the end, the template is saved in **My Library**, approved, and ready to pick in a campaign or an automation.

## Before you start

- You can see **Email** in the left rail with **Email Templates** in its panel. If not, ask your admin for access.
- Have your logo and images online. Image blocks take an image URL.

## Steps

### Start a new email

1. Open **Email** in the left rail, then select **Email Templates**.
2. Click **Create template**. The **Create an email** dialog opens.
3. In **Internal email name**, type a name only your team sees, for example `Newsletter - May`. It holds up to 80 characters.
4. Under **How do you want to design it?**, choose a starting point:
    - **From scratch** — a blank canvas.
    - **Basic layout** — a heading, a message and a button, ready to edit.
    - **Fully designed template** — pick a ready-made design.
    - **Saved templates** — start from one of your own templates.
    - **Recently sent** — reuse an email from a campaign you already sent.
    - **Code your own** — paste or upload your own HTML.
5. The email builder opens.

You can also browse ready-made designs first. Click **Gallery**, filter by **Email purpose**, **Style** or **Industry**, click **Preview** to look, and click **Use** to open a copy in the editor.

### Design the email

1. Under **STYLES**, type a **Subject line**. This is what people see in their inbox.
2. Type the **Preview text**. It shows next to the subject line in most inboxes.
3. From **BLOCKS**, drag blocks onto the email: **Heading**, **Paragraph**, **Button**, **Image**, **Logo**, **Divider**, **Spacer**, **Video**, **Social** or **Code**.
4. Click a block to edit its text, link, colours and spacing.
5. Click **Preview** to check the email on desktop and mobile.

To draft the text for you, click **Write with AI** and fill in **What is this email about?**. If the email already has content, click **Add draft**. The draft replaces the subject and preview text and is added as a new block at the end.

### Personalize and add an unsubscribe link

Merge tags are replaced with each recipient's details when the email is sent:

| Merge tag | Filled with |
| --- | --- |
| `{{firstName}}` | First name |
| `{{lastName}}` | Last name |
| `{{fullName}}` | Full name |
| `{{email}}` | Email address |
| `{{phone}}` | Phone |
| `{{attributes.x}}` | A custom field, where `x` is the field name, for example `{{attributes.company}}` |

Type a tag into the subject or any text block, for example `Hi {{firstName}},`.

!!! warning "Add an unsubscribe link"
    Link some footer text, such as `Unsubscribe`, to `{{unsubscribeUrl}}`. Ohanvi replaces it with a personal unsubscribe link. Without it, inbox providers are more likely to mark your email as spam. Templates opened in the HTML editor show this under **Check Spam Score**.

### Save the template

1. Click **Save and exit**. The template appears in **My Library**.
2. To keep a copy under a new name, click the arrow next to **Save and exit**, then click **Save as a template**.

### Send the template for review

A campaign can send your own template only after it is approved. Ready-made designs in **Gallery** are already approved.

1. On **Email Templates**, click **⋮** (**More actions**) on your template, then click **Send for review**.
2. In **Send for Review**, click **Send for Review**. **Review Status** shows **Pending review**.
3. The reviewer clicks **⋮** → **Review (approve / reject)**, adds **Remarks (optional)**, and clicks **Approve** or **Reject**.

!!! note
    Editing an approved template sets it back to **Draft**. Send it for review again after each change.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **The email "…" has not been approved yet (it is draft). Open it in Email Templates, send it for review and get it approved, then approve this campaign.** | The campaign uses one of your templates that is not approved. | Send the template for review and get it approved, then send the campaign again. |
| **Add template content before sending it for review.** | The template has no body. | Add at least 1 block, save, then send for review. |
| **This account requires a different user to review a template than the one who created it.** | Your workspace requires a second person to approve. | Ask a teammate with review access to approve it. |
| **Leave without saving?** when closing the builder | You have unsaved changes. | Click **Keep editing**, then click **Save and exit**. |
| A merge tag shows as blank in the sent email | The contact has no value for that field. | Fill the field on the contact, or write text that reads well without it. |

## Related

- [Send an email campaign](send-email-campaign.md)
- [Automate emails with journeys](create-email-automation.md)
- [Email overview](../email/index.md)

!!! note "Screenshots to add"
    - After step 4 of "Start a new email" — the **Create an email** dialog with the 6 starting points
    - After step 3 of "Design the email" — the builder with blocks on the canvas and the **STYLES** panel
    - After step 1 of "Send the template for review" — the row menu with **Send for review**
