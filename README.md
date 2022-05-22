# REACT JS
## Functional components & state management
___
### Table of content
##### (Introduction)[#Introduction]
##### (Branches)[#Branches]
##### (Why Redux ?)[#Why\ Redux\ ?]
___

### Introduction

This repository is made for junior dev to understand the journey from *Class* to *Functional components*.

Moreover, we will see how to store data with a global store thanks to [Redux](https://redux.js.org/) (we will use 'vanilla' Redux here).

### Branches

1. **Master**: 

    Final version of the project using redux

2. **1/class**:

    Class component example

3. **2/function**:

    Functional component example

### Why Redux ?

When you need to store data that is sharable across your app, you need to go further than just using a state built in a single component.

LocalStorage or SessionStorage could not fit our needs for security and scalability reasons.

Then we need to create a global state shared to all our components. This is Redux goal !

We will use 'vanilla' redux for this day, but sonner or later you will use [@reduxjs/toolkit](https://redux-toolkit.js.org/).
