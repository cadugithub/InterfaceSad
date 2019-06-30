import React from 'react'
import AnyChart from 'anychart-react'
import '../Bootstrap/bootstrap.min.css'
import './style.css'
export default function ResultChart (){
    
    return(
        <div className="row">
            <div className="col-sm-3">
            
            </div>
            <div className="col">
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
                    <textarea className="col-12"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    />
                </div>
                <div className="col-12 col-sm-12">
                    <label for="exampleFormControlTextarea1">
                        <b>Resultado Final:</b>
                    </label>
                    <select className="form-control" id="finalResult">
                        <option></option>
                        <option>Deferido</option>
                        <option>Indeferido</option>
                    </select>
                </div>
                <div className="col-12 col-sm-12" id="divSalvar">
                    <button  type="button" className="btn btn-primary" id="btnSalvar">Salvar</button>
                </div>
            </div>
            </div>
            <div className="col-3">
            
            </div>
        </div>
    )
      
}
