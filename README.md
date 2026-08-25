# NutriSight Review Lab

NutriSight Review Lab is a privacy-first physical well-being prototype created for Hack for Humanity Summer 2026. It helps an individual turn a meal memory into a structured, uncertainty-aware discussion brief for a registered dietitian nutritionist (RDN).

## Why it exists

Food logging is tedious, while automated nutrition claims can hide uncertainty. The prototype explores a safer middle ground:

1. The individual records directly observed meal components.
2. Unknown preparation, ingredient and portion details stay visible.
3. The person confirms that the tool is not medical advice.
4. A concise brief organizes the facts and questions for qualified review.

The software does not diagnose, prescribe, estimate clinical outcomes or claim medical accuracy.

## Run locally

No installation, API key, cloud account or paid service is required.

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Privacy and responsible design

- No server, remote database or analytics.
- The current brief is stored only in browser local storage.
- User-entered text is HTML-escaped before rendering.
- Missing context remains explicit.
- Outputs are framed as discussion support, not medical advice.
- The project is seeking an RDN advisor for evidence-boundary review and pilot design; it does not claim to have one today.

## Hackathon build statement

This standalone prototype and repository were created on August 25, 2026, during the Hack for Humanity Summer 2026 build period. It draws on the founder's broader NutriSight concept but implements a new review-brief workflow, local-first privacy model and responsible-health interface for this event.

## Creator

Kasper Mathiesen — solo builder.

## License

MIT
