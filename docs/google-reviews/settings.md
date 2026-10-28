---
title: Choose the AI model for Google Reviews
description: See and change the AI model that writes Google Reviews drafts and replies. It is your organisation's default AI model, shared with WhatsApp AI.
---

# Choose the AI model for Google Reviews

Pick the AI that writes your customers' review drafts, reply suggestions, auto-replies and profile check tips. Google Reviews uses your organisation's default AI model, so the same choice also applies to WhatsApp AI and other features. It takes about 2 minutes.

## Before you start

- Your role can open **Google Reviews** → **Settings**. Admins can by default. If you can't see **Settings**, ask your admin. See [Team, roles and permissions](../settings/roles-and-permissions.md).
- To change the model, your role can also save it. If the fields are greyed out, your role can only view it.
- To use a provider marked **your own key**, your organisation has added its own key for that provider.

## Steps

### Open Settings

1. Click **More** on the left rail, then select **Google Reviews** → **Settings**.
2. Find the **AI model** card. It reads **Writes customer drafts, reply suggestions, auto-replies and profile check tips. This is your organisation's default AI, so WhatsApp AI and other features use it too.**

### Change the AI model

1. Under **Provider**, pick a provider. Each choice shows the provider and where it runs, such as **Gemini · Ohanvi's key**:

    | Shown as | Meaning |
    | --- | --- |
    | **Platform default — …** | No choice of your own. Ohanvi picks the provider, currently Gemini. |
    | **… · Ohanvi's key** | The provider runs on Ohanvi's key. |
    | **… · your own key** | The provider runs on your organisation's own key. |
    | **… · Ohanvi's own server** | The model runs on Ohanvi's own server. |

2. Optional: if you picked a provider, the **Model** field appears. Type a model name, such as `sarvam-105b`. Leave it empty to use the provider's default model, which the field shows as **Empty: …**.
3. Click **Save**.

The card shows who last changed it, such as **Last changed by Asha**. New drafts and replies use the new model.

!!! warning "This changes the AI for your whole organisation"
    This is the same **Default AI model** as **AI** → **AI Settings**. Changing it here also changes the AI for WhatsApp AI and every other feature that doesn't pick its own model. An AI agent that names its own model keeps it.

## How Google Reviews uses it

| Feature | What the AI writes |
| --- | --- |
| **Review page** | The 3 drafts customers get after **Write my review**, and **Suggest with AI** questions. See [Get more Google reviews](get-more-google-reviews.md). |
| **Auto-reply** | Draft replies to new Google reviews. See [Set up auto-reply](set-up-auto-reply.md). |
| **Profile check** | Tips for your Google listing. See [Run a profile check](run-a-profile-check.md). |

**Generate with AI** on the **Flyer** uses an image model, not this setting. See [Design a review flyer](design-a-review-flyer.md).

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Settings** is missing under **Google Reviews** | Your role can't view the default AI model. | Ask your admin to give your role access. |
| The fields are greyed out and there is no way to save | Your role can view the model but not change it. | Ask an admin to change it, or to give your role access to save it. |
| A **your own key** provider gives no drafts | Your organisation's key for that provider is missing or no longer works. | Add a working key for the provider, or pick another provider. |
| Drafts changed style after a teammate saved a new model | The default AI model is shared across Ohanvi. | Check **Last changed by** on the card, and agree on one model with your team. |

## Related

- [Google Reviews](index.md)
- [Get more Google reviews](get-more-google-reviews.md)
- [Set up auto-reply](set-up-auto-reply.md)
- [Set up the WhatsApp AI agent](../whatsapp/set-up-ai-agent.md)

!!! note "Screenshots to add"
    After **Open Settings** step 2 — the **AI model** card with **Provider**, **Model** and **Save**.
