import type { Tri } from './types';

export const UI = {
  "openTo": [
    "開放求職中",
    "Open to work",
    "転職活動中"
  ],
  "cta1": [
    "看技能地圖",
    "See the skill map",
    "スキルマップを見る"
  ],
  "cta2": [
    "聯絡我",
    "Contact",
    "お問い合わせ"
  ],
  "mapK": [
    "技能地圖",
    "Skill map",
    "スキルマップ"
  ],
  "mapT": [
    "技能用在哪裡",
    "Where each skill is used",
    "スキルの活用先"
  ],
  "mapD": [
    "每一項技能後面，寫的是我實際把它用在什麼地方。",
    "Next to each skill is what I actually used it for.",
    "各スキルの横に、実際に何に使ったかを書いています。"
  ],
  "appK": [
    "作品",
    "Shipped",
    "リリース済み"
  ],
  "appT": [
    "我上架的 App",
    "Apps I have shipped",
    "リリースしたアプリ"
  ],
  "appD": [
    "10 款以上已上架。每一款都由我一人負責前端、產品設計與營運。",
    "More than ten are live. I handle the front end, product design and operations of each one.",
    "10本以上が公開済み。どのアプリもフロントエンド、プロダクト設計、運営を一人で担当しています。"
  ],
  "site": [
    "到 PTalk 官網看全部",
    "See all on the PTalk site",
    "PTalk公式サイトで全て見る"
  ],
  "trK": [
    "關於我",
    "About me",
    "私について"
  ],
  "trT": [
    "和我共事是這樣",
    "What it is like to work with me",
    "一緒に働くと"
  ],
  "coK": [
    "在公司",
    "At work",
    "仕事"
  ],
  "coT": [
    "做工業軟體的前端",
    "Front end for industrial software",
    "産業ソフトのフロントエンド"
  ],
  "coP": [
    "機台的操作介面、Web 管理系統、現場用的行動 App。畫面要即時、清楚、不能出錯。後端與機台通訊由同事負責，我專注在前端。",
    "Operator screens for machines, web management systems and field mobile apps. Screens must be live, clear and correct. Teammates handle the backend and machine communication, and I focus on the front end.",
    "機台の操作画面、Webの管理システム、現場向けモバイルアプリ。即時性・分かりやすさ・正確さが求められます。バックエンドと機台通信は同僚が担当し、私はフロントエンドに集中しています。"
  ],
  "ctT": [
    "一起聊聊",
    "Get in touch",
    "お気軽にどうぞ"
  ],
  "ctP": [
    "我正在找前端、React Native 或工業軟體相關的職缺，歡迎聯絡。",
    "I am looking for front-end, React Native or industrial software roles. Feel free to reach out.",
    "フロントエンド、React Native、産業ソフト関連のポジションを探しています。お気軽にご連絡ください。"
  ],
  "copy": [
    "複製 Email",
    "Copy email",
    "メールをコピー"
  ],
  "copied": [
    "已複製",
    "Copied",
    "コピーしました"
  ],
  "ft": [
    "最後更新 2026.10 · 台灣台中",
    "Last updated 2026.10 · Taichung, Taiwan",
    "最終更新 2026.10 · 台湾・台中"
  ],
  "work": [
    "公司",
    "Work",
    "仕事"
  ]
} as const satisfies Record<string, Tri>;

export const NAV = [
  {
    "label": [
      "技能",
      "Skills",
      "スキル"
    ],
    "href": "#skills"
  },
  {
    "label": [
      "App",
      "Apps",
      "アプリ"
    ],
    "href": "#apps"
  },
  {
    "label": [
      "關於",
      "About",
      "私について"
    ],
    "href": "#about"
  },
  {
    "label": [
      "公司",
      "Work",
      "仕事"
    ],
    "href": "#company"
  },
  {
    "label": [
      "經歷",
      "Experience",
      "経歴"
    ],
    "href": "#experience"
  },
  {
    "label": [
      "聯絡",
      "Contact",
      "連絡先"
    ],
    "href": "#contact"
  }
] as const;

export const LEAD: Tri = [
  '前端工程師，{y} 年經驗。用 React Native 上架 10 款以上 App，也替工廠機台做操作畫面。',
  'Front-end engineer with {y} years of experience. I have shipped 10+ apps with React Native and build operator screens for factory machines.',
  'フロントエンドエンジニア、実務{y}年。React Nativeで10本以上のアプリを公開し、工場の機台向け操作画面も開発しています。',
];

export const META = [
  [
    [
      "姓名",
      "孫家伃 Sun Chia Yu"
    ],
    [
      "職稱",
      "前端工程師"
    ],
    [
      "所在",
      "台灣台中"
    ],
    [
      "經驗",
      "2022.10 起"
    ],
    [
      "主力",
      "React Native · React · TS"
    ]
  ],
  [
    [
      "Name",
      "Sun Chia Yu 孫家伃"
    ],
    [
      "Role",
      "Front-end engineer"
    ],
    [
      "Base",
      "Taichung, Taiwan"
    ],
    [
      "Since",
      "Oct 2022"
    ],
    [
      "Stack",
      "React Native · React · TS"
    ]
  ],
  [
    [
      "氏名",
      "孫家伃 Sun Chia Yu"
    ],
    [
      "職種",
      "フロントエンド"
    ],
    [
      "拠点",
      "台湾・台中"
    ],
    [
      "経験",
      "2022.10〜"
    ],
    [
      "主力",
      "React Native · React · TS"
    ]
  ]
] as const;

export const STATS = [
  {
    "value": "10+",
    "label": [
      "款已上架 App",
      "apps live",
      "本の公開済みアプリ"
    ]
  },
  {
    "value": "10k+",
    "label": [
      "壽司日檢下載",
      "Sushi JLPT downloads",
      "寿司日検ダウンロード"
    ]
  },
  {
    "value": "3k+",
    "label": [
      "壽司日檢購買",
      "Sushi JLPT purchases",
      "寿司日検購入"
    ]
  },
  {
    "value": "{y}",
    "label": [
      "年實務經驗",
      "years of experience",
      "年の実務経験"
    ]
  }
] as const;

export const CHIPS: readonly Tri[] = [
  [
    "React / Next.js",
    "React / Next.js",
    "React / Next.js"
  ],
  [
    "TypeScript",
    "TypeScript",
    "TypeScript"
  ],
  [
    "React Native",
    "React Native",
    "React Native"
  ],
  [
    "即時資料串流",
    "Real-time data",
    "リアルタイムデータ"
  ],
  [
    "three.js 3D",
    "three.js 3D",
    "three.js 3D"
  ],
  [
    "多語系",
    "i18n",
    "多言語"
  ],
  [
    "Zustand · TanStack Query",
    "Zustand · TanStack Query",
    "Zustand · TanStack Query"
  ],
  [
    "報表匯出",
    "Report export",
    "レポート出力"
  ]
];
