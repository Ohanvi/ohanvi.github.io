---
title: Read a run's output in detail
description: Use the Latest output tab to read what each step of a run did, why a step failed, and the run's details, then copy the output for support.
---

# Read a run's output in detail

Open the **Latest output** tab to see what each step of a run did and returned. At the end, you can tell which step failed and why, what a step was sent, and which version the run used. You can also copy the output to send to support.

## Before you start

- The flow has run at least once. To start a run now, see [Test a flow and fix failed runs](test-and-monitor-flows.md).
- You can see **Flows** in the **WhatsApp** panel.

## What the tab shows

- The **Latest output** tab shows the most recent run of the flow.
- A summary at the top gives the run's state, when it started, and which trigger and version it used, for example **Published v3**.
- A red line under the summary shows the error when the run failed.
- The list below shows one row per step.

### Step states

| State | What it means |
| --- | --- |
| **Done** | The step finished. |
| **Failed** | The step failed. Its error shows when you click it. |
| **Running** | The step is working now. |
| **Waiting to start** | The step has not started yet. |
| **Waiting** | The step is on a timer or waiting for a reply from another system. |
| **Deactivated** | The step is switched off in the builder, so it was skipped. |
| **Answered in chat** | The step was skipped because a person already answered in the chat. |
| **Not needed** | The step was skipped, for example because a condition did not match. |
| **Stopped** | The run was stopped before this step. |

## Steps

### Open the Latest output tab

1. Open **WhatsApp** in the left rail, then select **Flows**.
2. Click the flow's row.
3. Click the **Latest output** tab.
4. If the flow has not run, the tab says **No output yet** and **Run this flow to see what each step returns.** Click **Run test** to start a run.
5. While a run is going, the tab shows **Run in progress** and **Output will update as steps finish.**

### Read one step's output

1. Under **Step output**, click a step. Its output opens below the list.
2. For a step that returned a result, read the values it returned.
3. If the output holds something visual, such as a picture or a card, it also shows under **Visual result**.
4. If the step failed, read the error box first. When the step returned part of its result before it failed, that part shows under **Partial output**.
5. If the step failed because of a connection, the card also says **Review the connection used by this step.** Open the connection in **Connect** → **Connectors**. See [Connect an app and use it in a flow](connect-apps-for-flows.md).

If a step has no records yet, the tab says **No step records for this run yet.**

### See more about a step that is waiting or failed

1. Click the step.
2. If it is waiting on a timer, a line reads **Resumes** followed by a time.
3. If it failed, a line reads **Error code:** followed by a code. Give this code to support.
4. If it called an outside service, a line reads **Vendor job:** followed by the job's number.

### View the full execution

1. Click **View full execution** at the top right of the summary.
2. Read **Run details**.
    - **Run id** is the run's number.
    - **Version pinned** is the version this run used.
    - **Started** and **Finished** are the times.
    - **Billable steps** is how many steps were charged.
    - **Correlation id** is the number that links this run to the event that started it.
    - **Replay of** shows when the run is a repeat of an earlier run.
3. Read **WHAT STARTED THIS RUN** for the event that started it.
4. Under **Every step**, read each step with its state and its timing. A step also shows **What it was sent**, which is the data it received.
5. Click **Hide full execution** to go back to the short view.

### Look at an older run

1. Open the **Recent runs** tab and click **View output** on a run. See [Test a flow and fix failed runs](test-and-monitor-flows.md).
2. The **Latest output** tab opens with the banner **Viewing run from** followed by a time.
3. Click **Back to latest** to return to the newest run.

### Copy the output

1. Click **Copy JSON** under a step's output.
2. Paste it into your message to support.

Long output is cut. A note under it says **Truncated — copy to see the whole payload.**

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **No output yet** | The flow has never run. | Click **Run test**. |
| **No step records for this run yet.** | The run just started. | Wait a few seconds and open the tab again. |
| A step shows **Deactivated** | The step is switched off in the builder. | Turn it on in the builder, then publish. |
| A step shows **Not needed** | An earlier condition did not match. | Check the condition or test with matching data. |
| A step shows **Waiting** for a long time | It is on a **Wait** timer, or it waits for another system. | Read **Resumes**. If it never resumes, stop the run and test again. |
| **Review the connection used by this step.** | The app connection is expired or wrong. | Reconnect it in **Connect** → **Connectors**. |

## Related

- [Test a flow and fix failed runs](test-and-monitor-flows.md)
- [Review a flow's versions](review-flow-versions.md)
- [Understand flows and the Flows list](flows-overview-and-list.md)
- [Connect an app and use it in a flow](connect-apps-for-flows.md)
