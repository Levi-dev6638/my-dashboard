import { createContext, useContext } from 'react'

export const FinancesContext = createContext(null)

export function useFinances() {
  const context = useContext(FinancesContext)
  if (!context) {
    throw new Error('useFinances() precisa estar dentro do <FinancesProvider>.')
  }
  return context
}
