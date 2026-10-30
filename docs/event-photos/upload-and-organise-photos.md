---
title: Upload and organise photos
description: Upload an event's JPEG and PNG photos into folders, watch Ohanvi find the faces, retry failed photos, move photos between folders, set the cover, release held photos, and delete the ones you don't want.
---

# Upload and organise photos

Upload an event's photos into folders such as Haldi or Reception. Ohanvi finds the faces in each photo, so every guest can find the photos they are in. You can also retry photos that failed, move photos to another folder, pick the cover photo, release held photos, and delete photos you don't want guests to see.

## Before you start

- The event exists. See [Create an event](create-an-event.md).
- Your photos are JPEG or PNG files. HEIF and RAW files are not supported yet. Export them as JPEG first.

## Steps

### Add a folder

Folders group photos by moment. Guests see their photos sorted by folder.

1. Click **Events** on the left rail, select **Events**, and open the event.
2. On the **Photos** tab, click **Add folder**.
3. In **Folder name**, type the moment, for example `Sangeet`.
4. Click **Add folder**. The folder shows next to **All photos**.

A **Wedding** event starts with the folders Haldi, Mehendi, Sangeet, Pheras and Reception. A new folder is kept once it has photos.

### Upload photos

1. On the **Photos** tab, click the folder the photos belong to. Click **All photos** to upload with no folder.
2. Click **Upload photos** and pick the files. You can pick up to 200 photos at a time.
3. Watch the progress line, for example **Uploading 12 of 80 photos**. When it ends, it reads **80 of 80 photos uploaded**.
4. Read the label on each photo. It shows **Finding faces…**, then the number of faces, such as **3 faces**.

| Label | What it means |
| --- | --- |
| **Uploading…** | The file is still on its way. |
| **Finding faces…** | Ohanvi is looking for faces in the photo. |
| **No faces**, **1 face**, **3 faces** | The photo is ready. Guests in it can find it. |
| **Failed** | The photo could not be processed. The reason shows on the photo, with a **Retry** button. See [Retry failed photos](#retry-failed-photos). |

If you picked more than 200 photos, the message **Uploading the first 200 photos. Upload the rest once these finish.** appears. Upload the rest when the first batch ends.

If some files fail to upload, click **Show files** to see which, then **Retry failed**. This is for files that never finished uploading. For a photo that uploaded but shows **Failed**, see [Retry failed photos](#retry-failed-photos).

!!! tip "Send photos from the camera instead"
    To skip uploading, link the camera with Beam. Photos arrive in the event while you shoot. See [Set up Beam](set-up-beam.md).

### Retry failed photos

A photo marked **Failed** shows the reason on its tile. Retry it to process it again.

1. On the **Photos** tab, find the photo marked **Failed** and read the reason on it.
2. Click **Retry** on the photo. Its label goes back to **Finding faces…**, then shows the number of faces.

To retry several at once, select the failed photos, then click **Retry** in the selection bar.

If a photo keeps failing, see [Fix Event Photos problems](troubleshooting.md#photos-fail).

!!! note "HEIF and RAW files"
    Retry doesn't help a HEIF or RAW photo, because those files are not supported yet. Export it as JPEG, delete the failed one, and upload the JPEG.

### Move photos to another folder

1. On the **Photos** tab, select the photos. The bar reads, for example, **3 photos selected**.
2. Click **Move to folder**.
3. Pick the folder, for example `Reception`.
    - To take the photos out of their folder, pick **No folder**. They then show only under **All photos**.
    - To move them to a new folder, type the new folder's name.

The photos now show in that folder, and guests see them under it.

### Set the cover photo

The cover shows on the event's card on **Events** and on the guest page.

1. On the **Photos** tab, select exactly one photo.
2. Click **Set as cover**.

If you don't pick a cover, the latest photo is used.

### Release held photos

When **Release** is set to **Review first** in the event's settings, new photos are **Held**. Guests don't see a held photo until you release it. See [Change event settings](event-settings.md#release).

1. On the **Photos** tab, find the photos marked **Held**.
2. Check each photo, and delete any you don't want guests to see.
3. Release the rest. Guests in them can now find them.

With **Straight away**, photos reach guests as soon as their faces are found.

### Delete photos

1. On the **Photos** tab, select the photos. The bar reads, for example, **3 photos selected**.
2. To select every photo in the folder, click **Select all shown**. To start again, click **Clear all**.
3. Click **Delete**. The window **Delete 3 photos?** opens.
4. Click **Delete**.

!!! warning "Guests lose these photos"
    Deleted photos leave the event, and guests stop seeing them in their matches.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| A HEIF or RAW photo shows **Failed** | HEIF and RAW files are not supported yet. | Export the photo as JPEG, delete the failed one, and upload the JPEG. |
| A photo shows **Failed** with **This photo could not be processed. Delete it and upload it again.** | The file could not be read. | Click **Retry**. If it fails again, delete it, export it as JPEG, and upload the JPEG. |
| A photo stays on **Finding faces…** | Ohanvi is still working through the upload. | Wait a few minutes, then refresh the tab. |
| Photos stuck on **Finding faces…** or marked **Failed** | Processing stopped before the faces were found. | Click **Retry** on the photo, or select the photos and click **Retry** in the selection bar. If they keep failing, contact Ohanvi support. Face matching may be unavailable for a while. |
| You can't set the cover | More than one photo is selected. | Select exactly one photo, then click **Set as cover**. |
| The event card shows the wrong photo | No cover was picked, so the latest photo is used. | Select the photo you want and click **Set as cover**. |
| A photo shows **No faces** | No face was found, for example in a décor or a back-view shot. | No fix needed. Guests can still see it in the full gallery. |
| **Wait for the current upload to finish.** | An upload is still running. | Wait until the progress line ends, then upload the next batch. |
| Guests don't see new photos | **Release** is **Review first**, and the photos are **Held**. | Release the photos, or set **Release** to **Straight away**. |

## Related

- [Set up Beam](set-up-beam.md)
- [Change event settings](event-settings.md)
- [Share the gallery](share-the-gallery.md)
- [Fix Event Photos problems](troubleshooting.md)

!!! note "Screenshots to add"
    After **Add a folder** step 4 — the folder row with **All photos** and the wedding folders; after **Upload photos** step 4 — photos labelled **Finding faces…** and **3 faces**; after **Retry failed photos** step 1 — a **Failed** tile with its reason and **Retry**; after **Move photos to another folder** step 3 — the **Move to folder** picker with **No folder**; after **Set the cover photo** step 1 — the selection bar with **Set as cover**; after **Delete photos** step 1 — the selection bar with **Retry**, **Move to folder** and **Delete**.
