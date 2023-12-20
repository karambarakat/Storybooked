import { $, Signal, useStylesServer, useVisibleTask$ } from '@builder.io/qwik'

const useDynamicStyles$ = (string: TemplateStringsArray, ...args: Signal[]) => {
  const str = string.raw
  const evl = $(() => {
    return str.reduce((acc, curr, i) => {
      return acc + curr + (args[i]?.value || '')
    }, '')
  })

  const id = useStylesServer(string, ...args.map((s) => s.value))

  useVisibleTask$(({ track }) => {
    args.forEach((arg) => {
      track(arg)
    })

    const styleEl = document.querySelector(`[q\\:style="${id}"]`)

    if (!styleEl) {
      return
    }

    evl().then((v) => {
      styleEl.textContent = v
    })
  })
  // useStyles$(evl)
  return string[0]
}

export { useStylesServer }
export default useDynamicStyles$
