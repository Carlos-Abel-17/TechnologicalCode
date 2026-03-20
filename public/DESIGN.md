# Design System Strategy: High-End Technological Noir

## 1. Overview & Creative North Star: "The Obsidian Pulse"
This design system is engineered for **TechnogicalCode** to evoke a sense of high-end, futuristic precision. Our Creative North Star is **"The Obsidian Pulse"**—a concept where the interface feels like a living, breathing machine carved from dark matter. 

We move away from the "flat" web by utilizing intentional asymmetry and tonal depth. By layering deep blacks and translucent glass surfaces, we create a UI that feels premium, like a high-performance cockpit or a luxury automotive interface (Tesla/Ravn). Success here is measured by the tension between the "Void" (Deep Black) and the "Pulse" (Electric Accents).

---

## 2. Colors & Surface Architecture

The palette is rooted in absolute depth, using high-contrast accents to guide the eye through complex technical data.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Traditional borders create a "boxed-in" feeling that contradicts the fluid, futuristic aesthetic. Instead, define boundaries through:
*   **Background Shifts:** Transition from `surface` (#0E0E0E) to `surface-container-low` (#131313).
*   **Vertical Space:** Use the Spacing Scale (e.g., `spacing-16` or `spacing-20`) to let content breathe.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-transparent materials.
*   **Base:** `background` (#0E0E0E) - The infinite canvas.
*   **Level 1 (Sections):** `surface-container` (#1A1919).
*   **Level 2 (Cards/Modules):** `surface-container-high` (#201F1F).
*   **Level 3 (Floating Overlays):** `surface-container-highest` (#262626) with 80% opacity and a 20px backdrop-blur.

### The "Glass & Gradient" Rule
To achieve "High-End Tech," utilize the **Signature Texture**:
*   **Gradients:** Use a linear gradient from `primary` (#AFA2FF) to `secondary` (#00CFFC) at a 135-degree angle for primary CTAs and hero highlights.
*   **Neon Glow:** Elements using the `secondary` (#00CFFC) token should carry a subtle outer glow: `0px 0px 15px rgba(0, 209, 255, 0.3)`.

---

## 3. Typography: Editorial Authority

We use a tri-font strategy to balance technical precision with readability.

*   **Display & Headlines (SpaceGrotesk):** Used for large-scale impact. The geometric construction conveys a "code-born" engineering soul. 
    *   *Usage:* `display-lg` (3.5rem) should be set with tight letter-spacing (-0.02em) to feel like a cohesive architectural block.
*   **Titles & Body (Manrope):** The workhorse font. It bridges the gap between the futuristic headlines and functional readability. 
    *   *Usage:* Use `body-lg` (1rem) for long-form technical descriptions.
*   **Labels (Inter):** Reserved for high-utility, small-scale data (status chips, micro-copy).
    *   *Usage:* `label-md` (0.75rem) in Uppercase with +0.05em tracking for a "system-monitored" look.

---

## 4. Elevation & Depth: Tonal Layering

Shadows in this system are not "dark spots"; they are ambient light occlusions.

*   **The Layering Principle:** Depth is achieved by placing `surface-container-lowest` cards on `surface-container-low` backgrounds. This "recessed" look feels more intentional than standard drop shadows.
*   **Ambient Shadows:** For floating modals, use a "Pulse Shadow." Instead of black, use a tinted shadow: `0px 20px 40px rgba(0, 0, 0, 0.6)` paired with a subtle `secondary` tint glow at the bottom edge.
*   **The Ghost Border:** If a separator is required for accessibility, use the `outline-variant` token (#494847) at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism:** All floating menus must use `surface-variant` (#262626) with a `0.6` alpha and `backdrop-filter: blur(12px)`. This integrates the UI into the background rather than having it "sit" on top.

---

## 5. Components: The Primitive Set

### Buttons
*   **Primary (Pulse):** Gradient background (`primary` to `secondary`), white text, `rounded-md`. State change: increase glow intensity on hover.
*   **Secondary (Ghost):** `outline-variant` ghost border (20% opacity) with `on_surface` text. 
*   **Tertiary (Minimal):** No background, `secondary` text color, underlined only on hover.

### Input Fields
*   **Base:** `surface-container-highest` background.
*   **Indicator:** Instead of a full border change on focus, use a 2px vertical "pulse line" on the left edge of the input using the `secondary` (#00CFFC) color.

### Chips & Status
*   **Selection Chips:** Use `secondary_container` with `on_secondary` text.
*   **Glow Variant:** For "Active" or "Live" states, use a small 4px circular dot with a `secondary` neon glow animation.

### Cards & Lists
*   **Rule:** No dividers. Use `spacing-4` (1.4rem) between list items. 
*   **Nesting:** Place `surface-container-high` items inside a `surface-container` wrapper to create structural hierarchy through color alone.

---

## 6. Do's and Don'ts

### Do:
*   **DO** use extreme typographic contrast. Pair a `display-lg` headline with `label-sm` metadata to create an editorial feel.
*   **DO** use "The Void." Allow large areas of `#0A0A0A` to exist without content to emphasize the premium nature of the software.
*   **DO** apply `rounded-xl` (0.75rem) only to large containers, and `rounded-sm` (0.125rem) to inner elements to create a nested "mechanical" look.

### Don't:
*   **DON'T** use pure white (#FFFFFF) for body text. Use `on_surface_variant` (#ADAAAA) to reduce eye strain and maintain the "dark mode" atmosphere.
*   **DON'T** use 100% opaque borders. It breaks the "Obsidian Pulse" illusion of depth.
*   **DON'T** use standard ease-in/out transitions. Use `cubic-bezier(0.16, 1, 0.3, 1)` (Expo Out) for all animations to mimic high-end hardware responsiveness.