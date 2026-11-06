---
title: Choose what happens when a step fails
description: Set how many times a flow step is retried, and whether the run stops or carries on with the next step when it still fails.
---

# Choose what happens when a step fails

Set how often a failing step is retried, and whether the run stops or carries on.

## Before you start

- The step is an action, such as an app step or a WhatsApp send. Conditions, paths and waits have no failure settings.
- You are on the draft. On a published version, the settings are greyed out.

## What the settings do

**Retry** sets how many times the step is tried in total:

| Choice | What happens |
| --- | --- |
| **Default** | Ohanvi decides. Most steps are tried up to 5 times. Steps that are not safe to repeat are tried once. |
| **Don't retry** | The step is tried once. |
| **3 times** | The step is tried up to 3 times. |
| **5 times** | The step is tried up to 5 times. |

**Then** sets what happens after the last try fails:

| Choice | What happens |
| --- | --- |
| **Stop the flow** | The run ends as **Failed**. Later steps do not run. This is the default. |
| **Carry on with the next step** | The run goes on as if the step returned nothing. |

## Steps

1. Open the flow in the builder and select the step. Its **Step** panel opens.
2. Scroll to **If this step fails**.
3. Open **Retry** and choose **Default**, **Don't retry**, **3 times** or **5 times**.

    [SCREENSHOT: If this step fails with the Retry and Then drop-downs]

4. Open **Then** and choose **Stop the flow** or **Carry on with the next step**.
5. Click **Save**, then **Publish**.

!!! warning "Carrying on sends empty values"
    After a failed step, later values such as `{{3.value[0].shipment_id}}` are empty. A message can go out with a blank. Choose **Carry on with the next step** only when later steps work without this step's data.

When a run carries on, the failed step still shows **Failed** in the run's output. See [Read a run's output in detail](read-a-runs-output.md).

### Pick a retry setting

- Choose **Don't retry** for a step that sends a message. A retry after a timeout can deliver it twice.
- Keep **Default** for searches and reads. They are safe to repeat.
- A step value saved earlier, such as **2 times**, shows as itself. Opening the panel does not change it.

Some actions are never retried, because a repeat would duplicate them. Shiprocket's **Create an order** is one. For these, **Retry** is greyed out with the note **Retries are off for this operation.**

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Retry** is greyed out with **Retries are off for this operation.** | A repeat of this action would duplicate it. | No fix needed. The step is tried once. |
| Both drop-downs are greyed out | You are viewing a published version. | Open the draft, then change the settings. |
| A customer got the same message twice | The send step was retried after a timeout. | Set **Retry** to **Don't retry** on that step. |
| A message went out with a blank | An earlier step failed and its **Then** is **Carry on with the next step**. | Set it to **Stop the flow**, or remove the field that needs that step's data. |
| A run shows **Succeeded** but one step shows **Failed** | That step is set to **Carry on with the next step**. | Read the step's error in **Latest output**, then fix the step. |

## Related

- [Add an app step to a flow](add-an-app-step.md)
- [Test a flow and fix failed runs](test-and-monitor-flows.md)
- [Read a run's output in detail](read-a-runs-output.md)
- [Build an automation flow](build-automation-flow.md)
