---
title: साइनअप और पॉपअप फ़ॉर्म से साइनअप जुटाएँ
description: साइनअप फ़ॉर्म या वेबसाइट पॉपअप बनाएँ जो नए सब्सक्राइबर को सीधे ईमेल लिस्ट में जोड़ दे, चाहें तो डबल ऑप्ट-इन के साथ।
---

# साइनअप और पॉपअप फ़ॉर्म से साइनअप जुटाएँ { #collect-signups-with-signup-and-popup-forms }

ऐसा फ़ॉर्म बनाएँ जिसे भरकर विज़िटर आपकी ईमेल लिस्ट से जुड़ें: एम्बेड या होस्ट किया हुआ साइनअप फ़ॉर्म, या आपकी वेबसाइट पर पॉपअप। अंत में हर नया साइनअप आपकी चुनी हुई लिस्ट में पहुँचता है, और अपने-आप वेलकम जर्नी भी शुरू कर सकता है।

## शुरू करने से पहले { #before-you-start }

- नए सब्सक्राइबर के लिए आपके पास एक लिस्ट हो। देखें [ईमेल संपर्क, लिस्ट और सेगमेंट जोड़ें](manage-email-contacts.md)।
- डबल ऑप्ट-इन के लिए आपके पास कन्फ़र्मेशन ईमेल टेम्प्लेट हो। देखें [ईमेल टेम्प्लेट बनाएँ](create-email-template.md)।
- आप अपनी वेबसाइट एडिट कर सकते हों, या कोड स्निपेट उस व्यक्ति को भेज सकते हों जो कर सकता है।

!!! note "ये स्क्रीन कहाँ मिलेंगी"
    इस रिलीज़ में **Signup Forms** और **Popup Forms** **Email** पैनल में नहीं हैं। उन्हें लेफ़्ट रेल में **Forms** से खोलें, या अपने एडमिन से सीधा लिंक माँगें।

## चरण { #steps }

### साइनअप फ़ॉर्म बनाएँ { #build-a-signup-form }

1. **Signup Forms** खोलें। **Signup forms** स्क्रीन खुलती है।
2. **Create signup form** पर क्लिक करें। **Build a signup form** पेज खुलता है।
3. फ़ॉर्म को ऐसा नाम दें जिसे आपकी टीम पहचान सके।
4. **Form Type** में **Embedded**, **Pop-up**, **Fullscreen** या **Landing Page** चुनें।
5. वे फ़ील्ड चुनें जिन्हें विज़िटर भरेंगे, जैसे **Email Address**, **First Name**, **Last Name**, **Phone Number** या **Company**।
6. वह **Target List** चुनें जहाँ नए साइनअप जाएँगे।
7. वैकल्पिक: **Double Opt-in** चालू करें और **Confirmation Email Template** चुनें। नए साइनअप तब तक **Pending Confirmation** में रहते हैं जब तक वे कन्फ़र्मेशन ईमेल पर क्लिक नहीं करते, और तब तक उन्हें कैंपेन नहीं भेजे जाते।
8. वैकल्पिक: **Redirect URL after signup (optional)** में पता लिखें। खाली छोड़ने पर डिफ़ॉल्ट "Thanks for subscribing" संदेश दिखता है।
9. वैकल्पिक: **Branding**, **Localization** और **Enable Bot Protection** सेट करें।
10. **Create signup form** पर क्लिक करें।

### साइनअप फ़ॉर्म को अपनी साइट पर लगाएँ { #put-the-signup-form-on-your-site }

फ़ॉर्म सेव होने के बाद, प्रीव्यू एरिया में इस्तेमाल के 3 तरीके मिलते हैं:

- **Copy Embed Code** — कोड को अपनी वेबसाइट के किसी पेज में पेस्ट करें।
- **Copy Hosted Page URL** — Ohanvi का होस्ट किया हुआ साइनअप पेज शेयर करें। इसे **Landing Page** फ़ॉर्म के लिए इस्तेमाल करें।
- **Copy Endpoint URL** — अपने फ़ॉर्म से साइनअप Ohanvi को भेजें।

### पॉपअप फ़ॉर्म बनाएँ { #create-a-popup-form }

1. **Popup Forms** खोलें, फिर **Create popup form** पर क्लिक करें।
2. **What are you offering?** में पॉपअप के लिए इंसेंटिव चुनें।
3. **Choose a template** में कोई डिज़ाइन चुनें, फिर **Use this template** पर क्लिक करें।
4. **Popup name** में नाम लिखें। **Audience** में वह लिस्ट चुनें जिसमें नए सब्सक्राइबर जुड़ेंगे।
5. **What should it collect?** में **Email address** चुनें, और चाहें तो **Phone number (optional)** भी।
6. **Create form** पर क्लिक करें। पॉपअप एडिटर खुलता है।
7. टेक्स्ट, रंग, **THANK-YOU MESSAGE** और **REWARD CODE** एडिट करें, जैसे `WELCOME10`। **Save and close** पर क्लिक करें।

### पॉपअप को अपनी साइट पर पब्लिश करें { #publish-the-popup-on-your-site }

1. पॉपअप खोलें। **Where should it show?** में **YOUR SITE** के अंदर अपनी साइट का पता लिखें, जैसे `https://www.example.com`।
2. **All pages** या **Specific pages** चुनें। खास पेजों के लिए **SHOW ON PAGES CONTAINING** और **NEVER SHOW ON PAGES CONTAINING** भरें। **Save site settings** पर क्लिक करें।
3. **INSTALL SNIPPET** में स्निपेट कॉपी करें और अपनी साइट पर `</head>` से पहले पेस्ट करें।
4. **Who should see it?** में **All visitors**, **New visitors only** या **Returning subscribers only** चुनें।
5. **Publish or schedule** पर क्लिक करें। पॉपअप लाइव होने पर **Showing on your site now.** दिखाता है।

**Performance** सेक्शन में **Impressions**, **Subscribers** और **Conversion** दिखते हैं। पॉपअप रोकने के लिए **Pause** पर क्लिक करें।

### वेलकम ईमेल अपने-आप शुरू करें { #start-a-welcome-email-automatically }

हर नए सब्सक्राइबर का स्वागत करने के लिए उसी लिस्ट पर **Signs up for email** शुरुआती बिंदु वाली जर्नी बनाएँ। देखें [जर्नी से ईमेल ऑटोमेट करें](create-email-automation.md)।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Copy Embed Code** बटन नहीं दिख रहा | फ़ॉर्म अभी सेव नहीं हुआ है। | पहले **Create signup form** पर क्लिक करें। |
| **Enter a valid http(s) URL, or leave blank** | रीडायरेक्ट पता `http://` या `https://` से शुरू नहीं होता। | पूरा पता लिखें, या खाली छोड़ दें। |
| नए साइनअप को कैंपेन नहीं मिल रहे | **Double Opt-in** चालू है और उन्होंने कन्फ़र्म नहीं किया है। | उनके कन्फ़र्मेशन ईमेल पर क्लिक करने का इंतज़ार करें। |
| **No impressions yet — add your site address below to get started.** | साइट का पता सेव नहीं है, या स्निपेट इंस्टॉल नहीं हुआ है। | **YOUR SITE** भरें, स्निपेट इंस्टॉल करें, फिर पब्लिश करें। |
| **You need an audience list before a popup can collect contacts.** | कोई लिस्ट मौजूद नहीं है। | **Audience** → **Email Groups** में लिस्ट बनाएँ, फिर वापस आएँ। |

## संबंधित गाइड { #related }

- [ईमेल संपर्क, लिस्ट और सेगमेंट जोड़ें](manage-email-contacts.md)
- [जर्नी से ईमेल ऑटोमेट करें](create-email-automation.md)
- [ईमेल का ओवरव्यू](../email/index.md)

<!-- Menu paths updated: Lists is now Audience > Email Groups. -->
