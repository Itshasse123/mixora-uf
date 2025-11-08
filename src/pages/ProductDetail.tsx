import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NavigationMenu } from "@/components/NavigationMenu";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import productChocolate from "@/assets/product-chocolate.jpg";
import productVanilla from "@/assets/product-vanilla.jpg";
import productStarter from "@/assets/product-starter.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const products = [
    {
      id: 1,
      name: "Kladdkaka",
      slug: "brookie",
      description: "Allt du behöver för en perfekt Kladdkaka",
      price: "79 kr",
      image: productChocolate,
      longDescription:
        "En klassiker som alltid går hem! Vår kladdkaka är enkel att baka, men ändå lika härligt chokladig varje gång. Perfekt när du vill ha något gott snabbt mjuk, kladdig och helt oemotståndlig. Idealisk till fika, kalas eller bara när suget slår till!",
      ingredients: [
        "kakao",
        "Vetemjöl",
        "Strösocker",
        "Vaniljsocker",
        "Salt",
      ],
      instructions: [
        "Värm ugnen till 175°C",
        "Blanda torrvaror i en skål",
        "Smält chokladen och blanda med smör",
        "Tillsätt ägg och vanilj",
        "Blanda samman alla ingredienser",
        "Häll i form och strö över extra chokladchips",
        "Grädda i 25-30 minuter",
        "Låt svalna innan servering",
      ],
      nutritionalInfo: {
        kalorier: "172 kcal per portion",
        protein: "2g",
        fett: "8g",
        kolhydrater: "25g",
      },
      tips: [
        "Servera ljummen med vaniljglass",
        "Förvara i lufttät burk i upp till 5 dagar",
        "Kan frysas i upp till 3 månader",
        "Variera med vita chokladchips för variation",
      ],
    },
    {
      id: 2,
      name: "Kanelbulle kaka",
      slug: "kanelbulle-kaka",
      description: "Klassiska ingredienser för ljuvliga vaniljbakverk.",
      price: "99 kr",
      image: productVanilla,
      longDescription:
        "Vår Kanelbulle kaka tar den klassiska svenska fikafavoriten till nya höjder. En saftig kaka med härlig kaneldoft och smak.",
      ingredients: [
        "Vetemjöl",
        "Farinsocker",
        "Kanel",
        "Kardemumma",
        "Bakpulver",
        "Salt",
        "Vaniljsocker",
      ],
      instructions: [
        "Värm ugnen till 180°C",
        "Smält smöret och låt svalna",
        "Vispa ägg och socker pösigt",
        "Blanda torrvaror i en separat skål",
        "Vänd ner torrvarorna i äggsmeten",
        "Häll hälften av smeten i form",
        "Lägg på kanelfyllning",
        "Täck med resten av smeten",
        "Grädda i 35-40 minuter",
        "Pensla med smör och strö pärlsocker",
      ],
      nutritionalInfo: {
        kalorier: "244 kcal per portion",
        protein: "4g",
        fett: "10g",
        kolhydrater: "35g",
      },
      tips: [
        "Servera med kaffe eller mjölk",
        "Extra god med cream cheese frosting",
        "Perfekt som dessert eller frukost",
        "Doftar underbart i hela huset!",
      ],
    },
    {
      id: 3,
      name: "Pepparkakssockerkaka",
      slug: "mjuk-pepparkaka",
      description: "Det perfekta paketet för nybörjare och proffs.",
      price: "99 kr",
      image: productStarter,
      longDescription:
        "Våra mjuka pepparkakor är perfekta för helger och högtider. Kryddiga, saftiga och oemotståndligt goda året runt!",
      ingredients: [
        "Vetemjöl",
        "Strösocker",
        "Pepparkakskrydda",
        "Kanel",
      ],
      instructions: [
        "Värm ugnen till 175°C",
        "Värm sirap, honung och smör tills smöret smält",
        "Låt svalna något",
        "Blanda torrvaror och kryddor",
        "Tillsätt ägg och grädde i sirapsblandningen",
        "Vänd ner torrvarorna",
        "Rör till en slät smet",
        "Häll i form",
        "Grädda i 30-35 minuter",
        "Låt svalna helt innan servering",
      ],
      nutritionalInfo: {
        kalorier: "258 kcal per portion",
        protein: "3g",
        fett: "10g",
        kolhydrater: "37g",
      },
      tips: [
        "Godast efter 1-2 dagar när kryddorna satt sig",
        "Servera med vispgrädde",
        "Perfekt att frysa in i bitar",
        "Toppa med glasyr eller pudra över florsocker",
      ],
    },
  ];

  const product = products.find((p) => p.id === Number(id) || p.slug === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <NavigationMenu />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Produkten hittades inte</h1>
          <Button onClick={() => navigate("/")}>Tillbaka till startsidan</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavigationMenu />

      <div className="container mx-auto px-4 pt-20 pb-8 max-w-6xl">
        <Button variant="ghost" onClick={() => navigate("/")} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Tillbaka till produkter
        </Button>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-muted-foreground mb-6">{product.longDescription}</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-primary">{product.price}</span>
            </div>
          </div>
        </div>

        <Card className="shadow-xl">
          <CardContent className="p-6">
            <Tabs defaultValue="ingredients" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="ingredients">Ingredienser</TabsTrigger>
                <TabsTrigger value="nutrition">Näringsvärden</TabsTrigger>
       
              </TabsList>

              <TabsContent value="ingredients" className="mt-6">
                <h3 className="text-2xl font-semibold mb-4">Ingredienser</h3>
                <ul className="space-y-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent value="nutrition" className="mt-6">
                <h3 className="text-2xl font-semibold mb-4">Näringsvärden per portion</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Kalorier</p>
                    <p className="text-xl font-semibold">{product.nutritionalInfo.kalorier}</p>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Protein</p>
                    <p className="text-xl font-semibold">{product.nutritionalInfo.protein}</p>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Fett</p>
                    <p className="text-xl font-semibold">{product.nutritionalInfo.fett}</p>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Kolhydrater</p>
                    <p className="text-xl font-semibold">{product.nutritionalInfo.kolhydrater}</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
