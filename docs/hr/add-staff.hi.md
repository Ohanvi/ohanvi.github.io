---
title: स्टाफ़ जोड़ें
description: WhatsApp पर काम करने वाले लोगों को नाम और WhatsApp नंबर से जोड़ें। स्टाफ़ को ऐप लॉगिन नहीं मिलता और वह पेड सीट नहीं लेता।
---

# स्टाफ़ जोड़ें { #add-staff }

स्टाफ़ के किसी व्यक्ति को नाम और WhatsApp नंबर से जोड़ें। स्टाफ़ का ऐप लॉगिन नहीं होता और वह पेड सीट नहीं लेता। जुड़ने के बाद वह उसी नंबर से WhatsApp पर टास्क पा सकता है और हाज़िरी लगा सकता है।

## शुरू करने से पहले { #before-you-start }

- आप अपने वर्कस्पेस में **Super Admin** हों। **App User Management** लिस्ट पर **Add** और **Edit** सिर्फ़ एडमिन को दिखते हैं। देखें [टीम के मेंबर, रोल और अनुमतियाँ मैनेज करें](../settings/roles-and-permissions.md)।
- आपके पास उस व्यक्ति का WhatsApp नंबर, कंट्री कोड के साथ हो।
- यह नंबर आपके वर्कस्पेस में किसी और के नाम पर न हो। एक WhatsApp नंबर एक ही व्यक्ति का होता है।

## स्टाफ़ और टीम के साथी { #staff-and-teammates }

**App User** से जोड़ा गया हर व्यक्ति या तो टीम का साथी होता है, या स्टाफ़, या दोनों।

| टाइप | ऐप लॉगिन | पेड सीट | क्या करता है |
| --- | --- | --- | --- |
| टीम का साथी (**Super Admin**, **Manager** या **Executive**) | हाँ | हाँ | यूज़रनेम और पासवर्ड से Ohanvi में साइन इन करता है। |
| **Staff** | नहीं | नहीं | सिर्फ़ WhatsApp पर काम करता है: टास्क पाता है, हाज़िरी लगाता है, अपनी हाज़िरी पूछता है। |
| **Staff** चालू वाला टीम का साथी | हाँ | हाँ | Ohanvi में साइन इन करता है, और WhatsApp पर टास्क भी पाता है और हाज़िरी भी लगाता है। |

स्टाफ़ कभी साइन इन नहीं कर सकता, इसलिए उसे यूज़रनेम, ईमेल या पासवर्ड की ज़रूरत नहीं होती। **App User Management** लिस्ट में उसके आगे हरा **Staff** टैग दिखता है।

## स्टेप { #steps }

### App User लिस्ट खोलें { #open-the-app-user-list }

1. नीचे बाएँ कोने में अपने नाम के पहले अक्षरों पर क्लिक करें, फिर **Settings** पर क्लिक करें।
2. Settings की लिस्ट में सबसे ऊपर अपने नाम पर क्लिक करें।
3. **Team & access** के नीचे **App User** पर क्लिक करें। **App User Management** लिस्ट खुलती है।

लिस्ट के ऊपर **Seats: … of … used** और **Staff on WhatsApp: … active (all organisations)** दिखता है।

### स्टाफ़ का व्यक्ति जोड़ें { #add-a-staff-member }

1. **Add** पर क्लिक करें। **Add teammate** विंडो खुलती है, जिसमें **Executive** पहले से चुना होता है।
2. **Role** के नीचे **Executive** पर क्लिक करके उसे हटा दें। तब उस व्यक्ति का कोई ऐप लॉगिन नहीं होगा।
3. डिवाइडर की दाईं तरफ़ वाले **Staff** कार्ड पर क्लिक करें। विंडो का टाइटल **Add staff** हो जाता है और उसके नीचे **WhatsApp only: no app login, no seat.** लिखा आता है।

    [SCREENSHOT: Add staff विंडो, जिसमें Staff कार्ड चुना हो और Name व WhatsApp Number फ़ील्ड दिख रहे हों]

4. व्यक्ति का **Name** लिखें।
5. **WhatsApp Number** में कंट्री कोड चुनें, फिर नंबर लिखें।
6. **Add staff** पर क्लिक करें। **&lt;Name&gt; added as staff. They can now message your WhatsApp number for tasks.** मैसेज दिखता है।

वह व्यक्ति लिस्ट में **Staff** टैग के साथ दिखता है। सिर्फ़ स्टाफ़ देखने के लिए लिस्ट के ऊपर **Staff** पर क्लिक करें। **All** और **With login** बाकी लोगों को दिखाते हैं।

यही विंडो इन जगहों से भी खुलती है। हर जगह से यह **Staff** पहले से चुनी हुई खुलती है:

- HR में **Employee Management → Employees**: **Add staff in Settings →** पर क्लिक करें।
- WhatsApp tasks की सेटिंग: **Staff on WhatsApp** लिस्ट में **Add staff** पर क्लिक करें। देखें [WhatsApp tasks सेट करें](../tasks/set-up-whatsapp-tasks.md)।

### सारी सीटें भरी हों, तब स्टाफ़ जोड़ें { #add-staff-when-every-seat-is-used }

स्टाफ़ सीट नहीं लेता, इसलिए प्लान भर जाने पर भी **Add** दिखता रहता है।

1. **Add** पर क्लिक करें। विंडो **Staff** पहले से चुनी हुई खुलती है।
2. **Role** के नीचे लिखा नोट पढ़ें: **No free seat, so only Staff can be added. Upgrade the plan or free a seat to add someone with an app login.**
3. **Name** और **WhatsApp Number** भरें, फिर **Add staff** पर क्लिक करें।

### टीम के साथी को WhatsApp नंबर दें { #give-a-teammate-a-whatsapp-number }

Ohanvi में साइन इन करने वाला साथी भी WhatsApp पर टास्क पा सकता है और हाज़िरी लगा सकता है। तब उसका लॉगिन फ़ोन नंबर ही उसका WhatsApp नंबर होता है।

1. **App User Management** लिस्ट में साथी की रो पर पेंसिल आइकन (**Edit**) पर क्लिक करें। **Edit teammate** विंडो खुलती है।
2. **Role** के नीचे **Staff** पर क्लिक करें। **Staff: gets tasks on WhatsApp on this number and shows in Tasks → People.** नोट दिखता है।
3. **WhatsApp Number** जाँच लें। यही एक नंबर उसका लॉगिन फ़ोन भी है और वह नंबर भी जिस पर टास्क जाते हैं।
4. **Save** पर क्लिक करें। **&lt;Name&gt; updated.** मैसेज दिखता है।

नया साथी जोड़ते समय भी आप **Add teammate** पर क्लिक करने से पहले इसी तरह **Staff** पर क्लिक कर सकते हैं।

अगर फ़ील्ड के नीचे **Tasks go to … now. Change this number to send them here.** लिखा हो, तो उसका WhatsApp नंबर उसके लॉगिन फ़ोन से अलग है। जब तक आप फ़ील्ड नहीं बदलते, टास्क पुराने नंबर पर ही जाते रहते हैं।

### स्टाफ़ का नंबर बदलें { #change-a-staff-members-number }

1. व्यक्ति की रो पर पेंसिल आइकन (**Edit**) पर क्लिक करें। **Edit staff** विंडो खुलती है।
2. **WhatsApp Number** बदलें।
3. **Save** पर क्लिक करें। **&lt;Name&gt; updated.** मैसेज दिखता है।

इसके बाद वह व्यक्ति नए नंबर से टास्क और हाज़िरी भेजता है। पुराने नंबर से आए मैसेज अब उससे नहीं जुड़ते।

### स्टाफ़ को बंद करें { #turn-staff-off }

स्टाफ़ डिलीट नहीं होता। उसकी जगह आप उसे बंद करते हैं, ताकि उसकी हाज़िरी का रिकॉर्ड बना रहे।

1. व्यक्ति की रो पर **Deactivate** आइकन पर क्लिक करें।
2. उसे वापस लाने के लिए **Activate** पर क्लिक करें। Ohanvi पहले उसका नंबर फिर से जाँचता है, कहीं वह अब किसी और के पास तो नहीं।

## एक WhatsApp नंबर, एक व्यक्ति { #one-whatsapp-number-one-person }

Ohanvi भेजने वाले के नंबर से पहचानता है कि WhatsApp मैसेज किसने भेजा। इसलिए आपके वर्कस्पेस में, आपके सभी ऑर्गनाइज़ेशन मिलाकर, एक नंबर सिर्फ़ एक एक्टिव व्यक्ति का हो सकता है।

अगर आप ऐसा नंबर लिखते हैं जो किसी के पास पहले से है, तो Ohanvi उसे नहीं लेता और उस व्यक्ति का नाम बताता है:

- **This number is already &lt;Name&gt;'s WhatsApp number, so they already get tasks on it. To give it to someone else, remove it from &lt;Name&gt; first.**
- **This number is &lt;Name&gt;'s login phone. Edit &lt;Name&gt; and turn on Staff instead.**

ऐसा अक्सर तब होता है जब वह व्यक्ति पहले से आपके वर्कस्पेस में है, जैसे टीम के साथी के रूप में या किसी दूसरे ऑर्गनाइज़ेशन में। उसे दोबारा जोड़ने की जगह उसकी मौजूदा रो एडिट करें। [VERIFY: there is no way to add the same person to a second organisation from App User; new staff join the adding admin's own organisation]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **This number is already &lt;Name&gt;'s WhatsApp number, so they already get tasks on it. …** | यह नंबर किसी दूसरे एक्टिव व्यक्ति के पास है। | उसकी जगह उस व्यक्ति को एडिट करें। नंबर किसी और को देना हो, तो पहले उससे हटाएँ। |
| **This number is &lt;Name&gt;'s login phone. …** | कोई साथी इसी फ़ोन नंबर से साइन इन करता है। | मैसेज के मुताबिक उस साथी को एडिट करें और **Staff** पर क्लिक करें। |
| **Enter WhatsApp number.** | **Staff** चुना है, पर नंबर खाली है या बहुत छोटा है। | पूरा नंबर लिखें और कंट्री कोड जाँचें। |
| **Enter a valid WhatsApp number with its country code.** | नंबर पढ़ा नहीं जा सका। | सही कंट्री कोड चुनें और सिर्फ़ अंक लिखें। |
| **Giving staff an app login comes in a later phase.** | आपने स्टाफ़ को एडिट करते समय किसी रोल पर क्लिक किया। | स्टाफ़ को ऐप लॉगिन नहीं मिल सकता। उसे स्टाफ़ ही रहने दें। |
| **This person can't be deleted. Staff are deactivated instead.** | स्टाफ़ डिलीट नहीं हो सकता। | उसकी रो पर **Deactivate** पर क्लिक करें। |

## संबंधित गाइड { #related }

- [WhatsApp पर हाज़िरी लगाएँ](whatsapp-attendance.md)
- [WhatsApp tasks सेट करें](../tasks/set-up-whatsapp-tasks.md)
- [टीम के मेंबर, रोल और अनुमतियाँ मैनेज करें](../settings/roles-and-permissions.md)
- [लिंक भेजकर टीम के मेंबर को जोड़ें](../settings/invite-teammates.md)
