import { useEffect, useState } from "react";
import { THEMES, type ThemeKey } from "./types/Theme";
import { themeService } from "./types/ThemeStorage";
import { Footer, Header, Section } from "@layout";
import { publicRoutes } from "./site/config/publicRoutes";
import AppRoutes from "@layout/Navigation/AppRoutes";
import { adminRoutes } from "@site/config/adminRoutes";



function App() {
  const [theme, setTheme] = useState(themeService.get());
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    themeService.init();
  }, [theme]);

  const handleThemeChange = (theme: ThemeKey) => {
    themeService.set(theme);
    setTheme(theme);
  }

  return (
      <div className="page">
      <Header menu={isAuthorized ? adminRoutes : publicRoutes}
        themes={THEMES}
        selectedTheme={theme}
        onThemeChange={handleThemeChange}
        authorized={isAuthorized}
        onAuthorizedCahange={setIsAuthorized}/>
      <main>
        <Section>
          <AppRoutes />
        </Section>
      </main>
      <Footer />
      </div>
  );
}

export default App;
