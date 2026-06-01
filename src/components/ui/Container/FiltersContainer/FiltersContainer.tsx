type FiltersContainerProps = {
  children: React.ReactNode;
}

export function FiltersContainer({ children }: FiltersContainerProps) {
  return(
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {children}
    </div>
  );
}
