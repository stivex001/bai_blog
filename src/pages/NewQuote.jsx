import React from 'react'
import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {

  }
  return (
    <div>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </div>
  )
}

export default NewQuote