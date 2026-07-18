import type { ThemeKey } from "./Theme";

const STORAGE_KEY = "theme";

export const themeService = {

    get(): ThemeKey {
        return (localStorage.getItem(STORAGE_KEY) as ThemeKey) ?? "sand";
    },

    set(theme: ThemeKey) {
        localStorage.setItem(STORAGE_KEY, theme);
    },

    apply(theme: ThemeKey) {
        document.documentElement.setAttribute("data-theme", theme);
    },

    init() {
        this.apply(this.get());
    }
};