# हेल्प आर्टिकल में वीडियो एम्बेड करें { #embed-a-video-inside-a-help-article }

ट्यूटोरियल वीडियो ऐसे जोड़ें कि यूज़र उसे सीधे इसी पेज पर देख सकें।

## YouTube एम्बेड { #youtube-embed }

आम वॉच URL की जगह एम्बेड URL फ़ॉर्मेट इस्तेमाल करें। इससे प्लेयर की कई दिक्कतें नहीं आतीं।

<div class="media-frame">
  <iframe
    src="https://www.youtube-nocookie.com/embed/M7lc1UVf-VE?rel=0"
    title="YouTube एम्बेड का उदाहरण"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

इस फ़ॉर्मेट का इस्तेमाल करें:

```text
https://www.youtube-nocookie.com/embed/VIDEO_ID?rel=0
```

## Loom या Vimeo { #loom-or-vimeo }

1. वीडियो की शेयरिंग सेटिंग्स खोलें।
2. पब्लिक एक्सेस या वर्कस्पेस एक्सेस चालू करें।
3. एम्बेड वाला iframe लिंक कॉपी करें।
4. उसे `media-frame` ब्लॉक के अंदर पेस्ट करें।

## iframe चेकलिस्ट { #generic-iframe-checklist }

- URL एम्बेड URL होना चाहिए।
- वीडियो को दूसरी वेबसाइटों पर एम्बेड करने की इजाज़त होनी चाहिए।
- सिर्फ़ HTTPS लिंक इस्तेमाल करें।
- iframe को `media-frame` के अंदर ही रखें, ताकि वह हर स्क्रीन पर ठीक दिखे।

## फ़ॉलबैक लिंक { #fallback-link }

अगर वीडियो प्रोवाइडर एम्बेड को ब्लॉक कर दे, तो वीडियो के नीचे एक आम बटन लिंक जोड़ दें। तब यूज़र वीडियो को नए टैब में खोल सकेंगे।
