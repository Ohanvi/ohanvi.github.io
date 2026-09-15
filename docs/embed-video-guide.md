# Embed a video inside a help article

Add tutorial videos safely so users can watch directly from the documentation page.

## YouTube embed

Use the embed URL format, not the normal watch URL. This prevents many player configuration errors.

<div class="media-frame">
  <iframe
    src="https://www.youtube-nocookie.com/embed/M7lc1UVf-VE?rel=0"
    title="YouTube embed example"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

Use this format:

```text
https://www.youtube-nocookie.com/embed/VIDEO_ID?rel=0
```

## Loom or Vimeo

1. Open the video sharing settings.
2. Enable public or workspace access.
3. Copy the embed iframe link.
4. Paste it inside a `media-frame` block.

## Generic iframe checklist

- The URL must be an embed URL.
- The video must allow embedding on external websites.
- Use HTTPS links only.
- Keep the iframe inside `media-frame` so it stays responsive.

## Fallback link

If a video provider blocks embeds, add a normal button link below the video so users can open it in a new tab.
