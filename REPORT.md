
# Frontend Streams Assessment

This project is a frontend implementation of **Page 2 of the dashboard**, completed as part of the Peppermint Frontend Assessment.

---

## Approach & Implementation

My approach focused on **meeting the functional requirements first**, then enhancing the experience with clean architecture and refined interactions where appropriate.

### 1. Dashboard & Requirements Alignment

* **Demographic Summary Cards**
  Implemented the demographic summary cards as specified in the Figma design, using **static JSON data** as required.

* **Horizontal Cards Interaction (Section 2)**
  The interactive horizontal card behavior was fully implemented and aligned with the provided prototype reference. The interaction supports:

  * Card stacking and reordering
  * Pointer-based drag interactions
  * Smooth snap-back and swap animations

* **Scope Decisions (Per Instructions)**
  In line with the assessment notes:

  * The **navigation bar and filter buttons were intentionally ignored**
  * Focus was placed on the **dashboard content and interactions**, which were explicitly prioritized in the brief

### 2. Interactivity & State Management

* **Custom Card Stack Logic**
  Instead of using a heavy animation or gesture library(like framer, etc ), I implemented the horizontal card interaction using:

  * React state
  * Pointer Events API
  * Custom animation logic for swapping and snapping behavior

  This ensured:

  * Better performance
  * Clear, maintainable logic
  * Full control over interaction behavior

* **Analyze Flow Transition**
  Clicking “Analyze” transitions the UI from a prompt-driven state to a data-rich analytical view, matching the intended conversational analytics flow.

### 3. Visual & UX Considerations

* **Pixel-Aligned Layouts**
  Care was taken to closely match spacing, typography, and layout behavior from the Figma design.
* **Micro-Interactions**
  Subtle hover states, transitions, and tooltips were added
* **Gradients & Styling**
  Custom gradients and borders were used to replicate the look and feel shown in the design files.

---

## Architecture & Tech Stack

* **Next.js** — Application framework
* **Tailwind CSS** — Utility-first styling and responsive layouts
* **Lucide React & Custom Assets** — Iconography

Component structure and naming were kept modular and readable to align with best practices.

---

## Assumptions & Design Decisions

### Desktop-First Focus

Given the enterprise nature of the product and the complexity of the dashboard visuals, I assumed **desktop as the primary target platform**, which aligns with the provided designs.

### Mobile Responsiveness

Although no mobile designs were supplied, responsive behavior was implemented:

* Layout collapses into a single-column flow on smaller screens
* Typography scales appropriately
* Spacing and interaction areas remain usable on mobile

### Limited Route Scope

For this assessment, the **Streams view** is treated as the active route. This allows the core interaction and dashboard behavior to be demonstrated without implementing unrelated navigation routes.
