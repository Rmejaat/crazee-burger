import { Link } from "react-router";

export default function OrderPage({name, setName}) {
    return (
        <div>
            <h1>Bienvenue {name}</h1>
            <Link to="/" onClick={()=> setName("")}><button>Déconnexion</button></Link>
        </div>
    )
}