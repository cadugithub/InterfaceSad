import React, {useState} from 'react'
import AnyChart from 'anychart-react'
import '../Bootstrap/bootstrap.min.css'
import './style.css'
export default function ResultChart (props){
    
    const [text, setText] = useState('')
    const [opt, setOpt] = useState('')
    
    console.log()
    
    return(
        <div className="row">
            <div className="col-sm-3">
            
            </div>
            <div className="col">
            <form>
                <div className="form-group">
                <div className="col-12 col-sm-12">
                        <p id="txtPrincipal">Analisando os dados de concelhos de classes anteriores, o aluno <u>Carlos Eduardo Moreira Borges</u> possui o seguinte percentual de classificação:</p>
                    </div>
                <div className="col-12 col-sm-12" id="grafico">
                    <AnyChart
                        type="pie"
                        data={[["Deferido",0.3], ["Indeferido",0.7]]}
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
                        onChange={e => setText(e.target.value)}
                        />
                    </div>
                    <div className="col-12 col-sm-12">
                        <label for="exampleFormControlTextarea1">
                            <b>Resultado Final:</b>
                        </label>
                        <select className="form-control" id="finalResult" defaultValue={opt} onChange={e => setOpt(e.target.value)}>
                            <option></option>
                            <option value='Deferido' name="deferido">Deferido</option>
                            <option value='Indeferido' name="indeferido">Indeferido</option>
                        </select>
                    </div>
                    <div className="col-12 col-sm-12" id="divSalvar">
                        <button  type="button" className="btn btn-primary" id="btnSalvar">Salvar</button>
                    </div>
                </div>
            </form>
            </div>
            
            <div className="col-3">
            
            </div>
        </div>
    )
      
}
