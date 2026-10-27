---
title: बुकिंग के नियम और रिमाइंडर सेट करें
description: तय करें कि बुकिंग कब अपने-आप कन्फ़र्म हों, नोटिस और एडवांस की सीमाएँ सेट करें, व्हाट्सऐप रिमाइंडर चालू करें, और कैंसिलेशन व नो-शो के नियम तय करें।
---

# बुकिंग के नियम और रिमाइंडर सेट करें { #set-booking-rules-and-reminders }

बुकिंग के नियम तय करते हैं कि जब कोई ग्राहक समय माँगे तो क्या हो: उसे कन्फ़र्म किया जाए, आपकी मंज़ूरी के लिए रोका जाए, या दूसरे समय सुझाए जाएँ। अंत में आपका वर्कस्पेस अनुरोधों को आपके तय तरीके से कन्फ़र्म या कतार में रखेगा, हर अपॉइंटमेंट से पहले व्हाट्सऐप रिमाइंडर भेजेगा, और देर से हुए कैंसिलेशन व नो-शो को संभालेगा।

## शुरू करने से पहले { #before-you-start }

- आपको लेफ़्ट रेल में **Appts** दिखता है। अगर नीचे की सेटिंग्स नहीं खुल रहीं, तो अपने एडमिन से Appointments सेटिंग्स का एक्सेस माँगें।
- आपने काम के घंटे सेट कर लिए हैं। देखें [प्रोवाइडर और काम के घंटे जोड़ें](add-providers.md)।
- रिमाइंडर भेजने के लिए आपके पास कम से कम 1 Approved व्हाट्सऐप टेम्प्लेट हो। देखें [व्हाट्सऐप टेम्प्लेट बनाएँ](../whatsapp/create-message-template.md)।

## चरण { #steps }

### बुकिंग के नियम खोलें { #open-the-booking-rules }

1. नीचे-बाएँ कोने में अपने इनिशियल पर क्लिक करें, फिर **Settings** पर क्लिक करें।
2. **Appointments** चुनें, फिर **Booking Rules**। **Appointment Request Handling** पेज खुलता है।

सबटाइटल में लिखा होता है **Working hours come from the WhatsApp Manage screen. These rules decide how a valid request is handled based on WHEN the customer sends it.** घंटे **WhatsApp** → **Manage** → **Live Chat Settings** में सेट करें। देखें [लाइव चैट सेटिंग्स सेट करें](../whatsapp/set-up-live-chat-settings.md)।

### तय करें कि अनुरोध कैसे कन्फ़र्म हों { #choose-how-requests-are-confirmed }

ग्राहक जिस समय अनुरोध भेजता है, Ohanvi उसी के आधार पर नियम चुनता है।

1. **During working hours** में से एक चुनें:
    - **Automatic confirmation** — तभी कन्फ़र्म करता है जब समय हर उपलब्धता और बुकिंग नियम पर खरा उतरे।
    - **Manual approval** — स्टाफ़ के मंज़ूर करने के लिए एक पेंडिंग अनुरोध बनाता है।
2. **Outside working hours** में **Automatic confirmation** या **Manual approval** चुनें।
3. **If requested appointment time is outside working hours** में एक चुनें:
    - **Reject and show available slots** — ग्राहक को इसके बजाय खाली समय दिखाए जाते हैं।
    - **Allow request for manual approval** — अनुरोध **Requested** के रूप में रखा जाता है, ताकि आप फ़ैसला करें।

### बुकिंग की सीमाएँ सेट करें { #set-booking-limits }

**Booking rules** में हर बॉक्स में एक संख्या लिखें:

| फ़ील्ड | क्या करती है | डिफ़ॉल्ट |
| --- | --- | --- |
| **Minimum booking notice (minutes)** | ग्राहक अभी से कितनी जल्दी बुक कर सकता है। | `60` |
| **Maximum advance booking (days)** | ग्राहक कितने दिन आगे तक बुक कर सकता है। | `30` |
| **Slot granularity (minutes)** | दिखाए जाने वाले शुरू होने के समयों के बीच का अंतर, जैसे हर 30 मिनट। | `30` |

### रिमाइंडर चालू करें { #turn-on-reminders }

रिमाइंडर डिफ़ॉल्ट रूप से बंद रहते हैं। स्विच के पास लिखा होता है: **Off by default. Reminders are the single biggest lever on no-shows.**

1. **Reminders** में **Send appointment reminders** चालू करें।
2. **Send before (minutes)** में कॉमा लगाकर लिखें कि कब भेजना है। `1440,120` का मतलब है 1 दिन पहले और 2 घंटे पहले।
3. **Send as template** में एक Approved व्हाट्सऐप टेम्प्लेट चुनें। यह ज़रूरी है, क्योंकि जिन ग्राहकों ने पिछले 24 घंटों में मैसेज नहीं किया, उन्हें व्हाट्सऐप सामान्य टेक्स्ट मैसेज भेजने नहीं देता।

Ohanvi टेम्प्लेट के पहले वेरिएबल में सर्विस का नाम और दूसरे में अपॉइंटमेंट की तारीख और समय भरता है, आपके बिज़नेस के टाइमज़ोन में। अगर इस बीच अपॉइंटमेंट रद्द हो गया या आगे-पीछे कर दिया गया, तो रिमाइंडर नहीं भेजा जाता।

### कैंसिलेशन और नो-शो के नियम सेट करें { #set-cancellation-and-no-show-rules }

1. **Cancellations and no-shows** में **Cancellation notice (minutes, 0 = any time)** में लिखें कि अपॉइंटमेंट से कितनी देर पहले तक ग्राहक व्हाट्सऐप चैट से रद्द कर सकते हैं।
2. **Mark as no-show after (minutes, 0 = never)** में लिखें कि कन्फ़र्म अपॉइंटमेंट खत्म होने के कितनी देर बाद Ohanvi उसे **No-show** मार्क करे। नो-शो खुद मार्क करना हो तो `0` रहने दें। पेज में बताया गया है: **Marking somebody a no-show is a judgement about a customer, so it stays off until a time is set here.**

### सेव करें { #save }

1. **Save** पर क्लिक करें। काम होते समय बटन पर **Saving…** लिखा रहता है। पेज के ऊपर **Saved** संदेश दिखता है।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Send as template** के नीचे **Required — reminders cannot be sent as free text** | रिमाइंडर चालू हैं लेकिन कोई टेम्प्लेट नहीं चुना गया। | कोई टेम्प्लेट चुनें, या रिमाइंडर बंद कर दें। |
| **No approved templates found** | आपके व्हाट्सऐप अकाउंट में कोई Approved टेम्प्लेट नहीं है। | एक बनाएँ और उसके Approved होने का इंतज़ार करें। देखें [व्हाट्सऐप टेम्प्लेट बनाएँ](../whatsapp/create-message-template.md)। |
| **Save failed** | सर्वर ने कोई वैल्यू मंज़ूर नहीं की, जैसे बिना टेम्प्लेट के रिमाइंडर चालू होना। | हर फ़ील्ड जाँचें, फिर **Save** पर दोबारा क्लिक करें। |
| हर अनुरोध **Requested** में ही रहता है | दोनों कन्फ़र्मेशन नियम **Manual approval** पर हैं। | एक या दोनों को **Automatic confirmation** पर कर दें। |
| ग्राहक कल के सुबह के स्लॉट बुक नहीं कर पाते | **Minimum booking notice (minutes)** बहुत ज़्यादा है, या वह दिन **Maximum advance booking (days)** से बाहर है। | नोटिस घटाएँ या एडवांस की सीमा बढ़ाएँ। |

## संबंधित गाइड { #related }

- [प्रोवाइडर और काम के घंटे जोड़ें](add-providers.md)
- [व्हाट्सऐप पर बुकिंग लें](take-bookings-on-whatsapp.md)
- [अपॉइंटमेंट प्रबंधित करें](manage-appointments.md)
