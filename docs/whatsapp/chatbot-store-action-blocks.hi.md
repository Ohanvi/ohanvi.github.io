---
title: चैटबॉट में ऑर्डर और बुकिंग देखें
description: चैटबॉट में स्टोर एक्शन ब्लॉक और Pick लिस्ट जोड़ें। ग्राहक ऑर्डर देख, कैंसिल या दोबारा ऑर्डर कर सकेंगे, लिंक से पेमेंट कर सकेंगे और अपॉइंटमेंट बुक कर सकेंगे।
---

# चैटबॉट में ऑर्डर और बुकिंग देखें { #look-up-orders-and-bookings-in-a-chatbot }

स्टोर एक्शन से बॉट चैट के अंदर ही असली काम कर सकता है। ग्राहक अपना ऑर्डर देख सकता है, कैंसिल कर सकता है या दोबारा ऑर्डर कर सकता है। वह डिलीवरी का पता पक्का कर सकता है, Cash on Delivery को पेमेंट लिंक में बदल सकता है, या अपॉइंटमेंट बुक कर सकता है। हर ब्लॉक के अपने तैयार एग्ज़िट होते हैं। कुछ ब्लॉक एक वेरिएबल भी देते हैं, जिसे आप मैसेज में दिखा सकते हैं। इन्हें जोड़ने और आपस में कनेक्ट करने के लिए इस पेज के स्टेप फ़ॉलो करें।

## शुरू करने से पहले { #before-you-start }

- आपने बिल्डर में एक फ़्लो खोला हो। देखें [फ़्लो बिल्डर को समझें](understand-the-flow-builder.md)।
- ऑर्डर ब्लॉक के लिए आपका स्टोर कनेक्ट हो। देखें [फ़्लो के साथ स्टोर के मैसेज ऑटोमेट करें](../flows/store-journeys.md)।
- **Book appointment** के लिए आपने सर्विस और बुकिंग के नियम जोड़ लिए हों। देखें [WhatsApp पर बुकिंग लें](../appointments/take-bookings-on-whatsapp.md)।
- आपको मैसेज ब्लॉक जोड़ना आता हो। देखें [टेक्स्ट और लिस्ट ब्लॉक](chatbot-text-and-list-blocks.md)।

## हर ब्लॉक क्या करता है { #what-each-block-does }

### स्टोर एक्शन { #store-actions }

ये ब्लॉक **All steps** → **Store actions** में मिलते हैं। हर ब्लॉक के कार्ड पर उसके **Outcomes** छोटे चिप के रूप में दिखते हैं। हर आउटकम को किसी स्टेप से जोड़ें।

| ब्लॉक | यह क्या करता है | आउटकम | यह कौन सा वेरिएबल देता है |
| --- | --- | --- | --- |
| **Order status** | आपके स्टोर में ऑर्डर ढूँढता है। | `found`, `not_found` | `{{order_status_message}}` |
| **Cancel order** | ऑर्डर कैंसिल हो सकता हो, तो आपके स्टोर पर उसे कैंसिल करता है। | `cancelled`, `not_cancellable`, `not_found` | कोई नहीं |
| **Reorder** | पिछले ऑर्डर से पहले से भरा हुआ चेकआउट लिंक बनाता है। | `ready`, `no_orders` | `{{reorder_url}}` |
| **Confirm address** | डिलीवरी का पता ढूँढता है। | `found`, `not_found` | `{{shipping_address}}` |
| **COD check** | देखता है कि ऑर्डर Cash on Delivery का है या नहीं। | `cod`, `not_cod` | कोई नहीं |
| **COD to prepaid** | COD ऑर्डर के लिए पेमेंट लिंक बनाता है। | `link_ready`, `no_payment`, `not_found` | `{{payment_url}}` |
| **Book appointment** | चुनी हुई सर्विस, तारीख और स्लॉट बुक करता है। | `confirmed`, `requested`, `slot_taken`, `rejected_show_slots` | कोई नहीं |

### Pick लिस्ट { #pick-lists }

**Pick** ब्लॉक ग्राहक को लाइव लिस्ट दिखाता है और उसकी पसंद सेव कर लेता है। ये ब्लॉक **All steps** → **Advanced** में मिलते हैं।

| ब्लॉक | ग्राहक क्या चुनता है | इस नाम से सेव होता है |
| --- | --- | --- |
| **Pick a recent order** | अपने हाल के ऑर्डर में से एक। | `order_number` |
| **Pick an open order** | अपने ऐसे ऑर्डर में से एक जो अभी खुला है। | `order_number` |
| **Pick a service** | बुक होने लायक एक सर्विस। | `service_id` |
| **Pick a date** | ऐसा दिन जिसमें स्लॉट खाली हैं। | `date` |
| **Pick a time slot** | चुने हुए दिन का एक खाली स्लॉट। | `slot` |
| **Pick my appointment** | अपने आने वाले अपॉइंटमेंट में से एक। | `appointment_id` |
| **Pick a new slot** | अपॉइंटमेंट बदलने के लिए एक खाली स्लॉट। | `slot` |
| **Pick a social account** | आपके कनेक्ट किए हुए सोशल अकाउंट में से एक। | `selected_social_account` |
| **Pick a niche** | पोस्ट के लिए कंटेंट का एक विषय। | `social_niche` |
| **Pick a trend** | पोस्ट के लिए एक ट्रेंडिंग टॉपिक। | `social_trend` |

!!! warning "सेव होने वाला नाम न बदलें"
    हर **Pick** ब्लॉक जवाब को आख़िरी कॉलम वाले नाम से सेव करता है। उससे जुड़ा स्टोर एक्शन ठीक यही नाम पढ़ता है। अगर आप यह नाम बदलेंगे, तो एक्शन काम करना बंद कर देगा।

## स्टेप { #steps }

### स्टोर एक्शन जोड़ें { #add-a-store-action }

1. जिस स्टेप के बाद एक्शन चलाना है, उसके आगे **+** पर क्लिक करें। **Add a step after** मेन्यू खुलेगा।
2. **All steps** पर क्लिक करें।
3. **Store actions** में से ब्लॉक चुनें, जैसे **Order status**।
4. कैनवास पर ब्लॉक पर क्लिक करें। **Step** पैनल में उसका नाम, उसका काम और **Outcomes** की लिस्ट दिखेगी।
5. हर आउटकम के **+** पर क्लिक करें और उसके बाद चलने वाला स्टेप जोड़ें।

स्टोर एक्शन में आपको कुछ लिखना नहीं पड़ता। ब्लॉक सीधे इस्तेमाल के लिए तैयार मिलता है। [VERIFY: how each action finds the customer's order, for example from the saved order_number]

### ग्राहक को ऑर्डर देखने दें { #let-the-customer-check-an-order }

1. एक **Text** ब्लॉक जोड़ें, जो ग्राहक से ऑर्डर चुनने को कहे, जैसे `Which order do you mean?`।
2. एक **Pick a recent order** ब्लॉक जोड़ें। पैनल में लिखा दिखेगा **Saves the reply as order_number**।
3. एक **Order status** ब्लॉक जोड़ें।
4. आउटकम `found` को **Text** ब्लॉक से जोड़ें। मैसेज में `{{order_status_message}}` लिखें।
5. आउटकम `not_found` को **Text** ब्लॉक से जोड़ें, जैसे `We could not find that order.`

### ऑर्डर कैंसिल करें { #cancel-an-order }

1. **Pick an open order** जोड़ें, ताकि ग्राहक ऐसा ऑर्डर चुने जिसमें अभी बदलाव हो सकता है।
2. एक **Cancel order** ब्लॉक जोड़ें।
3. `cancelled` को किसी मैसेज से जोड़ें, जैसे `Your order is cancelled.`
4. `not_cancellable` को किसी मैसेज से जोड़ें, जैसे `This order has already shipped.`
5. `not_found` को ऐसे मैसेज से जोड़ें जिसमें किसी इंसान से मदद लेने का विकल्प हो। देखें [एक्शन ब्लॉक](chatbot-action-blocks.md)।

### पिछला ऑर्डर दोबारा करें { #reorder-the-last-order }

1. एक **Reorder** ब्लॉक जोड़ें।
2. `ready` को **Text** ब्लॉक से जोड़ें। उसमें `Reorder here: {{reorder_url}}` लिखें।
3. `no_orders` को किसी मैसेज से जोड़ें, जैसे `You have no past orders yet.`

### डिलीवरी का पता पक्का करें { #confirm-the-delivery-address }

1. एक **Confirm address** ब्लॉक जोड़ें।
2. `found` को **Text** ब्लॉक से जोड़ें। उसमें `We will deliver to: {{shipping_address}}` लिखें।
3. `not_found` को **Ask address** से जोड़ें, ताकि नया पता लिया जा सके। देखें [नाम, फ़ोन, ईमेल और पता पूछें](chatbot-ask-details-blocks.md)।

### Cash on Delivery ऑर्डर को प्रीपेड में बदलें { #move-a-cash-on-delivery-order-to-prepaid }

1. **Pick an open order** जोड़ें।
2. एक **COD check** ब्लॉक जोड़ें।
3. `cod` को **COD to prepaid** ब्लॉक से जोड़ें। `not_cod` को किसी मैसेज से जोड़ें, जैसे `This order is already paid.`
4. `link_ready` को **Text** ब्लॉक से जोड़ें। उसमें `Pay here: {{payment_url}}` लिखें।
5. `no_payment` और `not_found` को ऐसे मैसेज से जोड़ें जिनमें किसी इंसान से मदद लेने का विकल्प हो।

### अपॉइंटमेंट बुक करें { #book-an-appointment }

1. **Pick a service** जोड़ें, फिर **Pick a date**, फिर **Pick a time slot**। हर ब्लॉक आपकी बुकिंग सेटिंग्स से लिस्ट दिखाता है।
2. एक **Book appointment** ब्लॉक जोड़ें।
3. `confirmed` को किसी मैसेज से जोड़ें, जैसे `Your appointment is booked.`
4. `requested` को किसी मैसेज से जोड़ें, जैसे `We received your request and will confirm soon.`
5. `slot_taken` और `rejected_show_slots` को वापस **Pick a time slot** से जोड़ें, ताकि ग्राहक दोबारा स्लॉट चुन सके।

### मौजूदा अपॉइंटमेंट बदलें या देखें { #move-or-check-an-existing-appointment }

1. **Pick my appointment** जोड़ें, ताकि ग्राहक अपनी बुकिंग में से एक चुन सके।
2. **Pick a new slot** जोड़ें। इससे अपॉइंटमेंट बदलने के लिए खाली स्लॉट दिखेंगे।

[VERIFY: which block finishes a reschedule after Pick a new slot]

### एडवांस्ड फ़ील्ड देखें { #check-the-advanced-fields }

1. किसी स्टोर एक्शन पर क्लिक करें, फिर **Show JSON** पर क्लिक करें। इसमें इंजन की अपनी फ़ील्ड खुल जाती हैं।
2. **Advanced step · INVOKE_ACTION** या **DYNAMIC_OPTIONS** पढ़ें।
3. फ़ील्ड को जैसा है वैसा ही रहने दें। हाँ, अगर आपकी सपोर्ट टीम किसी फ़ील्ड को बदलने को कहे, तो बदल लें।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| एक्शन हमेशा `not_found` पर चला जाता है | ऑर्डर नंबर सेव नहीं हुआ। | उससे पहले एक **Pick** ब्लॉक जोड़ें। या **Ask Question** से नंबर पूछें और उसे `order_number` नाम से सेव करें। |
| **Pick** लिस्ट खाली है | दिखाने के लिए कोई ऑर्डर, सर्विस या स्लॉट नहीं है। | अपना स्टोर और अपनी बुकिंग सेटिंग्स देखें। |
| `{{order_status_message}}` टेक्स्ट की तरह ही दिख रहा है | मैसेज **Order status** ब्लॉक चलने से पहले ही भेज दिया गया। | मैसेज को `found` आउटकम के बाद रखें। |
| किसी आउटकम से कोई स्टेप जुड़ा नहीं है | चैट वहीं रुक जाती है। | आउटकम के **+** पर क्लिक करें और एक स्टेप जोड़ें। |

## संबंधित गाइड { #related }

- [फ़्लो बिल्डर को समझें](understand-the-flow-builder.md)
- [फ़्लो के साथ स्टोर के मैसेज ऑटोमेट करें](../flows/store-journeys.md)
- [एक्शन ब्लॉक](chatbot-action-blocks.md)
- [WhatsApp पर बुकिंग लें](../appointments/take-bookings-on-whatsapp.md)
