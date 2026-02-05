import Treinos from "./pages/Treinos";
import Dashboard from "./pages/Dashboard"
import Historico from "./pages/Historico";
import Dieta from "./pages/Dieta";
import Navbar from "./components/Navbar"
import { load, save } from "./storage/localStorage";
import { useState, useEffect } from "react";

export default function App() {
  const [pagina, setPagina] = useState(() => {
    return load("trackgym:pagina") || 'treinos'
  })

  useEffect(() => {
    save("trackgym:pagina", pagina);
  }, [pagina]);


  function renderPage() {
    if (pagina === "treinos") return <Treinos />;
    if (pagina === "dieta") return <Dieta />;
    if (pagina === "historico") return <Historico />;
    if (pagina === 'dashboard') return <Dashboard />
    return <Treinos />;
  }



  return (

    <div className="contaoner-geral">
      <Navbar pagina={pagina} setPagina={setPagina} />
      <main className="app-content">{renderPage()}</main>
    </div>
  );
}