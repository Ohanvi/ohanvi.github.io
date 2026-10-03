---
title: Use WhatsApp Calling
description: Turn on WhatsApp Calling, choose who rings and when, answer and place calls from the inbox, ask for call permission, and save call notes.
---

# Use WhatsApp Calling

Let customers call your WhatsApp number, and call them back from the inbox. At the end, calling is on for your number, the right team members ring, and you can answer, place and take notes on a call. Meta must approve calling for your number first.

## Before you start

- Your WhatsApp number is connected to Ohanvi. See [Connect your WhatsApp number](connect-whatsapp-number.md).
- You can open **Settings** → **WhatsApp** → **Configuration**. See [Edit a WhatsApp configuration](whatsapp-configuration-settings.md).
- Your team is added as WhatsApp agents, if you want only some people to ring. See [Add WhatsApp agents](add-whatsapp-agents.md).
- Your business has Meta Business Verification. See [Complete the Meta checklist](#complete-the-meta-checklist) below.

## How calling works

- **Calls in:** a customer taps the call button in WhatsApp. Your team members ring in Ohanvi.
- **Calls out:** you call from the inbox. Meta lets you call only a customer who has allowed calls.
- **Permission:** a customer allows calls when they tap **Allow** on a call permission request.
- **Hours:** you can accept calls only during business hours, and ring only chosen team members.

Switching **Voice Calling** on in Ohanvi does not change anything at Meta. Complete Meta's side first, or calls fail.

## Steps

### Complete the Meta checklist

Do these steps at Meta. Ohanvi shows the same list under **Before this works: Meta setup checklist**.

1. In Meta Business Manager, complete Business Verification for the business that owns this WhatsApp number.
2. In the Meta App Dashboard, open **WhatsApp** → **Configuration**. Request access to the "Calling" permission for your app.
3. Wait for Meta to approve it. Meta reviews it separately from ordinary messaging permissions.
4. In WhatsApp Manager, open your phone number → **Calling settings**. Turn **Calling** on for this number.
5. In the same **Calling settings**, set **Call icon** visibility to **Enabled**.

!!! note "Call icon"
    **Call icon** decides whether customers see a call button in WhatsApp for your number at all.

### Turn on Voice Calling

1. Click your initials in the bottom-left corner, then click **Settings**.
2. Select **WhatsApp**, then **Configuration**.
3. On your number's card, click **Edit**. **Edit Configuration** opens.
4. Scroll to **Voice Calling** and turn on the switch.
5. Read the **Before this works: Meta setup checklist** card that opens below it. Click its title to collapse it.
6. Set **Call Availability** in the next two tasks. The **Call Availability** section appears only while **Voice Calling** is on.
7. Click **Save Configuration**. The message **Configuration saved successfully.** appears.

### Choose when calls ring

1. Under **Call Availability**, turn on **Only accept calls during business hours**.
2. Click the days your team takes calls: **Mon**, **Tue**, **Wed**, **Thu**, **Fri**, **Sat**, **Sun**.
3. Click **From** and pick the start time.
4. Click **To** and pick the end time.
5. Choose a **Time zone**. The list holds `Asia/Kolkata`, `Asia/Dubai`, `Asia/Singapore`, `Europe/London`, `America/New_York` and `America/Los_Angeles`.
6. Click **Save calling settings**. The message **Calling settings saved.** appears.

Calls outside this window are declined. The customer gets an automatic "sorry we missed you" message, and your team is notified, as for any missed call.

### Choose who rings

1. Under **Call Availability**, turn on **Only ring specific team members**.
2. Click the names of the team members who should take calls. A selected name is highlighted.
3. Check the line under the names. It reads **Only the selected 2 team member(s) will ring for or be notified about a call. Nobody else on the team sees it.**
4. Click **Save calling settings**.

If the list is empty, add your team first. The screen shows **No WhatsApp executives found for this org yet.** See [Add WhatsApp agents](add-whatsapp-agents.md).

!!! warning "Pick at least one person"
    With the switch on and nobody selected, the line turns red: **No one selected yet — calls will have no one to ring until at least one person is picked.**

### Answer a call

1. When a customer calls, the call screen opens and shows **Incoming WhatsApp call**.
2. Click the green phone button to answer. The screen shows **Connecting…**, then a timer in minutes and seconds.
3. To turn your microphone off or on, click the microphone button.
4. To switch the speaker, click the speaker button.
5. To end the call, click the red phone button. **Call ended** appears and the screen closes.
6. To refuse a call before you answer, click the red phone button instead of the green one.

!!! note
    [VERIFY: how the call rings on the mobile app and whether the browser asks to allow the microphone]

### Call a customer from the inbox

1. Open **WhatsApp** in the left rail, then select **Inbox**.
2. Open the conversation with the customer.
3. In the contact panel, click the phone button. Its tooltip reads **WhatsApp Call**.
4. The call screen shows **Calling…**, then **Ringing…**.
5. To stop before the customer answers, click the red phone button.
6. When the customer answers, a timer starts. Use the same buttons as for an incoming call.

The phone button shows only when **Voice Calling** is on and the contact has a phone number. If another call is open, the message **Finish the current call first.** appears.

### Ask a customer to allow calls

If the phone button is grey, hover it. The tooltip reads **Customer has not approved WhatsApp calls yet**. Ask for permission first.

1. Under the phone button, click **Request Call Permission**. The message **Call permission request sent — ask the customer to tap Allow in WhatsApp.** appears.
2. Wait. The text changes to **Call permission requested — waiting for customer**.
3. Ask the customer to tap **Allow** in WhatsApp.
4. When the customer allows, the phone button turns active. Click it to call.

If you click the phone button first and Meta refuses the call, the call screen shows a **Request Call Permission** button. Click it. One of these lines appears:

- **Permission request sent. Ask the customer to tap Allow, then call again.**
- **This customer has already allowed calls — close this and call again.**

Click the close button, then call again after the customer allows.

### Send a Call Permission Request template

Use a template when you want to ask for permission in a message, outside the 24-hour chat window.

1. Open **WhatsApp** in the left rail, then select **Template**.
2. Click **New template**.
3. Choose **Call Permission Request** as the **Template type**. The category is set to **UTILITY** for you.
4. Write the message and click **Save & Submit for Approval**. See [Create a WhatsApp message template](create-message-template.md).

The template carries **Allow** and **Not now** buttons. [VERIFY: the customer sees these two buttons on the sent message]

### Call a contact on your mobile

1. Open a conversation in the inbox.
2. In the conversation header, click the button with the tooltip **Call on Mobile**. [VERIFY: the button's place in the header]
3. Wait for the message **Sent to your mobile app — open it to call**.
4. On your phone, open the Ohanvi app. The **Call from WhatsApp** window shows the contact's name and number.
5. Click **Call** to dial with your phone. Click **Dismiss** to close the window.

### Write call notes

The notes box sits on the call screen. It starts as one line and opens when you type.

1. Click **Add a note about this call…** and type your note during the call.
2. Optional: set a reminder with **Pick date**, **In 1 hour** or **Tomorrow 9am**. For **Pick date**, choose the day under **Remind me on** and the time under **Remind me at**.
3. Click **Save**.

If a reminder cannot be set, the box shows **Reminders need a project — open the task board once to pick one.** Open **Tasks** once and pick a project.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| Calls fail although **Voice Calling** is on. | Calling is not approved or switched on at Meta. | Finish every step in [Complete the Meta checklist](#complete-the-meta-checklist). |
| The phone button is missing in the inbox. | **Voice Calling** is off, or the contact has no phone number. | Turn on **Voice Calling** and save. Check the contact's number. |
| The phone button is grey. | The customer has not allowed calls. | Click **Request Call Permission** and ask the customer to tap **Allow**. |
| **Finish the current call first.** | Another call screen is open. | End or close the open call, then try again. |
| **Could not load calling settings.** | **Call Availability** did not load. | Close **Edit Configuration**, open it again and check your connection. |
| **Could not save calling settings — try again.** | The save did not reach Ohanvi. | Click **Save calling settings** again. |
| **Could not send the call permission request** | The request did not go through. | Try again. Check that your number is connected. |
| Nobody rings for a call. | **Only ring specific team members** is on with nobody selected. | Select at least one person and click **Save calling settings**. |
| The customer gets a "sorry we missed you" message. | The call came outside your business hours. | Change the days and times under **Call Availability**. |

## Related

- [Connect your WhatsApp number](connect-whatsapp-number.md)
- [Edit a WhatsApp configuration](whatsapp-configuration-settings.md)
- [Add WhatsApp agents](add-whatsapp-agents.md)
- [Use the WhatsApp inbox](use-whatsapp-inbox.md)
- [Create a WhatsApp message template](create-message-template.md)
