function Header (){
  return (
    <header
    className="flex flex-col gap-2 border-b-4 border-primary bg-surface px-4 py-6
    md:flex-row md:itens-baseline md:justify-between md:px-8">
     <h1 className="font-heading text-2xl font-bold md:text-3xl">
      Dashboard . Finanças
     </h1>
     <p className="text-muted">Minhas Finanças</p>
    </header>
  )
}
export default Header
