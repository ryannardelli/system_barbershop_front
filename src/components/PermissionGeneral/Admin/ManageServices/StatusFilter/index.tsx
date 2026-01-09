export function StatusFilter() {
    return (
        <select className="w-full md:w-48 rounded-xl border border-secondary/20 bg-primary py-2 px-3 text-sm focus:border-primary focus:outline-none">
        <option value="all">Todos</option>
        <option value="active">Ativos</option>
        <option value="inactive">Inativos</option>
    </select>
);
}
