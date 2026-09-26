---
title: Connect social accounts
description: Connect Google Business, Facebook, Instagram, LinkedIn, Threads or X to Ohanvi, pick the Page or listing to post to, and reconnect when access expires.
---

# Connect social accounts

Connect each social network you post to from the **Social Connections** page. When you finish, the network's card shows **Connected**, and its channel turns on in the post composer. Google Business also unlocks its own screens for business info, reviews and performance.

## Before you start

- You can see **Connect** in the left rail, with **Social Connections** in its panel. If not, ask your admin to give your role access. See the [Settings overview](../settings/index.md).
- You can sign in to the network you want to connect. For a Facebook Page or a LinkedIn company page, you must be an admin of that Page.
- For Instagram, the account is a professional account (**Business** or **Creator**). Personal Instagram accounts cannot be connected.

## Networks you can connect

| Network | What you connect | What you can do after connecting |
| --- | --- | --- |
| **Google Business** | A **Business Location** | Local posts (standard, event, offer and alert), read and reply to reviews, performance metrics |
| **Facebook** | A **Page** | Text, link and image posts, scheduled publishing, post engagement metrics |
| **Instagram** | A **Business or Creator account** | Single-image posts, scheduled publishing |
| **LinkedIn** | A **Company Page or Profile** | Text, link and image posts from a company page or from your own profile |
| **Threads** | A **Profile** | Text, image and video posts, post insights |
| **X** | A **Profile** | Text and image posts, scheduled publishing, post engagement metrics |

The composer also shows YouTube, Vimeo, TikTok, Mastodon and Bluesky chips. You cannot connect or publish to these yet.

## Steps

### Connect a network

1. Open **Connect** in the left rail, then select **Social Connections**. The **Social Connections** page opens with one card per network.
2. On the network's card, click **Connect** followed by the network name, for example **Connect Facebook**.
3. If the network offers more than one way to connect, the **How would you like to connect …?** window opens. Pick one:
    - **Instagram**: **Professional** (**Direct Instagram login**, no Facebook Page needed) or **Via linked Facebook Page** (for an Instagram account managed through a Meta Business Portfolio).
    - **LinkedIn**: **Company Page** (posts appear from the company) or **Personal Profile** (posts appear from you).
4. Read the permissions listed under **Permissions requested**, then click **Open** followed by the network name. The network's sign-in opens in a new window.
5. Sign in to the network and allow access. Close the network's window if it stays open, and return to Ohanvi.
6. Click **Continue**.
7. If the network asks you to pick what to post to, choose it and click **Next** or **Finish**:
    - **Google Business**: **Choose a Google account**, then **Choose a location**.
    - **Facebook**: **Choose a Page**.
    - **Instagram via linked Facebook Page**: **Choose the linked Page**, then **Choose an Instagram account**.
    - **LinkedIn Company Page**: **Choose a company page**.
8. The message **… connected. Its channel is now available in the Publish composer.** appears. The card now shows **Connected**.

Threads, X, and Instagram's direct login have no step 7. Posts go out as the profile you signed in with.

!!! note
    If you exit the window before the last step, Ohanvi asks **… connection in progress**. Click **Continue connection** to finish, or **Exit connection** to lose your progress.

### Connect with app credentials

Use this only when your own developer app issues the tokens, or when the network has no sign-in option on your workspace.

1. On the network's card, click **Use credentials**. When sign-in is not available, the card shows **Connect** instead.
2. The **Connect … with credentials** window opens. Fill in the fields, such as **App ID**, **App secret** and **Page access token**. Click **How do I get this?** next to a field for help.
3. Keep **Active** switched on so the network is included in publishing and background sync.
4. Click **Connect**.

### Add or change the Pages you post to

Networks that post to a Page or a location can hold more than one.

1. On a connected card, click **Manage** followed by the item type, for example **Manage locations** on the Google Business card.
2. Click **Add** followed by the item type, for example **Add location**. Pick one, then click **Add**.
3. To stop posting to one, click **Remove** next to it. Click **Close** when you are done.

### Reconnect a network

Facebook, Instagram and LinkedIn access expires after a period set by the network. Ohanvi renews access automatically where the network allows it.

- When access expires in 14 days or less, the card shows **…'s access token expires in N days. Reconnect before then to avoid interrupted publishing.**
- When the network revokes access, for example after a password change, the card shows **… has revoked access. Reconnect to resume publishing — data already synced is unaffected.**

To reconnect, click **Reconnect** on the card and repeat the connect steps. If you sign in as a different account, Ohanvi disconnects the old one and says so in a message.

### Disconnect a network

1. On the connected card, click **Disconnect**. The **Disconnect …?** window opens.
2. Click **Disconnect** to confirm. Publishing to that network stops. Posts already published stay published.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| The card shows **Unavailable** and **This network is not enabled on this server yet.** | The network is not turned on for your workspace. | Ask your admin to enable it, then click **Refresh**. |
| **This Facebook user administers no Pages.** | You are not an admin of any Facebook Page. | Ask a current Page admin to give you admin access, then reconnect. |
| **No Instagram professional account is linked to that Page.** | The Instagram account is not linked to the Page you picked. | Link it in Meta, or go back and connect with **Direct Instagram login**. |
| **This Google user does not manage any Business Profile accounts.** | You signed in with a Google account that does not manage the listing. | Sign in with the Google account that manages your Business Profile. |
| **Connecting … was cancelled — access was not granted.** | You declined access on the network's page. | Click **Connect** again and allow access. |
| **Could not start the … sign-in.** | Sign-in is not set up for this network on your workspace. | Click **Use credentials**, or ask your admin. |

## Related

- [Create and publish a social post](create-social-post.md)
- [Manage your Google Business Profile](manage-google-business-profile.md)
- [Social overview](index.md)

!!! note "Screenshots to add"
    - After step 1 — the **Social Connections** page with the network cards.
    - After step 3 — the **How would you like to connect Instagram?** window with both options.
    - After step 7 — the **Choose a Page** step for Facebook.
    - Reconnect — a card showing the token-expiry warning.
