---
title: अपना व्हाट्सऐप कैटलॉग सेट करें
description: अपने प्रोडक्ट Meta या अपने स्टोर से व्हाट्सऐप कैटलॉग में लाएँ, जिन्हें व्हाट्सऐप नहीं भेज सकता उन्हें ठीक करें, और चैट व फ़्लो में प्रोडक्ट भेजें।
---

# अपना व्हाट्सऐप कैटलॉग सेट करें { #set-up-your-whatsapp-catalog }

अपने व्हाट्सऐप **Catalog** में वे प्रोडक्ट भरें जो आप बेचते हैं, ताकि एजेंट, फ़्लो और टेम्प्लेट उन्हें प्रोडक्ट मैसेज के रूप में भेज सकें। आख़िर में आपके प्रोडक्ट Meta या आपके स्टोर से सिंक होंगे, आपको पता होगा कि कौन-से **Ready to send** हैं, और आपने एक प्रोडक्ट किसी ग्राहक को भेज दिया होगा।

## शुरू करने से पहले { #before-you-start }

- आपका व्हाट्सऐप नंबर Ohanvi से कनेक्ट हो। देखें [अपना व्हाट्सऐप नंबर कनेक्ट करें](connect-whatsapp-number.md)।
- आपके पास Meta Commerce Manager में कैटलॉग हो, जो आपके WhatsApp Business Account से जुड़ा हो। व्हाट्सऐप सिर्फ़ उसी Meta कैटलॉग के प्रोडक्ट भेज सकता है।
- **WhatsApp** पैनल में आपको **Catalog** दिखता हो। न दिखे तो अपने एडमिन से कहें। देखें [रोल और अनुमतियाँ](../settings/roles-and-permissions.md)।

## प्रोडक्ट कहाँ से आते हैं { #where-products-come-from }

हर प्रोडक्ट कार्ड अपना **Source** दिखाता है:

| स्रोत | यह कैसे आता है |
| --- | --- |
| **Meta catalog** | **Sync from Meta** से आपके Commerce Manager कैटलॉग से लाया जाता है। |
| **Shopify** / **WooCommerce** | लेफ़्ट रेल में **Connect** के तहत कनेक्ट किए आपके स्टोर से सिंक होता है। |
| **Added by hand** | **Add product** से हाथ से लिखा गया। |

!!! note "स्टोर के प्रोडक्ट Meta में भी होने चाहिए"
    Shopify या WooCommerce से सिंक हुआ प्रोडक्ट तभी भेजा जा सकता है जब वह आपके नंबर से जुड़े Meta कैटलॉग में भी हो। Commerce Manager में स्टोर का कैटलॉग कनेक्ट करें, फिर **Sync from Meta** पर क्लिक करें।

## चरण { #steps }

### Meta से अपना कैटलॉग सिंक करें { #sync-your-catalog-from-meta }

1. लेफ़्ट रेल में **WhatsApp** खोलें, फिर **Catalog** चुनें। **Catalog** पेज खुलता है। ऊपर की गिनतियाँ **Products**, **Ready to send**, **On Meta**, **Pending review**, **Rejected** और **Out of stock** दिखाती हैं।

    ![Catalog पेज, जिसमें Sync from Meta, सर्च बॉक्स, प्रोडक्ट की गिनतियाँ और फ़िल्टर चिप हैं](../assets/screenshots/whatsapp-catalog-1-counts.png)
2. **Sync from Meta** पर क्लिक करें। काम होते समय बटन पर **Syncing…** दिखता है।
3. पूरा होने पर **Synced N product(s) from "…"** दिखता है और प्रोडक्ट ग्रिड में भर जाते हैं।

जब भी आप प्रोडक्ट बदलें या Meta कोई समीक्षा पूरी करे, **Sync from Meta** फिर चलाएँ।

### हाथ से प्रोडक्ट जोड़ें { #add-a-product-by-hand }

1. **Add product** पर क्लिक करें (या खाली कैटलॉग पर **Add manually**)।
2. **Product name** भरें।
3. **Meta catalog ID** भरें, जो Commerce Manager से मिलता है, और **Retailer ID**, यानी उस कैटलॉग में प्रोडक्ट की कंटेंट ID।
4. **Price** भरें, और चाहें तो **Sale price (optional)**। **Currency** और **Availability** चुनें।
5. वैकल्पिक: **Brand (optional)**, **Image URL (optional)**, **Product page link (optional)** और **Description (optional)** जोड़ें।
6. **Save** पर क्लिक करें।

**Retailer ID** आपके Meta कैटलॉग के प्रोडक्ट से मेल खानी चाहिए, वरना व्हाट्सऐप उसे भेज नहीं सकता।

### जाँचें कि कौन-से प्रोडक्ट भेजे जा सकते हैं { #check-which-products-can-be-sent }

ग्रिड के ऊपर के फ़िल्टर चिप इस्तेमाल करें, जैसे **All**, **Ready to send** और **Meta catalog**। हर चिप दिखाता है कि उसके पीछे कितने प्रोडक्ट हैं।

| फ़िल्टर | मतलब |
| --- | --- |
| **Ready to send** | Meta पर है, मंज़ूर है, दिखता है और भेजा जा सकता है। |
| **Not on Meta** | आपके स्टोर से सिंक हुआ पर Meta कैटलॉग में नहीं है, इसलिए व्हाट्सऐप उसे नहीं भेज सकता। |
| **Rejected** | Meta ने आइटम ठुकरा दिया। जब तक आप Commerce Manager में उसे ठीक नहीं करते, ग्राहक उसे नहीं देख सकते। |
| **Pending review** | Meta अभी उसकी समीक्षा कर रहा है। |
| **Out of stock** | फ़्लो उसे अब भी भेजते हैं। अगर ऐसा नहीं चाहिए, तो उसे स्टोर या Commerce Manager में छिपा दें। |
| **Hidden** | ग्राहकों से छिपा है। |
| **On sale** | सेल की कीमत है। |

ग्रिड के ऊपर की चेतावनी पट्टी बताती है कि क्या ठीक करना है, जैसे **Show rejected** या **Show them**। जो प्रोडक्ट नहीं जा सकता, उस पर **Cannot send: not on Meta, hidden or rejected** दिखता है।

ठुकराया गया प्रोडक्ट ठीक करने के लिए उसे खोलें, **Rejected by Meta** में वजह पढ़ें, **Commerce Manager** में उसे ठीक करें और दोबारा समीक्षा माँगें। अगला **Sync from Meta** Meta का फ़ैसला उठा लेता है।

### चैट में प्रोडक्ट भेजें { #send-a-product-in-a-chat }

1. **Ready to send** प्रोडक्ट पर **Send to a chat** पर क्लिक करें (कार्ड पर पेपर-प्लेन आइकन)। **Send product to a chat** विंडो खुलती है। प्रोडक्ट अपने नाम, कीमत और लिंक के साथ तस्वीर के रूप में जाता है, और ग्राहक ने पिछले 24 घंटों में आपको मैसेज किया होना चाहिए।

    ![Send product to a chat विंडो, जिसमें Customer WhatsApp number, Add a line (optional), Cancel और Send हैं](../assets/screenshots/whatsapp-catalog-2-send-to-chat.png)

2. देश कोड के साथ **Customer WhatsApp number** लिखें।
3. वैकल्पिक: **Add a line (optional)** में एक लाइन लिखें, जैसे `This one is back in stock!`।
4. **Send** पर क्लिक करें। **Product sent.** दिखता है।

प्रोडक्ट नाम, कीमत और लिंक के साथ तस्वीर के रूप में जाता है। ग्राहक ने पिछले 24 घंटों में आपको मैसेज किया होना चाहिए।

**Inbox** में, जब स्टोर कनेक्ट हो, एजेंट **Products & stock** के तहत **Store** पैन से भी प्रोडक्ट भेज सकते हैं।

### फ़्लो में प्रोडक्ट इस्तेमाल करें { #use-products-in-a-flow }

किसी प्रोडक्ट पर **Use in a flow** पर क्लिक करें। फ़्लो प्रोडक्ट को अपने Single Product और Multi Product चरणों से भेजते हैं। देखें [व्हाट्सऐप चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md)।

### प्रोडक्ट एडिट या डिलीट करें { #edit-or-delete-a-product }

- **Edit product** खोलने के लिए **Edit** पर क्लिक करें। सिंक हुए प्रोडक्ट में अगला सिंक नाम, इमेज, कीमत और स्टॉक को ओवरराइट कर सकता है, इसलिए इन्हें स्रोत पर बदलें।
- **Delete product** पर क्लिक करें, फिर **Delete**। जो फ़्लो उसकी retailer ID इस्तेमाल करते हैं वे चलते रहते हैं। सिंक हुआ प्रोडक्ट अगले सिंक पर वापस आ जाता है, जब तक आप उसे स्रोत पर हटा न दें।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **No catalog is connected to your WhatsApp Business Account yet. Link one in Meta Commerce Manager, then sync again.** | आपके नंबर से कोई Meta कैटलॉग नहीं जुड़ा है। | Commerce Manager में अपने WhatsApp Business Account से कैटलॉग जोड़ें, फिर **Sync from Meta** पर क्लिक करें। |
| **Your Meta access token cannot read the catalog — it needs the catalog_management permission. Reconnect via WhatsApp Settings.** | आपके व्हाट्सऐप कनेक्शन में कैटलॉग की अनुमति नहीं है। | अपना व्हाट्सऐप अकाउंट कैटलॉग एक्सेस के साथ दोबारा कनेक्ट करें। देखें [अपना व्हाट्सऐप नंबर कनेक्ट करें](connect-whatsapp-number.md)। |
| **WhatsApp is not connected yet — finish the Cloud API setup first.** | नंबर कनेक्ट नहीं है। | पहले अपना नंबर कनेक्ट करना पूरा करें। |
| प्रोडक्ट पर **Not on Meta** दिखता है | वे आपके स्टोर से आए हैं पर Meta कैटलॉग में नहीं हैं। | Commerce Manager में स्टोर का कैटलॉग कनेक्ट करें, फिर **Sync from Meta** करें। |
| **Catalog ID is required** / **Retailer ID is required** | कोई ज़रूरी फ़ील्ड खाली है। | दोनों Commerce Manager से कॉपी करें। |

## संबंधित गाइड { #related }

- [व्हाट्सऐप चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md)
- [व्हाट्सऐप मैसेज टेम्प्लेट बनाएँ](create-message-template.md)
- [कनेक्टर चुनें](../settings/choose-connectors.md)
