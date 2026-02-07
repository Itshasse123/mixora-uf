import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Lakritskolakakor() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const key = params.get("key");

  // ✅ Blockera om ingen eller fel key
  if (key !== "mixorauf000lakritskolakakor") {
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

      <h1 className="text-4xl font-bold mb-8 text-center">Lakritskolakakor</h1>

      <div className="bg-white/10 p-6 rounded-lg border border-white/20 backdrop-blur-md">
        <h2 className="text-2xl font-semibold mb-4">Ingredienser</h2>
        <ul className="space-y-1 text-lg">
          <li>200 g smör</li>
          <li>1 msk ljus sirap</li>
          <li>Lakritskolakakmixen</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Gör så här</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Sätt ugnen på 200 °C och lägg bakplåtspapper på en plåt.</li>
          <li>Blanda Mixora bakmix med rumstempererat smör och sirap till en jämn deg.</li>
          <li>Dela degen i tre lika stora delar och rulla dem till längder och lägg dem på plåten.</li>
          <li>Grädda i nedre delen av ugnen i ca 15 min.</li>
          <li>Låt kakorna svalna någon minut (så att de fortfarande är varma och mjuka) innan du delar dem på diagonalen till bitar i den storlek du tycker passar.</li>
        </ol>
      </div>
    </main>
  );
}