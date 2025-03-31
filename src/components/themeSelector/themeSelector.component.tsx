'use client';

// Theme.
import { useThemeStore } from '@/theme/theme.store';
import { BrandKey } from '@/theme/theme.types';

export default function ThemeSelector() {
    const { activeThemeKey, setTheme } = useThemeStore();
  return (
    <div className="flex flex-col gap-2">
        <label className="font-bold">Select Theme:</label>
        <select value={activeThemeKey} onChange={e => setTheme(e.target.value as BrandKey)} className="border p-2">
            <option value="wbc">Westpac</option>
            <option value="stg">St. George</option>
            <option value="bom">Bank of Melbourne</option>
            <option value="bsa">BankSA</option>
        </select>
    </div>
  );
}