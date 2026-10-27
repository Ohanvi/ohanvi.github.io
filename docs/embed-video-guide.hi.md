# हेल्प आर्टिकल में वीडियो एम्बेड करें { #embed-a-video-inside-a-help-article }

ट्यूटोरियल वीडियो सुरक्षित तरीके से जोड़ें, ताकि यूज़र सीधे डॉक्यूमेंटेशन पेज से देख सकें।

## YouTube एम्बेड { #youtube-embed }

सामान्य वॉच URL की जगह एम्बेड URL फ़ॉर्मेट इस्तेमाल करें। इससे प्लेयर कॉन्फ़िगरेशन की कई गड़बड़ियाँ नहीं आतीं।

<div class="media-frame">
  <iframe
    src="https://www.youtube-nocookie.com/embed/M7lc1UVf-VE?rel=0"
    title="YouTube एम्बेड का उदाहरण"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

यह फ़ॉर्मेट इस्तेमाल करें:

```text
https://www.youtube-nocookie.com/embed/VIDEO_ID?rel=0
```

## Loom या Vimeo { #loom-or-vimeo }

1. वीडियो की शेयरिंग सेटिंग्स खोलें।
2. पब्लिक या वर्कस्पेस एक्सेस चालू करें।
3. एम्बेड iframe लिंक कॉपी करें।
4. उसे `media-frame` ब्लॉक के अंदर पेस्ट करें।

## सामान्य iframe चेकलिस्ट { #generic-iframe-checklist }

- URL एम्बेड URL होना चाहिए।
- वीडियो को बाहरी वेबसाइटों पर एम्बेड होने की अनुमति होनी चाहिए।
- सिर्फ़ HTTPS लिंक इस्तेमाल करें।
- iframe को `media-frame` के अंदर रखें, ताकि वह रिस्पॉन्सिव रहे।

## फ़ॉलबैक लिंक { #fallback-link }

अगर कोई वीडियो प्रोवाइडर एम्बेड को ब्लॉक करता है, तो वीडियो के नीचे एक सामान्य बटन लिंक जोड़ें, ताकि यूज़र उसे नए टैब में खोल सकें।
