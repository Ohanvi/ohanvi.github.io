---
title: अपनी शेड्यूल की हुई अपॉइंटमेंट देखें
description: Appointments शेड्यूल खोलें और हर बुकिंग को उसके स्टेटस के साथ कैलेंडर पर देखें।
---

# अपनी शेड्यूल की हुई अपॉइंटमेंट देखें { #see-your-scheduled-appointments }

हर बुकिंग को कैलेंडर या लिस्ट में देखने के लिए **Appointments** व्यू खोलें। यहाँ आप देख सकते हैं कि किसकी बुकिंग कब है। Schedule से बाहर गए बिना आप किसी बुकिंग का समय बदल सकते हैं या उसे कैंसिल कर सकते हैं।

## शुरू करने से पहले { #before-you-start }

- लेफ़्ट रेल में आपको **Schedule** दिखना चाहिए। डिफ़ॉल्ट रूप से यह सिर्फ़ वर्कस्पेस के Super Admin रोल को मिलता है। अगर यह नहीं दिख रहा, तो अपने एडमिन से कहें।
- आपकी बुकिंग आ चुकी हों। देखें [WhatsApp पर बुकिंग लें](../appointments/take-bookings-on-whatsapp.md)।

## स्टेप { #steps }

### Appointments शेड्यूल खोलें { #open-the-appointments-schedule }

1. लेफ़्ट रेल में **Schedule** खोलें, फिर **Appointments** चुनें। पेज का टाइटल **Appointments schedule** दिखेगा।
2. पेज इस महीने के **Calendar** व्यू में खुलता है। चैनल चिप्स यहाँ नहीं दिखते, क्योंकि यह पेज पहले से सिर्फ़ Appointments दिखाता है।
3. किसी दिन के आइटम देखने के लिए उस दिन पर क्लिक करें। समय के हिसाब से, दिन के हेडिंग के नीचे आइटम देखने के लिए **List** पर क्लिक करें।
4. किसी आइटम पर क्लिक करें। उसकी जानकारी दाईं तरफ़ खुलती है: **When**, **Recurrence**, **Audience / with**, **Owner**, **Channel** और **Type**।

### हर Type का मतलब समझें { #read-what-each-type-means }

**Type** बताता है कि यह आइटम किस तरह का है।

| Type | यह क्या है |
| --- | --- |
| **Booking** | किसी प्रोवाइडर के साथ बुक की गई एक अपॉइंटमेंट। |

बुकिंग से पहले जो रिमाइंडर जाते हैं, वे **WhatsApp** व्यू में **Appointment reminder** नाम से दिखते हैं।

**Audience / with** लाइन में कस्टमर का फ़ोन नंबर दिखता है।

### स्टेटस पढ़ें { #read-the-status }

| स्टेटस | मतलब |
| --- | --- |
| **Scheduled** | बुकिंग **Requested**, **Confirmed** या **Rescheduled** है। |
| **Sent** | बुकिंग **Completed** या **No-show** है। |
| **Cancelled** | बुकिंग **Cancelled** या **Rejected** है। |

### किसी आइटम में बदलाव करें { #change-an-item }

1. नई तारीख और समय चुनने के लिए **Reschedule** पर क्लिक करें। देखें [शेड्यूल किए गए आइटम को रीशेड्यूल, कैंसिल या डिलीट करें](reschedule-cancel-delete.md)।
2. **Appointments** पेज खोलने के लिए **Edit** पर क्लिक करें। देखें [अपॉइंटमेंट मैनेज करें](../appointments/manage-appointments.md)।
3. बुकिंग कैंसिल करने के लिए **Cancel** पर क्लिक करें। बुकिंग **Cancelled** हो जाती है और उसके रिमाइंडर हट जाते हैं।
4. आइटम को Appointments से हटाने के लिए **Delete** पर क्लिक करें।

### व्यू को छाँटें { #narrow-the-view }

1. सिर्फ़ अपने आइटम देखने के लिए **Everyone's schedule** पर क्लिक करें और **My schedule** चुनें।
2. **Any status** पर क्लिक करें और **Scheduled**, **Draft**, **Sent** या **Cancelled** चुनें।

### कुछ नया जोड़ें { #add-something-new }

1. **New schedule** पर क्लिक करें, फिर **New in Appointments** चुनें। Ohanvi **Appointments** पेज खोल देगा। नया आइटम आप वहीं बनाएँगे।

## समस्या का समाधान { #troubleshooting }

| समस्या | वजह | हल |
| --- | --- | --- |
| **Nothing scheduled here** | कोई बुकिंग नहीं है, या कोई फ़िल्टर उन्हें छिपा रहा है। | **Everyone's schedule** और **Any status** चुनें। |
| **Could not reschedule.** | नया समय पहले से भरा है, काम के घंटों से बाहर है, या आपके बुकिंग नियमों में नहीं बैठता। | कोई दूसरा समय चुनें। या **Appointments** पेज पर **Move** इस्तेमाल करें, जो खाली समय दिखाता है। |
| **Delete** बुकिंग हटाने की जगह उसे कैंसिल कर देता है | Appointments कभी डिलीट नहीं होतीं। | कुछ करने की ज़रूरत नहीं। बुकिंग **Cancelled** के रूप में रहती है। |

## संबंधित गाइड { #related }

- [जो कुछ भी शेड्यूल है, सब देखें](view-schedule.md)
- [शेड्यूल किए गए आइटम को रीशेड्यूल, कैंसिल या डिलीट करें](reschedule-cancel-delete.md)
- [अपॉइंटमेंट मैनेज करें](../appointments/manage-appointments.md)
- [बुकिंग के नियम और रिमाइंडर सेट करें](../appointments/set-booking-rules-and-reminders.md)
