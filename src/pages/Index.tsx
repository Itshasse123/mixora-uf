import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  CheckCircle,
  Leaf,
  Palette,
  Mail,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useToast } from "@/hooks/use-toast";
import { NavigationMenu } from "@/components/NavigationMenu";
import { Footer } from "@/components/Footer";

// Images
import heroImage from "@/assets/hero-baking.jpg";
import mixoraLogo from "@/assets/mixora-symbol.jpeg";

import productChocolate from "@/assets/product-chocolate.jpg";
import productVanilla from "@/assets/product-vanilla.jpg";
import productStarter from "@/assets/product-starter.jpg";

import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";

import Chokladbild from "@/assets/Chokladbild.jpg";
import Pepparkaksbild from "@/assets/perpparkaksbild.jpg";
import Kanelbild from "@/assets/kanelbild.jpg";

/* ===========================
   IMAGE CAROUSEL COMPONENT
=========================== */

type ImageCarouselProps = {
  images: string[];
};

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images?.length) return;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  useEffect(() => {
    setIndex(0);
  }, [images]);

  if (!images?.length) return null;

  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);

  const next = () =>
    setIndex((i) => (i + 1) % images.length);

  return (
    <div className="relative w-full h-full overflow-hidden group">
      <img
        key={images[index]}
        src={images[index]}
        alt={`product-image-${index}`}
        loading="eager"
        className="w-full h-full object-cover transition-opacity duration-300"
      />

      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full
                   opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full
                   opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

/* ===========================
   MAIN PAGE
=========================== */

const Index = () => {
  const { toast } = useToast();

  const products = [
    {
      id: 1,
      name: "Kladdkaka",
      slug: "brookie",
      description:
        "Allt du behöver för perfekta chokladkakor och brownies. Innehåller premium-chokladchips, kakao och recept.",
      price: "79 kr",
      images: [productChocolate, Chokladbild],
    },
    {
      id: 2,
      name: "Kanelbullekaka",
      slug: "kanelbulle-kaka",
      description:
        "Klassiska ingredienser för ljuvliga vaniljbakverk. Inkluderar äkta vanilj, smör och detaljerade recept.",
      price: "99 kr",
      images: [productVanilla, Kanelbild],
    },
    {
      id: 3,
      name: "Pepparkakssockerkaka",
      slug: "mjuk-pepparkaka",
      description:
        "Det perfekta paketet för nybörjare. Komplett uppsättning med ingredienser, verktyg och steg-för-steg guide.",
      price: "99 kr",
      images: [productStarter, Pepparkaksbild],
    },
  ];

  const team = [
    {
      id: 1,
      name: "Lara Williams",
      role: "Marknadsansvarig",
      image: teamMember1,
      description:
        "Mixora UFs enda tjej – äter gärna en kaka efter en jobbig skoldag.",
    },
    {
      id: 2,
      name: "Hassan Haydar",
      role: "Sälj, marknad & produkt",
      image: teamMember2,
      description:
        "Mixoras bästa säljare – unnar sig en kaka efter MMA-träning.",
    },
    {
      id: 3,
      name: "Elias Sethson",
      role: "VD",
      image: teamMember3,
      description:
        "VD och golfentusiast – Mixora-kaka inför varje turnering.",
    },
    {
      id: 4,
      name: "Alfred Cedvin",
      role: "Ekonomi & produkt",
      image: teamMember4,
      description:
        "Mulletman – firar varje framgång med en Mixora-kaka.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationMenu />

      {/* HERO */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mx-auto mb-6 w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden bg-white shadow-lg">
            <img
              src={mixoraLogo}
              alt="Mixora Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Mixora UF
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
            We make it, you bake it.
          </p>

          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-accent text-accent-foreground px-8 py-6 text-lg"
          >
            Utforska Våra Paket
          </Button>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-2">
              <div className="aspect-square">
                <ImageCarousel images={product.images} />
              </div>

              <CardHeader>
                <Link to={`/product/${product.slug}`}>
                  <CardTitle className="text-2xl hover:text-primary">
                    {product.name}
                  </CardTitle>
                </Link>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>

              <CardContent className="text-center">
                <span className="text-2xl font-bold text-primary">
                  {product.price}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;