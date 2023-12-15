import {
  Signal,
  noSerialize,
  useComputed$,
  useDynStyles,
  useId,
  useSignal,
} from "@builder.io/qwik";
import useMediaQuery from "../../hooks/useMediaQuery";

type ClassNames = {
  main: string;
  side: string;
  side_inner: string;
  content: string;
};

type Width = {
  w_1st: string;
  w_2nd: string;
};

type Breakpoints = {
  bp_1st: number;
  bp_2nd: number;
};

type Meta = {
  classNames: ClassNames;
  breakpoints: Breakpoints;
  width: Width;
};

export const useData = () => {
  const id = useId().replace(/-/g, "_").replace(/^\d/, "a");

  const main = `main-${id}`;
  const side = `side-${id}`;
  const side_inner = `side-inner-${id}`;
  const content = `content-${id}`;

  return { classNames: { main, side, side_inner, content } };
};

export const useBasicStructure = ({
  classNames: cn,
}: Pick<Meta, "classNames">) => {
  useDynStyles`
      .${cn.main} {
        display: flex;
        align-items: stretch;
        width: 100vw;  
      }
      .${cn.side}, .${cn.side_inner} {
        height: 100%;
      }
      .${cn.content} {
        z-index: -1;
        flex: 1;
      }
      .${cn.side_inner} > *, .${cn.content} > * {
        height: 100%;
      }
    `;
};

export const useResponsive = ({
  width: w,
  classNames: cn,
  breakpoints: bp,
}: Meta) => {
  useDynStyles`
      .${cn.side} {
        --w-1st: ${w.w_1st};
        --w-2nd: ${w.w_2nd};
        width: var(--w-1st);
      } 
  
      @media (min-width: ${bp.bp_2nd}px) {
        .${cn.side} {
          width: var(--w-2nd);
        }
      }
      @media (max-width: ${bp.bp_1st - 1}px) {
        .${cn.side} {
          width: 0;
        }
      }
  `;
};

export const useExpandOnHover = (
  strategy: "expand" | "slide",
  { classNames: c, breakpoints: bp, width }: Meta
) => {
  const sideStyle =
    strategy === "slide"
      ? `
    .${c.side}[data-hover] {
        width: fit-content;
    }`
      : "";
  useDynStyles`
    @media (min-width: ${bp.bp_1st}px) AND (max-width: ${bp.bp_2nd - 1}px) {
      ${sideStyle}
    .${c.side}[data-hover] .${c.side_inner} {    
    width: ${width.w_2nd};
    }
  `;
};

export const useForceWidth = (
  { classNames, width, breakpoints }: Meta,
  strategy: Signal<"auto" | "open" | "close">
) => {
  //   const strategy: "auto" | "open" | "close" = "auto";

  const small = useMediaQuery(
    noSerialize(() => `(max-width: ${breakpoints.bp_1st - 1}px)`)
  );

  useDynStyles`
    .${classNames.side}[data-force="w_1st"] {
      width: ${width.w_1st};
    }
    .${classNames.side}[data-force="w_1st"][data-hover] .${classNames.side_inner}  {
      width: auto !important;
    }
    .${classNames.side}[data-force="w_2nd"] {
      width: ${width.w_2nd};
    }
  `;

  const force = useComputed$(() => {
    return strategy.value === "auto" || small.value
      ? false
      : strategy.value === "open"
        ? "w_2nd"
        : "w_1st";
  });

  return { force };
};
