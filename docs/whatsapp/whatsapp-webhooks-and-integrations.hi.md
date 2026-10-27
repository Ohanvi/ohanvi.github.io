---
title: WhatsApp वेबहुक और इंटीग्रेशन सेट करें
description: Meta का वेबहुक कनेक्ट करें ताकि डिलीवरी और मैसेज इवेंट Ohanvi तक पहुँचें, Developer API key बनाएँ, और WhatsApp पर BUSY इनवॉइस मैसेज भेजें।
---

# WhatsApp वेबहुक और इंटीग्रेशन सेट करें { #set-up-whatsapp-webhooks-and-integrations }

यहाँ 3 WhatsApp कनेक्शन सेट होंगे, जो Ohanvi को दूसरे सिस्टम से जोड़ते हैं: Meta वेबहुक, Developer API और BUSY। इसके बाद डिलीवरी और मैसेज इवेंट Ohanvi में आने लगेंगे, आपका अपना सॉफ़्टवेयर WhatsApp मैसेज भेज सकेगा, और BUSY के इनवॉइस WhatsApp पर जाएँगे।

## शुरू करने से पहले { #before-you-start }

- आपका WhatsApp नंबर Ohanvi से कनेक्ट होना चाहिए। देखें [अपना WhatsApp नंबर कनेक्ट करें](connect-whatsapp-number.md)।
- आप एडमिन हों, या आपके रोल को इन स्क्रीन का एक्सेस मिला हो। देखें [रोल और अनुमतियाँ](../settings/roles-and-permissions.md)।
- BUSY के लिए: आपके पास ऐसा Approved टेम्प्लेट होना चाहिए जिसकी बॉडी में ठीक 1 वेरिएबल, `{{1}}`, हो। देखें [WhatsApp मैसेज टेम्प्लेट बनाएँ](create-message-template.md)।

## ये स्क्रीन कहाँ मिलेंगी { #where-to-find-these-screens }

नीचे बाएँ में अपने नाम के पहले अक्षरों पर क्लिक करें, फिर **Settings** पर। **WhatsApp** के नीचे **Webhooks** या **BUSY** चुनें। Developer API **Settings** → आपका नाम → **Developer** → **Developer APIs** में है।

कोई भी WhatsApp सेटअप स्क्रीन खोलकर ऊपर के टैब भी इस्तेमाल कर सकते हैं: **Configuration**, **Webhooks**, **Business Profile**, **Website Button**, **BUSY** और **Migrate to Ohanvi**। BUSY लेफ़्ट रेल में **Connect** के नीचे **BUSY (Accounting)** नाम से भी मिलता है।

| स्क्रीन | किसलिए है |
| --- | --- |
| **Webhooks** | Meta मैसेज और डिलीवरी इवेंट रियल टाइम में Ohanvi को भेजता है। इसके बिना कैंपेन में **Delivered** या **Read** कभी नहीं दिखेगा, और ग्राहकों के जवाब **Inbox** में नहीं आएँगे। |
| **Developer API** | इससे आपकी वेबसाइट, स्टोर या बैकएंड API key की मदद से Ohanvi के ज़रिए WhatsApp मैसेज भेज सकता है। |
| **BUSY** | BUSY अकाउंटिंग से इनवॉइस और पेमेंट के मैसेज WhatsApp पर भेजता है। |

## स्टेप्स { #steps }

### Meta वेबहुक कनेक्ट करें { #connect-the-meta-webhook }

1. नीचे बाएँ कोने में अपने नाम के पहले अक्षरों पर क्लिक करें, **Settings** पर क्लिक करें, **WhatsApp** चुनें, फिर **Webhooks**। **Callback Endpoint** कार्ड में आपका **Webhook URL** और **Verify Token** दिखता है। उसके बगल वाले **Setup in Meta** कार्ड में यही स्टेप लिखे हैं।

    ![Callback Endpoint, जिसमें Webhook URL और Verify Token दिख रहे हैं, और Setup in Meta कार्ड](../assets/screenshots/whatsapp-webhooks-1-callback.png)

2. **Verify Token** में **Not set — add one in Configuration, then paste it into Meta.** दिखे, तो पहले **Configuration** में एक वेरिफ़ाई टोकन जोड़ें।
3. नए टैब में Meta Developer Console → आपका ऐप → **WhatsApp** → **Configuration** खोलें।
4. Ohanvi में **Webhook URL** के बगल में **Copy** पर क्लिक करें और उसे Meta में पेस्ट करें।
5. **Verify Token** के बगल में **Copy** पर क्लिक करें और उसे Meta में पेस्ट करें। फिर सेव करें।
6. Meta में **messages** वेबहुक फ़ील्ड को सब्सक्राइब करें और सेव करें।
7. अपने नंबर पर एक टेस्ट मैसेज भेजें। वह तुरंत **Inbox** में दिख जाता है।
8. Ohanvi में लौटकर **Webhook Events** के बगल के रीफ़्रेश आइकन पर क्लिक करें। इवेंट लिस्ट में दिखेगा। पहला इवेंट आने तक वहाँ **No events yet** लिखा रहता है।

### अपने सॉफ़्टवेयर से मैसेज भेजें (Developer API) { #send-messages-from-your-own-software-developer-api }

1. **Settings** में अपने नाम पर क्लिक करें, फिर **Developer** के नीचे **Developer APIs** खोलें। इसमें 3 टैब हैं: **API Keys**, **Usage Log** और **Docs**। अभी कोई key नहीं है, तो **No API keys yet** और **Create your first key** दिखता है।

    ![Developer API, जिसमें API Keys, Usage Log और Docs टैब और Create key बटन दिख रहे हैं](../assets/screenshots/whatsapp-developer-api-1-keys.png)

2. **Create key** पर क्लिक करें। **Create API key** विंडो खुलती है।
3. **Key name** लिखें, जैसे `Website checkout`।
4. **Expires after** चुनें: **30 days**, **90 days**, **1 year** या **Never expires**। शुरू में **1 year** चुना हुआ रहता है।

    ![Create API key विंडो, जिसमें Key name, Expires after के विकल्प और Create key बटन दिख रहे हैं](../assets/screenshots/whatsapp-developer-api-2-create-key.png)

5. **Create key** पर क्लिक करें। **Your API key — copy it now** खुल जाता है।
6. **Copy key** पर क्लिक करें और key को किसी सुरक्षित जगह रख लें। **I have copied the key and stored it somewhere safe.** पर टिक करें और **Done** पर क्लिक करें।

!!! warning "key सिर्फ़ एक बार दिखती है"
    Ohanvi key को हैश करके रखता है, इसलिए वह दोबारा नहीं दिखा सकता। key खो जाए, तो उसे Revoke करें और नई key बनाएँ।

यह key सिर्फ़ आपके ऑर्गनाइज़ेशन के WhatsApp मैसेज भेज सकती है। इससे कॉन्टैक्ट, कैंपेन या कुछ और नहीं पढ़ा जा सकता। इससे भेजा हर मैसेज **Usage Log** में **Queued**, **Sent** या **Failed** के रूप में दिखता है। बाकी मैसेज की तरह इसका चार्ज भी आपके क्रेडिट से कटता है।

रिक्वेस्ट कैसे भेजनी हैं, यह जानने के लिए **Docs** टैब और [डेवलपर API से WhatsApp मैसेज भेजें](../settings/developer-apis.md) देखें।

किसी key को बंद करना हो, तो उस पर **Revoke** पर क्लिक करें, फिर **Revoke this key?** में **Revoke** पर क्लिक करें।

### WhatsApp पर BUSY इनवॉइस भेजें { #send-busy-invoices-on-whatsapp }

BUSY → WhatsApp सिर्फ़ एक तरफ़ चलता है। BUSY जब इनवॉइस मैसेज भेजता है, तो Ohanvi उसे आपके टेम्प्लेट से WhatsApp पर पहुँचा देता है। यह BUSY का डेटा सिंक नहीं करता और आपकी इन्वेंटरी नहीं पढ़ता।

1. **Settings** → **WhatsApp** में **BUSY** खोलें। ऊपर दाईं ओर का स्विच **Off** से **On** करें।

    ![BUSY to WhatsApp पेज, जिसमें Off स्विच, 1. Template, 2. BUSY URL और 3. Enter these in BUSY दिख रहे हैं](../assets/screenshots/whatsapp-busy-1-setup.png)

2. **1. Template** में ऐसा Approved टेम्प्लेट चुनें जिसकी बॉडी में ठीक 1 वेरिएबल, `{{1}}`, हो। BUSY का मैसेज इसी में जाएगा। टेम्प्लेट में मीडिया हेडर या डायनेमिक बटन नहीं हो सकते। **Utility** कैटेगरी में `Message from {{business}}: {{1}} Thank you.` जैसी बॉडी चलती है। इसमें `{{business}}` की जगह अपने बिज़नेस का नाम डालें।
3. **Country code for 10-digit numbers** सेट करें, जैसे `91`, और **Save** पर क्लिक करें।
4. **2. BUSY URL** में **Generate URL** पर क्लिक करें। **Your BUSY URL — copy it now** खुल जाता है।
5. **Copy URL** पर क्लिक करें। **I have pasted this URL into BUSY or stored it safely.** पर टिक करें और **Done** पर क्लिक करें।
6. BUSY में **Administration** → **Configuration** → **WhatsApp/SMS Configuration** → **Add New Format** पर जाएँ।
7. **3. Enter these in BUSY** में जो वैल्यू दिखती हैं, उन्हें बिल्कुल वैसे ही डालें:

    | BUSY फ़ील्ड | वैल्यू |
    | --- | --- |
    | **Format Name** | `OHANVI_WA` (कोई भी नाम चलेगा) |
    | **Server** | **Service Provider Server** |
    | **WhatsApp/SMS API** | स्टेप 5 वाला URL |
    | **User Name, Password, Senders ID** | खाली छोड़ें |
    | **Mobile** | Ohanvi जो पैरामीटर नाम दिखाए। आम तौर पर `receiverMobileNo` |
    | **Message** | Ohanvi जो पैरामीटर नाम दिखाए। आम तौर पर `message` |
    | **No. of Other Parameters** | `0` |
    | **Treatment of Mobile Number** | जैसा है, वैसा रहने दें |
    | **Upload PDF** | PDF सेट होने तक बंद रखें |

    पेमेंट कन्फ़र्मेशन भेजने के लिए Receipt वाउचर पर **Send SMS after saving** भी चालू करें। एक साथ कई लोगों को पेमेंट रिमाइंडर भेजने के लिए **Separate Internet Call for Each Number During Bulk SMS** पर टिक करें। पैरामीटर के नाम में छोटे-बड़े अक्षर का फ़र्क पड़ता है।

8. **4. Test** में **Send a test to** में नंबर लिखें और **Send test** पर क्लिक करें। **Test message queued. Its status appears under Recent activity.** दिखता है।
9. BUSY से एक असली इनवॉइस भेजें। देखें कि वह **Recent activity** में दिख रहा है।

Ohanvi से किया गया टेस्ट सिर्फ़ Ohanvi की तरफ़ का सेटअप जाँचता है। BUSY ठीक से सेट है या नहीं, यह BUSY से असली इनवॉइस भेजने पर ही पता चलता है।

!!! warning "BUSY URL जिसके पास हो, वह आपके बिज़नेस के नाम से मैसेज भेज सकता है"
    URL में एक सीक्रेट key होती है और वह सिर्फ़ एक बार दिखता है। अगर URL लीक होने का शक हो, तो **Revoke URL** पर क्लिक करें। उसके बाद BUSY के मैसेज तुरंत रिजेक्ट होने लगते हैं।

URL बदलना हो, तो **Create new URL** पर क्लिक करें, फिर **Create a new BUSY URL?** विंडो में दोबारा **Create new URL** पर क्लिक करें। BUSY में नया URL डालने के बाद **Stop old URL now** इस्तेमाल करें। पुराना URL 24 घंटे तक चलता रहता है, इसलिए नया URL इसी समय के अंदर BUSY में पेस्ट कर दें।

#### वैकल्पिक: इनवॉइस PDF और स्टॉक { #optional-invoice-pdfs-and-stock }

- **Invoice PDF (optional)**: 1 `{{1}}` वेरिएबल वाला **PDF template (document header)** चुनें। इसे बंद रखें, BUSY में **Upload PDF** चालू करके 1 इनवॉइस भेजें, फिर **Recent activity** में देखें कि BUSY ने फ़ाइल किस तरह भेजी। उससे मेल खाने वाला विकल्प चुनें और **Save PDF settings** पर क्लिक करें।
- **Stock from BUSY**: BUSY से लाइव स्टॉक नहीं माँगा जा सकता। BUSY से Stock Status रिपोर्ट Excel या CSV में एक्सपोर्ट करें और **Upload stock report** पर क्लिक करें। इसके बाद WhatsApp AI एजेंट "X कितना बचा है?" का जवाब दे सकता है। जवाब आखिरी अपलोड के हिसाब से होगा। देखें [AI एजेंट सेट करें](set-up-ai-agent.md)।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Webhooks** पर **No events yet** | Meta में वेबहुक सेट नहीं है, या **messages** सब्सक्राइब नहीं किया है। | वेबहुक के स्टेप दोबारा करें और **messages** फ़ील्ड सब्सक्राइब करें। |
| कैंपेन **Sent** पर ही अटके रहते हैं, **Delivered** कभी नहीं दिखता | डिलीवरी इवेंट Ohanvi तक नहीं पहुँच रहे। | देखें कि Meta में **Webhook URL** और **Verify Token** वही हैं जो Ohanvi में दिखते हैं। |
| API key खो गई | key सिर्फ़ एक बार दिखती है। | key Revoke करें और नई बनाएँ। |
| **No approved template qualifies yet. Create one under WhatsApp → Templates.** | किसी भी Approved टेम्प्लेट में ठीक 1 `{{1}}` वेरिएबल नहीं है। | एक टेम्प्लेट बनाएँ, जैसे `Message from Sharma Traders: {{1}} Thank you.`, और उसके **Approved** होने का इंतज़ार करें। |
| **Connect a WhatsApp number first (WhatsApp → Configuration).** | कोई WhatsApp नंबर कनेक्ट नहीं है। | पहले अपना नंबर कनेक्ट करें, फिर **BUSY** दोबारा खोलें। |
| **BUSY has not called this URL yet.** | BUSY अभी यह URL इस्तेमाल नहीं कर रहा। | BUSY के WhatsApp/SMS Configuration की वैल्यू जाँचें, फिर BUSY से इनवॉइस भेजें। |

## संबंधित गाइड { #related }

- [डेवलपर API से WhatsApp मैसेज भेजें](../settings/developer-apis.md)
- [ब्रॉडकास्ट कैंपेन भेजें](send-broadcast-campaign.md)
- [WhatsApp मैसेज टेम्प्लेट बनाएँ](create-message-template.md)
- [सेटिंग्स](../settings/index.md)
