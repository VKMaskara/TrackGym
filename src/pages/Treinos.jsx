import Card from "../components/Card";

const ExemploTreino = () => {
  const handleStartWorkout = () => {
    console.log("Iniciando cronômetro do treino...");
  };

  return (
    <Card 
      variant="primary" 
      hover 
      clickable 
      onClick={handleStartWorkout}
    >
      <Card.Header>
        <div>
          <span style={{ color: "var(--tg-primary-neon)", fontSize: "0.75rem" }}>
            PRÓXIMO TREINO
          </span>
          <h3 style={{ margin: 0 }}>Treino A: Peito e Tríceps</h3>
        </div>
        <span style={{ fontSize: "1.2rem" }}>💪</span>
      </Card.Header>

      <Card.Body>
        <p><strong>6 exercícios</strong> planejados para hoje.</p>
        <p style={{ color: "#888", fontSize: "0.9rem" }}>
          Foco em hipertrofia e cadência controlada.
        </p>
      </Card.Body>

      <Card.Footer>
        <span>⏱️ Est. 55 min</span>
        <span>🔥 ~400 kcal</span>
      </Card.Footer>
    </Card>
  );
};

export default ExemploTreino;