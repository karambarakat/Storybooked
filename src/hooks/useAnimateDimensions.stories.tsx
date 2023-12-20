import { component$, useSignal } from '@builder.io/qwik'
// import useAnimateHeight from './useAnimateDimensions'
import useAnimateHeight from './useAnimateDimensions'

export default {
  title: 'hooks/useAnimate',
  component: (() => {
    return <div>hello</div>
  }) as any,
} satisfies SB.Meta<any>

const outer =
  ':uno: border border-amber rounded-lg p-4 m-auto select-none max-w-80vw overflow-hidden'
const container = ':uno: grid grid-cols-6 gap-1'
const inner = ':uno: border p-1 border-blue-500 rounded-lg'

export const AnimateHeight = {
  parameters: {
    Render: component$(() => {
      const signal = useSignal(false)
      const ref = useAnimateHeight(signal)

      return (
        <div>
          <div
            ref={ref}
            style={{ '--transition': '500ms ease-in' }}
            class={outer}
            onClick$={() => (signal.value = !signal.value)}
          >
            changing in height in 3s, or Click on the box
            <div class={container}>
              {Array.from({ length: signal.value ? 4 : 16 }).map((_, i) => (
                <div class={inner} key={i}>
                  line {i}
                </div>
              ))}
            </div>
          </div>
          this line will be pushed soothly
        </div>
      )
    }) as any,
  } as any,

  render: (props, ctx) => {
    return <ctx.parameters.Render {...props} />
  },
} satisfies SB.Story<any>
