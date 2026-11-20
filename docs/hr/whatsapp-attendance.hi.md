---
title: WhatsApp पर हाज़िरी लगाएँ
description: स्टाफ़ को WhatsApp पर एक शब्द भेजकर चेक-इन, चेक-आउट और ब्रेक करने दें। इसे चालू करें, शब्द तय करें और जानें कि HR क्या रिकॉर्ड करता है।
---

# WhatsApp पर हाज़िरी लगाएँ { #mark-attendance-on-whatsapp }

स्टाफ़ आपके WhatsApp नंबर पर `in` या `out` जैसा एक शब्द भेजकर हाज़िरी लगाता है। HR उस नंबर वाले व्यक्ति के नाम पर समय रिकॉर्ड करता है और उसे समय के साथ जवाब भेजता है।

## शुरू करने से पहले { #before-you-start }

- WhatsApp tasks सेट हो, ताकि स्टाफ़ के पास मैसेज भेजने के लिए एक नंबर हो। देखें [WhatsApp tasks सेट करें](../tasks/set-up-whatsapp-tasks.md)।
- आपके रोल के पास Task Manager का एक्सेस हो। ये सेटिंग WhatsApp tasks के साथ सेव होती हैं। एक्सेस न हो, तो पेज पर **No access to WhatsApp attendance** लिखा आता है।
- स्टाफ़ के हर व्यक्ति का **App User** में अपना WhatsApp नंबर हो। देखें [स्टाफ़ जोड़ें](add-staff.md)।

## स्टेप { #steps }

### WhatsApp पर हाज़िरी चालू करें { #turn-on-whatsapp-attendance }

1. साइडबार में **HR** खोलें, फिर **WhatsApp attendance** पर क्लिक करें। **Attendance Settings** पेज खुलता है। [VERIFY: HR entry name in the left rail]
2. **WhatsApp attendance** कार्ड देखें। उसके बैज पर **On**, **Off** या **Not set up** लिखा होता है।
3. अगर कार्ड पर **Set up WhatsApp tasks first: attendance uses the same staff number.** लिखा हो, तो **Open WhatsApp tasks settings** पर क्लिक करें और पहले वह सेटअप पूरा करें।
4. कार्ड के ऊपर दाईं तरफ़ का स्विच चालू करें। **WhatsApp attendance is on.** मैसेज दिखता है।
5. **Run setup** पर क्लिक करें। काम चलने तक बटन पर **Setting up…** लिखा रहता है।
6. **Attendance set up** के नीचे नतीजा पढ़ें। उसमें हाज़िरी की पॉलिसी, कितने स्टाफ़ जुड़े, और कौन-से फ़्लो बने, यह लिखा होता है।

    [SCREENSHOT: WhatsApp attendance कार्ड, जिसमें स्विच चालू हो, Attendance set up का नतीजा और Run setup again बटन दिख रहा हो]

7. अगर मैसेज में **Review and publish the new draft** लिखा हो, तो हर फ़्लो के बगल में **Review and publish** पर क्लिक करें। फ़्लो जाँचें, फिर उसे पब्लिश करें।

अगर आपके ऑर्गनाइज़ेशन की कोई पॉलिसी नहीं है, तो सेटअप **Default attendance policy** बनाता है। आपकी पहले से बनी पॉलिसी को यह कभी नहीं बदलता। आप कभी भी **Run setup again** पर क्लिक कर सकते हैं। यह सिर्फ़ वही जोड़ता है जो कम है।

### जो स्टाफ़ अभी इसे इस्तेमाल नहीं कर सकता, उसे ठीक करें { #fix-staff-who-cant-use-it-yet }

अगर कुछ स्टाफ़ पहचाना नहीं जा सकता, तो पेज पर **Staff who can't use it yet** कार्ड दिखता है।

1. हर नाम के नीचे कारण पढ़ें। जैसे, उस व्यक्ति का कोई WhatsApp नंबर नहीं है, या उसका नंबर किसी और के साथ एक ही है।
2. नाम के बगल में **Add number** या **Fix number** पर क्लिक करें। उस व्यक्ति की **Edit** विंडो खुलती है।
3. उसका अपना नंबर डालें, फिर **Save** पर क्लिक करें।

## स्टाफ़ कौन-से शब्द भेजता है { #words-staff-send }

मैसेज तभी गिना जाता है जब वह पूरा का पूरा इनमें से एक शब्द हो। `in` चलेगा, पर `in at the shop` नहीं। छोटे-बड़े अक्षर, फ़ालतू स्पेस, और आख़िर में फ़ुल स्टॉप, `!` या `?` का फ़र्क नहीं पड़ता।

| पेज पर फ़ील्ड | क्या रिकॉर्ड होता है | डिफ़ॉल्ट शब्द |
| --- | --- | --- |
| **In** | चेक-इन | `in`, `check in`, `checkin`, `login`, `present`, `aa gaya`, `aa gayi`, `pahunch gaya`, `pahunch gayi` |
| **Out** | चेक-आउट | `out`, `check out`, `checkout`, `logout`, `bye`, `ja raha`, `ja rahi`, `nikal raha`, `nikal rahi` |
| **Lunch-break begins** | लंच या ब्रेक शुरू | `lunch`, `break` |
| **Lunch-break ends** | चल रहा ब्रेक ख़त्म | `lunch end`, `break end`, `back` |

जिस शुरुआती शब्द में "lunch" हो, वह **Lunch** रिकॉर्ड करता है। बाकी हर शुरुआती शब्द **Break** रिकॉर्ड करता है।

### अपने शब्द इस्तेमाल करें { #use-your-own-words }

1. **Attendance Settings** पेज पर **Punch words** कार्ड देखें।
2. **In**, **Out**, **Lunch-break begins** या **Lunch-break ends** के नीचे **Add a word** में शब्द लिखें।
3. Enter दबाएँ। शब्द एक चिप के रूप में दिखता है और तुरंत सेव हो जाता है।
4. कोई शब्द हटाने के लिए उसकी चिप पर **×** पर क्लिक करें।
5. डिफ़ॉल्ट शब्दों पर लौटने के लिए **Use the default words** पर क्लिक करें। **Back to the default words.** मैसेज दिखता है।

हर लिस्ट में ज़्यादा से ज़्यादा 30 शब्द हो सकते हैं, और हर शब्द में ज़्यादा से ज़्यादा 40 अक्षर। Ohanvi ऐसा शब्द नहीं लेता जो:

- पहले से किसी दूसरी लिस्ट में हो, जैसे **In** और **Out** दोनों के लिए एक ही शब्द
- पहले से कोई टास्क कमांड हो, जैसे `2 done`
- उसमें ऐसा शब्द हो जिसे WhatsApp मैसेज पाने या बंद करने के लिए रखता है

!!! note "अपने शब्दों के लिए सीधे जवाब ज़रूरी हैं"
    आपके अपने शब्द तब काम करते हैं जब WhatsApp tasks आपके बिज़नेस नंबर पर स्टाफ़ को सीधे जवाब देता है। अगर स्टाफ़ किसी अलग स्टाफ़ नंबर पर मैसेज करता है, तो वहाँ डिफ़ॉल्ट शब्द ही चलते हैं। ऐसा होने पर कार्ड पर चेतावनी दिखती है। देखें [WhatsApp tasks सेट करें](../tasks/set-up-whatsapp-tasks.md)। [VERIFY: name of the reply mode setting in WhatsApp tasks settings]

स्टाफ़ चैट पर अपनी हाज़िरी भी पूछ सकता है। **What staff can type** कार्ड में वे कमांड लिखे हैं। देखें [हाज़िरी की रिपोर्ट और डैशबोर्ड देखें](attendance-reports-and-dashboard.md)।

## स्टाफ़ को जवाब में क्या मिलता है { #what-staff-get-back }

हर शब्द पर HR रिकॉर्ड किए गए समय के साथ जवाब देता है।

| स्टाफ़ भेजता है | जवाब |
| --- | --- |
| **In** का कोई शब्द | **Checked in at 9:32 AM.** |
| **Out** का कोई शब्द | **Checked out at 6:05 PM.** |
| `lunch` | **Lunch break started at 1:10 PM.** |
| `break` | **Break started at 4:00 PM.** |
| **Lunch-break ends** का कोई शब्द | **Lunch break ended at 1:40 PM.** या **Break ended at 4:15 PM.** |

जब HR शब्द रिकॉर्ड नहीं कर पाता, तो वह कारण बताता है:

| जवाब | क्यों |
| --- | --- |
| **You already checked in at 9:32 AM today.** | **In** का शब्द दो बार भेजा गया। पहला समय ही रहता है। |
| **You haven't checked in today, so there's nothing to check out from. Please check in first.** | आज चेक-इन के बिना **Out** का शब्द भेजा गया। |
| **You haven't checked in today. Please check in first.** | चेक-इन से पहले ब्रेक शुरू किया गया। |
| **You've already checked out today.** | चेक-आउट के बाद ब्रेक शुरू किया गया। |
| **You're already on lunch since 1:10 PM.** | लंच या ब्रेक अभी चल रहा है। |
| **You're not on a break right now.** | कोई ब्रेक चल नहीं रहा, फिर भी **Lunch-break ends** का शब्द भेजा गया। |
| **You can't check in today: you're on approved leave.** | उस दिन की छुट्टी मंज़ूर है। छुट्टी के दिन या वीक-ऑफ़ पर भी ऐसा ही जवाब आता है। |
| **Your number isn't linked to a staff profile yet. Please ask your admin to add it.** | इस WhatsApp नंबर वाला कोई एक्टिव व्यक्ति नहीं है। |
| **Attendance isn't set up for you yet. Ask your admin to set it up in HR.** | सेटअप नहीं चला, ऑर्गनाइज़ेशन की कोई एक्टिव हाज़िरी पॉलिसी नहीं है, या उस व्यक्ति का HR रिकॉर्ड नहीं है। |

## HR क्या रिकॉर्ड करता है { #what-hr-records }

- **चेक-इन और चेक-आउट:** दोनों का समय, उस दिन के हाज़िरी रिकॉर्ड पर सोर्स **WhatsApp** के साथ सेव होता है। डैशबोर्ड का **Source** कॉलम यही दिखाता है।
- **देर से आना:** शिफ़्ट शुरू होने के समय और पॉलिसी के ग्रेस टाइम के बाद का चेक-इन देर माना जाता है। शिफ़्ट का शुरुआती समय न हो, तो देर तय नहीं होती।
- **स्टेटस:** चेक-आउट पर HR चेक-इन से चेक-आउट तक के समय को शिफ़्ट के तय घंटों से मिलाकर दिन का स्टेटस तय करता है।
- **ब्रेक:** हर लंच या ब्रेक अपने शुरू और ख़त्म होने के समय के साथ सेव होता है, ताकि डैशबोर्ड **On break** दिखा सके। ब्रेक सिर्फ़ रिकॉर्ड होते हैं। इनसे काम के घंटे, दिन का स्टेटस या पेरोल नहीं बदलता।
- **दूसरा चेक-आउट:** अगर स्टाफ़ उसी दिन **Out** का शब्द फिर भेजता है, तो चेक-आउट का समय बाद वाले समय पर चला जाता है।
- **चेक-आउट पर खुले ब्रेक:** चेक-आउट करने पर जो ब्रेक अभी चल रहा है, वह चेक-आउट के समय पर ख़त्म हो जाता है।

WhatsApp के जवाब कभी काम के घंटे नहीं बताते, क्योंकि उनमें से ब्रेक घटाए नहीं जाते।

### रात की शिफ़्ट { #night-shifts }

ब्रेक आधी रात के बाद भी ख़त्म हो सकता है। Ohanvi पिछले 20 घंटे के चेक-इन को अभी भी खुला मानता है, इसलिए आधी रात के बाद `back` भेजने पर उससे पहले शुरू हुआ ब्रेक ख़त्म हो जाता है।

[VERIFY: night-shift check-out after midnight. The check-out looks only for a record on the new date, so an **Out** word after midnight may get **You haven't checked in today…**]

## WhatsApp पर हाज़िरी बंद करें { #turn-whatsapp-attendance-off }

1. **Attendance Settings** पेज पर **WhatsApp attendance** कार्ड का स्विच बंद करें। **WhatsApp attendance is off.** मैसेज दिखता है।
2. नोट पढ़ें: **While this is off, staff messages are not recorded as attendance.**

आपकी हाज़िरी पॉलिसी वैसी ही रहती है। `in` जैसे शब्द आम मैसेज बन जाते हैं, और शाम के सारांश में हाज़िरी नहीं आती।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| स्विच चालू है, फिर भी कार्ड के बैज पर **Not set up** है | सेटअप नहीं चला, या कोई एक्टिव हाज़िरी पॉलिसी नहीं है। | **Run setup** पर क्लिक करें। |
| स्टाफ़ को **Attendance isn't set up for you yet. Ask your admin to set it up in HR.** मिलता है | सेटअप नहीं चला, या उस व्यक्ति का HR रिकॉर्ड नहीं है। | **Run setup again** पर क्लिक करें। **Staff who can't use it yet** कार्ड देखें। |
| स्टाफ़ को **Your number is on more than one staff profile (…)** मिलता है | भेजने वाले का नंबर दो लोगों के पास है। | हर व्यक्ति को उसका अपना नंबर दें। देखें [स्टाफ़ जोड़ें](add-staff.md#one-whatsapp-number-one-person)। |
| स्टाफ़ को **Attendance on WhatsApp needs the HR licence. Please contact your admin.** मिलता है | आपके वर्कस्पेस के पास HR का लाइसेंस नहीं है। | वर्कस्पेस के मालिक से HR जुड़वाएँ। |
| आपका जोड़ा हुआ शब्द कुछ नहीं करता | मैसेज में दूसरे शब्द भी थे, या स्टाफ़ अलग स्टाफ़ नंबर पर मैसेज करता है। | स्टाफ़ से कहें कि सिर्फ़ वही शब्द भेजें। अलग स्टाफ़ नंबर हो, तो डिफ़ॉल्ट शब्द इस्तेमाल करें। |
| नया फ़्लो **Draft** में ही रहता है | सेटअप ने आपका लाइव वर्शन बचाया और नया ड्राफ़्ट बनाया। | **Review and publish** पर क्लिक करें, फ़्लो जाँचें, फिर पब्लिश करें। |

## संबंधित गाइड { #related }

- [स्टाफ़ जोड़ें](add-staff.md)
- [हाज़िरी की रिपोर्ट और डैशबोर्ड देखें](attendance-reports-and-dashboard.md)
- [WhatsApp tasks सेट करें](../tasks/set-up-whatsapp-tasks.md)
- [कमांड के लिए अपने शब्द रखें](../tasks/set-your-own-command-words.md)
- [रिमाइंडर और रोज़ का सारांश](../tasks/whatsapp-task-reminders-and-summary.md)
