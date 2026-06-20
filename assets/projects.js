// Заменяйте тексты, категории, роли и placeholder-подписи ниже, когда будут готовы реальные материалы кейсов.
const projects = [
  {
    slug: "gfpa",
    title: "GFPA",
    category: {
      ru: "Институциональная айдентика",
      en: "Institutional Brand Identity"
    },
    year: "2025",
    role: {
      ru: "Стратегия бренда, айдентика, презентационная система",
      en: "Brand strategy, identity, presentation system"
    },
    featured: true,
    accent: "linear-gradient(145deg, #111113 0%, #1b1c20 58%, #ff3c00 135%)",
    summary: {
      ru: "Строгая институциональная система, выстроенная для доверия, ясности и масштабируемой коммуникации.",
      en: "A rigorous institutional system built for trust, clarity and scalable communication."
    },
    intro: {
      ru: "GFPA требовал визуального языка, который одинаково уверенно работает в официальной среде, цифровых носителях и презентациях.",
      en: "GFPA needed a visual language that could work with equal confidence across formal, digital and presentation contexts."
    },
    sections: {
      context: {
        ru: "До проекта коммуникация была фрагментированной, а у разных подразделений не было общего визуального правила.",
        en: "Before the project, communication was fragmented and departments lacked a shared visual rule set."
      },
      challenge: {
        ru: "Нужно было совместить институциональную строгость с достаточной гибкостью для разных форматов и аудиторий.",
        en: "The challenge was to balance institutional rigor with enough flexibility for different formats and audiences."
      },
      visualSystem: {
        ru: "Система строится на плотной типографической иерархии, спокойной графитовой базе и модульной композиции.",
        en: "The system is built on dense typographic hierarchy, a restrained graphite base and modular composition."
      },
      aiWorkflow: {
        ru: "AI использовался для быстрого тестирования визуальных направлений и сценариев применения до финальной ручной настройки.",
        en: "AI was used to test visual territories and application scenarios quickly before final manual refinement."
      },
      applications: {
        ru: "Идентика была перенесена в презентации, схемы, документы и наборы типовых макетов для внутренних команд.",
        en: "The identity was translated into presentations, diagrams, documents and repeatable layout kits for internal teams."
      },
      result: {
        ru: "GFPA получил цельную и современную систему, рассчитанную на долгую эксплуатацию, а не на единичный запуск.",
        en: "GFPA received a cohesive contemporary system designed for long-term use rather than a one-off launch."
      }
    },
    gallery: [
      {
        ru: "Архитектура институционального бренда",
        en: "Institutional brand architecture"
      },
      {
        ru: "Система презентационных макетов",
        en: "Presentation layout system"
      },
      {
        ru: "AI-тестирование визуальных направлений",
        en: "AI-assisted visual territory testing"
      },
      {
        ru: "Носители и коммуникационные инструменты",
        en: "Applications and communication tools"
      }
    ]
  },
  {
    slug: "veld",
    title: "Veld",
    category: {
      ru: "Коллекция вкусов и открытий",
      en: "Collection of Tastes and Discoveries"
    },
    year: "2024",
    role: {
      ru: "Арт-дирекшн, айдентика, визуальный язык",
      en: "Art direction, identity, visual language"
    },
    featured: true,
    accent: "linear-gradient(145deg, #111113 0%, #1e1a17 60%, #ff3c00 140%)",
    summary: {
      ru: "Атмосферная editorial-айдентика для бренда, где важны вкус, культурный слой и тактильная подача.",
      en: "An atmospheric editorial identity for a brand shaped by taste, culture and tactile presentation."
    },
    intro: {
      ru: "Veld требовал визуальной системы, которая выглядит тепло и культурно, но сохраняет структурную точность.",
      en: "Veld needed a visual system that felt warm and cultured while preserving structural precision."
    },
    sections: {
      context: {
        ru: "Бренд объединяет продуктовый, редакционный и опытный слой, поэтому айдентика должна была работать в нескольких режимах.",
        en: "The brand spans product, editorial and experiential layers, so the identity had to work in multiple modes."
      },
      challenge: {
        ru: "Основная задача состояла в том, чтобы сделать подачу чувственной, но не расплывчатой и не декоративной.",
        en: "The main challenge was to make the output sensorial without becoming vague or decorative."
      },
      visualSystem: {
        ru: "Система держится на крупной типографике, спокойных полях, фотографическом ритме и точечных акцентах.",
        en: "The system relies on large typography, calm spacing, photographic rhythm and precise accents."
      },
      aiWorkflow: {
        ru: "AI-пайплайн помогал собирать mood-boards, тестировать сцены и ускорять поиск нужного эмоционального тона.",
        en: "The AI workflow supported moodboarding, scene testing and faster search for the right emotional tone."
      },
      applications: {
        ru: "Айдентика развернулась в кампаниях, lookbook-материалах, digital-коммуникации и презентационных шаблонах.",
        en: "The identity extended into campaigns, lookbooks, digital communication and presentation templates."
      },
      result: {
        ru: "Veld получил более отчетливую визуальную индивидуальность, которая выдерживает и продукт, и нарратив.",
        en: "Veld gained a more distinct visual character able to support both product and narrative."
      }
    },
    gallery: [
      {
        ru: "Editorial-обложка и общее настроение",
        en: "Editorial cover language and mood"
      },
      {
        ru: "Сторителлинг бренда",
        en: "Brand storytelling"
      },
      {
        ru: "Направление для продуктовых визуалов",
        en: "Direction for product visuals"
      },
      {
        ru: "Детали rollout-системы",
        en: "Rollout system details"
      }
    ]
  },
  {
    slug: "axonic",
    title: "AXONIC",
    category: {
      ru: "Нейротехнологический бренд-платформинг",
      en: "Neurotechnology Brand Platform"
    },
    year: "2026",
    role: {
      ru: "Бренд-платформа, визуальная система, AI process design",
      en: "Brand platform, visual system, AI process design"
    },
    featured: true,
    accent: "linear-gradient(145deg, #101114 0%, #181c22 60%, #ff3c00 140%)",
    summary: {
      ru: "Точная и собранная identity-платформа для бренда на стыке науки, продукта и future-facing коммуникации.",
      en: "A precise identity platform for a brand positioned between research, product and future-facing communication."
    },
    intro: {
      ru: "AXONIC нуждался в техно-бренде без визуальных клише, но с ощущением интеллекта, сигнала и внутренней дисциплины.",
      en: "AXONIC needed a technology brand without visual clichés, but with a sense of intelligence, signal and discipline."
    },
    sections: {
      context: {
        ru: "Бренд одновременно работает с исследователями, продуктовой аудиторией и инвесторским контуром.",
        en: "The brand needs to speak to researchers, product audiences and investor stakeholders at the same time."
      },
      challenge: {
        ru: "Нужно было избежать холодной абстракции и при этом остаться в поле высокой технологичности.",
        en: "The challenge was to avoid cold abstraction while still feeling highly technological."
      },
      visualSystem: {
        ru: "Основу составили сигналоподобная графика, плотный контраст и редкие оранжевые акценты в точках напряжения.",
        en: "The visual base combines signal-inspired graphics, dense contrast and rare orange accents at points of emphasis."
      },
      aiWorkflow: {
        ru: "AI использовался для направленного исследования diagram-based imagery и быстрых итераций в презентационных сценариях.",
        en: "AI was used for directed exploration of diagram-based imagery and rapid iterations in presentation scenarios."
      },
      applications: {
        ru: "Система легла в основу key visuals, investor decks, motion-ready паттернов и структурных digital-носителей.",
        en: "The system informed key visuals, investor decks, motion-ready patterns and structured digital applications."
      },
      result: {
        ru: "AXONIC получил визуальную платформу, которая выглядит серьезно, технологично и не теряется в общем tech-поле.",
        en: "AXONIC gained a serious, technological visual platform that avoids dissolving into generic tech aesthetics."
      }
    },
    gallery: [
      {
        ru: "Обложка и сигнальная графика",
        en: "Cover system and signal graphics"
      },
      {
        ru: "Технические схемы и deck language",
        en: "Technical diagrams and deck language"
      },
      {
        ru: "AI-generated concept directions",
        en: "AI-generated concept directions"
      },
      {
        ru: "Digital-носители и motion-ready assets",
        en: "Digital assets and motion-ready outputs"
      }
    ]
  },
  {
    slug: "assoro",
    title: "ASSORO",
    category: {
      ru: "Визуальная система fashion-аксессуаров",
      en: "Fashion Accessories Visual System"
    },
    year: "2024",
    role: {
      ru: "Айдентика, арт-дирекшн",
      en: "Identity design, art direction"
    },
    featured: true,
    accent: "linear-gradient(145deg, #111113 0%, #241817 62%, #ff3c00 148%)",
    summary: {
      ru: "Сдержанная fashion-айдентика, в которой продукт остается в центре, а визуальная система создает ритм и статус.",
      en: "A restrained fashion identity where the product stays central while the system creates rhythm and status."
    },
    intro: {
      ru: "ASSORO требовал визуального языка, который чувствуется дорогим и современным без лишней декоративности.",
      en: "ASSORO needed a visual language that felt premium and contemporary without excessive decoration."
    },
    sections: {
      context: {
        ru: "Категория чувствительна к изображению, поэтому система должна была работать рядом с продуктовой съемкой, а не спорить с ней.",
        en: "The category is highly image-sensitive, so the system had to support product imagery rather than compete with it."
      },
      challenge: {
        ru: "Задача состояла в том, чтобы сделать бренд запоминающимся через ритм, композицию и тон, а не через шум.",
        en: "The task was to make the brand memorable through rhythm, composition and tone rather than noise."
      },
      visualSystem: {
        ru: "Монохромная база, строгая сетка и точечная типографическая выразительность сформировали спокойный premium-характер.",
        en: "A monochrome base, strict grid and selective typographic expression created a calm premium character."
      },
      aiWorkflow: {
        ru: "AI использовался для тестов по mood, стилизации и направлению съемки до финального арт-дирекшна.",
        en: "AI was used to test mood, styling and photography direction before final art direction decisions."
      },
      applications: {
        ru: "Система была адаптирована для product cards, social-кампаний, lookbooks и сезонных презентаций.",
        en: "The system was adapted for product cards, social campaigns, lookbooks and seasonal presentations."
      },
      result: {
        ru: "ASSORO получил собранный fashion-образ, который одинаково хорошо работает в digital и print-среде.",
        en: "ASSORO gained a refined fashion presence that performs well across both digital and print environments."
      }
    },
    gallery: [
      {
        ru: "Fashion-кампания и ключевые ракурсы",
        en: "Fashion campaign and key angles"
      },
      {
        ru: "Product storytelling",
        en: "Product storytelling"
      },
      {
        ru: "AI mood studies",
        en: "AI mood studies"
      },
      {
        ru: "Lookbook и rollout-макеты",
        en: "Lookbook and rollout layouts"
      }
    ]
  },
  {
    slug: "gpn-custom-type-test",
    title: "GPN Custom Type Test",
    category: {
      ru: "Исследование корпоративного шрифта",
      en: "Corporate Typeface Research"
    },
    year: "2023",
    role: {
      ru: "Шрифтовое исследование, бренд-система, презентации",
      en: "Typeface research, brand systems, presentations"
    },
    featured: true,
    accent: "linear-gradient(145deg, #111113 0%, #1c1d21 60%, #ff3c00 145%)",
    summary: {
      ru: "Исследование того, как кастомная типографика может стать системным инструментом узнаваемости и управления тоном.",
      en: "An exploration of how custom typography can become a systemic tool for recognition and tone management."
    },
    intro: {
      ru: "Проект анализировал, как корпоративный шрифт способен связывать презентации, документацию и product-коммуникацию в единый язык.",
      en: "The project examined how a corporate typeface could connect presentations, documentation and product communication into one language."
    },
    sections: {
      context: {
        ru: "В крупной структуре типографика влияет на узнаваемость не меньше, чем логотип и графические элементы.",
        en: "In a large organization, typography influences recognition as much as the logo and graphic elements do."
      },
      challenge: {
        ru: "Нужно было оценить одновременно характер, читаемость, диапазон и пригодность для разных сценариев.",
        en: "The task was to evaluate character, legibility, range and suitability across multiple scenarios at once."
      },
      visualSystem: {
        ru: "В фокусе были шрифтовая иерархия, масштаб, плотность текста и визуальная дисциплина на уровне системы.",
        en: "The focus was on type hierarchy, scale, text density and system-level visual discipline."
      },
      aiWorkflow: {
        ru: "AI помогал сортировать референсы, сравнивать направления и ускорять подготовку exploratory specimens.",
        en: "AI helped sort references, compare directions and speed up exploratory specimen preparation."
      },
      applications: {
        ru: "Результаты были оформлены в исследовательские deck'и, comparative sheets и рекомендации по внедрению.",
        en: "The findings were structured into research decks, comparative sheets and rollout recommendations."
      },
      result: {
        ru: "Проект сформировал ясную рамку для того, чтобы типографика работала как полноценный бренд-актив.",
        en: "The project established a clear framework for treating typography as a full brand asset."
      }
    },
    gallery: [
      {
        ru: "Typeface specimens",
        en: "Typeface specimens"
      },
      {
        ru: "Корпоративная иерархия и композиция",
        en: "Corporate hierarchy and composition"
      },
      {
        ru: "AI-supported research",
        en: "AI-supported research"
      },
      {
        ru: "Guideline outputs",
        en: "Guideline outputs"
      }
    ]
  },
  {
    slug: "ecotek",
    title: "ECOTEK",
    category: {
      ru: "Экологическая бренд-архитектура",
      en: "Ecological Brand Architecture"
    },
    year: "2025",
    role: {
      ru: "Бренд-архитектура, визуальная система, AI imaging",
      en: "Brand architecture, visual system, AI imaging"
    },
    featured: true,
    accent: "linear-gradient(145deg, #101112 0%, #18191b 60%, #ff3c00 145%)",
    summary: {
      ru: "Системный экологический бренд для компании, которой нужно было объединить продуктовую сложность и внятный корпоративный тон.",
      en: "A systems-based ecological brand for a company that needed to unify product complexity with a clear corporate tone."
    },
    intro: {
      ru: "ECOTEK требовал архитектуры, способной одновременно объяснять направление компании и поддерживать линейку решений.",
      en: "ECOTEK required an architecture able to explain the company’s direction while supporting a portfolio of solutions."
    },
    sections: {
      context: {
        ru: "У бренда было несколько коммуникационных уровней, и без общей логики они расходились в разные стороны.",
        en: "The brand had several communication layers that drifted apart without a shared logic."
      },
      challenge: {
        ru: "Нужно было избежать экологических клише и при этом сохранить ощущение ответственности и инженерной точности.",
        en: "The challenge was to avoid ecological clichés while preserving a sense of responsibility and engineering precision."
      },
      visualSystem: {
        ru: "Система объединила модульную композицию, строгую графику и узкий спектр акцентных тонов вокруг графитовой базы.",
        en: "The system combines modular composition, strict graphics and a narrow accent spectrum around a graphite base."
      },
      aiWorkflow: {
        ru: "Генеративные инструменты помогли быстро просчитать environment-visuals и тестовые сценарии коммуникации.",
        en: "Generative tools helped rapidly prototype environmental visuals and test communication scenarios."
      },
      applications: {
        ru: "Айдентика была развернута в презентациях, product-коммуникации, signage и digital-материалах.",
        en: "The identity was rolled out into presentations, product communication, signage and digital materials."
      },
      result: {
        ru: "ECOTEK получил более интеллектуальный и собранный образ, который помогает удерживать сложность под контролем.",
        en: "ECOTEK gained a more intelligent, composed presence that helps keep complexity under control."
      }
    },
    gallery: [
      {
        ru: "Карта бренд-архитектуры",
        en: "Brand architecture map"
      },
      {
        ru: "Presentation toolkit",
        en: "Presentation toolkit"
      },
      {
        ru: "AI-generated scenario tests",
        en: "AI-generated scenario tests"
      },
      {
        ru: "System applications",
        en: "System applications"
      }
    ]
  },
  {
    slug: "iron-bolt",
    title: "Iron Bolt",
    category: {
      ru: "Система бренд-идентики",
      en: "Brand Identity System"
    },
    year: "2024",
    role: {
      ru: "Айдентика, направление rollout",
      en: "Identity design, rollout direction"
    },
    featured: true,
    accent: "linear-gradient(145deg, #101011 0%, #19191b 62%, #ff3c00 148%)",
    summary: {
      ru: "Устойчивая и жесткая identity-система для индустриального бренда, которому нужен был характер без лишнего шума.",
      en: "A durable identity system for an industrial brand that needed character without excessive noise."
    },
    intro: {
      ru: "Iron Bolt требовал обновления, которое выглядело бы сильным и уверенным, но оставалось бы прикладным.",
      en: "Iron Bolt needed an update that felt strong and confident while remaining practical."
    },
    sections: {
      context: {
        ru: "Категория перегружена похожими визуальными кодами, поэтому бренду нужен был более собственный голос.",
        en: "The category is crowded with similar visual codes, so the brand needed a more distinctive voice."
      },
      challenge: {
        ru: "Главная задача состояла в том, чтобы сделать систему мощной через структуру, а не через визуальную агрессию.",
        en: "The core challenge was to make the system powerful through structure rather than visual aggression."
      },
      visualSystem: {
        ru: "В систему вошли плотный знак, сжатая иерархия и контрастные плоскости, вдохновленные индустриальной средой.",
        en: "The system uses a dense mark, compact hierarchy and contrast planes inspired by industrial environments."
      },
      aiWorkflow: {
        ru: "AI помогал проверять, как система ведет себя в упаковке, среде и быстрых mockup-сценариях.",
        en: "AI helped test how the system behaves across packaging, environments and rapid mockup scenarios."
      },
      applications: {
        ru: "Решение развернулось в brand deck, packaging logic, trade-show материалах и базовом marketing-kit.",
        en: "The solution rolled out into brand decks, packaging logic, trade-show materials and a core marketing kit."
      },
      result: {
        ru: "Iron Bolt получил более сильную и узнаваемую визуальную систему, не потеряв прикладной ясности.",
        en: "Iron Bolt gained a stronger, more recognizable visual system without losing practical clarity."
      }
    },
    gallery: [
      {
        ru: "Industrial identity system",
        en: "Industrial identity system"
      },
      {
        ru: "Packaging and signage",
        en: "Packaging and signage"
      },
      {
        ru: "AI mockup scenarios",
        en: "AI mockup scenarios"
      },
      {
        ru: "Rollout communications",
        en: "Rollout communications"
      }
    ]
  },
  {
    slug: "bulat",
    title: "Bulat",
    category: {
      ru: "Редизайн бренда принтеров",
      en: "Printer Brand Redesign"
    },
    year: "2023",
    role: {
      ru: "Бренд-обновление, визуальный язык, презентации",
      en: "Brand refresh, visual language, presentations"
    },
    featured: false,
    accent: "linear-gradient(145deg, #111113 0%, #1b1d20 60%, #ff3c00 145%)",
    summary: {
      ru: "Обновление бренда принтеров с фокусом на ясную структуру, современность и product-коммуникацию.",
      en: "A printer brand refresh focused on clarity, modernity and product communication."
    },
    intro: {
      ru: "Bulat нуждался в более чистом визуальном языке, который помогал бы продавать, а не усложнять восприятие.",
      en: "Bulat needed a cleaner visual language that would help sell rather than complicate perception."
    },
    sections: {
      context: {
        ru: "Старые материалы выглядели неоднородно и не формировали достаточно уверенного впечатления.",
        en: "Legacy materials felt inconsistent and failed to create a confident impression."
      },
      challenge: {
        ru: "Нужно было обновить бренд, не потеряв понятность технической информации и product-layer.",
        en: "The challenge was to modernize the brand without losing clarity in technical and product communication."
      },
      visualSystem: {
        ru: "Новый язык строится на более четкой иерархии, контрастных заголовках и собранной палитре.",
        en: "The new language relies on clearer hierarchy, stronger headlines and a more controlled palette."
      },
      aiWorkflow: {
        ru: "AI-тесты использовались для быстрой проверки layout-подходов и вариантов product-presentation.",
        en: "AI tests were used to quickly compare layout approaches and product-presentation variants."
      },
      applications: {
        ru: "Система была применена к pitch decks, product pages, print-материалам и launch-коммуникации.",
        en: "The system was applied to pitch decks, product pages, print materials and launch communication."
      },
      result: {
        ru: "Bulat получил более профессиональный и современный образ с четкой продуктовой логикой.",
        en: "Bulat gained a more professional, contemporary presence with clearer product logic."
      }
    },
    gallery: [
      {
        ru: "Brand refresh cover",
        en: "Brand refresh cover"
      },
      {
        ru: "Product communication hierarchy",
        en: "Product communication hierarchy"
      },
      {
        ru: "AI layout tests",
        en: "AI layout tests"
      },
      {
        ru: "Sales and launch materials",
        en: "Sales and launch materials"
      }
    ]
  },
  {
    slug: "wow-lan",
    title: "WOW-LAN",
    category: {
      ru: "Айдентика цифрового портала",
      en: "Digital Portal Identity"
    },
    year: "2022",
    role: {
      ru: "Портальная айдентика, interface direction",
      en: "Portal identity, interface direction"
    },
    featured: false,
    accent: "linear-gradient(145deg, #101113 0%, #181b20 60%, #ff3c00 145%)",
    summary: {
      ru: "Digital-first идентика для портала, где узнаваемость бренда должна работать вместе с навигационной ясностью.",
      en: "A digital-first identity for a portal where brand recognition must coexist with navigational clarity."
    },
    intro: {
      ru: "WOW-LAN требовал подвижного, но дисциплинированного визуального языка для среды интерфейсов.",
      en: "WOW-LAN needed an energetic yet disciplined visual language for an interface-based environment."
    },
    sections: {
      context: {
        ru: "Основная жизнь бренда происходила в digital, поэтому система с самого начала должна была быть интерфейсной.",
        en: "The brand lived primarily in digital, so the system had to be interface-native from the start."
      },
      challenge: {
        ru: "Задача состояла в том, чтобы добавить энергии, не ломая читаемость и логику работы с контентом.",
        en: "The challenge was to add energy without breaking readability or content logic."
      },
      visualSystem: {
        ru: "Были собраны компактная типографическая схема, динамичные фреймы и аккуратный акцентный цвет.",
        en: "The system combines compact typography, dynamic framing and a controlled accent color."
      },
      aiWorkflow: {
        ru: "AI помогал ускорять поиск digital moods, interface references и rollout-сценариев.",
        en: "AI helped speed up the search for digital moods, interface references and rollout scenarios."
      },
      applications: {
        ru: "Идентика была интегрирована в портал, промо-материалы, launch-слайды и supporting visuals.",
        en: "The identity was integrated into the portal, promo materials, launch slides and supporting visuals."
      },
      result: {
        ru: "WOW-LAN получил более ясный и живой digital-образ, работающий внутри интерфейсной логики.",
        en: "WOW-LAN gained a clearer, livelier digital presence that works inside interface logic."
      }
    },
    gallery: [
      {
        ru: "Portal identity cover",
        en: "Portal identity cover"
      },
      {
        ru: "Interface-aligned system",
        en: "Interface-aligned system"
      },
      {
        ru: "AI route studies",
        en: "AI route studies"
      },
      {
        ru: "Launch assets",
        en: "Launch assets"
      }
    ]
  }
];

const kotoMyotoProject = projects.find((project) => project.slug === "gpn-custom-type-test");

if (kotoMyotoProject) {
  Object.assign(kotoMyotoProject, {
    title: "KOTO MYOTO",
    category: {
      ru: "Айдентика корейского street-food бренда",
      en: "Korean Street Food Visual Identity"
    },
    year: "2022",
    role: {
      ru: "Айдентика, арт-дирекшн, упаковка, коммуникационный дизайн",
      en: "Visual identity, art direction, packaging, communication design"
    },
    accent: "linear-gradient(145deg, #071f19 0%, #075142 56%, #ff5f86 135%)",
    cover: "assets/projects/koto-myoto/877ebd153848275.633730eb4958b.png",
    summary: {
      ru: "Яркая визуальная айдентика для бренда корейской уличной еды, построенная на характерной типографике, контрастной палитре и пластике круглых форм.",
      en: "A vivid identity for a Korean street-food brand built around expressive typography, a high-contrast palette and a flexible language of circular forms."
    },
    intro: {
      ru: "KOTO MYOTO объединяет энергию азиатской уличной культуры с простой и узнаваемой системой, которая одинаково уверенно работает на упаковке, меню, постерах и digital-носителях.",
      en: "KOTO MYOTO combines the energy of Asian street culture with a simple recognizable system designed to work across packaging, menus, posters and digital media."
    },
    sections: {
      context: {
        ru: "KOTO MYOTO — концепция бренда корейской уличной еды с фокусом на живой городской аудитории и быстром формате обслуживания.",
        en: "KOTO MYOTO is a Korean street-food brand concept focused on an energetic urban audience and a fast, accessible dining format."
      },
      challenge: {
        ru: "Нужно было создать характерный образ, который передает культурный контекст без буквальных национальных клише и остается заметным в насыщенной городской среде.",
        en: "The challenge was to communicate cultural context without relying on literal national clichés while remaining highly visible in a busy urban environment."
      },
      visualSystem: {
        ru: "Основой стали плотный логотип, глубокий зеленый и яркий розовый, текстурные поверхности и система круглых форм, отсылающих к еде, посуде и восходящему солнцу.",
        en: "The system combines a bold wordmark, deep green and vivid pink, tactile surfaces and circular forms inspired by food, tableware and the rising sun."
      },
      aiWorkflow: {
        ru: "Визуальное направление развивалось через серию коллажных композиций и тестов носителей, чтобы проверить гибкость знака, цвета и типографики.",
        en: "The direction was developed through collage-based compositions and application tests that explored the flexibility of the mark, palette and typography."
      },
      applications: {
        ru: "Айдентика раскрывается в меню, упаковке, пакетах, палочках, постерах, социальных форматах и базовом мерче.",
        en: "The identity expands across menus, takeaway packaging, shopping bags, chopsticks, posters, social formats and basic merchandise."
      },
      result: {
        ru: "Получилась компактная, выразительная система с сильным цветовым кодом и узнаваемым графическим жестом, способная удерживать бренд на самых разных носителях.",
        en: "The result is a compact expressive system with a strong color code and a recognizable graphic gesture that holds together across many touchpoints."
      }
    },
    gallery: [
      { ru: "Ресторанная среда и логотип", en: "Restaurant environment and logo" },
      { ru: "Постерная система", en: "Poster system" },
      { ru: "Меню и коммуникационные носители", en: "Menus and communication assets" },
      { ru: "Упаковка и брендированные предметы", en: "Packaging and branded objects" }
    ],
    media: [
      { src: "assets/projects/koto-myoto/5f80fc153848275.6336f09dcd58c.png", alt: { ru: "Постеры KOTO MYOTO", en: "KOTO MYOTO posters" } },
      { src: "assets/projects/koto-myoto/c9d4e0153848275.6336f09dcb633.png", alt: { ru: "Постеры открытия", en: "Grand opening posters" } },
      { src: "assets/projects/koto-myoto/602dde153848275.633718a980aaf.png", alt: { ru: "Меню и печатные материалы", en: "Menus and printed materials" } },
      { src: "assets/projects/koto-myoto/6d8da3153848275.633730c64fa37.png", alt: { ru: "Палочки и посуда", en: "Chopsticks and tableware" } },
      { src: "assets/projects/koto-myoto/75d5eb153848275.633730c64ec1c.png", alt: { ru: "Бумажная упаковка", en: "Paper packaging" } },
      { src: "assets/projects/koto-myoto/dfa629153848275.6336f09dcc597.png", alt: { ru: "Упаковка блюда", en: "Food packaging" } },
      { src: "assets/projects/koto-myoto/e439fa153848275.6336f09dcf291.png", alt: { ru: "Пакеты KOTO MYOTO", en: "KOTO MYOTO shopping bags" } },
      { src: "assets/projects/koto-myoto/677421153848275.6336f09dca786.png", alt: { ru: "Карточки о корейской еде", en: "Korean food information cards" } },
      { src: "assets/projects/koto-myoto/be910c153848275.6336f09dce290.png", alt: { ru: "Серия социальных публикаций", en: "Social media series" } },
      { src: "assets/projects/koto-myoto/ba3584153848275.6336f4ea2f885.png", alt: { ru: "Футболка с логотипом", en: "Logo T-shirt" }, portrait: true },
      { src: "assets/projects/koto-myoto/eaefc1153848275.6336f4ea30943.png", alt: { ru: "Брендированный пакет в городской среде", en: "Branded bag in an urban setting" }, portrait: true }
    ]
  });
}

const saydoProject = projects.find((project) => project.slug === "veld");

if (saydoProject) {
  Object.assign(saydoProject, {
    slug: "saydo",
    aliases: ["veld"],
    title: "SAYDO",
    category: {
      ru: "Айдентика battery-бренда",
      en: "Battery Brand Identity"
    },
    year: "2025",
    role: {
      ru: "Стратегия, айдентика, упаковка, 3D-визуализация",
      en: "Strategy, identity, packaging, 3D visualization"
    },
    accent: "linear-gradient(145deg, #f8f9ff 0%, #dde4ff 42%, #1f37e4 100%)",
    coverMedia: {
      type: "vimeo",
      src: "https://player.vimeo.com/video/1131022053?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1&controls=0&title=0&byline=0&portrait=0",
      title: "Saydo DNA",
      aspectRatio: "16 / 9",
      zoom: "1.14"
    },
    cover: "assets/projects/saydo/saydo-cover-static.png",
    coverAnimated: "assets/projects/saydo/saydo-cover.gif",
    summary: {
      ru: "Точная айдентика для бренда батареек SAYDO, где технологичный характер сочетается с чистой упаковочной системой и ярким синим кодом.",
      en: "A sharp identity for SAYDO, combining a technological tone with a clean packaging system and a vivid electric-blue code."
    },
    intro: {
      ru: "SAYDO строится на идее энергии, которая работает просто, быстро и заметно. Система объединяет продуктовый дизайн, упаковку, промо-носители и цифровые акценты в один собранный бренд-язык.",
      en: "SAYDO is built around the idea of energy that feels direct, fast and visible. The system brings product design, packaging, promotional media and digital accents into one cohesive brand language."
    },
    sections: {
      context: {
        ru: "SAYDO — концепт battery-бренда с фокусом на повседневные носители энергии, упаковку и retail-подачу. Важно было сделать систему современной, прикладной и легко масштабируемой.",
        en: "SAYDO is a battery brand concept focused on everyday energy products, packaging and retail communication. The system needed to feel modern, practical and scalable."
      },
      challenge: {
        ru: "Задача состояла в том, чтобы уйти от визуального шума категории и собрать выразительную айдентику, которая остается предельно понятной на маленьких форматах упаковки.",
        en: "The challenge was to move away from category clutter and create a distinctive identity that remains crystal clear on small packaging formats."
      },
      visualSystem: {
        ru: "В основе системы — насыщенный синий, лаконичный логотип, направляющая стрелка и контраст белых полей. Графика работает как на батарейках и блистерах, так и на мерче, стикерах и outdoor-носителях.",
        en: "The system is built around a saturated blue, a concise wordmark, a directional arrow and strong white contrast. The graphics work across batteries, blisters, merch, stickers and outdoor media."
      },
      aiWorkflow: {
        ru: "3D- и mockup-сцены использовались как быстрый способ протестировать масштаб логотипа, читаемость маркировки и поведение системы на разных продуктовых типологиях.",
        en: "3D and mockup scenes were used to quickly test logo scale, label clarity and system behavior across different product typologies."
      },
      applications: {
        ru: "Айдентика разворачивается в упаковке AA и coin-cell батареек, POS-материалах, билбордах, промо-стикерах, одежде и аксессуарах.",
        en: "The identity expands across AA and coin-cell packaging, POS materials, billboards, promo stickers, apparel and accessories."
      },
      result: {
        ru: "В результате получилась чистая и уверенная бренд-система с сильным цветовым кодом, которая одинаково хорошо выглядит в digital-среде, на полке и в физическом промо.",
        en: "The result is a clean and confident brand system with a strong color code that performs equally well in digital, on shelf and in physical promotion."
      }
    },
    gallery: [
      {
        ru: "Пространственная бренд-подача",
        en: "Spatial brand presentation"
      },
      {
        ru: "Продуктовые 3D-сцены",
        en: "Product 3D scenes"
      },
      {
        ru: "Упаковочная система",
        en: "Packaging system"
      },
      {
        ru: "Промо- и lifestyle-носители",
        en: "Promo and lifestyle applications"
      }
    ],
    media: [
      {
        src: "assets/projects/saydo/Battery_PS.png",
        alt: {
          ru: "Линейка батареек SAYDO",
          en: "SAYDO battery lineup"
        }
      },
      {
        src: "assets/projects/saydo/coin-battery.png",
        alt: {
          ru: "Кнопочные батарейки SAYDO",
          en: "SAYDO coin battery composition"
        }
      },
      {
        src: "assets/projects/saydo/dna-aa.png",
        alt: {
          ru: "DNA-композиция с батарейками SAYDO",
          en: "SAYDO battery DNA composition"
        }
      },
      {
        src: "assets/projects/saydo/sloy-4-packaging.png",
        alt: {
          ru: "Разворот упаковочной системы SAYDO",
          en: "SAYDO packaging system spread"
        }
      },
      {
        src: "assets/projects/saydo/free-billboard-mockup.png",
        alt: {
          ru: "Билборд SAYDO",
          en: "SAYDO billboard"
        }
      },
      {
        src: "assets/projects/saydo/hoodie.png",
        alt: {
          ru: "Худи SAYDO",
          en: "SAYDO hoodie"
        }
        ,
        portrait: true
      },
      {
        src: "assets/projects/saydo/snapback-pouch.png",
        alt: {
          ru: "Аксессуар SAYDO",
          en: "SAYDO accessory pouch"
        }
        ,
        portrait: true
      },
      {
        src: "assets/projects/saydo/laptop-sticker.png",
        alt: {
          ru: "Стикер-пак SAYDO на ноутбуке",
          en: "SAYDO sticker pack on laptop"
        }
      },
      {
        src: "assets/projects/saydo/saydo-color-crop.gif",
        alt: {
          ru: "Цветовая система SAYDO",
          en: "SAYDO color system"
        }
        ,
        aspectRatio: "1920 / 430",
        position: "center center"
      },
      {
        src: "assets/projects/saydo/saydo-fonts.gif",
        alt: {
          ru: "Типографика SAYDO",
          en: "SAYDO typography"
        }
      },
      {
        src: "assets/projects/saydo/mask-group.png",
        alt: {
          ru: "Блистерная упаковка SAYDO",
          en: "SAYDO blister packaging"
        }
      },
      {
        src: "assets/projects/saydo/woman-holding-bottle.png",
        alt: {
          ru: "Lifestyle-носитель SAYDO",
          en: "SAYDO lifestyle bottle"
        }
      },
      {
        src: "assets/projects/saydo/A_large_white_wall_with.png",
        alt: {
          ru: "SAYDO в выставочном пространстве",
          en: "SAYDO in exhibition space"
        }
      },
      {
        src: "assets/projects/saydo/packaging-2.png",
        alt: {
          ru: "SAYDO coin battery blister packaging",
          en: "SAYDO coin battery blister packaging"
        },
        portrait: true
      },
      {
        src: "assets/projects/saydo/bag-ps-1-be.png",
        alt: {
          ru: "SAYDO canvas bag",
          en: "SAYDO canvas bag"
        }
      }
    ]
  });
}

window.PROJECTS = projects;
