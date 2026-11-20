---
title: Post a video
description: Post a video to Facebook, Instagram, LinkedIn and Threads, check it in the preview, and follow it while the network processes it.
---

# Post a video

Add one video to a post and send it to Facebook, Instagram, LinkedIn or Threads, now or at a set time. You can play the clip in the preview before you publish. After you publish, the post shows **Publishing** until each network finishes processing the video.

## Before you start

- You can see **Social** in the left rail, with **Publish** in its panel.
- Facebook, Instagram, LinkedIn or Threads is connected. See [Connect social accounts](connect-social-accounts.md).
- Your video is an MP4, MOV, M4V, WEBM, AVI or MKV file of 200 MB or less.

## Which networks take video

| Network | Video in the composer | How it goes out |
| --- | --- | --- |
| **Facebook** | Yes | A video on your Page. |
| **Instagram** | Yes | Always a Reel, also shared to your feed. |
| **LinkedIn** | Yes | A video post. |
| **Threads** | Yes | A video post. |
| **Google Business** | No | Ohanvi does not let you save or publish the post with a video attached. |
| **X** | No | Ohanvi does not let you save or publish the post with a video attached. |

Rules the composer checks:

- A video posts on its own. Do not add photos or a second video to the same post.
- A video can be up to 200 MB. A larger file is not attached.
- Ohanvi does not check the video's length or shape. Each network applies its own limits when it processes the video.
- **Instagram** shows videos as Reels in a tall 9:16 frame. Use a vertical video so nothing is cropped.

## Steps

### Add the video

1. Open **Social** in the left rail, then select **Publish**.
2. Click **New Post**. The **Create Post** window opens.
3. In the channel strip, click **Facebook**, **Instagram**, **LinkedIn** or **Threads**. You can pick several.
4. Type the post text. It becomes the video's caption or description.
5. Click **Add photos or videos**, or drag the file onto the **Drag & drop or select a file** area. Videos skip the **Crop image** window.

    The video appears in the media strip as its first frame, with its length in the corner.

    [SCREENSHOT: Create Post window with Instagram and LinkedIn picked and a video tile in the media strip showing its length]

If a yellow notice appears under the media strip, fix what it says before you go on:

- **… does not accept video posts. Remove the video, or deselect it.** — you picked Google Business or X. Deselect it.
- **A video posts on its own on … Remove the other photos or videos, or deselect them.** — you added more than one file. Remove the extra files.

### Check the preview

1. Look at the **Post Previews** pane next to the editor. If it is hidden, click **Preview** at the top of the composer. On a phone, tap the **Preview** step.
2. Click the video to play it. Click it again to pause.
3. Click the speaker button in the bottom-right corner to turn the sound on. The preview always starts muted.
4. Drag the bar along the bottom to jump to another part of the clip.

The video plays in the first network's card only. The other cards say **Same video as in the … preview above**. The **Instagram** card shows the video in a 9:16 Reel frame.

[SCREENSHOT: Post Previews pane with the Instagram card in a 9:16 frame, the play button and the speaker button visible]

### Publish or schedule

1. Click **Publish Now** to send the post right away. The message **Publishing to … — track it under Sent.** appears.
2. Or click **Schedule**, pick a date and time, then click **Schedule Post**. See [Schedule posts and manage the queue](schedule-social-posts.md).

Uploading a large video can take a moment. Keep the window open until the message appears.

### Follow the post while it publishes

1. Open **Social** → **Publish**. The post shows **Publishing** while any network is still working on it.
2. Wait. Each network processes the video before it goes live. Ohanvi checks again about every 1 minute.
3. When every network is done, the post moves to the **Sent** tab as **Published**.

How long Ohanvi keeps checking:

| Network | Ohanvi checks for about | If the video is still processing after that |
| --- | --- | --- |
| **Instagram**, **LinkedIn**, **Threads** | 10 minutes | That network is marked failed. **Retry** uploads the video again. |
| **Facebook** | 60 minutes | That network is marked failed, but Facebook may still publish the video by itself. **Retry** checks the same video instead of uploading a second copy. |

[SCREENSHOT: Queue tab with a video post showing the Publishing status]

### Retry a failed video

A network is marked failed when it rejects the video, or when it is still processing after the time in the table above. The post shows **Partial** if other networks went live, or **Failed** if none did.

1. Open the **Sent** tab.
2. Click the **⋯** menu on the post, then **Post Details**. Read the reason next to each network.
3. Click **Retry**. Only the failed networks are tried again.

If the network rejected the file itself, a retry sends the same file and fails again. Fix the video first, then post it again. **Duplicate** copies the text and photos but not the video, so add the video again in the copy.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **… does not accept video posts. Remove the video, or deselect it.** | Google Business or X is picked. They do not take video in Ohanvi. | Deselect that network, or post the video without it. |
| **A video posts on its own on … Remove the other photos or videos, or deselect them.** | The post has a video plus other photos or videos. | Keep only the video, or make a separate post for the photos. |
| **Too large to attach: … (over 200 MB)** | The video is over 200 MB. | Compress or trim the video, then add it again. |
| **… could not process the video (…)** in **Post Details** | The network rejected the file, for example its length, size or format. | Fix the file to meet that network's rules, then post it again. |
| **The network was still processing the video after about 10 minutes. Retry the post to upload it again.** | Instagram, LinkedIn or Threads took too long. | Click **Retry**. |
| **The network was still processing the video after about 60 minutes. It may still go live by itself; retry the post to check on it.** | Facebook took too long. | Check your Facebook Page, then click **Retry**. Ohanvi checks the same video and does not post a second copy. |

## Related

- [Create and publish a social post](create-social-post.md)
- [Schedule posts and manage the queue](schedule-social-posts.md)
- [Review posts before they publish](approve-social-posts.md)
- [Connect social accounts](connect-social-accounts.md)
