import { useContext } from 'react'
import { QuoteDialogContext } from './QuoteDialogContext'

/** Az ajánlatkérő modal megnyitása bárhonnan: openQuote({ audience, package }). */
export function useQuoteDialog() {
  const context = useContext(QuoteDialogContext)
  if (!context) throw new Error('A useQuoteDialog csak QuoteDialogProvider alatt használható.')
  return context
}
