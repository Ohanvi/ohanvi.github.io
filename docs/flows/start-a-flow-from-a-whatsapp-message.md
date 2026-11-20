---
title: Start a flow from a WhatsApp message
description: Start a flow when a WhatsApp message arrives, on every message or only when the text matches a rule, and use the matched words in later steps.
---

# Start a flow from a WhatsApp message

Make a flow start when someone sends a message to one of your WhatsApp numbers. You can take every message on the number, or only messages whose text matches a rule, and pass the matched words to later steps.

## Before you start

- Your role can create and change flows. See [Understand flows and the Flows list](flows-overview-and-list.md).
- A WhatsApp number is connected. See [Connect your WhatsApp number](../whatsapp/connect-whatsapp-number.md).
- To answer staff only, your staff members are added in HR with their WhatsApp numbers. See [Add staff](../hr/add-staff.md).

## Which messages start the flow

What starts the flow depends on who answers the number. You set that in **WhatsApp** → **Configuration**, under **Who answers incoming messages**.

| The number is set to | Without a text rule | With **Only when the text matches** |
| --- | --- | --- |
| **Automation flows only** | Every message starts the flow. | Only a matching message starts the flow. |
| **Chatbot flows**, **AI replies** or **Team Inbox only** | Nothing starts the flow. | A matching message goes to this flow. Other messages stay with the chatbot, the AI or your team. |

A few more rules apply:

- Only typed text and voice notes turned into text can match. Button taps, forms, orders, photos and locations never match.
- On an **Automation flows only** number, a flow with a rule that matches goes first. A flow without a rule then runs only when no rule matched.
- If several rule flows match the same message, each of them runs.
- On other numbers, a rule does not take the message while a chatbot conversation is running, a teammate holds the chat, or the chat waits for an agent.
- Staff who use WhatsApp Tasks get the Tasks reply unless a rule set to **Staff only (people in HR)** matches. See [Use WhatsApp task commands](../tasks/use-whatsapp-task-commands.md).

## Steps

### Choose the trigger

1. Open the flow in the builder. See [Build an automation flow](build-automation-flow.md).
2. Click the trigger at the start of the canvas. The **When this runs** panel opens.
3. Click the box at the top of the panel. Its right side reads **Change**. The **What starts this flow?** window opens.
4. Under **APPS**, click **WhatsApp**, then click **A WhatsApp message arrives**. You can also type `whatsapp` in **Search**.

**WhatsApp keyword** under **START** is a different trigger. It starts a chatbot conversation. See [Choose how a flow starts](../whatsapp/chatbot-flow-start-and-triggers.md).

### Choose the number

1. In **Which WhatsApp number**, choose the number. The panel says how the flow will start on it.
2. If the panel says **Set this number to Automation flows only in WhatsApp settings, or turn on "Only when the text matches" below.**, do one of those two things.
3. Leave **Handle one message at a time per sender** on. A second message from the same person then waits until the first run ends. It is on when you first pick a number.

    [SCREENSHOT: When this runs panel with Which WhatsApp number, the Only when the text matches switch and Who it answers]

### Add a text rule

1. Switch on **Only when the text matches**. The rule editor opens.
2. In **Pattern**, type the rule, for example `status of (?<item>\S+)`. See "Write a rule" below.
3. Click **Test**. In **Texts to try (one per line)**, type a few real messages, one per line. Click **Test** in the window.
4. Read each row. **matches** means the message would start the flow. **no match** means it would not. Click **Close**.
5. In **Who it answers**, choose who the rule is for:
    - **Anyone** — every sender.
    - **Staff only (people in HR)** — senders whose number belongs to an active staff member in HR.
    - **Customers only (not staff)** — everyone else.
6. Click **Save**, then **Publish**.

**Who it answers** works only once the rule has a pattern.

### Let AI write the rule

1. Under the rule, click **Generate with AI**. The **Generate a regex** window opens.
2. In **What should the text look like?**, describe the message, for example `a 6-digit pincode`.
3. In **Should match (one per line)**, type messages that must start the flow.
4. In **Should not match (one per line)**, type messages that must not.
5. Click **Generate**. The pattern appears with a one-line explanation.
6. Read the line under it. **Passes every example.** means it was checked against your examples. If it reads **Does not pass every example — check it before using it.**, click **Try again** or fix your examples.
7. Click **Use this pattern**.

    [SCREENSHOT: Generate a regex window with examples, the generated pattern and Passes every example.]

If the rule already has a pattern, the new one is added as its own group. Either one can then match. See [Use text rules in conditions](use-text-rules-in-conditions.md#combine-patterns-with-groups).

### Use the matched words in later steps

Give a part of the pattern a name with `(?<name>…)`. Later steps can read it as `{{trigger.match.name}}`.

1. Write the pattern with a named part, for example `status of (?<item>\S+)`.
2. In a later step, pick or type `{{trigger.match.item}}`. For the message `status of ORD-1042`, it holds `ORD-1042`.
3. To reply on the same number, set the WhatsApp step's **Send from** to **Same number the message arrived on**.

Unnamed parts in brackets are numbered: `{{trigger.match.1}}`, `{{trigger.match.2}}`. Spaces at either end of a matched part are removed.

The trigger also gives these fields:

| Field | What it holds |
| --- | --- |
| `{{trigger.from}}` | Sender's phone number |
| `{{trigger.senderName}}` | Sender's WhatsApp name |
| `{{trigger.text}}` | Message text (voice notes as text) |
| `{{trigger.type}}` | Message type |
| `{{trigger.receivedAt}}` | When it arrived |
| `{{trigger.number.id}}` | Number it arrived on |
| `{{trigger.number.display}}` | That number, as shown |

!!! note "Changes take up to 30 seconds"
    Numbers answered by a chatbot, the AI or your team check the published rules at most every 30 seconds. After you publish or change a rule, wait 30 seconds before you test it. A staff member newly added in HR can take up to 5 minutes to count as staff.

## Write a rule

A rule is a regular expression (regex): a short pattern that describes text. By default, the pattern can be found anywhere in the message, and capital and small letters count as the same.

| You type | It means |
| --- | --- |
| `abc` | The letters `abc`, in that order |
| `\d` | One digit, 0 to 9 |
| `\d{6}` | Exactly 6 digits in a row |
| `\s` | One space |
| `\S+` | One or more characters that are not spaces, such as a code |
| `.` | Any one character |
| `+` / `*` / `?` | The thing before it: 1 or more times / 0 or more times / optional |
| `(a\|b)` | `a` or `b` |
| `^` / `$` | The start / the end of the message |
| `\b` | The edge of a word, so `job` does not match inside `jobless` |
| `(?<name>…)` | A part to keep, named `name` |

Examples:

| Rule | Matches | Gives you |
| --- | --- | --- |
| `status of (?<item>\S+)` | `status of ORD-1042`, `Status of A7` | `{{trigger.match.item}}` = `ORD-1042` |
| `^jobs?\s+(?<day>today\|tomorrow)$` | `jobs today`, `Job tomorrow` | `{{trigger.match.day}}` = `today` |
| `\b(?<pin>\d{6})\b` | `deliver to 560001` | `{{trigger.match.pin}}` = `560001` |

The first example does not match `what is the status` because no code follows `status of`. The third does not match a 10-digit phone number because `\b` needs the 6 digits to stand alone.

For more options, such as **Whole text**, **Match case** and **Must not match**, see [Use text rules in conditions](use-text-rules-in-conditions.md).

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Set this number to Automation flows only in WhatsApp settings, or turn on "Only when the text matches" below.** | The number has a chatbot, AI or team answering it, and the flow has no rule. | Add a text rule, or change **Who answers incoming messages** for the number. |
| **Only when the text matches: this rule matches any text, so it would take every message from the chatbot, AI reply and WhatsApp tasks.** | The pattern also matches an empty message, for example `.*`. | Name the words to look for, for example `status of (?<item>\S+)`. |
| **Only when the text matches: The pattern "…" is not a valid regex: …** | The pattern has a typing error, such as a bracket that is not closed. | Fix the pattern, click **Test**, then publish. |
| **Who this answers applies only with a text rule. Add one, or set it back to ANY.** | **Who it answers** is set but the pattern is empty. | Type a pattern, or choose **Anyone**. |
| A matching message still gets the chatbot or AI reply | The rule was published less than 30 seconds ago, a chatbot conversation is running, or a teammate holds the chat. | Wait 30 seconds and send it again. End the chatbot conversation or close the chat first. |
| A staff member's message gets the Tasks reply | Tasks answers its staff unless a staff rule matches. | Set **Who it answers** to **Staff only (people in HR)**. |

## Related

- [Use text rules in conditions](use-text-rules-in-conditions.md)
- [Answer from a Google Sheet](answer-from-a-google-sheet.md)
- [Use Tasks and HR steps in flows](use-tasks-and-hr-steps-in-flows.md)
- [Test a step and pin sample data](test-a-step-and-pin-sample-data.md)
- [Build an automation flow](build-automation-flow.md)
