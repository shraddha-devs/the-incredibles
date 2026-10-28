# HYPERTHESIS 2027

A responsive, single-page landing page concept for **HYPERTHESIS**, a proposed student engineering and prototyping event. The site presents the event brief, challenge missions, a draft schedule, registration information, sample project stories, proposed prizes, mentor profiles, and FAQs.

> **Concept/demo only:** Event dates, fees, venue, eligibility, schedule, prizes, and other event details are provisional and have not been verified. This page is not an official Stanford University website, and no Stanford endorsement is implied. The registration URL, contact address, and sample project/mentor content are placeholders. Confirm and replace all details before publishing.

## Features

- Responsive layout for desktop and mobile screens.
- Mission cards that can be filtered by software, hardware, and hybrid categories, with expandable mission briefs.
- Schedule, prize, mentor, and FAQ content rendered from JavaScript data.
- Countdown to the proposed registration deadline.
- Mobile navigation menu and registration call-to-action.
- Semantic page sections, descriptive labels, and a skip-to-content link.

## Getting started

This is a static site: it has no build step, package installation, or server-side code.

1. Download or clone the project.
2. Open `index.html` in a modern browser.

For local development, you can optionally serve the files over HTTP from the project directory:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>. Any static file server will work.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure, event copy, and inline illustration. |
| `styles.css` | Visual design, responsive layout, and interaction states. |
| `app.js` | Event data, dynamic page sections, countdown, and UI interactions. |

## Updating the content

Most of the interactive event content is defined in the `EVENT_DATA` object near the top of `app.js`. Update the relevant data there to change missions, timeline entries, prize descriptions, mentor profiles, FAQs, or registration settings. The page renders these sections when it loads.

Before publishing, review all provisional/demo copy in `index.html` and `app.js`. In particular:

- Set `EVENT_DATA.registration.url` to an approved registration page. The current URL points to `example.com` and does not submit registrations.
- Update the registration deadline, fee, team size, venue, and related copy consistently.
- Replace `organizers@example.com` and the generic social links with verified destinations.
- Confirm dates, event logistics, eligibility, prize amounts, mentor information, and policies with the organizers.
- Replace demo project stories and profiles with approved content or remove them.

The page uses Google Fonts (Anton, DM Mono, and Inter); an internet connection is needed to load them. System font fallbacks are defined in the stylesheet.
