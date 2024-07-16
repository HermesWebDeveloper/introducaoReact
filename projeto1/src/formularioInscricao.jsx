import { useState } from "react"

function FormularioInscricao () {

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")

    const exibir = (event) => {
        event.preventDefault();
        alert(`Nome: ${nome} e idade: ${idade}`)
    }

    return (
        <>
            <h1>Formulário de Inscrição</h1>
            <p><i>Congresso de Jovens 2024</i></p>
            <form onSubmit={exibir}>
                <label htmlFor="inputNome">Nome do Participante: </label>
                <input type="text" id="inputNome" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                <label htmlFor="inputIdade">Idade: </label>
                <input type="number" id="inputIdade" value={idade} onChange={(e) => setIdade(e.target.value)}></input>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default FormularioInscricao