import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Amethyst",
  description: "Amethyst Documentation",
  lang: 'en-US',
  appearance: "dark",
  locales: {
    "root": { 
      label: "English",
      title: "Amethyst",
      description: "A powerful node-based audio player written in the Web Platform.",
      lang: "en",
    },
    'zh': {
      label: "简体中文",
      lang: 'zh',
      title: "Amethyst | 紫水晶",
      description: "一个基于可视化节点和 Electron 的强大音频播放器。",
    },
    'de': {
      label: "Deutsch",
      lang: 'de',
      title: "Amethyst",
      description: "Ein leistungsstarker Node-basierter Audio Player geschrieben in der Web-Plattform.",
      themeConfig: {
        footer: {
          message: "Durch Verlust mehrere Hirnzellen gemacht 🧠"
        },
        docFooter: {
          prev: "Vorherige Seite",
          next: "Nächste Seite"
        },
        editLink: {
          pattern: "https://github.com/Geoxor/amethyst/tree/master/docs/:path",
          text: "Diese Seite bearbeiten"
        },
        darkModeSwitchLabel: "Dunkelmodus umschalten",
        outlineTitle: "Auf dieser Seite",
        nav: [
          { text: "Dokumentation", link: "/de/introduction" },
          { text: "Download", link: "/de/installation/package_managers" },
        ],
        sidebar: [
          {
            text: 'Installation',
            items: [
              { text: 'Paketmanager', link: '/de/installation/package_managers' },
            ]
          },
          {
            text: 'Entwicklung',
            items: [
              { text: 'Arbeitsumgebung einrichten', link: '/de/developing/setting_up_environment' },
              { text: 'Desktopentwicklung', link: '/de/developing/desktop_development' },
              { text: 'Android-Entwicklung', link: '/de/developing/android_development' },
              { text: 'Documentation Entwicklung', link: '/de/developing/documentation_development' },
            ]
          },
          {
            text: 'Dateitypen',
            items: [
              { text: 'Amethyst Knotengraph (.ang)', link: '/de/file_types/ang' },
              { text: 'Amethyst Metadatendatei (.amf)', link: '/de/file_types/amf' },
            ]
          },
          {
            text: 'Komponenten',
            items: [
              { text: 'Vektorskop', link: '/de/components/vectorscope' },
            ]
          },
          {
            text: 'Audio-Knoten',
            collapsible: true,
            items: [
              { text: "<img align='left' src='/input_icon.svg' style='margin-right: 6px;' width='20'/> Eingabeknoten", link: "/de/nodes/input_node" },
              { text: "<img align='left' src='/master_icon.svg' style='margin-right: 6px;' width='20'/> Masterknoten", link: "/de/nodes/master_node" },
              { text: "<img align='left' src='/output_icon.svg' style='margin-right: 6px;' width='20'/> Ausgabeknoten", link: "/de/nodes/output_node" },
              { text: "<img align='left' src='/filter_icon.svg' style='margin-right: 6px;' width='20'/> Filterknoten", link: "/de/nodes/filter_node" },
            ]
          }
        ]
      }
    },
    'el': {
      label: "Ελληνικά",
      lang: 'el',
      title: "Amethyst | Αμέθυστος",
      description: "Ένα ισχυρό πρόγραμμα αναπαραγωγής ήχου με συστημα κόμβο γραμμένο στην πλατφόρμα Web.",
      themeConfig: {
        nav: [
          { text: "Εγχειρίδιο", link: "/el/introduction" },
          { text: "Λήψη", link: "/el/installation/package_managers" },
        ],
        sidebar: [
          {
            text: 'Εγκατάσταση',
            items: [
              { text: 'Διαχειριστές πακέτων', link: '/el/installation/package_managers' },
              { text: 'Δημιουργία από πηγαίο κώδικα', link: '/el/installation/build_from_source' },
            ]
          },
          {
            text: 'Τύπος αρχείων',
            items: [
              { text: 'Γράφος κόμβων Amethyst (.ang)', link: '/el/file_types/ang' },
              { text: 'Αρχείο στοιχείων Amethyst (.amf)', link: '/el/file_types/amf' },
            ]
          },
          {
            text: 'Εξαρτήματα',
            items: [
              { text: 'Βεκτοροσκόπος', link: '/el/components/vectorscope' },
            ]
          },
          {
            text: 'Κόμβοι ήχου',
            collapsible: true,
            items: [
              { text: "<img align='left' src='/input_icon.svg' style='margin-right: 6px;' width='20'/> Κόμβος εισόδου", link: "/el/nodes/input_node" },
              { text: "<img align='left' src='/master_icon.svg' style='margin-right: 6px;' width='20'/> Κύριος κόμβος", link: "/el/nodes/master_node" },
              { text: "<img align='left' src='/output_icon.svg' style='margin-right: 6px;' width='20'/> Κόμβος εξόδου", link: "/el/nodes/output_node" },
              { text: "<img align='left' src='/filter_icon.svg' style='margin-right: 6px;' width='20'/> Κόμβος φίλτρου", link: "/el/nodes/filter_node" },
            ]
          }
        ]
      }
    },
    'ru': {
      label: "Русский",
      lang: 'ru',
      title: "Amethyst | Аметист",
      description: "Мощный аудиоплеер на базе node, написанный на web-платформе.",
      themeConfig: {
        nav: [
          { text: "Документация", link: "/ru/introduction" },
          { text: "Скачать", link: "/ru/installation/package_managers" },
        ],
        sidebar: [
          {
            text: 'Установка',
            items: [
              { text: 'Менеджеры пакетов', link: '/ru/installation/package_managers' },
              { text: 'Сборка из исходных текстов', link: '/ru/installation/build_from_source' },
            ]
          },
          {
            text: 'Типы файлов',
            items: [
              { text: 'Граф узлов Amethyst (.ang)', link: '/ru/file_types/ang' },
              { text: 'Файл метаданных Amethyst (.amf)', link: '/ru/file_types/amf' },
            ]
          },
          {
            text: 'Компоненты',
            items: [
              { text: 'Вектороскоп', link: '/ru/components/vectorscope' },
            ]
          },
          {
            text: 'Аудио узлы',
            collapsible: true,
            items: [
              { text: "<img align='left' src='/input_icon.svg' style='margin-right: 6px;' width='20'/> Входной узел", link: "/ru/nodes/input_node" },
              { text: "<img align='left' src='/master_icon.svg' style='margin-right: 6px;' width='20'/> Основной узел", link: "/ru/nodes/master_node" },
              { text: "<img align='left' src='/output_icon.svg' style='margin-right: 6px;' width='20'/> Выходной узел", link: "/ru/nodes/output_node" },
              { text: "<img align='left' src='/filter_icon.svg' style='margin-right: 6px;' width='20'/> Фильтр узел", link: "/ru/nodes/filter_node" },
            ]
          }
        ]
      }
    },
    'bg': {
      label: "Български",
      lang: 'bg',
      title: "Amethyst | Аметист",
      description: "Мощен Node аудио плейър, направен в уеб платформата."
    },
    'pl': {
      label: "Polski",
      lang: 'pl',
      title: "Amethyst | Amethyst",
      description: "Amethyst to bazujący na Elektronie odtwarzacz audio z węzłowym systemem routingu audio"
    },
    'tl': {
      label: "Tagalog",
      lang: 'tl',
      title: "Amethyst | Amethyst",
      description: "Isang malakas na node-based audio player na nakasulat sa Web Platform."
    },
    'it': {
      label: "",
      lang: 'it',
      title: "Amethyst | Ametista",
      description: "Un potente lettore audio basato su nodi scritto nella piattaforma Web."
    },
    'ro': {
      label: "Română",
      lang: 'ro',
      title: "Amethyst | Amethyst",
      description: " Un player audio bazat pe noduri scris pe Platforma Web."
    },
    'jp': {
      label: "日本語",
      lang: 'jp',
      title: "Amethyst | Amethyst",
      description: "Webプラットフォームで記述された強力なノードベースのオーディオプレーヤー。",
      themeConfig: {
        nav: [
          { text: "ドキュメンテーション", link: "/jp/introduction" },
          { text: "ダウンロード", link: "/jp/installation/package_managers" },
        ],
      }
    },
    "fr": { 
      label: "Français",
      title: "Amethyst",
      description: "Un lecteur audio performant basé sur des nœuds, développé sur la Web Platform.",
      lang: "fr",
      themeConfig: {
        footer: {
          message: "Fais avec la perte de nombreux neurones 🧠"
        },
        socialLinks: [
          {
            link: "https://discord.gg/geoxor",
            icon: "discord"
          },
          {
            link: "https://github.com/Geoxor/amethyst",
            icon: "github"
          },
        ],
        editLink: {
          pattern: 'https://github.com/Geoxor/amethyst/tree/master/docs/:path'
        },
        siteTitle: "Amethyst",
        logo: "/icon.svg",
        nav: [
          { text: "Documentation", link: "/introduction" },
          { text: "Télécharger", link: "/installation/package_managers" },
        ],
        sidebar: [
          {
            text: 'Installation',
            items: [
              { text: 'Gestionnaires de paquets', link: '/installation/package_managers' },
            ]
          },
          {
            text: 'Développement',
            items: [
              { text: 'Configurer un environnement de développement', link: '/developing/setting_up_environment' },
              { text: 'Sur ordinateur', link: '/developing/desktop_development' },
              { text: 'Android', link: '/developing/android_development' },
              { text: 'Documentation', link: '/developing/documentation_development' },
            ]
          },
          {
            text: 'Types de fichiers',
            items: [
              { text: 'Graphe de nœuds Amethyst (.ang)', link: '/file_types/ang' },
              { text: 'Fichier Metadata Amethyst (.amf)', link: '/file_types/amf' },
            ]
          },
          {
            text: 'Composants',
            items: [
              { text: 'Vecteurscope', link: '/components/vectorscope' },
            ]
          },
          {
            text: 'Les nœuds audio',
            collapsible: true,
            items: [
              { text: "<img align='left' src='/input_icon.svg' style='margin-right: 6px;' width='20'/> Nœud d'entrée", link: "/nodes/input_node" },
              { text: "<img align='left' src='/master_icon.svg' style='margin-right: 6px;' width='20'/> Nœud principal", link: "/nodes/master_node" },
              { text: "<img align='left' src='/output_icon.svg' style='margin-right: 6px;' width='20'/> Nœud de sortie", link: "/nodes/output_node" },
              { text: "<img align='left' src='/filter_icon.svg' style='margin-right: 6px;' width='20'/> Nœud de filtrage", link: "/nodes/filter_node" },
            ]
          }
        ]
      }
    },
    'fi': {
      label: "Suomi",
      lang: 'fi',
      title: "Amethyst | Amethyst",
      description: "Tehokas node-pohjainen äänisoitin, joka on toteutettu Web Platformia käyttäen.",
      themeConfig: {
        footer: {
          message: "Tehty suuri määrä aivosoluja menettäen 🧠"
        },
        nav: [
          { text: "Dokumentaatio", link: "/introduction" },
          { text: "Lataa", link: "/installation/package_managers" },
        ],
        sidebar: [
          {
            text: 'Asennus',
            items: [
              { text: 'Paketinhallintatyökalut', link: '/installation/package_managers' },
            ]
          },
          {
            text: 'Kehitys',
            items: [
              { text: 'Kehitysympäristön käyttöönotto', link: '/developing/setting_up_environment' },
              { text: 'Työpöytäsovellus', link: '/developing/desktop_development' },
              { text: 'Android-sovellus', link: '/developing/android_development' },
              { text: 'Dokumentaatiosivut', link: '/developing/documentation_development' },
            ]
          },
          {
            text: 'Tiedostotyypit',
          },
          {
            text: 'Komponentit',
            items: [
              { text: 'Vektoriskooppi', link: '/components/vectorscope' },
            ]
          },
          {
            text: 'Ääninodet',
            collapsible: true,
            items: [
              { text: "<img align='left' src='/input_icon.svg' style='margin-right: 6px;' width='20'/> Tulosolmu", link: "/nodes/input_node" },
              { text: "<img align='left' src='/master_icon.svg' style='margin-right: 6px;' width='20'/> Master-solmu", link: "/nodes/master_node" },
              { text: "<img align='left' src='/output_icon.svg' style='margin-right: 6px;' width='20'/> Lähtösolmu", link: "/nodes/output_node" },
              { text: "<img align='left' src='/filter_icon.svg' style='margin-right: 6px;' width='20'/> Suodatinsolmu", link: "/nodes/filter_node" },
            ]
          }
        ]
      }
    },
  },
  themeConfig: {
    footer: {
      message: "Made with the loss of multiple braincells 🧠"
    },
    socialLinks: [
      {
        link: "https://discord.gg/geoxor",
        icon: "discord"
      },
      {
        link: "https://github.com/Geoxor/amethyst",
        icon: "github"
      },
    ],
    editLink: {
      pattern: 'https://github.com/Geoxor/amethyst/tree/master/docs/:path'
    },
    siteTitle: "Amethyst",
    logo: "/icon.svg",
    nav: [
      { text: "Documentation", link: "/introduction" },
      { text: "Download", link: "/installation/package_managers" },
    ],
    sidebar: [
      {
        text: 'Installation',
        items: [
          { text: 'Package Managers', link: '/installation/package_managers' },
        ]
      },
      {
        text: 'Development',
        items: [
          { text: 'Setting up Work Environment', link: '/developing/setting_up_environment' },
          { text: 'Desktop Development', link: '/developing/desktop_development' },
          { text: 'Android Development', link: '/developing/android_development' },
          { text: 'Docs Development', link: '/developing/documentation_development' },
        ]
      },
      {
        text: 'File Types',
        items: [
          { text: 'Amethyst Node Graph (.ang)', link: '/file_types/ang' },
          { text: 'Amethyst Metadata File (.amf)', link: '/file_types/amf' },
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Vectorscope', link: '/components/vectorscope' },
        ]
      },
      {
        text: 'Audio Nodes',
        collapsible: true,
        items: [
          { text: "<img align='left' src='/input_icon.svg' style='margin-right: 6px;' width='20'/> Input Node", link: "/nodes/input_node" },
          { text: "<img align='left' src='/master_icon.svg' style='margin-right: 6px;' width='20'/> Master Node", link: "/nodes/master_node" },
          { text: "<img align='left' src='/output_icon.svg' style='margin-right: 6px;' width='20'/> Output Node", link: "/nodes/output_node" },
          { text: "<img align='left' src='/filter_icon.svg' style='margin-right: 6px;' width='20'/> Filter Node", link: "/nodes/filter_node" },
        ]
      }
    ]
  }
})
