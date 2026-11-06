---
title: Test a step and pin sample data
description: Run one flow step on its own, keep what it returned as sample data, and pick fields from that data in later steps.
---

# Test a step and pin sample data

Run one step on its own and keep its result for later steps to pick fields from.

## Before you start

- The flow has a trigger and at least one action step. See [Add an app step to a flow](add-an-app-step.md).
- You are on the draft. A published version shows **Open the draft to test a step.**
- For an app step, an account is chosen under **1 · Account**.

## How samples work

- A **sample** is example data for one step: what the trigger sent, or what a step returned.
- Later steps pick their values from these samples, for example `{{2.value[0].awb_code}}`.
- A successful test pins its result as that step's sample. You can also edit or unpin it.
- The trigger has its own sample, fetched with **Get sample event**.

## Steps

### Get a sample event for the trigger

1. Save the flow once. The **Sample data** section appears only on a saved flow.
2. Click the trigger at the start of the canvas. The **When this runs** panel opens.
3. Under **Sample data**, click **Get sample event**. Ohanvi fetches a real event, or the latest one the app sent.
4. Read the preview. It shows the first 5 fields, then **+ N more**.
5. To fetch again later, click **Get a new sample**.

    [SCREENSHOT: the When this runs panel with Sample data, the Get a new sample button and the field preview]

To change the sample by hand, click **Edit**. Change the JSON in **Edit sample event**, then click **Save sample**. Click **Clear** to remove it.

### Test one step

1. Select the step. Its **Step** panel opens.
2. Under **3 · Test**, click **Test this step**. The button reads **Testing…** while it runs. A step without numbered parts shows **Test** instead.
3. If you have unsaved changes, the draft is saved first.
4. If the step does real work, the **Run this step for real?** window says what it will do. Click **Run it for real**, or **Cancel**.

    [SCREENSHOT: the Run this step for real? window with Run it for real and Cancel]

5. Read the result. **Worked** shows how long it took. **Failed** shows the error in a red box.
6. Click **Sent** to see **What this step was given**, with every `{{…}}` filled in.

If you click **Cancel**, the step shows **Not run — nothing was sent.**

!!! warning "A test does real work"
    Testing an action such as **Create an order** creates a real order in the app. Use a test account or test data.

### Keep, edit or unpin the sample

1. After a successful test, the banner **📌 Pinned sample — later steps map and test against this data** appears. The result shows under it.
2. To change the sample, click **Edit**. The **Edit the pinned sample** window opens.
3. Change the JSON and click **Pin it**. The sample must be a JSON object.
4. To remove the sample, click **Unpin**.

    [SCREENSHOT: the pinned sample banner with Edit and Unpin, and the sample output below it]

Edit a sample when the app returned an empty list, or lacks a record you need. Later steps then build on your data.

Sensitive values such as tokens may show masked. A running flow still reads the real value.

### Pick a value from earlier data

1. In a later step, click the braces icon beside a field. Its tooltip is **Use a field from the trigger or an earlier step**.
2. Read the groups. **Trigger** comes first, then each earlier step, for example **2 · Shiprocket · Assign an AWB**.
3. Read the tag beside a group:
    - **pinned** — your own tested or pinned data.
    - **example** — the app's documented example, not your account's data.
    - **last run** — taken from the run on screen.
4. Nested fields are indented under their parent. The sample value shows on the right.
5. With many fields, type in **Search fields**. Press **Enter** to take the top match.
6. Click a field. Ohanvi puts its value in the box, for example `{{2.value[0].awb_code}}`.

    [SCREENSHOT: the field list with the Trigger group, a step group with its app logo, nested fields and sample values]

The number in a value is the step's position on the canvas. `value[0]` is the first record the step returned.

### Pin the data from a real run

1. Open the flow's **Latest output** tab. See [Read a run's output in detail](read-a-runs-output.md).
2. Open the run you want, for example from **Recent runs** with **View output**.
3. Click **Test with this data** at the top right. It reads **Pinning…** while it works.
4. Read the message, for example **Pinned 3 steps — later steps now map and test against this run.** Steps it skipped are listed after **Skipped:**.

**Test with this data** shows only when the flow has unpublished changes and the run has finished.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Test step 2 · … first, so this step has data to work with.** | An earlier step has no sample yet. | Test that step first, or pin a sample for it. |
| **Get a sample event on the trigger first, so this step has data to work with.** | The trigger has no sample. | Click **Get sample event** on the trigger. |
| **Open the draft to test a step.** | You are viewing a published version. | Open the draft from the version chip, then test. |
| **The sample must be a JSON object, like { "id": 1 }.** | The edited sample is a list or a single value. | Wrap it in `{ }` with named fields. |
| A field from an **example** group is empty in real runs | The app's example has a field your account does not return. | Test the step, or pin a real run, and pick the field again. |
| **Test with this data** is missing | The flow has no unpublished changes, or the run is still going. | Save a change to the flow, or wait for the run to finish. |

## Related

- [Add an app step to a flow](add-an-app-step.md)
- [Read a run's output in detail](read-a-runs-output.md)
- [Test a flow and fix failed runs](test-and-monitor-flows.md)
- [Build an automation flow](build-automation-flow.md)
