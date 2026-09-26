---
title: Manage CRM automations
description: See which background rules are running for your leads and deals, pause or resume a rule, and open it in the automation builder.
---

# Manage CRM automations

See every background rule that acts on your leads and deals, such as nudging a lead that went quiet, and check whether each one is running. At the end, you know which rules are **Active**, which are paused or still drafts, and when each last ran.

## Before you start

- You can see **CRM** in the left rail, with **Automations** in its panel. This item needs access to automation flows. If you do not see it, ask your admin.

## Steps

### Check your rules

1. Open **CRM** in the left rail, then select **Automations**.
2. Read each rule's card. It shows what starts the rule (**When**), any conditions (**And**) and what it does (**Then**).
3. Read the status line under the name:
    - **Draft — not running yet** — the rule is not published.
    - **Paused — not running** — the rule is switched off.
    - **Active · has not run yet** — the rule is on and waiting for its first event.
    - **Active · last run …** — the rule is on, with the result of its latest run.

Chatbots and journeys are not listed here. Find them in **WhatsApp** and **Email**.

### Pause or resume a rule

1. On the rule's card, click the **Active** switch. The **Pause "…"?** window opens.
2. Read the warning: a run already going will finish, including any message it is part-way through sending.
3. Click **Pause**. The switch shows **Paused**.
4. To resume, click the **Paused** switch. The rule is **Active** again.

### Create or edit a rule

1. To create a rule, click **New automation**. The **Automation flows** screen opens, where you build it.
2. To edit a rule, click its card. The rule opens in the automation builder.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Could not change that automation.** | The pause or resume did not save. | Refresh the page and try again. |
| **Could not load your automations** | The list did not load. Nothing is shown rather than a partial list. | Refresh the page. If it keeps failing, ask your admin to check your access to automation flows. |
| **No steps yet — this rule does nothing until it has one.** | The rule has a trigger but no action. | Click the card and add a step in the builder. |
| A message still went out after you paused a rule | Pausing stops new runs only. A run that had started finishes. | Wait for the run to finish. Pause earlier next time. |
| **No automations yet** | No rule has been created. | Click **New automation**. |

## Related

- [Create and manage deals](manage-deals.md)
- [Log activities and notes](log-activities-and-notes.md)
- [CRM overview](../crm/index.md)

!!! note "Screenshots to add"
    - After step 2 of "Check your rules" — a rule card with When / And / Then
    - After step 1 of "Pause or resume a rule" — the **Pause "…"?** window
    - After step 1 of "Create or edit a rule" — the **Automation flows** screen
