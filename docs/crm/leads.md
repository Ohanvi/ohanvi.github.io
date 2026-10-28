---
title: Work with leads
description: Every new person starts as a lead. Make the first call, choose In or Out, follow the plan, and convert the lead into a customer with a deal.
---

# Work with leads

Every new person in Ohanvi starts as a lead. You call first, then choose **In** or **Out**. A person who is **In** becomes a contact and gets a deal. When they buy, you mark them converted and their customer phases start.

## Before you start

- You can see **CRM** in the left rail with **Leads** in its panel. If not, ask your admin to give your role access to CRM leads. See the [Settings overview](../settings/index.md).
- Optional: your phases are set up. Phase 1 is ready for everyone. See [Build lead phases and steps](lead-phases.md).
- Optional: your WhatsApp number is connected and your templates are approved, for steps that send by themselves. Nothing sends by itself until an admin picks a template on the step.
- Optional: the Ohanvi app is on your phone, if you want calls placed from your computer to ring there.

## How a lead moves

1. A person arrives as a lead.
2. The first step is always a call: **First call**.
3. After the call you choose **In** (our customer) or **Out** (not our customer).
4. **In** makes the person a contact and opens a deal. Any steps your admin added to Phase 1 then run.
5. **Mark converted** completes Phase 1, moves the deal to Won and starts Phase 2 today.
6. **Lost: not interested** ends the plan and moves the deal to Lost, with a reason.

## Steps

### Add or bring in leads

Leads arrive from these places:

- **Add lead** on the **Leads** screen.
- **Import** on the **Leads** screen. See [Import leads and deals](import-leads-and-deals.md).
- A person who messages your WhatsApp number for the first time, when no contact or lead exists for that number. It shows as a **WhatsApp lead** until you know the name.
- A shopper who abandons a checkout in a connected Shopify or WooCommerce store.
- A person who fills in one of your forms.
- Leads from ads. [VERIFY: whether ad leads start in this flow]

The first time anyone opens **Leads**, the open leads you already have are added to the plan. Completed, lost and unqualified leads are not added, and contacts are not added.

Before a lead is created, Ohanvi checks the phone number, then the email. If the person is already a contact, no lead is created. A note is added to that contact and its owner is told.

To add a lead by hand:

1. Open **CRM** in the left rail, then select **Leads**.
2. Click **Add lead** at the top right. The **Add Lead** form opens.
3. Type the **First Name**. It is the only required field.
4. Fill in what you know: **Last Name**, **Company**, **Email**, **Phone**, **Lead Source** and **Rating**.
5. Click **Submit**. The message **Lead created** appears. The new lead shows under **Just arrived**.

A person you add in **Contacts** is added as a contact and their follow-ups start. An import into Contacts adds contacts and starts no follow-ups. See [Manage contacts](manage-contacts.md#what-add-contact-does-with-follow-ups) and [Import and sync contacts](import-and-sync-contacts.md#imports-and-follow-ups). WhatsApp and Email marketing contact adds are not affected.

!!! warning "Import only people who agreed to WhatsApp messages"
    A contact added by a team member, or created by **In**, counts as opted in for automatic WhatsApp. A lead with no contact is never messaged on WhatsApp. Import only people who agreed to hear from you on WhatsApp.

### Read the Leads screen

1. Open **CRM** in the left rail, then select **Leads**.

    [SCREENSHOT: the Leads screen with the Leads and Phases tabs, the filter tabs, Just arrived, two lead rows with their phase tracks and the detail pane]

2. Use the two tabs at the top: **Leads** and **Phases**. This guide covers **Leads**. See [Build lead phases and steps](lead-phases.md) for **Phases**.
3. Use the tabs above the list. Each tab shows its count, for example **Due today (3)**:
    - **Due today** — leads with a call or message due today.
    - **All active** — every lead still being followed.
    - **Contacts** — leads you chose **In** for.
    - **Converted** — leads that became customers.
    - **Lost** — leads that said they are not interested.
    - **Ignored** — leads you chose **Out** for.
4. Click **All sources** to show one source only. Type in **Search leads** to find a person.
5. Click **Import** or **Export** at the right of the toolbar.
6. Read the **Just arrived** strip at the top. It lists leads nobody has called yet. Click **Call now** on a row to place the call and open that lead.
7. Click a lead in the list. Its details open on the right. On a phone-sized window, the lead opens full width. Click **Back to leads** to return.
8. When the list is long, the line **Showing N of M** and the button **Load more** bring in the next leads.

Each row shows the name, the source and the owner. A coloured pill at the right says where the lead stands:

| Pill | What it means |
| --- | --- |
| **Due today** | A step is due today. |
| **Overdue** | A step is late. |
| **Next** with a day | The next step is on that day. |
| **Waiting** | No step is due yet. |
| **Waiting for you** | A contact with no steps left. Mark converted when the deal is done, or Lost. The plan stays on until you do. |
| **Paused** | The plan is paused. Nothing is sent. |
| **Replied, your turn** | The lead wrote to you. The plan has stopped. |
| **All steps used** | Every step ran and the lead has not converted. |
| **Converted**, **Lost**, **Ignored**, **Stopped** | The lead is closed. |
| **Nurture** | The lead is in the Nurture state. It is not closed and not Lost. Nothing is sent to it. |

Under the name you also see **Lead** or **Contact**, and a score of **Hot**, **Warm** or **Cooling**. **No WhatsApp consent** shows when the lead never agreed to WhatsApp messages.

### Read the phase track

Each row carries a track that shows the whole journey on one line.

1. Read the track from the left. **Came from** shows the source and the day the lead arrived.
2. Completed phases show as green dots with the day they finished, for example **Done 28 Oct**.
3. The current phase shows one dot per step. Under each dot you see when it is due, or what happened. That reads **Done**, **No answer**, **Sent automatically**, **Cancelled**, **Paused** or a late count such as **2d late**.
4. A line under a dot tells you how the step runs. **Reminder** is a call or task. **Sends by itself** is an automatic message. **Email instead** means WhatsApp is blocked. **Set by you** is a call time you chose.
5. A trophy on a dot means finishing that step counts as the deal won.
6. Dashed dots at the right are the phases still to come, with the day they start.
7. Point at the active step. A small card opens with the actions for that step. It also opens when you tab to the dot or tap it.

The detail pane shows the same plan as a list. It also shows **Came from**, **Details**, **Owner**, **Added**, **WhatsApp** and **Best time to call**, a **Next best action** card and, once a deal exists, a chip such as **Deal · Proposal · ₹25,000**.

### Make the first call

The first step of Phase 1 is always a call. It is the same for everyone and you cannot remove it.

1. Open the lead. The **Next best action** card says when to call, for example **Call around 11:00**, and why.
2. Click the call icon beside the call step in the detail pane, or **Call now** on the **Just arrived** strip.
3. On a computer, the call goes to your phone. The message **Calling from your phone** appears, and your phone dials. If the app is closed, you see **Open the Ohanvi app on your phone first.** The icon is named **Call on Mobile**.
4. On a phone, Ohanvi dials directly.
5. On a phone, when you return to the app it asks **How did the call with … go?** Choose **Picked up** or **No answer**, add a **Note (optional)** and click **Save**. The message **Call saved.** appears. The call is saved on the lead. Click **Skip** to save nothing.
6. Choose **In** or **Out**. The lead stays on the first step until you do.

If your role cannot see the number, you get **Your role cannot see this number, so the call cannot be placed.**

Ohanvi picks the call time for you. See [How the call time is chosen](lead-phases.md#how-the-call-time-is-chosen).

### Call again

Use **Call again** when the person asks you to ring later. It is on any call step.

1. Click the calendar-clock icon beside the call step in the detail pane, or **Call again** in the step's card on the track. The window **Call … again** opens.
2. Pick the **Day** and the **Time**. Times are in your account's time zone.
3. Optional: type a **Note (optional)**.
4. Click **Remind me then**. The message **We will remind you on …** appears.

The step now shows **Set by you** with a pin. Ohanvi never moves a time you set, and you are reminded at that moment. The time must be at least a minute ahead and within 365 days. Otherwise the window says **Pick a time in the future.** or **Pick a day within the next 365 days.** The same request twice makes no second change. A remark **Call again on …** is added to the lead.

For tomorrow at the same time, use **Did not pick up: call again tomorrow** instead.

### Decide after the first call

Point at the first step's dot, or use the buttons under **Decide after the first call** in the detail pane. Two words decide the lead:

- **In** — our kind of customer. Ohanvi creates the contact, or links the one you already have. The first step is marked done and the lead is **Qualified**. A deal opens. The message **In. Made a contact.** appears.
- **Out** — not our customer. The window **Ignore …?** asks you to confirm. Click **Ignore**. No contact is created, no deal opens and no step runs. The lead moves to the **Ignored** tab.

If nobody picked up, click **Did not pick up: call again tomorrow**. Ohanvi adds one day to every pending step and writes the remark **Did not pick up**.

For a lead you can already tell is sold, use **Mark converted**. See [Convert a lead](#convert-a-lead).

### Add a remark

1. Click **Add a remark** on a step, or in the detail pane. The box shows **Remark on** and the step name.
2. Type what happened in **What happened? What did they say?**.
3. Click **Save remark**. The message **Remark saved.** appears.

Remarks list under **Remarks** with the step, the author and the date.

### Follow up on later steps

Phase 1 holds only **First call** unless an admin adds steps. Later steps are calls, WhatsApp messages, emails and tasks. Calls and tasks remind you. WhatsApp and email steps send by themselves only when an admin picked a template and turned on **Send automatically** for the step. Use these actions on the active step:

- **Mark this step done** — the step is finished and the plan moves on.
- **Cancel this step** — the step is skipped.
- **Call again** — see [Call again](#call-again).
- **Pause plan** — nothing is sent and no reminder rings. Click **Resume plan** to continue.
- **Push remaining steps by 1 day** — every pending step moves one day later.
- **Send now** — an automatic step goes out at once. It shows only on a step that sends by itself.
- **Mark converted** — see [Convert a lead](#convert-a-lead).
- **Lost: not interested** — see [Mark a lead as lost](#mark-a-lead-as-lost).

A message is never sent the moment a lead arrives. Each step goes at its own day and time.

### Mark a lead as lost

Use **Lost: not interested** on any step after the first call, when the lead says they are not interested.

1. Point at the active step and click **Lost: not interested**. The window **Mark … as lost?** opens. It says no more follow-ups will run.
2. Optional: pick why. The choices are **Price**, **Chose a competitor**, **No budget**, **No decision**, **Bad timing** and **Other**. Click a choice again to clear it.
3. Optional: type a one-line **Note (optional)**.
4. Click **Mark lost**. The message **Marked lost. No more follow-ups will run.** appears.

The lead status becomes **Lost**. Every pending step is cancelled and nothing more is sent. The lead shows in the **Lost** tab. If the lead has a deal, it moves to the lost stage with your reason. See [What happens to the deal](#what-happens-to-the-deal).

!!! note "Lost and Out are different"
    **Out** is only for the first call: the person is not your kind of customer, and no contact is created. **Lost** is for a person who was a right customer and said no.

### Convert a lead

Use **Mark converted** on any step when the lead buys.

1. Point at the active step and click **Mark converted**. The window **Mark … as converted?** opens. It says the next phase starts today.
2. Optional: type the **Deal value (optional)**. If you leave it empty, the deal keeps its value.
3. Click **Mark converted**. The message **Converted. The next phase starts today.** appears.
4. Check the lead. It now shows in the **Converted** tab.

When a lead converts, Ohanvi does all of this at once:

- Every pending Phase 1 step is cancelled, and Phase 1 is complete.
- The contact is created if the lead had none.
- The lead is kept, marked **Converted**, with its history.
- Phase 2 starts today. Its steps are dated from today.
- The deal moves to **Won**. See [What happens to the deal](#what-happens-to-the-deal).

Your admin can also mark one Phase 1 call or task as the deal-won step, for example a task named **Payment received**. When you mark that step done, the lead converts by itself. See [Count a step as the deal won](lead-phases.md#count-a-step-as-the-deal-won).

!!! warning "Converting is one-way"
    A converted lead becomes a customer, never a lead again. It can no longer change status.

### Follow converted people through the phases

People you converted stay in the **Converted** tab. Their row shows the later phases, such as **Onboarding**, as a phase track.

1. Click the **Converted** chip, then a person.
2. Read the track. The current phase shows one dot per step.
3. Use the actions on the current step: **Add a remark**, **Call again** on a call step, **Mark this step done** and **Cancel this step**. If the plan is paused, **Resume plan**.
4. When the last step of a phase is done or cancelled, the next phase starts by itself, dated from that day.

The last phase can repeat forever. A person on the last phase is never finished. Converted people are customers, not deals. Their steps never change a deal. If an admin deletes a phase, the people in it move to the next phase.

### Let a reply stop the plan

A WhatsApp reply from the lead stops the plan, so a scheduled message never goes out on top of a chat. This is built in.

1. When the lead sends a WhatsApp message, the plan pauses. You get a notification, for example **Priya replied, your turn**.
2. Open the lead. The pill says **Replied, your turn**. The card shows what they wrote and how long ago. If the 24-hour chat window is open, it shows the hours left.
3. Answer the lead.
4. Click **I have replied, resume the plan**.

Only a WhatsApp reply pauses the plan. A booked meeting does not pause it yet.

If a lead has no action for 3 days, the **Next best action** card says **This lead is going cold**. Click **Give to someone else** and type the new owner's username in **Their username**. Ohanvi never reassigns a lead by itself.

### WhatsApp consent

Nothing goes out on WhatsApp without permission.

- A lead or contact must have agreed to WhatsApp messages, and must not be excluded from broadcasts.
- The lead's details show the state in **WhatsApp**: **No consent yet. We cannot message them on WhatsApp.**, **Opted in. Chat window open for N more hours.** or **Opted in. Window closed, so approved templates only.**
- A WhatsApp step for a lead with no consent goes as an email instead. The row shows **No WhatsApp consent** and the step shows **Email instead**. The **Next best action** card says **WhatsApp is blocked for this lead**.
- Automatic messages always use an approved template, never free text.
- A template can use two values. `{{1}}` is the lead's first name. `{{2}}` is the owner's name, or "our team" when there is none. A template that needs more cannot send.
- Calls and tasks only remind the owner. They never send.

See [Track contact consent](consent-and-compliance.md) to read or change a person's consent.

### What happens to the deal

A deal follows the lead, so the sale is tracked from the first call.

| Decision | What happens to the deal |
| --- | --- |
| **In** | One deal opens for the lead, in your default pipeline and its first open stage. Its value is 0 until you set one. |
| **Mark converted** or the deal-won step | The deal moves to the won stage. |
| **Lost: not interested** after **In** | The deal moves to the lost stage with the reason you picked. |
| **Out**, or lost before **In** | No deal is created. |
| **Pause plan**, **Cancel this step**, **Mark this step done** and the other actions | The deal does not change. |

Details of the deal:

- The deal is named after the lead and its source, for example `Priya Nair - WhatsApp`. The owner is the lead's owner.
- You type the real value in **Deal value (optional)** when you click **Mark converted**.
- The expected close date is the day of the last pending Phase 1 step. If there is none, it is 14 days from today.
- Ohanvi never opens a second deal for the same lead.
- If your account has no pipeline, no deal is created and you see a warning. Your decision still works.
- On **Mark lost**, the reason you pick is saved on the deal, with your note.
- A person added in **Contacts** gets no deal. When you later click **Mark converted**, Ohanvi creates the deal straight in the won stage.

To work the deal itself, see [Create and manage deals](manage-deals.md).

### The Nurture state

A lead may show **Nurture**. It is not closed and not Lost. Ohanvi sends nothing to a lead in Nurture. You can still mark it lost.

### Follow up on your phone

On the phone CRM, the **Leads** tab is your follow-up list.

1. Open the CRM and select the **Leads** tab.
2. Use the same tabs as on the web, with their counts: **Due today**, **All active**, **Contacts**, **Converted**, **Lost** and **Ignored**. **Due today** is your list for the day. Type in **Search leads** to find a person. Pull down to refresh. Tap **Load more** for the next leads.
3. Read a lead's card. It shows the name and the next step as **Next:** and the step's name.
4. Tap **Call** to dial. After the call, choose **Picked up** or **No answer**, add a note and tap **Save**. Tap **WhatsApp** to open the chat. **WhatsApp** shows only for a lead who agreed to WhatsApp messages and whose number your role can see. Tap **Done** to mark the step done. Tap **More** for the other actions, including **Call again**.
5. Tap the card to open the lead. You see the **Next best action** card, the plan, the **Remarks**, and the same buttons as on the web. **Call again** opens a sheet with the day, the time and a note. Lost asks for the reason, and converted asks for the **Deal value (optional)**.

If your role cannot see the number, you get **Your role cannot see this number, so the dialler cannot open.** If the phone has no dialer, you get **No dialler available on this device.**

**Reminders.** A call or task step sends a push notification at its time, including the moment you chose with **Call again**. Tap the notification. The CRM opens on **Leads** with that lead on top.

**Call from a reminder.** A call reminder can also open the window **Call from CRM** with the lead's name and number. Tap **Call** to dial, or **Open lead** to read the lead first. After the call, the app asks how it went.

### Follow up on abandoned carts

Shoppers who leave your Shopify or WooCommerce store without paying also arrive as leads. They have their own screen and steps. See [Recover abandoned carts with Commerce leads](recover-abandoned-carts.md).

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| A lead I added is not on the list | The phone or email already belongs to a contact. Ohanvi adds a note to that contact instead. | Open the contact in **All contacts** and read its notes. |
| **Open the Ohanvi app on your phone first.** | Your phone has no active Ohanvi app to receive the call. | Open the Ohanvi app on your phone, then click the call icon again. |
| **Your role cannot see this number, so the call cannot be placed.** | Your role sees masked numbers. | Ask your admin for a role that sees phone numbers. |
| **Could not open the dialer on this device.** | This device has no dialer. | Call from your phone, then open the lead and decide. |
| **Pick a time in the future.** | The **Call again** time is less than a minute ahead. | Pick a later time. |
| **WhatsApp is blocked for this lead** | The lead never agreed to WhatsApp messages. The step goes as an email. | Nothing to do. To use WhatsApp, record their consent. See [Track contact consent](consent-and-compliance.md). |
| **Replied, your turn** and no message goes out | A reply paused the plan. | Answer the lead, then click **I have replied, resume the plan**. |
| **Couldn't load your leads** | The list did not load. | Click **Retry**. |
| **All steps used** | Every step ran and the lead did not convert. | Mark the lead lost, or add a remark and decide. |
| **Waiting for you** | The contact has no steps left. The plan stays on. | Click **Mark converted** or **Lost: not interested** when the deal is decided. |
| A converted lead has no deal | The person was added in **Contacts**, or the account has no pipeline. | Nothing to fix. Marking converted creates a won deal when a pipeline exists. |
| A step did not send by itself | No template is set on the step, or **Send automatically** is off. | Ask an admin to pick a template and turn on **Send automatically**. See [Send a step by itself](lead-phases.md#send-a-step-by-itself). |

## Related

- [Build lead phases and steps](lead-phases.md)
- [Manage contacts](manage-contacts.md)
- [Import leads and deals](import-leads-and-deals.md)
- [Create and manage deals](manage-deals.md)
- [Manage lead sources and see which ones convert](manage-lead-sources.md)
- [CRM overview](index.md)
