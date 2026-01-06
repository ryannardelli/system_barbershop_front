type CardGridProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

export function CardGrid<T>({
  items,
  renderItem,
}: CardGridProps<T>) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(renderItem)}
    </div>
  );
}
