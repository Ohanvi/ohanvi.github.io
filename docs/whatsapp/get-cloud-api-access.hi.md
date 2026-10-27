---
title: Cloud API एक्सेस पाएँ
description: अपने व्हाट्सऐप बिज़नेस नंबर को आधिकारिक Meta Cloud API पर लाएँ, Ohanvi के असिस्टेड सेटअप से या खुद चरणों को फ़ॉलो करके।
---

# Cloud API एक्सेस पाएँ { #get-cloud-api-access }

Cloud API Access आपके व्हाट्सऐप बिज़नेस नंबर को आधिकारिक Meta Cloud API पर लाने में मदद करता है। आख़िर में आपका नंबर Meta के साथ वेरिफ़ाई हो जाता है और Ohanvi में कॉन्फ़िगरेशन के रूप में सेव हो जाता है। असिस्टेड सेटअप में करीब 2–3 कामकाजी दिन लगते हैं। अगर आपके दस्तावेज़ तैयार हैं, तो खुद करने में करीब 30–45 मिनट लगते हैं।

## शुरू करने से पहले { #before-you-start }

- आप **WhatsApp** पैनल में **Manage** खोल सकते हों। न खोल सकें तो अपने एडमिन से पूछें।
- आपके पास वह व्हाट्सऐप बिज़नेस नंबर हो जिसे आप इस्तेमाल करना चाहते हैं।
- खुद सेटअप करने के रास्ते के लिए, Meta वेरिफ़िकेशन के लिए आपके बिज़नेस दस्तावेज़ तैयार हों।

## रास्ता चुनें { #choose-a-route }

| रास्ता | किसके लिए सबसे अच्छा | क्या होता है |
| --- | --- | --- |
| **Ohanvi Assisted Setup** (**Recommended** के निशान के साथ) | जिन बिज़नेस का अभी कोई Meta सेटअप नहीं है | Ohanvi टीम आपका Meta Business Portfolio और डेवलपर ऐप बनाती है, आपका नंबर रजिस्टर करती है, एक्सेस टोकन और वेबहुक सेट करती है, और आपका पहला टेम्प्लेट मंज़ूर करवाती है। |
| **Do It Yourself** | जो बिज़नेस पहले से Meta Business Manager इस्तेमाल करते हैं | आप Meta पर खुद आवेदन करते हैं और अपने सभी Meta बिज़नेस एसेट के मालिक रहते हैं। |

!!! note "Meta बातचीत का बिल अलग से लेता है"
    Meta बातचीत के लिए अपनी कीमतों पर पैसे लेता है। Ohanvi प्लेटफ़ॉर्म शुल्क दोनों रास्तों पर लगता है।

## चरण { #steps }

### Cloud API Access खोलें { #open-cloud-api-access }

1. लेफ़्ट रेल में **WhatsApp** खोलें, फिर **Manage** चुनें।
2. **API Key** चुनें। **Cloud API Access** पेज खुलता है।

    ![Ohanvi Assisted Setup और Do It Yourself विकल्पों और आवेदन के चरणों के साथ Cloud API Access](../assets/screenshots/whatsapp-cloud-api-access-1-options.png)

3. अगर ऊपर कोई बैनर है, तो उसे पढ़ें:
    - **Cloud API connected** का मतलब है कि एक सक्रिय कॉन्फ़िगरेशन पहले से जुड़ा है। आप फिर भी और नंबर जोड़ सकते हैं।
    - **Assisted setup request under review** का मतलब है कि Ohanvi टीम को आपका अनुरोध मिल गया है और वह आपसे संपर्क करेगी।

### असिस्टेड सेटअप के लिए आवेदन करें { #apply-for-assisted-setup }

1. **Ohanvi Assisted Setup** कार्ड पर **Apply for Assisted Setup** पर क्लिक करें। **Apply for Assisted Setup** विंडो खुलती है।
2. अपना **Contact name \*** लिखें।
3. अपना **Contact phone \*** लिखें।
4. वैकल्पिक: अपना **Contact email** लिखें।
5. वैकल्पिक: अपना **Business name** और **Business website** लिखें।
6. **WhatsApp number to register (with country code)** लिखें।
7. वैकल्पिक: **Anything else we should know?** में वह सब लिखें जो टीम को पता होना चाहिए।
8. **Submit Request** पर क्लिक करें। संदेश **Request submitted — our team will contact you shortly.** दिखता है।

इसके बाद कार्ड पर लिखा होता है **Request pending — our team will reach out**।

### Meta खुद सेट करें { #set-up-meta-yourself }

1. **Do It Yourself** कार्ड पर **Continue with Facebook** पर क्लिक करें और Meta की विंडो फ़ॉलो करें। या अगर आपके पास पहले से स्थायी टोकन है, तो **I have an Access Token** पर क्लिक करें।
2. **How to apply on Meta yourself** तक स्क्रॉल करें। इसमें सात चरण हैं।
3. हर चरण को क्रम से फ़ॉलो करें:
    1. business.facebook.com पर **Create a Meta Business Portfolio**।
    2. developers.facebook.com पर Business प्रकार का **Create a developer app**।
    3. ऐप डैशबोर्ड में **Add the WhatsApp product**।
    4. WhatsApp → API Setup के नीचे **Add & verify your phone number**।
    5. Business Settings में System User के साथ **Generate a permanent access token**।
    6. **Copy your IDs**: Phone Number ID और WABA ID।
    7. **Complete business verification & go live**, फिर ऐप को Live मोड पर करें।

### अपने क्रेडेंशियल वेरिफ़ाई करें और सेव करें { #verify-your-credentials-and-save-them }

1. **Verify & connect with your credentials** तक स्क्रॉल करें।
2. **Permanent access token \*** में टोकन पेस्ट करें।
3. अपना **WABA ID \*** पेस्ट करें।
4. अपना **Phone Number ID** पेस्ट करें।
5. **API version** को वैसा ही रखें या बदलें।
6. **Configuration name** को वैसा ही रखें या बदलें।
7. **Verify with Meta** पर क्लिक करें। संदेश **Credentials verified with Meta.** आपके बिज़नेस के नाम और नंबर के साथ दिखता है।

8. **Save as Configuration** पर क्लिक करें। संदेश **Configuration saved. Activate it from WhatsApp → Configuration.** दिखता है।

!!! note "सेव करने के बाद नंबर जाँचें"
    सेव किया हुआ नंबर **Settings** → **WhatsApp** → **Configuration** में दिखता है। आपका पहला नंबर **Default** बन जाता है। दूसरा नंबर भी कनेक्ट होता है, और उसकी चैट के जवाब उसी से जाते हैं। उस पर **Make default** तभी क्लिक करें जब कैंपेन उसी से भेजने हों। देखें [कई व्हाट्सऐप नंबर चलाएँ](run-multiple-whatsapp-numbers.md)।

### अपने ऑनबोर्डिंग अनुरोध जाँचें { #check-your-onboarding-requests }

1. **My onboarding requests** तक स्क्रॉल करें।
2. हर पंक्ति पढ़ें। उसमें **Assisted setup** या **Self setup** लिखा होता है, और वह तारीख जब अनुरोध किया गया।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Contact name and phone are required.** | दोनों ज़रूरी बॉक्स में से एक खाली है। | **Contact name \*** और **Contact phone \*** भरें। |
| **Could not submit the request. Please try again.** | अनुरोध Ohanvi तक नहीं पहुँचा। | **Submit Request** पर दोबारा क्लिक करें। |
| **Verification failed** | Meta ने टोकन या IDs को अस्वीकार कर दिया। | टोकन, WABA ID और Phone Number ID जाँचें। फिर **Verify with Meta** पर दोबारा क्लिक करें। |
| **Could not save the configuration. Please check the details.** | कोई फ़ील्ड गलत या खाली है। | हर फ़ील्ड जाँचें और **Save as Configuration** पर दोबारा क्लिक करें। |
| सेव करने के बाद भी कैंपेन आपके पुराने नंबर से जा रहे हैं | जब तक आप दूसरा नंबर नहीं चुनते, कैंपेन Default नंबर से जाते हैं। | **Configuration** में नए नंबर पर **Make default** पर क्लिक करें, या अपने कैंपेन में **Send from** के नीचे उसे चुनें। |

## संबंधित गाइड { #related }

- [अपना व्हाट्सऐप नंबर कनेक्ट करें](connect-whatsapp-number.md)
- [कनेक्शन की सेहत जाँचें](check-connection-health.md)
- [व्हाट्सऐप नंबर एडिट करें](whatsapp-configuration-settings.md)
- [वेबहुक और इंटीग्रेशन](whatsapp-webhooks-and-integrations.md)
