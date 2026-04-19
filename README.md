# Stack

A minimal daily habit tracker, designed in the spirit of Dieter Rams.

Live at **[stack-habits.vercel.app](https://stack-habits.vercel.app)**.

## Why

Most habit-tracking apps are noisy. They gamify, they notify, they celebrate with confetti, and they leak motivation theater into what should be a quiet daily ritual. Stack is the opposite: one tap per habit per day, a grid that speaks for itself, no encouragement you didn't ask for.

## Design principles

Built on Dieter Rams' Ten Principles, with particular attention to:

- **As little design as possible.** No ornament, no gradients, no skeuomorphism.
- **Unobtrusive.** The app disappears into the task.
- **Honest.** The visualization represents the data truthfully, without inflated metrics or motivational lies.
- **Thorough down to the last detail.** Grid-based layout, precise typography, considered spacing.
- **Aesthetic.** Monochrome base with an optional single functional accent color.

## Features

- One-tap daily check-ins with a rolling 10-day view on the home screen
- Optional per-habit targets (per week, per month, or per year)
- A restrained scoreboard that shows progress toward each target, with quiet "complete" and "bonus" states when you hit or exceed
- Per-habit detail view with current streak, longest streak, 30/90/365-day completion rates, and a calendar heatmap in either monthly or yearly layout
- Retroactive marking back to January 1 of the current year, full multi-year history preserved
- CSV export and import for portability across devices and backup
- Light and dark modes
- Seven optional accent colors: Rosso Corsa, Victory, Snap, Speed, Growth, Next, Royal
- Installable as a PWA on iPhone, iPad, and Android

## Tech

Single-file vanilla HTML, CSS, and JavaScript. No framework, no build step. Data stored in the browser's localStorage. Works offline once installed. Icon and manifest configured for full PWA behavior on iOS and Android.

## Run your own copy

1. Fork or clone this repository
2. Deploy the root folder to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages all work)
3. Open the URL in Safari on iPhone or Chrome on Android
4. Share → Add to Home Screen

## Credits

Inspired by Dieter Rams and his body of work at Braun. Built by Kyle Westaway.

## License

MIT. Use it, fork it, adapt it.
