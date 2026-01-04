import type { JSX } from "react";
import type { ServiceType } from "..";
import { Scissors, Sparkles } from "lucide-react";

type Service = {
  id: number;
  name: string;
  description: string;
  price: string;
  type: ServiceType;
  image: string;
  icon: JSX.Element;
};

export const services: Service[] = [

  {
    id: 1,
    name: "Corte Tradicional",
    description: "Corte clássico com acabamento na navalha",
    price: "R$ 40,00",
    type: "corte",
    image: "/img/corte1.png",
    icon: <Scissors className="text-secondary" />,
  },
  {
    id: 2,
    name: "Corte Degradê",
    description: "Degradê moderno com transições suaves",
    price: "R$ 45,00",
    type: "corte",
    image: "/img/corte2.png",
    icon: <Scissors className="text-secondary" />,
  },
  {
    id: 3,
    name: "Corte Social",
    description: "Corte alinhado ideal para o dia a dia",
    price: "R$ 40,00",
    type: "corte",
    image: "/img/corte3.png",
    icon: <Scissors className="text-secondary" />,
  },
  {
    id: 4,
    name: "Corte Fade",
    description: "Fade baixo, médio ou alto com acabamento preciso",
    price: "R$ 50,00",
    type: "corte",
    image: "/img/corte4.png",
    icon: <Scissors className="text-secondary" />,
  },
  {
    id: 5,
    name: "Corte Infantil",
    description: "Corte especial para crianças",
    price: "R$ 35,00",
    type: "corte",
    image: "/img/corte5.png",
    icon: <Scissors className="text-secondary" />,
  },

  {
    id: 6,
    name: "Barba Completa",
    description: "Barba desenhada com toalha quente",
    price: "R$ 35,00",
    type: "barba",
    image: "/img/barba1.png",
    icon: <Scissors className="text-secondary" />,
  },
  {
    id: 7,
    name: "Barba Simples",
    description: "Aparar e alinhar barba",
    price: "R$ 25,00",
    type: "barba",
    image: "/img/barba2.png",
    icon: <Scissors className="text-secondary" />,
  },

  {
    id: 8,
    name: "Sobrancelha Masculina",
    description: "Design e alinhamento de sobrancelha",
    price: "R$ 15,00",
    type: "sobrancelha",
    image: "/img/sobrancelha1.png",
    icon: <Sparkles className="text-secondary" />,
  },
  {
    id: 9,
    name: "Sobrancelha Premium",
    description: "Design detalhado com acabamento preciso",
    price: "R$ 20,00",
    type: "sobrancelha",
    image: "/img/sobrancelha2.png",
    icon: <Sparkles className="text-secondary" />,
  },
];
