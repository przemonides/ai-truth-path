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

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-heading text-primary mb-8">
            O mnie
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="body-large text-muted-foreground mb-6">
              Przemek Blicharski – psycholog, ekspert AI, praktyk biznesowy z doświadczeniem 
              we wdrożeniach dla firm każdej wielkości.
            </p>
            <p className="text-muted-foreground">
              Łączę wiedzę z zakresu psychologii biznesu z najnowszymi technologiami AI, 
              by tworzyć rozwiązania, które rzeczywiście wspierają rozwój organizacji.
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
                Przemek Blicharski - Ekspert AI i Psycholog Biznesu
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="mailto:kontakt@aiconsulting.pl" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth">
                <Mail className="w-4 h-4" />
                <span className="text-sm">kontakt@aiconsulting.pl</span>
              </a>
              <a href="tel:+48123456789" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+48 123 456 789</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="border-t border-border/20 mt-8 pt-6 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-smooth">Polityka prywatności</a>
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
