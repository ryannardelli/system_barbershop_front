type ContainerServicesProps = {
  children: React.ReactNode;
  className?: string;
}

export function ContainerServices({ children, className }: ContainerServicesProps) {
  return(
    <div className={`flex justify-between ${className}`}>
      {children}
    </div>
  );
}
