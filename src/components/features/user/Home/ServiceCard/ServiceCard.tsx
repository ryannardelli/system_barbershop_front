type ServiceCardProps = {
  title: string;
  price: number;
}

export function ServiceCard({ title, price }: ServiceCardProps) {
  return(
    <div className="bg-primary/80 border border-white/10 rounded-2xl p-4 text-center hover:border-secondary transition">
      <p className="font-medium">{title}</p>
      <p className="text-secondary mt-2 font-semibold">{`R$ ${price}`}</p>
    </div>
  );
}
