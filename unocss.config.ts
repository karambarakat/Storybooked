// $ npm i -D unocss @unocss/preset-mini @unocss/reset @unocss/transformer-variant-group animated-unocss
// uno.config.ts
import myPreset from "./uno/preset";
import { defineConfig } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import presetMini from "@unocss/preset-mini";
import { variantParentMatcher } from "@unocss/preset-mini/utils";
import transformerCompileClass from "@unocss/transformer-compile-class";
import { animatedUno } from "animated-unocss";

export default defineConfig({
  content: {
    filesystem: ["src/**/*.{ts,tsx}", ".storybook/*.{ts,tsx}"],
  },
  shortcuts: [],
  rules: [],
  theme: {
    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  variants: [
    variantParentMatcher("height", "@media (max-height: 500px)"),
    variantParentMatcher("lt-height", "@media (min-height: 500px)"),
  ],
  transformers: [transformerVariantGroup(), transformerCompileClass()],
  presets: [
    myPreset({}),
    presetMini({
      dark: "class",
    }),
    animatedUno(),
  ],
});
