import { User } from "lucide-react";

type SpecialtyTagsProps = {
  specialties: string[];
};

export function SpecialtyTags({ specialties }: SpecialtyTagsProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {specialties.map((specialty, index) => (
        <span
        key={index}
         className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 inset-ring inset-ring-yellow-600/20">
          {specialty}
        </span>
      ))}
    </div>
  );
}
