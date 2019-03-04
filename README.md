# shop-bot
This repo contains a Cypress.io coding exercise.

## Installation

```bash
## install all dependencies
npm install
```

## Opening Cypress GUI

```bash
npm run cypress:open
```

## Instructions to the candidate

**The big task: Use Cypress to ‘buy’ a gadget.**

Disclaimers: Don't actually buy anything!  You need not use any personal information.

This exercise will consist of Cypress test deliverables, which you and I will review via Pull Requests on GitHub.  We'll start with a Cypress test that 'shops' for a gadget via an online retailer.  I fake-bought a Pixel 2 today from the Google store, since that's the phone I actually use, and the basic flow I have outlined below uses that product and retailer as an example.  You don't have to 'shop' for a Pixel, or even for electronics.  This is not a rigid exercise, and you are encouraged to take it in a direction you find interesting.  You're also welcome to create more and deeper test flows as you see fit.  *I have italicized the specific outcomes you should achieve in this test* - as long as you hit these fairly generic requirements, you're welcome to let your imagination run wild.

0.1) *Create a repository on GitHub with a functioning Cypress stack as the Master branch* (meaning, the example spec files included with Cypress' Node package run successfully). *Include documentation, preferably via a README.*

0.2) *Add me on GitHub (nlapier) so that I can review pull requests in this repo.*

0.3) *Create a new local branch off master, containing one or more spec files that address at least the basic testing steps listed the '1.X' items below.*

1.0) *Cy-visit* https://store.google.com, *select and configure a hardware product* (screen size, storage, etc.).

1.1)  Enter your shopping cart, checkout as a guest, and elect to have the product shipped.  Select (but do not fill) the shipping fields, such that validation errors appear ("Please enter a valid zip code" - that sort of thing). *Confirm via Cypress that validation errors appear.*

1.2) Fill in the shipping information (you can use Sema4’s address), *and confirm via Cypress that the validation errors disappear.*

2.0) *Push this branch to GitHub, open a PR, and request me as a reviewer.*


I'm especially interested in seeing modular, reusable code that could be easily leveraged for future testing flows.

Finally, don’t worry if you're stumped on a particular point of the Cypress API, or if you have to modify this flow to deal with your chosen retailer's web app.  We just want to see how you work, think, and collaborate, not how exactingly you follow a rigid series of steps.
