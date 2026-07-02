export type ThemeKey = "sand" | "ocean";

export type Theme = {
    key: ThemeKey;
    label: string;
};

export const THEMES: Theme[] = [
    { key: "sand", label: "☀️ Sand" },
    { key: "ocean", label: "🌊 Ocean" },
];