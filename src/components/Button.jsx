import "../styles/layouts/Button.css"; // CONFIRME SE A PASTA É 'layouts' OU 'components'

export default function Button({ text, variant = "primary", onClick }) {
  return (
    <button 
      className={`btnTrackGym ${variant}`} 
      onClick={onClick}
    >
      {text || "Botão"}
    </button>
  );
}