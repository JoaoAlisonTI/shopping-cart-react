export default function CardHeader() {
  return (
      <header className="box-border flex justify-between py-6 pl-12 pr-8 bg-cinza text-md">
        <p className="text-gray-300">Seu carrinho tem <span className="font-semibold text-white">5 itens</span></p>
        <button className="text-gray-300">X</button>
      </header>
    )
}