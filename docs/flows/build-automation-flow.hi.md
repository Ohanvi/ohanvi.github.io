---
title: ऑटोमेशन फ़्लो बनाएँ
description: तय करें कि ऑटोमेशन किस बात से शुरू हो। मैसेज, इंतज़ार और कंडीशन जैसे स्टेप जोड़ें, स्टेप के बीच डेटा भेजें, फिर फ़्लो सेव और पब्लिश करें।
---

# ऑटोमेशन फ़्लो बनाएँ { #build-an-automation-flow }

ऐसा फ़्लो बनाएँ जो कुछ होने पर, तय शेड्यूल पर, या आपके शुरू करने पर अपने आप चले। इस गाइड के आख़िर में आपके पास एक पब्लिश किया हुआ ऑटोमेशन होगा। उसमें एक ट्रिगर होगा, ट्रिगर का डेटा इस्तेमाल करने वाले स्टेप होंगे, और एक लाइव वर्शन होगा जो असली इवेंट पर चलेगा।

## शुरू करने से पहले { #before-you-start }

- आप **Flows** खोल पाएँ और आपको **New flow** दिखे। देखें [फ़्लो और फ़्लो की लिस्ट को समझें](flows-overview-and-list.md)।
- फ़्लो जो भी इस्तेमाल करता है, वह पहले से कनेक्ट होना चाहिए। जैसे आपका WhatsApp नंबर, आपका स्टोर, Google अकाउंट या कोई कनेक्टर ऐप। देखें [कोई ऐप कनेक्ट करें और उसे फ़्लो में इस्तेमाल करें](connect-apps-for-flows.md)।
- फ़्लो जो WhatsApp टेम्प्लेट भेजता है, वे Meta से अप्रूव हो चुके हों। उन्हें **WhatsApp** → **Template** में देख लें।
- अगर आपको ग्राहक से बात करने वाला WhatsApp चैटबॉट बनाना है, तो इसकी जगह [WhatsApp चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md) पढ़ें।

## ट्रिगर जो आप चुन सकते हैं { #triggers-you-can-choose }

**When this runs** पैनल में 6 ट्रिगर मिलते हैं:

| ट्रिगर | फ़्लो तब शुरू होता है जब |
| --- | --- |
| **When something happens here** | Ohanvi में कोई इवेंट होता है, जैसे स्टोर ऑर्डर, फ़ॉर्म या टैग। इसे **Which event** में चुनें। |
| **Run by hand** | आप लिस्ट या बिल्डर में **Run test** पर क्लिक करते हैं। |
| **When a record appears** | किसी कनेक्टर ऐप में नया रिकॉर्ड आता है। Ohanvi हर कुछ देर में ऐप को चेक करता रहता है। |
| **When a webhook arrives** | कोई कनेक्टर ऐप Ohanvi को वेबहुक भेजता है। |
| **When Zapier/Pabbly sends data** | कोई Zap या Pabbly वर्कफ़्लो इस फ़्लो को कॉल करता है। |
| **On a schedule** | आपका तय किया हुआ समय आता है, जैसे हर दिन 09:00 बजे। |

**Which event** में ये इवेंट मिलते हैं:

- **A form is submitted**, **A Google Form gets a new response**, **A contact is added in Google Contacts**
- **A WhatsApp conversation finishes**
- **A contact joins an email list**, **A contact is tagged**
- **Someone becomes a customer of the store**, **A new store order is placed**, **A shopper leaves a checkout unfinished**, **An order payment fails**, **An order ships**, **A parcel is out for delivery**, **A parcel is delivered**, **A shopper looks at a product on the storefront**, **An order is cancelled**, **A refund is issued**
- **A post is ready to publish**, **A post is created as a draft**, **A post finished publishing**, **A new comment arrives on a published post**

## स्टेप { #steps }

### फ़्लो बनाएँ और ट्रिगर चुनें { #create-the-flow-and-choose-a-trigger }

1. लेफ़्ट रेल में **WhatsApp** खोलें, फिर **Flows** चुनें।
2. **New flow** पर क्लिक करें। एक प्लेसहोल्डर नाम के साथ खाली कैनवास खुलता है।
3. टूलबार में नाम पर क्लिक करें और नया नाम लिखें, जैसे `Order follow-up`।
4. **Add first step…** पर क्लिक करें। **How does this flow start?** मेन्यू खुलता है।
5. शुरू करने का तरीका चुनें:
    - इन इवेंट के लिए **Form submitted**, **Google Form response** या **New Google contact** चुनें।
    - कोई लिस्ट में जुड़े या उसे टैग मिले, तब **Email journey** चुनें।
    - बाकी हर ट्रिगर के लिए **Run by hand** चुनें। इसे आप अगले स्टेप में बदल लेंगे।
    - पूरा तैयार उदाहरण चाहिए, तो **Start from a recipe** चुनें।

    दाईं तरफ़ **When this runs** पैनल खुलता है।

6. पैनल के ऊपर वाला ड्रॉप-डाउन खोलें और ट्रिगर चुनें। ऊपर की टेबल देखें।
7. ट्रिगर जो फ़ील्ड दिखाता है, उन्हें भरें:
    - **When something happens here:** **Which event** चुनें। **A contact joins an email list** के लिए **Which list** भी चुनें। **A contact is tagged** के लिए **Which tag** लिखें।
    - **On a schedule:** **Runs every day at** के बगल में दिए समय पर क्लिक करें, फिर **Timezone** चुनें। दूसरे पैटर्न के लिए 6 फ़ील्ड वाला **Cron expression (advanced)** लिखें।
    - **When a record appears:** **Trigger operation** और **Connection** चुनें।
    - **When a webhook arrives:** **Connection** में कनेक्शन की id लिखें। देखें [कोई ऐप कनेक्ट करें और उसे फ़्लो में इस्तेमाल करें](connect-apps-for-flows.md)।
    - **When Zapier/Pabbly sends data:** नीचे "Zapier या Pabbly से फ़्लो शुरू करें" देखें।

ट्रिगर को बाद में बदलना हो, तो कैनवास की शुरुआत में ट्रिगर नोड पर क्लिक करें।

### स्टेप जोड़ें { #add-steps }

1. ट्रिगर के बाद या किसी भी स्टेप के बाद **+** पर क्लिक करें। **Add a step after** मेन्यू खुलता है।
2. **COMMON** में से कोई स्टेप चुनें। सारे ग्रुप देखने के लिए **All steps** पर क्लिक करें। आप **Search** में टाइप भी कर सकते हैं।
3. नए स्टेप पर क्लिक करें। उसकी सेटिंग्स दाईं तरफ़ **Step** पैनल के **Setup** टैब पर खुलती हैं।
4. उसकी फ़ील्ड भरें। हर स्टेप के लिए यही करें।

ऑटोमेशन में ये स्टेप काम आते हैं:

| स्टेप | कहाँ मिलेगा | यह क्या करता है |
| --- | --- | --- |
| **Wait** | **COMMON** | फ़्लो को कुछ देर रोकता है। **Wait for** में मिनट, घंटे या दिन सेट करें। |
| **Save to CRM** | **COMMON** | CRM में कॉन्टैक्ट बनाता है या अपडेट करता है। |
| **Action** | **All steps** → **Advanced** | एक एक्शन चलाता है। **This step will** में चुनें, जैसे **Send a WhatsApp template**, **Send a WhatsApp message**, **Create a CRM lead**, **Enrol in an email journey**, **Post to social**, Google Sheets या Calendar का एक्शन, या कोई कनेक्टर ऑपरेशन। |
| **Continue only if…** | **All steps** → **Advanced** | कंडीशन पूरी न हो तो रन को रोक देता है। |
| **Many paths by rule** | **All steps** → **Advanced** | रन को उस पहले रास्ते पर भेजता है जिसकी कंडीशन मेल खाती है। |
| **For each** | **All steps** → **Advanced** | लिस्ट के हर आइटम के लिए अगले स्टेप दोहराता है। |
| **Sub-flow** | **All steps** → **Advanced** | कोई दूसरा फ़्लो चलाता है, फिर आगे बढ़ता है। |
| **Parallel** और **Join** | **All steps** → **Advanced** | कई रास्ते एक साथ चलाता है, फिर सबके पूरे होने का इंतज़ार करता है। |
| Google Sheets, Calendar, Meet और Contacts के स्टेप | **All steps** | जैसे **Add a row** या **Create event**। |

**Send a WhatsApp message** सिर्फ़ उन लोगों को जाता है जिन्होंने पिछले 24 घंटों में आपको मैसेज किया है। बाकी लोगों को भेजने के लिए **Send a WhatsApp template** इस्तेमाल करें।

### कंडीशन जोड़ें { #add-a-condition }

1. **Continue only if…** स्टेप जोड़ें।
2. **Only continue if** के नीचे **Add condition** पर क्लिक करें।
3. **Field**, तुलना (जैसे **is**, **contains**, **is empty**) और **Value** चुनें।
4. ज़रूरत हो तो और कंडीशन जोड़ें। **Continue when** में **all match** या **any match** चुनें।

जो रन इस स्टेप पर रुक जाता है, वह **Filtered** बनकर ख़त्म होता है। यह सामान्य नतीजा है, फ़ेल होना नहीं।

कई रास्ते चाहिए, तो **Many paths by rule** इस्तेमाल करें। **Add two paths** पर क्लिक करें, हर रास्ते का नियम सेट करें और **If nothing matches, take** चुनें।

### ट्रिगर या पिछले स्टेप का डेटा इस्तेमाल करें { #use-data-from-the-trigger-or-an-earlier-step }

1. स्टेप चुनें और किसी फ़ील्ड में क्लिक करें, जैसे **Send to**।
2. उसके बगल वाले फ़ील्ड आइकन पर क्लिक करें (टूलटिप **Use a field from the trigger or an earlier step**)।
3. कोई फ़ील्ड चुनें, जैसे ग्राहक का फ़ोन नंबर। Ohanvi उसे एक्सप्रेशन बनाकर डाल देता है।

एक्सप्रेशन में दोहरे कर्ली ब्रैकेट होते हैं:

- `{{trigger.phone}}`: फ़्लो शुरू करने वाले इवेंट की एक फ़ील्ड।
- `{{2.meetLink}}`: स्टेप 2 के आउटपुट की एक फ़ील्ड।

आप एक्सप्रेशन को सादे टेक्स्ट के साथ मिला सकते हैं, जैसे `Hi {{trigger.firstName}}, your order is on its way.` कोई भी स्टेप सिर्फ़ अपने से पहले चलने वाले स्टेप का डेटा ले सकता है।

### Zapier या Pabbly से फ़्लो शुरू करें { #start-the-flow-from-zapier-or-pabbly }

1. सबसे पहले **Save** पर क्लिक करें। एंडपॉइंट सिर्फ़ सेव किए हुए फ़्लो के लिए बनता है।
2. ट्रिगर नोड पर क्लिक करें और **When Zapier/Pabbly sends data** चुनें।
3. **Which platform sends the data** में **Zapier** या **Pabbly Connect** चुनें, फिर **Create endpoint** पर क्लिक करें।
4. **URL (POST)**, **Header X-Api-Key** और **Body (JSON)** को अपने Zap या Pabbly वर्कफ़्लो में कॉपी करें।
5. Zapier या Pabbly से एक टेस्ट भेजें। उसकी फ़ील्ड **Sample** के नीचे दिखती हैं। आप उन्हें सीधे अपने स्टेप में इस्तेमाल कर सकते हैं।
6. ऑप्शनल: **Field that identifies one event (optional)** में `order.id` जैसी कोई फ़ील्ड लिखें। एक ही वैल्यू दो बार आए, तो फ़्लो सिर्फ़ एक बार शुरू होता है।

API key **Connect** → **Zapier** या **Connect** → **Pabbly** से मिलती है। वहाँ **API keys** में हर key उसके स्टेटस के साथ दिखती है। नई key बनाने के लिए ऊपर दाईं तरफ़ **Create key** पर क्लिक करें। हर key उसी यूज़र की अनुमतियों से काम करती है जिसने उसे बनाया है।

![Connect में Zapier पेज, जिसमें API keys की लिस्ट है](../assets/screenshots/flows-build-1-zapier-keys.png)

### सेव और पब्लिश करें { #save-and-publish }

1. **Save** पर क्लिक करें। टूलबार में **Saved just now** दिखता है। वर्शन चिप पर आगे वर्शन नंबर और उसके साथ **DRAFT** लिखा होता है, जैसे **v1 · DRAFT**।
2. ऊपर की बार में **Publish** पर क्लिक करें।
3. कुछ स्टेप अधूरे हों, तो एक विंडो उनकी लिस्ट दिखाती है। वापस जाने के लिए **Fix the steps** पर क्लिक करें, या **Publish without them** चुनें।
4. आने वाला मैसेज पढ़ें। **Published and live — new runs use this version.** का मतलब है कि फ़्लो चल रहा है। टूलबार का स्विच **Active** दिखाता है।
5. मैसेज **Published. This flow is turned off, so it will not run yet.** हो, तो **Turn on** पर क्लिक करें।

जो स्टेप पब्लिश होने से रोकता है, उस पर कैनवास में निशान लगा होता है। वजह पढ़ने के लिए उसे चुनें।

!!! warning "पब्लिश किया हुआ फ़्लो असली डेटा पर चलता है"
    अब से हर मेल खाता इवेंट एक रन शुरू करेगा। फ़्लो जो मैसेज भेज देता है, वे वापस नहीं लिए जा सकते। पहले छोटी ऑडियंस पर टेस्ट करें।

### पब्लिश किया हुआ फ़्लो बदलें { #change-a-published-flow }

1. फ़्लो खोलें और उसे एडिट करें। सेव करने के बाद वर्शन चिप पर **LIVE · NOT PUBLISHED** लिखा होता है।
2. **Publish** पर क्लिक करें। नए रन नए वर्शन से चलते हैं। जो रन पहले से चल रहे हैं, वे उसी वर्शन पर पूरे होते हैं जिस पर शुरू हुए थे।
3. पुराने वर्शन पर लौटना हो, तो वर्शन चिप पर क्लिक करें, उस वर्शन की रो का **More** मेन्यू खोलें और **Make this live** पर क्लिक करें।

## AI से बनाएँ { #build-with-ai }

1. खाली कैनवास पर **Build with AI** पर क्लिक करें। चैट पैनल खुलता है।
2. **Ask anything…** में फ़्लो के बारे में लिखकर भेजें, जैसे `When a new store order is placed, wait 1 hour, then send my order follow-up template`।
3. कैनवास पर बने स्टेप ध्यान से देखें और जो छूटा हो उसे ठीक करें। फिर **Save** और **Publish** पर क्लिक करें।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Which event** खाली है और **The list of triggers could not be loaded…** दिखता है | इवेंट की लिस्ट लोड नहीं हुई। | फ़्लो बंद करके दोबारा खोलें। |
| **Could not publish — the step that needs fixing is marked on the canvas.** | किसी स्टेप में वैल्यू नहीं है, जैसे **'to' has no value. Fill it in, or remove it.** | निशान वाला स्टेप चुनें, फ़ील्ड भरें, फिर सेव और पब्लिश करें। |
| **'text' refers to step 3, which runs after this one.** | कोई फ़ील्ड ऐसे स्टेप का डेटा ले रही है जो अभी चला ही नहीं है। | किसी पहले वाले स्टेप की फ़ील्ड चुनें। |
| **A scheduled flow needs a cron expression.** | **On a schedule** में कोई समय सेट नहीं है। | **Runs every day at** के बगल में दिए समय पर क्लिक करें, या cron एक्सप्रेशन लिखें। |
| **An event flow needs the event it listens for.** | **When something happens here** में कोई इवेंट नहीं चुना गया। | **Which event** चुनें। |
| शेड्यूल किया हुआ फ़्लो कभी नहीं चलता | शेड्यूल तभी चलते हैं जब आपके वर्कस्पेस के लिए शेड्यूल स्कैनर चालू हो। | अपने एडमिन या सपोर्ट से इसे चेक करने को कहें। |

## संबंधित गाइड { #related }

- [फ़्लो और फ़्लो की लिस्ट को समझें](flows-overview-and-list.md)
- [कोई ऐप कनेक्ट करें और उसे फ़्लो में इस्तेमाल करें](connect-apps-for-flows.md)
- [फ़्लो से स्टोर के मैसेज ऑटोमेट करें](store-journeys.md)
- [फ़्लो टेस्ट करें और फ़ेल रन ठीक करें](test-and-monitor-flows.md)
- [WhatsApp चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md)
