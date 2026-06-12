import React from 'react'

import { Pencil, Trash2 } from "lucide-react";

 function Client() {
  const prospects = [
    {
      id: 1,
      name: "Madiha Bakhlija",
      email: "madiha@brandlab.fr",
      phone: "+212 6 12 34 56 78",
      service: "AI Chatbot Integration",
      status: "New",
    },
    {
      id: 2,
      name: "Karim Benali",
      email: "karim@nexora.io",
      phone: "+212 7 55 88 99 11",
      service: "SEO ",
      status: "Contacted",
    },
    {
      id: 3,
      name: "Youssef El Amrani",
      email: "youssef@studiocrea.com",
      phone: "+212 6 33 44 55 66",
      service: "Social Media",
      status: "Converted",
    },
    {
      id: 4,
      name: "Salma zakery",
      email: "salma@growthx.co",
      phone: "+212 6 78 90 12 34",
      service: "Development web",
      status: "New",
    },
    {
      id: 5,
      name: "Mouhcine El Fassi",
      email: "mouhcine@artelia.fr",
      phone: "+212 7 11 22 33 44",
      service: "Identité visuelle",
      status: "Contacted",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "New":
        return "bg-sky-100 text-sky-700";
      case "Contacted":
        return "bg-yellow-100 text-yellow-700";
      case "Converted":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  
   return (
  <div className="min-h-screen bg-gradient-to-br from-violet-50 via-violet-100 to-sky-100 p-4 md:p-6">
    <h1 className="text-2xl md:text-4xl font-bold text-slate-900">
      Prospects
    </h1>

    <p className="text-gray-500 mt-2 mb-8">
      Tous les clients intéressés par vos services.
    </p>

    {/* Mobile Cards */}
    <div className="md:hidden space-y-4">
      {prospects.map((prospect) => (
        <div
          key={prospect.id}
          className="bg-white rounded-2xl shadow p-4"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 flex items-center justify-center text-white font-semibold">
              {prospect.name.charAt(0)}
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                {prospect.name}
              </h3>

              <p className="text-sm text-gray-500">
                {prospect.email}
              </p>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">Téléphone :</span>{" "}
              {prospect.phone}
            </p>

            <p>
              <span className="font-semibold">Service :</span>{" "}
              {prospect.service}
            </p>

            <div className="flex items-center justify-between pt-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                  prospect.status
                )}`}
              >
                {prospect.status}
              </span>

              <div className="flex gap-4">
                <button className="text-slate-600 hover:text-violet-600">
                  <Pencil size={18} />
                </button>

                <button className="text-red-500 hover:text-red-700">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Desktop Table */}
    <div className="hidden md:block bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left text-gray-500">
              <th className="p-5 font-medium">Nom</th>
              <th className="p-5 font-medium">Email</th>
              <th className="p-5 font-medium">Téléphone</th>
              <th className="p-5 font-medium">Service</th>
              <th className="p-5 font-medium">Statut</th>
              <th className="p-5 font-medium text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {prospects.map((prospect) => (
              <tr
                key={prospect.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                      {prospect.name.charAt(0)}
                    </div>

                    <span className="font-medium text-slate-800">
                      {prospect.name}
                    </span>
                  </div>
                </td>

                <td className="p-5 text-gray-500">
                  {prospect.email}
                </td>

                <td className="p-5 text-gray-500">
                  {prospect.phone}
                </td>

                <td className="p-5 text-slate-800">
                  {prospect.service}
                </td>

                <td className="p-5">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                      prospect.status
                    )}`}
                  >
                    {prospect.status}
                  </span>
                </td>

                <td className="p-5">
                  <div className="flex justify-center gap-4">
                    <button className="text-slate-600 hover:text-violet-600">
                      <Pencil size={18} />
                    </button>

                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
}

export default Client
