import { create } from 'zustand';

import { BrandKey, Theme } from './theme.types';
import { BOMTheme, BSATheme, STGTheme, WBCTheme } from './themes';

type ThemeState = {
  activeTheme: Theme;
  activeThemeKey: BrandKey;
  brandName: Record<BrandKey, string>;
  setTheme: (theme: BrandKey) => void;
  themes: Record<BrandKey, Theme>;
};

export const useThemeStore = create<ThemeState>()(set => ({
  activeTheme: WBCTheme,
  activeThemeKey: 'wbc',
  brandName: {
    bom: 'Bank of Melbourne',
    bsa: 'BankSA',
    stg: 'St. George',
    wbc: 'Westpac',
  },
  setTheme: (theme) => {
    set(state => ({ activeThemeKey: theme, activeTheme: state.themes[theme]}))
    console.log('@TEST/setTheme', theme);
  },
  
  themes: {
    bom: BOMTheme,
    bsa: BSATheme,
    stg: STGTheme,
    wbc: WBCTheme,
  },
}));