import {useNavigate } from "react-router"

export default function LoginForm({name, setName}) {

    
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/order")
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