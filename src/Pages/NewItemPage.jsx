import Panel from '../components/Panel.jsx'
import ItemForm from '../components/ItemForm.jsx'
import { useFinances } from '../context/FinancesContext.js'
import { useNavigate } from 'react-router-dom'


  function NewItemPage() {
  const { addGame } = useFinances()
  const navigate = useNavigate()

  function handleSave(values) {
    const newGame = { id: String(Date.now()), ...values }
    addGame(newGame)
    navigate('/lista')
  }

  return (
    <Panel
      id="new-item"
      title="Novo jogo"
      className="md:col-span-2 xl:row-span-3"
    >
      <ItemForm onSave={handleSave} />
    </Panel>
  )
}

export default NewItemPage
