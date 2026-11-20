---
title: Use text rules in conditions
description: Check a field against a regex pattern in Continue only if, Split into paths and the chatbot Condition block, with case, whole-text and group options.
---

# Use text rules in conditions

Stop or route a run by the shape of a text, not only by an exact value. At the end, a condition checks a field against one or more patterns, such as "has a 6-digit number" or "starts with cancel".

## Before you start

- Your role can create and change flows. See [Understand flows and the Flows list](flows-overview-and-list.md).
- The flow has a **Continue only if…** step, a **Split into paths** step, or a chatbot **Condition** block. See [Use the Action step and conditions in a flow](../whatsapp/flow-action-and-condition-steps.md#stop-a-run-unless-a-rule-holds).
- You know the basics of writing a pattern. See [Write a rule](start-a-flow-from-a-whatsapp-message.md#write-a-rule).

## Where text rules work

| Place | What the rule decides |
| --- | --- |
| **Continue only if…** step (automation flows) | Whether the run goes on or ends as **Filtered**. |
| **Split into paths** step (automation flows) | Which path the run takes. The first path whose condition matches wins. |
| **Condition** block (chatbot flows) | Whether the chat follows **True** or **False**. |

Each of them offers two comparisons:

- **matches regex** — yes when the text fits the rule.
- **does not match regex** — yes when the text does not fit the rule.

To start a flow only for some WhatsApp messages, use the trigger's own rule instead. See [Start a flow from a WhatsApp message](start-a-flow-from-a-whatsapp-message.md).

## How a pattern is checked

Each pattern has three chips under it. All are off at first.

| Chip | Off (default) | On |
| --- | --- | --- |
| **Match case** | `Order` and `order` count as the same. | Capital and small letters must match. |
| **Whole text** | The pattern can be found anywhere in the text. | The whole text must fit the pattern, from first to last character. |
| **Must not match** | The pattern counts when it is found. | The pattern counts when it is not found. |

Example: the pattern `\d{6}` matches `pin 560001 please`. With **Whole text** on, it matches only `560001`.

## Steps

### Add a text rule to Continue only if…

1. Select the **Continue only if…** step. Its **Setup** tab shows **Only continue if**.
2. Click **Add condition**.
3. In **Field**, pick the text to check, for example the message text. To type your own, choose **Something else…** and type an expression such as `{{trigger.text}}`.
4. Choose **matches regex** or **does not match regex**. A **Pattern** box replaces **Value**.
5. In **Pattern**, type the pattern, for example `\b(urgent|asap)\b`.
6. Turn on any chip you need: **Match case**, **Whole text** or **Must not match**.
7. Click **Test**. In **Texts to try (one per line)**, type sample texts and click **Test**. Each row reads **matches** or **no match**.
8. Click **Save**, then **Publish**.

    [SCREENSHOT: Continue only if step with a matches regex condition, the Pattern box, the three chips and the Add group, Generate with AI and Test buttons]

A run that does not match ends as **Filtered**. That is a normal result, not a failure.

### Route by text with Split into paths

1. Select the **Split into paths** step. Under **Paths**, click **Add two paths**. Click **Add a path** for each extra path.
2. For each path, click **Add condition** and set **matches regex** with a pattern, as above. For example:
    - **PATH A**: `^(cancel|refund)\b`
    - **PATH B**: `\b\d{6}\b`
3. Order the paths from the most specific to the least. The first path whose condition matches wins.
4. Under **If nothing matches, take**, choose a path, or **nothing — end the run**.

### Use a text rule in a chatbot Condition

1. Select the **Condition** block.
2. Under **If the answer saved as**, choose the answer to test.
3. Click the comparison. In **How to compare**, choose **matches regex** or **does not match regex**.
4. Type the pattern in **Pattern**, for example `^\d{6}$` for a 6-digit answer.
5. Connect the **True** and **False** exits. See [Ask for name, phone, email and address, then wait or branch](../whatsapp/chatbot-ask-details-blocks.md#split-the-chat-with-a-condition).

### Combine patterns with groups

A rule can hold several patterns, sorted into groups.

1. To add a pattern to the same group, click **Add pattern**. With 2 or more patterns, **This group needs** appears. Choose **all of these** or **any of these**. Between the patterns the card shows **and** or **or**.
2. To add another group, click **Add group**. With 2 or more groups, **Continue when** appears. Choose **any group matches** or **every group matches**.
3. To remove a pattern, click **Remove this pattern**.

| Setting | Default |
| --- | --- |
| Inside a group (**This group needs**) | **all of these** |
| Across groups (**Continue when**) | **any group matches** |

Example: one group with `\border\b` **and** `\d{4,}` matches `order 10423` but not `order please`. A second group with `^track\b` adds another way to match.

**Generate with AI** adds its pattern as a new group when the rule already has one. See [Let AI write the rule](start-a-flow-from-a-whatsapp-message.md#let-ai-write-the-rule).

## When a rule cannot be used

A rule that cannot be used never says yes. Both **matches regex** and **does not match regex** then count as no. This happens when:

- A pattern has a typing error, such as a bracket that is not closed.
- The rule has no pattern.
- The rule has more than 50 patterns, or a pattern is longer than 500 characters.
- The text to check is longer than 20,000 characters.
- A pattern takes too long to check, for example `(a+)+`.

Publish refuses a flow whose rule is broken, empty or over a limit. The step is marked on the canvas with the reason.

Fields inside a pattern are not filled in. A pattern is read exactly as you type it.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **The pattern "…" is not a valid regex: …** | The pattern has a typing error. | Fix the pattern. Click **Test** to check it, then publish. |
| **Add at least one pattern.** | The regex condition has an empty **Pattern** box. | Type a pattern, or choose another comparison. |
| **A card can hold at most 50 patterns.** or **A pattern is longer than 500 characters.** | The rule is over a limit. | Split the rule across steps, or shorten the pattern. |
| A chatbot **Condition** with a regex always goes to **False** | The answer is empty, or the pattern needs **Whole text** off. | Check **If the answer saved as**, then test the pattern with a real answer. |
| Every run ends as **Filtered** | **Match case** or **Whole text** is on when it should be off. | Turn the chip off, click **Test** with real texts, then publish. |
| **Add a pattern first.** in the test window | The rule has no pattern yet. | Close the window, type a pattern, then click **Test** again. |

## Related

- [Start a flow from a WhatsApp message](start-a-flow-from-a-whatsapp-message.md)
- [Use the Action step and conditions in a flow](../whatsapp/flow-action-and-condition-steps.md)
- [Read a run's output in detail](read-a-runs-output.md)
- [Test a flow and fix failed runs](test-and-monitor-flows.md)
