'use client';

// Theme.
import { useThemeStore } from '@/theme/theme.store';
import { BrandKey } from '@/theme/theme.types';

// Components.
import { Header, Footer, Card } from '@/components';

export default function Home() {
  const { activeThemeKey, setTheme } = useThemeStore();
  return (
    <>
      <Header/>
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <ul className="flex w-1/2 flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="font-bold">Select</label>
            <select value={activeThemeKey} onChange={e => setTheme(e.target.value as BrandKey)} className="border p-2">
              <option value="wbc">Westpac</option>
              <option value="stg">St. George</option>
              <option value="bom">Bank of Melbourne</option>
              <option value="bsa">BankSA</option>
            </select>
          </div>
          <Card active />
        </ul>
      </main>
      <Footer/>
    </>
  );
}