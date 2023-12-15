import { Preset, PresetFactory, Rule, definePreset } from "unocss";
import {
  isolateRule,
  filterRule,
  srOnlyRule,
  truncateRule,
  widthHeightRule,
} from "./rules";

type Options = {
  // hi?: string
};

export default definePreset((options: Options) => {
  return {
    name: "my-preset",
    rules: Array<Rule>().concat(
      isolateRule,
      filterRule,
      srOnlyRule,
      truncateRule,
      widthHeightRule
    ),
    variants: [
      // variantParentMatcher("height", "@media (max-height: 500px)"),
      // variantParentMatcher("lt-height", "@media (min-height: 500px)"
    ],
  } satisfies Preset;
}) as PresetFactory<object, Options>;
