export type ThemeKey = "sand" | "dark-sand" | "ocean" | "dark-ocean";

export type Theme = {
    key: ThemeKey;
    label: string;
};

export const THEMES: Theme[] = [
    { key: "sand", label: "☀️ Sand" },
    { key: "dark-sand", label: "🌙 Sand" },
    { key: "ocean", label: "🌊 Ocean" },
    { key: "dark-ocean", label: "🌙 Ocean" },
];