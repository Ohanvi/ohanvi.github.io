---
title: Comment, mention and attach files
description: Discuss a task with comments and @mentions, attach files, watch tasks, log time, and control the task emails and reminders you get.
---

# Comment, mention and attach files

Keep the conversation about a task on the task itself. At the end, you can comment and reply, @mention a teammate so they are told, attach files and screenshots, follow a task you do not own, log the time you spent, and choose how Ohanvi tells you about task changes.

## Before you start

- You can open a saved task. See [Create and assign tasks](create-and-assign-tasks.md).
- The teammates you want to mention are users in your workspace.

## Steps

### Add a comment

1. Open a task from the board or the **Tasks** panel. The task dialog opens.
2. Scroll to **Activity** and click **Add a comment...**.
3. Type your comment. Press Shift + Enter for a new line.
4. Press Enter to post it. The comment appears under **Comments**.

For a fast reply, click a ready-made comment under the box, such as **Looks good!**, **Need help?** or **This is blocked...**, then edit it and press Enter.

### Mention a teammate

1. In a comment or in the task's **Description**, type `@`.
2. Type the first letters of the person's name and pick them from the list.
3. Post the comment, or click **Save** for a description. Ohanvi emails the people you mentioned with the subject "[task key] … mentioned you".

### Reply to, react to, edit or delete a comment

- **Reply:** click the reply icon (tooltip **Reply**) on a comment, type in **Write a reply…**, and press Enter.
- **React:** click the smiley icon on a comment and pick an emoji. Click an emoji again to take your reaction back.
- **Edit:** click the pencil icon (tooltip **Edit**), change the text, and press Enter to save.
- **Copy a link to the comment:** click **More actions** → **Copy link**. The message **Comment link copied** appears.
- **Delete:** click **More actions** → **Delete**, then click **Delete** in the **Delete comment?** dialog.

!!! warning "Deleted comments cannot be restored"
    **Delete comment?** removes the comment permanently.

### Attach files

1. Open the task and scroll to **Attachments**.
2. Drag files onto the box that says **Drop files here to attach them or browse**, or click **browse** and pick files.
3. The files upload and appear in the list. Maximum file size: [LIMIT].

You can also paste a screenshot or file straight into the **Description**. To look at an attachment, click **Preview** (images and videos only) or **Download**. To remove one, click its delete icon and confirm with **Delete** in the **Delete Attachment** dialog.

### Watch a task

1. Open the task.
2. Click the eye icon at the top of the dialog (tooltip **Watch**).

Watchers get the same emails as the task's reporter and assignee. Click the icon again (tooltip **Stop watching**) to stop.

### Share a task

1. Open the task.
2. Click the share icon at the top of the dialog (tooltip **Share**). The message **Copied ticket link: …** appears.
3. Paste the link into a chat or email. Teammates with Task access open the same task.

### Log time

1. Open the task and scroll to **Activity**.
2. Click **Work log**, then click **Log time**.
3. In **Time spent**, type the time, for example `1h 30m`. Use w, d, h and m. A number alone means minutes.
4. Set the **Date** and, optionally, a **Work description (optional)**.
5. Click **Save**. The entry appears under **Time logged**.

### See a task's history

In **Activity**, click **History** to see every status change, assignee change and edit, with who made it and when. Click **All** to see comments and history together.

### Choose how you hear about task changes

Ohanvi emails the reporter, the assignee and all watchers when a task is created, assigned, moved to a new status or commented on. You do not get an email for a change you made yourself.

1. Open **Settings** from the left rail, then select **Notifications**.
2. Find the **Task Management** row ("Assigned tickets, mentions and status changes").
3. Turn **In-app**, **Push** or **Email** on or off. Only a super admin can change the **Email** column.

### Get task reminders

A reminder is a time you want to be nudged about a task. You set one from a WhatsApp call note with **Remind me on** and **Remind me at**, and Ohanvi creates a task for it.

- When the reminder time passes, the task card shows **Reminder due**, and the board shows a strip such as **1 reminder due** above the columns.
- The assignee, or the reporter when no one is assigned, gets a notification in the bell: **Reminder: [task key] — [summary]**. It also goes to their phone when push notifications are on.
- Reminders need your workspace's reminder schedule to be switched on. [VERIFY: reminders are enabled in production]

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Could not save comment.** | The comment did not reach the server. | Your text stays in the box. Press Enter again. |
| A teammate is not in the @ list | They are not a user in your workspace, or the letters do not match their name. | Check the spelling, or ask your admin to add them as a user. |
| **Preview is available for images and videos only.** | The file is a PDF, spreadsheet or other document. | Click **Download** to open it. |
| **Failed to delete attachment.** | The delete did not save. | Close and reopen the task, then try again. |
| **Could not resolve your account to watch.** | Ohanvi could not match your login to a project member. | Sign out and back in, then click **Watch** again. |
| No task emails arrive | Email is off for **Task Management**, or the emails went to spam. | Check **Settings** → **Notifications**, then your spam folder. |

## Related

- [Create and assign tasks](create-and-assign-tasks.md)
- [Find, filter and view tasks](find-and-filter-tasks.md)
- [Settings overview (notification preferences)](../settings/index.md)

!!! note "Screenshots to add"
    - After step 2 of "Mention a teammate" — the @ mention list open in the comment box.
    - After step 3 of "Attach files" — the **Attachments** list with an image and a PDF.
    - "Reply to, react to, edit or delete a comment" — a comment showing the reply, emoji, edit and **More actions** icons.
    - After step 5 of "Log time" — the **Work log** tab with a logged entry.
