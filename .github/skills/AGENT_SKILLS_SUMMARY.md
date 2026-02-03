# Agent Skills Summary

## 1. code-review

**Capabilities:**
- Automates code review for all modified files in a commit or pull request.
- Checks for code style, readability, best practices, security, and documentation.
- Provides structured feedback: what was good, what was bad, and what could be improved.
- Includes a best practices checklist for reviewers.

**How to Use:**
- Identify all modified files in your pull request or commit.
- For each file, review the code for style, maintainability, best practices, security, and documentation.
- Provide feedback in three sections:
  - What was good
  - What was bad
  - What could be improved
- Use the provided example structure and checklist to guide your review.

---

## 2. composition-patterns

**Capabilities:**
- Guides the use of React composition patterns for scalable, maintainable components.
- Helps avoid boolean prop proliferation by using compound components, state lifting, and internal composition.
- Prioritizes rules for component architecture, state management, implementation patterns, and React 19 APIs.

**How to Use:**
- Reference when refactoring components with many boolean props, building reusable libraries, or designing flexible APIs.
- Apply the guidelines when reviewing or designing component architecture, especially with compound components or context providers.
- Use the rule categories (architecture, state, patterns, React 19) to prioritize improvements.

---

## 3. festo-guidelines

**Capabilities:**
- Provides official Festo BDAI design tokens for colors, typography, spacing, and animation.
- Ensures consistent branding, theming, and UI development across all Festo web apps.
- Includes CSS variable names for both light and dark modes, and semantic color tokens.

**How to Use:**
- Use the provided design tokens in your stylesheets or components.
- Reference the color, typography, and spacing variables to ensure visual consistency.
- Apply the semantic color tokens for UI elements like success, warning, error, and info states.

---

## 4. react-best-practices

**Capabilities:**
- Offers comprehensive performance optimization guidelines for React and Next.js applications, maintained by Vercel.
- Contains rules for eliminating waterfalls, optimizing bundle size, server/client performance, re-rendering, and advanced patterns.
- Prioritizes rules by impact to guide code reviews and refactoring.

**How to Use:**
- Reference when writing, reviewing, or refactoring React/Next.js code.
- Use the rule categories to focus on the most impactful optimizations first (e.g., async, bundle, server, client).
- Apply the guidelines to improve performance, reduce load times, and optimize data fetching.

---

## 5. react-native-skills

**Capabilities:**
- Lists best practices for React Native and Expo apps, focusing on performance, animations, UI patterns, and platform-specific optimizations.
- Covers list and scroll performance, animations with Reanimated, image/media handling, and native module configuration.
- Useful for structuring monorepo projects with native dependencies.

**How to Use:**
- Reference when building or optimizing React Native/Expo apps.
- Apply the rules for list performance, animation, navigation, UI patterns, and state management.
- Use the guidelines to ensure efficient rendering and platform-specific best practices.

---

## 6. web-design-guidelines

**Capabilities:**
- Reviews UI code for compliance with Web Interface Guidelines, including accessibility and UX best practices.
- Fetches the latest guidelines from a remote source before each review.
- Outputs findings in a concise file:line format for easy reference.

**How to Use:**
- When reviewing UI code, fetch the latest guidelines from the provided URL.
- Read the specified files or prompt the user for files/patterns to review.
- Apply all rules from the fetched guidelines and output findings as specified.
- If no files are specified, ask the user which files to review.
