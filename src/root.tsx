import { component$ } from '@builder.io/qwik'
import 'virtual:uno.css'
import 'tailwindcss-preflight/preflight.css'
import { Default } from './components/Accordion/stories'
import { DynamicStyle, StaticStyle } from './hooks/useDynStyles.stories'
import { CustomSlotAttempt } from './components/CustomeSlot/stories'
import useDynamicStyles$, { useStylesServer } from './hooks/useDynStyles'
import { AnimateHeight } from './hooks/useAnimateDimensions.stories'

const styles = ':uno: h-screen w-screen dark:bg-slate-800 dark:text-white'

export default component$(() => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body class="dark">
        {/* <CustomSlotAttempt.parameters.Render /> */}
        <div class={styles}>
          <Default.parameters.Render />
        </div>
      </body>
    </>
  )
})
