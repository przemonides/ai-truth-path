import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.consent) {
      toast({
        variant: "destructive",
        title: "Błąd",
        description: "Proszę wypełnić wszystkie wymagane pola i zaakceptować politykę prywatności.",
      });
      return;
    }

    // Here you would typically send the data to your backend/CRM
    console.log("Form submitted:", formData);
    
    setIsSubmitted(true);
    toast({
      title: "Dziękujemy!",
      description: "Skontaktujemy się w ciągu 24h.",
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <h3 className="section-heading text-primary mb-4">Dziękujemy!</h3>
        <p className="body-large text-muted-foreground">
          Twoja wiadomość została wysłana. Skontaktujemy się w ciągu 24 godzin.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Imię *</Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          required
          className="transition-smooth"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">E-mail *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          required
          className="transition-smooth"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Telefon (opcjonalnie)</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          className="transition-smooth"
        />
      </div>
      
      <div className="flex items-start space-x-2">
        <Checkbox
          id="consent"
          checked={formData.consent}
          onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
          required
        />
        <Label htmlFor="consent" className="text-sm leading-relaxed">
          Zgadzam się na kontakt oraz{" "}
          <a href="#" className="text-primary underline hover:no-underline transition-smooth">
            politykę prywatności
          </a>
          *
        </Label>
      </div>
      
      <Button 
        type="submit" 
        size="lg" 
        className="w-full transition-smooth hover:scale-[1.02]"
      >
        Umów bezpłatną konsultację
      </Button>
    </form>
  );
};

export default ConsultationForm;