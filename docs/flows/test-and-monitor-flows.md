---
title: Test a flow and fix failed runs
description: Run a test of a published flow, read its run history and each step's output, and fix failed, stuck or stopped runs.
---

# Test a flow and fix failed runs

Start a test run, then read what each step did and returned. At the end, you know whether your flow works, why a run failed, and how to get a paused or stopped flow running again.

## Before you start

- The flow is published at least once. A test runs the published version, not your unsaved draft. See [Build an automation flow](build-automation-flow.md).
- You can see **Run test** in the flow's panel. It needs save access to flows.

## How runs work

- Each trigger event starts one **run**. The run goes through the steps in order.
- A step that fails is tried again automatically after a short wait. Steps that are not safe to repeat, such as some sends, are tried once. The run shows **Running** while retries happen.
- If a step still fails, the run ends as **Failed** and the rest of the steps do not run.
- A run can also end as **Succeeded**, **Filtered** (stopped by a condition, not a failure) or **Cancelled**. **Waiting** means a step is on a timer.

## Steps

### Run a test from the list

1. Open **WhatsApp** in the left rail, then select **Flows**.
2. Click the flow's row.
3. Click **Run test**. The row shows the run's state while it runs.
4. Read the message, for example **Test run succeeded.** or **Test run failed:** followed by the reason.

!!! warning "A test run is a real run"
    **Run test** runs the published version with real side effects. Messages it sends go to real people, and records it creates are real.

If the flow is paused, the **Run a test while paused?** window opens. Click **Run test**. The flow stays paused afterwards.

### Run a test from the builder

1. Open the flow and click **Test** in the toolbar. The **Test** tab opens in the **Step** panel.
2. Click **Run test**. If you have unsaved changes, the flow is saved first.
3. Read each step's state in the list under the button. Click **Refresh** to update it.
4. You can also open **Logs** at the bottom of the canvas and click **Run test** there.

For a chatbot, the **Test** tab checks a keyword and lets you chat as the customer instead. See [Create a WhatsApp chatbot flow](../create-whatsapp-flow.md).

### Read the run history

1. In the list, click the flow's row, then open the **Recent runs** tab.
2. Read each run: its state, when it started, and how long it took. A red note under the run shows the error, for example **Step 2 failed:** followed by the reason.
3. Click **View details** to see each step, its state and what it returned.
4. Click **View output** to open the run in the **Latest output** tab.

### Read a step's output

1. Open the **Latest output** tab. It shows the most recent run.
2. Under **Every step**, click a step. Its output and any error appear.
3. Open **Run details** to see **Run id**, **Version pinned**, **Started**, **Finished** and **WHAT STARTED THIS RUN**.
4. Click **Copy JSON** to copy the output for support. Click **Back to latest** to return to the newest run.

In the builder, select a step and open its **Output** tab to see what it produced in the last run.

### Fix a failed run

1. Read the error in **Recent runs** or **Latest output**.
2. Open the builder, select the failed step, and fix it. Common fixes are an empty field, a wrong template name or an expired connection.
3. Click **Save**, then **Publish**.
4. Click **Run test** to check the fix.

A failed run is not run again by itself after you fix the flow. The next trigger event starts a new run on the new version.

### Stop runs in progress

1. Click the flow's row, then open **More** (**…**).
2. Click **Stop runs**. This item appears only while a run is going.
3. In **Stop the runs in progress?**, click **Stop runs**. The message **Runs stopped.** appears.

!!! warning "Stopped runs cannot be resumed"
    Stopped runs are marked cancelled and their remaining steps are dropped. A step already running finishes.

### Restart a flow the system stopped

If a **When a record appears** trigger fails to reach its app many times in a row (10 by default), Ohanvi stops the flow. Its owner gets the notification **Automation stopped** with the last error.

1. Fix the connection. See [Connect an app and use it in a flow](connect-apps-for-flows.md).
2. Open the flow and turn it back on with the **Active** switch in the builder toolbar [VERIFY: how a system-stopped flow is labelled in the list and whether the switch turns it back on].

## Video walkthrough

[VIDEO]

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **This flow is DRAFT. Only an active or paused flow can be tested.** | The flow was never published. | Click **Publish**, then **Run test**. |
| **This flow has never been published, so there is no version to run.** | There is no published version yet. | Publish the flow first. |
| **Could not start a run — the flow is at its concurrency limit. Wait for a run to finish and try again.** | Too many runs of this flow are going at once. | Wait for a run to finish, then try again. |
| **The run stopped at a filter — that is a normal outcome, not a failure.** | A **Continue only if…** condition did not match your test data. | Check the condition, or test with an event that matches it. |
| Row shows **Stuck** | A run has been running or waiting for more than 6 hours. | Open **Recent runs**. A **Wait** step can hold a run for days on purpose. Otherwise, stop the run and test again. |
| **Run test** is greyed out | The flow has no steps, a test is already running, or a store or WhatsApp connection is missing. | Add steps, wait for the running test, or click **Connect store** or **Connect WhatsApp**. |

## Related

- [Build an automation flow](build-automation-flow.md)
- [Understand flows and the Flows list](flows-overview-and-list.md)
- [Connect an app and use it in a flow](connect-apps-for-flows.md)
- [Automate store messages with flows](store-journeys.md)

!!! note "Screenshots to add"
    - After step 4 of "Run a test from the list" — the **Test run succeeded.** message and the row's last-run line.
    - After step 3 of "Read the run history" — **Recent runs** with **View details** open on a failed run.
    - After step 2 of "Read a step's output" — the **Latest output** tab with a step selected.
    - After step 3 of "Stop runs in progress" — the **Stop the runs in progress?** window.
