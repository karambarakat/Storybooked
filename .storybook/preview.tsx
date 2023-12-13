import { Parameters } from "storybook-framework-qwik";
import "virtual:uno.css";
import "tailwindcss-preflight/preflight.css";

export const parameters: Parameters = {
  a11y: {
    config: {},
    options: {
      checks: { "color-contrast": { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
  options: {
    showRoots: true,
  },
  docs: {
    iframeHeight: "200px",
  },
};
