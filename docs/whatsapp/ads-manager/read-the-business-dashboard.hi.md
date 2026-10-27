---
title: बिज़नेस डैशबोर्ड पढ़ें
description: Business dashboard पर अपने स्टोर की बिक्री और विज्ञापन के खर्च की तुलना करें। MER, ROAS, CAC और मुनाफ़ा पढ़ें, और रिपोर्ट शेयर, शेड्यूल या डाउनलोड करें।
---

# बिज़नेस डैशबोर्ड पढ़ें { #read-the-business-dashboard }

**Business dashboard** में आप देख सकते हैं कि आपके स्टोर ने कितना बेचा और उसके मुकाबले विज्ञापनों पर कितना खर्च हुआ। इस गाइड के अंत तक आप किसी भी अवधि की कमाई, विज्ञापन खर्च पर रिटर्न, नए ग्राहक की लागत और मुनाफ़ा पढ़ना सीख जाएँगे। साथ ही रिपोर्ट को डाउनलोड, शेड्यूल या शेयर भी कर पाएँगे। इसमें करीब 10 मिनट लगते हैं।

## शुरू करने से पहले { #before-you-start }

- आपका Meta ad account कनेक्ट है। देखें [Ads Manager सेट करें](set-up-ads-manager.md)।
- Shopify या WooCommerce कनेक्ट है, ताकि Ohanvi आपके स्टोर के ऑर्डर देख सके। देखें [वेबहुक और इंटीग्रेशन](../whatsapp-webhooks-and-integrations.md)।
- आपके विज्ञापन लोगों को आपके स्टोर पर भेजते हैं। Ohanvi विज्ञापन के लिंक से ऑर्डर को विज्ञापन से जोड़ता है। इसलिए डैशबोर्ड को जोड़ने के लिए ऑर्डर चाहिए। [VERIFY: page that explains order matching]
- आपको **WhatsApp** पैनल में **Ads Manager** दिखता है। न दिखे तो अपने एडमिन से पूछें।

## डैशबोर्ड में क्या दिखता है { #what-the-dashboard-shows }

आँकड़े चार हिस्सों में बँटे हैं: **Sales**, **Ads**, **Customers** और **Profit**। हर कार्ड में तीन चीज़ें दिखती हैं: वैल्यू, पिछली अवधि के मुकाबले बदलाव (जैसे **+12% vs before**) और एक छोटी ट्रेंड लाइन। हरा बदलाव अच्छा है। लाल बदलाव बुरा है। डैश (—) का मतलब है कि उस कार्ड के लिए डेटा नहीं है।

| कार्ड | इसका मतलब |
|------|---------------|
| **Revenue** | इस अवधि में आपके स्टोर में जितना पैसा आया। |
| **Orders** | इस अवधि में स्टोर के कितने ऑर्डर आए। |
| **Average order value** | कमाई को ऑर्डर की संख्या से भाग देने पर जो रकम आती है। |
| **Revenue from returning customers** | उन खरीदारों से कमाई जो पहले भी ऑर्डर कर चुके हैं। |
| **Ad spend** | आपके विज्ञापनों पर खर्च हुआ पैसा। |
| **MER** | स्टोर की कमाई को कुल विज्ञापन खर्च से भाग देने पर जो नंबर आता है। |
| **ROAS (ad-driven sales)** | जो बिक्री किसी विज्ञापन से जुड़ी है, उसे विज्ञापन खर्च से भाग देने पर जो नंबर आता है। |
| **Sales from ads** | किसी विज्ञापन से जुड़े स्टोर ऑर्डर की कमाई। |
| **Ads purchases (Meta)** | Meta अपने हिसाब (एट्रिब्यूशन) से जितनी खरीदारी बताता है। |
| **CTR (link)** | सभी विज्ञापन प्लेटफ़ॉर्म पर लिंक क्लिक को इम्प्रेशन से भाग देने पर जो नंबर आता है। |
| **CPC (link)** | विज्ञापन खर्च को लिंक क्लिक से भाग देने पर जो रकम आती है। |
| **New customers** | वे खरीदार जिनका पहला ऑर्डर इसी अवधि में आया। |
| **Cost per new customer** | विज्ञापन खर्च को नए ग्राहकों की संख्या से भाग देने पर जो रकम आती है। इसे CAC भी कहते हैं। |
| **Lifetime value per buyer** | हर खरीदार से अब तक की कुल कमाई। |
| **LTV : CAC** | लाइफ़टाइम वैल्यू को नए ग्राहक की लागत से भाग देने पर जो नंबर आता है। |
| **Repeat buyers** | कितने खरीदारों ने अब तक एक से ज़्यादा बार ऑर्डर किया। |
| **Net profit after ads** | कमाई में अपना मार्जिन लगाएँ, फिर उसमें से विज्ञापन खर्च घटा दें। |

!!! tip "MER और ROAS एक जैसे नहीं हैं"
    **MER** में स्टोर की पूरी कमाई को पूरे विज्ञापन खर्च से भाग दिया जाता है। **ROAS (ad-driven sales)** में सिर्फ़ वे ऑर्डर गिने जाते हैं जिन्हें Ohanvi ने किसी विज्ञापन से जोड़ा। जब बहुत से खरीदार विज्ञापनों से नहीं आते, तब MER बड़ा नंबर होता है।

## स्टेप { #steps }

### डैशबोर्ड खोलें और अवधि चुनें { #open-the-dashboard-and-pick-a-period }

1. लेफ़्ट रेल में **WhatsApp** खोलें, फिर **Ads Manager** चुनें।
2. बाईं तरफ़ **Reports** के नीचे **Business dashboard** पर क्लिक करें।

    ![PDF, Schedule, Share, Customize, Settings और Rebuild numbers बटन और Sales, Ads और Customers कार्ड के साथ Business dashboard](../../assets/screenshots/whatsapp-ads-business-dashboard-1-overview.png)

3. ऊपर की तारीख़ वाली लिस्ट से अवधि चुनें: **Today**, **Yesterday**, **Last 3 days**, **Last 7 days**, **Last 14 days**, **Last 30 days**, **Last 90 days** या **Custom range…**।

    

4. कस्टम रेंज के लिए तारीखें चुनें। रेंज 200 दिन तक की हो सकती है। इससे लंबी रेंज चुनने पर मैसेज **Pick at most 200 days.** दिखता है।
5. अवधि के पास लिखा टेक्स्ट पढ़ें, **vs the 7 days before**। इससे पता चलता है कि हर नंबर की तुलना किससे हो रही है।
6. दूसरी लाइन पढ़ें, जैसे **Updated 10 minutes ago**। इससे पता चलता है कि नंबर आखिरी बार कब बने। नंबर हर 15 मिनट में दोबारा बनते हैं। यहाँ **Updated just now**, **Updated 10 min ago**, **Updated 3 h ago** या तारीख के साथ **Updated** लिखा आ सकता है।

### नंबर कार्ड पढ़ें { #read-the-number-cards }

1. **Sales** कार्ड पढ़ें: **Revenue**, **Orders**, **Average order value** और **Revenue from returning customers**।
2. **Ads** कार्ड पढ़ें: **Ad spend**, **MER**, **ROAS (ad-driven sales)**, **Sales from ads**, **Ads purchases (Meta)**, **CTR (link)** और **CPC (link)**।
3. **Customers** कार्ड पढ़ें: **New customers**, **Cost per new customer**, **Lifetime value per buyer**, **LTV : CAC** और **Repeat buyers**।
4. **Profit** कार्ड पढ़ें, यानी **Net profit after ads**।
5. अगर कार्ड में **Set your margin** लिखा आए, तो [अपना मार्जिन और रिपोर्ट सेटिंग्स सेट करें](#set-your-margin-and-report-settings) देखें।

### चार्ट और टेबल पढ़ें { #read-the-charts-and-tables }

1. नीचे स्क्रॉल करके **Revenue vs ad spend** पर जाएँ। इसमें रोज़ की कमाई और विज्ञापन खर्च दिखता है। MER दाईं तरफ़ की ऐक्सिस पर होता है।

    

2. **By ad platform** पढ़ें। इसमें हर प्लेटफ़ॉर्म की एक पंक्ति है।
3. **SPEND**, **CTR**, **CPC**, **CPM** और **PURCHASES\*** पढ़ें। ये आँकड़े प्लेटफ़ॉर्म से आते हैं। तारा (\*) का मतलब है कि यह प्लेटफ़ॉर्म का अपना आँकड़ा है।
4. **STORE ORDERS**, **STORE SALES**, **STORE ROAS** और **COST / NEW CUSTOMER** पढ़ें। ये आँकड़े आपके स्टोर से आते हैं।
5. **Meta vs your store** पढ़ें। इसमें तीन चीज़ें दिखती हैं: Meta के हिसाब से उसके विज्ञापनों ने कितना बेचा, Meta के विज्ञापनों से जुड़े स्टोर ऑर्डर कितने हैं, और दोनों में कितने प्रतिशत का फ़र्क है।
6. उस ब्लॉक का बैज पढ़ें। नीचे बैज की टेबल देखें।
7. **Campaigns** पढ़ें। इसमें हर Meta कैंपेन की एक पंक्ति है: **SPEND**, **RESULTS**, **COST / RESULT**, **PURCHASES\***, **ROAS\***, **STORE ORDERS** और **STORE SALES**।
8. **Latest orders from ads** पढ़ें। इसके कॉलम हैं: **ORDER**, **DATE**, **AMOUNT**, **FROM**, **CUSTOMER** और **SENT TO META**।
9. **FROM** कॉलम पढ़ें। इसमें प्लेटफ़ॉर्म का नाम होता है और यह भी कि ऑर्डर को विज्ञापन से कैसे जोड़ा गया। नीचे मैच की टेबल देखें।
10. **SENT TO META** पढ़ें। इसमें **Sent** या **Failed** लिखा होता है। पूरी जानकारी के लिए उस पर माउस ले जाएँ।

Click-to-WhatsApp की बिक्री भी Meta को खरीदारी के तौर पर भेजी जाती है। **By ad platform** में जिस प्लेटफ़ॉर्म का खर्च अभी नहीं पहुँचा, उस पर **Not synced yet** लिखा होता है।

| बैज | मतलब |
|-------|---------|
| **Close match** | Meta की गिनती और आपके स्टोर की गिनती मेल खाती हैं। |
| **Usual gap** | दोनों में उतना ही फ़र्क है जितना आमतौर पर होता है। |
| **Check your setup** | फ़र्क बड़ा है। उसके नीचे लिखे कारण पढ़ें। |
| **Different currencies** | स्टोर और ad account की करेंसी अलग-अलग है। |
| **No store sales traced** | कोई भी स्टोर ऑर्डर किसी Meta विज्ञापन से जोड़ा नहीं जा सका। |

| FROM की वैल्यू | ऑर्डर कैसे जोड़ा गया |
|------------|---------------------------|
| **Click-to-WhatsApp ad** | ग्राहक Click-to-WhatsApp विज्ञापन से आया। |
| **Ad id in the link** | स्टोर के लिंक में विज्ञापन की ID थी। |
| **Google ad click** | ऑर्डर Google विज्ञापन पर क्लिक से आया। |
| **Paid UTM link** | स्टोर के लिंक में पेड कैंपेन के टैग थे। |

### अपना मार्जिन और रिपोर्ट सेटिंग्स सेट करें { #set-your-margin-and-report-settings }

1. **Settings** पर क्लिक करें। मार्जिन सेव हो, तो वहाँ **Settings · margin 40%** लिखा होता है।
2. **Report & naming settings** में अपना **Gross margin** प्रतिशत में लिखें, जैसे 40। प्रोडक्ट की लागत निकालने के बाद कमाई का जितना हिस्सा बचता है, वही मार्जिन है। इसे खाली छोड़ेंगे तो **Net profit after ads** नहीं दिखेगा।

    

3. **Reports (PDF and shared links)** में अपने संगठन के नाम से अलग नाम चाहिए, तो **Company name on reports** भरें।
4. **Report currency** चुनें, या **Same as the store** चुनें।
5. **Attribution window** चुनें। इससे तय होता है कि हर रिपोर्ट में Meta बिक्री का क्रेडिट विज्ञापनों को कैसे देता है। इसे बदलने पर पिछले 30 दिन का डेटा दोबारा पढ़ा जाता है।
6. **Naming convention** में Create Ad से बनने वाले **Campaign** नामों का टेम्प्लेट सेट करें।
7. **Ad set** नामों का टेम्प्लेट सेट करें।
8. **Ad** नामों का टेम्प्लेट सेट करें।
9. **Save** पर क्लिक करें।

| Attribution window | यह क्या गिनती है |
|--------------------|----------------|
| **Same as Ads Manager (each ad set's setting)** | हर ad set की अपनी सेटिंग। |
| **1-day click** | क्लिक के 1 दिन के अंदर की बिक्री। |
| **7-day click** | क्लिक के 7 दिन के अंदर की बिक्री। |
| **28-day click** | क्लिक के 28 दिन के अंदर की बिक्री। |
| **1-day click or 1-day view** | क्लिक या व्यू के 1 दिन के अंदर की बिक्री। |
| **7-day click or 1-day view** | क्लिक के 7 दिन के अंदर, या व्यू के 1 दिन के अंदर की बिक्री। |

### चुनें कि डैशबोर्ड में क्या दिखे { #choose-what-the-dashboard-shows }

1. **Customize** पर क्लिक करें।
2. **Customize dashboard** में जो नंबर दिखाने हैं, उन पर टिक करें।
3. नंबरों का क्रम बदलने के लिए उन्हें खींचें।
4. **Sections** में जिन ब्लॉक की ज़रूरत नहीं है, उन्हें छिपा दें।
5. **Save** पर क्लिक करें। डिफ़ॉल्ट लेआउट पर वापस जाने के लिए **Reset** पर क्लिक करें।

आपकी अपनी लिस्ट **Your numbers** शीर्षक के नीचे दिखती है।

### PDF डाउनलोड करें { #download-a-pdf }

1. **PDF** पर क्लिक करें, या **Download PDF** पर।
2. फ़ाइल खोलें। उसका नाम `business-dashboard-` से शुरू होता है, फिर दिन या तारीखें आती हैं।

PDF न बने, तो मैसेज **Could not build the PDF.** दिखता है।

### रिपोर्ट को शेड्यूल पर ईमेल करें { #email-the-report-on-a-schedule }

1. **Schedule** पर क्लिक करें, या **Schedule email** पर। **Scheduled report emails** विंडो खुलती है।
2. **New schedule** पर क्लिक करें। **New scheduled email** फ़ॉर्म खुलता है।

    

3. एक **Name (optional)** लिखें, जैसे Monday numbers for the owner।
4. **Report** चुनें: **Business dashboard** या **Account audit**।
5. कितनी बार भेजना है, यह चुनें: **Daily**, **Weekly** या **Monthly**।
6. दिन चुनें, फिर **At** में घंटा चुनें।
7. **Report covers** में चुनें कि रिपोर्ट कितने दिन की हो: **Last 7 days**, **Last 14 days**, **Last 30 days** या **Last 90 days**।
8. **Send to** में ज़्यादा से ज़्यादा 10 ईमेल पते लिखें, कॉमा लगाकर अलग-अलग। अपनी टीम में से चुनने के लिए **Add team members** पर क्लिक करें।
9. **CC (optional)** भरें। इन लोगों को उसी ईमेल की कॉपी मिलती है। ईमेल किस-किसको गया, यह सबको दिखता है।
10. ईमेल के साथ लगने वाले PDF में कौन-से सेक्शन और मेज़र हों, यह चुनने के लिए **Edit PDF view** पर क्लिक करें।
11. **Numbers in the email body** में वे नंबर चुनें जो ईमेल के अंदर दिखें। कुछ न चुनें तो कुछ आम नंबर दिखाए जाते हैं।
12. शेड्यूल चलाने या रोकने के लिए **Active** को चालू या बंद करें।
13. **Send a test email** पर क्लिक करें। मैसेज **Test email sent. It can take a minute to arrive.** दिखता है।
14. शेड्यूल सेव करें।

!!! warning "भेजा गया ईमेल वापस नहीं लिया जा सकता"
    सेव करने से पहले **Send to** लिस्ट एक बार देख लें। लिस्ट में जितने लोग हैं, सबको रिपोर्ट मिलेगी।

### लाइव लिंक शेयर करें { #share-a-live-link }

1. **Share** पर क्लिक करें, या **Share link** पर। **Share the …** विंडो खुलती है।
2. लिंक की एक्सपायरी चुनें: **Expires in 7 days**, **Expires in 30 days** या **Expires in 90 days**।
3. **Create & copy link** पर क्लिक करें।
4. लिंक भेजें। जिसके पास भी यह लिंक है, उसे पिछले 7, 14, 30 या 90 दिनों का लाइव पेज दिखता है। उसमें PDF डाउनलोड करने का विकल्प भी है। लॉगिन की ज़रूरत नहीं है।
5. किसी का एक्सेस रोकना हो, तो उसी विंडो की लिस्ट से लिंक कैंसिल (revoke) कर दें।

!!! warning "लिंक वाला कोई भी नंबर पढ़ सकता है"
    लिंक की ज़रूरत खत्म हो जाए, तो उसे कैंसिल कर दें।

### नंबर दोबारा बनाएँ { #rebuild-the-numbers }

1. नए स्टोर ऑर्डर को विज्ञापनों से जोड़ने और फिर से गिनने के लिए **Rebuild numbers** पर क्लिक करें। जब तक काम चल रहा है, बटन पर **Rebuilding…** लिखा रहता है।
2. नतीजे का मैसेज पढ़ें, जैसे **3 new orders matched to ads.**

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
|-------|-------|-----|
| **No numbers yet. They build every 15 minutes from your store orders and Meta spend — or press "Rebuild numbers" now.** | नंबर अभी पहली बार बने ही नहीं हैं। | **Rebuild numbers** पर क्लिक करें। |
| **No store orders in this period. Connect Shopify or WooCommerce to see revenue, MER and profit next to your ad spend.** | कोई स्टोर कनेक्ट नहीं है, या इस अवधि में कोई ऑर्डर नहीं आया। | अपना स्टोर कनेक्ट करें, या लंबी अवधि चुनें। |
| मैसेज आता है कि आपके स्टोर और ad account की करेंसी अलग हैं | स्टोर और ad account की करेंसी अलग हैं, इसलिए MER, ROAS, प्रति ग्राहक लागत और मुनाफ़ा नहीं दिखते। | दोनों में एक ही करेंसी रखें, या **Settings** में **Report currency** को ad account की करेंसी पर सेट करें। |
| **Net profit after ads** में **Set your margin** दिखता है | ग्रॉस मार्जिन सेव नहीं है। | **Settings** पर क्लिक करें और **Gross margin** भरें। |
| **Could not load the business dashboard** | डैशबोर्ड लोड नहीं हुआ। | **Retry** पर क्लिक करें। |
| **Could not build the PDF.** | PDF पूरा नहीं बन पाया। | **PDF** पर फिर से क्लिक करें। |
| **Could not create the link.** | शेयर लिंक नहीं बना। | **Create & copy link** पर फिर से क्लिक करें। |

## संबंधित गाइड { #related }

- [परफ़ॉर्मेंस रिपोर्ट पढ़ें](read-the-performance-report.md)
- [अपने विज्ञापन मैनेज करें](manage-your-ads.md)
- [अकाउंट ऑडिट चलाएँ](run-an-account-audit.md)
- [वेबसाइट इवेंट ट्रैक करें](track-website-events.md)
- [Click-to-WhatsApp विज्ञापन चलाएँ](../click-to-whatsapp-ads.md)
