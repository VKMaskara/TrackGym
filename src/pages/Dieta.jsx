import Card from "../components/Card"; // Certifique-se de que o caminho está correto

export default function Dieta() {
  return (
    <Card variant="success" padding="small" hover>
      <Card.Header>
        <div>
          <h3 style={{ margin: 0 }}>Almoço</h3>
          <span style={{ fontSize: '0.8rem', color: '#888' }}>12:30 - 13:30</span>
        </div>
        <span>🥗</span>
      </Card.Header>

      <Card.Body>
        <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
          <li>Arroz integral (150g)</li>
          <li>Frango grelhado (120g)</li>
          <li>Salada à vontade</li>
        </ul>
      </Card.Body>

      <Card.Footer>
        <strong>Total: 450 kcal</strong>
        <span>Macro: 35g P | 50g C</span>
      </Card.Footer>
    </Card>
  );
}