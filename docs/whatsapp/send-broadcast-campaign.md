---
title: Send a WhatsApp broadcast campaign
description: Pick an audience, choose an approved template, fill its variables, test it, and send a WhatsApp campaign now, later, or on repeat.
---

# Send a WhatsApp broadcast campaign

Send an approved template to one or more contact groups, or to a list you upload. At the end, your campaign is sending or scheduled, you have tested it on your own phone, and its delivery figures fill in on the **Campaigns** page as WhatsApp confirms each message.

## Before you start

- You have at least 1 template with the status **Approved**. See [Create a WhatsApp message template](create-message-template.md).
- You have a contact group with opted-in contacts, or a CSV of phone numbers. See [Manage WhatsApp contacts](manage-whatsapp-contacts.md).
- You have credits. Every WhatsApp message is charged to your credits. See [Credits and billing](../credits-and-billing.md).
- You can see **Campaign** in the **WhatsApp** panel. If not, ask your admin. See [Roles and permissions](../settings/roles-and-permissions.md).

## How credits are charged

- Each message is charged when WhatsApp confirms it was sent or delivered. The rate depends on the template's category and the recipient's country.
- A message that fails is not charged.
- Before a campaign or a test goes out, Ohanvi checks your balance:
    - When the balance is empty, **Your credits are empty** opens and the send is blocked. Click **Recharge credits**, add credits, then send again.
    - When the balance may not last, **Your credits are running low** opens. Click **Send anyway** if you know the balance covers this send, or **Recharge credits**.
- If the balance runs out partway through, the messages after that point fail.

See [Low or empty credits](../billing/low-or-empty-credits.md) for what else stops when credits run out.

## Steps

### Step 1: Pick the audience

1. Open **WhatsApp** in the left rail, then select **Campaign**. The **Campaigns** page opens.
2. Click **New Campaign**. The **New Campaign** page opens on the **Audience** step, with a **Live preview** beside it.
3. Type a **Broadcast name**, for example `Diwali offer 2026`. Only your team sees it.
4. Under **Contact groups**, tick 1 or more groups. Everyone opted in to those groups gets the message once, even if they are in 2 groups. Hover a group to see who is in it.
5. Click **Continue**. The **Message** step opens.

!!! tip "Send to contacts you picked by hand"
    On the **Contact** page, select contacts and click **Send broadcast**. The composer opens with those contacts as the audience, and no contact group is needed.

### Step 2: Choose the template and fill the variables

1. Choose a **Template**. Only Meta-approved templates are listed.
2. If the template has an image, video or document header, check the header file. Leave it as it is to reuse the sample the template was approved with, or pick a new file.
3. Under **Variables**, fill a **Value for {{1}}**, **Value for {{2}}** and so on. The **Live preview** updates as you type.
4. To give each person their own value, click **Insert attribute** and pick a field under **CONTACT FIELDS** or **CUSTOM ATTRIBUTES**, for example **First Name**.
5. Fill **Fallback — sent when a contact has no value for this attribute**, for example `there`. This stops anyone getting a message with a blank in it.

### Optional: Send to a CSV list or per-person values

Use **Recipients CSV (optional)** to send only to the numbers in a file, or to give each person their own variable values.

1. Click **Download recipients CSV**. The file already holds the selected audience and the right column headings.
2. Open it, add or remove rows, and fill each person's values. Keep phone numbers with the country code, for example `919876543210`.
3. Click **Upload CSV** and choose the file.
4. Check **How we read your file**. It shows which column feeds each variable. If the headings did not match, columns are read in order, so check them carefully.
5. If the file has numbers that are not yet contacts, the **New numbers in your file** window opens. Choose **Yes — save them to a contact group** or **No — just send it**. Everyone in the file gets the message either way.

Click **Continue**. The **Review** step opens.

### Step 3: Test the campaign

1. Under **Test message**, pick the country and type your own WhatsApp number.
2. Click **Test**. The message **Test message sent.** appears when WhatsApp accepts it.
3. Check the message on your phone: the header, the values, and every button.

A test message is charged like any other message.

### Step 4: Send now or schedule

1. Check the summary under **Review & send**: the name, template, category and audience.
2. Under **When**, choose **Send now**, or click **Schedule** and pick a date and time in your local time zone.
3. Optional: to send again and again, set **Repeat** to **Daily**, **Weekly**, **Monthly** or **Yearly**. **Once** sends 1 time.
4. Click **Send now** or **Schedule**.

!!! warning "A sent broadcast cannot be recalled"
    **Send now** delivers the template to every opted-in contact in your audience. This cannot be undone. Contacts who opted out are left out automatically.

One of these messages appears:

- **Broadcast launched — sending to …** — the campaign is sending now.
- **Broadcast scheduled — it will send at the set time.** — the campaign waits in the **Scheduled** tab.
- **Recurring broadcast scheduled — first send at the set time. Manage the series from Manage > Scheduler.** — the series is set up.

### Manage scheduled and recurring campaigns

1. On **Campaigns**, open the **Scheduled** tab and click the campaign.
2. In **Scheduled send** or **Repeating schedule**, see **Next send** and **Repeats**.
3. Click **Change time** to move the next send, **Pause** or **Resume** a series, or **Stop** to end it.
4. For a repeating campaign, click **End date** to set **Stop repeating after**.

To see every repeating send in one place, click **Open in Scheduler**, or see [Manage recurring schedules](../schedule/manage-recurring-schedules.md).

### Launch, edit, cancel or resend a campaign

Each campaign row has a **More actions** menu.

- **Launch now**: sends a draft. The **Launch "…"?** window shows the **Audience**, **Template** and **Recipients**. Click **Launch**.
- **Edit**: opens **Edit Campaign**. Only a campaign that has not been sent yet can be edited.
- **Cancel**: stops a scheduled or running campaign.
- **Resend**: sends again to the recipients whose messages failed, or were never delivered. Click **Resend** in the **Resend?** window.
- **Delete**: removes the campaign from the list. This cannot be undone.

### Campaign statuses

The list opens on the **Completed** tab. Use the tabs to switch.

| Tab | Shows |
| --- | --- |
| **Completed** | Campaigns that finished sending. |
| **Scheduled** | Campaigns waiting for their send time, and campaigns sending right now. |
| **Draft** | Campaigns you started but did not launch. |
| **Cancelled** | Campaigns you called off. |
| **All** | Every campaign. |

A campaign marked **Automatic** sends itself to 1 customer at a time when an event happens, such as an order placed. Your developer connects it with the Developer API. See [WhatsApp webhooks and integrations](whatsapp-webhooks-and-integrations.md).

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **No approved templates yet** | No template has been approved by Meta. | Create a template and wait for **Approved**. See [Create a WhatsApp message template](create-message-template.md). |
| **Fill every placeholder in the template, so nobody receives a message with a blank in it.** | A variable has no value or fallback. | Fill every **Value for {{n}}**, and a fallback for each attribute. |
| **Your credits are empty** | Your balance is ₹0. | Click **Recharge credits**, add credits, then send again. |
| **The campaign could not be launched. This usually means nobody in the contact group has opted in, or the template is not approved yet. Nothing was sent.** | No opted-in contacts, or the template is not approved. | Check the group's opt-in status and the template status, then click **Launch now**. |
| **Template '…' is not synced to Meta yet. Submit it from the Templates screen first.** | The template was saved as a draft. | Open **Template**, submit it, and wait for **Approved**. |
| **Only a campaign that has not been sent yet can be edited** | The campaign already went out. | Create a new campaign. You can still send a test from the old one. |

## Related

- [Read a campaign report](read-campaign-report.md)
- [Create a WhatsApp message template](create-message-template.md)
- [Read Marketing Analytics](../analytics/read-marketing-analytics.md)
- [Manage recurring schedules](../schedule/manage-recurring-schedules.md)
- [Low or empty credits](../billing/low-or-empty-credits.md)

!!! note "Screenshots to add"
    - After step 4 of Step 1 — the **Audience** step with **Contact groups** ticked
    - After step 5 of Step 2 — **Variables** with an attribute and fallback filled, and the **Live preview**
    - After step 2 of Step 4 — the **When** field with **Schedule** and **Repeat** open
    - After step 2 of Manage scheduled and recurring campaigns — the **Repeating schedule** card
