---
title: कोई ऐप कनेक्ट करें और उसे फ़्लो में इस्तेमाल करें
description: कनेक्टर ऐप का कनेक्शन जोड़ें, उसे टेस्ट करें, और फ़्लो के चरण से ऐप के ऑपरेशन चलाएँ या उसके रिकॉर्ड या वेबहुक से फ़्लो शुरू करें।
---

# कोई ऐप कनेक्ट करें और उसे फ़्लो में इस्तेमाल करें { #connect-an-app-and-use-it-in-a-flow }

कनेक्टर कैटलॉग के ज़रिए कोई बाहरी ऐप, जैसे स्टोर या CRM, कनेक्ट करें और उसे अपने फ़्लो में इस्तेमाल करें। आखिर में आपके पास एक टेस्ट किया हुआ कनेक्शन होता है और एक फ़्लो चरण, जो उसी कनेक्शन के रूप में ऐप का कोई ऑपरेशन चलाता है।

## शुरू करने से पहले { #before-you-start }

- **Connect** पैनल में आपको **Connectors** दिखता है। यह स्क्रीन डिफ़ॉल्ट रूप से एडमिन के लिए है। अगर यह नहीं दिखता, तो अपने एडमिन से पूछें।
- आपके पास ऐप के क्रेडेंशियल हैं, जैसे API key, या आप ऐप में साइन इन करके एक्सेस मंज़ूर कर सकते हैं।
- ऐप कैटलॉग में सूचीबद्ध है। Ohanvi में पहले से बने ऐप, जैसे आपका स्टोर, व्हाट्सऐप और Google Workspace, अपनी-अपनी स्क्रीन पर कनेक्ट होते हैं और उन्हें कैटलॉग की ज़रूरत नहीं होती। Google ऐप के लिए नीचे "Google ऐप कनेक्ट करें" देखें।

## कनेक्टर कैसे काम करते हैं { #how-connectors-work }

- **कनेक्टर** (कैटलॉग में मौजूद ऐप) किसी बाहरी ऐप और उसके **ऑपरेशन** का ब्योरा देता है, जैसे "ग्राहक खोजें" या "ऑर्डर बनाएँ"।
- **कनेक्शन** में उस ऐप के लिए आपके अकाउंट के क्रेडेंशियल रहते हैं। क्रेडेंशियल एन्क्रिप्ट करके रखे जाते हैं।
- फ़्लो चरण एक ऑपरेशन चुनता है और वह कनेक्शन जिससे वह साइन इन करता है। पब्लिश किए गए फ़्लो उसी ऑपरेशन वर्शन पर रहते हैं जिसके साथ उन्हें बनाया गया था, इसलिए कैटलॉग में बदलाव से वे नहीं बदलते।

## चरण { #steps }

### Google ऐप कनेक्ट करें { #connect-a-google-app }

Google Sheets, Google Calendar, Google Meet, Google Forms और Google Contacts Ohanvi में पहले से बने हैं, इसलिए ये कनेक्टर कैटलॉग से नहीं गुज़रते।

1. लेफ़्ट रेल में **Connect** खोलें, फिर **Connectors** के नीचे **Google Workspace** चुनें।
2. हर कार्ड पढ़ें। **In flows** बताता है कि ऐप फ़्लो में क्या कर सकता है, जैसे Google Sheets के लिए **Add a row · Read rows · Create a spreadsheet**। साइन इन करने तक कार्ड पर **Not connected** दिखता है।

    ![Google Workspace में Google Sheets, Calendar, Meet, Forms और Contacts के कार्ड](../assets/screenshots/flows-connect-1-google-workspace.png)

3. जिस कार्ड की ज़रूरत हो उसका बटन दबाएँ, जैसे **Connect Google Sheets**। **Sign in with Google** विंडो खुलती है।
4. अपना Google अकाउंट चुनें और एक्सेस की अनुमति दें। हर ऐप सिर्फ़ अपना एक्सेस माँगता है।

    ![Sign in with Google विंडो, Choose an account to continue to Ohanvi](../assets/screenshots/flows-connect-2-google-signin.png)

इसके बाद जुड़ा हुआ अकाउंट **Google accounts** के नीचे दिखता है। एक साथ कई ऐप को एक्सेस देने के लिए **Connect Google** इस्तेमाल करें।

Ohanvi सिर्फ़ वही स्प्रेडशीट और फ़ॉर्म खोलता है जिन्हें आप उसके लिए **Choose from Google Drive** से चुनते हैं, और वे स्प्रेडशीट जो वह खुद बनाता है। डिस्कनेक्ट करने समेत हर विकल्प के लिए देखें [Google Workspace कनेक्ट करें](../settings/connect-google-workspace.md)।

### कनेक्टर कैटलॉग खोलें { #open-the-connector-catalog }

1. लेफ़्ट रेल में **Connect** खोलें, फिर **Connectors** के नीचे **Connectors** चुनें। **Connectors** स्क्रीन खुलती है।
2. **Search connectors** में लिखें, या लाइफ़साइकल (**Published**, **Draft**, **Deprecated**) और दायरे (**Shared catalog**, **Private connector**) से फ़िल्टर करें।
3. ऐप के कार्ड पर **Manage** पर क्लिक करें। ऐप **Overview**, **Operations**, **Connections** टैब के साथ खुलता है, और अगर ऐप में हों तो **Webhooks** टैब भी।

### कनेक्शन जोड़ें { #add-a-connection }

1. **Connections** टैब खोलें।
2. **Add connection** पर क्लिक करें। ऐप के नाम के साथ **Connect** विंडो खुलती है।
3. **Label** में ऐसा नाम लिखें जिससे यह अकाउंट अलग पहचाना जाए, जैसे `Main store`। लेबल ऐप के लिए अनोखा होना चाहिए।
4. ऐप जो भी फ़ील्ड माँगे उन्हें भरें, जैसे शॉप का पता। ज़रूरी फ़ील्ड पर निशान होता है।
5. **Credentials (JSON)** में दिखाए गए फ़ॉर्मैट में key पेस्ट करें, जैसे `{"apiKey": "…"}`। OAuth से साइन इन करने वाले ऐप के लिए इसे खाली छोड़ें।
6. **Who can build on this** में **Only me**, **Everyone in this organisation** या **A specific role** चुनें। रोल के लिए उसे **Role** में लिखें।
7. **Connect** पर क्लिक करें। **Connection saved.** संदेश आता है और कनेक्शन सूची में दिखता है।

### OAuth ऐप में साइन इन करें { #sign-in-to-an-oauth-app }

1. कनेक्शन की पंक्ति पर **Connect account** पर क्लिक करें। ऐप की सहमति वाली स्क्रीन नई विंडो में खुलती है।
2. ऐप में साइन इन करें और वहीं एक्सेस मंज़ूर करें।
3. Ohanvi पर लौटें। **Approve in the other window** संदेश में **Done** पर क्लिक करें।
4. संदेश देखें। **Connected.** का मतलब है कि ऐप ने अपना टोकन भेज दिया।

सहमति का लिंक 15 मिनट बाद खत्म हो जाता है। अगर खत्म हो जाए, तो **Connect account** पर फिर क्लिक करें।

### कनेक्शन टेस्ट करें { #test-the-connection }

1. कनेक्शन की पंक्ति पर **Test connection** पर क्लिक करें।
2. संदेश पढ़ें। **Looks good.** का मतलब है कि ऐप ने क्रेडेंशियल मान लिए। पंक्ति में समय के साथ **Last tested** दिखता है।

किसी एक ऑपरेशन को सचमुच आज़माने के लिए **Operations** टैब खोलें और ऑपरेशन पर प्ले आइकन (टूलटिप **Test run**) पर क्लिक करें। कोई **Connection** चुनें, **Input (JSON)** लिखें और **Run** पर क्लिक करें। **Test result** विंडो में HTTP स्टेटस और रिस्पॉन्स दिखता है।

!!! warning "टेस्ट रन असली कॉल होता है"
    टेस्ट रन ऐप को असल में कॉल करते हैं। जिस ऑपरेशन पर **Not retry-safe — a retry would duplicate its effect** लिखा है, वह हर बार चलाने पर एक असली रिकॉर्ड बनाता है।

### फ़्लो चरण में ऑपरेशन इस्तेमाल करें { #use-an-operation-in-a-flow-step }

1. फ़्लो को बिल्डर में खोलें। देखें [ऑटोमेशन फ़्लो बनाएँ](build-automation-flow.md)।
2. किसी चरण के बाद **+** पर क्लिक करें, **All steps** पर क्लिक करें, और **Advanced** के नीचे **Action** पर क्लिक करें।
3. **Step** पैनल में **This step will** खोलें और ऑपरेशन चुनें। कनेक्टर ऑपरेशन ऐप के नाम, एक बिंदु और ऑपरेशन के रूप में दिखते हैं, जैसे `Acme CRM · Find customer`।
4. **Connection** के नीचे **Signs in as** में अकाउंट चुनें।
5. **Advanced** पर क्लिक करें और **Input mapping (JSON)** में भेजे जाने वाले मान भरें, जैसे `{ "email": "{{trigger.email}}" }`।
6. **Save** पर क्लिक करें, फिर **Publish** पर।

मैपिंग के मानों में ट्रिगर और पिछले चरणों का डेटा इस्तेमाल हो सकता है। देखें [ऑटोमेशन फ़्लो बनाएँ](build-automation-flow.md) में "Use data from the trigger or an earlier step"।

### किसी ऐप से फ़्लो शुरू करें { #start-a-flow-from-an-app }

- **New records** — फ़्लो के **When this runs** पैनल में **When a record appears** चुनें। **Trigger operation** और **Connection** चुनें। पहली जाँच सिर्फ़ यह निशान लगाती है कि शुरुआत कहाँ से करनी है, इसलिए पहले से मौजूद रिकॉर्ड से रन शुरू नहीं होते।
- **Webhooks** — कनेक्टर के **Webhooks** टैब पर **Connection** चुनें और किसी इवेंट के बगल में **Subscribe** पर क्लिक करें। फ़्लो में **When a webhook arrives** चुनें और **Connection** में कनेक्शन भरें। अगर पंक्ति में **Registered locally** लिखा है, तो उसका कॉलबैक URL ऐप में पेस्ट करें। उसे कॉपी करने के लिए कॉपी आइकन (टूलटिप **Copy callback URL**) पर क्लिक करें।

### कनेक्शन ठीक करें या हटाएँ { #fix-or-remove-a-connection }

1. अगर किसी पंक्ति में **needs re-auth** या **error** दिखे, तो उसके नीचे का नोट पढ़ें।
2. टोकन रीफ़्रेश करने के लिए **Reconnect** पर क्लिक करें, या एक्सेस दोबारा मंज़ूर करने के लिए **Connect account** पर।
3. लेबल या क्रेडेंशियल बदलने के लिए पंक्ति का **More** मेनू खोलें और **Edit** पर क्लिक करें।
4. इस्तेमाल बंद करने के लिए **Revoke** (क्रेडेंशियल मिटाता है) या **Delete** (कनेक्शन हटाता है) पर क्लिक करें।

!!! warning "कनेक्शन इस्तेमाल करने वाले फ़्लो काम करना बंद कर देते हैं"
    **Revoke** या **Delete** के बाद, इस कनेक्शन से साइन इन करने वाले चरण फ़ेल हो जाते हैं और उस पर रजिस्टर किए गए वेबहुक बंद हो जाते हैं। पुराने रन का इतिहास बना रहता है।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| Step पैनल में **No connections yet. Connect the app under Integrations → Connectors before this step can authenticate.** लिखा है | ऐप का कोई कनेक्शन आपके इस्तेमाल के लिए नहीं है। | कनेक्शन जोड़ें, फिर फ़्लो दोबारा खोलें। |
| **This step will** में सिर्फ़ Ohanvi के अपने एक्शन दिख रहे हैं | कोई कनेक्टर ऐप सेट नहीं है, या कैटलॉग लोड नहीं हुआ। | **Connect** → **Connectors** में ऐप सेट करें, फिर फ़्लो दोबारा खोलें। |
| **No token arrived yet. If you approved, press Connect account again…** | आपने मंज़ूरी पूरी नहीं की, या लिंक की अवधि खत्म हो गई। | **Connect account** पर फिर क्लिक करें और 15 मिनट के अंदर मंज़ूरी दें। |
| **The provider rejected the stored credential. Use Connect account to consent again.** | ऐप में key या टोकन की अवधि खत्म हो गई या उसे रद्द कर दिया गया। | **Connect account** पर क्लिक करें, या **Edit** पर क्लिक करके नई key पेस्ट करें। |
| **You cannot publish a flow that uses a connection you do not have access to.** | चरण ऐसे कनेक्शन से साइन इन करता है जो सिर्फ़ किसी और के साथ शेयर है। | **Signs in as** में अपना कनेक्शन चुनें, या मालिक से उसे शेयर करने को कहें। |
| **The connection this step uses no longer exists.** | कनेक्शन डिलीट कर दिया गया था। | **Signs in as** में कोई दूसरा कनेक्शन चुनें, फिर पब्लिश करें। |

## संबंधित गाइड { #related }

- [ऑटोमेशन फ़्लो बनाएँ](build-automation-flow.md)
- [फ़्लो टेस्ट करें और फ़ेल हुए रन ठीक करें](test-and-monitor-flows.md)
- [फ़्लो और फ़्लो की सूची को समझें](flows-overview-and-list.md)
- [अपनी या Ohanvi की मैनेज्ड सेवाएँ चुनें](../settings/choose-connectors.md)
