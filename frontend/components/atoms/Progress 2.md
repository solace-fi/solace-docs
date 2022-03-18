## Props

### `ProgressProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `step` | number | Indicates current step on form.

## Components

### `StepsContainer` (exported)
- **Extends**: [**FlexCol**](/docs/dev-docs/frontend/components/atoms/Layout#flexcol-exported)
- **Props**: [**ProgressProps**](/docs/dev-docs/frontend/components/atoms/Progress#progressprops)
- **Info**: Container component for step form. Creates styles for [**Step**](/docs/dev-docs/frontend/components/atoms/Progress#step-exported) and [**StepProgressBar**](/docs/dev-docs/frontend/components/atoms/Progress#stepprogressbar-exported).

### `StepsWrapper` (exported)
- **Info**: Component to hold [**Step**](/docs/dev-docs/frontend/components/atoms/Progress#step-exported) components as named sections on step progress bar.

### `Step` (exported)
- **Info**: Component that serves as a named section on step progress bar.

### `StepProgress` (exported)
- **Info**: Component that wraps the progress bar.

### `StepProgressBar` (exported)
- **Info**: Progress bar component.