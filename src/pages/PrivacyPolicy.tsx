const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <a href="/" className="text-xl font-medium text-primary">AI Consulting</a>
        </div>
      </header>

      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="hero-heading text-primary mb-12 text-center">
          Polityka Prywatności
        </h1>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="section-heading text-primary mb-4">1. Informacje ogólne</h2>
            <p className="mb-4">
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
              przekazanych przez użytkowników w związku z korzystaniem z usług świadczonych przez 
              Przemka Blicharskiego prowadzącego działalność gospodarczą pod nazwą AI Consulting.
            </p>
            <p>
              <strong>Administrator danych:</strong><br/>
              Przemek Blicharski<br/>
              ul. Kościuszki 3/10<br/>
              44-100 Gliwice<br/>
              e-mail: przemek@pbx.agency
            </p>
          </section>

          <section>
            <h2 className="section-heading text-primary mb-4">2. Zakres zbieranych danych</h2>
            <p className="mb-4">
              W ramach świadczonych usług możemy zbierać następujące kategorie danych osobowych:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dane identyfikacyjne (imię, nazwisko)</li>
              <li>Dane kontaktowe (adres e-mail, numer telefonu)</li>
              <li>Nazwa firmy i stanowisko</li>
              <li>Informacje przekazane w formularzu kontaktowym</li>
            </ul>
          </section>

          <section>
            <h2 className="section-heading text-primary mb-4">3. Cele i podstawy prawne przetwarzania</h2>
            <p className="mb-4">
              Dane osobowe przetwarzane są w następujących celach:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Udzielanie odpowiedzi na zapytania</strong> - podstawa prawna: uzasadniony interes (art. 6 ust. 1 lit. f RODO)</li>
              <li><strong>Świadczenie usług konsultingowych</strong> - podstawa prawna: wykonanie umowy (art. 6 ust. 1 lit. b RODO)</li>
              <li><strong>Marketing bezpośredni</strong> - podstawa prawna: uzasadniony interes (art. 6 ust. 1 lit. f RODO)</li>
            </ul>
          </section>

          <section>
            <h2 className="section-heading text-primary mb-4">4. Okres przechowywania danych</h2>
            <p>
              Dane osobowe będą przechowywane przez okres niezbędny do realizacji celów, 
              dla których zostały zebrane, nie dłużej jednak niż przez 3 lata od ostatniego kontaktu, 
              chyba że przepisy prawa stanowią inaczej.
            </p>
          </section>

          <section>
            <h2 className="section-heading text-primary mb-4">5. Uprawnienia osób, których dane dotyczą</h2>
            <p className="mb-4">
              Przysługują Państwu następujące uprawnienia:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Prawo dostępu do danych osobowych</li>
              <li>Prawo do sprostowania danych</li>
              <li>Prawo do usunięcia danych</li>
              <li>Prawo do ograniczenia przetwarzania</li>
              <li>Prawo do przenoszenia danych</li>
              <li>Prawo do wniesienia sprzeciwu wobec przetwarzania</li>
            </ul>
          </section>

          <section>
            <h2 className="section-heading text-primary mb-4">6. Kontakt</h2>
            <p>
              W sprawach związanych z ochroną danych osobowych prosimy o kontakt:
            </p>
            <p className="mt-4">
              <strong>E-mail:</strong> przemek@pbx.agency<br/>
              <strong>Telefon:</strong> +48 606 146 588
            </p>
          </section>

          <section>
            <h2 className="section-heading text-primary mb-4">7. Zmiany polityki prywatności</h2>
            <p>
              Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. 
              O wszelkich zmianach będziemy informować na tej stronie.
            </p>
          </section>

          <div className="bg-secondary/30 p-6 rounded-lg border border-border/20 mt-8">
            <p className="text-sm">
              <strong>Data ostatniej aktualizacji:</strong> 1 sierpnia 2024
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="/" 
            className="inline-flex items-center text-primary hover:underline transition-smooth"
          >
            ← Powrót do strony głównej
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;