---
title: अपना ऑनलाइन स्टोर कनेक्ट करें
description: Shopify, WooCommerce, Wix या Zoho Commerce कनेक्ट करें ताकि ग्राहक, प्रोडक्ट और ऑर्डर Ohanvi में सिंक हों और व्हाट्सऐप ऑर्डर के संदेश भेज सके।
---

# अपना ऑनलाइन स्टोर कनेक्ट करें { #connect-your-online-store }

अपना ऑनलाइन स्टोर एक बार कनेक्ट करें। उसके ग्राहक, प्रोडक्ट और ऑर्डर फिर आपके CRM से सिंक होते हैं, और व्हाट्सऐप उसी कनेक्शन का इस्तेमाल कैटलॉग सिंक और ऑर्डर संदेशों के लिए करता है। Shopify, WooCommerce, Wix और Zoho Commerce सपोर्ट किए जाते हैं। हर स्टोर में लगभग 5 मिनट लगते हैं।

## शुरू करने से पहले { #before-you-start }

- आप **Settings** में **Integrations** खोल सकते हों।
- आप अपने स्टोर पर एडमिन हों। WooCommerce आपसे WordPress एडमिनिस्ट्रेटर या शॉप मैनेजर के रूप में साइन इन करने को कहता है।
- Shopify और WooCommerce के लिए: आपको अपने स्टोर का पता मालूम हो, जैसे `my-store.myshopify.com` या `mystore.com`।
- मैनुअल कनेक्शन के लिए: आपके पास keys तैयार हों। विंडो में हर फ़ील्ड के पास **How do I get this?** हेल्प आइकन होता है।

## हर स्टोर कैसे कनेक्ट होता है { #how-each-store-connects }

| स्टोर | कनेक्ट करने का मुख्य तरीका | मैनुअल विकल्प |
| --- | --- | --- |
| **Shopify** | आप अपने Shopify एडमिन से Ohanvi ऐप इंस्टॉल करते हैं और एक्सेस मंज़ूर करते हैं। | Admin API access token के साथ **Use credentials**। |
| **WooCommerce** | आप अपने ही स्टोर पर एक चरण में key का अनुरोध मंज़ूर करते हैं। | key पेयर के साथ **Enter keys manually**। |
| **Wix** | आप Wix पर इंस्टॉल मंज़ूर करते हैं। | कोई नहीं। |
| **Zoho Commerce** | आप Zoho पर एक्सेस मंज़ूर करते हैं। आपका स्टोर अपने-आप मिल जाता है। | कोई नहीं। |

## चरण { #steps }

### Store connections खोलें { #open-store-connections }

1. नीचे बाएँ कोने में अपने नाम के पहले अक्षरों पर क्लिक करें, फिर **Settings** पर क्लिक करें।
2. बाईं सूची में **Workspace** के नीचे **Integrations** चुनें।
3. **Connectors** के नीचे **Store Connections** पर क्लिक करें। **Store connections** पेज खुलता है।
4. शीर्षक के नीचे की पंक्ति पढ़ें। उसमें लिखा है कि हर स्टोर एक बार कनेक्ट होता है, और व्हाट्सऐप वही कनेक्शन उठा लेता है।
5. अपने स्टोर का कार्ड ढूँढें। उस पर **connected** या **not connected** दिखता है। कार्ड दोबारा लोड करने के लिए **Refresh** पर क्लिक करें।

### एक चरण की मंज़ूरी से कनेक्ट करें (Shopify, WooCommerce, Wix, Zoho Commerce) { #connect-with-one-step-approval-shopify-woocommerce-wix-zoho-commerce }

1. अपने स्टोर के कार्ड पर **Connect store** पर क्लिक करें।
2. अगर कोई विंडो आपका स्टोर पूछे, तो फ़ील्ड भरें। Shopify के लिए यह शॉप डोमेन है। WooCommerce के लिए **Store URL**। Wix के लिए **Your Wix site name**। Zoho Commerce के लिए **Your store name**।
3. **Continue to** और अपने स्टोर के नाम पर क्लिक करें, जैसे **Continue to Shopify**। आपका स्टोर नई विंडो में खुलता है।
4. एक्सेस मंज़ूर करें। WooCommerce के लिए पहले WordPress में साइन इन करें, फिर **Approve** पर क्लिक करें।
5. Ohanvi पर लौटें। पेज पर **Approve the install in** आपके स्टोर का नाम **, then refresh this page.** लिखा होता है। **Refresh** पर क्लिक करें।
6. **Shopify connected.** (या आपके स्टोर का नाम) संदेश आता है, और कार्ड पर **connected** दिखता है। ऑर्डर और प्रोडक्ट सिंक होने लगते हैं।

!!! note "कोई key कॉपी नहीं करनी"
    एक चरण की मंज़ूरी में आपका स्टोर Ohanvi को ज़रूरी एक्सेस खुद भेज देता है। आपको कोई key खुद कॉपी नहीं करनी पड़ती।

### Shopify को टोकन से हाथ से कनेक्ट करें { #connect-shopify-by-hand-with-a-token }

इसका इस्तेमाल सिर्फ़ उस प्राइवेट ऐप के लिए करें जो Admin API टोकन के साथ सेट है।

1. Shopify कार्ड पर **Use credentials** पर क्लिक करें। **Connect Shopify** विंडो खुलती है।
2. **Shop domain** में अपना डोमेन लिखें, जैसे `my-store.myshopify.com`।
3. **Admin API access token** में टोकन पेस्ट करें। वह `shpat_` से शुरू होता है।
4. **API key** में key पेस्ट करें, अगर आपके पास है। यह वैकल्पिक है।
5. **Webhook signing secret** में ऐप की API secret key पेस्ट करें।
6. **API version** में अगर ज़रूरत हो तो `2024-10` जैसा कोई वर्शन लिखें। यह वैकल्पिक है।
7. किसी फ़ील्ड के पास हेल्प आइकन पर क्लिक करके **How do I get this?** पढ़ें। अगर आपने डोमेन भर दिया है, तो सही पेज पर जाने के लिए **Open store settings** पर क्लिक करें।
8. **Save connection** पर क्लिक करें।

जिन फ़ील्ड पर **optional** नहीं लिखा है, वे ज़रूरी हैं। कोई फ़ील्ड खाली हो तो विंडो **Shop domain is required** (या उस फ़ील्ड का नाम) कहती है।

### WooCommerce को keys से हाथ से कनेक्ट करें { #connect-woocommerce-by-hand-with-keys }

1. WooCommerce कार्ड पर **Enter keys manually** पर क्लिक करें। **Connect WooCommerce** विंडो खुलती है।
2. **Store URL** में अपना पता लिखें, जैसे `mystore.com`। पूरा https:// लिंक भी चलता है।
3. WordPress एडमिन में **WooCommerce → Settings → Advanced → REST API** पर जाएँ, और **Add key** पर क्लिक करें।
4. **Permissions** को **Read/Write** पर सेट करें, फिर **Generate API key** पर क्लिक करें।
5. **Consumer key** (`ck_` से शुरू) और **Consumer secret** (`cs_` से शुरू) कॉपी करें। WooCommerce इन्हें सिर्फ़ एक बार दिखाता है।
6. Ohanvi में इन्हें **Consumer key** और **Consumer secret** में पेस्ट करें।
7. वैकल्पिक: अगर आप abandoned-cart प्लगइन इस्तेमाल करते हैं, तो **Abandoned cart plugin** में उसे चुनें: `CARTFLOWS`, `ABANDONED_CART_LITE` या `CUSTOM`। `CUSTOM` के लिए **Custom cart REST path** में प्लगइन का पता लिखें, जैसे `/wp-json/your-plugin/v1/carts`।
8. **Test & connect** पर क्लिक करें। जाँच के दौरान बटन **Testing connection…** दिखाता है।
9. अगर टेस्ट फ़ेल हो जाए, तो एक संदेश कारण बताता है। वैल्यू ठीक करें और **Test again** पर क्लिक करें, या **Save anyway** पर क्लिक करें।

### वेबहुक रजिस्टर करें { #register-webhooks }

वेबहुक आपके स्टोर को ऑर्डर, ग्राहक और प्रोडक्ट के बदलाव Ohanvi को भेजने देते हैं। Shopify, WooCommerce और Zoho Commerce पर यह बटन दिखता है।

1. कनेक्ट हुए कार्ड पर **Register webhooks** पर क्लिक करें। **Register** आपके स्टोर का नाम **webhooks** विंडो खुलती है।
2. **Public base URL** में वह सार्वजनिक https पता लिखें जिसे आपका स्टोर कॉल करे, जैसे `https://api.yourcompany.com`। वह https:// से शुरू होना चाहिए। ऐसा न हो तो विंडो **Public base URL is required** या **Must start with https://** कहती है।
3. **Register** पर क्लिक करें। **Registered** एक संख्या **webhook topics.** संदेश आता है।

### स्टोर के लिए व्हाट्सऐप ऑटोमेशन चालू करें { #switch-on-whatsapp-automations-for-the-store }

1. कनेक्ट हुए कार्ड पर **WhatsApp Automations** पर क्लिक करें। विंडो में आपके स्टोर का नाम और उसके बाद WhatsApp automations दिखता है।
2. जो जर्नी चाहिए उन्हें चालू करें:
    - **Welcome message**: स्टोर का नया ग्राहक व्हाट्सऐप संपर्क बन जाता है और उसे वेलकम संदेश मिलता है।
    - **Cart recovery**: छोड़ी गई कार्ट पर आइटम, प्रोडक्ट की तस्वीर और दोबारा खोलने का लिंक जाता है।
    - **Order updates**: ऑर्डर बनने, पेमेंट होने या रद्द होने पर विवरण के साथ पुष्टि जाती है।
    - **Shipment tracking**: शिप होने, डिलीवरी के लिए निकलने या डिलीवर होने पर ट्रैकिंग लिंक जाता है।
    - **Browse nudge**: आपकी साइट पर कोई प्रोडक्ट देखे जाने पर तस्वीर के साथ प्रोडक्ट संदेश जाता है।
3. **Nudge cooldown (minutes)** में लिखें कि कितनी देर रुकना है। इस अवधि में हर संपर्क को ज़्यादा से ज़्यादा एक कार्ट या ब्राउज़ नज भेजा जाता है।
4. अपनी साइट के लिए ब्राउज़ वेबहुक पाथ कॉपी करने के लिए **Browse snippet** पर क्लिक करें।
5. सेव करें। **WhatsApp automations saved — live from the next store event.** संदेश आता है।

अगर आपने स्टोर अभी कनेक्ट नहीं किया है, तो विंडो कहती है कि पहले स्टोर कनेक्ट करें। व्हाट्सऐप का लिंक स्टोर कनेक्ट होने पर बनता है।

### कनेक्ट हुए स्टोर को जाँचें या बदलें { #check-or-change-a-connected-store }

1. कार्ड पर **Status**, **API version** और **Cart capture** पढ़ें।
2. WooCommerce के लिए **Connected via** (**One-step approval** या **API keys**), **Webhooks** (**None registered yet** या **live** की संख्या), और **Last event** पढ़ें।
3. अगर कोई समस्या हुई थी, तो **Last sync error** पढ़ें। उसमें इवेंट, कितनी देर पहले और कारण दिखता है।
4. सेव किए फ़ील्ड बदलने के लिए **Configure** पर क्लिक करें। मौजूदा वैल्यू रखने के लिए सीक्रेट फ़ील्ड खाली छोड़ें। **Test & save** या **Save changes** पर क्लिक करें।

### स्टोर डिस्कनेक्ट करें { #disconnect-a-store }

1. कार्ड पर **Disconnect** पर क्लिक करें।
2. **Disconnect** आपके स्टोर का नाम **?** में पढ़ें कि क्या बंद होगा। ऑर्डर, ग्राहक और abandoned-cart सिंक बंद हो जाते हैं। व्हाट्सऐप के ऑर्डर संदेश रुक जाते हैं। Shopify जैसे स्टोर के लिए Ohanvi के वेबहुक हटा दिए जाते हैं।
3. **Disconnect** पर क्लिक करें। **Shopify disconnected.** (या आपके स्टोर का नाम) संदेश आता है।
4. आपकी सेव की हुई keys बनी रहती हैं, इसलिए आप बाद में एक चरण में दोबारा कनेक्ट कर सकते हैं।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Connecting Shopify failed.** | इंस्टॉल मंज़ूर नहीं हुआ या बीच में रुक गया। | अपने Shopify एडमिन से इंस्टॉल दोबारा करें, फिर **Refresh** पर क्लिक करें। |
| **Access was not approved on** आपका स्टोर **, so nothing was connected.** | आपने WooCommerce पर **Approve** पर क्लिक नहीं किया। | **Connect store** पर फिर से क्लिक करें और मंज़ूर करें। |
| **WooCommerce did not finish connecting** आपका स्टोर। | आपका स्टोर Ohanvi तक नहीं पहुँच पाया (https नहीं है या फ़ायरवॉल है)। | **Enter keys manually** पर क्लिक करें। |
| **Could not start the Shopify install.** | कनेक्शन का अनुरोध फ़ेल हुआ। | अपना कनेक्शन जाँचें और दोबारा कोशिश करें। |
| **Could not register** आपके स्टोर के **webhooks.** | पब्लिक URL स्वीकार नहीं हुआ। | जाँचें कि **Public base URL** पहुँच में है और https:// से शुरू होता है। |
| टेस्ट एक संदेश के साथ फ़ेल हो जाता है। | कोई key या पता गलत है। | फ़ील्ड ठीक करें और **Test again** पर क्लिक करें। |
| **Shopify is already connected.** | यह स्टोर पहले से आपके वर्कस्पेस से जुड़ा है। | बदलने के लिए **Configure** पर क्लिक करें। |
| **Could not disconnect** आपका स्टोर। | अनुरोध फ़ेल हुआ। | दोबारा कोशिश करें। |

## संबंधित गाइड { #related }

- [अपनी बनाम मैनेज्ड सेवाएँ](choose-connectors.md)
- [Zapier कनेक्ट करें](connect-zapier.md)
- [Pabbly कनेक्ट करें](connect-pabbly.md)
- [अपना व्हाट्सऐप कैटलॉग सेट करें](../whatsapp/set-up-whatsapp-catalog.md)
