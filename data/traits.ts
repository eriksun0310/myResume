import type { Tri } from './types';

/** Each card is a claim plus the evidence behind it, written for someone deciding whether to hire. */
export const TRAITS: readonly { title: Tri; text: Tri }[] = [
  {
    title: ['自己扛完整件事', 'I own things end to end', '最後まで一人でやり切る'],
    text: [
      '從想法、設計、開發到上架與營運都自己來，做出 10 款以上 App。壽司日檢下載破 10,000、購買破 3,000，上線後依用戶回報持續修正。',
      'I take a product from idea, design and code through release and operations, and have shipped 10+ apps. Sushi JLPT passed 10,000 downloads and 3,000 purchases, and I keep fixing it from user reports.',
      '発想、設計、開発からリリース、運営まで自分で担い、10本以上のアプリを公開。寿司日検は1万ダウンロード・3,000購入を突破し、ユーザー報告をもとに改善を続けています。',
    ],
  },
  {
    title: ['把話講清楚，好合作', 'I keep the team aligned', '認識をそろえて進める'],
    text: [
      '在公司和後端明確切分 API 與事件串流的責任，把業務需求轉成前端規格再對齊，避免做到一半才發現方向不同。',
      'At work I split API and event-stream responsibilities clearly with backend engineers and turn business needs into front-end specs, so nobody finds out halfway that we were heading different ways.',
      '会社ではバックエンドとAPI・イベントストリームの責任範囲を明確にし、業務要件をフロントエンドの仕様に落として合意を取るため、途中で方向がずれるのを防げます。',
    ],
  },
  {
    title: ['容易出錯的地方先守住', 'I protect what must not break', '壊れてはいけない所を先に守る'],
    text: [
      '機台畫面要即時、不能出錯，我會先處理警報與例外狀態，再用自動化測試守住關鍵流程。自己的遊戲也用 Playwright 掃過每一關，確認都解得開。',
      'Machine screens must be live and correct, so I handle alarms and edge states first and guard key flows with automated tests. I also run Playwright over every level of my own games to confirm each one is solvable.',
      '機台の画面は即時性と正確さが必須なので、アラームと例外状態を先に処理し、自動テストで重要フローを守ります。自作ゲームもPlaywrightで全ステージを回し、解けることを確認しています。',
    ],
  },
  {
    title: ['學得快，不怕跨領域', 'I learn fast across fields', '分野をまたいですぐ学ぶ'],
    text: [
      '從餐旅管理系轉進前端，邊做產品邊學會 React Native、遊戲物理與上架流程。遇到沒做過的東西，我會先做出能跑的版本再改好。',
      'I moved from a hospitality degree into front-end work and learned React Native, game physics and the release process by building products. When something is new to me, I get a working version first and then improve it.',
      'ホスピタリティ管理学科からフロントエンドへ転身し、プロダクトを作りながらReact Native、ゲーム物理、リリース手順を習得しました。未経験のことは、まず動くものを作ってから磨きます。',
    ],
  },
];
