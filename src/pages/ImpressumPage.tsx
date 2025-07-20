import { useState } from "react";
import "./ImpressumPage.css";

const ImpressumPage = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [showAddress, setShowAddress] = useState(false);

  // Obfuscated email display
  const renderEmail = () => {
    const email = import.meta.env.VITE_AUTHOR_EMAIL || "[Email not configured]";
    if (!showEmail) {
      return (
        <span>
          <button
            onClick={() => setShowEmail(true)}
            className="reveal-button"
            title="Click to reveal email address"
          >
            📧 Click to reveal email
          </button>
        </span>
      );
    }
    return (
      <span>
        {email.replace("@", " [at] ").replace(".", " [dot] ")}
        <small> (anti-spam format)</small>
      </span>
    );
  };

  // Obfuscated address display
  const renderAddress = () => {
    const address =
      import.meta.env.VITE_AUTHOR_ADDRESS || "[Address not configured]";
    const city = import.meta.env.VITE_AUTHOR_CITY || "[City not configured]";

    if (!showAddress) {
      return (
        <span>
          <button
            onClick={() => setShowAddress(true)}
            className="reveal-button"
            title="Click to reveal address"
          >
            🏠 Click to reveal address
          </button>
          <br />
          <small>(Address hidden for privacy - click to reveal)</small>
        </span>
      );
    }
    return (
      <span>
        {address}
        <br />
        {city}
        <br />
        <small>⚠️ Address visible for legal compliance only</small>
      </span>
    );
  };

  return (
    <div className="impressum-page">
      <div className="impressum-content">
        <h1>Impressum</h1>

        <div className="privacy-notice">
          <h3>🔒 Privacy Protection Notice</h3>
          <p>
            Personal information is displayed here for German legal compliance
            (§5 TMG) only. Email and address are hidden by default to prevent
            automated harvesting. This information should not be used for
            commercial purposes or spam.
          </p>
        </div>

        <section className="impressum-section">
          <h2>Angaben gemäß § 5 TMG</h2>
          <div className="info-block">
            <p>
              <strong>Verantwortlich für den Inhalt:</strong>
              <br />
              {import.meta.env.VITE_AUTHOR_NAME || "[Name not configured]"}
              <br />
              {renderAddress()}
              <br />
              Deutschland
            </p>
            <p>
              <strong>Kontakt:</strong>
              <br />
              E-Mail: {renderEmail()}
              <br />
              GitHub:{" "}
              <a
                href="https://github.com/flipdidip"
                target="_blank"
                rel="noopener noreferrer"
              >
                flipdidip
              </a>
            </p>
            <div className="contact-preference">
              <small>
                📬 <strong>Bevorzugter Kontakt:</strong> GitHub Issues oder Pull
                Requests für projektbezogene Anfragen. E-Mail nur für rechtliche
                Angelegenheiten.
              </small>
            </div>
          </div>
        </section>

        <section className="impressum-section">
          <h2>Legal Information</h2>
          <div className="info-block">
            <h3>SciFiNovel Project</h3>
            <p>
              This is an interactive science fiction novel application created
              for educational and entertainment purposes.
            </p>
          </div>
        </section>

        <section className="impressum-section">
          <h2>Contact Information</h2>
          <div className="info-block">
            <p>
              <strong>Project:</strong> SciFiNovel
            </p>
            <p>
              <strong>Repository:</strong>{" "}
              <a
                href="https://github.com/flipdidip/SciFiNovel"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
            <p>
              <strong>Type:</strong> Open Source Interactive Fiction
            </p>
          </div>
        </section>

        <section className="impressum-section">
          <h2>Technology Stack</h2>
          <div className="info-block">
            <ul>
              <li>React 19</li>
              <li>TypeScript</li>
              <li>Vite</li>
              <li>React Router</li>
            </ul>
          </div>
        </section>

        <section className="impressum-section">
          <h2>Haftungsausschluss</h2>
          <div className="info-block">
            <h3>Haftung für Inhalte</h3>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht unter der Verpflichtung, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hinweisen.
            </p>
            <h3>Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>
            <h3>Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </section>

        <section className="impressum-section">
          <h2>Disclaimer</h2>
          <div className="info-block">
            <p>
              This application is a work of fiction. Any resemblance to actual
              events, locations, or persons, living or dead, is purely
              coincidental. The content is for entertainment purposes only.
            </p>
          </div>
        </section>

        <section className="impressum-section">
          <h2>Datenschutz / Privacy & Data</h2>
          <div className="info-block">
            <h3>Datenschutzerklärung</h3>
            <p>
              Diese Anwendung läuft vollständig in Ihrem Browser und sammelt
              oder speichert keine personenbezogenen Daten auf externen Servern.
              Eventuelle Spielfortschritte werden lokal im Speicher Ihres
              Browsers gespeichert.
            </p>
            <p>
              <strong>Hosting:</strong> Diese Website wird über GitHub Pages
              gehostet. GitHub kann grundlegende Zugriffsdaten (IP-Adresse,
              Browsertyp, Zugriffszeit) in Serverprotokollen speichern. Weitere
              Informationen finden Sie in der
              <a
                href="https://docs.github.com/en/github/site-policy/github-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Privacy Policy
              </a>
              .
            </p>
            <p>
              <strong>Cookies:</strong> Diese Anwendung verwendet keine
              Tracking-Cookies oder externe Analysedienste.
            </p>
            <h3>English</h3>
            <p>
              This application runs entirely in your browser and does not
              collect or store personal data on external servers. Any game
              progress is stored locally in your browser's storage.
            </p>
          </div>
        </section>

        <section className="impressum-section">
          <h2>Abuse Prevention</h2>
          <div className="info-block">
            <h3>⚠️ Missbrauch verhindern / Preventing Abuse</h3>
            <p>
              <strong>Deutsch:</strong> Die hier angegebenen Kontaktdaten sind
              ausschließlich für rechtliche Angelegenheiten im Zusammenhang mit
              dieser Website bestimmt. Die Nutzung für Werbezwecke, Spam oder
              andere kommerzielle Zwecke ist ausdrücklich untersagt und wird
              rechtlich verfolgt.
            </p>
            <p>
              <strong>English:</strong> The contact information provided here is
              exclusively for legal matters related to this website. Use for
              advertising, spam, or other commercial purposes is expressly
              prohibited and will be prosecuted.
            </p>
            <p>
              <strong>Bevorzugter Kontakt / Preferred Contact:</strong>
              <a
                href="https://github.com/flipdidip/SciFiNovel/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Issues
              </a>{" "}
              für projektbezogene Anfragen.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ImpressumPage;
