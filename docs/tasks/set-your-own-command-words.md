---
title: Set your own command words
description: Teach WhatsApp Tasks the words your staff already use, such as a Hindi word for done, and test them before you save.
---

# Set your own command words

Add the words your staff already use for the built-in task commands, for example `{n} khatam` for **Done**. At the end, a message like `2 khatam` works exactly like `2 done`, and your words appear in the WhatsApp `help` reply.

## Before you start

- WhatsApp Tasks is set up. See [Set up WhatsApp Tasks](set-up-whatsapp-tasks.md).
- You are the account owner, a Super Admin or a System Admin. Others can view the commands but not add words.
- You know which built-in command each phrase should stand for. See [Use WhatsApp task commands](use-whatsapp-task-commands.md).

## How your own words work

- Each phrase stands for one built-in command. It does the same thing and follows the same rules.
- A built-in command always wins. If a message is already a built-in command, your words are not checked.
- The whole message must match the phrase. Capital letters do not matter. A full stop, `!` or `?` at the end is ignored.
- A `?` at the end turns a change into a question. `2 khatam?` does not finish task 2.
- Button taps and replies to a task card are never read as your own words.
- The built-in command keeps working after you add your words.

### Blanks

A blank is the part of the message that changes each time. Type it in curly brackets, or tap it under **Words**.

| Blank | Stands for | Example phrase | Staff send |
| --- | --- | --- | --- |
| `{n}` | The task's number in the last list, 1 to 99 | `{n} khatam` | `2 khatam` |
| `{name}` | A person on the staff list | `{name} ka kaam` | `Ravi ka kaam` |
| `{task}` | What needs to be done | `note {task}` | `note order more paper` |
| `{time}` | A due time or reminder time | `{name} ko {task} do {time} tak` | `Ravi ko stock check do 5 pm tak` |
| `{project}` | A project tag | `{project} ke kaam` | `Website ke kaam` |
| `{period}` | A day or month, for attendance | Used by attendance commands only | — |

Some commands need a blank. For example, **Done** needs `{n}`. Some blanks are optional and show **(optional)**, such as `{time}` for giving a task.

## Steps

### Add words for a command

1. In the left panel, under **Task**, click **WhatsApp tasks**, then click **Settings**.
2. In the **What staff can type** card, click **Show all**. The built-in commands appear under **Everyone** and **Admins & managers**.
3. Click the pencil beside a command, for example `2 done`. The **Add your own words** window opens with that command chosen.

    You can also click **Add your own words** at the bottom of the card, then pick the command under **Does the same as**.

4. Read **Built-in:** to check the command you are adding words for.
5. Type the phrase under **Words**, for example `{n} khatam`. Tap a blank to add it where it belongs.
6. Under **Try it**, type a message as staff would send it, for example `2 khatam`. The line below shows the result:
    - **→ 2 done · task 2 is done** means your words matched.
    - **Built-in command** means the message already works without your words.
    - **No match** means neither matched.
7. Click **Save**. A message says **Words saved**.

    [SCREENSHOT: Add your own words window with Does the same as, Words, and a Try it result]

Your words now appear under **Your own words** in the card.

### Pick the meaning language

When the card is open, use the language tabs at the top to read the meanings in English, Hindi or Hinglish. This changes only what you see in the app.

### Edit or delete words

1. Under **Your own words**, click the pencil to change a phrase, or the bin to delete it.
2. For a delete, confirm in **Delete "…"?**. Staff typing that phrase are no longer understood. The built-in command keeps working.

## Rules for phrases

| Rule | Why |
| --- | --- |
| Up to 50 phrases per team, each 1 to 80 characters. Attendance phrases set in HR count toward the 50. | Keeps matching fast. |
| Include every blank the command needs, and no blank it does not have. | The command cannot run without it. |
| Use each blank once, with at least one word between 2 blanks. | Otherwise Ohanvi cannot tell where one ends. |
| Include at least one word besides the blanks. | A bare `{n}` would catch every number. |
| Do not save a phrase that is already a command, such as `done`. | The built-in one would always win anyway. |
| Do not save the same phrase twice. | One phrase can mean only one thing. |
| Do not use start, stop, subscribe or unstop. | WhatsApp uses these words to opt people in and out, and answers them itself. |

Attendance commands have their own words in **HR → Attendance → Settings**. See [Mark attendance on WhatsApp](../hr/whatsapp-attendance.md).

## How staff see your words

When staff send `help`, the reply lists the built-in commands, then **Your team's words:** with up to 8 of your phrases. If there are more, it ends with **…and … more in the app**. With AI off, the same list follows **AI is turned off for your team, so I understand only these commands:**.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **"…" needs {n} for this action.** | The command needs a blank the phrase does not have. | Tap the missing blank under **Words**. |
| **"…" is already a command.** | The phrase is a built-in command, like `done`. | Leave it out. Staff can already send it. |
| **"…" can't use start, stop, subscribe or unstop: WhatsApp keeps those words for opting in and out.** | The phrase holds a WhatsApp opt-in or opt-out word. | Use another word, such as `begin` or `turn off`. |
| **"…" has an unknown blank.** | A word in curly brackets is not one of the 6 blanks. | Use `{n}`, `{name}`, `{task}`, `{time}`, `{project}` or `{period}`. |
| **Try it** shows **Built-in command**, not your phrase | The test message is already a built-in command, which always wins. | No fix needed. The message works as the built-in command. |
| Staff send the phrase and it is not understood | The message has extra words, or a `?` at the end of a change. A phrase ending in `tasks` can also be read as a person's list first. | Ask them to send it exactly as saved. Test it under **Try it**, and pick another ending if it shows **Built-in command**. |

## Related

- [Use WhatsApp task commands](use-whatsapp-task-commands.md)
- [Set up WhatsApp Tasks](set-up-whatsapp-tasks.md)
- [Manage opt-in and opt-out words](../whatsapp/manage-opt-in-and-opt-out-words.md)
