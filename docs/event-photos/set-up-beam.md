---
title: Set up Beam
description: Give each camera its own Beam login, type it into a Sony, Canon or Nikon camera once, and send photos to the event while you shoot.
---

# Set up Beam

Beam sends photos straight from the camera to the event while you shoot. Each camera gets its own login. You type it into the camera once, and it stays the same from event to event. Before each event, you link the camera to that event and pick the folder.

## Before you start

- The event exists. See [Create an event](create-an-event.md).
- The camera can send photos over FTPS or SFTP.
- You have a phone with a hotspot for the camera to join. Crowded venue Wi-Fi drops connections.
- The camera saves JPEG, or RAW + JPEG. Beam takes JPEG only.

## How a camera login works

- Each camera has its own **Username** and **Password**. The password has 8 characters, letters and digits only, so it is easy to type on a camera keypad.
- The login belongs to your studio, not to one event. It stays the same from event to event.
- A camera sends to one event at a time. To move it to the next event, you re-link it in Ohanvi. Nothing changes on the camera.
- New photos land in the camera's current folder. You change the folder from Ohanvi during the shoot, for example from Haldi to Mehendi.

## Server details

Use these values on every camera.

| Setting | Value |
| --- | --- |
| Server (host) | `beam.ohanvi.com` |
| Port | `21` for FTPS, on every brand. `22` for SFTP, on cameras that offer it, such as the Nikon Z8 and Z9. |
| Secure protocol | On (FTPS) |
| Passive mode | On (FTP and FTPS only) |
| Username and password | The camera's own login from Ohanvi |
| File type to send | JPEG only |

## Steps

### Add a camera

1. Open the event and go to the **Beam** tab. Or click **Photos** on the left rail and select **Cameras**.
2. Click **Add camera**.
3. In **Label**, type who shoots with it, for example `Rahul's Z6`. The login username is made from this.
4. Pick a **Role**: **Main camera**, **Second shooter** or **Candid**.
5. Pick the **Brand**: **Sony**, **Canon** or **Nikon**. It picks the setup steps to show.
6. Click **Add camera**. The login opens with **Server**, **Port**, **Username** and **Password**.
7. Click **Copy all** to copy the login, or keep the window open while you set up the camera. Click **Done**.

To see the login again, open the camera's menu on **Cameras** and click **Show login**. The **Setup card** on the **Beam** tab shows the same values with menu steps for the brand.

### Link a camera to the event

A camera you added from an event's **Beam** tab is already linked to it. Link a camera you set up before like this.

1. Open the event and go to the **Beam** tab.
2. Click **Link a camera**.
3. Pick the camera. Its current event shows next to it.
4. Click **Link camera**. The message **Rahul's Z6 now sends to Aarav & Diya Wedding** appears.

The camera leaves its old event. Photos it already sent stay there.

### Pick the folder

1. On the **Beam** tab, find the camera under **Cameras on this event**.
2. In the **Folder** column, pick the folder, for example `Sangeet`. On **Cameras**, open the camera's menu and click **Change folder**, type the folder and click **Save folder**.
3. Read the message, for example **New photos go to Sangeet**.

New photos from this camera land there from the next frame. Change the folder as the event moves from one moment to the next.

### Connect the camera to a phone hotspot

1. Turn on the hotspot on your phone, and keep mobile data on.
2. On the camera, join the hotspot's Wi-Fi network.
3. Keep the phone near the camera during the shoot.

!!! tip
    A phone hotspot is steadier than venue Wi-Fi shared by hundreds of guests. Keep the phone charged, or plug it into a power bank.

### Set up a Sony camera

These steps are for the Sony A7 IV. Other Sony bodies use similar menus.

1. Press **MENU**, then go to **Network** → **Wi-Fi**.
2. Set **Wi-Fi Connect** to **On**.
3. Open **Access Point Set.** and join your phone's hotspot.
4. Go to **Network** → **FTP Transfer** → **FTP Transfer Func.**
5. Set **FTP Function** to **On**.
6. Open **Server Setting** → **Server 1** → **Destination Settings**.
7. Enter the host `beam.ohanvi.com`, set **Secure Protocol** to **On**, and set the port to `21`.
8. Open **User Info Settings**. Enter the camera's username and password, and turn passive mode on.
9. Go back and check that the server shows **Connected**.
10. Set **Auto FTP Transfer** to **On**.
11. Set the transfer target to **JPEG**.

Take a test shot. It appears on the event's **Photos** tab, in the folder you picked.

### Set up a Canon camera

Canon menu names vary by model and firmware. Look for the FTP transfer settings in the network menu, for example **Network** → **Connection option settings** → **FTP transfer settings**. Then enter these values:

- **FTP mode**: FTPS
- **Address**: `beam.ohanvi.com`
- **Port**: `21`
- **Passive mode**: Enable
- **Login**: the camera's username and password
- **Target folder**: Root
- **Auto transfer**: Enable
- **Transfer type**: JPEG only

### Set up a Nikon camera

Nikon menu names vary by model and firmware. Look for **Connect to FTP server** in the **Network** menu, then **Network settings** → **Create profile**. Both options below work. The **Setup card** in Ohanvi shows FTPS.

**FTPS on port 21** (the Setup card's values):

- **Server type**: FTPS
- **Address**: `beam.ohanvi.com`
- **Port**: `21`
- **PASV mode**: On
- **Login**: the camera's username and password
- **Auto send**: On
- **Send file as**: JPEG only

**SFTP on port 22** (Nikon Z8 and Z9):

- **Server type**: SFTP
- **Address**: `beam.ohanvi.com`
- **Port**: `22`
- **Login**: the camera's username and password
- **Auto send**: On
- **Send file as**: JPEG only

SFTP has no passive mode setting.

### Check that photos arrive

1. Take a test shot.
2. On the **Beam** tab, check the camera's **Photos** count and **Last photo** time.
3. Open the **Photos** tab. The test shot shows in the folder you picked.

### Move a camera to the next event

1. Open the next event and go to the **Beam** tab.
2. Click **Link a camera**, pick the camera, and click **Link camera**.
3. Pick the folder.

You don't touch the camera's settings. Its login stays the same.

### Manage a camera

Open the camera's menu on the **Beam** tab or on **Cameras**.

- **Reset password** — the old password stops working at once. Type the new one into the camera. A locked camera is unlocked.
- **Unlink from this event** — the camera stops sending to this event at its next login. It cannot log in until you link it to an event again. Photos it already sent stay.
- **Allow plain FTP** — only for older cameras that cannot use FTPS. Photos travel unencrypted. Click **Require FTPS** to turn it off.
- **Delete camera** — its next login is refused. Photos it already sent stay in their events.

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| The camera doesn't connect | The Wi-Fi is weak or crowded. | Join your phone's hotspot and keep the phone near the camera. |
| The camera connects but no photos arrive | Passive mode is off. | Turn passive mode on in the camera's FTP settings. |
| A Nikon doesn't connect | The server type and port don't match. | Use FTPS with port `21` and PASV mode on, or SFTP with port `22`. |
| The camera shows a certificate error | **Secure Protocol** is off, or the host is typed wrong. | Set **Secure Protocol** to **On**, and type the host exactly as `beam.ohanvi.com`, not an IP address. |
| The login is refused | The password is mistyped, or the camera is unlinked or locked. 10 wrong passwords in a row lock it for 15 minutes. | Check the login with **Show login**. Link the camera to the event. If it is locked, click **Reset password** and type the new one. |
| Photos go to the wrong folder | The camera's folder is from an earlier moment. | Pick the folder on the **Beam** tab. New frames go there. |
| RAW files don't arrive | Beam takes JPEG only. | Set the camera to send JPEG. |

More fixes: [Fix Event Photos problems](troubleshooting.md).

## Related

- [Upload and organise photos](upload-and-organise-photos.md)
- [Create an event](create-an-event.md)
- [Fix Event Photos problems](troubleshooting.md)
- [Event Photos](index.md)

!!! note "Screenshots to add"
    After **Add a camera** step 6 — the camera login with **Server**, **Port**, **Username** and **Password**; after **Pick the folder** step 2 — **Cameras on this event** with the **Folder** column; the **Setup card** for Sony; after **Set up a Sony camera** step 7 — the camera's **Destination Settings** screen.
