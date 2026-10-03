---
title: Review and correct AI agent answers
description: See why the AI agent answered the way it did, correct a wrong answer so it learns it, and re-index your knowledge sources.
---

# Review and correct AI agent answers

Test your WhatsApp AI agent, see what it knew when it answered, and teach it the right answer. At the end, a wrong reply is fixed for good and your knowledge sources are indexed. Takes about 5 minutes per question.

## Before you start

- Your AI agent is set up. See [Set up the WhatsApp AI agent](set-up-ai-agent.md).
- You can see **AI Agent** in the **WhatsApp** panel. If not, ask your admin.
- You have saved your changes. The test chat uses your latest saved changes.

## How the test chat works

The **Test your Agent** panel has 2 modes:

| Mode | What it tests |
| --- | --- |
| **Train** | Your latest saved changes. Replies are not visible to customers. |
| **Live** | What customers get. You watch the answers but cannot correct them here. |

The 2 icons under a reply, **Why it answered this way** and **Correct this answer**, show only in **Train** mode.

## Steps

### Ask a test question

1. Open **WhatsApp** in the left rail, then select **AI Agent**.
2. Click **Test agent**. The **Test your Agent** panel opens.
3. Select **Train**.
4. Type a question in **Ask your agent something…**.
5. Click the send arrow. The agent's reply appears.
6. Click **New chat** to start over.

### See why the agent answered that way

1. Under the reply, click the eye icon. Its tooltip is **Why it answered this way**. The **Reply details** window opens.
2. Read the rows. Use the table below to find the section to fix.
3. Under **Tools used**, read the list of tools the agent called, if any.
4. Optional: click **Prompt sent to the model** to open the full prompt. You can select and copy it.
5. Click **Close**.

| Row | What it tells you | If it looks wrong |
| --- | --- | --- |
| **Mode** | Which mode answered. | — |
| **Answered by** | The AI provider and model. It shows only when the server returns it. | — |
| **Agent** | The agent name used. | Change **Agent / business name** in **Business Profile**. |
| **Tone** | The tone used. | Change it under **Tone**. |
| **Reply length** | **Short**, **Medium** or **Long**. | Change it under **Tone**. |
| **Knowledge entries** | How many Q&A entries it could use. | Add questions under **Quick Q&A** in **Knowledge**. |
| **Knowledge sources** | How many sources it could search. | Add or re-index sources in **Knowledge**. |
| **Skills enabled** | How many skills are on. | Turn skills on under **Skills**. |
| **Business description** | **Included** or **Not set**. | Fill in **What the business does** in **Business Profile**. |
| **Ground rules** | **Included** or **Not set**. | Fill in **Additional notes** in **Business Profile**. |
| **Guardrails** | **Applied** or **Not set**. It shows only when the server returns it. | Fill in **Persona & guardrails** in **Business Profile**. |
| **Product catalogue** | **Included** or **Off**. | Turn on **Agent can recommend products** under **Products**. |
| **Version** | **Published (what customers get)** when the reply used the published version. | Click **Publish & go live** to publish your changes. |
| **Handoff** | **The agent asked for a human** when it handed the chat over. | Check your handoff phrases under **Settings**. |

!!! tip "Start with the counts"
    A row that reads 0 or **Not set** usually names the section to fix. The prompt is there for when the counts are not enough.

### Correct a wrong answer

1. Under the wrong reply, click the pencil icon. Its tooltip is **Correct this answer**. The **Correct this answer** window opens and shows the customer's question.
2. In **What the agent should say**, edit the reply. The box starts with the agent's answer.
3. Click **Save & teach**. The message **Saved — the agent will answer this way from now on.** appears.
4. To close the window without saving, click **Cancel**.

The correction is saved to the knowledge base as this question and answer. It replaces any answer already stored for the same question.

!!! note "Save & teach needs a question"
    If the window shows **This question** instead of the customer's words, **Save & teach** stays off. Ask the question again in the test chat, then correct the new reply.

### Re-index your knowledge

Re-index when a source shows **Not indexed yet — use Re-index all**, or when a page on your site has changed.

1. Select **Knowledge** in the list on the left.
2. Read the line above the sources, for example **3 sources — some failed**.
3. Click **Re-index all**. The agent re-crawls pages and re-reads files. The button stays off while it runs.
4. Read the message. It reads **Sources re-indexed.** unless the server sends its own message.
5. Check each source. A ready source shows how many **searchable passages** it has. A failed source shows its error in red.
6. To remove a source, click the trash icon (**Remove**), then click **Save changes**.

Limits and timing:

- **Re-index all** shows only when you have at least 1 source.
- Files must be 50 MB or smaller.
- The link to an uploaded file lasts 7 days. After that, upload the file again to re-index it.
- Sources index within seconds of saving.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| The eye and pencil icons are missing under replies | The test chat is on **Live**. | Select **Train**. |
| **Save & teach** is off | The window shows **This question**, so the agent has no question to store. | Ask the question again in the test chat, then correct the new reply. |
| **Could not save the correction.** | The correction did not reach the server. | Click **Save & teach** again. Check your connection. |
| The agent still gives the old answer | Customers get the published version. | Click **Publish & go live**. |
| **Could not re-index.** | The server could not start re-indexing. | Click **Re-index all** again. |
| A source shows a red error | The page or file could not be read. | Check the URL or file, then click **Re-index all**. |
| **Not indexed yet — use Re-index all** | The source was added but not indexed. | Click **Save changes**, then **Re-index all**. |
| **Files must be 50 MB or smaller.** | The file is too large. | Split or compress the file. |

## Related

- [Set up the WhatsApp AI agent](set-up-ai-agent.md)
- [Use the WhatsApp inbox](use-whatsapp-inbox.md)
- [Manage the media library](manage-media-library.md)
