import {
  Users,
  Contact,
  FileText,
  Briefcase,
  FolderKanban,
  ArrowUpRight,
  BarChart2,
  Activity,
  Monitor,
  Search,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import KPICard from "../../components/KPICard";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

/**
 * Dashboard principal de l'interface admin.
 * - 5 cartes statistiques en Flexbox responsive (pas de grille fixe)
 * - Graphique de croissance des clients
 * - Pipeline commercial
 * - Services les plus demandés
 * - Derniers leads et activités récentes
 * - Support du mode clair / sombre
 */
export default function TableauBord() {
  const { isDark } = useTheme();

  const stats = [
    {
      title: "Clients",
      value: "3",
      growth: "+18%",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Prospects",
      value: "48",
      growth: "+12%",
      icon: Contact,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Devis",
      value: "4",
      growth: "+9%",
      icon: FileText,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Services",
      value: "8",
      growth: "+4%",
      icon: Briefcase,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Projets",
      value: "14",
      growth: "+7%",
      icon: FolderKanban,
      color: "from-indigo-500 to-violet-500",
    },
  ];

  const leads = [
    { nom: "HASNAA EL ASBIHANI", service: "Chatbot IA", date: "Aujourd'hui" },
    { nom: "Sabri Kaoutar", service: "SEO", date: "Hier" },
    { nom: "IDBRAHIM FATIHA", service: "Création Site Web", date: "2 jours" },
    { nom: "Youness Chalkhane", service: "Google Ads", date: "8 jours" },
  ];

  const activities = [
    "Nouveau client ajouté",
    "Devis #1042 envoyé",
    "Paiement reçu",
    "Projet SEO lancé",
    "Nouveau lead Facebook Ads",
  ];

  const clientGrowthData = [
    { month: "Jan", clients: 40 },
    { month: "Feb", clients: 55 },
    { month: "Mar", clients: 60 },
    { month: "Apr", clients: 75 },
    { month: "May", clients: 90 },
    { month: "Jun", clients: 120 },
  ];

  const initialRequestedServices = [
    { name: "Création Site Web", percent: 42, icon: Monitor },
    { name: "SEO", percent: 28, icon: Search },
    { name: "Google Ads", percent: 18, icon: TrendingUp },
    { name: "Chatbot IA", percent: 12, icon: MessageCircle },
  ];

  const [requestedServices] = useState(initialRequestedServices);

  return (
    <div className={`min-h-screen p-4 sm:p-6 lg:p-8 ${isDark ? "bg-gray-950" : "bg-slate-50"}`}>

      {/* HEADER */}
      <div className="mb-6 sm:mb-8">
        <div className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold mb-4 ${
          isDark ? "bg-violet-900/40 text-violet-300" : "bg-violet-100 text-violet-700"
        }`}>
          Tableau de bord agence digitale
        </div>
        <h1 className={`text-3xl sm:text-4xl font-bold ${isDark ? "text-gray-100" : "text-slate-800"}`}>
          Bon retour, Admin 👋
        </h1>
        <p className={`mt-2 max-w-2xl ${isDark ? "text-gray-400" : "text-slate-500"}`}>
          Suivez la performance de votre agence digitale en temps réel avec les indicateurs clients, prospects, devis et campagnes actives.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
        {stats.map((item) => (
          <KPICard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
            color={item.color}
            growth={item.growth}
            growthLabel="vs last month"
          />
        ))}
      </div>

      {/* PIPELINE */}
      <div className={`rounded-2xl p-5 sm:p-6 mb-8 ${isDark ? "bg-gray-800 border border-gray-700" : "bg-white shadow-sm border border-slate-100"}`}>
        <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${isDark ? "text-violet-400" : "text-violet-600"}`}>
              Pipeline Commercial
            </p>
            <h2 className={`text-xl sm:text-2xl font-bold mt-2 ${isDark ? "text-gray-100" : "text-slate-900"}`}>
              Suivez les opportunités de vente
            </h2>
            <p className={`text-sm mt-2 max-w-2xl ${isDark ? "text-gray-400" : "text-slate-500"}`}>
              Suivez le parcours des prospects depuis le premier contact jusqu'à la signature.
            </p>
          </div>
          <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold shrink-0 ${
            isDark ? "bg-violet-900/40 text-violet-300" : "bg-violet-100 text-violet-700"
          }`}>
            Vue agence digitale
          </div>
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 justify-start">
          {[
            { name: "Nouveaux Leads", count: 18, color: "from-cyan-500 to-blue-500" },
            { name: "Contactés", count: 12, color: "from-fuchsia-500 to-purple-500" },
            { name: "Devis Envoyés", count: 8, color: "from-orange-500 to-amber-500" },
            { name: "Négociation", count: 5, color: "from-emerald-500 to-lime-500" },
            { name: "Clients Signés", count: 3, color: "from-slate-500 to-slate-700" },
          ].map((step) => (
            <div
              key={step.name}
              className={`rounded-2xl p-4 sm:p-5 flex-1 ${
                isDark
                  ? "border border-gray-700 bg-gray-900"
                  : "border border-slate-100 bg-slate-50"
              }`}
            >
              <div className={`inline-flex rounded-2xl bg-gradient-to-r ${step.color} px-3 py-2 text-white text-xs font-semibold mb-3`}>
                {step.name}
              </div>
              <p className={`text-3xl sm:text-4xl font-bold ${isDark ? "text-gray-100" : "text-slate-900"}`}>{step.count}</p>
              <p className={`text-sm mt-2 ${isDark ? "text-gray-400" : "text-slate-500"}`}>
                Avancement du funnel commercial
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CHART + SERVICES */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8">

        {/* CHART */}
        <div className={`flex-[2] rounded-2xl p-5 sm:p-6 ${isDark ? "bg-gray-800 border border-gray-700" : "bg-white shadow-sm border border-slate-100"}`}>
          <h2 className={`font-bold text-lg sm:text-xl mb-4 flex items-center gap-2 ${isDark ? "text-gray-100" : "text-slate-800"}`}>
            <BarChart2 size={18} className="text-indigo-500" />
            Croissance des Clients
          </h2>

          <div className="h-72 sm:h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={clientGrowthData}>
                <defs>
                  <linearGradient id="colorClients" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#374151" : "#e5e7eb"} />
                <XAxis dataKey="month" stroke={isDark ? "#9ca3af" : "#6b7280"} />
                <YAxis stroke={isDark ? "#9ca3af" : "#6b7280"} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? "#1f2937" : "#fff",
                    border: isDark ? "1px solid #374151" : "1px solid #e5e7eb",
                    borderRadius: "12px",
                    color: isDark ? "#e5e7eb" : "#1f2937",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="clients"
                  stroke="#8b5cf6"
                  fill="url(#colorClients)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* SERVICES (requested) */}
        <div className={`flex-1 rounded-2xl p-5 sm:p-6 ${isDark ? "bg-gray-800 border border-gray-700" : "bg-white shadow-sm border border-slate-100"}`}>
          <div className="mb-5">
            <h2 className={`font-bold text-lg sm:text-xl ${isDark ? "text-gray-100" : "text-slate-800"}`}>Services les plus demandés</h2>
            <p className={`text-sm mt-2 ${isDark ? "text-gray-400" : "text-slate-500"}`}>Indicateur de demande client pour vos offres digitales.</p>
          </div>

          <div className="space-y-4">
            {requestedServices.map((s) => (
              <div
                key={s.name}
                className={`rounded-2xl p-4 ${
                  isDark
                    ? "border border-gray-700 bg-gray-900"
                    : "border border-slate-100 bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                      isDark ? "bg-violet-900/40 text-violet-400" : "bg-violet-50 text-violet-600"
                    }`}>
                      <s.icon size={18} />
                    </div>
                    <p className={`font-semibold ${isDark ? "text-gray-200" : "text-slate-900"}`}>{s.name}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-sm font-semibold ${
                    isDark ? "bg-violet-900/40 text-violet-300" : "bg-violet-50 text-violet-600"
                  }`}>
                    {s.percent}%
                  </span>
                </div>
                <div className={`mt-3 h-2 rounded-full overflow-hidden ${isDark ? "bg-gray-700" : "bg-slate-200"}`}>
                  <div
                    className="h-full rounded-full bg-violet-500"
                    style={{ width: `${s.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TABLES */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* LEADS */}
        <div className={`flex-1 rounded-2xl p-5 sm:p-6 ${isDark ? "bg-gray-800 border border-gray-700" : "bg-white shadow-sm border border-slate-100"}`}>
          <h2 className={`font-bold text-lg sm:text-xl mb-5 ${isDark ? "text-gray-100" : "text-slate-800"}`}>Derniers Leads</h2>

          <div className="space-y-4">
            {leads.map((lead, index) => (
              <div
                key={index}
                className={`flex justify-between items-center pb-3 border-b ${
                  isDark ? "border-gray-700" : "border-slate-100"
                }`}
              >
                <div>
                  <h3 className={`font-medium ${isDark ? "text-gray-200" : "text-slate-800"}`}>{lead.nom}</h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-slate-500"}`}>
                    {lead.service}
                  </p>
                </div>
                <span className={`text-sm shrink-0 ml-4 ${isDark ? "text-gray-500" : "text-slate-400"}`}>
                  {lead.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ACTIVITIES */}
        <div className={`flex-1 rounded-2xl p-5 sm:p-6 ${isDark ? "bg-gray-800 border border-gray-700" : "bg-white shadow-sm border border-slate-100"}`}>
          <h2 className={`font-bold text-lg sm:text-xl mb-5 flex items-center gap-2 ${isDark ? "text-gray-100" : "text-slate-800"}`}>
            <Activity size={18} className="text-purple-500" />
            Activité Récente
          </h2>

          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex gap-3 items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full shrink-0" />
                <p className={isDark ? "text-gray-300" : "text-slate-700"}>{activity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}