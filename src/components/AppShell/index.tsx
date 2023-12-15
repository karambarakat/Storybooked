import {
  $,
  Signal,
  Slot,
  component$,
  noSerialize,
  useComputed$,
  useDynStyles,
  useId,
  useSignal,
  useStyles$,
  useStylesScoped$,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";
import useMediaQuery from "../../hooks/useMediaQuery";
import useMediaQuery$ from "../../hooks/useMediaQuery";

export interface Props {
  /**
   * size of unexpanded sidebar
   * @default 40px
   */
  w_1st: string;
  /**
   * size of expanded or opened sidebar
   * @default 200px
   */
  w_2nd: string;
  /**
   * breakpoint at which the sidebar is slidable
   */
  bp_1st: number;
  /**
   * breakpoint at which the sidebar is expandable
   */
  bp_2nd: number;
  /**
   * slide or expand on hover
   * @default "slide"
   */
  hover_behavior?: "slide" | "expand";
  /**
   * signal that controls sidebar to open, if not defined it will be auto
   * @default "auto"
   */
  open?: Signal<
    "open" | "close" | "auto" | "open_after_1st_bp" | "close_after_1st_bp"
  >;
}

const AppShell = component$((props: Props) => {
  const id = useId().replace(/-/g, "_").replace(/^\d/, "a");

  useDynStyles`
    .${id} .side {
      --w-1st: ${props.w_1st};
      --w-2nd: ${props.w_2nd};
      width: var(--w-1st);
    } 
    @media (min-width: ${props.bp_2nd}px) {
      .${id} .side {
        width: var(--w-2nd);
      }
    }
    @media (max-width: ${props.bp_1st - 1}px) {
      .${id} .side {
        width: 0;
      }
    }
  `;

  useStylesScoped$(`
    .main {
      display: flex;
      align-items: stretch;
      width: 100vw;  
    }
    .side, .side-inner {
      height: 100%;
    }
    .content {
      flex: 1;
    }
    .side-inner > :global(*), .content > :global(*) {
      height: 100%;
    }
  `);

  useDynStyles`
    @media (min-width: ${
      props.bp_1st //
    }px) AND (max-width: ${
      props.bp_2nd - 1 //
    }px) {
      .${id} .side-inner {
        --w-hover: ${props.w_2nd};
      }
    }
  `;
  const peek = useSignal(false);

  const onlyBig = useMediaQuery(
    noSerialize(() => `(min-width: ${props.bp_1st}px)`)
  );

  const forceWidth = useComputed$(() => {
    let status = props.open?.value || "auto";

    if (props.open?.value.endsWith("_after_1st_bp")) {
      if (onlyBig.value) {
        const force = props.open?.value.startsWith("open");
        return force
          ? { width: props.w_2nd }
          : {
              width: props.w_1st,
            };
      }

      status = "auto";
    }

    return status === "auto"
      ? false
      : status === "open"
        ? { width: props.w_2nd }
        : { width: props.w_1st };
  });

  const onMiddle = useMediaQuery(
    noSerialize(
      () => `
    (min-width: ${props.bp_1st}px) AND (max-width: ${props.bp_2nd - 1}px)`
    )
  );

  return (
    <div class={[id, "main"]}>
      <div
        class="side"
        style={
          forceWidth.value ||
          (peek.value && onMiddle.value && props.hover_behavior === "expand"
            ? { width: "fit-content" }
            : {})
        }
        onMouseOut$={() => (peek.value = false)}
        onMouseOver$={() => (peek.value = true)}
      >
        <div
          class="side-inner"
          style={
            forceWidth.value ||
            (peek.value && onMiddle.value ? { width: "var(--w-hover)" } : {})
          }
        >
          <Slot name="side" />
        </div>
      </div>

      <div class="content">
        <Slot name="content" />
      </div>
    </div>
  );
});

export default AppShell;
