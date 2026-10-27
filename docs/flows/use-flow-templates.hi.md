---
title: टेम्प्लेट से फ़्लो शुरू करें
description: Start from library खोलें, तैयार स्टार्टर या चैटबॉट टेम्प्लेट चुनें, उसका प्रीव्यू देखें और उसे एडिट होने लायक ड्राफ़्ट बनाकर अपने फ़्लो में जोड़ें।
---

# टेम्प्लेट से फ़्लो शुरू करें { #start-a-flow-from-a-template }

फ़्लो को कार्ड-दर-कार्ड खुद बनाने की जगह बना-बनाया फ़्लो अपने वर्कस्पेस में जोड़ें। इस गाइड के अंत में आपकी **Flows** लिस्ट में स्टार्टर या चैटबॉट टेम्प्लेट की एक कॉपी होगी। आप उसका हर स्टेप बदल सकते हैं और तैयार होने पर पब्लिश कर सकते हैं।

## शुरू करने से पहले { #before-you-start }

- **WhatsApp** पैनल में आपको **Flows** दिखता हो। फ़्लो जोड़ने के लिए आपके रोल के पास फ़्लो सेव करने का एक्सेस भी होना चाहिए। देखें [फ़्लो और फ़्लो की लिस्ट को समझें](flows-overview-and-list.md)।
- चैटबॉट टेम्प्लेट के लिए आपका WhatsApp नंबर कनेक्ट हो। देखें [अपना WhatsApp नंबर कनेक्ट करें](../whatsapp/connect-whatsapp-number.md)।
- Google स्टार्टर के लिए आपको पता हो कि उसमें कौन सा Google अकाउंट, स्प्रेडशीट या कैलेंडर इस्तेमाल करना है।

## स्टार्टर और चैटबॉट टेम्प्लेट { #starters-and-chatbot-templates }

**Start from library** में दो लिस्ट हैं।

- **Starters** ऑटोमेशन फ़्लो हैं। ये किसी घटना पर शुरू होते हैं, जैसे फ़ॉर्म सबमिट होना।
- **Chatbot templates** बने-बनाए WhatsApp कन्वर्सेशन हैं। हर टेम्प्लेट का एक टॉपिक होता है, जैसे E-commerce या Support।

### स्टार्टर { #starters }

| स्टार्टर | यह क्या करता है |
| --- | --- |
| **Collect a lead on WhatsApp** | कोई हाय कहे, तो उससे नाम, फ़ोन नंबर और पता पूछता है। फिर उसे CRM में लीड के रूप में सेव कर देता है। |
| **Add form answers to a Google Sheet** | फ़ॉर्म सबमिट होने पर स्प्रेडशीट में एक लाइन जोड़ता है। इसमें लिखा होता है कि किसने, कब और कौन सा फ़ॉर्म भरा। |
| **Book a Google Meet when someone is free** | फ़ॉर्म सबमिट होने पर कैलेंडर देखता है। स्लॉट खाली हो, तो Meet लिंक के साथ मीटिंग बुक करता है और लिंक WhatsApp पर भेज देता है। |
| **Send an instant Google Meet link** | फ़ॉर्म सबमिट होते ही Meet रूम बना देता है और लिंक WhatsApp पर भेजता है। कैलेंडर इनवाइट नहीं बनता। |
| **Turn Google Form responses into CRM leads** | आपके Google Form पर जवाब आने पर उस व्यक्ति को CRM में लीड के रूप में सेव करता है। साथ ही जवाब को Google Sheet में जोड़ता है। |
| **Save Google Form responses to Google Contacts** | आपके Google Form पर जवाब आने पर उस व्यक्ति को Google Contacts में जोड़ता है। वह पहले से मौजूद हो, तो उसकी जानकारी अपडेट कर देता है। |
| **Publish everywhere** | पोस्ट तैयार होने पर उसे चुने हुए हर चैनल पर भेजता है। फिर दर्ज करता है कि कैसा रहा। |
| **Only promote big posts** | पोस्ट तैयार होने पर पहले एक शर्त जाँचता है। शर्त लागू न हो, तो चुपचाप रुक जाता है। |
| **Give drafts a breather** | ड्राफ़्ट बनने पर उसके साथ कुछ करने से पहले थोड़ी देर रुकता है। |

### चैटबॉट टेम्प्लेट { #chatbot-templates }

हर टेम्प्लेट एक चलता-फिरता कन्वर्सेशन है। आखिरी कॉलम में उसकी तीन मुख्य ब्रांच बताई गई हैं।

| टेम्प्लेट | टॉपिक | मुख्य ब्रांच |
| --- | --- | --- |
| **Order Status Checker** | E-commerce, Orders, Tracking | Track Order, Change Address, Cancel Order |
| **FAQ Menu** | Support, FAQ, Self-serve | Instant Answers, Topic Menu, Human Handover |
| **Product Catalog** | Retail, Catalog, Browse | Browse Range, Best Sellers, Shopping Help |
| **Feedback Collector** | Feedback, CSAT, Reviews | Rate Us, Reason Capture, Recover Unhappy |
| **Shipping Update** | E-commerce, Delivery, Logistics | Delivery Status, Order Lookup, Urgent Cases |
| **Return & Refund** | E-commerce, Returns, Refunds | Start Return, Reason Routing, Policy Steps |
| **Table Reservation** | Food, Booking, Dine-in | Pick Slot, Party Size, Confirm Booking |
| **Hotel Check-in** | Hospitality, Check-in, Concierge | Early Check-in, Late Check-out, Airport Pickup |
| **Salon Booking** | Beauty, Booking, Appointments | Pick Service, Choose Day, Confirm Slot |
| **Gym Membership** | Fitness, Membership, Leads | View Plans, Free Trial, Talk to Trainer |
| **Real Estate Inquiry** | Real Estate, Property, Leads | Buy or Rent, Budget Band, Preferred Area |
| **Job Application** | HR, Recruitment, Hiring | Job Roles, Applicant Details, Screening |
| **Event Registration** | Events, RSVP, Registration | Event Details, Attendee Count, Confirm RSVP |
| **Course Enrollment** | Education, Courses, Admissions | Course Picker, Batch Details, Counselling |
| **Insurance Quote** | Finance, Insurance, Quotes | Policy Type, Key Details, Advisor Handover |
| **Bank Balance FAQ** | Finance, Banking, Self-serve | Balance & Timings, Block Card, Other Queries |
| **Tech Support Triage** | Technology, Support, Triage | Report Issue, Device Details, Quick Fix |
| **Warranty Claim** | Retail, Warranty, Service | Product & Date, Issue Details, Claim Registered |
| **Loyalty Rewards** | Retail, Loyalty, Rewards | Points Balance, Redeem Steps, Earning Rules |
| **Abandoned Cart Reminder** | E-commerce, Cart, Recovery | Cart Reminder, Recovery Link, Need Help |
| **Payment Reminder** | Finance, Payments, Collections | Pay Now, Payment Proof, Promised Date |
| **Welcome New Customer** | General, Onboarding, Welcome | Instant Welcome, Start Browsing, Talk to Us |
| **Out of Office** | General, After-hours, Auto-reply | After Hours, Take a Message, Emergency Escalation |
| **Language Selector** | General, Language, Preference | Pick Language, Confirm Choice, Saved on Contact |
| **Store Locator** | Retail, Stores, Locations | Nearest Store, Directions, Call Store |
| **Demo Request** | B2B, Demo, Sales | Book a Slot, Work Email, Pricing Questions |

लाइब्रेरी में इस लिस्ट से ज़्यादा टेम्प्लेट हो सकते हैं। आपकी स्क्रीन पर वही दिखते हैं जो आपके लिए उपलब्ध हैं।

## स्टेप { #steps }

### लाइब्रेरी खोलें { #open-the-library }

1. लेफ़्ट रेल में **WhatsApp** खोलें, फिर **Flows** चुनें। **Automation flows** स्क्रीन खुलती है।
2. **New flow** के दाईं तरफ़ बने तीर (**⌄**) पर क्लिक करें।
3. **Start from library** पर क्लिक करें। **Start from library** विंडो खुलती है।

### टेम्प्लेट ढूँढें { #find-a-template }

1. **Search templates** में लिखें। स्टार्टर के लिए सर्च उसके टाइटल और समरी में मिलान करता है। चैटबॉट टेम्प्लेट के लिए नाम, समरी, टॉपिक और टैग में भी मिलान करता है।
2. **Chatbot templates** के नीचे किसी टॉपिक के चिप पर क्लिक करें। फिर सिर्फ़ वही टॉपिक दिखता है। फ़िल्टर हटाने के लिए **All** पर क्लिक करें।
3. कुछ न मिले, तो विंडो में **No starters match your search.** या **No chatbot templates match.** लिखा आता है।

### स्टार्टर जोड़ें { #add-a-starter }

1. **Starters** के नीचे टाइटल और उसके नीचे की लाइन पढ़ें।
2. **Use** पर क्लिक करें। फ़्लो बनने तक बटन पर **Creating…** लिखा रहता है।
3. फ़्लो बिल्डर में खुलता है। यह ड्राफ़्ट होता है, जिसका नाम **Untitled** और एक नंबर होता है, जैसे **Untitled 1**।
4. नाम बदलने के लिए ऊपर नाम पर क्लिक करें। टूलटिप में **Rename flow** लिखा आता है।
5. हर स्टेप पर क्लिक करें और जो खाली है, उसे भरें। Google स्टार्टर में स्प्रेडशीट, मीटिंग विंडो और Google अकाउंट खाली आते हैं। इन्हें भरे बिना पब्लिश नहीं होगा। स्टेप में **Choose from Google Drive** से स्प्रेडशीट चुनें। देखें [स्प्रेडशीट और उसका टैब सेट करें](../whatsapp/flow-google-workspace-steps.md#set-the-spreadsheet-and-its-tab)।
6. **Save** पर क्लिक करें, फिर **Publish** पर क्लिक करें। देखें [ऑटोमेशन फ़्लो बनाएँ](build-automation-flow.md)।

### चैटबॉट टेम्प्लेट का प्रीव्यू देखें { #preview-a-chatbot-template }

1. **Chatbot templates** के नीचे किसी टेम्प्लेट पर **Preview** पर क्लिक करें।
2. स्टेप को क्रम से पढ़ें। हर स्टेप पर एक आसान लेबल लगा होता है, जैसे **Message**, **Question with replies**, **Template message**, **Product**, **Product list**, **Pick from a live list**, **Ask for a location**, **Ask for a photo or file**, **Add a tag**, **Call an API**, **Hand over to a person**, **AI reply**, **Condition** या **Continue in another flow**।
3. नीचे का नोट पढ़ें: **Every step stays editable once it is yours.**
4. टेम्प्लेट जोड़ने के लिए **Use template** पर क्लिक करें। वापस जाना हो, तो **Close** पर क्लिक करें।

प्रीव्यू लोड न हो, तो टेम्प्लेट के नाम के साथ **Could not load "…".** मैसेज दिखता है।

### चैटबॉट टेम्प्लेट जोड़ें { #add-a-chatbot-template }

1. **Chatbot templates** के नीचे **Use template** पर क्लिक करें। बटन पर **Adding…** लिखा रहता है।
2. Ohanvi टेम्प्लेट को आपके वर्कस्पेस में कॉपी करता है और फ़्लो के रूप में खोल देता है।
3. तय करें कि चैटबॉट कब शुरू हो। देखें [फ़्लो का Start और ट्रिगर](../whatsapp/chatbot-flow-start-and-triggers.md)।
4. सैंपल के शब्द, टेम्प्लेट और लिंक हटाकर अपने शब्द, टेम्प्लेट और लिंक डालें। देखें [फ़्लो बिल्डर को समझें](../whatsapp/understand-the-flow-builder.md)।
5. आज़माने के लिए **Run test** या **Test** पर क्लिक करें। देखें [चैट सिम्युलेटर से टेस्ट करें](../whatsapp/test-a-flow-with-the-chat-simulator.md)।
6. **Publish** पर क्लिक करें।

!!! warning "टेम्प्लेट एक कॉपी है"
    यह कॉपी आपकी है। इसमें बदलाव करने से लाइब्रेरी का टेम्प्लेट कभी नहीं बदलता। चैटबॉट टेम्प्लेट जब तक आप पब्लिश नहीं करते, तब तक वह ग्राहकों को जवाब नहीं देता।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **The chatbot templates could not be loaded.** | लाइब्रेरी से जवाब नहीं आया। | **Retry** पर क्लिक करें। |
| **No chatbot templates are available yet.** | आपके वर्कस्पेस में लाइब्रेरी के टेम्प्लेट नहीं हैं। | स्टार्टर से शुरू करें, या चैटबॉट शुरू से बनाएँ। देखें [WhatsApp चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md)। |
| **The flow could not be created.** | सर्वर पर कॉपी नहीं बन पाई। | दोबारा कोशिश करें। फिर भी न बने, तो सपोर्ट से बात करें। |
| **Could not load "…".** | उस टेम्प्लेट का प्रीव्यू लोड नहीं हुआ। | प्रीव्यू बंद करें और दोबारा कोशिश करें। |
| Google स्टार्टर पब्लिश नहीं हो रहा | स्प्रेडशीट, मीटिंग विंडो या Google अकाउंट खाली है। | स्टेप खोलें और उसे भरें। देखें [Google Workspace कनेक्ट करें](../settings/connect-google-workspace.md)। |

## संबंधित गाइड { #related }

- [फ़्लो और फ़्लो की लिस्ट को समझें](flows-overview-and-list.md)
- [ऑटोमेशन फ़्लो बनाएँ](build-automation-flow.md)
- [WhatsApp चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md)
- [फ़्लो बिल्डर को समझें](../whatsapp/understand-the-flow-builder.md)
