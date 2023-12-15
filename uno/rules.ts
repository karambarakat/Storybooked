import { Rule } from "unocss";

export const isolateRule: Rule[] = [
  [
    "isolate",
    {
      isolation: "isolate",
    },
  ],
  [
    "isolate-none",
    {
      isolation: "auto",
    },
  ],
];

export const truncateRule: Rule[] = [
  [
    "truncate",
    {
      "white-space": "nowrap",
      overflow: "hidden",
      "text-overflow": "ellipsis",
    },
  ],
];

export const srOnlyRule: Rule[] = [
  [
    "sr-only",
    {
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: "0",
      margin: "-1px",
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      borderWidth: "0",
    },
  ],
];

export const widthHeightRule: Rule[] = [
  ["w-fit", { width: "fit-content" }],
  ["h-fit", { height: "fit-content" }],
  ["w-min", { width: "min-content" }],
  ["h-min", { height: "min-content" }],
  ["w-max", { width: "max-content" }],
  ["h-max", { height: "max-content" }],
];

export const filterRule: Rule[] = [
  ["invert", { filter: "invert(1)" }],
  ["grayscale", { filter: "grayscale(1)" }],
  ["sepia", { filter: "sepia(1)" }],
  ["hue-rotate", { filter: "hue-rotate(90deg)" }],
  ["blur", { filter: "blur(4px)" }],
  ["brightness", { filter: "brightness(0.5)" }],
  ["contrast", { filter: "contrast(0.5)" }],
  ["drop-shadow", { filter: "drop-shadow(4px 4px 10px rgba(0,0,0,0.4))" }],
  ["saturate", { filter: "saturate(8)" }],
  ["opacity", { filter: "opacity(50%)" }],
];
