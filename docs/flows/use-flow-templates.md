---
title: Start a flow from a template
description: Open Start from library, pick a ready-made starter or chatbot template, preview it, and add it to your flows as an editable draft.
---

# Start a flow from a template

Add a ready-made flow to your workspace instead of building it card by card. At the end, you have a copy of a starter or chatbot template in your **Flows** list. You can change every step, then publish it when it is ready.

## Before you start

- You can see **Flows** in the **WhatsApp** panel. To add a flow, your role also needs save access to flows. See [Understand flows and the Flows list](flows-overview-and-list.md).
- For a chatbot template, your WhatsApp number is connected. See [Connect your WhatsApp number](../whatsapp/connect-whatsapp-number.md).
- For a Google starter, you know which Google account, spreadsheet or calendar it should use.

## Starters and chatbot templates

**Start from library** has two lists.

- **Starters** are automation flows. They start on an event, such as a form being submitted.
- **Chatbot templates** are ready-made WhatsApp conversations. Each one has a topic, such as E-commerce or Support.

### Starters

| Starter | What it does |
| --- | --- |
| **Collect a lead on WhatsApp** | When someone says hi, asks their name, phone and address, then saves them as a lead in the CRM. |
| **Add form answers to a Google Sheet** | When a form is submitted, adds a row to a spreadsheet: who, when, and which form. |
| **Book a Google Meet when someone is free** | When a form is submitted, checks the calendar, books a meeting with a Meet link if the slot is free, and sends the link on WhatsApp. |
| **Send an instant Google Meet link** | When a form is submitted, creates a Meet room right away and sends the link on WhatsApp. There is no calendar invite. |
| **Turn Google Form responses into CRM leads** | When your Google Form gets a response, saves the person as a CRM lead and adds the response to a Google Sheet. |
| **Save Google Form responses to Google Contacts** | When your Google Form gets a response, adds the person to Google Contacts, or updates them if they are already there. |
| **Publish everywhere** | When a post is ready, sends it to every channel selected on it, then records how it went. |
| **Only promote big posts** | When a post is ready, checks a condition first and stops quietly if it does not apply. |
| **Give drafts a breather** | When a draft is created, waits a while before doing anything with it. |

### Chatbot templates

Each template is a working conversation. The last column lists what its three main branches cover.

| Template | Topic | Main branches |
| --- | --- | --- |
| **Order Status Checker** | E-commerce, Orders, Tracking | Track Order, Change Address, Cancel Order |
| **FAQ Menu** | Support, FAQ, Self-serve | Instant Answers, Topic Menu, Human Handover |
| **Product Catalog** | Retail, Catalog, Browse | Browse Range, Best Sellers, Shopping Help |
| **Feedback Collector** | Feedback, CSAT, Reviews | Rate Us, Reason Capture, Recover Unhappy |
| **Shipping Update** | E-commerce, Delivery, Logistics | Delivery Status, Order Lookup, Urgent Cases |
| **Return & Refund** | E-commerce, Returns, Refunds | Start Return, Reason Routing, Policy Steps |
| **Table Reservation** | Food, Booking, Dine-in | Pick Slot, Party Size, Confirm Booking |
| **Hotel Check-in** | Hospitality, Check-in, Concierge | Early Check-in, Late Check-out, Airport Pickup |
| **Salon Booking** | Beauty, Booking, Appointments | Pick Service, Choose Day, Confirm Slot |
| **Gym Membership** | Fitness, Membership, Leads | View Plans, Free Trial, Talk to Trainer |
| **Real Estate Inquiry** | Real Estate, Property, Leads | Buy or Rent, Budget Band, Preferred Area |
| **Job Application** | HR, Recruitment, Hiring | Job Roles, Applicant Details, Screening |
| **Event Registration** | Events, RSVP, Registration | Event Details, Attendee Count, Confirm RSVP |
| **Course Enrollment** | Education, Courses, Admissions | Course Picker, Batch Details, Counselling |
| **Insurance Quote** | Finance, Insurance, Quotes | Policy Type, Key Details, Advisor Handover |
| **Bank Balance FAQ** | Finance, Banking, Self-serve | Balance & Timings, Block Card, Other Queries |
| **Tech Support Triage** | Technology, Support, Triage | Report Issue, Device Details, Quick Fix |
| **Warranty Claim** | Retail, Warranty, Service | Product & Date, Issue Details, Claim Registered |
| **Loyalty Rewards** | Retail, Loyalty, Rewards | Points Balance, Redeem Steps, Earning Rules |
| **Abandoned Cart Reminder** | E-commerce, Cart, Recovery | Cart Reminder, Recovery Link, Need Help |
| **Payment Reminder** | Finance, Payments, Collections | Pay Now, Payment Proof, Promised Date |
| **Welcome New Customer** | General, Onboarding, Welcome | Instant Welcome, Start Browsing, Talk to Us |
| **Out of Office** | General, After-hours, Auto-reply | After Hours, Take a Message, Emergency Escalation |
| **Language Selector** | General, Language, Preference | Pick Language, Confirm Choice, Saved on Contact |
| **Store Locator** | Retail, Stores, Locations | Nearest Store, Directions, Call Store |
| **Demo Request** | B2B, Demo, Sales | Book a Slot, Work Email, Pricing Questions |

The library can hold more templates than this list. Your screen shows the ones available to you.

## Steps

### Open the library

1. Open **WhatsApp** in the left rail, then select **Flows**. The **Automation flows** screen opens.
2. Click the arrow (**⌄**) on the right side of **New flow**.
3. Click **Start from library**. The **Start from library** window opens.

### Find a template

1. Type in **Search templates**. The search matches a starter's title and summary. For chatbot templates, it also matches the name, the summary, the topic and the tags.
2. Under **Chatbot templates**, click a topic chip to show only that topic. Click **All** to clear it.
3. If nothing matches, the window says **No starters match your search.** or **No chatbot templates match.**

### Add a starter

1. Under **Starters**, read the title and the line under it.
2. Click **Use**. The button reads **Creating…** while the flow is made.
3. The flow opens in the builder. It is a draft named **Untitled** followed by a number, for example **Untitled 1**.
4. Click the name at the top to rename it. The tooltip is **Rename flow**.
5. Click each step and fill in what is empty. Google starters arrive without a spreadsheet link, meeting window or Google account. Publishing is refused until you fill them in.
6. Click **Save**, then **Publish**. See [Build an automation flow](build-automation-flow.md).

### Preview a chatbot template

1. Under **Chatbot templates**, click **Preview** on a template.
2. Read the steps in order. Each step has a plain label, for example **Message**, **Question with replies**, **Template message**, **Product**, **Product list**, **Pick from a live list**, **Ask for a location**, **Ask for a photo or file**, **Add a tag**, **Call an API**, **Hand over to a person**, **AI reply**, **Condition** or **Continue in another flow**.
3. Read the note at the bottom: **Every step stays editable once it is yours.**
4. Click **Use template** to add it, or **Close** to go back.

If the preview cannot load, the message **Could not load "…".** appears with the template's name.

### Add a chatbot template

1. Under **Chatbot templates**, click **Use template**. The button reads **Adding…**.
2. Ohanvi copies the template into your workspace and opens it as a flow.
3. Set when the chatbot starts. See [Flow Start and triggers](../whatsapp/chatbot-flow-start-and-triggers.md).
4. Replace the sample wording, templates and links with your own. See [Understand the flow builder](../whatsapp/understand-the-flow-builder.md).
5. Click **Run test** or **Test** to try it. See [Test with the chat simulator](../whatsapp/test-a-flow-with-the-chat-simulator.md).
6. Click **Publish**.

!!! warning "A template is a copy"
    The copy is yours. Changing it never changes the library. A chatbot template does not answer customers until you publish it.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **The chatbot templates could not be loaded.** | The library did not answer. | Click **Retry**. |
| **No chatbot templates are available yet.** | Your workspace has no library templates. | Start from a starter, or build a chatbot from scratch. See [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md). |
| **The flow could not be created.** | The copy failed on the server. | Try again. If it fails again, contact support. |
| **Could not load "…".** | The preview of that template failed. | Close the preview and try again. |
| Publishing a Google starter is refused | A spreadsheet link, meeting window or Google account is empty. | Open the step and fill it in. See [Connect an app and use it in a flow](connect-apps-for-flows.md). |

## Related

- [Understand flows and the Flows list](flows-overview-and-list.md)
- [Build an automation flow](build-automation-flow.md)
- [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md)
- [Understand the flow builder](../whatsapp/understand-the-flow-builder.md)
