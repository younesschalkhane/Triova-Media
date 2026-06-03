import { useState } from "react";
import { FaRobot } from "react-icons/fa";

export default function ChatBox() {
  const [openChat, setOpenChat] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Bonjour et bienvenue chez Triova Media !" }
  ]);
  const [input, setInput] = useState("");

  // FAQ
 const faq = [
  {
    keywords: ["prix", "devis", "combien", "tarif"],
    answer: "💰 Chez Triova Media, nos prix dépendent de votre projet. Contactez-nous pour un devis personnalisé."
  },
  {
    keywords: ["services", "service", "offre"],
    answer: "🚀 Nos services incluent : création de sites web, marketing digital, branding, SEO et publicité ADS."
  },
  {
    keywords: ["site web", "web"],
    answer: "💻 Nous créons des sites web modernes, rapides et optimisés pour votre business."
  },
  {
    keywords: ["marketing", "publicité", "ads"],
    answer: "📢 Nous gérons vos campagnes publicitaires (Facebook Ads, Google Ads) pour attirer plus de clients."
  },
  {
    keywords: ["seo", "référencement"],
    answer: "🔍 Nous optimisons votre site pour apparaître en premier sur Google (SEO)."
  },
  {
    keywords: ["branding", "logo"],
    answer: "🎨 Nous créons votre identité visuelle : logo, couleurs, design professionnel."
  },
  {
    keywords: ["qui êtes-vous", "qui vous", "agence"],
    answer: "🏢 Triova Media est une agence digitale spécialisée en création web et marketing digital."
  },
  {
    keywords: ["où", "localisation", "adresse"],
    answer: "📍 Nous sommes une agence 100% en ligne et travaillons avec des clients partout."
  },
  {
    keywords: ["contact", "whatsapp", "email"],
    answer: "📞 Vous pouvez nous contacter via le formulaire du site ou WhatsApp."
  },
  {
    keywords: ["temps", "durée", "combien de temps"],
    answer: "⏳ La durée dépend du projet, généralement entre quelques jours et quelques semaines."
  },
  {
    keywords: ["bonjour", "salut", "hello"],
    answer: "👋 Bonjour ! Bienvenue chez Triova Media. Comment puis-je vous aider ?"
  }
];

  const getBotReply = (userMsg) => {
    const msg = userMsg.toLowerCase();

    const found = faq.find(item =>
      item.keywords.some(keyword => msg.includes(keyword))
    );

    return found
      ? found.answer
      : "🤖 Triova Media est à votre service. Merci de préciser votre demande .";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const botMessage = { from: "bot", text: getBotReply(input) };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
     <button
  onClick={() => setOpenChat(!openChat)}
  className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
>
  <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 text-white flex items-center justify-center text-2xl sm:text-3xl shadow-xl hover:scale-110 transition">
    <FaRobot />
  </div>
</button>

      {/* CHAT BOX */}
      {openChat && (
        <div className="fixed bottom-24 right-6 p-[2px] rounded-3xl bg-gradient-to-r from-sky-200 to-violet-300 z-50">
           

          {/* HEADER */}
          <div className="bg-gradient-to-r from-sky-500 to-violet-600 p-4 text-white rounded-t-3xl">
            <h3 className="font-semibold">Triova Assistant</h3>
          </div>

          {/* MESSAGES */}
          <div className="p-4 h-72 overflow-y-auto text-sm space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-xl max-w-[80%] ${
                  msg.from === "user"
                    ? "bg-sky-500 text-white ml-auto"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* INPUT */}
          <div className="p-3  flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1  rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300"
              placeholder="Message..."
            />

            <button
              onClick={sendMessage}
              className="bg-gradient-to-r from-sky-500 to-violet-600 text-white px-4 rounded-xl text-sm"
            >
              Envoyer
            </button>
          </div>

        </div>
      )}
    </>
  );
}