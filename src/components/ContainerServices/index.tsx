type ContainerServicesProps = {
  children: React.ReactNode;
}

export function ContainerServices({ children }: ContainerServicesProps) {
  return(
    <div className="flex justify-between">
      {children}
    </div>
  );
}
