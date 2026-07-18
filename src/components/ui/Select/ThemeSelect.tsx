import Select from "@components/form/Select";
import type { Theme, ThemeKey } from "../../../types/Theme";


type ThemeSelectProps = {
    items: Theme[];
    value: ThemeKey;
    onChange: (theme: ThemeKey) => void;
}

const ThemeSelect = ( {items, value, onChange}:ThemeSelectProps ) => {

    return (
        <Select
        label="" 
        id="theme-select"
        name="themeSelect"
        items={items}
        value={value}
        onChange={(value) => onChange(value as ThemeKey)}
        />
    );
};

export default ThemeSelect;