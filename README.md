# RSVP

A web app where wedding guests can respond to their invitation. Each invitation has its own QR code. Guests choose whether they're attending, and those who attend can register menu preferences and allergies before being sent on to the wedding website.

> Work in progress

## Tech stack

- React + TypeScript
- Vite
- Tailwind CSS

## Getting started

The app lives in the `Project` folder:

```bash
cd Project
npm install
npm run dev
```

## Status

**Done**

- Show guests on an invitation from mock data
- Choose attending / not attending for each guest
- Keep answers in state and log them on submit

**Planned**

- Menu step for guests who are attending (vegetarian/vegan, allergies)
- Get invitations and guests from a database
- Store responses in the database
- Redirect to the wedding website after submitting
