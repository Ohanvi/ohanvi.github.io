---
title: डेवलपर API से WhatsApp मैसेज भेजें
description: API key बनाएँ, तैयार रिक्वेस्ट बॉडी कॉपी करें और Postman फ़ाइलें डाउनलोड करें। फिर अपने सिस्टम से Ohanvi के ज़रिए WhatsApp मैसेज भेजें।
---

# डेवलपर API से WhatsApp मैसेज भेजें { #send-whatsapp-messages-with-the-developer-apis }

अपने सॉफ़्टवेयर से WhatsApp मैसेज भेजने के लिए **Developer APIs** पेज इस्तेमाल करें। इसमें API key लगती है। key आप इसी पेज पर बनाते हैं। रिक्वेस्ट बॉडी और Postman फ़ाइलें भी इसी पेज पर मिलती हैं। इसमें साइन-इन या टोकन का कोई स्टेप नहीं है।

## शुरू करने से पहले { #before-you-start }

- आपका WhatsApp नंबर Ohanvi से कनेक्ट हो। यह आप **Settings** → **WhatsApp** → **Configuration** पर देख सकते हैं।
- आपके रोल को WhatsApp का एक्सेस हो।
- आपकी टीम में कोई डेवलपर हो, जो आपके सिस्टम से HTTP रिक्वेस्ट भेज सके।

## स्टेप { #steps }

### Developer APIs खोलें { #open-developer-apis }

1. नीचे-बाएँ कोने में अपने इनिशियल पर क्लिक करें, फिर **Settings** पर क्लिक करें।
2. Settings लिस्ट में सबसे ऊपर अपने नाम पर क्लिक करें।
3. **Developer** के नीचे **Developer APIs** पर क्लिक करें। पेज 3 टैब के साथ खुलेगा: **API Keys**, **Usage Log** और **Docs**।

### API key बनाएँ { #create-an-api-key }

1. **API Keys** टैब पर **Create key** (या **Create your first key**) पर क्लिक करें।
2. key को नाम दें और चुनें कि वह कब एक्सपायर होगी। फिर **Create key** पर क्लिक करें।
3. key अभी कॉपी कर लें। यह सिर्फ़ एक बार दिखती है। यह `wak_…` जैसी दिखती है।

यह key मैसेज भेज सकती है। यह आपके Approved टेम्प्लेट, डिलीवरी स्टेटस, कॉन्टैक्ट और सेगमेंट भी पढ़ सकती है, पर सिर्फ़ आपके वर्कस्पेस के। इसके अलावा यह और कुछ नहीं देख सकती।

### key से मैसेज भेजें { #send-with-the-key }

हर रिक्वेस्ट के `X-Api-Key` हेडर में key डालें। फिर मैसेज के प्रकार वाली JSON बॉडी के साथ `POST /api/v1/save?apiName=…` को कॉल करें। बेस URL `https://app.ohanvi.com` है।

इन API पर लॉगिन टोकन नहीं चलता। सिर्फ़ API key चलती है।

### रिक्वेस्ट बॉडी कॉपी करें { #copy-a-request-body }

1. **Docs** टैब खोलें। वहाँ हर मैसेज प्रकार के लिए एक तैयार रिक्वेस्ट है: **Text**, **Template**, **Media**, **Contact**, **Location**, **Interactive**, **Reaction** और **Reply**।
2. जो चाहिए उस पर **Copy** पर क्लिक करें।
3. सैंपल वैल्यू की जगह अपनी वैल्यू डालें। फिर उसे अपने सिस्टम से भेजें।

कॉल सफल होने पर यह जवाब आता है: `{ "status": "success", "whatsappMessageId": "wamid…" }`।

### Postman इस्तेमाल करें { #use-postman }

**Docs** टैब पर **Postman collection** और **Environment** पर क्लिक करके दोनों फ़ाइलें डाउनलोड करें। दोनों को Postman में इम्पोर्ट करें। environment खोलें और अपनी key को `apiKey` में पेस्ट करें। फिर **1. Send Messages** या **2. Find / Read** के नीचे कोई भी रिक्वेस्ट चलाएँ। key हर रिक्वेस्ट में अपने-आप जुड़ जाती है।

### एक टेम्प्लेट कई नंबरों पर भेजें { #send-one-template-to-many-numbers }

एक Approved टेम्प्लेट को एक साथ 100 नंबरों तक भेजने के लिए बल्क कॉल इस्तेमाल करें। **Docs** टैब खोलकर **Queued template, bulk** कॉपी करें। या अपनी key के साथ `POST /api/v1/wa/messages/template/bulk` को कॉल करें।

1. टेम्प्लेट का नाम और भाषा रिक्वेस्ट में सबसे ऊपर रखें। ये उस कॉल के सभी नंबरों के लिए एक ही रहते हैं।
2. हर नंबर को `recipients` के नीचे लिखें। हर नंबर के अपने `variables` हो सकते हैं, जैसे उस व्यक्ति का नाम।
3. रिक्वेस्ट भेजें। जवाब तब आता है जब हर नंबर पर भेजने की कोशिश हो चुकी होती है।

जवाब में आपको `batchId` मिलता है। साथ में `sentCount`, `failedCount` और `retryingCount` की गिनती मिलती है। जो नंबर सही नहीं है, वह `rejected` में उसकी जगह (पोज़िशन) के साथ दिखता है। बाकी नंबरों पर मैसेज फिर भी जाते हैं। `batchId` संभालकर रखें। पूरे बैच का स्टेटस बाद में देखने के लिए यह चाहिए।

आप एक मिनट में एक बल्क कॉल कर सकते हैं।

### किसी मैसेज का स्टेटस देखें { #check-the-status-of-a-message }

भेजने के जवाब में मिला मैसेज id इस्तेमाल करें।

1. **Docs** टैब खोलकर **Message status** कॉपी करें। या अपनी key के साथ `GET /api/v1/wa/messages/{messageId}` को कॉल करें।
2. `status` देखें। यह `QUEUED`, `SENDING`, `SENT` या `FAILED` होता है। इससे पता चलता है कि Ohanvi ने मैसेज WhatsApp को दिया या नहीं।
3. WhatsApp की रिपोर्ट आने पर `deliveryStatus` में `DELIVERED` या `READ` दिखता है। साथ में `deliveredAt` और `readAt` भी दिखते हैं। मैसेज फ़ेल हुआ हो, तो `failureReason` में वजह लिखी होती है।

### पूरे बल्क कॉल का स्टेटस देखें { #check-the-status-of-a-whole-bulk-call }

हर मैसेज को अलग-अलग देखने की ज़रूरत नहीं है। बल्क जवाब में मिला `batchId` इस्तेमाल करें।

1. **Docs** टैब खोलकर **Bulk message status** कॉपी करें। या अपनी key के साथ `GET /api/v1/wa/messages/bulk/{batchId}` को कॉल करें।
2. ऊपर की गिनती देखें: `total`, `sentCount`, `failedCount` और `inProgressCount`। इन सबका जोड़ `total` के बराबर होता है। `inProgressCount` 0 हो जाए, तब बैच पूरा हुआ समझें।
3. WhatsApp ने क्या बताया, यह `deliveredCount`, `readCount` और `deliveryFailedCount` में देखें। ये `sentCount` से थोड़े पीछे रह सकते हैं, क्योंकि WhatsApp डिलीवर होने के बाद रिपोर्ट भेजता है।
4. `messages` में हर नंबर की एक एंट्री होती है, जिसमें `to`, `status`, `wamid`, `error` और `deliveryStatus` हैं। एंट्री को `to` से मिलाएँ।

आपको सिर्फ़ अपने ही बैच दिखते हैं। कोई अनजान `batchId` डालने पर "Batch not found" आता है। स्टेटस 90 दिन तक रहता है।

### Tally स्क्रिप्ट डाउनलोड करें { #download-the-tally-scripts }

**Docs** टैब पर **Tally scripts** पर क्लिक करें। इससे 2 Windows स्क्रिप्ट डाउनलोड होती हैं, जो किसी फ़ोल्डर से इनवॉइस PDF भेजती हैं। देखें [WhatsApp पर TallyPrime इनवॉइस भेजें](../whatsapp/send-tally-invoices-on-whatsapp.md)।

### याद रखने वाले नियम { #rules-to-keep-in-mind }

- **Rate limit 60 req/min per user**
- **Charged on delivery**
- **Recipients in E.164 (8–15 digits)** — देश का कोड ज़रूर डालें, जैसे +919876543210।
- **Templates open conversations outside the 24-hour window** — **Text** सिर्फ़ कस्टमर के आखिरी मैसेज के 24 घंटे के अंदर भेजें। देखें [WhatsApp मैसेज टेम्प्लेट बनाएँ](../whatsapp/create-message-template.md)।
- **A utility template sent through the API costs Meta's rate plus 8 paise** आपके क्रेडिट से कटता है।
- **Pay as you go includes 10,000 API messages a month.** पेड प्लान पर कोई सीमा नहीं है। **Pay as you go** पर 10,000 के बाद कॉल नहीं चलतीं, और प्लान चुनने का मैसेज आता है।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| कॉल 401 के साथ फ़ेल होती हैं | key नहीं है, गलत है, कैंसिल या एक्सपायर हो गई है, या key की जगह लॉगिन टोकन भेजा गया है। | key को `X-Api-Key` हेडर में भेजें। key कैंसिल हो गई हो, तो नई key बनाएँ। |
| टेक्स्ट मैसेज डिलीवर नहीं होता | कस्टमर ने पिछले 24 घंटों में आपको मैसेज नहीं किया। | इसकी जगह Approved **Template** भेजें। |
| बल्क कॉल "one call per minute" कहकर रुक जाती है | आपने एक मिनट के अंदर दूसरी बल्क कॉल भेज दी। | मैसेज में जितने सेकंड लिखे हैं, उतना रुकें। फिर दोबारा भेजें। |
| बल्क कॉल में किसी मैसेज पर `retrying` दिखता है | पहली बार में उस नंबर के लिए WhatsApp से बात नहीं हो पाई। | **Bulk message status** से उसे दोबारा देखें। Ohanvi खुद फिर कोशिश करता है। |
| Bulk message status में "Batch not found" आता है | `batchId` गलत है, दूसरे वर्कस्पेस का है, या 90 दिन से पुराना है। | अपने ही बल्क जवाब का `batchId` इस्तेमाल करें। |
| एक साथ बहुत सारे मैसेज भेजने पर कॉल रुक जाती हैं | इस यूज़र के लिए आपने 60 रिक्वेस्ट प्रति मिनट की सीमा पार कर ली। | रफ़्तार धीमी करें, या मैसेज थोड़े-थोड़े समय में भेजें। |
| **Postman collection** से फ़ाइल डाउनलोड नहीं होती | डाउनलोड सिर्फ़ वेब ऐप में चलते हैं। | Ohanvi को ब्राउज़र में खोलें, या **Docs** टैब से रिक्वेस्ट बॉडी कॉपी करें। |
| आपके नाम के नीचे **Developer APIs** नहीं दिख रहा | आपका रोल इसे नहीं देख सकता। | अपने वर्कस्पेस ओनर से कहें। |

## संबंधित गाइड { #related }

- [WhatsApp पर TallyPrime इनवॉइस भेजें](../whatsapp/send-tally-invoices-on-whatsapp.md)
- [WhatsApp ब्रॉडकास्ट कैंपेन भेजें](../whatsapp/send-broadcast-campaign.md)
- [WhatsApp मैसेज टेम्प्लेट बनाएँ](../whatsapp/create-message-template.md)
- [अपनी या Ohanvi की मैनेज्ड सर्विस चुनें](choose-connectors.md)
