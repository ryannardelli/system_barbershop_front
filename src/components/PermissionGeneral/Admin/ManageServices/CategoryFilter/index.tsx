export function CategoryFilter() {
    return (
      <select className="w-full md:w-48 rounded-xl border border-secondary/20 bg-primary py-2 px-3 text-sm focus:border-primary focus:outline-none">
      <option value="">Todas categorias</option>
      <option value="corte">Corte</option>
      <option value="barba">Barba</option>
      <option value="pacote">Pacotes</option>
      </select>
    );
}
