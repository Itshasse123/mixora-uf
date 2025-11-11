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

      <h1 className="text-4xl font-bold mb-8 text-center">Kanelkakor</h1>

      <div className="bg-white/10 p-6 rounded-lg border border-white/20 backdrop-blur-md">
        <h2 className="text-2xl font-semibold mb-4">Ingredienser</h2>
        <ul className="space-y-1 text-lg">
          <li>100 g smör</li>
          <li>2.5 dl socker</li>
          <li>2 ägg</li>
          <li>1.5 dl vetemjöl</li>
          <li>4 msk kakao</li>
          <li>1 tsk vaniljsocker</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Gör så här</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Sätt ugnen på 175°C.</li>
          <li>Smält smöret.</li>
          <li>Vispa ihop socker och ägg i en bunke.</li>
          <li>Rör ner smör och torra ingredienser.</li>
          <li>Häll smeten i form.</li>
          <li>Grädda ca 20 minuter för kladdig konsistens.</li>
        </ol>
      </div>
    </main>
  );
}