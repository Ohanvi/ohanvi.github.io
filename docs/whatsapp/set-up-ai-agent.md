---
title: Set up the WhatsApp AI agent
description: Teach the AI agent your business, add knowledge sources, choose its skills, set when it hands a chat to your team, test it and set it live.
---

# Set up the WhatsApp AI agent

Set up an AI agent that answers customers on WhatsApp from your own business information. At the end, the agent knows your business, hands chats to your team when it cannot help, and is live for test numbers or for every customer.

## Before you start

- Your WhatsApp number is connected. See [Connect your WhatsApp number](connect-whatsapp-number.md).
- You can see **AI Agent** in the **WhatsApp** panel. It uses the same access as **Flows**. If you cannot see it, ask your admin. See [Manage team members, roles and permissions](../settings/roles-and-permissions.md).
- You have credits. Each AI reply delivered to a customer is charged to your credits. See [Credits and billing](../credits-and-billing.md).

## Steps

### Know who answers first

Open **WhatsApp** in the left rail, then select **AI Agent**. The **Who answers your customer** card shows the order, top to bottom:

1. **A teammate is already chatting** — the AI stays quiet so nobody talks over your team.
2. **A chatbot flow is running** — the flow owns the conversation until it finishes or times out.
3. **Otherwise this AI agent replies** — from everything you set up on this page.
4. **If the agent cannot answer** — the chat moves to the inbox and your team is notified.

### Describe your business

1. Select **Business Profile** in the list on the left.
2. In **Website**, type your site address, then click **Regenerate from site**. Ohanvi drafts your details from the website.
3. Check **Agent / business name**, **Greeting message (optional)**, **Business type** and **What the business does**. If you pick **Other** as the business type, describe it.
4. Under **Persona & guardrails**, fill in **Allowed topics**, **Forbidden topics**, **Off-topic response** and **Escalation triggers** as needed.
5. Select **Tone**. Pick a tone and a **Response length**: **Short**, **Medium** or **Long**.
6. Click **Save changes**. The message **AI agent saved.** appears.

### Add knowledge

1. Select **Knowledge**.
2. Add a source:
    - **Crawl a page** — any public URL on your site.
    - **Upload files** — PDF, DOCX, TXT or CSV, up to 50 MB each.
    - **Paste text** — policies, scripts or price lists.
3. Under **Quick Q&A**, click **Add question** and type a question and its **Answer**.
4. Click **Save changes**. Sources index within seconds of saving.

If a source shows **Not indexed yet — use Re-index all**, click **Re-index all**.

### Choose skills

1. Select **Skills**. Each skill is a job the agent can do.
2. Expand a skill and click **Configure** to set it up:

    | Skill | What it does |
    | --- | --- |
    | **FAQ / Support** | Answers general questions from your knowledge. |
    | **Human Handoff** | Hands the chat to your team when the customer asks for a person, is frustrated, or raises something out of scope. |
    | **Lead Qualification** | Asks your questions to a prospect and can push the lead to your CRM. |
    | **Order Status** | Looks up an order through a connected action and reports its status. |

3. To add your own job, click **Add custom skill** under **Custom skills**.

**Products**, **Payments**, **Meta Ads** and **Voice calls** in the same list let the agent recommend products, send payment links, answer ad-driven chats and work with a calling agent.

### Set the handoff to a human

1. Select **Settings**.
2. Under **Hand off to a human**, type the **Trigger phrases** that start a handoff, for example **talk to a human**.
3. Type the **Handoff message** the customer gets.
4. Optional: under **Handoff webhook (optional)**, add a **Webhook URL** to tell your helpdesk or CRM about each handoff.
5. Type a **Fallback message** for when the agent has no answer.

A handed-off chat moves to the inbox and your team is notified. See [Use the WhatsApp inbox](use-whatsapp-inbox.md).

### Test the agent

1. Click **Test agent**. The **Test your Agent** panel opens.
2. Type in **Ask your agent something…** and read the reply. Test replies are not visible to customers.
3. If an answer is wrong, click **Correct this answer**, type **What the agent should say**, then click **Save & teach**.

### Go live

1. Under **Settings** → **Test numbers & going live**, add up to 3 WhatsApp numbers to try the agent first. While the list has a number, only those numbers get agent replies.
2. Check **Ready to go live**. It lists **Business profile**, **Knowledge added**, **Skills configured** and **Published**.
3. Click **Publish & go live**. The message **Published — customers now get this version.** appears.
4. Turn the agent on with **Turn AI on**. The status shows **AI is live**.
5. When you are ready for every customer, clear the test numbers.

To stop the agent, click **Pause AI**. Saved changes reach customers only after you publish.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Tell us your business type — "Other" needs a description.** | **Business type** is **Other** with no description. | Describe your business type, then save. |
| **Enter your website first.** | **Website** is empty. | Type your site address, then click **Regenerate from site**. |
| **Could not draft anything from that site.** | The site could not be read. | Fill in **What the business does** by hand. |
| **Files must be 50 MB or smaller.** | The file is too large. | Split or compress the file. |
| Customers get old answers | Your changes are saved but not published. | Click **Publish & go live**. |
| The agent stopped replying | Your credits ran out, or only test numbers get replies. | Recharge, and clear the test numbers. See [When credits run low or run out](../billing/low-or-empty-credits.md). |

## Related

- [Use the WhatsApp inbox](use-whatsapp-inbox.md)
- [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md)
- [Choose your own or managed services](../settings/choose-connectors.md)
- [Add funds to your account](../add-funds.md)

!!! note "Screenshots to add"
    - The **Who answers your customer** card.
    - After step 2 of Add knowledge — the three source cards.
    - After step 2 of Test the agent — the **Test your Agent** panel with a reply.
    - After step 2 of Go live — the **Ready to go live** checklist.
