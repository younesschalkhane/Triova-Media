import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  Search,
  Bell,
  Sun,
  Moon,
  Mail,
  FileText,
  Briefcase,
  Star,
  X,
  RefreshCw,
  CheckCheck,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useNotifications } from "../hooks/useNotifications";
import logo from "../assets/image.png";

/**
 * Icône de type de notification selon le source
 */
function getNotificationIcon(type) {
  switch (type) {
    case "contact":
      return <Mail size={14} className="text-sky-500" />;
    case "devis":
      return <FileText size={14} className="text-orange-500" />;
    case "service-request":
      return <Briefcase size={14} className="text-violet-500" />;
    case "review":
      return <Star size={14} className="text-yellow-500" />;
    default:
      return <Bell size={14} className="text-gray-500" />;
  }
}

/**
 * Formater le temps relatif
 */
function timeAgo(dateStr) {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now - date;
  const diffMin = Math.floor(diffMs / 60000);
  const diffH = Math.floor(diffMin / 60);
  const diffD = Math.floor(diffH / 24);

  if (diffMin < 1) return "À l'instant";
  if (diffMin < 60) return `il y a ${diffMin}min`;
  if (diffH < 24) return `il y a ${diffH}h`;
  return `il y a ${diffD}j`;
}

/**
 * Formater la date et l'heure de réception
 */
function formatDateTime(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * Header de l'interface admin.
 * - Logo horizontal (rectangulaire)
 * - Barre de recherche
 * - Bouton dark/light mode
 * - Cloche de notification avec badge, dropdown, sections lu/non lu
 * - Action "Tout marquer comme lu"
 * - Redirection automatique au clic sur une notification
 * - Marquage automatique comme lu au clic
 * - Avatar utilisateur
 */
function Header({ setOpenSidebar }) {
  const { isDark, toggleTheme } = useTheme();
  const {
    unreadCount,
    notifications,
    loading,
    refresh,
    markAsRead,
    markAllAsRead,
  } = useNotifications(30000);
  const [showNotifications, setShowNotifications] = useState(false);
  const notifRef = useRef(null);
  const navigate = useNavigate();

  // Fermer le dropdown quand on clique à l'extérieur
  const handleClickOutside = useCallback((e) => {
    if (notifRef.current && !notifRef.current.contains(e.target)) {
      setShowNotifications(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  /**
   * Gérer le clic sur une notification :
   * 1. Marquer comme lue
   * 2. Rediriger vers la page correspondante
   * 3. Fermer le dropdown
   */
  const handleNotificationClick = useCallback(
    async (notif) => {
      // Marquer comme lue si pas encore lue
      if (!notif.read) {
        await markAsRead(notif._id);
      }
      // Rediriger vers la page correspondante
      navigate(notif.link);
      // Fermer le dropdown
      setShowNotifications(false);
    },
    [markAsRead, navigate]
  );

  // Séparer les notifications en non lues et lues
  const unreadNotifications = notifications.filter((n) => !n.read);
  const readNotifications = notifications.filter((n) => n.read);

  return (
    <header
      className={`
        h-[80px] flex items-center justify-between px-4 sm:px-6
        
        transition-colors duration-300
        ${
          isDark
             ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200"
            : "bg-gradient-to-br from-violet-200 via-violet-300 to-sky-300 text-black"
          }
      `}
    >
      {/* Section gauche : Menu mobile + Logo + Recherche */}
      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
        {/* Bouton menu mobile */}
        <button
          onClick={() => setOpenSidebar(true)}
          className={`
            lg:hidden p-2 rounded-lg transition-colors
            ${isDark
              ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
              : "bg-gradient-to-r from-violet-500 to-sky-600 text-white"
            }
          `}
        >
          <Menu size={20} />
        </button>

        {/* Logo horizontal */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="Triova Media"
            className="h-30 w-auto rounded-lg object-contain"
          />
          <span
            className={`font-bold text-sm tracking-wide hidden md:block ${
              isDark ? "text-violet-400" : "text-violet-700"
            }`}
          >
           
          </span>
        </div>

        {/* Barre de recherche */}
        
      </div>

      {/* Section droite : Notifications + Dark mode + Avatar */}
      <div className="flex items-center gap-3 sm:gap-5 shrink-0">
        {/* Bouton actualiser les notifications */}
        <button
          onClick={refresh}
          className={`
            p-2 rounded-lg transition-colors
            ${isDark
              ? "text-gray-400 hover:text-gray-200 hover:bg-gray-700"
              : "text-gray-500 hover:text-violet-600 hover:bg-violet-50"
            }
          `}
          title="Actualiser les notifications"
        >
          <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
        </button>

        {/* Cloche de notification */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className={`
              relative p-2 rounded-lg transition-colors
              ${isDark
                ? "text-gray-400 hover:text-gray-200 hover:bg-gray-700"
                : "text-gray-600 hover:text-violet-600 hover:bg-violet-50"
              }
            `}
            title="Notifications"
          >
            <Bell size={22} />
            {/* Badge du nombre de notifications non lues */}
            {unreadCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[20px] h-5 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[10px] font-bold px-1 shadow-lg">
                {unreadCount > 99 ? "99+" : unreadCount}
              </span>
            )}
          </button>

          {/* Dropdown des notifications */}
          {showNotifications && (
            <div
              className={`
                absolute right-0 top-full mt-2 w-[380px] max-h-[520px] rounded-2xl shadow-2xl border overflow-hidden z-50
                ${isDark
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-100"
                }
              `}
            >
              {/* En-tête du dropdown */}
              <div
                className={`
                  flex items-center justify-between px-4 py-3 border-b
                  ${isDark ? "border-gray-700" : "border-gray-100"}
                `}
              >
                <div className="flex items-center gap-2">
                  <Bell size={16} className={isDark ? "text-violet-400" : "text-violet-600"} />
                  <h3 className={`font-semibold text-sm ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                    Notifications
                  </h3>
                  {unreadCount > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 text-xs font-bold">
                      {unreadCount}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  {/* Bouton "Tout marquer comme lu" */}
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className={`p-1.5 rounded-lg transition-colors text-xs flex items-center gap-1 ${
                        isDark
                          ? "text-violet-400 hover:bg-gray-700"
                          : "text-violet-600 hover:bg-violet-50"
                      }`}
                      title="Tout marquer comme lu"
                    >
                      <CheckCheck size={14} />
                      <span className="hidden sm:inline">Tout lire</span>
                    </button>
                  )}
                  <button
                    onClick={() => setShowNotifications(false)}
                    className={`p-1 rounded-lg transition-colors ${
                      isDark ? "text-gray-400 hover:text-gray-200" : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Liste des notifications */}
              <div className="overflow-y-auto max-h-[440px]">
                {notifications.length === 0 ? (
                  <div className={`px-4 py-8 text-center text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                    <Bell size={32} className={`mx-auto mb-3 ${isDark ? "text-gray-600" : "text-gray-300"}`} />
                    Aucune notification
                  </div>
                ) : (
                  <>
                    {/* Section : Non lues */}
                    {unreadNotifications.length > 0 && (
                      <div>
                        <div className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider ${
                          isDark ? "text-violet-400 bg-gray-900/50" : "text-violet-600 bg-violet-50/50"
                        }`}>
                          Non lues ({unreadNotifications.length})
                        </div>
                        {unreadNotifications.map((notif) => (
                          <button
                            key={`unread-${notif._id}`}
                            onClick={() => handleNotificationClick(notif)}
                            className={`
                              w-full flex items-start gap-3 px-4 py-3 text-left border-b transition-colors
                              ${isDark
                                ? "border-gray-700 hover:bg-gray-700/50 bg-violet-900/10"
                                : "border-gray-50 hover:bg-violet-50 bg-violet-50/40"
                              }
                            `}
                          >
                            {/* Icône du type */}
                            <div className="mt-0.5 shrink-0">
                              {getNotificationIcon(notif.type)}
                            </div>

                            {/* Contenu */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <p className={`text-sm font-medium truncate ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                                  {notif.title}
                                </p>
                                <span className="w-2 h-2 rounded-full bg-violet-500 shrink-0" />
                              </div>
                              <p className={`text-xs truncate mt-0.5 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                                {notif.subtitle}
                              </p>
                              <p className={`text-xs truncate mt-0.5 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                                {notif.message}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                <p className={`text-[10px] ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                                  {timeAgo(notif.createdAt)}
                                </p>
                                <p className={`text-[10px] ${isDark ? "text-gray-600" : "text-gray-300"}`}>
                                  • {formatDateTime(notif.createdAt)}
                                </p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Section : Lues */}
                    {readNotifications.length > 0 && (
                      <div>
                        <div className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider ${
                          isDark ? "text-gray-500 bg-gray-900/30" : "text-gray-400 bg-gray-50/50"
                        }`}>
                          Lues ({readNotifications.length})
                        </div>
                        {readNotifications.slice(0, 10).map((notif) => (
                          <button
                            key={`read-${notif._id}`}
                            onClick={() => handleNotificationClick(notif)}
                            className={`
                              w-full flex items-start gap-3 px-4 py-3 text-left border-b transition-colors
                              ${isDark
                                ? "border-gray-700 hover:bg-gray-700/50"
                                : "border-gray-50 hover:bg-violet-50"
                              }
                            `}
                          >
                            {/* Icône du type */}
                            <div className="mt-0.5 shrink-0">
                              {getNotificationIcon(notif.type)}
                            </div>

                            {/* Contenu */}
                            <div className="flex-1 min-w-0">
                              <p className={`text-sm font-medium truncate ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                {notif.title}
                              </p>
                              <p className={`text-xs truncate mt-0.5 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                                {notif.subtitle}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                <p className={`text-[10px] ${isDark ? "text-gray-600" : "text-gray-300"}`}>
                                  {timeAgo(notif.createdAt)}
                                </p>
                                <p className={`text-[10px] ${isDark ? "text-gray-600" : "text-gray-300"}`}>
                                  • {formatDateTime(notif.createdAt)}
                                </p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Bouton Dark/Light Mode */}
        <button
          onClick={toggleTheme}
          className={`
            p-2 rounded-lg transition-colors
            ${isDark
              ? "text-yellow-400 hover:bg-gray-700"
              : "text-gray-600 hover:text-violet-600 hover:bg-violet-50"
            }
          `}
          title={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
        >
          {isDark ? <Sun size={22} /> : <Moon size={22} />}
        </button>

        {/* Avatar utilisateur */}
        <div
          className={`
            w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm
            bg-gradient-to-r from-orange-400 to-pink-500 shadow-md
          `}
        >
          A
        </div>
      </div>
    </header>
  );
}

export default Header;