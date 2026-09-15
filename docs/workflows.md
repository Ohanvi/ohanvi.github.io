# Build a lead follow-up workflow

Trigger automatic WhatsApp, email, or task actions when a lead enters a segment.

## Steps

1. Open **Workflows**.
2. Select **Create workflow**.
3. Choose a trigger such as new lead, form submitted, or tag added.
4. Add conditions for source, location, score, or campaign.
5. Add actions such as WhatsApp message, email, sales task, or delay.
6. Test with a sample contact.
7. Activate the workflow.

## Example flow

| Stage | Configuration |
| --- | --- |
| Trigger | Lead created from Facebook Ads |
| Action | Send WhatsApp welcome template |
| Delay | Wait 1 day |
| Condition | If no reply, assign sales follow-up task |

## Common checks

- Make sure the trigger can only fire when expected.
- Add delays before repeated follow-ups.
- Test with a sample contact before activating for all leads.
