/// <reference types="../types/SB.d.ts" />
import { Parameters } from "storybook-framework-qwik";
import "virtual:uno.css";
import "tailwindcss-preflight/preflight.css";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";
import { addons } from "@storybook/preview-api";
import {
  Slot,
  component$,
  useSignal,
  useStyles$,
  useTask$,
} from "@builder.io/qwik";

const channels = addons.getChannel();

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
``;

export default {
  parameters: {
    darkMode: {
      darkClass: "dark",
      lightClass: "light",
      classTarget: "body",
      stylePreview: true,
    },
  },
  decorators: [
    (Story) => {
      return (
        <div class="font-sans">
          <Mode>
            <Story />
          </Mode>
        </div>
      );
    },
  ],
} satisfies SB.Meta<{}>;

const Mode = component$(() => {
  const darkMode = useSignal(false);
  useTask$(() => {
    channels.on(DARK_MODE_EVENT_NAME, (args) => {
      darkMode.value = args;
    });
  });

  return (
    <div class="dark:bg-zinc-900 dark:text-white min-h-screen flex">
      <script
        dangerouslySetInnerHTML={`
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const darkModeOn = darkModeMediaQuery.matches;
document.head.classList.add(darkModeOn ? "dark" : "light");
      `}
      />
      <Slot />
    </div>
  );
});
