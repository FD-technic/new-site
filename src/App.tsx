import { Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Service from "./pages/Service";
import { useEffect, useState } from "react";
import { THEMES, type ThemeKey } from "./types/Theme";
import { MenuItems } from "./types/Menu";
import Partners from "./pages/Partners";
import Reservation from "./pages/Reservation";



function App() {
  const [theme, setTheme] = useState<ThemeKey>("sand");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (    
      <div className="page">
      <Header menu={MenuItems}
        themes={THEMES}
        selectedTheme={theme}
        onThemeChange={setTheme}/>
      <main>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/storage" element={<Home />} />
            <Route path="/transfer" element={<Home />} />
            <Route path="/handy" element={<Home />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Service />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
      </div>    
  );
}

export default App;
