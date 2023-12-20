import { StorybookConfig } from "storybook-framework-qwik";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-dark-mode",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "storybook-framework-qwik",
  },
  // core: {
  //   renderer: "storybook-framework-qwik",
  // },
  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/stories.@(js|jsx|ts|tsx)",
    "../src/hooks/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  viteFinal: async (config: any) => {
    return config;
  },
};

export default config;
