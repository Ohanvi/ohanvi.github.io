---
title: बुकिंग के नियम और रिमाइंडर सेट करें
description: तय करें कि बुकिंग कब अपने-आप कन्फ़र्म हो, कितना पहले नोटिस चाहिए और कितने दिन आगे तक बुकिंग हो, WhatsApp रिमाइंडर चालू करें, और कैंसिलेशन व नो-शो के नियम बनाएँ।
---

# बुकिंग के नियम और रिमाइंडर सेट करें { #set-booking-rules-and-reminders }

जब ग्राहक कोई समय माँगता है, तब बुकिंग के नियम तय करते हैं कि क्या होगा। या तो वह समय कन्फ़र्म हो जाएगा, या आपकी मंज़ूरी के लिए रुका रहेगा, या ग्राहक को दूसरे समय दिखाए जाएँगे। आखिर में आपका वर्कस्पेस रिक्वेस्ट को आपके बताए तरीके से कन्फ़र्म करेगा या लाइन में रखेगा। हर अपॉइंटमेंट से पहले WhatsApp रिमाइंडर जाएगा। और देर से हुए कैंसिलेशन और नो-शो भी संभल जाएँगे।

## शुरू करने से पहले { #before-you-start }

- लेफ़्ट रेल में आपको **Appts** दिखे। नीचे वाली सेटिंग्स न खुलें, तो अपने एडमिन से Appointments सेटिंग्स का एक्सेस माँगें।
- आपने काम के घंटे सेट कर रखे हों। देखें [प्रोवाइडर और काम के घंटे जोड़ें](add-providers.md)।
- रिमाइंडर भेजने के लिए कम से कम 1 Approved WhatsApp टेम्प्लेट चाहिए। देखें [WhatsApp टेम्प्लेट बनाएँ](../whatsapp/create-message-template.md)।

## स्टेप { #steps }

### बुकिंग के नियम खोलें { #open-the-booking-rules }

1. नीचे-बाएँ कोने में अपने नाम के पहले अक्षर पर क्लिक करें, फिर **Settings** पर क्लिक करें।
2. **Appointments** चुनें, फिर **Booking Rules**। **Appointment Request Handling** पेज खुलता है।

सबटाइटल में लिखा होता है **Working hours come from the WhatsApp Manage screen. These rules decide how a valid request is handled based on WHEN the customer sends it.** काम के घंटे **WhatsApp** → **Manage** → **Live Chat Settings** में सेट करें। देखें [लाइव चैट सेटिंग्स सेट करें](../whatsapp/set-up-live-chat-settings.md)।

### तय करें कि रिक्वेस्ट कैसे कन्फ़र्म हों { #choose-how-requests-are-confirmed }

ग्राहक जिस समय रिक्वेस्ट भेजता है, Ohanvi उसी से देखता है कि कौन सा नियम लगाना है।

1. **During working hours** में से एक चुनें:
    - **Automatic confirmation** — समय हर उपलब्धता और बुकिंग नियम में खरा उतरे, तभी कन्फ़र्म करता है।
    - **Manual approval** — एक पेंडिंग रिक्वेस्ट बनाता है, जिसे आपका स्टाफ़ मंज़ूर करता है।
2. **Outside working hours** में **Automatic confirmation** या **Manual approval** चुनें।
3. **If requested appointment time is outside working hours** में एक चुनें:
    - **Reject and show available slots** — ग्राहक को रिक्वेस्ट के बदले खाली समय दिखाए जाते हैं।
    - **Allow request for manual approval** — रिक्वेस्ट **Requested** में रहती है, और फ़ैसला आप करते हैं।

### बुकिंग की सीमाएँ सेट करें { #set-booking-limits }

**Booking rules** में हर बॉक्स में एक नंबर लिखें:

| फ़ील्ड | क्या करता है | डिफ़ॉल्ट |
| --- | --- | --- |
| **Minimum booking notice (minutes)** | ग्राहक अभी से कितनी जल्दी का समय बुक कर सकता है। | `60` |
| **Maximum advance booking (days)** | ग्राहक कितने दिन आगे तक बुक कर सकता है। | `30` |
| **Slot granularity (minutes)** | दिखाए जाने वाले शुरू होने के समयों के बीच कितना फ़ासला हो, जैसे हर 30 मिनट पर। | `30` |

### रिमाइंडर चालू करें { #turn-on-reminders }

रिमाइंडर पहले से बंद रहते हैं। स्विच के पास लिखा होता है: **Off by default. Reminders are the single biggest lever on no-shows.**

1. **Reminders** में **Send appointment reminders** चालू करें।
2. **Send before (minutes)** में कॉमा लगाकर लिखें कि रिमाइंडर कब भेजना है। `1440,120` का मतलब है 1 दिन पहले और 2 घंटे पहले।
3. **Send as template** में कोई Approved WhatsApp टेम्प्लेट चुनें। यह ज़रूरी है। वजह यह है कि जिस ग्राहक ने पिछले 24 घंटे में आपको मैसेज नहीं किया, उसे WhatsApp सादा टेक्स्ट मैसेज भेजने नहीं देता।

Ohanvi टेम्प्लेट के पहले वेरिएबल में सर्विस का नाम भरता है। दूसरे में अपॉइंटमेंट की तारीख और समय भरता है, आपके बिज़नेस के टाइमज़ोन के हिसाब से। इस बीच अपॉइंटमेंट कैंसल हो गया या आगे-पीछे हो गया, तो रिमाइंडर नहीं जाता।

### कैंसिलेशन और नो-शो के नियम सेट करें { #set-cancellation-and-no-show-rules }

1. **Cancellations and no-shows** में **Cancellation notice (minutes, 0 = any time)** पर लिखें कि अपॉइंटमेंट से कितनी देर पहले तक ग्राहक WhatsApp चैट से कैंसल कर सकते हैं।
2. **Mark as no-show after (minutes, 0 = never)** में लिखें कि कन्फ़र्म अपॉइंटमेंट खत्म होने के कितनी देर बाद Ohanvi उसे **No-show** मार्क करे। नो-शो खुद मार्क करना चाहें तो `0` रहने दें। पेज पर समझाया गया है: **Marking somebody a no-show is a judgement about a customer, so it stays off until a time is set here.**

### सेव करें { #save }

1. **Save** पर क्लिक करें। सेव होते समय बटन पर **Saving…** लिखा रहता है। पेज के ऊपर **Saved** मैसेज दिखता है।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Send as template** के नीचे **Required — reminders cannot be sent as free text** | रिमाइंडर चालू हैं, पर कोई टेम्प्लेट नहीं चुना। | कोई टेम्प्लेट चुनें, या रिमाइंडर बंद कर दें। |
| **No approved templates found** | आपके WhatsApp अकाउंट में कोई Approved टेम्प्लेट नहीं है। | एक टेम्प्लेट बनाएँ और उसके Approved होने का इंतज़ार करें। देखें [WhatsApp टेम्प्लेट बनाएँ](../whatsapp/create-message-template.md)। |
| **Save failed** | सर्वर ने कोई वैल्यू नहीं ली। जैसे टेम्प्लेट चुने बिना रिमाइंडर चालू करना। | हर फ़ील्ड देखें, फिर **Save** पर दोबारा क्लिक करें। |
| हर रिक्वेस्ट **Requested** में ही अटकी रहती है | दोनों कन्फ़र्मेशन नियम **Manual approval** पर हैं। | एक या दोनों को **Automatic confirmation** पर कर दें। |
| ग्राहक कल सुबह के स्लॉट बुक नहीं कर पाते | **Minimum booking notice (minutes)** बहुत ज़्यादा है, या वह दिन **Maximum advance booking (days)** की सीमा से बाहर है। | नोटिस कम करें या एडवांस की सीमा बढ़ाएँ। |

## संबंधित गाइड { #related }

- [प्रोवाइडर और काम के घंटे जोड़ें](add-providers.md)
- [WhatsApp पर बुकिंग लें](take-bookings-on-whatsapp.md)
- [अपॉइंटमेंट मैनेज करें](manage-appointments.md)
