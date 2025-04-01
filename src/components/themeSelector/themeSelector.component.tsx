'use client';

// Components.
import { Select } from '@westpac/ui'

// Theme.
import { useThemeStore } from '@/theme/theme.store';
import { BrandKey } from '@/theme/theme.types';

export default function ThemeSelector() {
    const { activeThemeKey, setTheme } = useThemeStore();
  return (
    <div className="flex flex-row gap-2">
        <Select value={activeThemeKey} onChange={e => setTheme(e.target.value as BrandKey)} className="border p-2">
            <option value="wbc">Westpac</option>
            <option value="stg">St. George</option>
            <option value="bom">Bank of Melbourne</option>
            <option value="bsa">BankSA</option>
        </Select>
    </div>
  );
}