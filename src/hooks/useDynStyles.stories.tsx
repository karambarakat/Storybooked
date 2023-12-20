import {
  $,
  Signal,
  component$,
  useSignal,
  useStyles$,
  useStylesServer,
  useTask$,
  useVisibleTask$,
} from '@builder.io/qwik'
import useDynStyles$ from './useDynStyles'
import { render } from '../utils/storybook/viewport'
import useDynamicStyles$ from './useDynStyles'

export default {
  title: 'hooks/useDynStyles',
  component: (() => {
    return <div>hello</div>
  }) as any,
} satisfies SB.Meta<any>

const sytles = ':uno: rounded m-auto w-72 h-72'

export const StaticStyle = {
  parameters: {
    Render: component$(() => {
      const color = useSignal(() => {
        return (Math.random() * 255).toFixed(0)
      })

      useStylesServer`
      .animated {
        background-color: hsl(${color.value}, 100%, 70%);
        padding: 1rem;
      }
      body.dark .animated {
        background-color: hsl(${color.value}, 100%, 20%);
        color: white;
      }
      `

      return (
        <div
          class={['animated', sytles]}
          onClick$={() => {
            color.value = (Math.random() * 255).toFixed(0)
          }}
        >
          this element will be animated dynamically <br />
          {String(color.value)}
        </div>
      )
    }) as any,
  } as any,

  render,
} satisfies SB.Story<any>

export const DynamicStyle = {
  parameters: {
    Render: component$(() => {
      const color = useSignal(() => {
        return (Math.random() * 255).toFixed(0)
      })

      useDynamicStyles$`
      .animated {
        background-color: hsl(${color}, 100%, 70%);
        padding: 1rem;
      }
      body.dark .animated {
        background-color: hsl(${color}, 100%, 20%);
        color: white;
      }
      `

      return (
        <div
          class={['animated', sytles]}
          onClick$={() => {
            color.value = (Math.random() * 255).toFixed(0)
          }}
        >
          this element will be animated dynamically <br />
          {String(color.value)}
        </div>
      )
    }) as any,
  } as any,

  render: (props, ctx) => {
    return <ctx.parameters.Render {...props} />
  },
} satisfies SB.Story<any>
