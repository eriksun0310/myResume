import type { Tri } from './types';

export type TagKey = 'w' | 'learn' | 'game' | 'lock' | 'pet' | 'turn' | 'slice';

export const TAGS: Record<TagKey, Tri> = {
  "w": [
    "公司",
    "Work",
    "仕事"
  ],
  "learn": [
    "學習類 App",
    "Learning apps",
    "学習系アプリ"
  ],
  "game": [
    "壽司彈射",
    "Sushi Flip",
    "寿司フリップ"
  ],
  "lock": [
    "Lock In",
    "Lock In",
    "Lock In"
  ],
  "pet": [
    "寵物地圖",
    "Pet Map",
    "ペットマップ"
  ],
  "turn": [
    "Turnfall",
    "Turnfall",
    "Turnfall"
  ],
  "slice": [
    "熊熊切片",
    "Bear Slice",
    "くまスライス"
  ]
};

export interface Skill {
  name: Tri;
  desc: Tri;
  tags: TagKey[];
}

export interface SkillGroup {
  title: Tri;
  items: Skill[];
}

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    "title": [
      "前端核心",
      "Front-end core",
      "フロントエンド基盤"
    ],
    "items": [
      {
        "name": [
          "React · Next.js · TypeScript",
          "React · Next.js · TypeScript",
          "React · Next.js · TypeScript"
        ],
        "desc": [
          "機台操作介面與 Web 管理系統的主要技術",
          "The main stack behind machine operator screens and web management systems",
          "機台の操作画面とWeb管理システムの主要技術"
        ],
        "tags": [
          "w"
        ]
      },
      {
        "name": [
          "React Native · Expo",
          "React Native · Expo",
          "React Native · Expo"
        ],
        "desc": [
          "上架的學習、專注、寵物地圖 App 都用它做",
          "Used for the learning, focus and pet map apps I shipped",
          "公開した学習・集中・ペットマップのアプリで使用"
        ],
        "tags": [
          "learn",
          "lock",
          "pet"
        ]
      },
      {
        "name": [
          "Zustand · TanStack Query",
          "Zustand · TanStack Query",
          "Zustand · TanStack Query"
        ],
        "desc": [
          "工單與零件資料的快取更新，以及 App 的本機狀態",
          "Cache and refresh work order and parts data, and keep app state on the device",
          "オーダーや部材データのキャッシュ更新と、アプリのローカル状態管理"
        ],
        "tags": [
          "w",
          "learn",
          "pet"
        ]
      },
      {
        "name": [
          "Tailwind · shadcn/ui · 表格與表單",
          "Tailwind · shadcn/ui · tables and forms",
          "Tailwind · shadcn/ui · テーブルとフォーム"
        ],
        "desc": [
          "密集的資料表格與參數表單，要清楚也要好操作",
          "Dense data tables and parameter forms that stay clear and easy to operate",
          "情報量の多いテーブルとパラメータフォームを、見やすく操作しやすく"
        ],
        "tags": [
          "w"
        ]
      }
    ]
  },
  {
    "title": [
      "即時資料與視覺化",
      "Real-time data and visualization",
      "リアルタイムデータと可視化"
    ],
    "items": [
      {
        "name": [
          "即時資料串流",
          "Real-time data streams",
          "リアルタイムデータ"
        ],
        "desc": [
          "畫面隨機台狀態即時更新，警報立刻跳出來",
          "Screens follow machine status live and alarms appear instantly",
          "機台の状態に合わせて画面を即時更新し、アラームもすぐ表示"
        ],
        "tags": [
          "w"
        ]
      },
      {
        "name": [
          "three.js · IFC 3D",
          "three.js · IFC 3D",
          "three.js · IFC 3D"
        ],
        "desc": [
          "在瀏覽器裡檢視 3D 零件形狀，排版前先確認",
          "View 3D part shapes in the browser and check them before nesting",
          "ブラウザで3D部材形状を確認し、割付前にチェック"
        ],
        "tags": [
          "w"
        ]
      },
      {
        "name": [
          "DXF · Excel · PDF 匯出",
          "DXF · Excel · PDF export",
          "DXF · Excel · PDF出力"
        ],
        "desc": [
          "把排版結果輸出成加工與採購用的文件",
          "Export nesting results as processing and purchasing documents",
          "割付結果を加工・購買用の書類として出力"
        ],
        "tags": [
          "w"
        ]
      },
      {
        "name": [
          "QR Code 掃描 · 多語系",
          "QR scanning · i18n",
          "QRスキャン · 多言語"
        ],
        "desc": [
          "現場行動 App 掃碼回報，介面支援多國語言",
          "Field mobile app scans codes to report, with a multilingual interface",
          "現場アプリでコードをスキャンして報告、多言語UIに対応"
        ],
        "tags": [
          "w"
        ]
      }
    ]
  },
  {
    "title": [
      "遊戲與物理",
      "Games and physics",
      "ゲームと物理"
    ],
    "items": [
      {
        "name": [
          "Phaser 3 · Matter.js",
          "Phaser 3 · Matter.js",
          "Phaser 3 · Matter.js"
        ],
        "desc": [
          "三款遊戲的物理核心；《壽司彈射》的魚片是 7 節剛體鏈，刀是有阻尼的彈簧",
          "The physics core of all three games. In Sushi Flip the salmon is a chain of 7 rigid bodies and the knife is a damped spring",
          "3つのゲームの物理の中核。『寿司フリップ』ではサーモンが7節の剛体チェーン、包丁が減衰バネ"
        ],
        "tags": [
          "game",
          "turn",
          "slice"
        ]
      },
      {
        "name": [
          "計算幾何：精確切割",
          "Computational geometry: exact slicing",
          "計算幾何：正確なカット"
        ],
        "desc": [
          "《熊熊的完美切片》自己寫的多邊形切割，凹形也能正確切開，面積守恆",
          "Polygon slicing I wrote for Bear's Perfect Slice. Concave shapes split correctly and area is conserved",
          "『くまの完璧スライス』用に自作した多角形カット。凹形も正しく切れ、面積は保存される"
        ],
        "tags": [
          "slice"
        ]
      },
      {
        "name": [
          "確定性模擬與手感調校",
          "Deterministic simulation and tuning",
          "決定論的シミュレーションと調整"
        ],
        "desc": [
          "固定 60Hz 步進讓結果可重現，再逐關調到好玩",
          "A fixed 60Hz step keeps results repeatable, then every level is tuned to feel right",
          "60Hz固定ステップで結果を再現可能にし、ステージごとに手触りを調整"
        ],
        "tags": [
          "game",
          "turn"
        ]
      },
      {
        "name": [
          "Canvas 程式繪圖",
          "Procedural Canvas art",
          "Canvasプログラム描画"
        ],
        "desc": [
          "用程式畫出仿手繪風的關卡與角色素材",
          "Hand-drawn style levels and characters drawn in code",
          "手描き風のステージとキャラクターをコードで描画"
        ],
        "tags": [
          "game",
          "turn"
        ]
      },
      {
        "name": [
          "感測器輸入：陀螺儀",
          "Sensor input: gyroscope",
          "センサー入力：ジャイロ"
        ],
        "desc": [
          "Turnfall 用手機傾斜操控，並處理 iOS 與 Android 重力方向相反、iOS 要在手勢裡請求權限",
          "Turnfall is steered by tilting the phone, handling the opposite gravity sign on iOS and Android and the gesture-only permission on iOS",
          "Turnfallはスマホの傾きで操作。iOSとAndroidで重力の符号が逆な点や、iOSのジェスチャー内での権限要求に対応"
        ],
        "tags": [
          "turn"
        ]
      },
      {
        "name": [
          "關卡自動驗證與難度分析",
          "Automatic level checks and difficulty analysis",
          "ステージの自動検証と難易度分析"
        ],
        "desc": [
          "用搜尋與重播驗證每一關有解，再用蒙地卡羅模擬手指誤差下的通過率",
          "Search and replay confirm every level is solvable, and Monte Carlo runs estimate pass rates under finger error",
          "探索とリプレイで全ステージが解けることを確認し、モンテカルロ法で指のズレを含む通過率を推定"
        ],
        "tags": [
          "game",
          "turn",
          "slice"
        ]
      }
    ]
  },
  {
    "title": [
      "行動 App 與上架",
      "Mobile apps and release",
      "モバイルアプリとリリース"
    ],
    "items": [
      {
        "name": [
          "Capacitor · AdMob",
          "Capacitor · AdMob",
          "Capacitor · AdMob"
        ],
        "desc": [
          "同一份網頁程式包成 iOS 與 Android，並整合廣告",
          "One web codebase packaged for iOS and Android, with ads integrated",
          "1つのWebコードをiOS・Androidにパッケージし、広告も連携"
        ],
        "tags": [
          "game",
          "turn",
          "slice"
        ]
      },
      {
        "name": [
          "iOS 原生模組整合",
          "Native iOS integration",
          "iOSネイティブ連携"
        ],
        "desc": [
          "Lock In 串接 iOS 的螢幕使用時間功能",
          "Lock In connects to the iOS Screen Time features",
          "Lock InでiOSのスクリーンタイム機能と連携"
        ],
        "tags": [
          "lock"
        ]
      },
      {
        "name": [
          "內購與數據分析",
          "Purchases and analytics",
          "課金と分析"
        ],
        "desc": [
          "一次購買的內購流程，與用 Firebase 看使用漏斗",
          "One-time purchase flow, and funnels tracked with Firebase",
          "買い切り課金のフローと、Firebaseでの利用ファネル計測"
        ],
        "tags": [
          "learn",
          "game",
          "pet"
        ]
      },
      {
        "name": [
          "手寫 · 地圖 · 音訊",
          "Handwriting · maps · audio",
          "手書き · 地図 · 音声"
        ],
        "desc": [
          "日日一字的手寫、寵物地圖的定位、聽力練習的音檔",
          "Handwriting in Daily Kanji, location in the pet map, audio in listening practice",
          "日日一字の手書き、ペットマップの位置情報、聴解練習の音声"
        ],
        "tags": [
          "learn",
          "pet"
        ]
      },
      {
        "name": [
          "本機優先 · SQLite",
          "Local-first · SQLite",
          "ローカルファースト · SQLite"
        ],
        "desc": [
          "資料留在手機上，不註冊、不登入也能用",
          "Data stays on the phone, no sign-up or login needed",
          "データは端末内に保存、登録やログインなしで利用可能"
        ],
        "tags": [
          "learn",
          "lock"
        ]
      }
    ]
  },
  {
    "title": [
      "產品與工程習慣",
      "Product and engineering habits",
      "プロダクトと開発の習慣"
    ],
    "items": [
      {
        "name": [
          "產品設計與營運",
          "Product design and operations",
          "プロダクト設計と運営"
        ],
        "desc": [
          "從點子、設計、上架到依用戶回報持續維護",
          "From idea and design to release, then keep improving from user reports",
          "アイデア・設計・公開から、ユーザー報告に基づく継続改善まで"
        ],
        "tags": [
          "learn",
          "game",
          "pet"
        ]
      },
      {
        "name": [
          "與後端協作",
          "Working with backend teams",
          "バックエンドとの連携"
        ],
        "desc": [
          "用明確的 API 與事件串流跟後端同事分工",
          "Split work with backend teammates through clear APIs and event streams",
          "明確なAPIとイベントストリームでバックエンド担当と分担"
        ],
        "tags": [
          "w",
          "learn",
          "pet"
        ]
      },
      {
        "name": [
          "Vitest · Playwright",
          "Vitest · Playwright",
          "Vitest · Playwright"
        ],
        "desc": [
          "自動測試關鍵操作；遊戲掃描每一關確認有解，也在 Android 與 iOS 模擬器上跑真實觸控",
          "Automated tests for key flows, a sweep of every game level, and real-touch runs on Android and iOS simulators",
          "主要操作を自動テスト。ゲームは全ステージを走査し、AndroidとiOSのシミュレーターで実タッチも検証"
        ],
        "tags": [
          "w",
          "game",
          "turn",
          "slice"
        ]
      },
      {
        "name": [
          "Monorepo · Biome · Husky",
          "Monorepo · Biome · Husky",
          "Monorepo · Biome · Husky"
        ],
        "desc": [
          "統一程式風格與提交前檢查，多個專案一起維護",
          "Consistent code style and pre-commit checks across several projects",
          "コードスタイルとコミット前チェックを統一し、複数プロジェクトを一括管理"
        ],
        "tags": [
          "w"
        ]
      }
    ]
  }
] as SkillGroup[];
