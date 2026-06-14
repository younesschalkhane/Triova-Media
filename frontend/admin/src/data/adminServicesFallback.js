/**
 * Données de secours pour le panneau d'administration.
 * Utilisées lorsque l'API backend est indisponible.
 */

const adminServicesFallback = [
  {
    _id: "fallback-1",
    id: "fallback-1",
    title: "Programmation Web",
    slug: "programmation-web",
    shortDescription:
      "Nous développons des sites web modernes, rapides et entièrement sur mesure pour répondre aux besoins spécifiques de votre activité.",
    description:
      "Nous développons des sites web modernes, rapides et entièrement sur mesure pour répondre aux besoins spécifiques de votre activité.",
    category: "Création Site Web",
    features: [
      "Développement front-end moderne et responsive",
      "Interfaces fluides et optimisées UX/UI",
      "Intégration de fonctionnalités dynamiques",
      "Code propre, scalable et maintenable",
    ],
    icon: "code2",
    image: "",
    status: "active",
    price: 0,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "fallback-2",
    id: "fallback-2",
    title: "Solutions AI",
    slug: "solutions-ai",
    shortDescription:
      "Nous développons des solutions d'intelligence artificielle modernes, performantes et entièrement adaptées aux besoins de votre activité.",
    description:
      "Nous développons des solutions d'intelligence artificielle modernes, performantes et entièrement adaptées aux besoins de votre activité.",
    category: "Solutions d'Intelligence Artificielle",
    features: [
      "Développement d'agents IA intelligents et automatisés",
      "Chatbots IA fluides et optimisés UX/UI",
      "Intégration d'API IA et fonctionnalités avancées",
      "Solutions scalables, sécurisées et maintenables",
    ],
    icon: "brain",
    image: "",
    status: "active",
    price: 0,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "fallback-3",
    id: "fallback-3",
    title: "Identité Visuelle",
    slug: "identite-visuelle",
    shortDescription:
      "Nous créons des identités visuelles modernes et mémorables qui reflètent parfaitement l'image et les valeurs de votre marque.",
    description:
      "Nous créons des identités visuelles modernes et mémorables qui reflètent parfaitement l'image et les valeurs de votre marque.",
    category: "Identité Visuelle",
    features: [
      "Création de logos uniques et professionnels",
      "Conception de chartes graphiques modernes",
      "Design de supports marketing et réseaux sociaux",
      "Identité visuelle cohérente, créative et évolutive",
    ],
    icon: "palette",
    image: "",
    status: "active",
    price: 0,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "fallback-4",
    id: "fallback-4",
    title: "ADS Marketing",
    slug: "ads-marketing",
    shortDescription:
      "Nous créons des campagnes publicitaires digitales performantes pour développer votre visibilité, attirer de nouveaux clients et maximiser vos résultats.",
    description:
      "Nous créons des campagnes publicitaires digitales performantes pour développer votre visibilité, attirer de nouveaux clients et maximiser vos résultats.",
    category: "Google Ads et Meta Ads",
    features: [
      "Création et gestion de campagnes Meta Ads et Google Ads",
      "Ciblage précis et optimisation des performances",
      "Visuels publicitaires modernes et impactants",
      "Stratégies marketing orientées conversion et ROI",
    ],
    icon: "megaphone",
    image: "",
    status: "active",
    price: 0,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "fallback-5",
    id: "fallback-5",
    title: "Création AI",
    slug: "creation-ai",
    shortDescription:
      "Nous concevons des créations basées sur l'intelligence artificielle pour donner vie à vos idées avec innovation, rapidité et créativité.",
    description:
      "Nous concevons des créations basées sur l'intelligence artificielle pour donner vie à vos idées avec innovation, rapidité et créativité.",
    category: "Intelligence Artificielle",
    features: [
      "Génération de contenus visuels et designs par IA",
      "Création de vidéos et visuels publicitaires IA",
      "Production de contenus créatifs pour réseaux sociaux",
      "Solutions IA innovantes, rapides et personnalisées",
    ],
    icon: "sparkles",
    image: "",
    status: "active",
    price: 0,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "fallback-6",
    id: "fallback-6",
    title: "Social Media",
    slug: "social-media",
    shortDescription:
      "Stratégie éditoriale, production de contenu et community management. On transforme vos abonnés en ambassadeurs.",
    description:
      "Stratégie éditoriale, production de contenu et community management. On transforme vos abonnés en ambassadeurs.",
    category: "Communauté et Engagement",
    features: [
      "Stratégie et ligne éditoriale",
      "Production photo, vidéo, motion",
      "Community management 7j/7",
      "Influence et partenariats créateurs",
    ],
    icon: "share2",
    image: "",
    status: "active",
    price: 0,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "fallback-7",
    id: "fallback-7",
    title: "SEO et Référencement",
    slug: "seo-referencement",
    shortDescription:
      "Audit technique, stratégie de contenu et optimisation SEO pour améliorer votre visibilité sur Google.",
    description:
      "Audit technique, stratégie de contenu et optimisation SEO pour améliorer votre visibilité sur Google.",
    category: "Visibilité Organique",
    features: [
      "Audit SEO technique complet",
      "Recherche de mots-clés",
      "Optimisation on-page",
      "Stratégie backlinks",
    ],
    icon: "search",
    image: "",
    status: "active",
    price: 0,
    createdAt: new Date().toISOString(),
  },
];

export default adminServicesFallback;