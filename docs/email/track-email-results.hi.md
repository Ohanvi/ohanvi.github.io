---
title: नतीजे ट्रैक करें और अनसब्सक्राइब व बाउंस संभालें
description: Email डैशबोर्ड और Send Logs पढ़ें, देखें किसने खोला और किसने क्लिक किया, और समझें कि अनसब्सक्राइब, बाउंस और शिकायतें आगे के ईमेल कैसे रोकती हैं।
---

# नतीजे ट्रैक करें और अनसब्सक्राइब व बाउंस संभालें { #track-results-and-handle-unsubscribes-and-bounces }

देखें कि आपके ईमेल का प्रदर्शन कैसा रहा, हर प्राप्तकर्ता के स्तर तक, और अपनी लिस्ट साफ़ रखें। आखिर में आपको पता होता है कि हर कैंपेन किसे मिला, किसने खोला और किसने क्लिक किया, और कुछ लोगों को क्यों छोड़ा गया, अनसब्सक्राइब किया गया या सप्रेस किया गया।

## शुरू करने से पहले { #before-you-start }

- आपने कम से कम 1 कैंपेन भेजा हो। देखें [ईमेल कैंपेन भेजें](send-email-campaign.md)।
- लेफ़्ट रेल में आपको **Email** दिखता है और उसके पैनल में **Manage** भी। Send Logs उसी के अंदर है। अगर यह नहीं दिखता, तो अपने एडमिन से पूछें।

## चरण { #steps }

### कैंपेन के आँकड़े पढ़ें { #read-the-campaign-figures }

1. लेफ़्ट रेल में **Email** खोलें, फिर **Campaigns** चुनें। किसी कैंपेन के आँकड़े देखने के लिए उसे खोलें। इस रिलीज़ में पूरा डैशबोर्ड छिपा हुआ है।
2. नए अकाउंट पर **Get set up to send** के चरण पूरे करें: **Confirm a sending address**, **Add your contacts**, **Put them in a list** और **Send your first campaign**।
3. कुल आँकड़े पढ़ें: **Sent**, **Delivered**, **Opened** और **Clicked**।
4. नीचे स्क्रॉल करके **Campaign Funnel**, **Recent Campaigns**, **Engagement Trend**, **Subscriber Growth**, **Top Links Clicked**, **Device Analytics** और **Suppression Breakdown** देखें।

उस कैंपेन के आँकड़े खोलने के लिए **Recent Campaigns** की किसी पंक्ति पर **View Report** पर क्लिक करें।

### Send Logs में हर प्राप्तकर्ता देखें { #see-each-recipient-in-send-logs }

1. लेफ़्ट रेल में **Email** खोलें, फिर **Manage** चुनें, फिर **Send Logs**। देखें [सेंड लॉग पढ़ें](read-send-logs.md)।
2. **Campaign** में कोई कैंपेन चुनें। टेबल में हर प्राप्तकर्ता **Recipient**, **Status**, **Sent**, **Opened**, **Clicked**, **Unsubscribed** और **Error** के साथ दिखता है।
3. सूची छोटी करने के लिए कोई फ़िल्टर चुनें: **All**, **Queued**, **Failed**, **Opened**, **Not Opened**, **Clicked**, **Bounced**, **Complained** या **Unsubscribed**।
4. किसी एक व्यक्ति को खोजने के लिए **Search recipient email** में लिखें।
5. किसी पंक्ति पर क्लिक करके उसकी **Activity Timeline** देखें। ज़्यादा जानकारी के लिए **View Contact** या **View Template** पर क्लिक करें।
6. डाउनलोड करने के लिए **Export** पर क्लिक करें, फिर **Export Excel (full log)** या **Export CSV (current page)** चुनें।

### हर सेंड स्टेटस का मतलब { #what-each-send-status-means }

| स्थिति | मतलब |
| --- | --- |
| **Queued** | जाने के इंतज़ार में है। |
| **Sent** | भेजने वाले सर्वर को सौंप दिया गया। |
| **Delivered** | प्राप्तकर्ता के इनबॉक्स प्रोवाइडर ने स्वीकार कर लिया। |
| **Bounced** | पता ईमेल नहीं पा सका। |
| **Complained** | प्राप्तकर्ता ने इसे स्पैम बताया। |
| **Failed** | भेजना पूरा नहीं हुआ। कारण **Error** कॉलम में लिखा होता है। |
| **Skipped suppressed** | नहीं भेजा गया, क्योंकि पता सप्रेशन लिस्ट में है। |

### अनसब्सक्राइब, बाउंस और शिकायतें कैसे काम करती हैं { #how-unsubscribes-bounces-and-complaints-work }

Ohanvi इन लोगों को आगे के ईमेल से अपने आप हटा देता है:

- **Unsubscribe** — जब प्राप्तकर्ता `{{unsubscribeUrl}}` लिंक पर क्लिक करता है, तो संपर्क **Unsubscribed** हो जाता है और पता सप्रेस कर दिया जाता है।
- **Hard bounce** — जो पता हमेशा के लिए बाउंस होता है, उसे सप्रेस कर दिया जाता है।
- **Complaint** — जो प्राप्तकर्ता आपके ईमेल को स्पैम बताता है, उसे सप्रेस कर दिया जाता है।

हर कैंपेन सप्रेस और अनसब्सक्राइब हुए लोगों को छोड़ देता है। वे **Send Logs** में **Skipped suppressed** दिखते हैं, और उनके लिए आपसे कोई शुल्क नहीं लिया जाता।

!!! warning "चेतावनी"
    अनसब्सक्राइब, हार्ड बाउंस और शिकायतें स्थायी अनुपालन रिकॉर्ड हैं। आप इन्हें हटा नहीं सकते। जिसने अनसब्सक्राइब किया है, उसे खुद दोबारा साइन अप करना होगा।

### किसी संपर्क को हाथ से अनसब्सक्राइब या दोबारा चालू करें { #unsubscribe-or-reactivate-a-contact-by-hand }

1. लेफ़्ट रेल में **Email** खोलें, फिर **Audience** चुनें, फिर **Emails** टैब।
2. संपर्क की पंक्ति का मेनू खोलें, फिर **Unsubscribe** पर क्लिक करें। **Unsubscribe Contact** में **Unsubscribe** पर क्लिक करें।
3. हाथ से किया गया अनसब्सक्राइब वापस लेने के लिए **Reactivate (mark Subscribed)** पर क्लिक करें, फिर **Reactivate** पर।

सिर्फ़ उसी को दोबारा चालू करें जिसे आपने खुद अनसब्सक्राइब किया था। अगर संपर्क ने खुद अनसब्सक्राइब किया है, तो उसकी नई सहमति उसी से आनी चाहिए।

### किसी पते को सभी ईमेल से ब्लॉक करें { #block-an-address-from-all-sends }

**Suppression List** स्क्रीन पर हर ब्लॉक किया गया पता उसके **Reason** के साथ दिखता है। इसे **Email** → **Manage** → **Suppression List** से खोलें। देखें [सप्रेशन लिस्ट से पते ब्लॉक करें](use-the-suppression-list.md)।

1. **Suppression List** खोलें, फिर **Add** पर क्लिक करें। **Add to Suppression List** डायलॉग खुलता है।
2. **Email Addresses** में हर लाइन पर 1 पता लिखें। **Remarks (optional)** जोड़ें, जैसे सपोर्ट टिकट नंबर।
3. **Add to List** पर क्लिक करें।

लिस्ट से बाद में सिर्फ़ वही पते हटाए जा सकते हैं जिन्हें आपने हाथ से जोड़ा था।

### देखें कि ईमेल पर कितना खर्च हुआ { #see-what-email-cost-you }

हर डिलीवर हुआ ईमेल क्रेडिट इस्तेमाल करता है। **Spend by product** और हर चार्ज देखने के लिए ऊपर दाईं ओर का **Credits** बॉक्स खोलें। देखें [क्रेडिट और बिलिंग](../credits-and-billing.md)।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| Send Logs पर **Select a campaign** | कोई कैंपेन चुना नहीं गया है। | **Campaign** में एक चुनें। |
| **No send logs yet** | कैंपेन अभी किसी को भेजा नहीं गया है। | **Campaigns** पर उसकी स्थिति देखें। |
| कई पंक्तियों में **Failed** दिख रहा है | भेजने वाला वेरिफ़ाई नहीं है, या आपके अपने ईमेल प्रोवाइडर ने कनेक्शन ठुकरा दिया। | **Error** कॉलम पढ़ें। **Sender Identities** और **Email Provider** स्क्रीन जाँचें। |
| **… suppressions are permanent and cannot be lifted.** | पते ने अनसब्सक्राइब किया, बाउंस हुआ या शिकायत की। | उसे सप्रेस ही रहने दें। अगर व्यक्ति आपके ईमेल चाहता है, तो उससे दोबारा साइन अप करने को कहें। |
| कैंपेन **Sending** पर अटका है | भेजना बीच में रुक गया। | **Campaigns** पर **⋮** → **Finish sending** खोलें। |
| ओपन कम दिख रहे हैं | कुछ इनबॉक्स ट्रैकिंग इमेज को ब्लॉक कर देते हैं। | ओपन के साथ क्लिक की भी तुलना करें। |

## संबंधित गाइड { #related }

- [ईमेल कैंपेन भेजें](send-email-campaign.md)
- [ईमेल संपर्क, लिस्ट और सेगमेंट जोड़ें](manage-email-contacts.md)
- [क्रेडिट और बिलिंग](../credits-and-billing.md)

<!-- Menu paths updated: Dashboard hidden; Send Logs and Suppression List are under Manage; Contacts is in Audience. -->
