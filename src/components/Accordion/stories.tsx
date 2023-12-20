import {
  component$,
  useId,
  useStyles$,
  useStylesServer,
} from '@builder.io/qwik'
import { render } from '../../utils/storybook/viewport'
import Accordion from './component'
import { useInitAccordion } from './hooks'

export default {
  title: 'Accordion',
  component: Accordion as any,
  render,
} satisfies SB.Meta<typeof Accordion>

export const Default = {
  parameters: {
    Render: component$(() => {
      useInitAccordion()

      useStylesServer`
        .root {
          border: 1px solid black;
        }
      `

      return (
        <Accordion type="single">
          {Array.from({ length: 3 }).map((_, i) => {
            return (
              <div key={i}>
                <Accordion.Trigger>Trigger Item {i}</Accordion.Trigger>
                <Accordion.Item>Content Item {i}</Accordion.Item>
              </div>
            )
          })}
        </Accordion>
      )
    }),
  },
} satisfies SB.Story<typeof Accordion>
