---
title: Make reels for guests
description: Turn on Reels for an event so each guest who finds their photos gets a short video of them, then send, hide or retry each reel.
---

# Make reels for guests

With Reels on, each guest who finds their photos with a selfie gets a short vertical video made from their own photos. Ohanvi picks their best photos, makes the reel in the background, puts it in their gallery and sends it on WhatsApp from your number.

## Before you start

- Reels are switched on for your studio. If the **Reels** page says **Reels are not switched on for your studio yet**, contact Ohanvi support.
- The event exists, and you have uploaded photos to it. See [Upload and organise photos](upload-and-organise-photos.md).
- Your WhatsApp number is connected, and the `evp_reel_ready` template is approved on it. Without the template, reels still reach the gallery. See [The WhatsApp message](#the-whatsapp-message).

## Steps

### Turn on Reels for an event

1. Click **Photos** on the left rail, then select **Reels**.
2. Pick the event from the list at the top. Events with Reels off show **· reels off** after their name.
3. Turn on the switch on the event's card. The card shows **Guests with reels**, **Live**, **In progress** and **Held for review**.

Guests who already searched with a selfie get a reel too. A guest with fewer photos than the event's minimum shows as **Needs photos**. Their reel is made as soon as more photos of them are added.

### Choose the look and delivery

1. Click **Reel settings**.
2. Pick a **Look**. Each look shows how many photos it uses, for example **7–11 photos · 7+ portrait**. A guest whose photos don't fit the look gets a look that fits them instead.
3. Turn **Review reels before guests get them** on to check each reel first. It follows the event's photo **Release photos** setting until you change it. See [Change event settings](event-settings.md#release-photos).
4. Keep **Send on WhatsApp when ready** on to send each guest their reel.
5. Set **Fewest photos for a reel**, from 5 to 25. The default is 6.
6. Set **Keep reels for**. **As long as the guest's selfie** follows the event's selfie retention. A reel is never kept past the gallery's own expiry.
7. Click **Save settings**.

### Check and send reels

1. On the **Reels** page, pick a tab: **All**, **In progress**, **Live**, **Held for review**, **Needs photos** or **Failed**.
2. To search, type a guest's name or phone number in **Search guests by name or phone**.
3. Click **Play** on a row to watch a reel as the guest sees it.
4. Open the row's menu (**⋮**) and pick an action:
    - **Send to guest** — a held reel goes to the guest's gallery, and on WhatsApp.
    - **Send again on WhatsApp** — sends a reel the guest already got, at most once an hour.
    - **Hide from guest** — takes the reel off the guest's gallery. **Show to guest again** puts it back.
    - **Try again** — makes a failed reel again.
    - **Delete reel** — deletes the video. New photos of the guest may make a new reel. To keep a reel off a guest's gallery for good, hide it instead.

!!! warning
    **Delete reel** cannot be undone. The guest's reel link stops working at once.

### The WhatsApp message

The reel goes from your own WhatsApp number:

- If the guest wrote to your number in the last 24 hours, the reel goes as a video with a link to their gallery.
- Otherwise it goes with your approved **Utility** template `evp_reel_ready`. The header is the reel video. The body uses `{{1}}` for the guest's first name and `{{2}}` for the event name. The **Visit website** button opens the guest's reel.
- Messages ready between 10 pm and 8 am wait until 8:30 am.
- A guest who replied **STOP** gets no message. Their reel is still in their gallery.

Each reel is sent once. A reel made again with newer photos is not sent again by itself. Use **Send again on WhatsApp**.

The **WhatsApp** column on the list says what happened, for example **Sent**, **Waiting for morning** or **Not sent: template not approved**.

## What guests see

- A **Your reel is ready** card at the top of their photos, with **Watch** and **Save video**.
- **We're making your reel** while it is being made, usually a minute or two.
- **Your reel needs a few more photos** when they have too few photos for a reel.
- **Your reel has expired** with **Make my reel again**, after the keep-for period.

A guest can choose **Don't make reels of me** in the page menu. Their reel is deleted and no new one is made. They can turn reels back on with **Make reels of me again**. **Delete my selfie and data** also deletes their reel. See [What guests see](what-guests-see.md#your-reel).

A guest who taps **This isn't me** in the player hides the reel at once. It shows as **Reported** on your list and stays hidden.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| A guest has no reel | They have not searched with a selfie, or Reels were off. | Ask the guest to take a selfie on the event page. Check that the event's switch is on. |
| A reel shows **Needs photos** | The guest has fewer photos than **Fewest photos for a reel**, or not enough of the shape the look needs. | Upload or release more photos of the guest. Or lower **Fewest photos for a reel**. |
| A reel shows **Held for review** | **Review reels before guests get them** is on. | Play the reel, then pick **Send to guest**. |
| A reel shows **Failed** | It could not be made after 3 tries. | Pick **Try again** in the row's menu. If it fails again, contact Ohanvi support. |
| The WhatsApp column says **Not sent: template not approved** | The `evp_reel_ready` template is missing or not approved. | Create the template in Meta WhatsApp Manager, then sync templates in Ohanvi. See [Create a message template](../whatsapp/create-message-template.md). Then pick **Send again on WhatsApp**. |
| A reel shows **Reported** | The guest said the reel is not them. | Delete the reel. Check the event's match strictness. See [Change event settings](event-settings.md#face-match-strictness). |

## Related

- [Change event settings](event-settings.md)
- [What guests see](what-guests-see.md)
- [Work with guests and album selection](guests-and-album-selection.md)
- [Fix Event Photos problems](troubleshooting.md)
