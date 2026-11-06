---
title: किसी ऐप के इवेंट से फ़्लो शुरू करें
description: कनेक्ट किए हुए ऐप में कुछ होने पर फ़्लो शुरू करें, जैसे Shopify में नया ऑर्डर आने पर या Shiprocket में ट्रैकिंग बदलने पर।
---

# किसी ऐप के इवेंट से फ़्लो शुरू करें { #start-a-flow-from-an-app-event }

Shopify या Shiprocket जैसे किसी बाहरी ऐप में कुछ होने पर फ़्लो को अपने आप शुरू करवाएँ।

## शुरू करने से पहले { #before-you-start }

- आपके रोल के पास फ़्लो बनाने और बदलने का एक्सेस हो। देखें [फ़्लो और फ़्लो की लिस्ट को समझें](flows-overview-and-list.md)।
- आप ऐप में साइन इन कर सकते हों। ऐप को ट्रिगर पैनल से ही कनेक्ट किया जा सकता है।
- Shiprocket के लिए आप उसका **Settings → API → Webhooks** पेज खोल सकते हों।

## ऐप के इवेंट Ohanvi तक कैसे पहुँचते हैं { #how-app-events-reach-ohanvi }

लिस्ट में ऐप के हर इवेंट पर एक टैग होता है। वह बताता है कि फ़्लो कितनी जल्दी शुरू होगा:

| टैग | इसका मतलब |
| --- | --- |
| **↻ Every 5 minutes** | Ohanvi तय समय पर ऐप को चेक करता है। नया रिकॉर्ड अगली जाँच पर फ़्लो शुरू करता है। Shopify ऐसे ही काम करता है। |
| **⚡ Instant** | कुछ होते ही ऐप Ohanvi को बता देता है। Shiprocket ऐसे ही काम करता है। |

- तय समय वाले इवेंट की पहली जाँच सिर्फ़ यह निशान लगाती है कि शुरुआत कहाँ से करनी है। पहले से मौजूद रिकॉर्ड से रन शुरू नहीं होते।
- एक रिकॉर्ड या अपडेट से एक रन शुरू होता है। वही अपडेट दो बार आए, तब भी फ़्लो एक ही बार चलता है।
- फ़्लो सिर्फ़ आपके चुने हुए इवेंट पर शुरू होता है। उसी अकाउंट के दूसरे इवेंट उसे शुरू नहीं करते।

## स्टेप { #steps }

### ऐप का इवेंट चुनें { #choose-the-app-event }

1. फ़्लो को बिल्डर में खोलें। देखें [ऑटोमेशन फ़्लो बनाएँ](build-automation-flow.md)।
2. कैनवस की शुरुआत में ट्रिगर पर क्लिक करें। **When this runs** पैनल खुलता है।
3. पैनल के सबसे ऊपर वाले बॉक्स पर क्लिक करें। उसकी दाईं तरफ़ **Change** लिखा होता है। **What starts this flow?** विंडो खुलती है।
4. ऐप वाले हिस्से तक स्क्रॉल करें, या **Search** में टाइप करें, जैसे `order`।
5. इवेंट पर क्लिक करें, जैसे **Shopify** के नीचे **New or updated order**।

    [SCREENSHOT: What starts this flow?, जिसमें Shopify और Shiprocket के हिस्से अपने ↻ और ⚡ टैग के साथ दिख रहे हों]

खाली कैनवस पर **Add first step…** भी यही सवाल पूछता है।

### अकाउंट चुनें { #choose-the-account }

1. **1 · Account** के नीचे **Listens to** खोलें और अकाउंट चुनें। सिर्फ़ एक अकाउंट हो, तो वह पहले से चुना होता है।
2. कोई अकाउंट न हो, तो पैनल में **No … account connected yet. Connect one so this flow can hear from it.** लिखा आता है।
3. **Connect** और ऐप के नाम वाले बटन पर क्लिक करें। हर ऐप अपने तरीके से कनेक्ट होता है। देखें [अकाउंट चुनें](add-an-app-step.md#choose-the-account)।

### तय समय पर चेक होने वाला ऐप (Shopify) पूरा करें { #finish-a-timed-app-shopify }

1. अकाउंट के नीचे की लाइन पढ़ें: **Checks every 5 minutes. Shopify does not notify us, so a new record starts the flow on the next check.**
2. **Save** पर क्लिक करें, फिर **Publish** पर क्लिक करें।

इसके बाद नए ऑर्डर लगभग 5 मिनट के अंदर फ़्लो शुरू कर देते हैं।

### Shiprocket को फ़्लो से जोड़ें { #link-shiprocket-to-the-flow }

Shiprocket आपके लिए अपने आप सेट नहीं होता। हर अकाउंट के लिए आपको एक बार Shiprocket में एक लिंक पेस्ट करना होता है।

1. **Save** पर क्लिक करें। लिंक सिर्फ़ सेव किए हुए फ़्लो का बनता है। उससे पहले पैनल में **Save the flow to get the link to paste into Shiprocket.** लिखा रहता है।
2. **2 · Link it in Shiprocket** के नीचे निर्देश पढ़ें। लिंक के बगल में **Copy** पर क्लिक करें। उस पर **Copied** लिखा आ जाता है।
3. Shiprocket में **Settings → API → Webhooks** खोलें।
4. लिंक को **A parcel's tracking changed** के URL के रूप में पेस्ट करें, फिर सेव करें।
5. Shiprocket से एक टेस्ट इवेंट भेजें।
6. Ohanvi में वापस आकर **Test event received?** के बगल में **Refresh** पर क्लिक करें।
7. देखें कि वहाँ **Test event received? Yes,** के बाद इवेंट आने का समय लिखा हो।

    [SCREENSHOT: 2 · Link it in Shiprocket, जिसमें लिंक, Copy बटन और Test event received? Yes दिख रहा हो]

8. **Publish** पर क्लिक करें।

टेस्ट इवेंट आने के बाद **Sample data** के नीचे **Get sample event** पर क्लिक करें। तब आगे के स्टेप इवेंट की फ़ील्ड चुन सकते हैं। देखें [स्टेप टेस्ट करें और सैंपल डेटा पिन करें](test-a-step-and-pin-sample-data.md#get-a-sample-event-for-the-trigger)।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Test event received? Not yet — send a test from Shiprocket, then refresh.** | Shiprocket ने अभी तक लिंक पर कुछ नहीं भेजा। | देखें कि लिंक Shiprocket में सही इवेंट के लिए सेव है। टेस्ट भेजें, फिर **Refresh** पर क्लिक करें। |
| ऑर्डर के कुछ मिनट बाद फ़्लो शुरू होता है | Shopify हर 5 मिनट में चेक होता है। | कुछ ठीक करने की ज़रूरत नहीं। समय ज़रूरी हो, तो **⚡ Instant** वाला ऐप इस्तेमाल करें। |
| पुराने ऑर्डर से रन शुरू नहीं हुए | पहली जाँच सिर्फ़ शुरुआत का निशान लगाती है। | कुछ ठीक करने की ज़रूरत नहीं। सिर्फ़ नए रिकॉर्ड से रन शुरू होते हैं। |
| **This app trigger is no longer offered, or the list of app triggers has not loaded. Use Change to pick another.** | ऐप का इवेंट हटा दिया गया, या लिस्ट लोड नहीं हुई। | फ़्लो दोबारा खोलें। फिर भी दिखे, तो **Change** पर क्लिक करके दूसरा इवेंट चुनें। |
| **The list of app events could not be loaded. Reopen the flow to try again.** | इवेंट की लिस्ट लोड नहीं हुई। | फ़्लो बंद करके दोबारा खोलें। |
| **Choose the account this webhook comes from first.** | **Listens to** में कोई अकाउंट नहीं चुना गया। | अकाउंट चुनें, फिर सेव करें। |

## संबंधित गाइड { #related }

- [फ़्लो में ऐप का स्टेप जोड़ें](add-an-app-step.md)
- [स्टेप टेस्ट करें और सैंपल डेटा पिन करें](test-a-step-and-pin-sample-data.md)
- [ऑटोमेशन फ़्लो बनाएँ](build-automation-flow.md)
- [कोई ऐप कनेक्ट करें और उसे फ़्लो में इस्तेमाल करें](connect-apps-for-flows.md)
- [टेम्प्लेट से फ़्लो शुरू करें](use-flow-templates.md#app-recipes)
