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

It should be noted that documentation for the implementation of these components will be kept to a moderate minimum because components can often change structure and functionality due to user feedback or project scalability, so the key information will include props, styles, function names, hook dependencies.