---
title: Add and manage accounts
description: Add the companies you sell to as accounts, read each account's health and open pipeline, filter the list, and export it.
---

# Add and manage accounts

Save the companies you sell to as accounts, so their contacts and deals hang together in one place. At the end, each account shows its health, how many contacts it has, its open pipeline value, the source it came from and its owner.

## Before you start

- You can see **CRM** in the left rail, with **Accounts** in its panel. If not, ask your admin for CRM access.

## Steps

### Add an account

1. Open **CRM** in the left rail, then select **Accounts**.
2. Click **Add account** at the top right. The **Add Account** form opens.
3. Under **Basic Information**, type the **Account Name**. It is the only required field.
4. Pick an **Account Type**: **PROSPECT**, **CUSTOMER**, **PARTNER**, **VENDOR** or **OTHER**. It defaults to **PROSPECT**.
5. Optional: pick a **Parent Account (Client Group)** if this company belongs to a group. Add the **Industry** and **Website**.
6. Optional: fill **Contact Information** (**Phone**, **Email**), **Company Details** (**Annual Revenue**, **Employees**), **Billing Address**, **Shipping Address** and **Description**.
7. Click **Submit**. The account shows in the list.

If a saved account already has the same name, phone or email, the form shows **Possible duplicate — "…" already has a matching name, phone or email.** You can still save it. Check first that you are not creating a second copy.

### Read the account list

Each row shows **Company**, **Health**, **Contacts**, **Open pipeline**, **Source** and **Owner**. **Health** is worked out from the account's deals:

| Health | Meaning |
| --- | --- |
| **Customer** | The account has a won deal, or its type is **CUSTOMER**. |
| **Active** | It has open deals that moved in the last 30 days. |
| **At risk** | It has open deals, but none has moved for 30 days or more. |
| **New** | It has no open deals yet. |

### Filter and open accounts

1. Click a view to narrow the list: **Customers**, **At risk** or **My accounts**. **All** shows every account.
2. Click an account. Ohanvi opens that company's contacts.

### Export the list

1. Filter the list to the accounts you want.
2. Click **Export**. A CSV file of the rows on screen downloads, and **Exported N accounts.** appears.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Account name is required.** | **Account Name** is empty. | Type a name and submit again. |
| **Invalid account type 'COMPETITOR'.** | **COMPETITOR** shows in the **Account Type** list, but the server does not accept it. | Pick **OTHER** instead. |
| **Account has active contacts. Reassign or delete them first.** | You tried to delete an account that still has contacts. | Move the contacts to another account, or delete them, then try again. |
| **Export** does not show | The list is empty. | Add an account first. |
| An account shows **At risk** but you spoke to them this week | Health reads only when a deal was last updated. | Update the deal, for example its **Next Step**. |

## Related

- [Create and manage deals](manage-deals.md)
- [Log activities and notes](log-activities-and-notes.md)
- [CRM overview](../crm/index.md)

!!! note "Screenshots to add"
    - After step 2 of "Add an account" — the **Add Account** form with its sections
    - After "Read the account list" — the list with the **Health** column
    - After step 2 of "Export the list" — the **Exported N accounts.** message
