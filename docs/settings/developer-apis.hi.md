---
title: डेवलपर API से व्हाट्सऐप मैसेज भेजें
description: API key बनाएँ, तैयार रिक्वेस्ट बॉडी कॉपी करें और Postman फ़ाइलें डाउनलोड करें, ताकि अपने सिस्टम से Ohanvi के ज़रिए व्हाट्सऐप मैसेज भेज सकें।
---

# डेवलपर API से व्हाट्सऐप मैसेज भेजें { #send-whatsapp-messages-with-the-developer-apis }

अपने सॉफ़्टवेयर से API key के साथ व्हाट्सऐप मैसेज भेजने के लिए **Developer APIs** पेज इस्तेमाल करें। key आप इसी पेज पर बनाते हैं, और इसी पेज पर रिक्वेस्ट बॉडी और Postman फ़ाइलें भी हैं। इसमें कोई साइन-इन या टोकन वाला चरण नहीं है।

## शुरू करने से पहले { #before-you-start }

- आपका व्हाट्सऐप नंबर Ohanvi से कनेक्ट है। आप यह **Settings** → **WhatsApp** → **Configuration** पर देख सकते हैं।
- आपके रोल को व्हाट्सऐप का एक्सेस है।
- आपकी टीम का कोई डेवलपर आपके सिस्टम से HTTP रिक्वेस्ट भेज सकता है।

## चरण { #steps }

### Developer APIs खोलें { #open-developer-apis }

1. नीचे-बाएँ कोने में अपने इनिशियल पर क्लिक करें, फिर **Settings** पर क्लिक करें।
2. Settings सूची में सबसे ऊपर अपने नाम पर क्लिक करें।
3. **Developer** के नीचे **Developer APIs** पर क्लिक करें। पेज 3 टैब के साथ खुलता है: **API Keys**, **Usage Log** और **Docs**।

### API key बनाएँ { #create-an-api-key }

1. **API Keys** टैब पर **Create key** (या **Create your first key**) पर क्लिक करें।
2. key को नाम दें, चुनें कि वह कब एक्सपायर होगी, और **Create key** पर क्लिक करें।
3. key अभी कॉपी कर लें। यह केवल एक बार दिखाई जाती है। यह `wak_…` जैसी दिखती है।

यह key मैसेज भेज सकती है और आपके Approved टेम्प्लेट, डिलीवरी स्टेटस, संपर्क और सेगमेंट पढ़ सकती है, केवल आपके वर्कस्पेस के लिए। यह इसके अलावा कुछ और नहीं छू सकती।

### key से भेजें { #send-with-the-key }

हर रिक्वेस्ट में `X-Api-Key` हेडर में key जोड़ें, और मैसेज के प्रकार की JSON बॉडी के साथ `POST /api/v1/save?apiName=…` को कॉल करें। बेस URL `https://app.ohanvi.com` है।

इन API पर लॉगिन टोकन काम नहीं करता। केवल API key काम करती है।

### रिक्वेस्ट बॉडी कॉपी करें { #copy-a-request-body }

1. **Docs** टैब खोलें। इसमें हर मैसेज प्रकार के लिए एक तैयार रिक्वेस्ट है: **Text**, **Template**, **Media**, **Contact**, **Location**, **Interactive**, **Reaction** और **Reply**।
2. जो चाहिए उस पर **Copy** पर क्लिक करें।
3. सैंपल वैल्यू को अपनी वैल्यू से बदलें, फिर उसे अपने सिस्टम से भेजें।

सफल कॉल यह लौटाती है: `{ "status": "success", "whatsappMessageId": "wamid…" }`।

### Postman इस्तेमाल करें { #use-postman }

**Docs** टैब पर दोनों फ़ाइलें डाउनलोड करने के लिए **Postman collection** और **Environment** पर क्लिक करें। दोनों को Postman में इम्पोर्ट करें, environment खोलें, अपनी key को `apiKey` में पेस्ट करें, और **1. Send Messages** या **2. Find / Read** के नीचे कोई भी रिक्वेस्ट चलाएँ। key हर रिक्वेस्ट में अपने-आप जुड़ जाती है।

### एक टेम्प्लेट कई नंबरों पर भेजें { #send-one-template-to-many-numbers }

एक Approved टेम्प्लेट को एक साथ 100 नंबरों तक भेजने के लिए बल्क कॉल इस्तेमाल करें। **Docs** टैब खोलें और **Queued template, bulk** कॉपी करें, या अपनी key के साथ `POST /api/v1/wa/messages/template/bulk` को कॉल करें।

1. टेम्प्लेट का नाम और भाषा रिक्वेस्ट के ऊपर रखें। ये कॉल के सभी नंबरों के लिए एक जैसे रहते हैं।
2. हर नंबर को `recipients` के नीचे सूचीबद्ध करें। हर नंबर के अपने `variables` हो सकते हैं, जैसे व्यक्ति का नाम।
3. रिक्वेस्ट भेजें। यह तब जवाब देती है जब हर नंबर को आज़माया जा चुका होता है।

जवाब में आपको एक `batchId` मिलता है, और `sentCount`, `failedCount` और `retryingCount` की गिनती। जो नंबर वैध नहीं है, वह अपनी जगह के साथ `rejected` में सूचीबद्ध होता है, और बाकी फिर भी भेजे जाते हैं। `batchId` संभालकर रखें। पूरे बैच को बाद में जाँचने के लिए यह चाहिए।

आप एक मिनट में एक बल्क कॉल कर सकते हैं।

### किसी मैसेज का स्टेटस जाँचें { #check-the-status-of-a-message }

भेजने के जवाब में मिला मैसेज id इस्तेमाल करें।

1. **Docs** टैब खोलें और **Message status** कॉपी करें, या अपनी key के साथ `GET /api/v1/wa/messages/{messageId}` को कॉल करें।
2. `status` पढ़ें। यह `QUEUED`, `SENDING`, `SENT` या `FAILED` होता है, और बताता है कि Ohanvi ने मैसेज व्हाट्सऐप को सौंपा या नहीं।
3. व्हाट्सऐप की रिपोर्ट आने के बाद `deliveryStatus` में `DELIVERED` या `READ` दिखता है, साथ में `deliveredAt` और `readAt`। अगर मैसेज फ़ेल हुआ, तो `failureReason` वजह बताता है।

### पूरे बल्क कॉल का स्टेटस जाँचें { #check-the-status-of-a-whole-bulk-call }

आपको हर मैसेज अलग-अलग जाँचने की ज़रूरत नहीं है। बल्क जवाब में मिला `batchId` इस्तेमाल करें।

1. **Docs** टैब खोलें और **Bulk message status** कॉपी करें, या अपनी key के साथ `GET /api/v1/wa/messages/bulk/{batchId}` को कॉल करें।
2. ऊपर की गिनतियाँ पढ़ें: `total`, `sentCount`, `failedCount` और `inProgressCount`। इनका जोड़ `total` के बराबर होता है। बैच तब पूरा होता है जब `inProgressCount` 0 हो।
3. व्हाट्सऐप ने जो रिपोर्ट किया उसके लिए `deliveredCount`, `readCount` और `deliveryFailedCount` पढ़ें। ये `sentCount` से थोड़े पीछे हो सकते हैं, क्योंकि व्हाट्सऐप डिलीवर करने के बाद रिपोर्ट करता है।
4. `messages` में हर नंबर की एक एंट्री देखें, उसके `to`, `status`, `wamid`, `error` और `deliveryStatus` के साथ। एंट्री को `to` से मिलाएँ।

आप केवल अपने ही बैच देख सकते हैं। अनजान `batchId` पर "Batch not found" आता है। स्टेटस 90 दिनों तक रखा जाता है।

### Tally स्क्रिप्ट डाउनलोड करें { #download-the-tally-scripts }

**Docs** टैब पर, फ़ोल्डर से इनवॉइस PDF भेजने वाली 2 Windows स्क्रिप्ट डाउनलोड करने के लिए **Tally scripts** पर क्लिक करें। देखें [व्हाट्सऐप पर TallyPrime इनवॉइस भेजें](../whatsapp/send-tally-invoices-on-whatsapp.md)।

### याद रखने वाले नियम { #rules-to-keep-in-mind }

- **Rate limit 60 req/min per user**
- **Charged on delivery**
- **Recipients in E.164 (8–15 digits)** — देश का कोड शामिल करें, जैसे +919876543210।
- **Templates open conversations outside the 24-hour window** — **Text** केवल ग्राहक के आखिरी मैसेज के 24 घंटे के भीतर इस्तेमाल करें। देखें [व्हाट्सऐप मैसेज टेम्प्लेट बनाएँ](../whatsapp/create-message-template.md)।
- **A utility template sent through the API costs Meta's rate plus 8 paise** आपके क्रेडिट से।
- **Pay as you go includes 10,000 API messages a month.** पेड प्लान में कोई सीमा नहीं है। **Pay as you go** पर 10,000 के बाद कॉल रद्द हो जाती हैं और प्लान चुनने का संदेश आता है।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| कॉल 401 के साथ फ़ेल होती हैं | key नहीं है, गलत है, रद्द या एक्सपायर हो गई है, या key की जगह लॉगिन टोकन भेजा गया। | key को `X-Api-Key` हेडर में भेजें। अगर वह रद्द हो गई थी, तो नई key बनाएँ। |
| टेक्स्ट मैसेज डिलीवर नहीं होता | ग्राहक ने पिछले 24 घंटों में आपको मैसेज नहीं किया। | इसके बजाय Approved **Template** भेजें। |
| बल्क कॉल "one call per minute" के साथ रद्द होती है | आपने एक मिनट के भीतर दूसरी बल्क कॉल भेजी। | संदेश में बताए सेकंड तक रुकें, फिर दोबारा भेजें। |
| बल्क कॉल में किसी मैसेज पर `retrying` दिखता है | पहली कोशिश में उस नंबर के लिए व्हाट्सऐप तक पहुँचा नहीं जा सका। | उसे **Bulk message status** से फिर जाँचें। Ohanvi खुद दोबारा कोशिश करता है। |
| Bulk message status में "Batch not found" आता है | `batchId` गलत है, दूसरे वर्कस्पेस का है, या 90 दिन से पुराना है। | अपने ही बल्क जवाब का `batchId` इस्तेमाल करें। |
| एक साथ बहुत सारे भेजने पर कॉल रद्द होती हैं | आपने इस यूज़र के लिए प्रति मिनट 60 रिक्वेस्ट पार कर दीं। | रफ़्तार धीमी करें, या लोड को समय में फैलाएँ। |
| **Postman collection** से फ़ाइल डाउनलोड नहीं होती | डाउनलोड केवल वेब ऐप में काम करते हैं। | Ohanvi को ब्राउज़र में खोलें, या **Docs** टैब से रिक्वेस्ट बॉडी कॉपी करें। |
| आपके नाम के नीचे **Developer APIs** नहीं दिख रहा | आपका रोल इसे नहीं देख सकता। | अपने वर्कस्पेस ओनर से कहें। |

## संबंधित गाइड { #related }

- [व्हाट्सऐप पर TallyPrime इनवॉइस भेजें](../whatsapp/send-tally-invoices-on-whatsapp.md)
- [व्हाट्सऐप ब्रॉडकास्ट कैंपेन भेजें](../whatsapp/send-broadcast-campaign.md)
- [व्हाट्सऐप मैसेज टेम्प्लेट बनाएँ](../whatsapp/create-message-template.md)
- [अपनी या Ohanvi की मैनेज्ड सेवाएँ चुनें](choose-connectors.md)
