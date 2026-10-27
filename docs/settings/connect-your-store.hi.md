---
title: अपना ऑनलाइन स्टोर कनेक्ट करें
description: Shopify, WooCommerce, Wix या Zoho Commerce कनेक्ट करें, ताकि कस्टमर, प्रोडक्ट और ऑर्डर Ohanvi में सिंक हों और WhatsApp ऑर्डर के मैसेज भेज सके।
---

# अपना ऑनलाइन स्टोर कनेक्ट करें { #connect-your-online-store }

अपना ऑनलाइन स्टोर बस एक बार कनेक्ट करें। इसके बाद उसके कस्टमर, प्रोडक्ट और ऑर्डर आपके CRM से सिंक होते रहते हैं। WhatsApp भी इसी कनेक्शन से कैटलॉग सिंक करता है और ऑर्डर के मैसेज भेजता है। Shopify, WooCommerce, Wix और Zoho Commerce सपोर्टेड हैं। हर स्टोर में करीब 5 मिनट लगते हैं।

## शुरू करने से पहले { #before-you-start }

- आप **Settings** में **Integrations** खोल पाते हों।
- आप अपने स्टोर के एडमिन हों। WooCommerce में आपको WordPress एडमिनिस्ट्रेटर या शॉप मैनेजर के तौर पर साइन इन करना पड़ता है।
- Shopify और WooCommerce के लिए: आपको अपने स्टोर का पता मालूम हो, जैसे `my-store.myshopify.com` या `mystore.com`।
- मैनुअल कनेक्शन के लिए: आपके पास keys तैयार हों। विंडो में हर फ़ील्ड के पास **How do I get this?** हेल्प आइकन होता है।

## हर स्टोर कैसे कनेक्ट होता है { #how-each-store-connects }

| स्टोर | कनेक्ट करने का मुख्य तरीका | मैनुअल विकल्प |
| --- | --- | --- |
| **Shopify** | आप अपने Shopify एडमिन से Ohanvi ऐप इंस्टॉल करते हैं और एक्सेस की मंज़ूरी देते हैं। | Admin API access token के साथ **Use credentials**। |
| **WooCommerce** | आप अपने ही स्टोर पर key की रिक्वेस्ट एक ही स्टेप में मंज़ूर करते हैं। | key पेयर के साथ **Enter keys manually**। |
| **Wix** | आप Wix पर इंस्टॉल मंज़ूर करते हैं। | कोई नहीं। |
| **Zoho Commerce** | आप Zoho पर एक्सेस मंज़ूर करते हैं। आपका स्टोर अपने आप मिल जाता है। | कोई नहीं। |

## स्टेप { #steps }

### Store connections खोलें { #open-store-connections }

1. नीचे बाएँ कोने में अपने नाम के पहले अक्षरों पर क्लिक करें, फिर **Settings** पर क्लिक करें।
2. बाईं तरफ़ की लिस्ट में **Workspace** के नीचे **Integrations** चुनें।
3. **Connectors** के नीचे **Store Connections** पर क्लिक करें। **Store connections** पेज खुलता है।
4. टाइटल के नीचे की लाइन पढ़ें। उसमें लिखा है कि हर स्टोर सिर्फ़ एक बार कनेक्ट होता है, और WhatsApp वही कनेक्शन इस्तेमाल कर लेता है।
5. अपने स्टोर का कार्ड ढूँढें। उस पर **connected** या **not connected** दिखता है। कार्ड दोबारा लोड करने के लिए **Refresh** पर क्लिक करें।

### एक स्टेप की मंज़ूरी से कनेक्ट करें (Shopify, WooCommerce, Wix, Zoho Commerce) { #connect-with-one-step-approval-shopify-woocommerce-wix-zoho-commerce }

1. अपने स्टोर के कार्ड पर **Connect store** पर क्लिक करें।
2. कोई विंडो आपके स्टोर के बारे में पूछे, तो फ़ील्ड भर दें। Shopify में यह शॉप डोमेन है। WooCommerce में **Store URL**। Wix में **Your Wix site name**। Zoho Commerce में **Your store name**।
3. **Continue to** और अपने स्टोर का नाम वाले बटन पर क्लिक करें, जैसे **Continue to Shopify**। आपका स्टोर नई विंडो में खुलता है।
4. एक्सेस की मंज़ूरी दें। WooCommerce में पहले WordPress में साइन इन करें, फिर **Approve** पर क्लिक करें।
5. Ohanvi पर वापस आएँ। पेज पर **Approve the install in** आपके स्टोर का नाम **, then refresh this page.** लिखा होता है। **Refresh** पर क्लिक करें।
6. **Shopify connected.** (या आपके स्टोर का नाम) मैसेज आता है और कार्ड पर **connected** दिखता है। ऑर्डर और प्रोडक्ट सिंक होने लगते हैं।

!!! note "कोई key कॉपी नहीं करनी"
    एक स्टेप की मंज़ूरी में आपका स्टोर ज़रूरी एक्सेस खुद Ohanvi को भेज देता है। आपको कोई key खुद कॉपी नहीं करनी पड़ती।

### Shopify को टोकन से हाथ से कनेक्ट करें { #connect-shopify-by-hand-with-a-token }

यह तरीका सिर्फ़ उस प्राइवेट ऐप के लिए इस्तेमाल करें जो Admin API टोकन के साथ बना है।

1. Shopify कार्ड पर **Use credentials** पर क्लिक करें। **Connect Shopify** विंडो खुलती है।
2. **Shop domain** में अपना डोमेन लिखें, जैसे `my-store.myshopify.com`।
3. **Admin API access token** में टोकन पेस्ट करें। वह `shpat_` से शुरू होता है।
4. **API key** में key पेस्ट करें, अगर आपके पास है। यह ऑप्शनल है।
5. **Webhook signing secret** में ऐप की API secret key पेस्ट करें।
6. ज़रूरत हो, तो **API version** में `2024-10` जैसा कोई वर्शन लिखें। यह ऑप्शनल है।
7. किसी फ़ील्ड के पास हेल्प आइकन पर क्लिक करें और **How do I get this?** पढ़ें। आपने डोमेन भर दिया है, तो सीधे सही पेज पर जाने के लिए **Open store settings** पर क्लिक करें।
8. **Save connection** पर क्लिक करें।

जिन फ़ील्ड पर **optional** नहीं लिखा है, वे ज़रूरी हैं। कोई फ़ील्ड खाली हो, तो विंडो में **Shop domain is required** (या उस फ़ील्ड का नाम) लिखा आता है।

### WooCommerce को keys से हाथ से कनेक्ट करें { #connect-woocommerce-by-hand-with-keys }

1. WooCommerce कार्ड पर **Enter keys manually** पर क्लिक करें। **Connect WooCommerce** विंडो खुलती है।
2. **Store URL** में अपने स्टोर का पता लिखें, जैसे `mystore.com`। पूरा https:// लिंक भी चलता है।
3. WordPress एडमिन में **WooCommerce → Settings → Advanced → REST API** पर जाएँ और **Add key** पर क्लिक करें।
4. **Permissions** को **Read/Write** पर सेट करें, फिर **Generate API key** पर क्लिक करें।
5. **Consumer key** (`ck_` से शुरू) और **Consumer secret** (`cs_` से शुरू) कॉपी करें। WooCommerce इन्हें सिर्फ़ एक बार दिखाता है।
6. Ohanvi में इन्हें **Consumer key** और **Consumer secret** में पेस्ट करें।
7. ऑप्शनल: आप abandoned-cart प्लगइन इस्तेमाल करते हैं, तो **Abandoned cart plugin** में उसे चुनें: `CARTFLOWS`, `ABANDONED_CART_LITE` या `CUSTOM`। `CUSTOM` चुनें, तो **Custom cart REST path** में प्लगइन का पता लिखें, जैसे `/wp-json/your-plugin/v1/carts`।
8. **Test & connect** पर क्लिक करें। जाँच चलने तक बटन पर **Testing connection…** दिखता है।
9. टेस्ट फ़ेल हो जाए, तो एक मैसेज उसकी वजह बताता है। वैल्यू ठीक करें और **Test again** पर क्लिक करें। या **Save anyway** पर क्लिक करें।

### वेबहुक रजिस्टर करें { #register-webhooks }

वेबहुक से आपका स्टोर ऑर्डर, कस्टमर और प्रोडक्ट के बदलाव अपने आप Ohanvi को भेज देता है। यह बटन Shopify, WooCommerce और Zoho Commerce पर दिखता है।

1. कनेक्ट हो चुके कार्ड पर **Register webhooks** पर क्लिक करें। **Register** आपके स्टोर का नाम **webhooks** विंडो खुलती है।
2. **Public base URL** में वह पब्लिक https पता लिखें जिस पर आपका स्टोर कॉल करेगा, जैसे `https://api.yourcompany.com`। वह https:// से शुरू होना चाहिए। ऐसा न हो, तो विंडो में **Public base URL is required** या **Must start with https://** लिखा आता है।
3. **Register** पर क्लिक करें। **Registered** एक संख्या **webhook topics.** मैसेज आता है।

### स्टोर के लिए WhatsApp ऑटोमेशन चालू करें { #switch-on-whatsapp-automations-for-the-store }

1. कनेक्ट हो चुके कार्ड पर **WhatsApp Automations** पर क्लिक करें। विंडो में आपके स्टोर का नाम दिखता है, और उसके आगे WhatsApp automations।
2. जो जर्नी चाहिए, उन्हें चालू करें:
    - **Welcome message**: स्टोर का नया कस्टमर WhatsApp कॉन्टैक्ट बन जाता है और उसे वेलकम मैसेज जाता है।
    - **Cart recovery**: कोई कार्ट छोड़ दे, तो उसे आइटम, प्रोडक्ट की फ़ोटो और कार्ट दोबारा खोलने का लिंक जाता है।
    - **Order updates**: ऑर्डर देने, पेमेंट होने या कैंसल होने पर पूरी जानकारी के साथ कन्फ़र्मेशन जाता है।
    - **Shipment tracking**: ऑर्डर शिप होने, डिलीवरी के लिए निकलने या डिलीवर होने पर ट्रैकिंग लिंक जाता है।
    - **Browse nudge**: कोई आपकी साइट पर प्रोडक्ट देखे, तो उसे फ़ोटो के साथ प्रोडक्ट मैसेज जाता है।
3. **Nudge cooldown (minutes)** में लिखें कि कितनी देर रुकना है। इस समय में हर कॉन्टैक्ट को ज़्यादा से ज़्यादा एक कार्ट या ब्राउज़ नज जाता है।
4. अपनी साइट के लिए ब्राउज़ वेबहुक पाथ कॉपी करना हो, तो **Browse snippet** पर क्लिक करें।
5. सेव करें। **WhatsApp automations saved — live from the next store event.** मैसेज आता है।

अगर आपने स्टोर अभी कनेक्ट नहीं किया है, तो विंडो में लिखा आता है कि पहले स्टोर कनेक्ट करें। WhatsApp का लिंक स्टोर कनेक्ट होते ही बन जाता है।

### कनेक्ट किया हुआ स्टोर देखें या बदलें { #check-or-change-a-connected-store }

1. कार्ड पर **Status**, **API version** और **Cart capture** देखें।
2. WooCommerce में **Connected via** (**One-step approval** या **API keys**), **Webhooks** (**None registered yet** या **live** की संख्या) और **Last event** देखें।
3. कोई दिक्कत आई हो, तो **Last sync error** देखें। उसमें इवेंट, कितनी देर पहले हुआ और उसकी वजह दिखती है।
4. सेव किए हुए फ़ील्ड बदलने के लिए **Configure** पर क्लिक करें। मौजूदा वैल्यू रखनी हो, तो सीक्रेट फ़ील्ड खाली छोड़ दें। फिर **Test & save** या **Save changes** पर क्लिक करें।

### स्टोर डिस्कनेक्ट करें { #disconnect-a-store }

1. कार्ड पर **Disconnect** पर क्लिक करें।
2. **Disconnect** आपके स्टोर का नाम **?** में पढ़ें कि क्या बंद होगा। ऑर्डर, कस्टमर और abandoned-cart सिंक बंद हो जाते हैं। WhatsApp के ऑर्डर मैसेज रुक जाते हैं। Shopify जैसे स्टोर में Ohanvi के वेबहुक हटा दिए जाते हैं।
3. **Disconnect** पर क्लिक करें। **Shopify disconnected.** (या आपके स्टोर का नाम) मैसेज आता है।
4. आपकी सेव की हुई keys बनी रहती हैं, इसलिए बाद में आप एक ही स्टेप में दोबारा कनेक्ट कर सकते हैं।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Connecting Shopify failed.** | इंस्टॉल मंज़ूर नहीं हुआ या बीच में रुक गया। | अपने Shopify एडमिन से इंस्टॉल दोबारा करें, फिर **Refresh** पर क्लिक करें। |
| **Access was not approved on** आपका स्टोर **, so nothing was connected.** | आपने WooCommerce पर **Approve** पर क्लिक नहीं किया। | **Connect store** पर दोबारा क्लिक करें और मंज़ूरी दें। |
| **WooCommerce did not finish connecting** आपका स्टोर। | आपका स्टोर Ohanvi तक नहीं पहुँच पाया (https नहीं है या फ़ायरवॉल रोक रहा है)। | **Enter keys manually** पर क्लिक करें। |
| **Could not start the Shopify install.** | कनेक्शन की रिक्वेस्ट फ़ेल हो गई। | अपना कनेक्शन देखें और दोबारा कोशिश करें। |
| **Could not register** आपके स्टोर के **webhooks.** | पब्लिक URL मंज़ूर नहीं हुआ। | देखें कि **Public base URL** खुल रहा है और https:// से शुरू होता है। |
| टेस्ट एक मैसेज के साथ फ़ेल हो जाता है। | कोई key या पता गलत है। | फ़ील्ड ठीक करें और **Test again** पर क्लिक करें। |
| **Shopify is already connected.** | यह स्टोर पहले से आपके वर्कस्पेस से जुड़ा है। | बदलाव करने के लिए **Configure** पर क्लिक करें। |
| **Could not disconnect** आपका स्टोर। | रिक्वेस्ट फ़ेल हो गई। | दोबारा कोशिश करें। |

## संबंधित गाइड { #related }

- [अपनी बनाम मैनेज्ड सर्विस](choose-connectors.md)
- [Zapier कनेक्ट करें](connect-zapier.md)
- [Pabbly कनेक्ट करें](connect-pabbly.md)
- [अपना WhatsApp कैटलॉग सेट करें](../whatsapp/set-up-whatsapp-catalog.md)
