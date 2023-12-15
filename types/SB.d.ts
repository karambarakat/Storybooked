import type { Meta as _Meta, StoryObj } from "storybook-framework-qwik";
import { Meta as __Meta } from "storybook-framework-qwik/*";
import { updateStore } from "storybook-dark-mode/dist/ts/Tool";

export interface _Parameter {
  layout?: "fullscreen" | "centered";
  darkMode?: Partial<Parameters<typeof updateStore>[0]>;
  viewport?: {
    defaultViewport?: "mobile1" | "mobile2" | "tablet" | "viewport";
    defaultOrientation?: "portrait" | "landscape";
    disable?: boolean;
    viewports?: Record<
      string,
      {
        name: string;
        styles: Record<string, string>;
        type?: "mobile" | "desktop" | "tablet";
      }
    >;
  };
}

export type _Tags = "autodocs";

export type _ExpDecorator = (
  S: () => JSX.Element,
  ctx: { parameters?: Partial<_Parameter>; tags?: _Tags[] }
) => JSX.Element;

declare global {
  namespace SB {
    export type Decorator = _ExpDecorator;

    export type Parameter = Partial<_Parameter>;

    export type Meta<C extends Record<string, any>> = Omit<
      __Meta<C>,
      "parameters" | "tags"
    > & {
      parameters?: _Parameter;
      tags?: _Tags[];
    };

    export type Story<C extends Record<string, any>> = Omit<
      StoryObj<C>,
      "parameters" | "tags"
    > & {
      parameters?: _Parameter;
      tags?: _Tags[];
    };

    export type Tags = _Tags;
  }
}
