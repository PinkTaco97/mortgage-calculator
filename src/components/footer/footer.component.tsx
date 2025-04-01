'use client';

// Components.
import { Footer as _Footer } from "@westpac/ui";
import { SecurityIcon } from "@westpac/ui/icon";

// Theme.
import { useThemeStore } from '@/theme/theme.store';

export default function Footer() {
  const { activeThemeKey, } = useThemeStore();
  return(
    <_Footer
        brand={activeThemeKey}
        hideLogo
    >
        <div className="relative">
        <div className="float-left flex-none">
            <SecurityIcon
            className="float-left shrink-0 mr-1 mt-0.5"
            color="muted"
            size="small"
            />
        </div>
        <div className="flex">
            <p className="text-muted relative flex-1">
            Footer content goes here.
            </p>
        </div>
        </div>
    </_Footer>
  );
}