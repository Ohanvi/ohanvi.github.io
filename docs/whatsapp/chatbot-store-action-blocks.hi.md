---
title: चैटबॉट में ऑर्डर और बुकिंग देखें
description: चैटबॉट में स्टोर एक्शन ब्लॉक और Pick लिस्ट जोड़ें, ताकि ग्राहक ऑर्डर देख, रद्द या दोबारा ऑर्डर कर सकें, लिंक से भुगतान कर सकें और अपॉइंटमेंट बुक कर सकें।
---

# चैटबॉट में ऑर्डर और बुकिंग देखें { #look-up-orders-and-bookings-in-a-chatbot }

स्टोर एक्शन बॉट को चैट के अंदर असली काम करने देते हैं। ग्राहक ऑर्डर देख सकता है, उसे रद्द कर सकता है, दोबारा ऑर्डर कर सकता है, पता कन्फ़र्म कर सकता है, Cash on Delivery को पेमेंट लिंक में बदल सकता है, या अपॉइंटमेंट बुक कर सकता है। हर ब्लॉक के तैयार निकास (एग्ज़िट) होते हैं, और कुछ ब्लॉक आपको ऐसा वेरिएबल देते हैं जिसे आप मैसेज में दिखा सकते हैं। इन्हें जोड़ने और आपस में जोड़ने के लिए इस पेज को फ़ॉलो करें।

## शुरू करने से पहले { #before-you-start }

- आपने बिल्डर में एक फ़्लो खोला हो। देखें [फ़्लो बिल्डर को समझें](understand-the-flow-builder.md)।
- ऑर्डर ब्लॉक के लिए, आपका स्टोर कनेक्ट हो। देखें [फ़्लो के साथ स्टोर के संदेश ऑटोमेट करें](../flows/store-journeys.md)।
- **Book appointment** के लिए, आपने सर्विस और बुकिंग के नियम जोड़े हों। देखें [व्हाट्सऐप पर बुकिंग लें](../appointments/take-bookings-on-whatsapp.md)।
- आपको मैसेज ब्लॉक जोड़ना आता हो। देखें [टेक्स्ट और लिस्ट ब्लॉक](chatbot-text-and-list-blocks.md)।

## हर ब्लॉक क्या करता है { #what-each-block-does }

### स्टोर एक्शन { #store-actions }

ये **All steps** → **Store actions** के नीचे मिलते हैं। हर ब्लॉक कार्ड पर अपने **Outcomes** चिप के रूप में दिखाता है। हर आउटकम को किसी चरण से जोड़ें।

| ब्लॉक | यह क्या करता है | आउटकम | जो वेरिएबल यह देता है |
| --- | --- | --- | --- |
| **Order status** | आपके स्टोर में ऑर्डर खोजता है। | `found`, `not_found` | `{{order_status_message}}` |
| **Cancel order** | अगर संभव हो, तो आपके स्टोर पर ऑर्डर रद्द करता है। | `cancelled`, `not_cancellable`, `not_found` | कोई नहीं |
| **Reorder** | पिछले ऑर्डर को पहले से भरे चेकआउट लिंक के रूप में दोबारा बनाता है। | `ready`, `no_orders` | `{{reorder_url}}` |
| **Confirm address** | डिलीवरी का पता खोजता है। | `found`, `not_found` | `{{shipping_address}}` |
| **COD check** | जाँचता है कि ऑर्डर Cash on Delivery है या नहीं। | `cod`, `not_cod` | कोई नहीं |
| **COD to prepaid** | COD ऑर्डर के लिए पेमेंट लिंक बनाता है। | `link_ready`, `no_payment`, `not_found` | `{{payment_url}}` |
| **Book appointment** | चुनी हुई सर्विस, तारीख और स्लॉट बुक करता है। | `confirmed`, `requested`, `slot_taken`, `rejected_show_slots` | कोई नहीं |

### Pick लिस्ट { #pick-lists }

**Pick** ब्लॉक ग्राहक को लाइव लिस्ट दिखाता है और उसका चुनाव सेव करता है। ये **All steps** → **Advanced** के नीचे मिलते हैं।

| ब्लॉक | ग्राहक क्या चुनता है | इस नाम से सेव होता है |
| --- | --- | --- |
| **Pick a recent order** | उसके हाल के ऑर्डर में से एक। | `order_number` |
| **Pick an open order** | उसके ऐसे ऑर्डर में से एक जो अभी खुला है। | `order_number` |
| **Pick a service** | बुक की जा सकने वाली एक सर्विस। | `service_id` |
| **Pick a date** | खाली स्लॉट वाला एक दिन। | `date` |
| **Pick a time slot** | चुने हुए दिन का एक खाली स्लॉट। | `slot` |
| **Pick my appointment** | उसके आने वाले अपॉइंटमेंट में से एक। | `appointment_id` |
| **Pick a new slot** | अपॉइंटमेंट बदलने के लिए एक खाली स्लॉट। | `slot` |
| **Pick a social account** | आपके कनेक्ट किए सोशल अकाउंट में से एक। | `selected_social_account` |
| **Pick a niche** | पोस्ट के लिए कंटेंट का एक विषय-क्षेत्र। | `social_niche` |
| **Pick a trend** | पोस्ट के लिए एक ट्रेंडिंग टॉपिक। | `social_trend` |

!!! warning "सेव होने वाला नाम न बदलें"
    हर **Pick** ब्लॉक अपना जवाब आख़िरी कॉलम के नाम से सेव करता है। उससे जुड़ा स्टोर एक्शन ठीक यही नाम पढ़ता है। अगर आप इसे बदलते हैं, तो एक्शन काम करना बंद कर देता है।

## चरण { #steps }

### स्टोर एक्शन जोड़ें { #add-a-store-action }

1. जिस चरण के बाद एक्शन चलना है, उसके बाद **+** पर क्लिक करें। **Add a step after** मेन्यू खुलता है।
2. **All steps** पर क्लिक करें।
3. **Store actions** के नीचे ब्लॉक पर क्लिक करें, जैसे **Order status**।
4. कैनवास पर ब्लॉक पर क्लिक करें। **Step** पैनल उसका नाम, वह क्या करता है, और **Outcomes** सूची दिखाता है।
5. हर आउटकम पर **+** पर क्लिक करें और उसके बाद आने वाला चरण जोड़ें।

स्टोर एक्शन में आपको कुछ टाइप नहीं करना होता। ब्लॉक इस्तेमाल के लिए तैयार मिलता है। [VERIFY: how each action finds the customer's order, for example from the saved order_number]

### ग्राहक को ऑर्डर देखने दें { #let-the-customer-check-an-order }

1. एक **Text** ब्लॉक जोड़ें जो ग्राहक से ऑर्डर चुनने को कहे, जैसे `Which order do you mean?`।
2. एक **Pick a recent order** ब्लॉक जोड़ें। पैनल में लिखा होता है **Saves the reply as order_number**।
3. एक **Order status** ब्लॉक जोड़ें।
4. आउटकम `found` को **Text** ब्लॉक से जोड़ें। मैसेज में `{{order_status_message}}` टाइप करें।
5. आउटकम `not_found` को **Text** ब्लॉक से जोड़ें, जैसे `We could not find that order.`

### ऑर्डर रद्द करें { #cancel-an-order }

1. **Pick an open order** जोड़ें ताकि ग्राहक ऐसा ऑर्डर चुने जो अभी बदला जा सकता है।
2. एक **Cancel order** ब्लॉक जोड़ें।
3. `cancelled` को किसी मैसेज से जोड़ें, जैसे `Your order is cancelled.`
4. `not_cancellable` को किसी मैसेज से जोड़ें, जैसे `This order has already shipped.`
5. `not_found` को ऐसे मैसेज से जोड़ें जो किसी व्यक्ति से मदद की पेशकश करे। देखें [एक्शन ब्लॉक](chatbot-action-blocks.md)।

### पिछला ऑर्डर दोबारा करें { #reorder-the-last-order }

1. एक **Reorder** ब्लॉक जोड़ें।
2. `ready` को **Text** ब्लॉक से जोड़ें। `Reorder here: {{reorder_url}}` टाइप करें।
3. `no_orders` को किसी मैसेज से जोड़ें, जैसे `You have no past orders yet.`

### डिलीवरी का पता कन्फ़र्म करें { #confirm-the-delivery-address }

1. एक **Confirm address** ब्लॉक जोड़ें।
2. `found` को **Text** ब्लॉक से जोड़ें। `We will deliver to: {{shipping_address}}` टाइप करें।
3. `not_found` को **Ask address** से जोड़ें ताकि नया पता लिया जा सके। देखें [नाम, फ़ोन, ईमेल और पता पूछें](chatbot-ask-details-blocks.md)।

### Cash on Delivery ऑर्डर को प्रीपेड में बदलें { #move-a-cash-on-delivery-order-to-prepaid }

1. **Pick an open order** जोड़ें।
2. एक **COD check** ब्लॉक जोड़ें।
3. `cod` को **COD to prepaid** ब्लॉक से जोड़ें। `not_cod` को किसी मैसेज से जोड़ें, जैसे `This order is already paid.`
4. `link_ready` को **Text** ब्लॉक से जोड़ें। `Pay here: {{payment_url}}` टाइप करें।
5. `no_payment` और `not_found` को ऐसे मैसेज से जोड़ें जो किसी व्यक्ति से मदद की पेशकश करें।

### अपॉइंटमेंट बुक करें { #book-an-appointment }

1. **Pick a service** जोड़ें, फिर **Pick a date**, फिर **Pick a time slot**। हर एक आपकी बुकिंग सेटिंग्स से लिस्ट दिखाता है।
2. एक **Book appointment** ब्लॉक जोड़ें।
3. `confirmed` को किसी मैसेज से जोड़ें, जैसे `Your appointment is booked.`
4. `requested` को किसी मैसेज से जोड़ें, जैसे `We received your request and will confirm soon.`
5. `slot_taken` और `rejected_show_slots` को वापस **Pick a time slot** से जोड़ें, ताकि ग्राहक दोबारा चुने।

### मौजूदा अपॉइंटमेंट बदलें या देखें { #move-or-check-an-existing-appointment }

1. ग्राहक को उसकी बुकिंग में से एक चुनने देने के लिए **Pick my appointment** जोड़ें।
2. अपॉइंटमेंट को बदलने के लिए खाली स्लॉट दिखाने हेतु **Pick a new slot** जोड़ें।

[VERIFY: Pick a new slot के बाद रीशेड्यूल कौन-सा ब्लॉक पूरा करता है]

### एडवांस्ड फ़ील्ड जाँचें { #check-the-advanced-fields }

1. किसी स्टोर एक्शन पर क्लिक करें, फिर **Show JSON** पर क्लिक करें। यह इंजन के अपने फ़ील्ड खोलता है।
2. **Advanced step · INVOKE_ACTION** या **DYNAMIC_OPTIONS** पढ़ें।
3. फ़ील्ड जैसे हैं वैसे रहने दें, जब तक आपकी सपोर्ट टीम किसी को बदलने को न कहे।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| एक्शन हमेशा `not_found` पर जाता है | ऑर्डर नंबर सेव नहीं हुआ। | उससे पहले एक **Pick** ब्लॉक जोड़ें, या **Ask Question** से नंबर पूछें और उसे `order_number` के नाम से सेव करें। |
| **Pick** लिस्ट खाली है | दिखाने के लिए कोई ऑर्डर, सर्विस या स्लॉट नहीं है। | अपना स्टोर और अपनी बुकिंग सेटिंग्स जाँचें। |
| `{{order_status_message}}` टेक्स्ट के रूप में दिखता है | मैसेज **Order status** ब्लॉक चलने से पहले भेज दिया गया। | मैसेज को `found` आउटकम के बाद रखें। |
| किसी आउटकम से कोई तार नहीं जुड़ा | चैट वहीं रुक जाती है। | आउटकम पर **+** पर क्लिक करें और एक चरण जोड़ें। |

## संबंधित गाइड { #related }

- [फ़्लो बिल्डर को समझें](understand-the-flow-builder.md)
- [फ़्लो के साथ स्टोर के संदेश ऑटोमेट करें](../flows/store-journeys.md)
- [एक्शन ब्लॉक](chatbot-action-blocks.md)
- [व्हाट्सऐप पर बुकिंग लें](../appointments/take-bookings-on-whatsapp.md)
