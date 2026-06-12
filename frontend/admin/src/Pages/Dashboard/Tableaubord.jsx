import {
  Users,
  Contact,
  FileText,
  Briefcase,
  FolderKanban,
  DollarSign,
  ArrowUpRight,
  BarChart2,
  Activity,
  Monitor,
  Search,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function TableauBord() {
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
    <div className="min-h-screen bg-slate-50 p-8">

      {/* HEADER */}
      <div className="mb-8">
        <div className="inline-flex items-center rounded-full bg-violet-100 text-violet-700 px-3 py-1 text-sm font-semibold mb-4">
          Tableau de bord agence digitale
        </div>
        <h1 className="text-4xl font-bold text-slate-800">
          Bon retour, Admin 👋
        </h1>
        <p className="text-slate-500 mt-2 max-w-2xl">
          Suivez la performance de votre agence digitale en temps réel avec les indicateurs clients, prospects, devis et campagnes actives.
        </p>
      </div>

      {/* STATS */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {stats.map((item) => (
          <div
            key={item.title}
            className="relative bg-white rounded-3xl p-5 shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition"
          >
            <div
              className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-r ${item.color} opacity-10`}
            />

            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-500 text-sm">{item.title}</p>
                <h2 className="text-3xl font-bold mt-2 text-slate-800">
                  {item.value}
                </h2>

                <div className="flex items-center gap-1 text-green-600 text-sm mt-2">
                  <ArrowUpRight size={15} />
                  <span className="font-medium">{item.growth}</span>
                  <span className="text-slate-400 text-xs">
                    vs last month
                  </span>
                </div>
              </div>

              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg`}
              >
                <item.icon size={22} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PIPELINE */}
      <div className="mt-8 bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
              Pipeline Commercial
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-2">
              Suivez les opportunités de vente
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-2xl">
              Suivez le parcours des prospects depuis le premier contact jusqu'à la signature.
            </p>
          </div>
          <div className="inline-flex items-center rounded-full bg-violet-100 text-violet-700 px-3 py-1 text-xs font-semibold">
            Vue agence digitale
          </div>
        </div>

        <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { name: "Nouveaux Leads", count: 18, color: "from-cyan-500 to-blue-500" },
            { name: "Contactés", count: 12, color: "from-fuchsia-500 to-purple-500" },
            { name: "Devis Envoyés", count: 8, color: "from-orange-500 to-amber-500" },
            { name: "Négociation", count: 5, color: "from-emerald-500 to-lime-500" },
            { name: "Clients Signés", count: 3, color: "from-slate-500 to-slate-700" },
          ].map((step) => (
            <div
              key={step.name}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-5 shadow-sm"
            >
              <div className={`inline-flex rounded-2xl bg-gradient-to-r ${step.color} px-3 py-2 text-white text-xs font-semibold mb-4`}>
                {step.name}
              </div>
              <p className="text-4xl font-bold text-slate-900">{step.count}</p>
              <p className="text-sm text-slate-500 mt-2">
                Avancement du funnel commercial
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CHART + SERVICES */}
      <div className="grid lg:grid-cols-3 gap-6 mt-8">

        {/* CHART */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <h2 className="font-bold text-xl mb-4 flex items-center gap-2">
            <BarChart2 size={18} className="text-indigo-500" />
            Croissance des Clients
          </h2>

          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={clientGrowthData}>
                <defs>
                  <linearGradient id="colorClients" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />

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
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <div className="mb-5">
            <h2 className="font-bold text-xl">Services les plus demandés</h2>
            <p className="text-sm text-slate-500 mt-2">Indicateur de demande client pour vos offres digitales.</p>
          </div>

          <div className="space-y-4">
            {requestedServices.map((s) => (
              <div
                key={s.name}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-4 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                      <s.icon size={18} />
                    </div>
                    <p className="font-semibold text-slate-900">{s.name}</p>
                  </div>
                  <span className="rounded-full bg-violet-50 px-3 py-1 text-sm font-semibold text-violet-600">
                    {s.percent}%
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200 overflow-hidden">
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
      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        {/* LEADS */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <h2 className="font-bold text-xl mb-5">Derniers Leads</h2>

          <div className="space-y-4">
            {leads.map((lead, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>
                  <h3 className="font-medium">{lead.nom}</h3>
                  <p className="text-sm text-slate-500">
                    {lead.service}
                  </p>
                </div>
                <span className="text-sm text-slate-400">
                  {lead.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ACTIVITIES */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <h2 className="font-bold text-xl mb-5 flex items-center gap-2">
            <Activity size={18} className="text-purple-500" />
            Activité Récente
          </h2>

          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex gap-3 items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full" />
                <p>{activity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}