import type { Tri } from './types';

export interface Job {
  id: string;
  company: Tri;
  role: Tri;
  period: Tri;
  place: Tri;
  stack: readonly string[];
  bullets: readonly Tri[];
}

export const RESUME_LABELS = {
  kicker: ['經歷', 'Experience', '経歴'],
  title: ['工作經歷', 'Work experience', '職務経歴'],
  edu: ['學歷', 'Education', '学歴'],
  stack: ['技術', 'Stack', '技術'],
} as const satisfies Record<string, Tri>;

export const JOBS: readonly Job[] = [
  {
    id: 'ptalk',
    company: ['獨立開發者', 'Indie developer', '個人開発者'],
    role: ['PTalk Studio', 'PTalk Studio', 'PTalk Studio'],
    period: ['2025/04 – 至今', 'Apr 2025 – present', '2025/04 〜 現在'],
    place: ['台中 · 同時進行', 'Taichung · alongside', '台中 · 並行'],
    stack: ['React Native', 'Expo', 'Phaser', 'Capacitor', 'RevenueCat'],
    bullets: [
      ['獨立開發並上架 10 款以上 App，一人負責前端、產品設計與營運', 'Built and shipped 10+ apps on my own, covering the front end, product design and operations', 'アプリ10本以上を個人で開発・公開し、フロントエンド、プロダクト設計、運営を担当'],
      ['壽司日檢下載破 10,000、購買破 3,000，依用戶回報持續維護', 'Sushi JLPT passed 10,000 downloads and 3,000 purchases, and I keep maintaining it from user reports', '寿司日検は1万ダウンロード・3,000購入を突破し、ユーザー報告をもとに継続的に改善'],
    ],
  },
  {
    id: 'guanda',
    company: ['廣達國際機械有限公司', '廣達國際機械有限公司', '廣達國際機械有限公司'],
    role: ['React 前端工程師', 'React front-end engineer', 'React フロントエンドエンジニア'],
    period: ['2024/03 – 至今', 'Mar 2024 – present', '2024/03 〜 現在'],
    place: ['台中 · 在職中', 'Taichung · current', '台中 · 在職中'],
    stack: ['React', 'Next.js', 'TypeScript', 'Zustand', 'TanStack Query', 'three.js', 'Playwright'],
    bullets: [
      ['負責該系統前端的 5 個功能模組：從畫面、狀態管理到資料匯入與匯出，一路做到上線', 'Own the front end of 5 feature modules in that system, from screens and state management to data import and export, through release', '同システムのフロントエンド5モジュールを担当。画面、状態管理からデータの取り込み・出力まで、リリースまで一貫して対応'],
      ['以 React / Next.js 建置機台操作介面與 Web 管理系統，畫面隨 PLC 狀態即時更新並處理警報', 'Built machine operator screens and web management systems with React and Next.js, updating live from PLC status and handling alarms', 'React / Next.jsで機台の操作画面とWeb管理システムを構築。PLCの状態に合わせて画面を即時更新し、アラームにも対応'],
      ['開發設備管理與生產流程模組：資料表格與表單、3D 零件檢視、DXF／Excel／PDF 匯出', 'Developed equipment management and production workflow modules: data tables and forms, 3D part viewer, DXF, Excel and PDF export', '設備管理と生産フローのモジュールを開発：データテーブルとフォーム、3D部材ビューア、DXF／Excel／PDF出力'],
      ['與後端工程師定義 API 與事件串流，明確切分前後端責任', 'Defined APIs and event streams with backend engineers to split front-end and back-end responsibilities clearly', 'バックエンドエンジニアとAPIとイベントストリームを定義し、フロントとバックの責任範囲を明確化'],
      ['打造多語系與深淺色主題，並以自動化測試守住關鍵流程', 'Built multilingual and light/dark UIs, and protected key flows with automated tests', '多言語とライト／ダークテーマに対応し、主要な操作は自動テストで保護'],
    ],
  },
  {
    id: 'lingcheng',
    company: ['凌成科技有限公司', '凌成科技有限公司', '凌成科技有限公司'],
    role: ['前端工程師', 'Front-end engineer', 'フロントエンドエンジニア'],
    period: ['2022/10 – 2024/03', 'Oct 2022 – Mar 2024', '2022/10 〜 2024/03'],
    place: ['台中', 'Taichung', '台中'],
    stack: ['React', 'Redux', 'TanStack Query', 'RESTful API'],
    bullets: [
      ['以 React 開發內部系統與專案型產品前端，從需求討論一路參與到上線', 'Built the front end of internal systems and project-based products with React, from requirement talks through release', 'Reactで社内システムと案件型プロダクトのフロントエンドを開発。要件の議論からリリースまで一貫して参加'],
      ['將業務需求轉成前端技術規格，與業務和後端對齊', 'Turned business needs into front-end specifications and aligned with business and backend teams', '業務要件をフロントエンドの技術仕様に落とし込み、業務・バックエンドと認識を合わせて進行'],
      ['串接 RESTful API，用 Redux 與 TanStack Query 管理狀態與資料流', 'Integrated RESTful APIs and managed state and data flow with Redux and TanStack Query', 'RESTful APIを連携し、Reduxと TanStack Queryで状態とデータフローを管理'],
      ['改善既有系統 UI/UX 與操作流程，提升使用者作業效率', 'Improved the UI/UX and operating flows of existing systems to speed up users', '既存システムのUI/UXと操作フローを改善し、ユーザーの作業効率を向上'],
    ],
  },
];

export const EDUCATION = {
  school: ['私立弘光科技大學', 'Hungkuang University', '弘光科技大学（私立）'],
  major: ['餐旅管理系 · 學士', 'Hospitality Management · Bachelor', 'ホスピタリティ管理学科 · 学士'],
  period: ['2018/09 – 2022/06', 'Sep 2018 – Jun 2022', '2018/09 〜 2022/06'],
} as const satisfies Record<string, Tri>;
