import Card from '../components/Card';

function Dashboard() {
  const handleStart = () => console.log("Iniciando treino...");

  return (
    <div style={{ backgroundColor: '#121212', padding: '20px' }}>
      
      <Card 
        variant="primary" 
        hover 
        clickable 
        onClick={handleStart}
      >
        <Card.Header>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.8rem', color: '#00e5ff' }}>ATIVO AGORA</span>
            <h3 style={{ margin: 0 }}>Treino A - Peito e Tríceps</h3>
          </div>
          <button style={{ background: 'none', border: 'none', color: '#fff' }}>
            ⋮
          </button>
        </Card.Header>

        <Card.Body>
          <p style={{ color: '#ccc' }}>
            Você já completou <strong>3 de 6</strong> exercícios de hoje.
          </p>
          {/* Aqui poderia entrar um componente de Barra de Progresso */}
          <div style={{ height: '8px', background: '#333', borderRadius: '4px' }}>
            <div style={{ width: '50%', height: '100%', background: '#00e5ff', borderRadius: '4px' }} />
          </div>
        </Card.Body>

        <Card.Footer>
          <span>🔥 340 kcal estimadas</span>
          <span>⏱️ 45 min</span>
        </Card.Footer>
      </Card>

    </div>
  );
}
export default Dashboard;