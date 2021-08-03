---
id: about
title: About Components
position: 1
---

## Introduction

We use the `styled-components` library to build out our components.

The organization of our components is loosely based on the React atomic design, where the simplest components are atoms, leading all the way up to organisms:
- **Atoms**: Pure basic components without context or state, created using `styled-components`.
- **Molecules**: Components with context or state, created using the Atoms.
- **Organisms**: More complex components with context or state, created using Atoms, Molecules, or other Organisms.