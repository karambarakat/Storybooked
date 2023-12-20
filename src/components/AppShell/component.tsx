import { Signal, Slot, component$, useSignal } from "@builder.io/qwik";
import * as hooks from "./hooks";

const AppShell = component$(() => {
  const { classNames } = hooks.useData();
  const breakpoints = {
    bp_1st: 300,
    bp_2nd: 500,
  };
  const width = {
    w_1st: "44px",
    w_2nd: "200px",
  };

  hooks.useBasicStructure({ classNames });

  hooks.useResponsive({ classNames, breakpoints, width });

  hooks.useExpandOnHover("expand", { classNames, breakpoints, width });

  const hover = useSignal(false);

  const { force } = hooks.useForceWidth(
    { breakpoints, width, classNames },
    { value: "open" }
  );

  return (
    <div class={[classNames.main]}>
      <div
        class={classNames.side}
        onMouseOut$={() => (hover.value = false)}
        onMouseOver$={() => (hover.value = true)}
        data-hover={hover.value}
        data-force={force.value}
      >
        <div class={classNames.side_inner}>
          <Slot name="side" />
        </div>
      </div>

      <div class={classNames.content}>
        <Slot name="content" />
      </div>
    </div>
  );
});

export default AppShell;
