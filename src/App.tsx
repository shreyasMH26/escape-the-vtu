import { ArcadePage } from './ArcadePage';

export default function App() {
  return (
    <ArcadePage
      onBackToPortfolio={() => {
        window.open('https://shreyasmh.in', '_blank', 'noopener,noreferrer');
      }}
    />
  );
}
