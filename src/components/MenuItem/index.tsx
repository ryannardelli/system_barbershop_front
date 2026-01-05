// import { RouterLink } from "../RouterLink";

// type MenuItemProps = {
//   icon: React.ElementType;
//   label: string;
//   collapsed: boolean;
//   href?: string;
//   danger?: boolean;
// };

// export function MenuItem({
//   icon: Icon,
//   label,
//   collapsed,
//   href,
//   danger = false,
// }: MenuItemProps) {
//   return (
//     <RouterLink
//       href={href}
//       className={`
//         group flex items-center gap-3 px-4 py-3 rounded-lg
//         text-sm font-medium transition-all
//         ${
//           danger
//             ? "text-red-400 hover:bg-red-500/10"
//             : "text-gray-300 hover:bg-white/5 hover:text-white"
//         }
//       `}
//     >
//       <Icon className="w-5 h-5 shrink-0" />
//       {!collapsed && <span>{label}</span>}
//     </RouterLink>
//   );
// }

import { RouterLink } from "../RouterLink";

type MenuItemProps = {
  icon: React.ElementType;
  label: string;
  collapsed: boolean;
  href?: string;
  onClick?: () => void;
  danger?: boolean;
};

export function MenuItem({
  icon: Icon,
  label,
  collapsed,
  href,
  onClick,
  danger = false,
}: MenuItemProps) {
  const className = `
    group flex items-center gap-3 px-4 py-3 rounded-lg
    text-sm font-medium transition-all w-full
    ${
      danger
        ? "text-red-400 hover:bg-red-500/10"
        : "text-gray-300 hover:bg-white/5 hover:text-white"
    }
  `;

  if (onClick) {
    return (
      <button onClick={onClick} className={className}>
        <Icon className="w-5 h-5 shrink-0" />
        {!collapsed && <span>{label}</span>}
      </button>
    );
  }

  return (
    <RouterLink href={href!} className={className}>
      <Icon className="w-5 h-5 shrink-0" />
      {!collapsed && <span>{label}</span>}
    </RouterLink>
  );
}
