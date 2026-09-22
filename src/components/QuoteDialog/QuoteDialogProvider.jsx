import { useCallback, useMemo, useState } from 'react'
import Modal from '../Modal/Modal'
import QuoteForm from '../QuoteForm/QuoteForm'
import { QuoteDialogContext } from './QuoteDialogContext'
import { quoteCopy } from '../../data/quote'

/** Az ajánlatkérő modal bárhonnan megnyitható a useQuoteDialog() hookkal. */
export function QuoteDialogProvider({ children }) {
  const [request, setRequest] = useState(null)

  const openQuote = useCallback((options = {}) => {
    setRequest({ ...options, audience: options.audience === 'private' ? 'private' : 'business' })
  }, [])

  const closeQuote = useCallback(() => setRequest(null), [])

  const value = useMemo(() => ({ openQuote, closeQuote }), [openQuote, closeQuote])
  const audience = request?.audience ?? 'business'

  return (
    <QuoteDialogContext.Provider value={value}>
      {children}
      <Modal open={Boolean(request)} onClose={closeQuote} title={quoteCopy[audience].title}>
        {request && (
          <QuoteForm
            key={`${audience}-${request.package ?? ''}`}
            audience={audience}
            preselectedPackage={request.package}
            onClose={closeQuote}
          />
        )}
      </Modal>
    </QuoteDialogContext.Provider>
  )
}
