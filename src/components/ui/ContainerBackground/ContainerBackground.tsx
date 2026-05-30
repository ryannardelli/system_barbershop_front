type ContainerBackground = {
  children: React.ReactNode;
}

export function ContainerBackground({ children }: ContainerBackground) {
  return(
    <section className="min-h-screen space-y-8 bg-primary text-gray-100 p-6">
      {children}
    </section>
  );
}
