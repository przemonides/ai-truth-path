import { Button } from "@/components/ui/button";
import { Check, Mail, Phone, Linkedin } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";
import Testimonial from "@/components/Testimonial";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="text-xl font-medium text-primary">AI Consulting</div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 lg:py-32 text-center">
        <h1 className="hero-heading text-primary mb-6 max-w-4xl mx-auto">
          AI. Fakty zamiast hype'u.
        </h1>
        <p className="body-large text-muted-foreground mb-12 max-w-2xl mx-auto">
          Wdrażamy Sztuczną Inteligencję, która naprawdę działa w biznesie.
        </p>
        <Button size="lg" className="transition-smooth hover:scale-[1.02]">
          Umów bezpłatną konsultację
        </Button>
      </section>

      {/* AI Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-primary mb-8 text-center">
              Sztuczna inteligencja – więcej pytań niż odpowiedzi
            </h2>
            <p className="body-large text-muted-foreground text-center mb-8">
              Choć AI jest dziś na ustach wszystkich, większość firm wciąż nie wie, co naprawdę kryje się za tym terminem. Czym różni się realna sztuczna inteligencja od marketingowego hasła? Skąd wiedzieć, które rozwiązania mają sens, a które to tylko kolejna chwilowa moda?
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-secondary/20 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-heading text-primary mb-12">
            Czy to brzmi znajomo?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <div className="w-6 h-6 bg-primary/20 rounded-full"></div>
              </div>
              <p className="body-large text-foreground">
                Masz dość marketingowego szumu wokół AI?
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <div className="w-6 h-6 bg-primary/20 rounded-full"></div>
              </div>
              <p className="body-large text-foreground">
                Nie widzisz efektów wdrożeń technologii w swojej firmie?
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <div className="w-6 h-6 bg-primary/20 rounded-full"></div>
              </div>
              <p className="body-large text-foreground">
                Nie wiesz, od czego zacząć?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expectations Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-primary mb-8 text-center">
              Od wielkich oczekiwań do pierwszych rozczarowań
            </h2>
            <p className="body-large text-muted-foreground text-center mb-8">
              Wielu liderów zaczyna przygodę z AI z ogromnymi nadziejami – licząc na przełomowe zmiany. Pierwsze próby wdrożenia często okazują się jednak trudniejsze, niż zakładano. Wyniki nie przychodzą od razu, a efekty bywają mniej spektakularne niż obietnice. Zaczynają się pytania: czy to na pewno działa, czy może robimy coś źle?
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-heading text-primary mb-12">
            Jak pomagamy
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-medium text-primary">Diagnozujemy potrzeby biznesowe</h3>
              <p className="text-muted-foreground">
                Analizujemy Twoje procesy i identyfikujemy obszary, gdzie AI przyniesie największe korzyści
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-medium text-primary">Odróżniamy trendy od realnych rozwiązań</h3>
              <p className="text-muted-foreground">
                Koncentrujemy się na technologiach, które rzeczywiście wpływają na wyniki biznesowe
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-medium text-primary">Prowadzimy przez cały proces wdrożenia</h3>
              <p className="text-muted-foreground">
                Od strategii po implementację - wspieramy Cię na każdym etapie transformacji
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-primary mb-8 text-center">
              Kultura organizacyjna – największa przeszkoda (i szansa)
            </h2>
            <p className="body-large text-muted-foreground text-center mb-8">
              Nawet najlepsza technologia nie zadziała, jeśli nie jest gotowa na nią organizacja. Zderzenie nowych narzędzi z dotychczasowymi sposobami pracy, opór przed zmianą, obawy o kompetencje – to najczęstsze bariery, z którymi mierzą się zespoły. Sukces wdrożenia AI zależy bardziej od ludzi niż od kodu.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-secondary/20 py-20">
        <div className="container mx-auto px-6">
          <h2 className="section-heading text-primary mb-12 text-center">
            Opinie klientów
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Testimonial
              quote="Dzięki tej współpracy wreszcie zobaczyliśmy namacalne efekty AI w codziennej pracy."
              author="Anna"
              company="dyrektor operacyjny w firmie logistycznej"
            />
            <Testimonial
              quote="Bez obietnic bez pokrycia – konkret i skuteczność."
              author="Tomasz"
              company="właściciel firmy produkcyjnej"
            />
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-primary mb-8 text-center">
              Od teorii do praktyki – jak przejść tę drogę bezpiecznie?
            </h2>
            <p className="body-large text-muted-foreground text-center mb-12">
              Dlatego nasze podejście opiera się nie tylko na technologii, ale też na edukacji i wsparciu organizacyjnym. Pokazujemy, jak krok po kroku przekładać AI na konkretne korzyści – i uniknąć pułapek, przez które przechodzi większość firm. Rozmawiajmy o realnych wdrożeniach, nie o hype'ie.
            </p>
            <div className="bg-secondary/30 p-8 rounded-lg border border-border/20">
              <h3 className="text-xl font-semibold text-primary mb-6 text-center">
                Warsztatowa praca w metodyce Design Thinking
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Realne narzędzia</h4>
                  <p className="text-muted-foreground text-sm">
                    Pracujemy na rzeczywistych narzędziach AI – od pierwszego dnia szkolenia zespół poznaje konkretne rozwiązania, które może od razu zastosować w swojej pracy.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Prototypy podczas szkolenia</h4>
                  <p className="text-muted-foreground text-sm">
                    Nie kończymy na teorii – już w trakcie warsztatów budujemy pierwsze prototypy narzędzi AI dostosowanych do specyfiki Waszej organizacji.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-heading text-primary mb-8">
            O mnie
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="body-large text-muted-foreground">
              Przemek Blicharski – psycholog, ekspert AI i praktyk biznesowy. Od 2014 roku wspieram firmy we wdrożeniach narzędzi analitycznych oraz rozwiązań z zakresu klasycznej sztucznej inteligencji (ML). Pomagam przełożyć technologię na realne efekty biznesowe.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-heading text-primary-foreground mb-8">
            Gotowy na zmianę?
          </h2>
          <p className="body-large text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Umów bezpłatną konsultację i przekonaj się, jak AI może wpłynąć na Twój biznes.
          </p>
          <div className="bg-background rounded-lg p-8 max-w-lg mx-auto">
            <ConsultationForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/30 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-xl font-medium text-primary mb-2">AI Consulting</div>
              <p className="text-sm text-muted-foreground">
                Przemek Blicharski - AI ekspert, Data Strategy Manager, psycholog
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="mailto:przemek@pbx.agency" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth">
                <Mail className="w-4 h-4" />
                <span className="text-sm">przemek@pbx.agency</span>
              </a>
              <a href="tel:+48606146588" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+48 606 146 588</span>
              </a>
              <a href="https://www.linkedin.com/in/blicharskip/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="border-t border-border/20 mt-8 pt-6">
            <div className="text-center mb-4 text-sm text-muted-foreground">
              <p>Kościuszki 3/10, 44-100 Gliwice</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
              <a href="/privacy-policy" className="hover:text-primary transition-smooth">Polityka prywatności</a>
              <span className="hidden md:inline">•</span>
              <span>© 2024 AI Consulting. Wszystkie prawa zastrzeżone.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
