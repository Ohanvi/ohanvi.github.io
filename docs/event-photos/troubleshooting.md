---
title: Fix Event Photos problems
description: Fix a camera that won't connect to Beam, photos that fail or get stuck, a selfie with no face found, and guests who don't get their WhatsApp messages.
---

# Fix Event Photos problems

Find the problem below, read the cause, and follow the fix. Most problems come from the camera's network settings, the photo's file type, the selfie's light, or the guest's WhatsApp.

## Before you start

- You can open the event's workspace. Click **Events** on the left rail, select **Events**, and open the event.

## The camera doesn't connect to Beam

| Issue | Cause | Fix |
| --- | --- | --- |
| The camera can't reach the server | The venue Wi-Fi is weak or crowded. | Join a phone hotspot instead. Keep the phone near the camera, with mobile data on. See [Set up Beam](set-up-beam.md#connect-the-camera-to-a-phone-hotspot). |
| The camera logs in, but no photos arrive | Passive mode is off. | Turn passive mode on in the camera's FTP settings. |
| The camera shows a certificate error | **Secure Protocol** is off, or the host is not typed exactly. | Set **Secure Protocol** to **On**. Type the host as `beam.ohanvi.com`, not an IP address. |
| The login is refused | The username or password is mistyped. | Open the camera's menu and click **Show login**, then click the eye icon to read the password. Type it again: 8 characters, letters and digits. |
| The login is refused after many tries | 10 wrong passwords in a row lock the camera for 15 minutes. | Click **Reset password** on the camera, and type the new password into the camera. |
| The login is refused for a camera that worked before | The camera is unlinked, or is linked to another event. | On the event's **Beam** tab, click **Link a camera** and pick it. |
| A Nikon doesn't connect | The server type and port don't match. | Use FTPS with port `21` and PASV mode on, or SFTP with port `22` (Z8 and Z9). See [Set up Beam](set-up-beam.md#set-up-a-nikon-camera). |
| A Sony or Canon doesn't connect on port 22 | Port 22 is for SFTP. | Set the port to `21` with FTPS. |
| An older camera can't use FTPS | Beam needs FTPS by default. | Open the camera's menu and click **Allow plain FTP**. Photos from it travel unencrypted. |
| RAW files don't arrive | Beam takes JPEG only. | Set the camera to send JPEG. |
| Photos land in the wrong folder | The camera's folder is from an earlier moment. | On the **Beam** tab, pick the current folder. New frames go there. |

## Photos fail

| Issue | Cause | Fix |
| --- | --- | --- |
| A HEIF photo shows **Failed** | HEIF is not supported yet. iPhones save HEIF by default. | Export the photo as JPEG, delete the failed one, and upload the JPEG. |
| A RAW photo shows **Failed** | RAW is not supported yet. | Export it as JPEG from your editor, then upload the JPEG. |
| Photos stuck on **Finding faces…** for more than 15 minutes | Face matching is busy or briefly unavailable. | Nothing to click: Ohanvi tries these photos again by itself every few minutes. If they are still stuck after an hour, contact Ohanvi support. |
| Photos marked **Failed** | Processing stopped before the faces were found. | Click **Retry** on the photo, or select the photos and click **Retry** in the selection bar. If they keep failing, contact Ohanvi support. Face matching may be unavailable for a while. See [Upload and organise photos](upload-and-organise-photos.md#retry-failed-photos). |
| A photo shows **Failed** with **This photo could not be processed. Delete it and upload it again.** | The file could not be read. | Click **Retry**. If it fails again, delete it, export it as JPEG, and upload the JPEG. |
| A photo shows **No faces** | No face was found, for example in a décor or back-view shot. | No fix needed. It still shows in the full gallery. |

## A guest can't find their photos

| Issue | Cause | Fix |
| --- | --- | --- |
| The verify form shows messages under the fields | The name, WhatsApp number or consent box is missing or wrong. | Ask the guest to fix each field with a message under it, then tap **Verify with WhatsApp** again. |
| No face is found in the selfie | The light is poor, or the face is covered, turned away or too small. | Ask the guest to take the selfie again in good light, facing the camera, without sunglasses or a mask. |
| The guest sees no photos | The event is a draft. Guests can register, but see nothing until you publish. | Click **Publish** on the event. |
| The guest sees no new photos | **Release** is **Review first**, and the photos are **Held**. | Release the photos on the **Photos** tab, or pick **Straight away**. See [Change event settings](event-settings.md#release). |
| The guest misses photos they are in | **Match strictness** is too strict, or the photos are side-on or far away. | Pick **Balanced** or **Loose**. |
| The guest sees look-alikes | **Match strictness** is too loose. | Pick **Balanced** or **Strict**. |

## A guest doesn't get WhatsApp messages

| Issue | Cause | Fix |
| --- | --- | --- |
| The guest got messages before, then nothing | They replied **STOP**. Their row on the **Guests** tab shows **Stopped**. | No fix needed. Their photos still show on the guest page. |
| The guest isn't on WhatsApp | They can't verify or get messages. | Send them the **VIP** link. It needs a selfie, not a number. See [Share the gallery](share-the-gallery.md). |
| Messages arrive late, several photos at once | Matches are grouped into one message per WhatsApp window. | Pick a shorter **WhatsApp window**, such as **30 s**. See [Change event settings](event-settings.md#whatsapp-window). |
| Messages stop for the rest of the day | A guest gets at most 6 live messages a day. | No fix needed. New photos still show on the guest page. |
| The guest never verified | They didn't send the ready-made message, or didn't enter the 6-digit code. Their row shows **Pending**. | Ask them to tap **Verify with WhatsApp** and send the message. |
| The 6-digit code never arrives | The code is sent with an approved Authentication template. | Check your WhatsApp account has an approved Authentication template. See [Create a message template](../whatsapp/create-message-template.md). |

## Related

- [Set up Beam](set-up-beam.md)
- [Upload and organise photos](upload-and-organise-photos.md)
- [Change event settings](event-settings.md)
- [What guests see](what-guests-see.md)
