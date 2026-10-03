---
title: Review a flow's versions
description: Open the Versions tab to see every version of a flow, which one is live, which one you are editing, and who published each one.
---

# Review a flow's versions

Check the history of a flow in its panel. At the end, you know which version is running now, which draft you are editing, and when and by whom each version was published.

## Before you start

- The flow has been saved at least once.
- You can see **Flows** in the **WhatsApp** panel. To open an older version in the builder, your role also needs save access to flows.

## How versions work

- A published version never changes. Editing a published flow starts a new draft.
- Runs already going stay on the version they started with. New runs use the live version.
- A flow can have two kinds of history. **THIS FLOW** is the flow's own versions. **CONVERSATION:** followed by a name holds the versions of a chatbot conversation that the flow uses.

## Steps

### Open the Versions tab

1. Open **WhatsApp** in the left rail, then select **Flows**.
2. Click the flow's row. The panel opens beside the list.
3. Click the **Versions** tab. The first time, a loader shows while the list loads.
4. Read the note at the top: **A published version never changes — editing one starts a draft, and runs already going stay on the version they started with.**

### Read a version row

Each row shows one version.

1. Read the version number, for example **v3**.
2. Read the chip next to it.
    - **Running now** is the live version of an automation.
    - **Live** is the live version of a chatbot conversation.
    - **Published** is a version that went live earlier and was replaced.
    - **Being edited** is the draft you are working on.
    - **Draft** is a draft that is not the one being edited.
3. Read the line under it. It shows the number of steps, for example **3 steps**, then **Published** with the time and who published it, or **Not published**. If a change note was saved, it shows at the end.

If the flow has no versions, the tab says **No versions yet.**

### Open an older version

1. On a row that is not live, click **Open**. The builder opens.
2. To put an older version live, or to start a draft from it, use the **Versions** button in the builder. See [Understand the flow builder](../whatsapp/understand-the-flow-builder.md).

The **Open** button does not show on the live version, on a chatbot conversation's version, or if your role cannot change flows.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **No versions yet.** | The flow was never saved. | Open the builder, add a step and click **Save**. |
| No **Open** button on a row | The version is live, it is a conversation's version, or your role cannot change flows. | Ask your admin for save access to flows. |
| Two lists of versions | The flow has its own versions and a chatbot conversation has its own. They are numbered separately. | Read each list under its heading. |
| A draft shows as **Draft**, not **Being edited** | It is not the draft the flow is using now. | Open the builder and check which draft is open. |

## Related

- [Understand flows and the Flows list](flows-overview-and-list.md)
- [Understand the flow builder](../whatsapp/understand-the-flow-builder.md)
- [Test a flow and fix failed runs](test-and-monitor-flows.md)
