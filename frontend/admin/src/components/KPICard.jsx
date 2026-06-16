import { useTheme } from "../context/ThemeContext";

/**
 * Composant KPI Card réutilisable.
 * Utilisé sur Dashboard, Services, Contact, Devis, Projets, Prospects.
 *
 * Props:
 * - title: string
 * - value: string | number
 * - icon: React component (lucide-react)
 * - color: string (gradient, ex: "from-violet-600 to-sky-500")
 * - growth: string (optionnel, ex: "+18%")
 * - growthLabel: string (optionnel, ex: "vs last month")
 */
export default function KPICard({ title, value, icon: Icon, color, growth, growthLabel }) {
  const { isDark } = useTheme();

  return (
    <div
      className={`
        group relative overflow-hidden rounded-2xl p-5
        border border-slate-100 shadow-md
        transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
        w-full h-[140px] flex flex-col justify-between
        ${isDark ? "bg-gray-800 border-gray-700" : "bg-white"}
      `}
    >
      {/* Animated top bar */}
      <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-sky-500 to-violet-600 transition-all duration-500 group-hover:w-full" />

      <div className="relative flex items-center justify-between">
        <div>
          <p className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-slate-500"}`}>
            {title}
          </p>
          <h2 className={`mt-2 text-3xl font-bold bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent`}>
            {value}
          </h2>
        </div>
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${color} shadow-lg shrink-0`}>
          <Icon className="h-7 w-7 text-white" />
        </div>
      </div>

      {growth && (
        <div className="relative flex items-center gap-1 text-green-600 text-sm mt-1">
          <span className="font-medium">{growth}</span>
          {growthLabel && (
            <span className={`text-xs ${isDark ? "text-gray-500" : "text-slate-400"}`}>
              {growthLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}