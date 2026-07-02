import type { Theme, ThemeKey } from "../../types/Theme";
import Select from "./Select";

type ThemeSelectProps = {
    items: Theme[];
    value: ThemeKey;
    onChange: (theme: ThemeKey) => void;
}

const ThemeSelect = ( {items, value, onChange}:ThemeSelectProps ) => {

    return (
        <>
        <Select 
        id="theme-select"
        name="themeSelect"
        items={items}
        value={value}
        onChange={(value) => onChange(value as ThemeKey)}
        />
        </>
    );
};

export default ThemeSelect;