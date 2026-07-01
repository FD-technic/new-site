import "./layout.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div>
            
        </div>
        <div>
          <p>
            &copy; 2026 Petr Hron • <a href="http://www.fdweb.cz">fdweb.cz</a>
          </p>
        </div>
        <div className="version">
          <p>Ferdo-UI v{import.meta.env.VITE_APP_VERSION}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
