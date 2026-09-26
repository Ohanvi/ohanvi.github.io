---
title: Connect your WhatsApp number
description: Link your WhatsApp Business number to Ohanvi through Facebook, a verified number or Cloud API credentials, activate it, and manage your numbers.
---

# Connect your WhatsApp number

Link your WhatsApp Business number to Ohanvi so you can message customers from the app. At the end, your number shows as connected, the WhatsApp **Dashboard** opens, and you can switch between numbers from **Configuration**.

## Before you start

- You can see **WhatsApp** in the left rail. If not, ask your admin to give your role WhatsApp access. See [Manage team members, roles and permissions](../settings/roles-and-permissions.md).
- You are the admin of your business in Meta Business Manager, or you can sign in to Facebook as that admin.
- You have a phone number that can receive a text message or a call. For a new number, it must not be linked to any WhatsApp app, personal or business.
- You use the web app. The Facebook popup does not run on mobile. On mobile, use Cloud API credentials instead.

## Steps

### Choose how to connect

1. Open **WhatsApp** in the left rail, then select **Dashboard**. Until a number is connected, the **Connect WhatsApp** screen opens here.
2. Under **How do you want to connect?**, pick one option:

    | Option | Use it when |
    | --- | --- |
    | **New number** | You want to create and verify a new number through the Meta popup. |
    | **Verified number** | Your number is already verified on Meta. The access token is fetched for you. |
    | **Cloud API credentials** | You already have a permanent access token and IDs from Meta. |

You can also start from your profile menu: click your initials, then **Settings** → **Connectors**, and click **Set up WhatsApp** on the **WhatsApp (Meta)** card.

### Connect a new number

1. Select **New number**. Step **Business details** opens.
2. In **WhatsApp phone number**, pick the country and type the number.
3. In **Business display name**, type the name customers will see.
4. In **Business website (optional)**, add your official website. Without it, Meta asks for official documents later.
5. In **Business category**, pick the closest match. Click **Next step**. Step **Link Facebook** opens.
6. Click **Continue with Facebook**. The Meta popup opens.
7. In the popup, sign in as your Meta Business Manager admin and grant the permissions.
8. Select your business portfolio, then create a new WhatsApp Business account and profile.
9. Choose **Add a new number**. Pick **Text message** or **Phone call**, then enter the code Meta sends.
10. Finish the popup. Ohanvi saves the connection and opens your **Dashboard**.

!!! tip
    Meta's **Get a free WhatsApp number** option cannot be used for Click-to-WhatsApp ads, and needs official documents after you connect. Choose **Add a new number** instead.

### Connect a number already verified on Meta

1. Select **Verified number**.
2. Fill in **WhatsApp phone number**, **Business display name** and **Business category**.
3. Click **Continue with Facebook**.
4. In the popup, select your existing business portfolio, WhatsApp Business account and phone number. No code is needed.

To enter the details by hand instead, click **Enter API credentials manually**. Fill in **Phone Number ID**, **WABA ID**, **Meta Business Manager ID** and **Access Token**, then click **Save & Connect**.

### Connect with Cloud API credentials

1. Select **Cloud API credentials**.
2. Paste your **Permanent access token**.
3. Fill in **WhatsApp Business Account ID (WABA ID)**, **Phone Number ID** and **Meta Business Manager ID**.
4. Keep or change the **Configuration name**. The default is **Cloud API**.
5. Copy the **Webhook verify token**. Paste the same token in Meta → App Dashboard → WhatsApp → Configuration → Webhooks.
6. Click **Verify & Connect WhatsApp**. When Meta accepts the token, **Opening your dashboard…** appears.

!!! warning "Use a permanent token"
    Tokens copied from Meta Developer Console → API Setup expire in 24 hours, and messaging stops. Use a permanent System User token from Meta Business Settings.

No Meta account yet? Click **No credentials? Get Cloud API access →**. The **Cloud API Access** page opens. Choose **Apply for Assisted Setup** to have the Ohanvi team set Meta up for you, or follow **How to apply on Meta yourself**.

### Activate the number

If Meta has not activated the number yet, the Dashboard shows **Connect Account** with 4 steps instead.

1. Under **Connect WhatsApp**, connect your WhatsApp Business account.
2. Under **Request verification code from Meta**, pick **Text message** or **Voice Call**, then click **Send Verification Code**.
3. Under **Enter the verification code**, type the 6-digit code and click **Verify**. The code expires in 10 minutes. Click **Resend code** if it does not arrive.
4. Under **Register & activate your number**, set a 6-digit PIN for Meta two-step verification. Click **Register & Activate**.

Keep the PIN safe. You need it if you ever register the number again.

### Manage your numbers

1. Click your initials in the bottom-left corner, then click **Settings**.
2. Select **WhatsApp**, then **Configuration**. Each card shows the number, its **Phone ID** and **WABA**, and **Connected** or **Incomplete**.
3. Use the buttons on a card:
    - **Switch to this** — make this number the active one. The active card shows **Currently active**.
    - **Edit** — open **Edit Configuration** to change the name, token or IDs. Click **Save Configuration**.
    - **Clone** — copy the configuration as a starting point.
4. To add another number, click **Add Configuration**.

The **Voice Calling** section in **Edit Configuration** lets customers call your number. It needs Calling API access approved by Meta first. The screen lists the Meta steps under **Before this works: Meta setup checklist**.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Facebook sign-up did not complete. Please try again.** | The Meta popup closed early or permissions were not granted. | Click **Continue with Facebook** again and finish every step in the popup. Allow popups for app.ohanvi.com. |
| **Access token is required. Connect with Facebook or paste your Meta token.** | No token came back from Facebook, and none was pasted. | Finish the Facebook popup, or paste a permanent token. |
| **Access token expired or revoked** on a Configuration card | The token was temporary or was removed in Meta. Messages and calls fail. | Click **Fix now**, then paste a fresh permanent token or reconnect with Facebook. |
| **Meta keeps rejecting this request** | The saved phone number is not in that WhatsApp Business account, or the wrong ID was saved. | Click **Edit phone number** and check the number and IDs. |
| **WhatsApp broadcasting is restricted** | Meta has restricted the number. | Resolve it in Meta WhatsApp Manager, then click **Check status again**. |
| **Connecting via Facebook is available on the web app.** | You are on mobile. | Use the web app, or enter your API credentials manually. |

## Related

- [Set up your WhatsApp business profile](whatsapp-business-profile.md)
- [Move your number to Ohanvi](migrate-to-ohanvi.md)
- [Read the WhatsApp dashboard](whatsapp-dashboard.md)
- [Choose your own or managed services](../settings/choose-connectors.md)
- [Settings overview](../settings/index.md)

!!! note "Screenshots to add"
    - After step 2 of Choose how to connect — the **How do you want to connect?** selector.
    - After step 5 of Connect a new number — the **Link Facebook** step with **Continue with Facebook**.
    - After step 3 of Activate the number — the verification code step.
    - After step 2 of Manage your numbers — the **Configuration** cards with **Switch to this**.
