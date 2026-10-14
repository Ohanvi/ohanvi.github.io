---
title: Send TallyPrime invoices on WhatsApp
description: Download two Windows scripts that send each invoice PDF from a folder to your customer on WhatsApp through the Developer API, once on demand or every 2 minutes.
---

# Send TallyPrime invoices on WhatsApp

Export an invoice PDF from TallyPrime into a folder, and a Windows script sends it to the customer's WhatsApp number as a template message. Sent files move to **Processed**, and files that fail move to **Failed** with the reason in a log.

## Before you start

- Your WhatsApp number is connected to Ohanvi. See [Connect your WhatsApp number](connect-whatsapp-number.md).
- You have a Developer API key. See [Send WhatsApp messages with the Developer APIs](../settings/developer-apis.md).
- You have an approved **Utility** template with a **Document** header, for example `Hello {{1}}, your invoice {{2}} dated {{3}} is attached.` See [Create a WhatsApp message template](create-message-template.md).
- The computer runs Windows 10 or 11 and is online. The scripts use `curl.exe` and PowerShell, which Windows includes.
- Each customer's ledger in TallyPrime has a 10-digit mobile number.

## How it works

| Step | What happens |
| --- | --- |
| 1 | You export the invoice from TallyPrime as a PDF into the **Incoming** folder. |
| 2 | A script reads the customer name, mobile number, invoice number and date from the file name. |
| 3 | The script sends the PDF to Ohanvi with your API key. Ohanvi sends it in the template's **Document** header. |
| 4 | When WhatsApp accepts the message, the file moves to **Processed**. If the name is wrong or the send is refused, it moves to **Failed**. |

The template carries the PDF, so it reaches customers who have not messaged you in the last 24 hours.

## Steps

### Name the PDF

1. In TallyPrime, open the saved invoice.
2. Press **Ctrl+P** (Print) and choose **Save as PDF** [VERIFY: exact label in your TallyPrime version].
3. Type the file name as `ClientName_Mobile_InvoiceNo_DD-MM-YYYY.pdf`, for example `Sanjay_9416388827_2026-27-045_13-10-2026.pdf`.
4. Choose your **Incoming** folder and save.

Follow these rules for the name:

- Use letters, digits and hyphens in each part. No spaces.
- The mobile number is 10 digits and starts with 6, 7, 8 or 9.
- Write the invoice number with `-` instead of `/`, for example `INV-186`.
- Write the date as `DD-MM-YYYY`.

TallyPrime does not build this name by itself. Type it when you save the PDF, and fill in the mobile number from the party's ledger.

### Download the scripts

1. In Ohanvi, click your name, then under **Developer** open **Developer APIs**.
2. Open the **Docs** tab and click **Tally scripts**. A file named `Ohanvi-Tally-WhatsApp-Scripts.zip` downloads.
3. Extract it into a folder on the Windows computer, for example `C:\TallyWhatsApp\`.

The zip has 2 files:

| File | Use |
| --- | --- |
| `tally_run_now.bat` | Double-click to send everything in **Incoming** now. The window stays open and shows the result. |
| `tally_send_invoices.bat` | Runs on a schedule, every 2 minutes. |

Downloads work in the web app only.

### Fill in the settings

1. Right-click each file, click **Edit**, and set the lines under **SETTINGS**. Use the same values in both files.
2. Save the file.

| Setting | What to enter |
| --- | --- |
| `API_BASE_URL` | Already filled with your Ohanvi address. |
| `API_KEY` | Your Developer API key, starting with `wak_`. |
| `TEMPLATE_NAME` | The exact name of your approved template. |
| `TEMPLATE_LANG` | The template's language code, for example `en`. |
| `VAR_ORDER` | Which parts of the file name fill `{{1}}`, `{{2}}` and `{{3}}`, in order. Choose from `CLIENT`, `MOBILE`, `INVOICE`, `DATE`. The default is `CLIENT INVOICE DATE`. The count must match the variables in the template body. |
| `COUNTRY_CODE` | Added before the 10-digit number, for example `91`. |
| `ROOT` | The main folder. The scripts create **Incoming**, **Processed**, **Failed** and **Logs** inside it. The default is `D:\TallyInvoices`. |
| `CHECK_DELIVERY` | `1` waits for WhatsApp to confirm each message. `0` stops once Ohanvi accepts it. |

### Send on demand

1. Put 2 test PDFs in **Incoming**: one named correctly with your own mobile number, and one named wrongly.
2. Double-click `tally_run_now.bat`.
3. Read the result in the window. The correct file moves to **Processed** and the PDF arrives on your WhatsApp. The wrong file moves to **Failed**.

### Send every 2 minutes

1. Click **Start**, type `cmd`, right-click **Command Prompt** and click **Run as administrator**.
2. Run this command. Change the path to where you extracted the files.

    ```
    schtasks /Create /TN "Tally WhatsApp Invoices" /TR "C:\TallyWhatsApp\tally_send_invoices.bat" /SC MINUTE /MO 2 /RU SYSTEM
    ```

3. To stop it, run `schtasks /Delete /TN "Tally WhatsApp Invoices" /F`.

Two runs never overlap. A file that TallyPrime is still writing is skipped and picked up on the next run. If the computer is offline, files stay in **Incoming** and are sent on the next run.

!!! note "Laptops"
    The task does not run while the laptop sleeps. To run it on battery, open the task in **Task Scheduler** and clear **Start the task only if the computer is on AC power** on the **Conditions** tab.

### Fix a failed file

1. Open `Logs\api_log.txt` in the main folder and find the line for the file.
2. Fix the cause, and rename the file if the name was wrong.
3. Move the file from **Failed** back to **Incoming**. The next run sends it again.

The reply Ohanvi gave for each file is saved in `Logs\responses`.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| The log says the file name must be `ClientName_Mobile_...` | The name does not match the pattern. | Rename the file to `ClientName_Mobile_InvoiceNo_DD-MM-YYYY.pdf`. |
| The log says HTTP 400 and mentions the template | The template name is wrong, is not approved, or has no **Document** header. | Check `TEMPLATE_NAME` and the template's status and header. |
| The log says a value is needed for `{{n}}` | `VAR_ORDER` has fewer values than the template body has variables. | List one part of `CLIENT`, `MOBILE`, `INVOICE` or `DATE` for each variable. |
| The log says HTTP 401 or 403 | The API key is wrong, revoked or expired. | Create a new key and paste it into both scripts. |
| The log says HTTP 402 | Pay as you go has used its monthly API messages. | Choose a plan to send more. |
| The log says WhatsApp refused it | WhatsApp rejected the message, for example because the number is not on WhatsApp. | Read the reason in the log line and fix the number. |
| The log says the API is not reachable | The computer is offline or `API_BASE_URL` is wrong. | Check the internet connection. The files stay in **Incoming** and are retried. |
| **Tally scripts** does not download a file | Downloads work in the web app only. | Open Ohanvi in a browser. |

## Related

- [Send WhatsApp messages with the Developer APIs](../settings/developer-apis.md)
- [Create a WhatsApp message template](create-message-template.md)
- [Set up WhatsApp webhooks and integrations](whatsapp-webhooks-and-integrations.md)
