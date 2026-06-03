import React, { useEffect, useState } from "react";
import { FaUser, FaUsers, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";

function DevisList() {
  const [devis, setDevis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedClient, setSelectedClient] = useState(null);
  const [search, setSearch] = useState('');
  const iconVariants = {
    hover: { scale: 1.12, rotate: 10 },
    tap: { scale: 0.95, rotate: 0 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.98, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  const RenderIcon = ({ type }) => {
    const base = { size: 24, className: "text-white" };
    switch (type) {
      case "user":
        return (
          <motion.div whileHover="hover" whileTap="tap" variants={iconVariants}>
            <FaUser {...base} />
          </motion.div>
        );
      case "users":
        return (
          <motion.div whileHover="hover" whileTap="tap" variants={iconVariants}>
            <FaUsers {...base} />
          </motion.div>
        );
      case "userTie":
        return (
          <motion.div whileHover="hover" whileTap="tap" variants={iconVariants}>
            <FaUserTie {...base} />
          </motion.div>
        );
      default:
        return (
          <motion.div whileHover="hover" whileTap="tap" variants={iconVariants}>
            <FaUser {...base} />
          </motion.div>
        );
    }
  };

  const fakeData = [
    {
      _id: "1",
      name: "Ahmed Benali",
      email: "ahmed@email.com",
      company: "NextVision",
      city: "Casablanca",
      budget: "5000 - 10000 MAD",
      activity: "E-commerce",
      services: ["Web Dev", "SEO"],
      date: "2024-01-15",
      iconType: "user",
      color: "from-gray-400 to-gray-600",
    },
    {
      _id: "2",
      name: "Sara El Amrani",
      email: "sara@email.com",
      company: "SaaS Morocco",
      city: "Rabat",
      budget: "10000 - 20000 MAD",
      activity: "Tech",
      services: ["AI", "Social Media"],
      date: "2024-01-18",
      iconType: "users",
      color: "from-violet-500 to-violet-600",
    },
    {
      _id: "3",
      name: "Omar Tazi",
      email: "omar@email.com",
      company: "Atlas Digital",
      city: "Marrakech",
      budget: "+20000 MAD",
      activity: "Marketing",
      services: ["Branding", "Ads"],
      date: "2024-01-20",
      iconType: "userTie",
      color: "from-gray-500 to-violet-500",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setDevis(fakeData);
      setLoading(false);
    }, 600);
  }, []);

  const filtered = devis.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.email.toLowerCase().includes(search.toLowerCase())
  );

  // 📊 ANALYTICS
  const total = devis.length;
  const ecom = devis.filter(d => d.activity === "E-commerce").length;
  const tech = devis.filter(d => d.activity === "Tech").length;

  const highBudget = devis.filter(d => d.budget.includes("+20000")).length;

  // 📅 GET CURRENT DATE
  const getFormattedDate = () => {
    const today = new Date();
    return today.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-4 sm:p-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER WITH LOGO */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-8">

          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-gray-600 to-violet-600 text-white p-3 rounded-2xl shadow-lg">
              <span className="text-3xl">📋</span>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-gray-600 to-violet-600 bg-clip-text text-transparent">
                Devis Manager
              </h1>
              <p className="text-sm text-gray-500">📅 {getFormattedDate()}</p>
            </div>
          </div>

          <input
            className="p-3 rounded-2xl border w-full sm:w-72 bg-white shadow-sm focus:ring-2 focus:ring-blue-600"
            placeholder="Search client..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        {/* KPI CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">

          <div className="bg-white rounded-2xl shadow p-4 border-t-4 border-violet-600 hover:shadow-lg transition">
            <p className="text-xs text-gray-500 font-semibold">📊 Total Clients</p>
            <h2 className="text-3xl font-bold mt-2">{total}</h2>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow p-4 border-t-4 border-violet-600 hover:shadow-lg transition">
            <p className="text-xs text-gray-600 font-semibold">🛒 E-commerce</p>
            <h2 className="text-3xl font-bold text-violet-600 mt-2">{ecom}</h2>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow p-4 border-t-4 border-violet-600 hover:shadow-lg transition">
            <p className="text-xs text-gray-600 font-semibold">💻 Tech Clients</p>
            <h2 className="text-3xl font-bold text-violet-600 mt-2">{tech}</h2>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow p-4 border-t-4 border-violet-600 hover:shadow-lg transition">
            <p className="text-xs text-gray-600 font-semibold">💎 High Budget</p>
            <h2 className="text-3xl font-bold text-violet-600 mt-2">{highBudget}</h2>
          </div>

        </div>

        {/* CONTENT */}
        {loading ? (
          <div className="text-center text-gray-500 animate-pulse">
            Loading analytics...
          </div>
        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

            {/* CLIENT LIST */}
            <div className="lg:col-span-2 space-y-4">

              {filtered.map((item) => (
                <div
                key={item._id}
                onClick={() => setSelectedClient(item)}
                className="bg-white/80 backdrop-blur-xl p-5 rounded-3xl shadow hover:shadow-xl transition border-l-4 border-blue-600 cursor-pointer"
>

                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <div className={`bg-gradient-to-br ${item.color} text-white p-3 rounded-xl flex items-center justify-center w-12 h-12 shadow-lg`}>
                        <RenderIcon type={item.iconType} />
                      </div>
                      <div>
                        <h2 className="font-bold text-lg">{item.name}</h2>
                        <p className="text-sm text-gray-500">{item.email}</p>
                        <p className="text-xs text-gray-400 mt-1">📅 {new Date(item.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                      </div>
                    </div>

                    <span className="text-xs bg-black text-white px-3 py-1 rounded-full">
                      {item.activity}
                    </span>
                  </div>

                  <div className="mt-3 text-sm text-gray-600 grid grid-cols-2 gap-1">
                    <p> {item.company}</p>
                    <p> {item.city}</p>
                    <p> {item.budget}</p>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.services.map((s, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-900 text-white px-2 py-1 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                </div>
              ))}

            </div>

            {/* SIDE PANEL (PROFILE INSIGHT / SELECTED CLIENT) */}
            <div className={`rounded-3xl shadow p-5 h-fit ${selectedClient ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white' : 'bg-white'}`}>
              {selectedClient ? (
                <>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className={`bg-gradient-to-br ${selectedClient.color} text-white p-3 rounded-xl flex items-center justify-center w-16 h-16 shadow-lg`}>
                        <RenderIcon type={selectedClient.iconType} />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">{selectedClient.name}</h3>
                        <p className="text-sm">{selectedClient.email}</p>
                        <p className="text-xs">📅 {new Date(selectedClient.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                      </div>
                    </div>
                    <button onClick={() => setSelectedClient(null)} className="text-sm px-3 py-1 rounded-lg hover:bg-white/20">Close</button>
                  </div>

                  <div className="mt-4 text-sm text-gray-700 space-y-2">
                    <div>🏢 <strong>Company:</strong> {selectedClient.company}</div>
                    <div>📍 <strong>City:</strong> {selectedClient.city}</div>
                    <div>💰 <strong>Budget:</strong> {selectedClient.budget}</div>
                    <div className="flex items-center gap-2"> <strong>Activity:</strong> <span className="inline-block bg-black text-white px-2 py-1 rounded-full text-xs">{selectedClient.activity}</span></div>

                    <div>
                      <p className="mt-2 text-sm font-semibold">Services:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {selectedClient.services.map((s, i) => (
                          <span key={i} className="text-xs bg-gray-900 text-white px-2 py-1 rounded-full">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button className="w-full bg-white/20 text-white py-2 rounded-xl hover:bg-white/30">Contact Client</button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="font-bold text-lg mb-3"> Insights</h3>

                  <p className="text-sm text-gray-600 mb-2">Most active sector:</p>
                  <div className="bg-gray-100 p-3 rounded-xl mb-3">E-commerce / Tech </div>

                  <p className="text-sm text-gray-600 mb-2">Best clients:</p>
                  <div className="text-sm space-y-2">
                    <div className="p-2 bg-green-50 rounded-lg"> High budget leads</div>
                    <div className="p-2 bg-blue-50 rounded-lg"> Fast decision clients</div>
                    <div className="p-2 bg-purple-50 rounded-lg"> Growth companies</div>
                  </div>
                </>
              )}
            </div>

          </div>
        )}

      </div>
    
      {/* Selected client modal (blocks) */}
      {selectedClient && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedClient(null)}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-xl w-11/12 md:w-3/4 lg:w-2/3 p-6"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <div className={`bg-gradient-to-br ${selectedClient.color} text-white p-3 rounded-xl flex items-center justify-center w-16 h-16 shadow-lg`}>
                  <RenderIcon type={selectedClient.iconType} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{selectedClient.name}</h2>
                  <p className="text-sm text-gray-500">{selectedClient.email}</p>
                </div>
              </div>
              <button onClick={() => setSelectedClient(null)} className="text-sm text-gray-600 px-3 py-1 rounded-lg">Close</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">Company</p>
                <p className="font-semibold mt-1">{selectedClient.company}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">City</p>
                <p className="font-semibold mt-1">{selectedClient.city}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">Budget</p>
                <p className="font-semibold mt-1">{selectedClient.budget}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">Activity</p>
                <p className="font-semibold mt-1">{selectedClient.activity}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg sm:col-span-2">
                <p className="text-xs text-gray-500">Services</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedClient.services.map((s, i) => (
                    <span key={i} className="text-xs bg-gray-900 text-white px-2 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-violet-600 text-white">Contact</button>
              <button onClick={() => setSelectedClient(null)} className="px-4 py-2 rounded-lg border">Close</button>
            </div>
          </motion.div>
        </motion.div>
      )}

    </div>
  );
}

export default DevisList;