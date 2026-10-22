---
title: Connect Google Workspace
description: Connect Google Sheets, Calendar, Meet, Forms, Contacts, Search Console and Analytics, choose the spreadsheets and forms Ohanvi may open from Google Drive, and disconnect a service or an account.
---

# Connect Google Workspace

Connect your Google account so your flows can add rows to Google Sheets, book Google Calendar events with Meet links, send Google Meet links, start from Google Forms responses and save Google Contacts. You sign in with Google once and turn on only the services you need. Takes about 5 minutes.

## Before you start

- You can see **Google Workspace** in the **Connect** panel. This screen is for admins by default. If you do not see it, ask your admin.
- You know which Google account owns the sheets, calendar, forms or contacts you want to use.
- Your browser allows pop-ups for Ohanvi. Google sign-in and **Choose from Google Drive** open in a pop-up.
- To choose a spreadsheet or form from Google Drive, you use Ohanvi on the web. A file you choose there also works in the mobile app.

## What each service asks Google for

Each service has its own card and its own permission, so you can turn on Calendar without Sheets.

| Service | What Google shows you | What Ohanvi uses it for |
| --- | --- | --- |
| **Google Sheets** and **Google Forms** | **See, edit, create and delete only the specific Google Drive files that you use with this app** | Opening the spreadsheets and forms you choose for Ohanvi, and the spreadsheets Ohanvi creates for you. |
| **Google Calendar** | View and edit events on your calendars, see your list of calendars, and see when people are free | Checking who is free, then creating, moving or cancelling an event. |
| **Google Meet** | Create Google Meet meetings, and see only the meetings Ohanvi created | Sending an instant meeting link. |
| **Google Contacts** | See and edit your contacts | Importing the contacts you choose, finding a contact from a flow, and the **Save to Google Contacts** step. |
| **Google Search Console** | View Search Console data for your verified sites | Reading clicks, rankings, sitemaps and index status. See [Connect Google Search Console](connect-google-search-console.md). |
| **Google Analytics** | See and download your Google Analytics data | Reading visitors, traffic sources, pages, key events and revenue for the properties you link. See [Connect Google Analytics](connect-google-analytics.md). |

## Which files Ohanvi can open

Ohanvi cannot see, list or open your Google Drive. It opens only two kinds of file:

| File | What you do |
| --- | --- |
| A spreadsheet Ohanvi created, from **Create a spreadsheet** or the **Create spreadsheet** flow step | Nothing. Ohanvi can use it straight away. |
| A spreadsheet or form you already have | Choose it once with **Choose from Google Drive**. |

After you choose a file, flows and imports can use it at any hour, even when nobody is signed in, until you remove Ohanvi from your Google account. A file you did not choose stays closed to Ohanvi, even if your Google account can open it.

## Steps

### Open the Google Workspace screen

1. Open **Connect** in the left rail, then select **Google Workspace** under **Connectors**.
2. Read the cards. Each one shows its state, for example **Ready**, **Needs permission** or **Not connected**. **In flows** says what the service can do in a flow, for example **Add a row · Read rows · Create a spreadsheet** for Google Sheets.
3. Read **Google accounts** at the bottom. It lists every Google account you connected.

### Connect a Google service

1. On the card you need, click its button, for example **Connect Google Sheets**. To allow every service at once, click **Connect Google** at the top instead.
2. In the Google window, choose your Google account.
3. Read the permissions Google lists and click **Continue**.
4. Back in Ohanvi, the card reads **Ready** and the account is listed under **Google accounts**.

To connect a second Google account, click **Add Google account** at the top.

Google Analytics is not part of **Connect Google** or **Add Google account**. Google asks for it only from the **Google Analytics** card: click **Connect Google Analytics**, or **Grant Analytics access** when the account is already connected. See [Connect Google Analytics](connect-google-analytics.md).

### Choose a spreadsheet from Google Drive

1. On the **Google Sheets** card, click **Open**.
2. Under **Open an existing spreadsheet**, click **Choose from Google Drive**.
3. If Google asks, choose the same Google account and allow access. The pop-up closes by itself.
4. In the Google window, select the spreadsheet and click **Select**.
5. Ohanvi opens the spreadsheet and lists its tabs. A chip with its name appears under the box, so you can open it again in one click.

To jump straight to a sheet, paste its link in the box first, for example `https://docs.google.com/spreadsheets/d/…/edit`. Then click **Choose from Google Drive**. The Google window opens on that sheet, so you only click **Select**.

!!! note "Choose each existing sheet once"
    A sheet you only paste, without choosing it from Google Drive, cannot be opened. The message reads **Ohanvi can't open this spreadsheet yet.**

### Create a spreadsheet

1. On the **Google Sheets** card, click **Open**.
2. Under **Create a spreadsheet**, type a name, for example `Q3 pipeline export`.
3. Click **Create**. Ohanvi opens the new spreadsheet.

The spreadsheet is saved in your Google Drive. Ohanvi can use it at once, so you do not choose it from Google Drive.

### Choose a Google Form

1. On the **Google Forms** card, click **Open**.
2. Under **Open a form**, click **Choose from Google Drive**.
3. In the Google window, select the form and click **Select**. Ohanvi shows its questions and latest responses.

To jump straight to a form, paste its edit link first, for example `https://docs.google.com/forms/d/…/edit`. Use the link from the address bar while you edit the form, not the **Send** link.

To start a flow from new responses, see [Start a flow when a Google Form gets an answer](../whatsapp/flow-google-workspace-steps.md#start-a-flow-when-a-google-form-gets-an-answer).

### Allow a service you skipped

1. Find the card that reads **Needs permission**. The account is connected but has not allowed this service.
2. Click its grant button, for example **Grant Sheets access**.
3. In the Google window, allow the service. Google asks only for this service, and the permissions the account already gave are kept.

### Disconnect one service

1. On the service's card, click **Disconnect**.
2. In **Disconnect Google Sheets?**, click **Disconnect**. The account's other Google services keep working.
3. To use the service again, click **Connect Google Sheets** on its card.

### Manage a connected account

1. Under **Google accounts**, click **Test connection** on the account to check that Google still accepts it.
2. Open the account's menu to change it:
    - **Make default**: flows and screens use this account when you do not choose one.
    - **Rename**: change the name shown in Ohanvi.
    - **Reconnect**: sign in again after access was revoked or expired.
    - **Disconnect**: Ohanvi removes its access at Google. Every service of this account stops.
    - **Remove account**: take the account off the list.
3. Confirm in the window that opens.

Data already in Ohanvi, such as imported contacts and finished flow runs, stays after you disconnect or remove an account. You can also remove Ohanvi's access from your Google account at myaccount.google.com/permissions.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Ohanvi can't open this spreadsheet yet.** or **Ohanvi can't open this form yet.** | The file was never chosen for Ohanvi. This includes sheets and forms linked before October 2026. | Click **Choose from Google Drive** and select the file while signed in as the account named in the message. |
| It still fails after you choose the file. | The file is not shared with that Google account, or the link is wrong. | Share the file with the account, or connect the account that owns it. |
| A card reads **Needs permission**. | The account has not allowed that service. Accounts connected before October 2026 see this once for Sheets and Forms. | Click the grant button on the card, for example **Grant Sheets access**. |
| A card reads **Reconnect needed**. | Google access was revoked or expired. | Click **Reconnect** and sign in again. |
| **Google sign-in was blocked. Allow pop-ups for this site and try again.** | Your browser blocked the Google pop-up. | Allow pop-ups for Ohanvi, then click **Choose from Google Drive** again. |
| **Choosing a file from Google Drive works in Ohanvi on the web.** | You are in the mobile app. | Choose the file once in Ohanvi on the web. It then works in the mobile app too. |
| A card reads **Not enabled on server**. | The service is switched off for your workspace. | Contact Ohanvi support. |

## Related

- [Connect Google Search Console](connect-google-search-console.md)
- [Connect Google Analytics](connect-google-analytics.md)
- [Add Google Sheets, Calendar, Meet and Contacts steps to a flow](../whatsapp/flow-google-workspace-steps.md)
- [Connect an app and use it in a flow](../flows/connect-apps-for-flows.md)
- [Use flow templates](../flows/use-flow-templates.md)
- [Connect Zapier](connect-zapier.md)
