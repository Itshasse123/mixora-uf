import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function () {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const key = params.get("key");

  // ✅ Blockera om ingen eller fel key
  if (key !== "mixorauf000kanelcookie") {
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

      <h1 className="text-4xl font-bold mb-8 text-center">Kanelbullekaka recept</h1>

      <div className="bg-white/10 p-6 rounded-lg border border-white/20 backdrop-blur-md">
        <h2 className="text-2xl font-semibold mb-4">Ingredienser</h2>
        <ul className="space-y-1 text-lg">
          <li>200 g smör</li>
          <li>2 ägg</li>
          <li>Kanelbullekakmixen</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Gör så här</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Sätt på ugnen på 175 °C och lägg bakplåtspapper på två plåtar.</li>
          <li>Smält 200 g smör och låt det svalna lite.</li>
          <li>När väl smöret har svalnat kan du hälla i Mixora bakmix i en bunke och blanda ner smöret.</li>
          <li>Knäck sedan i två ägg och rör om tills det blir en jämn, klibbig deg.</li>
          <li>Rulla små bollar (lite mindre än en pingisboll) och lägg dem på plåtarna med tolv på vardera plåt. Platta till dem lite på toppen..</li>
          <li>Mixora rekommenderar att strö lite pärlsocker uppe på var och en så att de blir lite finare och lite godare. </li>
          <li>Grädda mitt i ugnen i ca 10 min.</li>
        </ol>
      </div>
    </main>
  );
}