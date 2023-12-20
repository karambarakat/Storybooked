import { createContextId, useContextProvider, useId } from '@builder.io/qwik'

interface AccordionContext {
  id: string
  root: string
  trigger: string
  item: string
}

export const accordionContext = createContextId<AccordionContext>('accordion')

export const useInitAccordion = () => {
  const id = useId()

  useContextProvider(accordionContext, {
    id,
    root: `${id}-root`,
    trigger: `${id}-trigger`,
    item: `${id}-item`,
  })
}
