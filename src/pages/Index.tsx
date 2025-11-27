import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Leaf, Palette, Mail, Phone, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { NavigationMenu } from "@/components/NavigationMenu";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

// ORIGINAL IMPORTS
import heroImage from "@/assets/hero-baking.jpg";
import mixoraLogo from "@/assets/mixora-symbol.jpeg";
import productChocolate from "@/assets/product-chocolate.jpg";
import productVanilla from "@/assets/product-vanilla.jpg";
import productStarter from "@/assets/product-starter.jpg";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";

// NEW IMPORTS
import Chokladbild from "@/assets/Chokladbild.jpg";
import Pepparkaksbild from "@/assets/perpparkaksbild.jpg";
import Kanelbild from "@/assets/kanelbild.jpg";

// IMAGE CAROUSEL COMPONENT
export const ImageCarousel = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="relative w-full h-full overflow-hidden group">
      <img
        src={images[index]}
        alt="product"
        className="w-full h-full object-cover transition-opacity duration-500 opacity-100"
      />

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

const Index = () => {
  const { toast } = useToast();

  const products = [
    { id: 1, name: "Kladdkaka", slug: "brookie", description: "Allt du behöver för perfekta chokladkakor och brownies. Innehåller premium-chokladchips, kakao och recept.", price: "79 kr", images: [productChocolate, Chokladbild] },
    { id: 2, name: "Kanelbulle cookie", slug: "kanelbulle-kaka", description: "Klassiska ingredienser för ljuvliga vaniljbakverk. Inkluderar äkta vanilj, smör och detaljerade recept.", price: "99 kr", images: [productVanilla, Kanelbild] },
    { id: 3, name: "Pepparkakssockerkaka", slug: "mjuk-pepparkaka", description: "Det perfekta paketet för nybörjare. Komplett uppsättning med ingredienser, verktyg och steg-för-steg guide.", price: "99 kr", images: [productStarter, Pepparkaksbild] },
  ];

  const team = [
    { id: 1, name: "Lara Williams", role: "Marknadsansvarig", image: teamMember1, description: "Lara Williams även känd som Mixora UFs enda tjej brukar äta en kaka efter en jobbig skoldag." },
    { id: 2, name: "Hassan Haydar", role: "Sälj,marknad och produktansvarig.", image: teamMember2, description: "Hassan Haydar även känd som Mixora UFs bästa säljare brukar unna sig en kaka efter MMA träningarna." },
    { id: 3, name: "Elias Sethson", role: "VD", image: teamMember3, description: "Elias Sethson även känd som Mixora UFs VD, spelar golf på fritiden och unnar sig en Mixora kaka när han ska spela turnering." },
    { id: 4, name: "Alfred Cedvin", role: "Ekonomi och produktansvarig", image: teamMember4, description: "Alfred Cedvin även känd som Mixora UFs Mulletman brukar unna sig en kaka när han tänker på att han skapade mulletens framgång." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationMenu />

      {/* Hero Section */}
      <section id="hero" className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mx-auto mb-6 w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden bg-white shadow-lg animate-fade-in">
            <img src={mixoraLogo} alt="Mixora Logo" className="w-full h-full object-cover object-center" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">Mixora UF</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in">We make it, you bake it.</p>
          <Button
            size="lg"
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg animate-fade-in shadow-lg hover:shadow-xl transition-all"
          >
            Utforska Våra Paket
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Enkelt</h3>
            <p className="text-muted-foreground">Våra bakmixer gör det lätt att baka goda och trendiga bakverk, snabbt och utan krångel.</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Hållbart</h3>
            <p className="text-muted-foreground">Vi värnar om miljön genom att använda noggrant utvalda, hållbara ingredienser och förpackningar.</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Palette className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Kvalitet</h3>
            <p className="text-muted-foreground">Våra bakmixer inehåller kvalitativa råvaror.</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Våra Populära Paket</h2>
            <p className="text-xl text-muted-foreground">Upptäck vårt sortiment av noggrant sammansatta bakpaket.</p>
            <p className="text-md text-muted-foreground mt-2">(Sugen på att köpa? Kontakta oss på Instagram eller mail)</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2"
                style={{ animationDelay: `${index * 0.1}s`, boxShadow: "var(--shadow-soft)" }}
              >
                {/* Carousel without Link */}
                <div className="aspect-square overflow-hidden cursor-pointer">
                  <ImageCarousel images={product.images} />
                </div>

                <CardHeader>
                  {/* Link only on product name */}
                  <Link to={`/product/${product.slug}`}>
                    <CardTitle className="text-2xl hover:text-primary transition-colors cursor-pointer">{product.name}</CardTitle>
                  </Link>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Möt Vårt Team</h2>
            <p className="text-xl text-muted-foreground">Passionerade entreprenörer och produktutvecklare som gör Mixora möjligt</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={member.id}
                className="text-center hover:shadow-2xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s`, boxShadow: "var(--shadow-soft)" }}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 w-48 h-48 rounded-full overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                  <CardDescription className="text-accent font-semibold text-base">{member.role}</CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-primary">Kontakta Oss</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Har du frågor om våra produkter eller vill diskutera ett samarbete? Hör av dig!</p>
            <p className="text-md text-muted-foreground mt-2">(Sugen på att köpa? Kontakta oss på Instagram eller mail)</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="animate-fade-in shadow-elegant">
              <CardContent className="pt-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">E-post</p>
                      <a href="mailto:mixorauf@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">mixorauf@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Telefon</p>
                      <a href="tel:0704693042" className="text-muted-foreground hover:text-primary transition-colors">070 469 30 42</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Adress</p>
                      <p className="text-muted-foreground">Slånvägen 4, 513 35 Fristad</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;