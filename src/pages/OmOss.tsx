import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavigationMenu } from "@/components/NavigationMenu";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Target, Heart, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-baking.jpg";
import mixoraLogo from "@/assets/mixora-symbol.jpeg";

const OmOss = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <NavigationMenu />

      {/* Back Button */}
      <Button
        size="lg"
        variant="outline"
        className="fixed top-4 right-4 z-50 shadow-lg"
        onClick={() => navigate("/")}
        aria-label="Tillbaka till startsidan"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Tillbaka
      </Button>

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mx-auto mb-6 w-32 h-32 rounded-full overflow-hidden bg-white shadow-lg animate-fade-in">
            <img src={mixoraLogo} alt="Mixora Logo" className="w-full h-full object-cover object-center" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in">Om Mixora UF</h1>
          <p className="text-xl text-primary-foreground/90 animate-fade-in">
            Vi gör bakningen enklare och roligare för alla
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Our Story */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-center">Vår Berättelse</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Mixora UF grundades med en enkel idé: att göra bakning tillgängligt och roligt för alla. Vi såg att
                  många ville baka hemma men kände sig överväldigade av alla ingredienser och recept. Därför skapade vi
                  konceptet "We make it, you bake it" - vi förbereder allt du behöver, du får glädjen att baka.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Varje bakpaket är utformat för att vara enkelt och smidigt att använda, samtidigt som det ger ett gott
                  resultat och följer aktuella trender.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Values */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center">Våra Värderingar</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Recept</h3>
                  <p className="text-muted-foreground">
                    Vi jobbar ständigt på att hitta roliga och tredniga recept som man gärna vill testa.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Tidsbesparande</h3>
                  <p className="text-muted-foreground">
                    Vi vill att alla ska kunna baka utan att känna att det tar för mycket tid.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Kreativitet</h3>
                  <p className="text-muted-foreground">
                    Vi tror på att bakning ska vara både enkelt och kreativt, med utrymme för din egen touch.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mission */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-center">Vårt Uppdrag</h2>
            <Card className="bg-secondary/30">
              <CardContent className="pt-6">
                <p className="text-lg text-center leading-relaxed">
                  Att inspirera och möjliggöra för fler människor att uppleva glädjen av hemmabakning genom noggrant
                  utvalda ingredienser, tydliga instruktioner och ett engagerat team som älskar det vi gör.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4">Redo att börja baka?</h3>
            <Button
              size="lg"
              onClick={() => navigate("/")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              Utforska Våra Paket
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OmOss;
