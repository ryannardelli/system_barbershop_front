export type StatsVariant = "success" | "danger" | "warning" | "info";

export const statsVariantStyles = {
  success: {
    iconBg: "bg-green-500/10",
    iconColor: "text-green-600",
    valueColor: "text-green-600",
    border: "border-green-500/10",
  },
  danger: {
    iconBg: "bg-red-500/10",
    iconColor: "text-red-600",
    valueColor: "text-red-600",
    border: "border-red-500/10",
  },
  warning: {
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-600",
    valueColor: "text-yellow-600",
    border: "border-yellow-500/10",
  },
  info: {
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
    valueColor: "text-blue-600",
    border: "border-blue-500/10",
  },
};
