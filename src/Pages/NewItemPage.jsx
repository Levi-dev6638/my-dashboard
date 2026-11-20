import Panel from '../components/Panel.jsx'
import ItemForm from '../components/ItemForm.jsx'

function NewItemPage() {
  function handleSave(values) {
    console.log(values)
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
