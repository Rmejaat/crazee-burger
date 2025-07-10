import { useState } from "react"

export default function LoginForm() {

    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Bienvenue ${name} !`)
        setName("")
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