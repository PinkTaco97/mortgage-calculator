import { create } from 'zustand';

import { BrandKey, Theme } from './theme.types';
import { BOMTheme, BSATheme, STGTheme, WBCTheme } from './themes';
import { isBrand } from './theme.util';

type ThemeState = {
  activeTheme: Theme;
  activeThemeKey: BrandKey;
  brandName: Record<BrandKey, string>;
  setTheme: (theme: BrandKey) => void;
  themes: Record<BrandKey, Theme>;
};

const themes = {
  bom: BOMTheme,
  bsa: BSATheme,
  stg: STGTheme,
  wbc: WBCTheme,
}


// Retrive the default theme from environment variables.
const theme = process.env.THEME as string;
const activeThemeKey = isBrand(theme) ? theme as BrandKey : "wbc";

export const useThemeStore = create<ThemeState>()(set => ({
  activeTheme: themes[activeThemeKey],
  activeThemeKey,
  brandName: {
    bom: 'Bank of Melbourne',
    bsa: 'BankSA',
    stg: 'St. George',
    wbc: 'Westpac',
  },
  setTheme: (theme) => {
    set(state => ({ activeThemeKey: theme, activeTheme: state.themes[theme]}))
  },
  themes
}));