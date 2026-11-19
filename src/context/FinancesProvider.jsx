import { useState } from 'react'
import { FinancesContext } from './FinancesContext.js'
import { transactions as initialTransactions } from '../data/transactions.js'

function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = useState(initialTransactions)

  function addTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction])
  }

  const value = { transactions, addTransaction }

  return <FinancesContext value={value}>{children}</FinancesContext>
}

export default TransactionsProvider
