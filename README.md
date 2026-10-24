# Yu Portfolio

Next.js 16（App Router）+ React 19 + TypeScript 的個人求職作品集，支援中 / EN / 日三語與淺深色主題。

## 開發

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build
```

## 部署到 Vercel
1. 把這個資料夾推到 GitHub。
2. 在 Vercel 匯入該 repo，Framework Preset 會自動辨識為 **Next.js**，其他設定保持預設。
3. 之後每次 push 到 main 會自動重新部署。

## 結構

| 路徑 | 說明 |
|---|---|
| `app/` | `layout.tsx`（字型、主題初始化、`LangProvider`）、`page.tsx`、`globals.css` |
| `components/` | 各區塊元件：`Nav`、`Hero`、`Ticker`、`Stats`、`SkillGraph`、`Apps`、`About`、`Experience`、`Contact`、`Footer` |
| `components/LangProvider.tsx` | 語言 context：`useLang()` 回傳 `{ lang, setLang, t }` |
| `data/` | 所有內容資料（型別為 `Tri`，即 `[中文, English, 日本語]`）：`apps.ts`、`skills.ts`、`traits.ts`、`ui.ts` |
| `lib/config.ts` | Email、GitHub、官網連結，與年資計算 |

## 改內容
- 新增或修改 App：`data/apps.ts`（`dev: true` 會顯示黃燈「開發中」）
- 新增或修改技能：`data/skills.ts`
- 聯絡資訊：`lib/config.ts`
- 其他文字：`data/ui.ts`、`data/traits.ts`
