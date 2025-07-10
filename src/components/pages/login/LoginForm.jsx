import { useState } from "react";
import {useNavigate } from "react-router"

export default function LoginForm() {

    const [name, setName] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`order/${name}`)
    }
    return (
        <>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <form action="submit" onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Entrez votre nom..." required/>
                <button>Accèdez à votre espace</button>
            </form>
        </>
    )
}