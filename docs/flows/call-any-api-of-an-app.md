---
title: Call any API of an app
description: Use an app's Custom API call action to reach an endpoint that has no ready-made step, signed in with your saved account.
---

# Call any API of an app

Use **Custom API call** to reach an app endpoint that has no ready-made action, using your saved account.

## Before you start

- You are a Super Admin or a System Admin. Other roles do not see **Custom API call**.
- The app is connected. See [Add an app step to a flow](add-an-app-step.md#choose-the-account).
- You know the endpoint from the app's API documentation: its method, path and fields.

## How a custom call works

- The step sends one request to the app's own API, with your method, path and data.
- Ohanvi signs the request with the account under **1 · Account**. You never paste a token.
- The path is added to the app's own address. A custom call cannot reach any other website.
- Only some apps offer it. Apps that connect on their own screen, such as Shopify and Shiprocket, do not.
- A custom call is never retried, because it may create or change data.

## Steps

1. Open the flow in the builder. Click **+** after a step. The **Add a step after** panel opens.
2. Under **Apps**, click the app.
3. Under **Advanced**, click **Custom API call**.
4. Under **1 · Account**, choose the account.
5. Under **2 · What to send**, check **Method**. It starts at **GET**. Change it to **POST**, **PUT**, **PATCH** or **DELETE** if needed.
6. In **Path**, type the endpoint path, for example `/v1/orders`. Leave out the app's address.

    [SCREENSHOT: a Custom API call step with Method, Path and the note about the app's own address]

7. Click **+3 more fields** to show the optional fields:
    - **Query parameters** — a JSON object, for example `{ "limit": 10 }`.
    - **Headers** — a JSON object of extra headers. Sign-in headers are added for you.
    - **Body** — the JSON to send with **POST**, **PUT** or **PATCH**.
8. Read the note under the form, for example **Signed with this account. The path stays on Canva's own address.**
9. Under **3 · Test**, click **Test this step** to check the call. Then click **Save** and **Publish**.

You can use values from earlier steps in any field, for example `{ "email": "{{trigger.email}}" }`.

!!! warning "A custom call does real work"
    A **POST**, **PUT**, **PATCH** or **DELETE** changes data in the app, during tests too. Check the path and body before you test.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| **Custom API call** is not in the list | Your role is not an admin, or the app does not offer it. | Ask a Super Admin to add the step. Otherwise, use the app's named actions. |
| **Only an admin (Super Admin or System Admin) can publish a Custom API call step.** | The flow has a custom call and you are not an admin. | Ask an admin to publish the flow. |
| **'path' must be relative to the app's base URL, not a full address.** | **Path** starts with `https://`. | Type only the part after the address, for example `/v1/orders`. |
| **Put query parameters in 'query', not in 'path'.** | **Path** contains `?`. | Move the parameters into **Query parameters**. |
| **'headers' cannot set …** | A header tries to set sign-in or routing details. | Remove that header. The saved account signs the request. |
| **A custom call can only reach …, the app's own API.** | The path leads away from the app's address. | Use a path on the app's own API. |

## Related

- [Add an app step to a flow](add-an-app-step.md)
- [Choose what happens when a step fails](choose-what-happens-when-a-step-fails.md)
- [Test a step and pin sample data](test-a-step-and-pin-sample-data.md)
- [Connect an app and use it in a flow](connect-apps-for-flows.md)
