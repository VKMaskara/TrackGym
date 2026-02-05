import "../styles/layouts/Navbar.css";
import Button from "./Button";
import logo from "../assets/img/icon-log.png";


export default function Navbar({ pagina, setPagina }) {
    return (
        <nav className="navbar-container">
            <div className="logo-navbar">
                <img src={logo} alt="Logo" />
            </div>

            <div className="logo-text">
                <h1>
                    Track<span>Gym</span>
                </h1>
            </div>

            <div className="navbar-actions">

                <Button
                    text="Treinos"
                    variant="secondary"
                    onClick={() => setPagina("treino")}

                />

                <Button 
                text="Dieta"
                 variant="secondary"
                 onClick={() => setPagina("dieta")}
                 />

                <Button 
                text="Histórico" 
                variant="secondary"
                onClick={() => setPagina("historico")} 
                />

                <Button 
                text="Dashboard" 
                variant="secondary"
                onClick={() => setPagina("dashboard")} 
                />
            </div>
        </nav>
    );
}
