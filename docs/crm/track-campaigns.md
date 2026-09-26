---
title: Track campaigns and campaign templates
description: Create a CRM campaign, add its audience from leads, contacts or a group, track costs and responses, and keep reusable message templates.
---

# Track campaigns and campaign templates

Record a marketing campaign in the CRM, with its dates, costs and expected revenue, and the leads and contacts it reached. At the end, the campaign lists its recipients, and its costs feed the **Campaign ROI** report.

## Before you start

- You can see **CRM** in the left rail, with **Campaigns** in its panel. If not, ask your admin for CRM access.
- The leads or contacts you want to add already exist, or you have a contact group ready. Contact groups are also called segments.

!!! note "A CRM campaign does not send messages"
    A CRM campaign records its audience and responses. It does not deliver messages. **Resend** shows **Sending is not wired to a channel yet — a CRM campaign records its audience and responses, it does not dispatch messages.** To send, use a WhatsApp broadcast or an email campaign. See [Email overview](../email/index.md).

## Steps

### Create a campaign

1. Open **CRM** in the left rail, then select **Campaigns**.
2. Click **New Campaign** at the top right. The **New Campaign** window opens on **Campaign Details**.
3. In **Campaign Name \***, type a name, for example `Diwali offer 2026`.
4. Pick a **Type**, for example **WHATSAPP**, **EMAIL** or **EVENT**.
5. Pick a **Start Date** and **End Date**.
6. Optional: fill **Budgeted Cost**, **Actual Cost**, **Expected Revenue**, **Expected Responses** and **Description**.
7. Click **Next: Audience**. The campaign is saved and the **Audience** step opens.

### Add the audience

1. On **Audience**, click **Add Members**. The **Members — …** window opens.
2. To add people one by one, use **Select Leads / Contacts** and pick them.
3. To add a whole group, pick it in **Add entire segment**, then click **Add Segment**. The message shows how many members were added, and how many were already present.
4. To remove someone, click **Remove** on their row.
5. Click **Close**, then click **Done**.

Optional: under **Mode**, pick **Broadcast** or **Reply**, and click **Attach File** to keep a file with the campaign. Both are saved in your browser only.

### Review a campaign

1. On **Campaigns**, click a campaign in the list.
2. Read the tabs **Overview**, **Recipients** and **Diagnostics**.
3. Use the toolbar: **Recipients** to change members, **Edit** to change details, **Message** to preview the linked template.

!!! warning "Deleting a campaign"
    **Delete** removes the campaign and its member list. This cannot be undone. An **ACTIVE** campaign cannot be deleted. Complete or cancel it first.

### Keep campaign templates

1. On **Campaigns**, click **Templates**. The **Campaign Templates** screen opens.
2. Click **New Template**.
3. Fill **Template Name \*** and **Target Model / Type \***, and pick a **Channel** and **Stage**.
4. For email, add an **Email Subject**.
5. Write the message. Use placeholders such as `{{firstName}}`, `{{lastName}}`, `{{fullName}}`, `{{email}}`, `{{company}}` and `{{campaignName}}`.
6. Click **Preview** to see it with sample values, then click **Save**.

Use **Preview**, **Duplicate**, **Edit** and **Delete** on each template. Filter by **All**, **Email** or **WhatsApp**.

!!! warning "Templates are saved in this browser only"
    Campaign templates are stored on the device and browser where you create them. Teammates do not see them, and clearing site data removes them.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Campaign name is required.** | **Campaign Name \*** is empty. | Type a name. |
| **End date cannot be before start date.** | **End Date** is earlier than **Start Date**. | Fix the dates. |
| **Campaign members can only be edited in DRAFT or SCHEDULED state.** | The campaign is **ACTIVE**, **COMPLETED** or **CANCELLED**. | Members are fixed once a campaign runs. Create a new campaign for a new audience. |
| **Campaign is ACTIVE — complete or cancel it before deleting.** | You tried to delete a running campaign. | Complete or cancel it, then delete. |
| **No template linked to this campaign yet — pick one in Edit.** | No template is linked to the campaign. | Link a template to the campaign [VERIFY: where to link a template on desktop]. |
| A template you made is missing | It was saved in a different browser or device. | Open the same browser, or create the template again. |

## Related

- [Create and manage deals](manage-deals.md)
- [Track sales performance](track-sales-performance.md)
- [Email overview](../email/index.md)
- [CRM overview](../crm/index.md)

!!! note "Screenshots to add"
    - After step 2 of "Create a campaign" — the **New Campaign** window on **Campaign Details**
    - After step 3 of "Add the audience" — the **Members — …** window with **Add entire segment**
    - After step 2 of "Review a campaign" — a campaign's **Overview** tab
    - After step 6 of "Keep campaign templates" — the template **Preview**
