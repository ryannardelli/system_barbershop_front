import { Star, User } from "lucide-react";

type BarberCardProps = {
  name: string;
  rating: number;
}

export function BarberCard({ name, rating }: BarberCardProps) {
  const totalStars = 5;

  return (
    <div className="bg-primary/80 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-secondary/20 text-secondary flex items-center justify-center">
        <User className="w-6 h-6" />
      </div>

      <div>
        <p className="font-medium">{name}</p>

        <div className="flex gap-1">
          {Array.from({ length: totalStars }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={
                i < rating
                  ? "text-secondary fill-secondary"
                  : "text-gray-600"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
