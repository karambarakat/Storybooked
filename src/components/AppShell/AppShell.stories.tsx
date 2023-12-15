import AppShell from ".";

export default {
  title: "AppShell/AppShell",
  parameters: {
    layout: "fullscreen",
  },
  component: AppShell as any,
  render: (props: any) => (
    <AppShell {...props}>
      <div q:slot="side" class="border border-teal">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} class="m-2 h-7 border border-teal-2 rounded"></div>
        ))}
      </div>
      <div q:slot="content" class="border border-teal">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} class="m-2 h-7 border border-teal-2 rounded"></div>
        ))}
      </div>
    </AppShell>
  ),
} satisfies SB.Meta<typeof AppShell>;

export const Basic = {
  args: {
    bp_1st: 300,
    bp_2nd: 550,
    w_1st: "44px",
    w_2nd: "200px",
    open: {
      value: "close_after_1st_bp",
    },
  },
} satisfies SB.Story<typeof AppShell>;
