const ITEMS = ['React', 'Next.js', 'TypeScript', 'React Native', 'Expo', 'Zustand', 'TanStack Query', 'three.js', 'Phaser', 'Playwright'];

export function Ticker() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="tick" aria-hidden="true">
      <div>
        {[...row, ...row].map((s, i) => (
          <span key={i}>
            {s}
            <span className="sl" style={{ marginLeft: 44 }}>
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
