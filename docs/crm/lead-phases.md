---
title: Build lead phases and steps
description: Set the phases and steps every lead and customer follows. Phase 1 is the first call. Add follow-up steps, later phases, templates and a repeat.
---

# Build lead phases and steps

Phases are the plan every lead and customer follows. Phase 1 gets a lead to convert. Your own later phases look after the customer. At the end, each step has a channel, a day, a time rule and, for messages, a template.

## Before you start

- You are an admin. The page says **Only an admin can change phases.** to everyone else.
- Optional: your WhatsApp templates are approved, for steps that send by themselves. See [Create a message template](../whatsapp/create-message-template.md).
- Optional: your email templates exist, for email steps. See [Create an email template](../email/create-email-template.md).

## How phases work

- **Phase 1** is called **Convert**. It shows the badge **Same for everyone**. Its name, and its existence, are locked.
- Phase 1 starts with one step: **First call**. After it the person chooses **In** or **Out**. See [Work with leads](leads.md).
- Step 1 of Phase 1 is always a **Call**. You cannot change it.
- You can add follow-up steps to Phase 1, up to 6 in all. They can be calls, WhatsApp messages, emails and tasks. Phase 1 cannot have a milestone, and it cannot repeat.
- Every later phase is yours. You choose how many, in which order, and what they are called.
- A phase is complete when its last step is done. The next phase then starts by itself, and its days are counted from that day.

## Steps

### Open the Phases tab

1. Open **CRM** in the left rail, then select **Leads**.
2. Click the **Phases** tab at the top. The page is titled **Phases**, with the line **What happens to every lead, in order.**

    [SCREENSHOT: the Phases tab with Phase 1 and a later phase, and the step grid]

3. Read the row of phases. Each phase shows as **Phase 1, Convert**, **Phase 2, …** and so on. Click one to open it.

The first time you open the tab for an account with no phases, Ohanvi fills in a starting set. See [The starting phases](#the-starting-phases). An account that already had phases keeps them.

### Edit Phase 1

1. Click **Phase 1** in the row of phases. Its name and its first call are locked.
2. To add a follow-up step, click **Add step**. Phase 1 stops at 6 steps.
3. Change a step from step 2 onward: its name, **How**, days, **Time** and template.
4. Click **Save phase**. The message **Phase saved.** appears.

### Add a phase

1. Click **Add phase** at the top right.
2. Type the **Phase name**, for example `Onboarding`.
3. Add the steps. See [Add a step](#add-a-step).
4. Click **Save phase**. The message **Phase saved.** appears.

To change the order, open a phase and click **Move earlier** or **Move later**. Phase 1 stays first.

To delete a phase, open it and click **Delete phase**. The window **Delete "…"?** says customers in the phase move on to the next one, steps that have not run yet are cancelled, and you cannot undo it. Click **Delete phase** to confirm. The message says how many customers moved.

If you leave a phase with changes that are not saved, **Discard your changes?** asks first. Click **Discard changes** on the phase to drop them yourself.

### Add a step

The steps of a phase sit in a grid across the full width. Its columns are **Step**, **How**, **Days after previous step**, **Time** and **Day**.

1. Open the phase and click **Add step**.
2. Type the step name in **Step**, for example `Check the setup`.
3. Pick the channel in **How**:

    | Channel | What the step does |
    | --- | --- |
    | **Call** | Sends a reminder to the owner's phone. The owner makes the call. |
    | **WhatsApp** | Sends a WhatsApp template, or reminds the owner. |
    | **Email** | Sends an email template, or reminds the owner. |
    | **Task** | Rings a to-do on the owner's phone. Nothing is sent to the customer. |
    | **Milestone** | Marks the phase as complete. Nothing is sent. The next phase starts right after it. A milestone can only be the last step of a later phase. |

4. Set **Days after previous step**. For step 1 the label reads **Days after start**. A step counts its days from the step before it. `0` means the same day. The most you can set is 365. **Day** shows the day the step falls on, counted from the start of the phase.
5. Pick the time rule in **Time**. See [Choose the time of a step](#choose-the-time-of-a-step).
6. For a WhatsApp or email step, pick a template. See [Send a step by itself](#send-a-step-by-itself).
7. Click **Save phase**.

To remove a step, click the bin icon, labelled **Remove step N**.

### Choose the time of a step

You rarely type a time. **Time** has two choices:

- **Smart time** — Ohanvi picks the time. This is the default. See [How the call time is chosen](#how-the-call-time-is-chosen).
- **Set time** — you pick a fixed time with **Pick a time**. It then reads **At** and the time, for example **At 14:30**. It replaces the system's choice.

### How the call time is chosen

With **Smart time**, Ohanvi picks each call's time itself. You have no controls for it. The reason for the time is shown on the step.

- Ohanvi learns from the last 30 days of calls and calendar meetings recorded in Ohanvi. Calls made outside Ohanvi are not counted.
- It looks at each owner's day in slots of 15 minutes, from 09:00 to 19:00, in your account's time zone. The default is India Standard Time.
- It skips hours when the owner was mostly busy, or when many calls were cancelled.
- It prefers hours when the owner's calls are usually answered, and the hours when the lead usually picks up. The detail pane shows **Best time to call**.
- One owner never gets two calls in the same slot. Hot leads choose first.
- With no calls or meetings recorded yet, Ohanvi uses a neutral default.
- WhatsApp and email steps are not calls. They go out at the lead's best hour, or at 11:00 when there is none yet.

To choose the time yourself, use **Set time** on the step, or **Call again** on a lead. See [Work with leads](leads.md#call-again).

### Send a step by itself

WhatsApp and email steps can send without you. Nothing sends by itself until an admin picks a template on the step.

1. Open the step and pick a template. The WhatsApp picker reads **Pick an approved WhatsApp template**. The email picker reads **Email template**.
2. Turn on **Send automatically**. The note says the step goes out by itself and you can pause or cancel it on the person.
3. Click **Save phase**.

With **Send automatically** off, you get a reminder with the template ready to send. A step can send by itself only when it has a template.

Calls and tasks never send. They only remind the owner.

Automatic WhatsApp messages always use an approved template, never free text. A template can use two values: `{{1}}` is the lead's first name and `{{2}}` is the owner's name, or "our team" when there is none. A template that needs more cannot send.

Nothing is sent on WhatsApp without consent. A step for a lead with no consent goes as an email instead. A lead with no contact is never messaged on WhatsApp. See [WhatsApp consent](leads.md#whatsapp-consent).

A message is never sent the moment a lead arrives. Each step goes at its own day and time.

### Count a step as the deal won

You can mark one Phase 1 step as the deal-won step. It must be a **Call** or a **Task**, so a person confirms it. A task named **Payment received** is a good example.

1. Open the Phase 1 step.
2. Tick **Counts as deal won when done**. Its hint says that when the step is marked done, the lead converts and the next phase starts.
3. Click **Save phase**.

When the owner marks that step done, the lead converts by itself. Phase 1 completes, the contact is created if it was missing, the deal moves to Won and Phase 2 starts today. On the Leads screen the step shows a trophy. If no step is marked, you convert a lead by hand with **Mark converted**. See [Work with leads](leads.md).

The option shows only on a Phase 1 call or task. Ohanvi refuses to save it on any other step.

### Repeat the last phase forever

The last phase can repeat. This keeps long-term customers in touch.

1. Open the last phase.
2. Turn on **Keep going with no end**. The hint says it is for ongoing care, like a message every 90 days for as long as they stay a customer.
3. In **Then every**, type the number of days, for example 90. Then pick **WhatsApp** or **Email** to send.
4. Pick the template to send each time.
5. Click **Save phase**.

Only the last phase can repeat, and not if it ends in a milestone. The time is picked for you each round. It runs until you stop it on the customer. On a customer's track, the repeat shows as **Repeats**, with **every 90 days** under it.

### The starting phases

Ohanvi fills in these phases the first time you open the tab on an account with no phases. You can change or delete them.

**Phase 1: Convert**

| Step | Channel | Day |
| --- | --- | --- |
| First call | Call | 0 |

**Phase 2: Onboarding**

| Step | Channel | Day |
| --- | --- | --- |
| Setup start | Task | 0 |
| Onboarding call | Call | 2 |
| Check the setup | WhatsApp | 3 |
| Ask for a review | WhatsApp | 4 |
| Done | Milestone | 1 |

**Phase 3: Customer follow-up**

| Step | Channel | Day |
| --- | --- | --- |
| 30-day check-in | Email | 30 |
| 60-day tip | WhatsApp | 30 |
| 90-day offer | Email | 30 |
| Repeat every 90 days | WhatsApp | repeat |

Each day is counted from the step before it.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Couldn't save the phase** | A field needs fixing. The message names the step and field. | Read the message, fix the field and click **Save phase** again. |
| **The first step of the Convert phase is always a call.** | Step 1 of Phase 1 is not a **Call**. | Set **How** to **Call** on step 1. |
| **The Convert phase can have at most 6 steps.** | Phase 1 has more than 6 steps. | Remove extra steps. |
| **A milestone can only be the last step of a phase.** | A milestone sits before the last step. | Move the milestone to the end of the phase. |
| **The Convert phase ends by converting, so it cannot have a milestone.** | A milestone is in Phase 1. | Use a task, or move the milestone to a later phase. |
| **Only the last phase can repeat.** | **Keep going with no end** is on for an earlier phase. | Move the phase to the end, or turn the repeat off. |
| **Pick a template for step N so it can send by itself.** | **Send automatically** is on with no template. | Pick a template, or turn **Send automatically** off. |
| **Only a call or task step of the Convert phase can mark the deal as won.** | **Counts as deal won when done** is on for another step. | Turn it off, or pick a call or task in Phase 1. |
| A WhatsApp step sent an email | The lead has not agreed to WhatsApp messages. | Nothing to fix. See [WhatsApp consent](leads.md#whatsapp-consent). |
| A step is due at a time you did not choose | The step uses **Smart time**. | Switch **Time** to **Set time**. |
| A call lands in a busy hour | Ohanvi sees only calls and meetings recorded in Ohanvi. | Record the meeting in Ohanvi, or use **Set time**. |

## Related

- [Work with leads](leads.md)
- [Manage contacts](manage-contacts.md)
- [Create and manage deals](manage-deals.md)
- [CRM overview](index.md)
