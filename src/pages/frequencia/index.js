import { useState } from "react";
import axios from "axios";

export default function Index() {
    const [frase , setFrase]= useState('');
    const [letra, setLetra]= useState('');
    const [resp, setResp] = useState ('');

    async function verificar() {
            const resposta = await  axios.get(`http://localhost:5000/dia2/fraqcaracter/${frase}/${letra}`)
            setResp(resposta.data.freq);
    }

    return (
        <main>
            <h1>Frequencia</h1>
        <div> 
            frase : <input type='text' value={frase} onChange={e => setFrase(e.target.value)}/>
        </div>
        <div>
            letra : <input type='text'  value={letra} onChange={e => setLetra(e.target.value)}/>
        </div>
        <div>
            <button onClick={verificar}>VERIFICAR</button> 
        </div>
        <div>
            reposta: {resp}
        </div>
        </main>

    )

}