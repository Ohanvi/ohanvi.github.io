---
title: Use Email Groups
description: Work with fixed lists and rule-based segments in Audience, then merge, duplicate and aim campaigns at them.
---

# Use Email Groups

Email Groups holds your lists and segments in 1 place. A fixed group is a list you fill by hand. A rule group is a segment that a rule keeps current. At the end, you can manage members, merge groups and aim a campaign at either kind.

## Before you start

- You can see **Audience** in the **Email** panel. If not, ask your admin.
- You have contacts. See [Add email contacts, lists and segments](manage-email-contacts.md).

## Steps

### Open Email Groups

1. Open **Email** in the left rail, then select **Audience**.
2. Open the **Email Groups** tab.
3. Choose **Fixed** or **Rule**. Each pill shows a count.
   - **Fixed** means: Groups you put people into by hand.
   - **Rule** means: Groups a rule keeps current as your contacts change.

### Work with a fixed list

1. Click **Create list** and fill in **List Name** and **Description**. Save it.
2. Set the optional list settings: **Require Double Opt-in**, **Default Sender Identity**, **Default Topic** and **Confirmation Email Template**.
3. Open the list's **⋮** menu and choose an action:
   - **Manage Members** adds or removes people.
   - **Duplicate** copies the list. The copy is named with **(Copy)**. You can also copy its members.
   - **Merge Into Another List** moves its members into the **Target List** you choose.
   - **Delete List** removes the list. Contacts stay in your audience.

### Work with a rule segment

1. Click **Create segment** to build one by rules. Or choose **From WhatsApp Group** to start from a WhatsApp group.
2. Open a segment's menu and choose an action:
   - **Edit conditions** changes the rule.
   - **Preview Matches** shows who matches now.
   - **Use in Campaign** starts a campaign aimed at it.
   - **Combine Segments** makes a new segment from 2. Type a **New Segment Name**, then pick **Combine With**. A contact must match both.
   - **Duplicate Segment** copies it.
   - **Delete Segment** removes the segment, not the contacts.

A segment narrows a list. It never adds people who are not on the list.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **No contacts match these conditions yet.** | The rule is too narrow. | Loosen a filter, or switch **all** to **any**. |
| A list has fewer people than expected. | Unsubscribed contacts are skipped when sending. | Check the **Unsubscribed** tab on the **Emails** tab. |
| You cannot find **Lists** or **Segments** in the panel. | They now live inside **Audience**. | Open **Audience**, then **Email Groups**. |

## Related

- [Add email contacts, lists and segments](manage-email-contacts.md)
- [Find, tag and export contacts](find-tag-and-export-contacts.md)
- [Send an email campaign](send-email-campaign.md)
