---
title: Sell photos to guests
description: Turn on Selling, connect Razorpay, set an event's price per photo and gallery unlock, and follow the orders guests pay for.
---

# Sell photos to guests

With Selling on, guests can buy single photos, or pay once to unlock every photo in their gallery. They pay on a Razorpay page, straight into your own Razorpay account, and then download the photos in full quality. Ohanvi takes no commission.

Selling is off until you turn it on. While it is off, guests see their photos for free, as before.

## Before you start

- Your role can open **Selling**. If you can't see it under **Photos**, ask your admin. See [Team, roles and permissions](../settings/roles-and-permissions.md).
- You have a Razorpay account, and can make API keys in it.
- The event is published. Guests see nothing to buy until it is. See [Create an event](create-an-event.md#publish-the-event).

## Steps

### Turn on Selling

1. Click **Photos** on the left rail, then select **Selling**. It is below **Reels**. The page reads **Sell single photos and whole-gallery unlocks to your guests.**
2. Turn on the **Selling** switch. The card reads **On. Guests can buy from every event you switch selling on for.**

To turn it off, turn off the switch, then click **Turn off** in the **Turn selling off?** window. Guests can no longer buy. Photos and galleries already paid for stay open to the guests who bought them.

### Connect Razorpay

If the page shows **Razorpay is not connected yet**, nobody can buy until you connect it.

1. In Razorpay, open **Account & Settings** → **API keys** and make a key.
2. In Ohanvi, click **Connect Razorpay**.
3. Paste the **Key Id** and the **Key Secret**.
4. Click **Connect**. Ohanvi checks the keys with Razorpay. When they work, the page shows **Razorpay ready**.

You can also connect the keys from **Or connect them in Store → Settings**.

!!! note "The Store uses the same keys"
    Selling and the Store share one set of Razorpay keys. If you already connected Razorpay for the Store, Selling shows **Razorpay ready** at once. Changing the keys in one place changes them for both.

### Set an event's prices

Each event has its own prices. An event sells nothing until you turn it on here.

1. Under **Event prices**, pick the event in **Event**.
2. Turn on **Sell photos from this event**.
3. Type a **Price per photo (₹)**, from ₹1 to ₹1,00,000. Leave it empty to not sell single photos.
4. Type a **Gallery unlock price (₹)**, from ₹1 to ₹5,00,000. Leave it empty to not offer a gallery unlock.
5. Pick how long the unlock lasts in **Gallery unlock lasts**: **1 year**, **3 years** or **5 years**.
6. To mark the photos guests haven't paid for, turn on **Watermark unpaid photos**.
7. Click **Save prices**.

If both prices are empty, the page reads **Set a price per photo, a gallery price, or both. Guests see nothing to buy until you do.**

- **Watermark unpaid photos** draws your studio name on the previews of photos processed from now on. Photos already uploaded keep the previews they have. Buyers always get the clean original.
- While an event sells photos, guests download only the web-size copy of a photo they haven't paid for, whatever the event's **Downloads** setting says. A bought photo always downloads as the original, even with downloads off.
- A gallery unlock belongs to the guest who paid. It opens every photo in their own gallery. Paying again while it is still open adds the period to the end.

### Check orders

1. Scroll to **Orders**. The tiles show **Paid orders** and **Revenue**.
2. To filter, pick a status tab, or pick an event in place of **All events**.
3. Read each order: **Date**, **Event**, **Buyer**, **Kind**, **Amount** and **Status**. **Kind** is **Photos** or **Whole gallery**. A paid gallery order also shows **Unlocked until** and the date.

| Status | What it means |
| --- | --- |
| **Awaiting payment** | The guest opened the payment page but hasn't paid yet, or the payment hasn't been checked yet. The payment link works for 2 hours. |
| **Paid** | The payment went through. The guest can download the photos. |
| **Failed** | The payment page could not be made, or Razorpay received less than the full amount. |
| **Expired** | The payment link ran out, or was cancelled, before it was paid. |

!!! note "When the status changes"
    Ohanvi asks Razorpay about a payment when the guest's page checks it, or when you open the **Orders** list. Until one of these happens, a paid order can still read **Awaiting payment**, and the guest's photos unlock only then. Opening **Orders** brings recent orders up to date.

!!! warning "Refunds"
    Refund a payment in your Razorpay dashboard. Ohanvi doesn't change the order: it stays **Paid**, and the guest keeps the photos.

## What guests see

Guests see a shop only when Selling is on, the event sells photos, Razorpay is ready and the event is published.

- **Unlock all photos for ₹1,999** at the top of their photos, with **Download every photo in full quality for 1 year.** and **Unlock all photos**. When single photos are on sale too, it adds **Or buy single photos for ₹49 each.**
- With only single photos on sale: **Full-quality photos are ₹49 each. Open a photo to buy it.**
- **Buy ₹49** on an open photo. After paying, the button reads **Purchased · Download**.
- **Buy 3 photos · ₹147** while selecting photos. A guest can buy up to 100 photos at a time.

To pay:

1. The guest taps a buy or unlock button. The Razorpay page opens in a new tab. They pay by UPI, card or netbanking.
2. They come back to the photos page. It reads **Waiting for your payment** with **Open payment page**, **Check payment** and **Not now**, and checks the payment by itself.
3. When it goes through, the page reads **Payment received. Your photos are ready to download.** or **Payment received. All photos are unlocked.**
4. After a gallery unlock, the top of the page reads, for example, **Unlocked until 4 Nov 2027**.

Bought photos download in full quality, from **Purchased · Download** on each photo. Several selected together come as one ZIP, when the event allows ZIP downloads.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| I can't see **Selling** | Your role has no access to it. | Ask your admin. See [Team, roles and permissions](../settings/roles-and-permissions.md). |
| The page shows **Razorpay is not connected yet** | No Razorpay keys are connected. | Click **Connect Razorpay** and paste your **Key Id** and **Key Secret**. |
| The page says **Online payments are not available on this server yet.** | Razorpay payment links aren't turned on for your account. | Contact Ohanvi support. |
| **Connect** shows an error | Razorpay refused the keys. | Make a new key in Razorpay, and paste both parts again. Check you copied the whole **Key Secret**. |
| Guests see nothing to buy | Selling is off, the event's **Sell photos from this event** is off, both prices are empty, Razorpay isn't ready, or the event isn't published. | Check each one on the **Selling** page. Publish the event. |
| A guest paid, but the order reads **Awaiting payment** | Nobody has checked the payment since. | Open **Orders**, or ask the guest to tap **Check payment** on their page. |
| A guest sees **That payment link expired. Try again.** | The payment link works for 2 hours. | Ask the guest to tap the buy or unlock button again. |
| A guest sees **Your browser blocked the payment page. Tap Open payment page.** | The phone blocked the new tab. | Ask the guest to tap **Open payment page**. |
| A guest wants their money back | Refunds aren't made in Ohanvi. | Refund the payment in your Razorpay dashboard. The order stays **Paid** in Ohanvi. |
| Previews have no watermark | **Watermark unpaid photos** marks only photos processed after you turn it on. | Turn it on before you upload. |

## Related

- [Change event settings](event-settings.md)
- [What guests see](what-guests-see.md)
- [Make reels for guests](reels.md)
- [Fix Event Photos problems](troubleshooting.md)

!!! note "Screenshots to add"
    After **Turn on Selling** step 2 — the **Selling** card with the switch and **Razorpay ready**; after **Connect Razorpay** step 3 — the **Connect Razorpay** window; after **Set an event's prices** step 7 — the **Event prices** form; after **Check orders** step 3 — the **Orders** table; under **What guests see** — the **Unlock all photos** card and **Buy ₹49** on a photo.
