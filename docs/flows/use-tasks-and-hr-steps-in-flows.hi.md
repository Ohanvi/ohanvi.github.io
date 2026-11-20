---
title: फ़्लो में Tasks और HR के स्टेप इस्तेमाल करें
description: ऑटोमेशन में Ohanvi के अपने Tasks और HR स्टेप जोड़ें, उनके आउटपुट पढ़ें, और स्टाफ़ के लिए अपनी WhatsApp कमांड बनाएँ।
---

# फ़्लो में Tasks और HR के स्टेप इस्तेमाल करें { #use-tasks-and-hr-steps-in-flows }

ऐसे स्टेप जोड़ें जो टास्क बनाते और बदलते हैं या हाज़िरी लगाते हैं, फिर उनका तैयार जवाब WhatsApp पर भेजें। आख़िर में आपके पास स्टाफ़ के लिए अपनी एक कमांड होगी, जैसे `my month`, जो HR से जवाब देती है।

## शुरू करने से पहले { #before-you-start }

- आपके रोल के पास फ़्लो बनाने और बदलने का एक्सेस हो। देखें [फ़्लो और फ़्लो की लिस्ट को समझें](flows-overview-and-list.md)।
- Tasks के स्टेप के लिए WhatsApp Tasks सेट हो और आपका स्टाफ़ उसकी स्टाफ़ लिस्ट में हो। देखें [WhatsApp टास्क सेट करें](../tasks/set-up-whatsapp-tasks.md)।
- HR के स्टेप के लिए हर स्टाफ़ मेंबर HR में अपने WhatsApp नंबर के साथ एक्टिव कर्मचारी हो। देखें [स्टाफ़ जोड़ें](../hr/add-staff.md)।
- फ़्लो एक ऑटोमेशन या स्टोर जर्नी हो। WhatsApp चैटबॉट में Tasks और HR के स्टेप नहीं मिलते।

## Ohanvi के अपने ऐप कैसे दिखते हैं { #how-ohanvis-own-apps-appear }

**Add a step after** पैनल में Ohanvi के अपने मॉड्यूल **Apps** के नीचे, कनेक्ट किए हुए ऐप के साथ दिखते हैं। हर मॉड्यूल की एक लाइन होती है, जैसे **Tasks**, **HR**, **WhatsApp** या **CRM**।

- हर लाइन बताती है कि उसमें क्या है, जैसे **Tasks** के लिए **13 actions · 7 searches** और **HR** के लिए **4 actions · 2 searches**।
- इन लाइनों पर **Connected** या **Connect** नहीं लिखा होता। ये आपके अपने वर्कस्पेस पर चलते हैं, इसलिए कोई अकाउंट कनेक्ट नहीं करना होता।
- लाइन पर क्लिक करके उसे खोलें। उसके स्टेप छोटे हेडिंग के नीचे दिखते हैं:

| ऐप | छोटे हेडिंग |
| --- | --- |
| **Tasks** | **Staff messages**, **Tasks**, **Lists & reports**, **Projects**, **Repeating**, **Documents** |
| **HR** | **Attendance**, **Staff** |

लिस्ट में छोटा नाम दिखता है, जैसे **Create task**। कैनवस पर स्टेप का पूरा नाम आता है, जैसे **Create a task**।

!!! note "Tasks और HR के स्टेप कभी मैसेज नहीं भेजते"
    ये भेजने के लिए तैयार जवाब `{{N.text}}` या `{{N.replyText}}` में देते हैं। उसे भेजने के लिए इनके बाद **Send message** स्टेप जोड़ें। `N` कैनवस पर स्टेप का नंबर है।

## स्टेप { #steps }

### Tasks या HR का स्टेप जोड़ें { #add-a-tasks-or-hr-step }

1. फ़्लो को बिल्डर में खोलें। देखें [ऑटोमेशन फ़्लो बनाएँ](build-automation-flow.md)।
2. ट्रिगर या किसी स्टेप के बाद **+** पर क्लिक करें। **Add a step after** पैनल खुलता है।
3. **Apps** तक स्क्रॉल करें और **Tasks** या **HR** पर क्लिक करें।
4. स्टेप पर क्लिक करें, जैसे **Attendance** के नीचे **Check in**। स्टेप कैनवस पर आ जाता है और उसका **Step** पैनल खुलता है।

    [SCREENSHOT: Add a step after पैनल, जिसमें Tasks खुला हो और Staff messages, Tasks और Lists & reports के हेडिंग दिख रहे हों]

5. फ़ील्ड भरें। ज़्यादातर फ़ोन फ़ील्ड में पहले से `{{trigger.from}}` होता है, यानी WhatsApp मैसेज भेजने वाला।
6. फ़ील्ड के नीचे का नोट पढ़ें। उसमें स्टेप के आउटपुट लिखे होते हैं।

आप **Search steps** में स्टेप का नाम भी टाइप कर सकते हैं, जैसे `check in`।

### स्टाफ़ के लिए अपनी कमांड बनाएँ { #build-your-own-staff-command }

इस उदाहरण में कोई स्टाफ़ मेंबर `my month` भेजता है और उसे इस महीने की अपनी हाज़िरी जवाब में मिलती है।

1. `My month` नाम का फ़्लो बनाएँ। देखें [ऑटोमेशन फ़्लो बनाएँ](build-automation-flow.md#create-the-flow-and-choose-a-trigger)।
2. कैनवस की शुरुआत में ट्रिगर पर क्लिक करें, फिर **When this runs** पैनल के सबसे ऊपर वाले बॉक्स पर क्लिक करें। **What starts this flow?** विंडो खुलती है।
3. **WhatsApp** खोलें और **A WhatsApp message arrives** पर क्लिक करें। देखें [WhatsApp मैसेज से फ़्लो शुरू करें](start-a-flow-from-a-whatsapp-message.md)।
4. **Which WhatsApp number** में वह नंबर चुनें जिस पर आपका स्टाफ़ मैसेज करता है।
5. **Only when the text matches** चालू करें। **Pattern** में `my month` टाइप करें। **Whole text** चालू करें।
6. **Who it answers** में **Staff only (people in HR)** चुनें।

    [SCREENSHOT: When this runs पैनल, जिसमें Only when the text matches चालू हो, पैटर्न my month हो, और Who it answers में Staff only (people in HR) चुना हो]

7. ट्रिगर के बाद **+** पर क्लिक करें। **Apps** में **HR** खोलें और **Attendance summary** पर क्लिक करें।
8. **Asked by (phone)** में `{{trigger.from}}` टाइप करें। **Period** में **This month** चुनें।
9. उस स्टेप के बाद **+** पर क्लिक करें। **Apps** में **WhatsApp** खोलें और **Send message** पर क्लिक करें।
10. **Send to** में `{{trigger.from}}` टाइप करें। **Message** में `{{1.text}}` टाइप करें।
11. **Send from** के बगल में **Change** पर क्लिक करें और **Same number the message arrived on** चुनें।

    [SCREENSHOT: Send message स्टेप, जिसमें Send to {{trigger.from}}, Message {{1.text}} और Send from में Same number the message arrived on चुना हो]

12. **Save** पर क्लिक करें, फिर **Publish** पर क्लिक करें।
13. किसी स्टाफ़ मेंबर के फ़ोन से उस नंबर पर `my month` भेजें। जवाब में इस महीने की उनकी हाज़िरी आती है।

यही ढाँचा दूसरे स्टेप के साथ भी काम करता है। स्टेप 1 की जगह इनमें से कोई लगाएँ:

| स्टाफ़ भेजता है | स्टेप | क्या सेट करें | मैसेज |
| --- | --- | --- | --- |
| `my tasks today` | **Tasks** → **List tasks** | **Or: their phone** `{{trigger.from}}`, **Which tasks** **Due today and overdue** | `{{1.text}}` |
| `my projects` | **Tasks** → **List projects** | **Or: their phone** `{{trigger.from}}` | `{{1.replyText}}` |
| `yesterday` | **HR** → **Attendance summary** | **Asked by (phone)** `{{trigger.from}}`, **Period** **Yesterday** | `{{1.text}}` |

**Attendance summary** हर व्यक्ति को सिर्फ़ उतना दिखाता है जितना वह देख सकता है। स्टाफ़ अपनी हाज़िरी देखता है। मैनेजर **About (name)** में अपनी टीम के किसी व्यक्ति का नाम दे सकते हैं, और HR एडमिन किसी का भी।

!!! tip "जो नंबर HR में नहीं हैं, उन्हें रोकें"
    अगर **Who it answers** में **Anyone** चुना है, तो स्टेप 1 के रूप में **HR** → **Find employee by phone** जोड़ें। फिर **Continue only if…** जोड़ें, जिसमें `{{1.found}}` **is** `true` हो। चाहें तो इसकी जगह `{{1.text}}` भेजें, उसमें पहले से लिखा होता है कि क्या गड़बड़ हुई।

किसी कमांड के अंदर से कोई वैल्यू निकालने के लिए, जैसे `job 42 status` में नंबर, देखें [कंडीशन में टेक्स्ट रूल इस्तेमाल करें](use-text-rules-in-conditions.md)।

### स्टाफ़ असिस्टेंट फ़्लो बदलें { #edit-the-staff-assistant-flow }

WhatsApp Tasks सेट करने पर Ohanvi उसके लिए फ़्लो बनाता है। **WhatsApp tasks: staff assistant** टास्क नंबर पर आने वाले हर स्टाफ़ मैसेज का जवाब देता है। यह एक आम फ़्लो है।

1. **Flows** खोलें और **WhatsApp tasks: staff assistant** पर क्लिक करें।
2. इसके स्टेप पढ़ें। **Read the staff message** समझता है कि मैसेज का मतलब क्या है। **What kind of message?** उसे जवाब पर, AI Task असिस्टेंट पर, या **Tell an unknown sender** पर भेजता है।
3. अगर हाज़िरी चालू है, तो फ़्लो **In, out, a break or anything else?** से शुरू होता है। हाज़िरी के शब्द उसी स्टेप में होते हैं। देखें [कमांड के अपने शब्द सेट करें](../tasks/set-your-own-command-words.md)।
4. कोई स्टेप बदलें, फिर **Save** और **Publish** पर क्लिक करें।

!!! warning "Tasks सेटअप दोबारा चलाने पर"
    जब तक यह फ़्लो ड्राफ़्ट है, सेटअप इसे दोबारा लिख देता है। अगर फ़्लो लाइव है, तो सेटअप आपके देखने के लिए एक नया ड्राफ़्ट वर्ज़न बनाता है। आपका लाइव वर्ज़न चलता रहता है। वह ड्राफ़्ट पब्लिश करने से पहले उसे अपने बदलावों से मिलाएँ। देखें [फ़्लो के वर्ज़न देखें](review-flow-versions.md)।

## Tasks के स्टेप { #tasks-steps }

| स्टेप | क्या करता है | मुख्य आउटपुट |
| --- | --- | --- |
| **Read staff message** | समझता है कि स्टाफ़ मैसेज का मतलब क्या है: `my tasks`, `2 done`, बटन टैप, या AI के लिए टेक्स्ट। | `{{N.route}}` (**HANDLED**, **AI**, **UNKNOWN** या **IGNORE**), `{{N.replyText}}`, `{{N.buttons}}`, `{{N.aiInput}}`, `{{N.memberId}}`, `{{N.memberName}}`, `{{N.isAdmin}}` |
| **Act on AI result** | AI एजेंट ने जो समझा, उससे टास्क बनाता, बदलता या लिस्ट करता है। कौन क्या कर सकता है, यह स्टाफ़ लिस्ट तय करती है। | `{{N.replyText}}`, `{{N.buttons}}`, `{{N.taskId}}`, `{{N.intent}}` |
| **Link message to task** | याद रखता है कि किस WhatsApp मैसेज में टास्क गया, ताकि उस पर टैप या जवाब से टास्क मिल जाए। इसे टेम्प्लेट भेजने के ठीक बाद रखें। | `{{N.updated}}` |
| **Attach proof to task** | स्टाफ़ मेंबर की भेजी फ़ोटो या फ़ाइल उसके टास्क में जोड़ता है। कैप्शन `done` होने पर टास्क पूरा भी हो जाता है। | `{{N.ok}}`, `{{N.taskId}}`, `{{N.text}}` |
| **Create task** | स्टाफ़ मेंबर के लिए टास्क या रिमाइंडर बनाता है, नाम, फ़ोन या स्टाफ़ id से। उन्हें WhatsApp पर बताया जाता है। | `{{N.taskId}}`, `{{N.created}}`, `{{N.text}}` |
| **Update task status** | टास्क को **Started**, **Done** या **Cancelled** करता है। कैंसल सिर्फ़ बनाने वाला या एडमिन कर सकता है। | `{{N.taskId}}`, `{{N.taskStatus}}`, `{{N.text}}` |
| **Edit a task** | टास्क किसके लिए है, ड्यू डेट, टाइटल या प्रायोरिटी बदलता है। | `{{N.replyText}}`, `{{N.taskId}}` |
| **Move to a board column** | टास्क को Tasks बोर्ड के किसी कॉलम में रखता है, जैसे `On hold`। | `{{N.replyText}}`, `{{N.taskId}}` |
| **Tag task to a project** | टास्क को किसी प्रोजेक्ट में डालता है। | `{{N.replyText}}`, `{{N.taskId}}` |
| **Delete task** | टास्क को लिस्ट और बोर्ड से हटाता है। किसी को बताया नहीं जाता। | `{{N.taskId}}`, `{{N.replyText}}` |
| **Find tasks** | स्टेटस, जिसे दिया गया, ड्यू डेट या टास्क कहाँ से आया, इसके हिसाब से टास्क ढूँढता है। | `{{N.tasks}}`, `{{N.totalCount}}`; एक टास्क id देने पर `{{N.title}}`, `{{N.taskStatus}}`, `{{N.assigneeName}}`, `{{N.dueAt}}` |
| **List tasks** | स्टाफ़ मेंबर के खुले टास्क की नंबर वाली लिस्ट, भेजने के लिए तैयार। | `{{N.text}}`, `{{N.total}}`, `{{N.done}}`, `{{N.percent}}`, `{{N.tasks}}` |
| **Team summary** | आज हर व्यक्ति के पूरे, खुले और ओवरड्यू टास्क। | `{{N.text}}` (कई लाइनें), `{{N.line}}` (एक लाइन, टेम्प्लेट के लिए), `{{N.perPerson}}` |
| **Staff list** | Tasks की स्टाफ़ लिस्ट के सभी लोग, या एक व्यक्ति। | `{{N.members}}`, `{{N.totalCount}}`; एक id देने पर `{{N.name}}`, `{{N.phone}}` |
| **List projects** | वे प्रोजेक्ट जिनमें स्टाफ़ मेंबर टास्क डाल सकता है। | `{{N.replyText}}` |
| **Create project** | नया प्रोजेक्ट जोड़ता है। स्टाफ़ मेंबर के चैट रूल तय करते हैं कि वह ऐसा कर सकता है या नहीं। | `{{N.replyText}}` |
| **Add repeating task** | हर दिन, हफ़्ते या महीने बनने वाला टास्क। सिर्फ़ एडमिन जोड़ सकता है। | `{{N.id}}`, `{{N.scheduleText}}`, `{{N.nextRunOn}}` |
| **Repeating tasks** | दोहराए जाने वाले टास्क के रूल, और हर रूल अगली बार कब चलेगा। | `{{N.rules}}`, `{{N.totalCount}}` |
| **Stop a repeating task** | दोहराए जाने वाले टास्क का रूल बंद करता है। | `{{N.replyText}}` |
| **Find a document** | स्टाफ़ मेंबर की माँगी फ़ाइल उन Knowledge Base सोर्स में ढूँढता है जो **Tasks** → **Settings** में चुने गए हैं। | `{{N.found}}`, `{{N.fileUrl}}`, `{{N.fileName}}`, `{{N.text}}` |

जो स्टेप किसी स्टाफ़ मेंबर की ओर से काम करते हैं, वे **Staff member** (**Read staff message** से `{{1.memberId}}`) या **Or: their phone** लेते हैं। उस व्यक्ति के अपने चैट रूल लागू होते हैं, ठीक वैसे ही जैसे वह ख़ुद कमांड टाइप करता।

## HR के स्टेप { #hr-steps }

HR का हर स्टेप कर्मचारी को फ़ोन नंबर से ढूँढता है, मैसेज के टेक्स्ट से कभी नहीं। कोई किसी और की हाज़िरी नहीं लगा सकता।

| स्टेप | क्या करता है | मुख्य आउटपुट |
| --- | --- | --- |
| **Check in** | कर्मचारी को आज के लिए चेक इन करता है। | `{{N.ok}}`, `{{N.text}}` (जैसे "Checked in at 9:48 AM."), `{{N.employeeName}}`, `{{N.timeText}}` |
| **Check out** | वे कब गए और कितने घंटे काम किया, यह दर्ज करता है। | `{{N.ok}}`, `{{N.text}}`, `{{N.timeText}}`, `{{N.workedText}}` |
| **Start a break** | **Lunch** या **Break** शुरू करता है। आज का चेक इन होना चाहिए और कोई ब्रेक खुला न हो। काम के घंटे और पेरोल नहीं बदलते। | `{{N.ok}}`, `{{N.text}}`, `{{N.breakType}}`, `{{N.timeText}}` |
| **End a break** | खुला लंच या ब्रेक ख़त्म करता है। | `{{N.ok}}`, `{{N.text}}`, `{{N.breakType}}`, `{{N.timeText}}` |
| **Attendance summary** | एक व्यक्ति या टीम के लिए कौन मौजूद, छुट्टी पर, लेट या ग़ैरहाज़िर है। **Period** में **Today**, **Yesterday**, **This month** या **Last month** होता है। | `{{N.text}}` (कई लाइनें), `{{N.line}}` (एक लाइन, टेम्प्लेट के लिए), `{{N.counts.present}}` और बाकी गिनती, `{{N.ok}}` |
| **Find employee by phone** | किसी नंबर का एक्टिव HR कर्मचारी ढूँढता है, उसके मुख्य और अतिरिक्त नंबरों से। | `{{N.found}}`, `{{N.employeeId}}`, `{{N.employeeName}}`, `{{N.reason}}` (**NOT_FOUND**, **AMBIGUOUS** या **INVALID_PHONE**), `{{N.text}}` |

मना होना, जैसे "already checked in", स्टेप का फ़ेल होना नहीं है। `{{N.ok}}` `false` होता है और `{{N.text}}` वजह बताता है, भेजने के लिए तैयार।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Apps** के नीचे **Tasks** और **HR** नहीं दिखते | फ़्लो WhatsApp चैटबॉट है। ये स्टेप ऑटोमेशन और स्टोर जर्नी में मिलते हैं। | कमांड को ऑटोमेशन के रूप में बनाएँ। देखें [ऑटोमेशन फ़्लो बनाएँ](build-automation-flow.md)। |
| स्टाफ़ मेंबर को आपके फ़्लो की जगह Tasks का जवाब मिलता है | **Who it answers** में Staff नहीं चुना है। Tasks की स्टाफ़ लिस्ट वाले लोगों के लिए सिर्फ़ Staff रूल ही WhatsApp Tasks से पहले आता है। | **Who it answers** में **Staff only (people in HR)** चुनें, फिर दोबारा पब्लिश करें। |
| अभी जोड़े गए स्टाफ़ मेंबर को जवाब नहीं मिलता | Ohanvi लगभग 5 मिनट तक याद रखता है कि कौन स्टाफ़ है। | 5 मिनट रुकें, फिर कमांड दोबारा भेजें। |
| जवाब में लिखा आता है कि नंबर नहीं मिला | फ़ोन नंबर किसी एक्टिव HR कर्मचारी पर नहीं है। | HR में कर्मचारी पर नंबर जोड़ें। देखें [स्टाफ़ जोड़ें](../hr/add-staff.md)। |
| **Read staff message** से `{{N.route}}` **UNKNOWN** आता है | भेजने वाला Tasks की स्टाफ़ लिस्ट में नहीं है। | उन्हें स्टाफ़ लिस्ट में जोड़ें। देखें [WhatsApp टास्क सेट करें](../tasks/set-up-whatsapp-tasks.md)। |
| स्टेप चला, पर WhatsApp पर कुछ नहीं पहुँचा | Tasks और HR के स्टेप कभी मैसेज नहीं भेजते। | `{{N.text}}` या `{{N.replyText}}` के साथ **Send message** स्टेप जोड़ें। |

## संबंधित गाइड { #related }

- [WhatsApp टास्क सेट करें](../tasks/set-up-whatsapp-tasks.md)
- [WhatsApp पर हाज़िरी लगाएँ](../hr/whatsapp-attendance.md)
- [WhatsApp मैसेज से फ़्लो शुरू करें](start-a-flow-from-a-whatsapp-message.md)
- [कंडीशन में टेक्स्ट रूल इस्तेमाल करें](use-text-rules-in-conditions.md)
- [फ़्लो में ऐप का स्टेप जोड़ें](add-an-app-step.md)
