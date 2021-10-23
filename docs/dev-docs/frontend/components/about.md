---
id: about
title: About Components
sidebar_position: 1
---

## Introduction

We use the `styled-components` library to build out our components.

The organization of our components is loosely based on the React atomic design, where the simplest components are atoms, leading all the way up to organisms:
- **Atoms**: Pure basic components without context or state, created using `styled-components`.
- **Molecules**: Components with context or state, created using the Atoms.
- **Organisms**: More complex components with context or state, created using Atoms, Molecules, or other Organisms.

It should be noted that documentation for the implementation of these components will be kept to a minimum because components can often change structure and functionality because for user experience and scalability purposes at this stage of development, so key information will include props, styles, function names, hook dependencies, and manager dependencies.

Because of the reason stated above, it is also recommended to get familiar with the constant [**enums**](/docs/dev-docs/frontend/constants/types/enum) and [**types**](/docs/dev-docs/frontend/constants/types/types) first before delving into the compositions of the components.