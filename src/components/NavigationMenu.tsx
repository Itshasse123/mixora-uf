import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useNavigate, useLocation } from "react-router-dom";
import mixoraLogo from "@/assets/mixora-logo.png";

export const NavigationMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          size="lg" 
          className="fixed top-4 left-4 z-50 shadow-lg"
          aria-label="Öppna meny"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="flex flex-row items-center gap-3">
          <img 
            src={mixoraLogo} 
            alt="Mixora UF" 
            className="w-12 h-12 rounded-full bg-background p-1"
          />
          <SheetTitle>Meny</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          <Button
            variant="ghost"
            className="justify-start text-lg"
            onClick={() => scrollToSection("hero")}
          >
            Hem
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-lg"
            onClick={() => scrollToSection("products")}
          >
            Våra Produkter
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-lg"
            onClick={() => scrollToSection("team")}
          >
            Vårt Team
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-lg"
            onClick={() => scrollToSection("contact")}
          >
            Kontakta Oss
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-lg"
            onClick={() => {
              navigate("/omoss");
              setOpen(false);
            }}
          >
            Om Oss
          </Button>
          <Button
  variant="ghost"
  className="justify-start text-lg"
  onClick={() => {
    navigate("/support");
    setOpen(false);
  }}
>
  Supporta Oss
</Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
