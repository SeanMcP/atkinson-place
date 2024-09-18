---
layout: "page.11ty.js"
title: "Favicon"
---

You have found a secret page! <span role="img" aria-hidden="true">🤫</span>

<style>
    .favicon {
        align-items: center;
        background-color: var(--text-color);
        color: white;
        display: flex;
        font-weight: bold;
        font-size: 500px;
        height: 512px;
        justify-content: center;
        text-align: center;
        text-decoration: underline;
        text-decoration-thickness: 0.075em;
        text-underline-offset: 0.05em;
        text-decoration-color: hsl(0, 0%, 60%);
        width: 512px;
    }
</style>
<div class="favicon">A</div>

```
npx favpie ~/Downloads/localhost_8080_favicon_.png -o ./public -ap "Atkinson Place" -sn "Atkinson Pl"
npx icon-gen -i public/favicon-32x32.png -o public/ --ico --ico-name favicon
```
