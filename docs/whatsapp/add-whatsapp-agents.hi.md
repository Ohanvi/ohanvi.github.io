---
title: WhatsApp एजेंट जोड़ें
description: अपनी टीम को एजेंट या मैनेजर बनाकर अलग-अलग WhatsApp लॉगिन दें। उन्हें एक साथ इम्पोर्ट करें और चैट के नियम तय करें कि कौन सा एजेंट कौन सी चैट संभालेगा।
---

# WhatsApp एजेंट जोड़ें { #add-whatsapp-agents }

जो लोग WhatsApp चैट का जवाब देते हैं, उन्हें जोड़ें। हर किसी का अपना लॉगिन होगा। आख़िर में आपके एजेंट और मैनेजर साइन इन करके इनबॉक्स से जवाब दे पाएँगे। चैट के नियम तय करेंगे कि हर एजेंट कौन सी बातचीत ले सकता है।

## शुरू करने से पहले { #before-you-start }

- आप संगठन के एडमिन हों। एजेंट सिर्फ़ एडमिन बना सकता है।
- **WhatsApp** पैनल में आपको **Manage** दिखना चाहिए। न दिखे, तो अपने एडमिन से कहें। देखें [टीम के मेंबर, रोल और अनुमतियाँ मैनेज करें](../settings/roles-and-permissions.md)।
- आपके पास एक खाली सीट हो। **Quota** चिप में इस्तेमाल हुई सीटें दिखती हैं, जैसे **Quota: 3 / 10 agents**।

## स्टेप { #steps }

### अपनी टीम खोलें { #open-your-team }

1. लेफ़्ट रेल में **WhatsApp** खोलें, फिर **Manage** चुनें।
2. **Agents** चुनें। आपकी टीम की लिस्ट खुल जाएगी, जिसमें हर किसी का रोल दिखेगा। ऊपर के चिप में दिखता है कि आपके प्लान में कितने एजेंट बन सकते हैं और कितने बन चुके हैं, जैसे **Quota: 2 / 10 agents**। किसी की पूरी जानकारी दाईं तरफ़ देखने के लिए उस पर क्लिक करें।

    ![Quota चिप और हर किसी के रोल के साथ Agents की लिस्ट](../assets/screenshots/whatsapp-agents-1-team.png)

रोल 2 तरह के होते हैं:

| रोल | वे क्या देखते हैं |
| --- | --- |
| **Manager** | अपने एग्ज़ीक्यूटिव की चैट और डेटा। |
| **Agent** (स्क्रीन पर **Executive** लिखा आता है) | सिर्फ़ अपनी चैट। उनके **WhatsApp** पैनल में सिर्फ़ **Inbox** दिखता है। |

### एजेंट जोड़ें { #add-an-agent }

1. **Add Agent** पर क्लिक करें। **Create Agent** खुल जाएगा।
2. **Agent's Name**, **Agent's Email**, देश का **Code** और **Agent's WhatsApp Number** भरें।
3. **Role** में **Agent** या **Manager** चुनें।
4. एजेंट के लिए **Manager (optional)** चुनें। यह फ़ील्ड तभी दिखता है, जब आपकी टीम में कोई मैनेजर हो।
5. **Login details** में **User Name** और **Password** लिखें।

    ![Agent's Name, Email, Code, WhatsApp Number, Role और Login details वाला Create Agent फ़ॉर्म](../assets/screenshots/whatsapp-agents-2-create-agent.png)

6. **Create Agent** पर क्लिक करें। मैसेज **Agent created — they can sign in now.** दिखेगा।
7. यूज़र नेम और पासवर्ड एजेंट को बता दें।

पासवर्ड 8 से 64 अक्षरों का होना चाहिए। उसमें एक अपरकेस अक्षर, एक लोअरकेस अक्षर, 2 अंक और एक स्पेशल कैरेक्टर हो। पासवर्ड में यूज़र नेम, नाम या ईमेल नहीं होना चाहिए।

अगर आप चाहते हैं कि सामने वाला अपना पासवर्ड खुद बनाए, तो **Invite via Link** पर क्लिक करें। देखें [लिंक से टीम के मेंबर्स को बुलाएँ](../settings/invite-teammates.md)।

### अपनी टीम इम्पोर्ट करें { #import-your-team }

1. **Import Team** पर क्लिक करें। **WhatsApp Team** अपलोड खुल जाएगा।
2. सैंपल फ़ाइल डाउनलोड करें। उसमें ये कॉलम हैं: **Name**, **Username**, **Email**, **Password**, **Country Code**, **Phone Number**, **Role**, **Manager Username** और **Organisation**।
3. हर व्यक्ति के लिए एक लाइन भरें। **Role** में **MANAGER** या **EXECUTIVE** लिखें।
4. फ़ाइल अपलोड करें।

### चैट के नियम तय करें { #set-chat-rules }

चैट के नियम एजेंट को सिर्फ़ उन चैट तक सीमित रखते हैं, जो हर नियम पर खरी उतरती हैं। कोई नियम न हो, तो एजेंट कोई भी चैट ले सकता है।

1. एजेंट पर क्लिक करें। फिर ऊपर **Set chat rules** पर क्लिक करें। **Rules for** और उसके आगे एजेंट का नाम लिखी विंडो खुलेगी।

    ![Add rule, Rules on स्विच, Cancel और Save वाली Rules for विंडो](../assets/screenshots/whatsapp-agents-3-rules.png)

2. **Add rule** पर क्लिक करें। नियम की एक नई लाइन आएगी, जिसमें पहले **Attribute** चुना होता है। ड्रॉप-डाउन खोलकर **Tag** चुनें और टैग लिखें। या **Attribute** ही रखें और एट्रिब्यूट के साथ उसकी **Value** लिखें। कोई नियम हटाना हो, तो डस्टबिन आइकन पर क्लिक करें।

    ![Attribute ड्रॉप-डाउन, Attribute और Value बॉक्स और Rules on स्विच वाली नए नियम की लाइन](../assets/screenshots/whatsapp-agents-4-rule-row.png)

3. देख लें कि स्विच पर **Rules on** दिख रहा है।
4. **Save** पर क्लिक करें। मैसेज **Rules saved for** और उसके आगे एजेंट का नाम दिखेगा।

जो चैट नियमों से मेल नहीं खाती, उसके लिए ऑटो-रूटिंग इस एजेंट को छोड़ देती है। ऐसी चैट आप खुद इस एजेंट को असाइन करना चाहें, तो वह भी नहीं होगी।

### एजेंट को बदलें या हटाएँ { #change-or-remove-an-agent }

1. एजेंट पर क्लिक करें।
2. रोल या मैनेजर बदलना हो, तो **Change role / manager** पर क्लिक करें। बदलाव करें, फिर **Save** पर क्लिक करें।
3. एजेंट को हटाना हो, तो **Remove agent** पर क्लिक करें। फिर दोबारा **Remove agent** पर क्लिक करके हाँ कह दें।

!!! warning "एजेंट को हटाना"
    उसका लॉगिन बंद हो जाता है और उसके रोल वापस ले लिए जाते हैं। उसे असाइन की गई चैट वापस बिना असाइन वाली कतार में चली जाती हैं।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Agent quota reached (10/10). Remove an agent or request a higher quota to add more.** | सारी सीटें भर चुकी हैं। | जिस एजेंट की ज़रूरत नहीं, उसे हटाएँ। या ज़्यादा कोटा माँगें। |
| **This username is already taken. Please choose another.** | यह यूज़र नेम किसी और के लॉगिन में पहले से है। | कोई दूसरा **User Name** चुनें। |
| **Name, username and password are required.** | कोई ज़रूरी फ़ील्ड खाली है। | नाम, **User Name** और **Password** भरें। |
| **Password must contain an uppercase letter, at least 2 digits, a special character.** | पासवर्ड कमज़ोर है। मैसेज में लिखा आता है कि क्या कम है। | मैसेज में जो-जो माँगा गया है, वह पासवर्ड में जोड़ें। |
| **This password is too common and easy to guess (like Password@123).** | यह पासवर्ड बहुत आम पासवर्ड की लिस्ट में है। | आपस में बेमेल कुछ शब्द जोड़कर बनाएँ, जैसे **Mango#River42Lamp**। |
| **Only the organisation admin can create agents.** | आप एडमिन नहीं हैं। | अपने संगठन के एडमिन से एजेंट जोड़ने को कहें। |

## संबंधित गाइड { #related }

- [WhatsApp इनबॉक्स का इस्तेमाल करें](use-whatsapp-inbox.md)
- [WhatsApp कॉन्टैक्ट मैनेज करें](manage-whatsapp-contacts.md)
- [लिंक से टीम के मेंबर्स को बुलाएँ](../settings/invite-teammates.md)
- [टीम के मेंबर, रोल और अनुमतियाँ मैनेज करें](../settings/roles-and-permissions.md)
