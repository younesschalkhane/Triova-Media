import { useState, useEffect } from "react";
import { Eye, Trash2, Search, Mail, Phone, User, MailCheck, LayoutDashboard } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { fetchContacts, deleteContact, markContactAsRead } from "../../services/api/contactApi";
import KPICard from "../../components/KPICard";

export default function ContactAdmin() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const { isDark } = useTheme();

  const loadMessages = async () => {
    try {
      setLoading(true);
      const res = await fetchContacts();
      setMessages(res.data);
    } catch (err) {
      console.error("Erreur chargement messages", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadMessages(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer ce message ?")) return;
    try { await deleteContact(id); setMessages((p) => p.filter((m) => m._id !== id)); } catch (e) { console.error(e); }
  };

  const handleToggleRead = async (id, currentRead) => {
    try { const res = await markContactAsRead(id, !currentRead); setMessages((p) => p.map((m) => (m._id === id ? res.data : m))); } catch (e) { console.error(e); }
  };

  const formatDate = (d) => new Date(d).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });

  const filtered = messages.filter((m) => m.name.toLowerCase().includes(search.toLowerCase()) || m.email.toLowerCase().includes(search.toLowerCase()));
  const total = messages.length;
  const unread = messages.filter((m) => !m.read).length;
  const read = total - unread;

  const renderBody = () => {
    if (loading) return <tr><td colSpan={6} className={`text-center py-12 ${isDark ? "text-gray-400" : "text-slate-500"}`}>Chargement...</td></tr>;
    if (filtered.length === 0) return <tr><td colSpan={6} className={`text-center py-12 ${isDark ? "text-gray-400" : "text-slate-500"}`}>Aucun message trouvé.</td></tr>;
    return filtered.map((msg) => (
      <tr key={msg._id} className={`border-t border-gray-100 transition ${isDark ? "hover:bg-gray-700/50" + (!msg.read ? " bg-violet-900/20" : "") : "hover:bg-violet-50" + (!msg.read ? " bg-violet-50/40" : "")}`}>
        <td className="px-4 sm:px-6 py-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg shrink-0 ${msg.read ? (isDark ? "bg-gray-600 text-gray-400" : "bg-slate-300 text-slate-500") : "bg-gradient-to-r from-sky-500 to-violet-600 text-white"}`}>{msg.name.charAt(0)}</div>
            <div className="min-w-0">
              <span className={`font-semibold block truncate ${isDark ? "text-gray-200" : "text-slate-800"}`}>{msg.name}</span>
              {!msg.read && <span className="ml-1 px-2 py-0.5 rounded-full bg-violet-200 text-violet-700 text-xs font-bold">Nouveau</span>}
            </div>
          </div>
        </td>
        <td className="px-4 sm:px-6 py-4">
          <span className={`text-sm truncate block ${isDark ? "text-gray-300" : "text-slate-600"}`}>{msg.email}</span>
        </td>
        <td className="px-4 sm:px-6 py-4 hidden md:table-cell">
          <span className={`text-sm ${isDark ? "text-gray-300" : "text-slate-600"}`}>{msg.phone}</span>
        </td>
        <td className="px-4 sm:px-6 py-4 hidden lg:table-cell">
          <p className={`truncate max-w-xs ${isDark ? "text-gray-400" : "text-slate-600"}`}>{msg.message}</p>
        </td>
        <td className="px-4 sm:px-6 py-4 hidden xl:table-cell">
          <span className={`px-3 py-1 rounded-xl font-semibold text-sm whitespace-nowrap ${isDark ? "bg-sky-900/30 text-sky-400" : "bg-sky-100 text-sky-700"}`}>{formatDate(msg.createdAt)}</span>
        </td>
        <td className="px-4 sm:px-6 py-4">
          <div className="flex justify-center gap-2">
            <button onClick={() => setSelectedMessage(msg)} className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 hover:bg-sky-100 transition flex items-center justify-center" title="Voir"><Eye size={16} /></button>
            <button onClick={() => handleToggleRead(msg._id, msg.read)} className={`w-10 h-10 rounded-xl transition flex items-center justify-center ${msg.read ? "bg-slate-100 text-slate-400 hover:bg-amber-500 hover:text-white" : "bg-green-100 text-green-600 hover:bg-green-500 hover:text-white"}`} title={msg.read ? "Non lu" : "Lu"}><MailCheck size={16} /></button>
            <button onClick={() => handleDelete(msg._id)} className="w-10 h-10 rounded-xl bg-violet-50 text-violet-700 hover:bg-violet-100 transition flex items-center justify-center" title="Supprimer"><Trash2 size={16} /></button>
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <div className={`min-h-screen p-4 sm:p-6 lg:p-8 ${isDark ? "bg-gray-950" : "bg-slate-50"}`}>
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center border ${isDark ? "bg-violet-900/40 border-violet-800" : "bg-gradient-to-br from-sky-500/15 to-violet-600/15 border-violet-100"}`}>
            <LayoutDashboard className={`w-5 h-5 ${isDark ? "text-violet-400" : "text-violet-600"}`} />
          </div>
          <div>
            <h1 className={`text-2xl sm:text-3xl font-bold ${isDark ? "text-gray-100" : "text-violet-700"}`}>Messages de <span className="text-sky-500">Contact</span></h1>
            <p className={`text-md mt-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Consultez et gérez les demandes reçues depuis le site.</p>
          </div>
        </div>
        <div className="relative w-full sm:w-[320px]">
          <Search className={`w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 ${isDark ? "text-gray-500" : "text-gray-400"}`} />
          <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Rechercher..." className={`pl-10 pr-4 h-11 w-full border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent ${isDark ? "bg-gray-800 border-gray-600 text-gray-200 placeholder-gray-500" : "bg-white text-gray-700"}`} />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <KPICard title="Total" value={total} icon={Mail} color="from-violet-600 to-sky-500" />
        <KPICard title="Non lus" value={unread} icon={MailCheck} color="from-sky-500 to-cyan-500" />
        <KPICard title="Lus" value={read} icon={MailCheck} color="from-green-500 to-emerald-500" />
      </div>

      {/* Table */}
      <div className={`bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden`}>
        <table className="w-full table-fixed">
          <thead>
            <tr className={isDark ? "bg-gray-900 text-violet-400" : "bg-violet-300"}>
              <th className="px-4 sm:px-6 py-4 text-left font-semibold text-gray-700">Nom</th>
              <th className="px-4 sm:px-6 py-4 text-left font-semibold text-gray-700">Email</th>
              <th className="hidden md:table-cell px-4 sm:px-6 py-4 text-left font-semibold text-gray-700">Téléphone</th>
              <th className="hidden lg:table-cell px-4 sm:px-6 py-4 text-left font-semibold text-gray-700">Message</th>
              <th className="hidden xl:table-cell px-4 sm:px-6 py-4 text-left font-semibold text-gray-700">Date</th>
              <th className="px-4 sm:px-6 py-4 text-center font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>{renderBody()}</tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className={`rounded-xl shadow-xl w-full max-w-2xl p-6 ${isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"}`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className={`text-xl font-bold ${isDark ? "text-violet-400" : "text-violet-700"}`}>Détails du message</h2>
              <button onClick={() => setSelectedMessage(null)} className={`p-2 rounded-lg hover:bg-gray-100 transition ${isDark ? "hover:bg-gray-700" : ""}`}>
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3"><User size={20} className="text-violet-500" /><span className={isDark ? "text-gray-200" : "text-slate-700"}>{selectedMessage.name}</span></div>
              <div className="flex items-center gap-3"><Mail size={20} className="text-violet-500" /><span className={isDark ? "text-gray-200" : "text-slate-700"}>{selectedMessage.email}</span></div>
              <div className="flex items-center gap-3"><Phone size={20} className="text-violet-500" /><span className={isDark ? "text-gray-200" : "text-slate-700"}>{selectedMessage.phone}</span></div>
              <div className={`rounded-xl p-5 border ${isDark ? "bg-gray-900 border-gray-700 text-gray-300" : "bg-gray-50 border-gray-100 text-slate-700"}`}>{selectedMessage.message}</div>
            </div>
            <div className="flex items-center justify-end gap-3 mt-6">
              <button onClick={() => setSelectedMessage(null)} className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition">Fermer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}