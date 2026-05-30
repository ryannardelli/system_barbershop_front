type ContainerOverviewStatsProps = {
  children: React.ReactNode;
}

export function ContainerOverviewStats({ children }: ContainerOverviewStatsProps) {
  return(
    <section className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {children}
      </div>
    </section>
  );
}
