import AppShell from ".";
import { withWidth } from "../../utils/storybook/viewport";
import { userEvent, within } from "@storybook/testing-library";

export default {
  title: "AppShell/AppShell",
  parameters: {
    layout: "fullscreen",
  },
  component: AppShell as any,
  render: (props: any) => (
    <AppShell {...props}>
      <div q:slot="side" aria-label="side" class="bg-white border border-teal">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} class="m-2 h-7 border border-teal-2 rounded"></div>
        ))}
      </div>
      <div
        q:slot="content"
        aria-label="content"
        class="bg-white border border-teal"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} class="m-2 h-7 border border-teal-2 rounded"></div>
        ))}
      </div>
    </AppShell>
  ),
} satisfies SB.Meta<typeof AppShell>;

export const Small = {
  parameters: {
    viewport: withWidth(250),
  },
  args: {
    bp_1st: 300,
    bp_2nd: 500,
    w_1st: "44px",
    w_2nd: "200px",
    open: {
      value: "auto",
    },
  },
} satisfies SB.Story<typeof AppShell>;

export const Medium = {
  parameters: {
    viewport: withWidth(400),
  },
  args: Small.args,
} satisfies SB.Story<typeof AppShell>;

export const MediumHovered = {
  parameters: {
    viewport: withWidth(400),
  },
  args: Small.args,
  play: async (ctx) => {
    const canvas = within(ctx.canvasElement);
    const side = await canvas.findByLabelText("side");
    userEvent.hover(side);
  },
} satisfies SB.Story<typeof AppShell>;

export const MediumHoveredExpand = {
  parameters: Medium.parameters,
  args: { ...Medium.args, expand: "expand" },
  play: MediumHovered.play,
} satisfies SB.Story<typeof AppShell>;

export const Large = {
  parameters: {
    viewport: withWidth(550),
  },
  args: Small.args,
} satisfies SB.Story<typeof AppShell>;
