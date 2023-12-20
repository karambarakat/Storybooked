import {
  Signal,
  Slot,
  SlotCustom,
  component$,
  createContextId,
  useContext,
} from '@builder.io/qwik'

import { accordionContext } from './hooks'

interface BaseProps {}

interface AccordionProps extends BaseProps {
  /**
   * Determines whether one or multiple items can be opened at the same time.
   */
  type: 'single' | 'multiple'
  /**
   * Controls the open state of the accordion.
   */
  signal?: Signal<boolean>
  /**
   * Determines whether the user can interact with the accordion.
   */
  disabled?: boolean
}

const Accordion = component$<AccordionProps>((props) => {
  const { root } = useContext(accordionContext)
  return (
    <div class={[root]}>
      <Slot />
    </div>
  )
})

const Trigger = component$<BaseProps>((props) => {
  const { trigger } = useContext(accordionContext)
  return (
    <div class={[trigger]}>
      <Slot name="main" />
    </div>
  )
})

const Item = component$<BaseProps>((props) => {
  const { item } = useContext(accordionContext)
  return (
    <div class={[item]}>
      <Slot name="main" />
    </div>
  )
})

export default Object.assign(Accordion, { Trigger, Item })
