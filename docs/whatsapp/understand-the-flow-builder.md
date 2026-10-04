---
title: Understand the flow builder
description: Tour the flow builder: create a flow, add steps from the Step panel, switch views, test, save, publish and turn a flow on.
---

# Understand the flow builder

The flow builder is where you design a chatbot. You place steps on a canvas, fill in each step, test the flow, and publish it. This page shows every part of the screen and every group of steps, so you know where to find each block.

## Before you start

- Your WhatsApp number is connected to Ohanvi. See [Connect your WhatsApp number](connect-whatsapp-number.md).
- You can see **Flows** in the **WhatsApp** panel. If not, ask your admin.
- You know what the bot should do. For a first flow, follow [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md).

## The parts of the builder

| Part | Where it is | What it does |
| --- | --- | --- |
| **Back to flows** arrow | Top left | Returns to the flow list. |
| Flow name | Top left, next to the arrow | Click it to rename the flow. |
| Version chip | Next to the name | Shows **DRAFT**, **LIVE**, **PAUSED** or **VIEWING**, with the version number, for example **v1 · LIVE**. |
| **Undo** and **Redo** | Top toolbar | Step back or forward through your edits. |
| **Test** | Top toolbar | Opens the **Test** tab so you can try the flow. |
| **Save** | Top toolbar | Saves your edits as a draft. Shows **Unsaved changes** until you save. |
| **Publish** | Top right of the page | Makes the saved flow live. |
| **Active** switch | Top toolbar | Turns the published flow on or off. It reads **Active** or **Inactive**. |
| **Compact** and **Preview** | Top of the canvas | Two ways to see the same flow. |
| Canvas | Centre | The dotted area where cards and wires sit. |
| **Step** panel | Right side | Shows the settings of the selected step, or the list of steps to add. |
| **Logs** and **Run test** | Bottom bar | Shows what happened in a test run. |
| Zoom buttons and minimap | Canvas corners | Zoom in, zoom out, fit the flow on screen, and jump around a large flow. |

## Create a new flow

1. Open **WhatsApp** in the left rail, then select **Flows**.
2. Click **New flow**. The builder opens on a blank canvas. Nothing is saved until you click **Save**.
3. Or click the arrow beside **New flow** and choose **Start from library** to begin from a ready-made flow.
4. On the canvas, read **How does this flow start?** and pick a start. See [Choose how a flow starts](chatbot-flow-start-and-triggers.md).

## Steps

### Add a step

1. Click the **+** at the end of the last step. The **Add a step after** menu opens.
2. Type in **Search** to find a step by its name or by what it does.
3. Pick a step from **COMMON**, or click **All steps** to see every group.
4. Or use the **Step** panel on the right. Click a tile to add it, or drag the tile onto the canvas.
5. Or type what you want in **Describe the flow you want…** and click **Generate with AI**. The AI writes a new flow from your words.

!!! warning "Generate with AI replaces the canvas"
    If the canvas already has steps, the builder asks **Replace the steps on the canvas?** Click **Keep what I have** to cancel.

You can also use the right-click menu on the canvas: **Add a step here**, **Select all steps**, **Fit to screen** and **See the whole flow**.

### Work with one step

1. Click a step on the canvas. Its settings open in the **Step** panel, in the **Setup** tab.
2. Right-click the step to see more: **Edit in panel**, **Rename**, **Add a step after**, **Add content block**, **Duplicate**, **Disconnect from path** and **Delete**.
3. Click the **+ Add Content** button at the bottom of a card to add another block to the same card.
4. Select several steps to **Duplicate** or **Delete** them together.
5. On a card, click **Collapse card** to fold it into a small box, and **Expand card** to open it again.
6. On the right edge of a block, click **Add a block** (the plus) to add another block to the card. Click **Delete this block** (the bin) to remove only that block.
7. On a branch, click **Add a step on this branch** to add a step to that path only.

### Join steps with wires

1. Drag from the dot at the right edge of a step to the next step.
2. Right-click a wire to **Insert a step in between**, **Disconnect this step** or **Delete this connection**.
3. Blocks with choices, such as buttons, have one dot for each choice. Wire each choice to the step that should run next.

### Change the view

1. Click **Compact** to see each card as a small box. Use it for large flows.
2. Click **Preview** to see every card open, as the customer will read it.
3. Click **Hide step panel** (tooltip **Hide the panel**) to give the canvas more room. Click **Show step panel** to bring it back.
4. Click the back arrow at the top left (tooltip **Back to flows**) to return to your list of flows.
5. Select several steps and click **Clear selection** in the right-click menu to let go of them. In the **Step** panel, click **Clear selected step** to deselect one.

### Test, save and publish

1. Click **Test** and follow [Test a chatbot flow with the chat simulator](test-a-flow-with-the-chat-simulator.md).
2. Click **Save**. The chip reads **DRAFT**.
3. Click **Publish**. The message **Published and live — new runs use this version.** appears.
4. If the flow is switched off, the message reads **Published. This flow is turned off, so it will not run yet.** Switch **Active** on.
5. To pause the flow later, switch **Active** off.

!!! note "Published versions never change"
    To change a live flow, edit and publish again. Open the **Versions** button to go back to an earlier version. See [Test a chatbot flow with the chat simulator](test-a-flow-with-the-chat-simulator.md).

### Build and change a flow with the AI panel

1. Click **Build with AI**. The panel opens on the left, with the title **Build with AI**. It greets you with **Describe the flow you want and I will build it out.** If the flow has a name, it reads **You are working on "name". Describe the flow you want and I will build it out.**
2. In **Ask anything…**, type what you want. Or click the microphone (tooltip **Describe the flow out loud**) and speak. Spoken words are added to what you already typed.
3. Press **Enter**, or click send (tooltip **Send · Enter**).
4. Wait. The panel reads **Thinking…** and then **Writing the flow…**.
5. If the canvas already has steps, a window asks **Replace the steps on the canvas?**. It says the new flow replaces the old steps and nothing is saved until you save, so your last saved version is untouched. Click **Replace and build** to go on. Click **Keep what I have** to cancel. The panel then says **Kept what you have. Say the word when you want it replaced.**
6. When it finishes, the panel says **Named it "…"** and **It is on the canvas. Look it over and save it when it reads right — or tell me what to change.**
7. To change the result, type what to change and send. The panel says **Changed. Look it over and save when it reads right — or tell me what else to adjust.**
8. If the AI cannot do it, the panel reads **I could not draft that** or **I could not change that**, with the reason. Rewrite your request and send it again.
9. Read the reminder **Look the flow over before you save it.** Then click **Save**.
10. Click **Close the AI builder** (the x at the top of the panel) when you are done.

### Read the tabs of the Step panel

The **Step** panel has three tabs: **Setup**, **Test** and **Output**.

1. Click a step, then click **Setup**. It shows a short summary: **Step name**, and for the start step **Starts on**, **Match** and **Test number**. For a card it also shows **Selected block**. For a step that is not a card it shows **Does** and **Lane**.
2. Click **Test** to try the flow. See [Test a chatbot flow with the chat simulator](test-a-flow-with-the-chat-simulator.md). Under **Would this run?** you can check a keyword without sending anything.
3. Click **Output** to see what a step returned in the last test run. If no step is selected, the panel reads **Select a step on the canvas to inspect it. Edit message content directly inside its card.**
4. With nothing selected, click **+ Add a step** to open the list of blocks.
5. In the **Test** tab, click **Run published** to run the live version once. It uses real data and real side effects, never the draft on the screen.

### Publish when some steps are not finished

1. Click **Publish**.
2. If some steps are incomplete, a window opens. Its title reads **One step will not be published** or **N steps will not be published**. It lists up to 6 problems and says how many more there are.
3. Read the line **The rest of the flow publishes as it is. Fix these to include them:**.
4. Click **Fix the steps** to go back and finish them. This is the better choice.
5. Or click **Publish without them** to publish only the finished steps.

### Open an older version without losing your work

1. Click **Versions** at the top of the builder. The list shows each version, and which one is live.
2. Click a version to look at it. If you have unsaved changes, a window asks **Save before switching?**. It says **This flow has changes you have not saved. Opening another version leaves them behind.** Click **Keep editing** to stay, or **Discard and switch** to leave your changes.
3. A published version cannot be changed. The banner reads **Showing vN. It is published, so it cannot be changed — use "Edit as new version" to carry on from it.**
4. On a version, click **More** (the three dots) and choose **Edit as new version**. If you already have an unpublished draft, a window asks **Replace the draft you have open?**. It says your draft will be deleted and a copy of that version takes its place, and nothing that is already live changes. Click **Replace it** or **Keep my draft**.
5. To make an older version the live one, click **More** on it and choose **Make this live**. This option is not shown on the version that is already live.

### Read the Logs panel

1. Click **Logs** at the bottom of the builder to open the panel.
2. Click **Run test**. If the flow has no steps, a message reads **Add a step before testing.**
3. In a chatbot flow, the window **Test on your phone** opens. It says **Message this flow from your own WhatsApp and watch the canvas follow you. Nothing is published — the flow answers this number and nobody else.** Type your number in **Your WhatsApp number**. The box shows `91XXXXXXXXXX`. Click **Start**, or **Cancel** to close it.
4. While the test runs, the button reads **Testing…**. Click **Stop** to end the test.
5. Read the chip. It reads **Running…**, **Success**, **Failed**, **Stopped** or **Finished**, with the time it took, for example **Success in 1.2s**.
6. Click a step in the list to see what it returned. The area reads **Pick a step to see what it returned.** The result is under **STEP RESULT**.
7. Click **Refresh** to reload the run. Click **Clear this run** to empty the panel.
8. Before the first run, the panel reads **Nothing to display yet. Run a test to see what each step does.** While waiting, it reads **Waiting for the first step…**. If a run recorded nothing, it reads **No steps were recorded for this run.**

## Every group in the Step panel

The **Step** panel groups blocks by what they do for the customer.

| Group | Blocks | What the group is for |
| --- | --- | --- |
| **Triggers** | **Flow Start** | How the conversation begins. See [Choose how a flow starts](chatbot-flow-start-and-triggers.md). |
| **Message types** | **Text**, **Media**, **List / Buttons**, **Catalogue**, **Single product**, **Multi product**, **Template**, **WhatsApp Form** | What the bot says. See [Text and list blocks](chatbot-text-and-list-blocks.md) and [Media, product and form blocks](chatbot-message-blocks.md). |
| **Ask the customer** | **Ask name**, **Ask phone**, **Ask email**, **Ask address**, **Ask Question**, **Ask Location**, **Ask Media**, **Wait & Branch**, **Delay** | What the bot asks, and how long it waits. See [Ask for name, phone, email and address](chatbot-ask-details-blocks.md) and [Ask and wait blocks](chatbot-ask-and-wait-blocks.md). |
| **Actions** | **Set Attribute**, **Add Tag**, **Condition**, **Connect Flow**, **API Request**, **Chat with agent**, **AI Reply**, **Jump to flow**, **End** | What the bot does behind the scenes. See [Action blocks](chatbot-action-blocks.md) and [Ask for name, phone, email and address](chatbot-ask-details-blocks.md). |
| **Store actions** | **Order status**, **Cancel order**, **Reorder**, **Confirm address**, **COD check**, **COD to prepaid**, **Book appointment** | Order and booking tasks for store chats. See [Look up orders and bookings in a chatbot](chatbot-store-action-blocks.md). |
| **Integrations** | **CRM**, **Social**, **Forms**, **Meta Conversion** | Send data to other parts of Ohanvi and to Meta. See [Integration and advanced steps](chatbot-integration-and-advanced-steps.md). |
| **Google Sheets**, **Google Calendar**, **Google Meet**, **Google Contacts** | **Add a row**, **Read rows**, **Create spreadsheet**, **Create event**, **Find events**, **Check availability**, **Update event**, **Cancel event**, **Instant Meet link**, **Find contact**, **Save contact** | Work with your Google apps. See [Add Google Sheets, Calendar, Meet and Contacts steps](flow-google-workspace-steps.md). |
| **Advanced** | **Action**, **Continue only if…**, **Many paths by rule**, **Delay**, **For each**, **Sub-flow**, **Parallel**, **Join**, **Send email**, **Wait**, **Tag contact**, **Remove tag**, **Unsubscribe**, **Split A/B**, **Webhook**, **Request Intervention**, **Invoke Action**, and the **Pick a …** lists | Steps for automations and email journeys, and ready-made option lists. Closed until you open it or search. See [Integration and advanced steps](chatbot-integration-and-advanced-steps.md). |

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Publish first — there is no live version to run.** | You clicked **Run test** on a flow that was never published. | Click **Publish**, then test again. |
| **Unsaved changes** stays on the toolbar | You edited the flow and did not save. | Click **Save**. |
| The flow is published but does not answer | **Active** is off. | Switch **Active** on. |
| A step you expect is missing from the list | The step sits in the closed **Advanced** group. | Type its name in **Search**, or click **Advanced** to open it. |
| **Remove tag is not a chatbot step — use Set attribute, or move it to a journey card.** | You put **Remove tag** on a chatbot card. | Use **Set Attribute**, or move the block to a journey card. |
| **… is not a chatbot step and will not be sent.** | You put a block that only works in another kind of flow on a chatbot card. | Delete the block, or move it to the right kind of card. |
| **… is not a journey step and will be skipped.** | You put a block that only works in a chatbot on a journey card. | Delete the block, or move it to a chatbot card. |
| **Button 'Name' leads to "…", which is not a chatbot step.** | A button or branch is wired to a step that is not a chatbot step. | Know that the wire is saved and the automation follows it, but the conversation ends there. Wire the button to a chatbot step if the chat should go on. |
| **Needs setup** on a card | The step is missing a required value. | Click the step and fill in the fields marked as required. |
| **One step will not be published** | Some steps are incomplete when you click **Publish**. | Click **Fix the steps**, or **Publish without them**. See [Publish when some steps are not finished](#publish-when-some-steps-are-not-finished). |

## Related

- [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md)
- [Choose how a flow starts](chatbot-flow-start-and-triggers.md)
- [Test a chatbot flow with the chat simulator](test-a-flow-with-the-chat-simulator.md)
- [Understand flows and the Flows list](../flows/flows-overview-and-list.md)
- [Use the Action step and conditions in a flow](flow-action-and-condition-steps.md)
