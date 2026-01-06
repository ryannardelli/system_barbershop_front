import type { JSX } from "react";
import { Star, Scissors } from "lucide-react";

export type Barber = {
  id: number;
  name: string;
  role: "Barbeiro" | "Barbeiro Sênior" | "Master Barber";
  description: string;
  rating: number; // pontuação média
  reviews: number; // quantidade de avaliações
  experience: string; // tempo de experiência
  specialties: string[];
  image: string;
  icon: JSX.Element;
  available: boolean;
};

export const professional: Barber[] = [
  {
    id: 1,
    name: "Lucas Andrade",
    role: "Barbeiro Sênior",
    description: "Especialista em cortes clássicos e degradês modernos.",
    rating: 4.8,
    reviews: 128,
    experience: "6 anos",
    specialties: ["Degradê", "Corte Social", "Barba Completa"],
    image: "/img/professional1.png",
    icon: <Scissors className="text-secondary" />,
    available: true,
  },
  {
    id: 2,
    name: "Rafael Souza",
    role: "Barbeiro",
    description: "Atendimento rápido com foco em cortes do dia a dia.",
    rating: 4.5,
    reviews: 89,
    experience: "3 anos",
    specialties: ["Corte Tradicional", "Corte Infantil"],
    image: "/img/professional2.png",
    icon: <Scissors className="text-secondary" />,
    available: true,
  },
  {
    id: 3,
    name: "Bruno Martins",
    role: "Master Barber",
    description: "Referência em visagismo masculino e acabamento premium.",
    rating: 5.0,
    reviews: 214,
    experience: "10 anos",
    specialties: ["Fade", "Barba Premium", "Sobrancelha"],
    image: "/img/professional3.png",
    icon: <Star className="text-secondary" />,
    available: false,
  },
  {
    id: 4,
    name: "Pedro Lima",
    role: "Barbeiro Sênior",
    description: "Perfeccionista, focado em detalhes e simetria.",
    rating: 4.7,
    reviews: 156,
    experience: "7 anos",
    specialties: ["Fade", "Degradê", "Barba Simples"],
    image: "/img/professional4.png",
    icon: <Scissors className="text-secondary" />,
    available: true,
  },
  {
    id: 5,
    name: "Matheus Rocha",
    role: "Barbeiro",
    description: "Estilo moderno e ótimo relacionamento com clientes.",
    rating: 4.6,
    reviews: 102,
    experience: "4 anos",
    specialties: ["Corte Moderno", "Sobrancelha Masculina"],
    image: "/img/professional5.png",
    icon: <Scissors className="text-secondary" />,
    available: true,
  },

    {
      id: 6,
      name: "Diego Fernandes",
      role: "Master Barber",
      description: "Especialista em cortes personalizados e barba com toalha quente.",
      rating: 4.9,
      reviews: 187,
      experience: "9 anos",
      specialties: ["Corte Personalizado", "Barba Completa", "Fade Alto"],
      image: "/img/professional6.png",
      icon: <Star className="text-secondary" />,
      available: true,
  }

];
