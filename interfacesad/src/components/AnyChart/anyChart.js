import React, {useState, useEffect} from 'react'
import AnyChart from 'anychart-react'
import '../Bootstrap/bootstrap.min.css'
import './style.css'
import api from "../../services/api"

export default function ResultChart (props){
    
    const [observation, setObservation] = useState('')
    const [opt, setOpt] = useState('')
    const [evaluate, setEvaluate] = useState('')
    const [result, setResult] = useState('')
    const { id } = props.match.params;

    const loadEvaluate = async () =>{
        const response = await api.get(`/avaliar/${id}/`)
        setEvaluate(response.data)
    }

    const loadResult = async () =>{
        const response = await api.get(`/resultado/`)
        setResult(response.data)
    }
    const alterhist= async () => {
        const response = await api.post(`/historico/`, {id,observation})
        console.log(id)
    }
      useEffect(() => {
        loadResult();
        loadEvaluate();
      }, [props]);
    return(
        <div className="row">
            <div className="col-sm-3">
            
            </div>
            <div className="col">
            <form onSubmit={ () => alterhist() }>
                <div className="form-group">
                <div className="col-12 col-sm-12">
                        <p id="txtMain">Analisando os dados dos conselhos de classes anteriores, o aluno <b>Carlos Eduardo Moreira Borges</b> possui o seguinte percentual de classificação:</p>
                    </div>
                <div className="col-12 col-sm-12" id="grafico">
                    <AnyChart
                        type="pie"
                        data={[["Defere",1-`${evaluate.porcentagem}`], ["Indefere",`${evaluate.porcentagem}`]]}
                        title=""
                        width={250}
                        height={250}
                    />
                    <br/>
                </div>
                    <div className="col-12 col-sm-12">
                        <label for="exampleFormControlTextarea1">
                        <b>Observação:</b>
                        </label>
                        <textarea descricao={null} name="observacao"className="col-12"
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        onChange={e => setObservation(e.target.value)}
                        />
                    </div>
                    <div className="col-12 col-sm-12">
                        <label for="exampleFormControlTextarea1">
                            <b>Resultado Final:</b>
                        </label>
                        <select className="form-control" id="finalResult" defaultValue={opt} onChange={e => setOpt(e.target.value)}>
                            {evaluate.classe == 0 ? 
                            <>
                            <option value='Indeferido' name="indeferido">Indefere</option> 
                            <option value='Deferido' name="deferido">Defere</option>
                            </>
                            :
                            <> 
                            <option value='Deferido' name="deferido">Defere</option>
                            <option value='Indeferido' name="indeferido">Indefere</option> 
                            </>                                                                                   }
                        </select>
                    </div>
                    <div className="col-12 col-sm-12" id="divSalvar">
                        <button  type="submit" className="btn btn-primary" id="btnSalvar">Salvar</button>
                    </div>
                </div>
            </form>
            </div>
            
            <div className="col-3">
            
            </div>
        </div>
    )
      
}
