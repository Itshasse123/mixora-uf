import swishqr from "@/assets/Swish.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"; // ✅ Importera Button
import { ArrowLeft } from "lucide-react"; // ✅ Importera ikonen

export default function Support() {
  const navigate = useNavigate(); // ✅ Måste läggas in här

  return (
    <main className="max-w-4xl mx-auto py-20 px-4 text-center">

      {/* 🔙 Tillbaka-knapp */}
      <Button
        size="lg"
        variant="outline"
        className="fixed top-4 right-4 z-50 shadow-lg bg-[#4B2A1A] text-white hover:bg-[#3d2215]"
        onClick={() => navigate("/")}
        aria-label="Tillbaka till startsidan"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Tillbaka
      </Button>

      <h1 className="text-4xl font-bold mb-6">Supporta Oss</h1>
      <p className="text-lg text-gray-700 mb-8">
        Vill du stötta vårt UF-företag? Varje bidrag hjälper oss växa och fortsätta utveckla Mixora! 💛
      </p>

      <div className="bg-white/10 rounded-lg p-6 border border-white/20 backdrop-blur-md">
        <h2 className="text-2xl font-semibold mb-4">Swish</h2>
        <p className="text-lg mb-2">Swisha valfritt belopp till:</p>
        <p className="text-3xl font-bold mb-6">123 531 73 67</p>

        <img
          src={swishqr}
          alt="Swish QR"
          className="w-48 mx-auto rounded-lg shadow-lg"
        />
      </div>
    </main>
  );
}