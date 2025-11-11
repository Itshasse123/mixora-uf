import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Pepparkaka() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const key = params.get("key");

  // ✅ Blockera om ingen eller fel key
  if (key !== "mixorauf000pepparcookie") {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="max-w-3xl mx-auto py-20 px-4">

      {/* Tillbaka-knapp */}
      <Button
        size="lg"
        variant="outline"
        className="fixed top-4 right-4 z-50 shadow-lg bg-[#4B2A1A] text-white hover:bg-[#3d2215]"
        onClick={() => navigate("/")}>
        <ArrowLeft className="h-5 w-5 mr-2" />
        Tillbaka
      </Button>

      <h1 className="text-4xl font-bold mb-8 text-center">Pepparkakssockerkaka</h1>

      <div className="bg-white/10 p-6 rounded-lg border border-white/20 backdrop-blur-md">
        <h2 className="text-2xl font-semibold mb-4">Ingredienser</h2>
        <ul className="space-y-1 text-lg">
          <li>125 g smör</li>
          <li>3 ägg</li>
          <li>1 dl mjölk</li>
          <li>Ströbröd</li>
          <li>Pepparkakssockerkaksmixen</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Gör så här</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Sätt på ugnen på 180 grader.</li>
          <li>Smörj och bröa en sockerkaksform, ca 1.5 liter.</li>
          <li>Smält smöret och låt det svalna lite. .</li>
          <li>Knäck i äggen i en bunke och vispa tills det är pösigt.</li>
          <li>Häll sedan i Mixora bakmix i bunken och rör om lite. </li>
          <li>Därefter tillsätter du smöret och mjölken och vispar ihop allt till en slät smet.</li>
          <li>Häll smeten i din form.</li>
          <li>Grädda längst ner i ugnen i ca 38 min.</li>
        </ol>
      </div>
    </main>
  );
}