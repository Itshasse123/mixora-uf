import { Link, useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import mixoraLogo from "@/assets/mixora-symbol.jpeg";

export const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Företagsinfo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={mixoraLogo}
                alt="Mixora UF"
                className="w-12 h-12 rounded-full bg-white/10 p-1 object-cover"
              />
              <h3 className="font-bold text-xl">Mixora UF</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              We make it, you bake it. Gör bakningen enklare och roligare för alla.
            </p>
          </div>

          {/* Snabblänkar */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Snabblänkar</h4>
            <nav className="flex flex-col gap-3">
              <Button
                variant="link"
                className="text-primary-foreground/80 hover:text-accent p-0 h-auto justify-start text-sm"
                onClick={() => scrollToSection("hero")}
              >
                Hem
              </Button>
              <Button
                variant="link"
                className="text-primary-foreground/80 hover:text-accent p-0 h-auto justify-start text-sm"
                onClick={() => scrollToSection("products")}
              >
                Våra Produkter
              </Button>
              <Button
                variant="link"
                className="text-primary-foreground/80 hover:text-accent p-0 h-auto justify-start text-sm"
                onClick={() => scrollToSection("team")}
              >
                Vårt Team
              </Button>
              <Link
                to="/omoss"
                className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm"
              >
                Om Oss
              </Link>
            </nav>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary-foreground/60" />
                <a
                  href="mailto:mixorauf@gmail.com"
                  className="text-primary-foreground/80 hover:text-accent text-sm"
                >
                  mixorauf@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary-foreground/60" />
                <a
                  href="tel:0704693042"
                  className="text-primary-foreground/80 hover:text-accent text-sm"
                >
                  070 469 30 42
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">
                  Slånvägen 4, 513 35 Fristad
                </span>
              </div>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <nav className="flex flex-col gap-3">
              <Button
                variant="link"
                className="text-primary-foreground/80 hover:text-accent p-0 h-auto justify-start text-sm"
                onClick={() => scrollToSection("contact")}
              >
                Kontakta Oss
              </Button>
            </nav>
          </div>

          {/* Sociala Medier */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Sociala Medier</h4>
            <nav className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/mixorauf/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent text-sm"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/people/Mixora-UF/pfbid02tSdDZdJAvYmWXuvWKjSYJSuh28u2hNFpFFCpsdSfhtpyir7okTSau4JMGVnJ2ULVl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent text-sm"
              >
                Facebook
              </a>
            </nav>
          </div>
        </div>

        {/* Nedre rad */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center md:text-left space-y-1">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Mixora UF. Alla rättigheter förbehållna.
          </p>
          <p className="text-sm text-primary-foreground/70">
            Hemsida skapad i samarbete med{" "}
            <a
              href="https://www.linkedin.com/in/adam-sethson-7b9844268"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-accent font-semibold"
            >
              Adam Sethson
            </a>
          </p>
          <p className="text-sm text-primary-foreground/70">
            Hemsidan programmerad av{" "}
            <a
              href="https://www.linkedin.com/in/hassan-haydar-808a17391/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-accent font-semibold"
            >
              Hassan Haydar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};