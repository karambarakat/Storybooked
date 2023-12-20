import { component$, useId } from '@builder.io/qwik'
import { render } from '../../utils/storybook/viewport'
import Accordion from './component'
import Attempt from './component'

export default {
  title: 'Accordion',
  component: Accordion as any,
  render,
} satisfies SB.Meta<typeof Accordion>

export const CustomSlotAttempt = {
  parameters: {
    Render: component$(() => {
      return (
        <Attempt>
          <div q:slot="root" class="close">
            root endofroot
          </div>
          <div q:slot="sub">Sub</div>
        </Attempt>
      )
    }),
  },
} satisfies SB.Story<typeof Accordion>
