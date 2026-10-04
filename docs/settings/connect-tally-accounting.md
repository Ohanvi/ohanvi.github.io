---
title: Connect Tally accounting
description: Connect Tally to Ohanvi, pick a company, preview what will change with a dry run, and keep ledgers, parties, items and vouchers in sync.
---

# Connect Tally accounting

Connect Tally from **Accounting ERP** to keep your ledgers, parties, items and vouchers in sync with Ohanvi. You connect, choose a company, run a dry run to preview changes, then sync. Takes about 20 minutes for the first connection.

## Before you start

- You can open **Integrations** in **Settings**. If **Accounting ERP** is missing, ask an admin to switch on Accounting ERP for your organisation.
- Tally is installed and the company you want to sync is open in it.
- You know how Ohanvi will reach Tally:
    - **Direct:** Tally is open with its HTTP server turned on, and you know its address.
    - **Bridge:** Tally is not reachable over the network. You install a small bridge agent on the computer that runs Tally.

## Words you will see

| Word | Meaning |
| --- | --- |
| **Connection** | One saved link between Ohanvi and one Tally company. |
| **Bridge** | A small agent on the Tally computer. It reaches Tally locally, so Tally never has to be on the internet. |
| **Dry run** | A sync that writes nothing. It only shows what would change. |
| **Sync now** | A real sync that writes the changes. |
| **Run** | One sync, with counts for **Fetched**, **Created**, **Updated**, **Conflicts** and **Errors**. |
| **Mapping** | Matching Tally's ledger groups, voucher types, units and godowns to Ohanvi codes. |

## Steps

### Open Accounting ERP

1. Click your initials in the bottom-left corner, then click **Settings**.
2. In the left list, under **Workspace**, select **Integrations**.
3. Under **Connectors**, click **Accounting ERP**. The **Accounting ERP** page opens.
4. Read the line under the title. It says to connect Tally and keep ledgers, parties, items and vouchers in sync.
5. Find your provider card. It shows **Set up** or a count such as **1 connected**. BUSY's card opens its WhatsApp setup instead. See [Set up WhatsApp webhooks and integrations](../whatsapp/whatsapp-webhooks-and-integrations.md).

### Connect Tally

1. Click **Connect ERP**, or click **Connect** on the Tally card. The connect wizard opens. Its steps are **Provider**, **Transport**, **Test**, **Company**, **Scope** and **Done**.
2. On **Provider**, under **Which accounting system do you use?**, choose Tally. A provider marked **Coming soon** cannot be chosen yet. Click **Continue**.
3. On **Transport**, type a **Connection name**, for example `Head office Tally`. It is shown on the hub.
4. Under **How should we reach** Tally **?**, choose a chip, such as **HTTP** or **Bridge**.
5. For a direct connection, fill in the fields shown. Fields marked with an asterisk are required. For example, the address and port of Tally's HTTP server. The field names are supplied for each provider.
6. For a bridge, follow **Add a bridge** below, then pick it in the list. The list shows each bridge's **Heartbeat**.
7. Click **Continue**.

### Add a bridge

1. In the connect wizard, click **Add bridge**. You can also click **Add bridge** next to **Bridges** on the hub page.
2. In **Name this computer**, type a name, for example `Office PC`. It is required.
3. Install the bridge on the Tally computer. Click **Download bridge**.
4. When the bridge asks, enter the code shown in the window. The code is shown only once. Click the copy icon to copy it. The window shows **Valid until** a time.
5. Watch **Bridge status**. It reads **Waiting for the bridge…** until the bridge connects.
6. Keep Tally open on that computer.

### Test the connection

1. On **Test**, read the line under the heading. For a bridge it says Ohanvi will save the connection and ask the bridge to reach Tally, and Tally must be open on that computer. For a direct connection it says Ohanvi will call Tally at the address you gave, and Tally must be open with its HTTP server turned on.
2. Click **Test connection**.
3. If it works, the result says **Connected** and shows the version, the response time and **companies visible**.
4. If it fails, the result says **Could not reach the ERP**. Fix the cause and click **Test again**.
5. Click **Continue**.

### Choose the company

1. On **Company**, read **Which company should this connection sync?** Each company shows its **GSTIN**, **Books from** date or financial year start.
2. Click the company you want.
3. If the list says **No companies found**, open the company in Tally. Then click **Ask Tally again**.
4. Click **Continue**.

### Choose what to sync

1. On **Scope**, under **What to sync**, tick each record type to bring in, such as ledgers, parties, items or vouchers.
2. Under **Voucher types**, tick the voucher types you want. None ticked means every voucher type.
3. Set **Direction** if the choice is offered.
4. In **Sync mode**, choose how to sync. If you choose **Automatic**, type **Every (minutes)**.
5. In **When both sides changed**, choose how to settle a conflict.
6. Turn on **Apply master changes automatically** if you want ledgers, parties and items applied without a preview. Vouchers always wait for a dry-run review.
7. Click **Save and finish**.
8. On **Done**, read **Connection name is ready**. It says to start with a dry run to preview what will change before anything is written. Click **Open connection**.

### Run a dry run

1. On the connection page, click **Dry run**. You can also use **More actions** and choose **Dry run**.
2. Open the **Runs** tab. The new run shows **Running — this page updates by itself.**
3. When it finishes, the message **Dry run ready for review** appears. It says nothing has been written yet.
4. Read the counts: **Fetched**, **Staged**, **Created**, **Updated**, **Skipped**, **Conflicts**, **Errors** and **Pushed**. The table **By record type** breaks them down.
5. Click **Preview & apply** to read each change.
6. Apply the changes if they look right.

If the page says the accounting adapter is not installed on this server, you can read the preview but not apply it. Contact support.

### Map codes

1. On the connection page, open the **Mapping** tab.
2. If it says **Nothing to map yet**, run a dry run first. The ledger groups, voucher types, units and godowns appear after they are fetched.
3. Read the badge **unmapped** with a number. A row marked **Unmapped** needs an Ohanvi code.
4. Type the **Ohanvi code** for each row, or click **Auto-map by name** to fill the empty ones by matching names. The message **Unmapped keys filled by name.** appears.
5. Click **Save** with the number of changes. The message **Mapping saved.** appears. Click **Discard** to drop your edits.

### Change sync settings

1. Open the **Sync settings** tab.
2. Change the fields, as in **Choose what to sync**.
3. Click **Save settings**. The message **Sync settings saved.** appears. Click **Discard** to drop your edits.

### Sync for real

1. On the connection page, click **Sync now**.
2. Watch the **Runs** tab. Open the run to read it. The cards show **Last run**, **Fetched**, **Created**, **Updated**, **Conflicts** and **Errors**.
3. If **Conflicts** is above 0, the card says **Review in the run**. Open the run and review them.

### Fix sync errors

1. Open the **Errors** tab. Filter by status in the list at the top, starting with **All**.
2. Each row shows the record, the error code and the message.
3. Click **Resolve** on a row.
4. Choose an action: **Retry**, **Skip**, **Apply theirs** or **Keep ours**.
5. Optional: add a note. Confirm. The message **Error updated.** appears and the row shows your note.
6. If the tab says **No errors**, nothing needs attention.

### Change the company

1. Open the **Companies** tab.
2. Click **Ask the ERP again** to refresh the list. The message **Company list refreshed.** appears.
3. On another company, click **Use this company**. The message says that company is selected. The chosen one shows **Selected**.

### Test or revoke a connection

1. On the connection page, click **Test** (or use **More actions**). The message **Connected in** a number **ms.** appears when it works. The page shows **Test passed** or **Test failed**.
2. To remove it, click **Revoke**.
3. In **Revoke this connection?**, read the warning: stored credentials are cleared and queued syncs are cancelled. Records already synced into Ohanvi are kept. You must connect again to sync.
4. Click **Revoke**. The message **Connection revoked.** appears.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **No ERP connectors on this server** | Accounting ERP is not enabled for your organisation. | Ask an admin to enable it. |
| **Could not reach the ERP** | Tally is closed, or its HTTP server is off, or the bridge is offline. | Open Tally with its HTTP server on, or check the bridge, then click **Test again**. |
| **No companies found** | The company is not open in Tally. | Open the company in Tally, then click **Ask Tally again**. |
| **Waiting for the bridge…** does not change | The bridge is not installed or the code was not entered. | Install the bridge on the Tally computer and enter the code. The code is shown once, so add a new bridge if it expired. |
| **Could not start the sync.** | The request failed. | Check your connection and try again. |
| Vouchers are not applied. | Vouchers always wait for a dry-run review. | Open the run and click **Preview & apply**. |
| **Could not save the mapping.** | The mapping request failed. | Try again. |
| **Could not resolve the error.** | The resolve request failed. | Try again. |

## Related

- [Connect your online store](connect-your-store.md)
- [Own vs managed services](choose-connectors.md)
- [Set up WhatsApp webhooks and integrations](../whatsapp/whatsapp-webhooks-and-integrations.md)
