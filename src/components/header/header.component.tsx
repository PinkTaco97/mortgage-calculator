'use client';

// Components.
import { Header as _Header } from "@westpac/ui";
import { ThemeSelector } from '@/components'

// Theme.
import { useThemeStore } from '@/theme/theme.store';

export default function Header() {
    const { activeThemeKey, } = useThemeStore();
    return (
        <_Header brand={activeThemeKey}>
            <ThemeSelector/>
        </_Header>
    );
}