# Gushu Birthday Edition

This update adds a CSS-only birthday atmosphere and a redesigned empty-chat welcome screen.

- No new dependencies or network requests.
- Messaging, routing, Supabase, and cache logic are untouched.
- Animations are subtle and honor `prefers-reduced-motion`.
- The app-wide styling preserves the existing theme tokens and works with light/dark themes.

Run the existing project scripts (for example `npm run build`) to verify in your environment.


## Intense birthday entrance update
- Added a cinematic full-screen birthday intro on each authenticated app entry.
- Includes opening velvet-style curtains, animated confetti/sparkles, glowing cake, large animated HAPPY BIRTHDAY headline, a short heartfelt message, and a loading-style progress shimmer.
- Automatically fades from the entrance after 4.6 seconds; users can tap “Let the magic begin” to skip immediately.
- This is a visual welcome sequence, not a network loading screen, so it does not delay conversations or depend on the connection.
- CSS-only animation and native React state; no additional packages, external assets, or network requests.
- Honors reduced-motion preferences and adapts to mobile screens.


## Cinematic birthday curtain — chat entry
- The full-screen curtain intro now appears when entering a conversation, including a direct link to a chat or switching between conversations.
- It no longer appears on the inbox/home screen.
- The entrance lasts about 5.6 seconds and can be skipped immediately with “Let the magic begin”.
- Enhanced the birthday atmosphere with deeper jewel-tone lighting, stronger glow, richer velvet-curtain styling, and a more prominent title.
- Added responsive handling for narrow phones, safe areas, tablets, and short landscape screens.
- The overlay is visual-only and does not wait for chat/network data; no new dependencies or external assets.


## Page-load crash fix
- Moved the birthday intro effect below the `params` initialization. The previous order read `params.conversationId` while `params` was still in its temporal dead zone, causing `ReferenceError: Cannot access 'O' before initialization` in the production bundle.
- The project does not include a `public/sw.js` service-worker file, so removed the registration attempt that returned HTTP 404. This warning was separate from the React crash and did not install an offline worker.
