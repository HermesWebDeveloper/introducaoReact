import { useState } from "react"

function FormularioPesquisa () {
    
    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        var nome = event.target.name;
        var value = event.target.value;
        setInputs(inputs => ({...inputs, [nome]: value}));
    }

    const exibir = (event) => {
        event.preventDefault();
        alert(JSON.stringify(inputs, null, 2));
    }

    return (
        <>
            <h1>Pesquisa Pública</h1>
            <form onSubmit={exibir}>
                <label>Nome: </label>
                <input type="text" id="inputNome" name="nome" value={inputs.nome || ""} onChange={handleChange}
                ></input>

                <label>Idade: </label>
                <input type="number" id="inputIdade" name="idade" value={inputs.idade || ""} onChange={handleChange}></input>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default FormularioPesquisa