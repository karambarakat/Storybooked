import { Slot, SlotCustom, component$ } from '@builder.io/qwik'

const Attempt = component$<{}>((props) => {
  return (
    <div>
      <SlotCustom name="root" class="hello world" />
    </div>
  )
})

export default Attempt
