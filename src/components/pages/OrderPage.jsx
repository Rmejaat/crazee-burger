import { Link, useParams } from "react-router";

export default function OrderPage() {

    const {username} = useParams();

    return (
        <div>
            <h1>Bienvenue {username}</h1>
            <Link to="/"><button>Déconnexion</button></Link>
        </div>
    )
}