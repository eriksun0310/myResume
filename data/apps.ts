import type { Tri } from './types';

export interface App {
  id: string;
  name: Tri;
  type: Tri;
  line: Tri;
  metric: Tri | null;
  /** true while the app is still in development */
  dev: boolean;
  /** Real screenshots under /public/shots */
  shots?: readonly string[];
}

export const APPS: readonly App[] = [
  {
    "id": "flip",
    "name": [
      "壽司彈射",
      "Sushi Flip",
      "寿司フリップ"
    ],
    "type": [
      "遊戲 · 物理彈射",
      "Game · Physics flipper",
      "ゲーム · 物理フリップ"
    ],
    "line": [
      "主廚甩鮭魚、刀一彈，落在醋飯上就過關；每一關都有新機制",
      "Swing the salmon, flick the knife and land it on the rice. Every level brings a new mechanic.",
      "サーモンを振って包丁で弾き、酢飯に着地すればクリア。ステージごとに新しい仕掛け"
    ],
    "metric": null,
    "dev": false
  },
  {
    "id": "turn",
    "name": [
      "Turnfall",
      "Turnfall",
      "Turnfall"
    ],
    "type": [
      "遊戲 · 傾斜解謎",
      "Game · Tilt puzzle",
      "ゲーム · 傾けパズル"
    ],
    "line": [
      "轉動整個世界，讓球滾到按鈕上就過關；手機可以直接傾斜操控",
      "Turn the whole world and roll the ball onto the button. On a phone, just tilt.",
      "世界ごと回してボールをボタンへ。スマホなら傾けるだけで操作できる"
    ],
    "metric": null,
    "dev": false
  },
  {
    "id": "slice",
    "name": [
      "熊熊的完美切片",
      "Bear's Perfect Slice",
      "くまの完璧スライス"
    ],
    "type": [
      "遊戲 · 幾何切割",
      "Game · Slicing puzzle",
      "ゲーム · 幾何カット"
    ],
    "line": [
      "把蛋糕、披薩切成剛好一樣大，20 關各藏著一個幾何小巧思",
      "Cut cakes and pizzas into equal pieces. Each of 20 levels hides one geometric idea.",
      "ケーキやピザを同じ大きさに切り分ける。20ステージそれぞれに幾何のひらめき"
    ],
    "metric": null,
    "dev": false
  },
  {
    "id": "sushi",
    "name": [
      "壽司日檢",
      "Sushi JLPT",
      "寿司日検"
    ],
    "type": [
      "日檢 · 單字",
      "JLPT · Vocabulary",
      "JLPT · 単語"
    ],
    "line": [
      "六種模式練單字，答對集壽司到滿盤",
      "Six study modes for vocabulary. Answer right and fill your plate with sushi.",
      "6つのモードで単語練習。正解で寿司を集めてお皿をいっぱいに"
    ],
    "metric": [
      "下載破 10,000 · 購買破 3,000",
      "10,000+ downloads · 3,000+ purchases",
      "10,000以上DL · 3,000以上購入"
    ],
    "dev": false
  },
  {
    "id": "ninbato",
    "name": [
      "忍者信鴿",
      "Ninbato",
      "忍者信鴿"
    ],
    "type": [
      "日檢 · 聽力文法",
      "JLPT · Listening, grammar",
      "JLPT · 聴解・文法"
    ],
    "line": [
      "忍者鴿送信學聽力，N5 到 N1 一次練齊",
      "A ninja pigeon delivers listening practice, N5 to N1 in one app",
      "忍者鳩が届ける聴解練習。N5〜N1をまとめて"
    ],
    "metric": [
      "下載破 1,500 · 購買破 200",
      "1,500+ downloads · 200+ purchases",
      "1,500以上DL · 200以上購入"
    ],
    "dev": false
  },
  {
    "id": "koko",
    "name": [
      "KOKO",
      "KOKO",
      "KOKO"
    ],
    "type": [
      "日文 · 生活會話",
      "Japanese · Conversation",
      "日本語 · 会話"
    ],
    "line": [
      "打開就在日本，100 天把日文說出口",
      "Open the app and you are in Japan. Speak Japanese in 100 days.",
      "開けばそこは日本。100日で日本語が口から出る"
    ],
    "metric": null,
    "dev": false
  },
  {
    "id": "nichi",
    "name": [
      "日日一字",
      "Daily Kanji",
      "日日一字"
    ],
    "type": [
      "日文 · 漢字書寫",
      "Japanese · Kanji writing",
      "日本語 · 漢字"
    ],
    "line": [
      "一天一個字，用手寫把日文記進心裡",
      "One character a day, written by hand",
      "1日1文字、手書きで日本語を身につける"
    ],
    "metric": null,
    "dev": false
  },
  {
    "id": "pizza",
    "name": [
      "披薩多益",
      "Pizza TOEIC",
      "ピザTOEIC"
    ],
    "type": [
      "多益 · 單字",
      "TOEIC · Vocabulary",
      "TOEIC · 単語"
    ],
    "line": [
      "答對單字集披薩，練到多益金色證書",
      "Answer words right to collect pizzas on the way to a gold TOEIC certificate",
      "正解でピザを集めて、TOEIC金のスコアへ"
    ],
    "metric": [
      "下載破 1,000",
      "1,000+ downloads",
      "1,000以上DL"
    ],
    "dev": false
  },
  {
    "id": "rooster",
    "name": [
      "公雞超人",
      "Rooster Hero",
      "公雞超人"
    ],
    "type": [
      "多益 · 聽力單字",
      "TOEIC · Listening, vocab",
      "TOEIC · リスニング"
    ],
    "line": [
      "職場情境練聽力閱讀，多益實力練到位",
      "Workplace scenarios for TOEIC listening and reading",
      "職場シーンでTOEICのリスニングと読解を練習"
    ],
    "metric": null,
    "dev": false
  },
  {
    "id": "lockin",
    "name": [
      "Lock In",
      "Lock In",
      "Lock In"
    ],
    "type": [
      "專注 · App 鎖",
      "Focus · App lock",
      "集中 · アプリロック"
    ],
    "line": [
      "想打開？先等 30 分鐘，衝動通常撐不過去",
      "Want to open it? Wait 30 minutes first. Urges rarely last that long.",
      "開きたい？まず30分待つ。衝動はたいてい続かない"
    ],
    "metric": null,
    "dev": false
  },
  {
    "id": "ptalk",
    "name": [
      "PTalk 寵物友善地圖",
      "PTalk Pet-Friendly Map",
      "PTalk ペットマップ"
    ],
    "type": [
      "生活 · 寵物友善",
      "Lifestyle · Pet-friendly",
      "ライフ · ペット同伴"
    ],
    "line": [
      "抓抓還是便便？一眼看懂毛孩友善度",
      "See at a glance how pet-friendly a place is",
      "ペットへのやさしさがひと目でわかる"
    ],
    "metric": [
      "2,000+ 位毛孩爸媽使用中",
      "2,000+ pet parents using it",
      "2,000人以上の飼い主が利用中"
    ],
    "dev": false
  },
  {
    "id": "qimen",
    "name": [
      "奇門印譜",
      "Qimen Seals",
      "奇門印譜"
    ],
    "type": [
      "占卜 · 奇門入門",
      "Divination · Qimen basics",
      "占い · 奇門入門"
    ],
    "line": [
      "每天 3–5 分鐘讀一個觀念，收一枚奇門印",
      "One idea a day in 3 to 5 minutes, and collect a Qimen seal",
      "毎日3〜5分で1つ学び、奇門印を1つ集める"
    ],
    "metric": null,
    "dev": false
  },
  {
    "id": "wood",
    "name": ["4 Pieces of Wood：T字拼圖", "4 Pieces of Wood", "4 Pieces of Wood"],
    "type": ["遊戲 · 益智解謎", "Game · Puzzle", "ゲーム · パズル"],
    "line": ["4 塊木頭、24 個形狀，每題只有唯一解；點、轉、拖就能玩，不用看說明", "Four wooden pieces, 24 shapes, one answer each. A calm, wordless puzzle.", "4つの木片、24の形、答えはそれぞれ1つ。静かで言葉のいらないパズル"],
    "metric": null,
    "dev": false
  },
];

const appShots = (id: string): readonly string[] => [1, 2, 3].map((n) => `/shots/apps/${id}/${n}.webp`);

export const SHOTS: Record<string, readonly string[]> = {
  flip: ['/shots/sushi-1.jpg', '/shots/sushi-2.jpg', '/shots/sushi-3.jpg'],
  slice: ['/shots/bear-1.jpg', '/shots/bear-2.jpg'],
  turn: ['/shots/turn-1.jpg', '/shots/turn-2.jpg'],
  sushi: appShots('sushi'),
  ninbato: appShots('ninbato'),
  koko: appShots('koko'),
  nichi: appShots('nichi'),
  pizza: appShots('pizza'),
  rooster: appShots('rooster'),
  lockin: appShots('lockin'),
  ptalk: appShots('ptalk'),
  qimen: appShots('qimen'),
  wood: appShots('wood'),
};

/** Store pages of the live apps (taken from the PTalk site). Apps with no store page yet have none. */
export const STORE_LINKS: Record<string, { ios?: string; android?: string }> = {
  flip: { ios: 'https://apps.apple.com/tw/app/sushi-flip/id6820886728', android: 'https://play.google.com/store/apps/details?id=com.ptalk.sushi' },
  turn: { android: 'https://play.google.com/store/apps/details?id=com.ptalk.turnfall' },
  slice: { android: 'https://play.google.com/store/apps/details?id=com.guandamachine.bearslice' },
  wood: { android: 'https://play.google.com/store/apps/details?id=com.ptalk.fourpiecesofwood' },
  sushi: { ios: 'https://apps.apple.com/tw/app/id6774095306', android: 'https://play.google.com/store/apps/details?id=com.ptalk.sushijp' },
  ninbato: { ios: 'https://apps.apple.com/us/app/id6782623839', android: 'https://play.google.com/store/apps/details?id=com.ptalk.ninjapigeon' },
  koko: { ios: 'https://apps.apple.com/tw/app/id6790465413', android: 'https://play.google.com/store/apps/details?id=com.ptalk.koko' },
  nichi: { ios: 'https://apps.apple.com/tw/app/id6799118226', android: 'https://play.google.com/store/apps/details?id=com.ptalk.hitofude' },
  pizza: { ios: 'https://apps.apple.com/tw/app/id6790264861', android: 'https://play.google.com/store/apps/details?id=com.ptalk.pizzatoeic' },
  rooster: { ios: 'https://apps.apple.com/tw/app/id6792789892', android: 'https://play.google.com/store/apps/details?id=com.ptalk.roosterhero' },
  lockin: { ios: 'https://apps.apple.com/tw/app/id6789834810' },
  ptalk: { ios: 'https://apps.apple.com/tw/app/id6749347348', android: 'https://play.google.com/store/apps/details?id=com.ptalk.app' },
  qimen: {
    ios: 'https://apps.apple.com/us/app/%E5%A5%87%E9%96%80%E5%8D%B0%E8%AD%9C-%E5%A5%87%E9%96%80%E9%81%81%E7%94%B2%E5%85%A5%E9%96%80%E5%AD%B8%E7%BF%92/id6804697317',
    android: 'https://play.google.com/store/apps/details?id=com.qimenyinpu.app',
  },
};
