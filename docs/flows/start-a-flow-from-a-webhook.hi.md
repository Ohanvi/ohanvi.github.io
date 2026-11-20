---
title: वेबहुक से फ़्लो शुरू करें
description: फ़्लो को उसका अपना वेबहुक URL दें, ताकि कोई भी ऐप, फ़ॉर्म या Google Sheet बटन उसे शुरू कर सके, फिर टेस्ट कॉल कैप्चर करें और उसके फ़ील्ड स्टेप में इस्तेमाल करें।
---

# वेबहुक से फ़्लो शुरू करें { #start-a-flow-from-a-webhook }

फ़्लो को उसका अपना वेबहुक URL दें। कोई भी ऐप, वेबसाइट फ़ॉर्म या Google Sheet बटन इस URL को कॉल करे, तो फ़्लो शुरू हो जाता है, और भेजा गया डेटा आपके स्टेप के लिए तैयार रहता है।

## शुरू करने से पहले { #before-you-start }

- आपके रोल के पास फ़्लो बनाने और बदलने का एक्सेस हो। देखें [फ़्लो और फ़्लो की लिस्ट को समझें](flows-overview-and-list.md)।
- फ़्लो कम से कम एक बार सेव हो चुका हो। वेबहुक URL सिर्फ़ सेव किए हुए फ़्लो का बनता है।
- Google Sheet बटन के लिए, आप शीट एडिट कर सकते हों और Google Sheets में **Extensions → Apps Script** खोल सकते हों।
- Zapier या Pabbly के लिए, इसकी जगह [Zapier कनेक्ट करें](../settings/connect-zapier.md) या [Pabbly कनेक्ट करें](../settings/connect-pabbly.md) देखें।

## वेबहुक URL क्या लेता है { #what-the-webhook-url-accepts }

| कॉल करने वाला भेजता है | फ़्लो को मिलता है |
| --- | --- |
| JSON बॉडी के साथ **POST** या **PUT** | JSON का हर फ़ील्ड `{{trigger.<field>}}` के रूप में, जैसे `{{trigger.order.id}}`। |
| फ़ॉर्म फ़ील्ड के साथ **POST** या **PUT** (`name=Asha&city=Pune`) | फ़ॉर्म का हर फ़ील्ड `{{trigger.<field>}}` के रूप में। एक ही नाम दो बार आए, तो वह लिस्ट बन जाता है। |
| URL में फ़ील्ड के साथ **GET** (`?name=Asha&city=Pune`) | URL का हर फ़ील्ड `{{trigger.<field>}}` के रूप में। |

हर कॉल के साथ `{{trigger._inbound.…}}` में कुछ जानकारी भी आती है:

| फ़ील्ड | इसमें क्या होता है |
| --- | --- |
| `{{trigger._inbound.method}}` | `GET`, `POST` या `PUT` |
| `{{trigger._inbound.query.<name>}}` | URL का कोई फ़ील्ड, जब कॉल में बॉडी भी हो |
| `{{trigger._inbound.headers.<name>}}` | कंटेंट टाइप, यूज़र एजेंट और कॉल करने वाले के अपने `X-…` हेडर। कुंजियाँ, पासवर्ड और सिग्नेचर कभी नहीं रखे जाते। |
| `{{trigger._inbound.receivedAt}}` | कॉल कब आई |

फ़ाइल अपलोड सपोर्ट नहीं है। लिंक प्रीव्यू और क्रॉलर, जैसे WhatsApp या Slack में लिंक पेस्ट करने पर आने वाला बॉट, अनदेखे किए जाते हैं और कुछ शुरू नहीं करते।

## स्टेप { #steps }

### वेबहुक URL बनाएँ { #create-the-webhook-url }

1. फ़्लो को बिल्डर में खोलें और **Save** पर क्लिक करें। तब तक पैनल में **Save the flow first. The webhook URL belongs to a saved flow.** लिखा रहता है।
2. कैनवस की शुरुआत में ट्रिगर पर क्लिक करें। **When this runs** पैनल खुलता है।
3. पैनल के सबसे ऊपर वाले बॉक्स पर क्लिक करें। उसकी दाईं तरफ़ **Change** लिखा होता है। **What starts this flow?** विंडो खुलती है।
4. **START** के नीचे **Webhook** पर क्लिक करें। उसकी लाइन में **Any app, form or Google Sheet button sends data to a URL** लिखा होता है।
5. **Webhook URL** के नीचे **Create webhook URL** पर क्लिक करें।
6. **Webhook URL** पर कॉपी बटन क्लिक करें और URL को सुरक्षित जगह रख लें।

    [SCREENSHOT: Webhook ट्रिगर पैनल, जिसमें Webhook URL, लाल रंग का "Copy it now" नोट, Google Sheet button (Apps Script) और Test URL दिख रहे हों]

!!! warning "URL सिर्फ़ एक बार दिखता है"
    पैनल में **Copy it now — for security it is shown only once. Reset link makes a new one (the old one stops working).** लिखा होता है। फ़्लो बंद करने के बाद URL दोबारा नहीं दिखाया जा सकता। जिसके पास URL है, वह फ़्लो शुरू कर सकता है, इसलिए इसे सिर्फ़ उसी ऐप को दें जिसे इसकी ज़रूरत है।

### टेस्ट कॉल कैप्चर करें { #capture-a-test-call }

टेस्ट कॉल आपके स्टेप के लिए फ़ील्ड रिकॉर्ड करती है। यह फ़्लो शुरू नहीं करती।

1. **Test event** के नीचे **Test URL** कॉपी करें। यह वही वेबहुक URL है, जिसके आख़िर में `/test` लगा है।
2. **Listen for test event** पर क्लिक करें। पैनल में **Listening for a test call…** लिखा आता है, और यह 5 मिनट तक हर 5 सेकंड में जाँच करता है।
3. अपने ऐप या फ़ॉर्म से टेस्ट URL पर एक कॉल भेजें। जैसे, टर्मिनल से:

    ```bash
    curl -X POST "<Test URL>" -H "Content-Type: application/json" \
      -d '{"name": "Asha", "phone": "919123456789", "order": {"id": "ORD-1042"}}'
    ```

4. दिखने वाले फ़ील्ड पढ़ें। पैनल में समय के साथ **From the latest call** और गिनती दिखती है, जैसे **3 fields received**।

अब ये फ़ील्ड हर स्टेप में `{{trigger.…}}` के रूप में मिलते हैं। जो वैल्यू किसी सीक्रेट जैसी दिखे, जैसे टोकन या पासवर्ड, वह `••••••••` के रूप में सेव होती है।

अगर टेस्ट URL स्क्रीन पर न दिखे, तो अपने वेबहुक URL के आख़िर में `/test` जोड़कर कॉल भेजें।

### फ़्लो पब्लिश करें { #publish-the-flow }

1. अपने स्टेप जोड़ें और ट्रिगर के फ़ील्ड मैप करें। देखें [ऑटोमेशन फ़्लो बनाएँ](build-automation-flow.md)।
2. **Save** पर क्लिक करें, फिर **Publish** पर क्लिक करें। देखें कि टूलबार के स्विच पर **Active** लिखा हो।
3. अपने ऐप में वेबहुक URL डालें, बिना `/test` के।

अब वेबहुक URL पर हर कॉल एक रन शुरू करती है। जो फ़्लो पब्लिश और एक्टिव नहीं है, उसकी कॉल ठुकरा दी जाती हैं।

### Google Sheet बटन से फ़्लो शुरू करें { #start-the-flow-from-a-google-sheet-button }

1. पैनल से **Google Sheet button (Apps Script)** कॉपी करें। यह सिर्फ़ तब दिखता है जब वेबहुक URL स्क्रीन पर हो।
2. अपनी Google Sheet में **Extensions → Apps Script** खोलें। स्क्रिप्ट पेस्ट करें और सेव करें।
3. शीट में बटन के लिए एक ड्रॉइंग या इमेज डालें।
4. ड्रॉइंग का मेन्यू खोलें, **Assign script** चुनें और `startOhanviFlow` टाइप करें। [VERIFY: Google Sheets मेन्यू का लेबल]
5. किसी रो का कोई सेल चुनें, फिर बटन पर क्लिक करें।

स्क्रिप्ट चुनी हुई रो भेजती है। हर कॉलम का हेडर एक फ़ील्ड बन जाता है, जैसे `Phone` हेडर वाले कॉलम के लिए `{{trigger.Phone}}`, साथ में `{{trigger.sheet}}` और `{{trigger.row}}`। शीट जवाब को एक छोटे पॉप-अप में दिखाती है, जैसे **Flow started.**

### एक ही इवेंट पर दो रन रोकें { #stop-duplicate-runs }

कुछ ऐप दोबारा कोशिश करते समय वही इवेंट दो बार भेजते हैं।

1. **More options** पर क्लिक करें।
2. **Duplicates** के नीचे, **Field that identifies one event (optional)** में वह फ़ील्ड लिखें जो एक इवेंट की पहचान है, जैसे `order.id`। बॉक्स के नीचे सुझाए गए किसी फ़ील्ड के नाम पर भी क्लिक कर सकते हैं।
3. सेव करने के लिए Enter दबाएँ या बॉक्स से बाहर क्लिक करें।

एक ही वैल्यू दो बार आए, तो फ़्लो एक ही बार शुरू होता है। कॉल करने वाले को **Already received; nothing new was started.** मिलता है। बॉक्स खाली छोड़ें, तो कॉल में सबसे ऊपर का `eventId` या `deliveryId` फ़ील्ड हो, तो वह इस्तेमाल होता है।

### URL बंद या रीसेट करें { #switch-off-or-reset-the-url }

1. **More options** पर क्लिक करें।
2. URL को रोकने के लिए **Accepting calls** बंद करें। तब उस पर **Switched off — calls are refused** लिखा आता है। उसके नीचे की लाइन बताती है कि कितनी कॉल आईं, जैसे **Received 12 times**।
3. URL बदलने के लिए **Reset link** पर क्लिक करें। **Reset the webhook URL?** में **Reset** पर क्लिक करें। पुराना URL तुरंत काम करना बंद कर देता है। नया URL हर उस ऐप, फ़ॉर्म या शीट को दें जो पुराना इस्तेमाल करते थे।

## कॉल करने वाले को क्या जवाब मिलता है { #what-the-caller-gets-back }

वेबहुक URL हर कॉल का जवाब JSON में देता है, जिसमें `message` होता है, और सफल होने पर `status` और `runId` भी।

| कोड | `message` | मतलब |
| --- | --- | --- |
| 200 | **Flow started.** | एक रन शुरू हुआ। |
| 200 | **Already received; nothing new was started.** | दोहराई गई कॉल। "एक ही इवेंट पर दो रन रोकें" देखें। |
| 200 | **Test call recorded for the flow builder. It did not start the flow.** | टेस्ट URL पर कॉल। |
| 404 | **Not found.** | URL गलत है, रीसेट हो चुका है, या बंद है। |
| 413 | **The body is larger than the 256 KB limit.** | कॉल ने बहुत ज़्यादा डेटा भेजा। |
| 415 | **Send JSON, a form or URL fields; file uploads aren't supported yet.** | कॉल ने फ़ाइल अपलोड करने की कोशिश की। |
| 422 | कोई कारण, जैसे फ़्लो पब्लिश और एक्टिव नहीं है | फ़्लो यह कॉल नहीं ले सकता। |
| 429 | **Too many calls. Retry in a moment.** | कोई सीमा पूरी हो गई। थोड़ा रुककर दोबारा कोशिश करें। |

हर वेबहुक URL की सीमा: एक मिनट में 60 कॉल। हर फ़्लो एक सेकंड में लगभग 5 रन तक, और हर वर्कस्पेस लगभग 10 रन तक शुरू करता है। [VERIFY: प्रति सेकंड की सीमाएँ सर्वर के डिफ़ॉल्ट हैं और बदल सकती हैं]

## Zapier या Pabbly इस्तेमाल करें { #use-zapier-or-pabbly }

पैनल में **Using Zapier? Add the Ohanvi app’s “Start Ohanvi Flow” action.** लिखा होता है। **More options** → **Authentication** में Zapier और Pabbly ऐप के लिए **URL (POST)**, **Header X-Api-Key** और **Body (JSON)** दिखते हैं। ये ऐप वेबहुक URL की जगह API की इस्तेमाल करते हैं। की और सेटअप के लिए देखें [Zapier कनेक्ट करें](../settings/connect-zapier.md) और [Pabbly कनेक्ट करें](../settings/connect-pabbly.md)।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **This flow has a webhook URL, made earlier. For security it can’t be shown again — reset the link to get a new one.** | URL पिछले सेशन में बना था। | अपनी सेव की हुई कॉपी इस्तेमाल करें। खो गई हो, तो **Reset link** पर क्लिक करें और हर कॉल करने वाले को नया URL दें। |
| कॉल करने वाले को **Not found.** मिलता है | URL गलत है, रीसेट हो चुका है, या **Accepting calls** बंद है। | URL जाँचें, **Accepting calls** चालू करें, या लिंक रीसेट करके नया URL भेजें। |
| कॉल करने वाले को 422 मिलता है कि फ़्लो पब्लिश और एक्टिव नहीं है | फ़्लो ड्राफ़्ट है या बंद है। | **Publish** पर क्लिक करें, फिर देखें कि टूलबार के स्विच पर **Active** लिखा हो। |
| **Listening for a test call…** रुक जाता है और कोई फ़ील्ड नहीं दिखता | 5 मिनट में टेस्ट URL पर कोई कॉल नहीं आई, या कॉल में कोई फ़ील्ड नहीं था। | देखें कि ऐप `/test` वाले URL पर कम से कम एक फ़ील्ड भेज रहा है। फिर से **Listen for test event** पर क्लिक करें। |
| चैट में पेस्ट किए लिंक से कुछ शुरू नहीं हुआ | लिंक प्रीव्यू जान-बूझकर अनदेखे किए जाते हैं। | URL को ऐप से ही कॉल करें, या `curl` से खोलें। |
| कॉल करने वाले को **Too many calls. Retry in a moment.** मिलता है | एक मिनट में 60 से ज़्यादा कॉल आईं, या फ़्लो व्यस्त है। | कॉल की रफ़्तार कम करें, या कुछ सेकंड बाद दोबारा कोशिश करवाएँ। |

## संबंधित गाइड { #related }

- [ऑटोमेशन फ़्लो बनाएँ](build-automation-flow.md)
- [स्टेप टेस्ट करें और सैंपल डेटा पिन करें](test-a-step-and-pin-sample-data.md)
- [किसी ऐप के इवेंट से फ़्लो शुरू करें](start-a-flow-from-an-app-event.md)
- [Zapier कनेक्ट करें](../settings/connect-zapier.md)
- [फ़्लो टेस्ट करें और फ़ेल रन ठीक करें](test-and-monitor-flows.md)
