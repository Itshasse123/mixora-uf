import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Kladdkaka() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const key = params.get("key");

  // ✅ Blockera om ingen eller fel key
  if (key !== "mixorauf000kladdcookie") {
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

      <h1 className="text-4xl font-bold mb-8 text-center">Kladdkaka Recept</h1>

      <div className="bg-white/10 p-6 rounded-lg border border-white/20 backdrop-blur-md">
        <h2 className="text-2xl font-semibold mb-4">Ingredienser</h2>
        <ul className="space-y-1 text-lg">
          <li>100 g smör </li>
          <li>2 ägg</li>
          <li>Ev ströbröd</li>
          <li>Kladdkakemixen</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Gör så här</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Sätt på ugnen på 200 °C.</li>
          <li>Smörj och bröa en form med löstagbar kant, ca 24 cm i diameter (en vanlig kladdkakeform) eller spänn fast ett bakplåtspapper på botten.</li>
          <li>Smält smöret och låt det svalna lite.</li>
          <li>Häll sedan Mixora bakmix i en bunke och bland i två ägg så gott det går. (Om du vill ha en lite fluffigare kaka kan du vispa äggen för sig innan du blandar i dem med bakmixen)</li>
          <li>Tillsätt sedan i smöret och blanda försiktigt tills det blir en jämn smet och häll över det i formen.</li>
          <li>Grädda mitt i ugnen i ca 12 min (Här kan du variera tiden beroende på hur kladdig du vill ha din kladdkaka).</li>
          <li>Mixora rekommenderar att sikta lite florsocker uppe på kakan samt att den ska serveras med grädde. </li>
        </ol>
      </div>
    </main>
  );
}