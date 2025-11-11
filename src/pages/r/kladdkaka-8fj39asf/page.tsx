export default function Page() {
  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Kladdkaka Recept</h1>
      <p><strong>Ingredienser:</strong></p>
      <ul>
        <li>100g smör</li>
        <li>2.5dl socker</li>
        <li>2 ägg</li>
        <li>1.5dl mjöl</li>
        <li>4 msk kakao</li>
        <li>1 tsk vaniljsocker</li>
      </ul>

      <p><strong>Gör så här:</strong></p>
      <ol>
        <li>Sätt ugnen på 175°C.</li>
        <li>Smält smör och vispa ihop socker + ägg.</li>
        <li>Blanda alla ingredienser. Häll i form.</li>
        <li>Grädda 20 minuter. Färdig.</li>
      </ol>
    </div>
  );
}