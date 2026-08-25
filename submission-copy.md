# Hack for Humanity Summer 2026 — Submission Copy

## Project name

NutriSight Review Lab

## Tagline

Turn a meal memory into a safer, RDN-ready health conversation.

## One-sentence summary

NutriSight Review Lab is a local-first physical well-being prototype that helps an individual document observed meal components, keep uncertainty visible, and create a concise discussion brief for a registered dietitian nutritionist (RDN).

## Inspiration

Food logging is often too tedious to sustain, while automated nutrition tools can make uncertain inputs look more precise than they really are. A meal photo or memory cannot reliably reveal portion size, hidden ingredients, preparation methods, health effects, or a person's clinical context. We wanted to explore a more honest role for technology: organize the evidence, show what is still unknown, and help a person prepare better questions for a qualified professional.

## What it does

NutriSight Review Lab guides a person through a three-step workflow:

1. **Observe:** record the meal moment, visible components, and confidence in the portion description.
2. **Clarify:** add preparation details, choose the question they want to explore, and explicitly record missing context.
3. **Review brief:** generate a structured summary that separates observations, user-supplied context, uncertainty, and the question for RDN review.

The prototype does not diagnose, prescribe, calculate treatment, or claim medical accuracy. It keeps credentialed nutrition professionals in the role of interpretation. The current brief stays in the browser: there is no remote database, analytics tracker, API key, account, or paid service.

## How we built it

The prototype was built during the Hack for Humanity Summer 2026 build period as a standalone, dependency-free web application using semantic HTML, responsive CSS, and vanilla JavaScript. Browser local storage preserves the current brief on the device. User-entered text is escaped before it is rendered in the generated brief. The source is published in a public GitHub repository and the live demo is deployed through GitHub Pages.

The interface treats evidence boundaries as a first-class product feature. Each step pairs the input workflow with a short safety explanation, and the final brief labels the difference between what was observed, what was supplied by the individual, what remains uncertain, and what needs qualified review.

## Challenges we ran into

The central challenge was avoiding false precision. Nutrition interfaces often reward the appearance of certainty, even when preparation, portion, ingredients, health history, and personal goals are unknown. We designed the workflow so missing details remain visible and useful rather than being silently filled in.

We also had to make the safety model understandable without turning the interface into a wall of disclaimers. The resulting design uses a compact evidence-boundary card alongside every step and plain-language labels in the final brief.

## Accomplishments that we're proud of

- A complete, responsive workflow that works without an account or installation.
- A useful output even when important meal details remain unknown.
- A local-first privacy model with no analytics or remote database.
- Clear separation of observation, estimation, correction, and professional review.
- Honest scope: no clinical-validation, accuracy, partner, or outcome claims.
- A public, functioning repository and live deployment created during the hackathon period.

## What we learned

Responsible health technology is not only about adding a disclaimer after the product is built. The product interaction itself must preserve uncertainty, invite correction, limit claims, and make escalation to qualified people easy to understand. A modest, transparent workflow can be more useful than an impressive-looking answer that hides its assumptions.

## What's next for NutriSight Review Lab

The next step is to recruit an RDN advisor to review the evidence boundaries and co-design a bounded pilot. Future work could add an optional meal-image input, but only after confirming lawful data sources, defining a transparent evaluation protocol, and keeping every inferred component editable. We also want to test accessibility with keyboard and screen-reader users and evaluate whether the brief improves the quality of conversations for individuals, clinics, health centers, and community programs.

## Built with

- HTML5
- CSS3
- JavaScript
- Browser localStorage
- GitHub
- GitHub Pages

## Links

- Live demo: https://snitterdk.github.io/nutrisight-review-lab/
- Source code: https://github.com/SnitterDK/nutrisight-review-lab

## Truthful build statement

This standalone prototype and repository were created on August 25, 2026, during the Hack for Humanity Summer 2026 build period. It draws on Kasper Mathiesen's broader NutriSight concept but implements a new review-brief workflow, local-first privacy model, and responsible-health interface for this event.
