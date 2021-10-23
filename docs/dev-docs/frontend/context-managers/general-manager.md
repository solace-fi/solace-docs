---
sidebar_position: 1
---

# GeneralManager

The GeneralManager keeps track of most things that should be prevalent throughout the app without question.

## How does it work?

This manager includes the app theme (light or dark) as well as notifications and errors garnered from the app, which will then be passed down to the NotificationsManager. It also holds the modal for community links that will be displayed if the user is on mobile.

Hook Dependencies:
- `useLocalStorage()`
- `useWindowDimensions()`

#### Returned values:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`appTheme` | 'light' \| 'dark' | Boolean to indicate light or dark mode.
|`toggleTheme` | function | Toggle theme.
|`notices` | string[] | Stringified array of SystemNoticeData objects.
|`errors` | string[] | Stringified array of ErrorData objects.
|`haveErrors` | boolean | Is true if errors exist.
|`addNotices` | (noticesToAdd: SystemNoticeData[]) => void | Function to add objects to `notices` array.
|`removeNotices` | (noticesToRemove: SystemNotice[]) => void | Function to remove objects from `notices` array.
|`addErrors` | (noticesToAdd: ErrorData[]) => void | Function to add objects to `errors` array.
|`removeErrors` | (errorsToRemove: Error[]) => void | Function to remove objects to `errors` array.